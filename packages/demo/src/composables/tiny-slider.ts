import type { TinySliderInstance, TinySliderSettings } from 'tiny-slider/src/tiny-slider'
import type { MaybeRefOrGetter } from 'vue'

export function useTinySlider(
  target: Ref<Element | undefined>,
  settings: MaybeRefOrGetter<Omit<TinySliderSettings, 'container'>> = {},
) {
  const slider = shallowRef<TinySliderInstance | null>(null)

  onMounted(async () => {
    if (target.value) {
      const { tns } = await import('tiny-slider/src/tiny-slider')

      slider.value = tns({
        container: target.value,
        ...toValue(settings),
      })
    }
  })

  onUnmounted(() => {
    if (slider.value) {
      slider.value.destroy()
    }
  })

  return {
    slider,
  }
}
