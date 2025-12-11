/**
 * WinUI3-style Components
 * Implements ComboBox, Toggle, and Expander components following Microsoft Fluent Design
 */

// Global state for ComboBox management
declare global {
  interface Window {
    __winuiComboboxController?: WinUIComboBoxController;
  }
}

/**
 * Controller to manage all ComboBox instances
 * Handles global events like scroll and click-outside to close popups
 */
class WinUIComboBoxController {
  private instances: Map<string, ComboBoxInstance> = new Map();
  private abortController: AbortController;
  private scrollThrottleTimer: number | null = null;

  constructor() {
    this.abortController = new AbortController();
    this.init();
  }

  private init(): void {
    const signal = this.abortController.signal;

    // Close all comboboxes on scroll
    window.addEventListener(
      "scroll",
      () => {
        if (this.scrollThrottleTimer) return;

        this.scrollThrottleTimer = window.setTimeout(() => {
          this.scrollThrottleTimer = null;
          this.closeAll();
        }, 50);
      },
      { passive: true, signal }
    );

    // Close all comboboxes on click outside
    document.addEventListener(
      "click",
      (e) => {
        const target = e.target as Node;
        let clickedInside = false;

        for (const instance of this.instances.values()) {
          if (
            instance.combobox.contains(target) ||
            instance.popup.contains(target)
          ) {
            clickedInside = true;
            break;
          }
        }

        if (!clickedInside) {
          this.closeAll();
        }
      },
      { signal }
    );

    // Close on escape key
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") {
          this.closeAll();
        }
      },
      { signal }
    );
  }

  public register(id: string, instance: ComboBoxInstance): void {
    this.instances.set(id, instance);
  }

  public unregister(id: string): void {
    this.instances.delete(id);
  }

  public closeAll(): void {
    for (const instance of this.instances.values()) {
      instance.close();
    }
  }

  public closeOthers(exceptId: string): void {
    for (const [id, instance] of this.instances) {
      if (id !== exceptId) {
        instance.close();
      }
    }
  }

  public destroy(): void {
    if (this.scrollThrottleTimer) {
      clearTimeout(this.scrollThrottleTimer);
    }
    this.abortController.abort();
    this.instances.clear();
  }
}

interface ComboBoxInstance {
  combobox: HTMLElement;
  popup: HTMLElement;
  close: () => void;
}

function getComboBoxController(): WinUIComboBoxController {
  if (!window.__winuiComboboxController) {
    window.__winuiComboboxController = new WinUIComboBoxController();
  }
  return window.__winuiComboboxController;
}

/**
 * Initialize a WinUI3-style ComboBox
 */
export function initWinUIComboBox(
  comboboxId: string,
  currentValue: string,
  onSelect: (value: string) => void,
  getDisplayText: (value: string) => string
): void {
  const combobox = document.getElementById(comboboxId);
  if (!combobox) return;

  if (combobox.dataset.initialized === "true") return;
  combobox.dataset.initialized = "true";

  const trigger = combobox.querySelector(
    ".winui-combobox-trigger"
  ) as HTMLButtonElement | null;
  const popup = combobox.querySelector(
    ".winui-combobox-popup"
  ) as HTMLElement | null;
  const valueDisplay = combobox.querySelector(".winui-combobox-value");

  if (!trigger || !popup || !valueDisplay) return;

  // Move popup to body to avoid overflow clipping
  document.body.appendChild(popup);
  popup.style.position = "fixed";

  // Set initial value
  combobox.dataset.value = currentValue;
  valueDisplay.textContent = getDisplayText(currentValue);

  // Update selected state
  const updateSelectedState = (selectedValue: string) => {
    popup.querySelectorAll(".winui-combobox-item").forEach((item) => {
      const itemValue = (item as HTMLElement).dataset.value;
      item.classList.toggle("selected", itemValue === selectedValue);
    });
  };
  updateSelectedState(currentValue);

  // Position popup
  const positionPopup = () => {
    const rect = trigger.getBoundingClientRect();
    popup.style.top = `${rect.bottom + 4}px`;
    popup.style.left = `${rect.left}px`;
    popup.style.minWidth = `${rect.width}px`;
  };

  const closeCombobox = () => {
    combobox.classList.remove("open");
    popup.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
  };

  const openCombobox = () => {
    // Close other comboboxes first
    getComboBoxController().closeOthers(comboboxId);

    positionPopup();
    combobox.classList.add("open");
    popup.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
  };

  // Register with controller
  getComboBoxController().register(comboboxId, {
    combobox,
    popup,
    close: closeCombobox,
  });

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (combobox.classList.contains("open")) {
      closeCombobox();
    } else {
      openCombobox();
    }
  });

  popup.addEventListener("click", (e) => {
    const item = (e.target as HTMLElement).closest(
      ".winui-combobox-item"
    ) as HTMLElement | null;
    if (!item) return;

    e.preventDefault();
    e.stopPropagation();

    const value = item.dataset.value;
    if (!value) return;

    combobox.dataset.value = value;
    valueDisplay.textContent = getDisplayText(value);
    updateSelectedState(value);
    closeCombobox();
    onSelect(value);
  });

  trigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      if (combobox.classList.contains("open")) {
        closeCombobox();
      } else {
        openCombobox();
      }
    } else if (e.key === "Escape") {
      closeCombobox();
    }
  });
}

/**
 * Initialize a WinUI3-style Toggle Switch
 */
export function initWinUIToggle(
  toggleId: string,
  initialState: boolean,
  onChange: (checked: boolean) => void
): void {
  const toggle = document.getElementById(toggleId);
  if (!toggle) return;

  // Set initial state
  toggle.setAttribute("aria-checked", String(initialState));

  // Handle click
  toggle.addEventListener("click", () => {
    const currentState = toggle.getAttribute("aria-checked") === "true";
    const newState = !currentState;
    toggle.setAttribute("aria-checked", String(newState));
    onChange(newState);
  });

  // Handle keyboard
  toggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const currentState = toggle.getAttribute("aria-checked") === "true";
      const newState = !currentState;
      toggle.setAttribute("aria-checked", String(newState));
      onChange(newState);
    }
  });
}

/**
 * Initialize a WinUI3-style Expander
 */
export function initWinUIExpander(expanderId: string): void {
  const expander = document.getElementById(expanderId);
  if (!expander) return;

  if (expander.dataset.initialized === "true") return;
  expander.dataset.initialized = "true";

  const header = expander.querySelector(
    ".winui-expander-header"
  ) as HTMLElement | null;
  if (!header) return;

  header.addEventListener("click", () => {
    const isOpen = expander.classList.contains("open");
    expander.classList.toggle("open", !isOpen);
    header.setAttribute("aria-expanded", String(!isOpen));
  });

  header.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const isOpen = expander.classList.contains("open");
      expander.classList.toggle("open", !isOpen);
      header.setAttribute("aria-expanded", String(!isOpen));
    }
  });
}

/**
 * Reset all WinUI components (useful for page transitions)
 */
export function resetWinUIComponents(): void {
  window.__winuiComboboxController?.destroy();
  window.__winuiComboboxController = undefined;
}
