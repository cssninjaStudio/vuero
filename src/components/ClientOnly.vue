<script lang="ts">
import type { SlotsType } from 'vue'

export default defineComponent({
  name: 'ClientOnly',
  slots: Object as SlotsType<{
    default: void
  }>,
  setup(_, { slots }) {
    const show = ref(false)
    onMounted(() => {
      show.value = true
    })

    return () => (show.value && slots.default ? slots.default() : null)
  },
})
</script>
