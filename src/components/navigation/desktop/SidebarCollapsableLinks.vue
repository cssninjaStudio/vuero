<script lang="ts">
import { ref, useSlots, h, defineComponent, Transition } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const slots = useSlots()
    const route = useRoute()
    const isOpen = ref(false)

    function toggle() {
      isOpen.value = !isOpen.value
    }
    const header = slots.header?.()
    const content = slots.default?.() ?? []
    const links = content.map((child) => {
      if (child.props?.to?.name && route.name === child.props.to.name) {
        isOpen.value = true
      }

      return h('li', {}, child)
    })

    return () => {
      const parentLink = h(
        'a',
        {
          tabindex: 0,
          class: 'parent-link',
          onClick: (e: MouseEvent) => {
            e.preventDefault()
            toggle()
          },
          onKeydown(e: KeyboardEvent) {
            if (e.code === 'Space') {
              e.preventDefault()
              e.stopPropagation()

              if (e.target instanceof HTMLAnchorElement) {
                e.target.dispatchEvent(new MouseEvent('click', { bubbles: true }))
              }
            }
          },
        },
        header
      )
      const collapseWrap = h('div', { class: 'collapse-wrap' }, parentLink)

      return h('li', { class: ['has-children', isOpen.value && 'active'] }, [
        collapseWrap,
        h(
          Transition,
          { name: 'fade-slow' },
          {
            default() {
              return isOpen.value ? h('ul', {}, links) : undefined
            },
          }
        ),
      ])
    }
  },
})
</script>
