<script lang="ts">
// Performance note:
// Previously we used a reactive `$:` to call setHue on every slider move,
// which wrote to localStorage and caused page-wide style recalculation.
// Now we:
// - Use requestAnimationFrame on `on:input` to preview via CSS variable only (no persistence)
// - Persist with setHue on `on:change` (when finger/mouse is released)
// This approach reduces main-thread work and keeps the drag interaction smooth.
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { getDefaultHue, getHue, setHue } from "@utils/setting-utils";

let panelEl: HTMLDivElement;

let hue = getHue();
const defaultHue = getDefaultHue();

function resetHue() {
	// Reset to default and persist immediately with a smooth transition
	hue = getDefaultHue();
	setHue(hue);
	const root = document.documentElement;
	root.classList.add("hue-transition");
	window.setTimeout(() => root.classList.remove("hue-transition"), 300);
}

// rAF-throttled preview updater (no localStorage writes during drag)
let raf = 0 as number | 0;
let pendingHue = hue;
function previewHue(next: number) {
	pendingHue = next;
	if (raf) return;
	raf = requestAnimationFrame(() => {
		// Only preview within the panel to avoid full-page reflow while dragging
		if (panelEl) {
			const h = String(pendingHue);
			panelEl.style.setProperty("--hue", h);
			// Also override commonly used derived vars for immediate visible feedback
			const isDark = document.documentElement.classList.contains("dark");
			panelEl.style.setProperty(
				"--primary",
				isDark ? `oklch(0.75 0.14 ${h})` : `oklch(0.70 0.14 ${h})`,
			);
			panelEl.style.setProperty(
				"--btn-content",
				isDark ? `oklch(0.75 0.1 ${h})` : `oklch(0.55 0.12 ${h})`,
			);
			panelEl.style.setProperty(
				"--btn-regular-bg",
				isDark ? `oklch(0.33 0.035 ${h})` : `oklch(0.95 0.025 ${h})`,
			);
			panelEl.style.setProperty(
				"--btn-regular-bg-hover",
				isDark ? `oklch(0.38 0.04 ${h})` : `oklch(0.9 0.05 ${h})`,
			);
			panelEl.style.setProperty(
				"--btn-regular-bg-active",
				isDark ? `oklch(0.43 0.045 ${h})` : `oklch(0.85 0.08 ${h})`,
			);
			// Float panel bg varies with hue only in dark mode; override anyway for consistency
			panelEl.style.setProperty(
				"--float-panel-bg",
				isDark ? `oklch(0.19 0.015 ${h})` : "white",
			);
		}
		raf = 0;
	});
}

function onSliderInput(e: Event) {
	const v = Number((e.currentTarget as HTMLInputElement).value);
	// hue is already bound, but read explicitly to be robust across Svelte versions
	previewHue(v);
}

function onSliderChange(e: Event) {
	const v = Number((e.currentTarget as HTMLInputElement).value);
	// Persist selection once user finishes interaction
	setHue(v);
	// Remove local override so panel inherits the new global hue
	if (panelEl) {
		panelEl.style.removeProperty("--hue");
		panelEl.style.removeProperty("--primary");
		panelEl.style.removeProperty("--btn-content");
		panelEl.style.removeProperty("--btn-regular-bg");
		panelEl.style.removeProperty("--btn-regular-bg-hover");
		panelEl.style.removeProperty("--btn-regular-bg-active");
		panelEl.style.removeProperty("--float-panel-bg");
	}
	// Add a short-lived global color transition for smoother apply
	const root = document.documentElement;
	root.classList.add("hue-transition");
	window.setTimeout(() => root.classList.remove("hue-transition"), 300);
}
</script>

<div id="display-setting" bind:this={panelEl} class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4">
    <div class="flex flex-row gap-2 mb-3 items-center justify-between">
        <div class="flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3
            before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)]
            before:absolute before:-left-3 before:top-[0.33rem]"
        >
            {i18n(I18nKey.themeColor)}
            <button aria-label="Reset to Default" class="btn-regular w-7 h-7 rounded-md  active:scale-90 will-change-transform"
                    class:opacity-0={hue === defaultHue} class:pointer-events-none={hue === defaultHue} on:click={resetHue}>
                <div class="text-[var(--btn-content)]">
                    <Icon icon="fa6-solid:arrow-rotate-left" class="text-[0.875rem]"></Icon>
                </div>
            </button>
        </div>
        <div class="flex gap-1">
            <div id="hueValue" class="transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center
            font-bold text-sm items-center text-[var(--btn-content)]">
                {hue}
            </div>
        </div>
    </div>
  <div class="w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none">
    <input aria-label={i18n(I18nKey.themeColor)} type="range" min="0" max="360" bind:value={hue}
         class="slider" id="colorSlider" step="5" style="width: 100%"
         on:input={onSliderInput} on:change={onSliderChange}>
  </div>
</div>


<style lang="stylus">
    :global(html.hue-transition), :global(html.hue-transition) *
      transition background-color .25s ease, color .25s ease, border-color .25s ease, fill .25s ease, stroke .25s ease

    #display-setting
      input[type="range"]
        -webkit-appearance none
        height 1.5rem
        background-image var(--color-selection-bar)
        transition background-image 0.15s ease-in-out

        /* Input Thumb */
        &::-webkit-slider-thumb
          -webkit-appearance none
          height 1rem
          width 0.5rem
          border-radius 0.125rem
          background rgba(255, 255, 255, 0.7)
          box-shadow none
          &:hover
            background rgba(255, 255, 255, 0.8)
          &:active
            background rgba(255, 255, 255, 0.6)

        &::-moz-range-thumb
          -webkit-appearance none
          height 1rem
          width 0.5rem
          border-radius 0.125rem
          border-width 0
          background rgba(255, 255, 255, 0.7)
          box-shadow none
          &:hover
            background rgba(255, 255, 255, 0.8)
          &:active
            background rgba(255, 255, 255, 0.6)

        &::-ms-thumb
          -webkit-appearance none
          height 1rem
          width 0.5rem
          border-radius 0.125rem
          background rgba(255, 255, 255, 0.7)
          box-shadow none
          &:hover
            background rgba(255, 255, 255, 0.8)
          &:active
            background rgba(255, 255, 255, 0.6)

</style>
