<script lang="ts">
import Vivus from 'vivus'

export default defineComponent({
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['ready'],
  setup(props, { emit }) {
    const element = shallowRef<HTMLElement>()

    watchEffect(() => {
      if (element.value) {
        // eslint-disable-next-line no-new
        new Vivus(element.value, props.options, (vivus: any) => {
          emit('ready', vivus)
        })
      }
    })

    return () => h('div', { ref: element, class: 'vivus-svg' })
  },
})
</script>
