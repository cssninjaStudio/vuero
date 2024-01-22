<script lang="ts">
import { type PropType, type SlotsType, Transition, Fragment } from 'vue'

export default defineComponent({
  props: {
    open: {
      type: [Boolean, String] as PropType<boolean | string>,
      default: undefined,
    },
    collapseId: {
      type: String,
      default: undefined,
    },
  },
  slots: Object as SlotsType<{
    header: void
    default: void
  }>,
  emits: ['update:open'],
  setup(props, { slots, emit }) {
    const route = useRoute()
    const hasNestedLinkActive = ref(false)

    const slotContent = slots.default?.() ?? []
    const currentRoute = route.name
    slotContent.forEach((child) => {
      if (child.props?.to?.name && currentRoute === child.props.to.name) {
        hasNestedLinkActive.value = true
      }
    })
    const isOpen = ref(
      Boolean(
        hasNestedLinkActive.value
        || (typeof props.collapseId === 'string' && props.open === props.collapseId)
        || (typeof props.collapseId === 'undefined' && props.open === true),
      ),
    )

    function toggle() {
      if (typeof props.collapseId === 'string') {
        if (props.collapseId === props.open) {
          emit('update:open')
        }
        else {
          emit('update:open', props.collapseId)
        }
      }
      else {
        isOpen.value = !isOpen.value
      }
    }

    watch(
      () => props.open,
      (val) => {
        isOpen.value = Boolean(
          (typeof props.collapseId === 'string' && unref(val) === props.collapseId)
          || (typeof props.collapseId === 'undefined' && unref(val) === true),
        )
      },
    )

    return () => {
      const header = slots.header?.()
      const slotContent = slots.default?.() ?? []
      const links = [] as VNode[]

      for (const child of slotContent) {
        if (child.type === Fragment) {
          const children = child.children as VNode[]
          for (const child of children) {
            links.push(h('li', {}, child))
          }
        }
        else {
          links.push(h('li', {}, child))
        }
      }

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

              toggle()
            }
          },
        },
        header,
      )
      const collapseWrap = h('div', { class: 'collapse-wrap' }, parentLink)
      const content = isOpen.value ? h('ul', {}, links) : undefined

      return h(
        'li',
        {
          class: ['collapse-links has-children', isOpen.value && 'active'],
        },
        [
          collapseWrap,
          h(
            Transition,
            {
              name: 'collapse-links-transition',
              mode: 'out-in',
              class: 'collapse-content',
            },
            {
              default() {
                return content
              },
            },
          ),
        ],
      )
    }
  },
})
</script>

<style lang="scss" scoped>
.collapse-links {
  overflow: hidden;
  user-select: none;
}

.collapse-links-transition-enter-active,
.collapse-links-transition-leave-active {
  opacity: 1;
  transform: translateY(0) scaleY(1);
  transform-origin: center top;
}

.collapse-links-transition-enter-active {
  transition:
    opacity 0.2s ease-in,
    transform 0.1s ease-in;
}

.collapse-links-transition-leave-active {
  transition:
    opacity 0.2s ease-out,
    transform 0.1s ease-out;
}

.collapse-links-transition-enter-from,
.collapse-links-transition-leave-to {
  transform: translateY(-10px) scaleY(0.2);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .collapse-links-transition-enter-active,
  .collapse-links-transition-leave-active {
    transition: none;
  }
}
</style>
