<script lang="ts">
import type { PropType } from 'vue'
import { ref, computed, h, defineComponent, Transition } from 'vue'
import { useRoute } from 'vue-router'

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
  emits: ['update:open'],
  setup(props, { slots, emit }) {
    const route = useRoute()
    const isOpenDefault = ref(props.open === true)
    const hasNestedLinkActive = ref(false)
    const isOpen = computed({
      get: () => {
        if (props.collapseId === undefined) {
          return isOpenDefault.value
        }

        return props.collapseId === props.open
      },
      set: (value) => {
        if (props.collapseId === undefined) {
          isOpenDefault.value = value
        }

        if (props.collapseId === props.open) {
          emit('update:open')
        } else {
          emit('update:open', props.collapseId)
        }
      },
    })

    function toggle() {
      isOpen.value = !isOpen.value
    }
    const header = slots.header?.()
    const slotContent = slots.default?.() ?? []
    const currentRoute = route.name
    const links = slotContent.map((child) => {
      if (child.props?.to?.name && currentRoute === child.props.to.name) {
        hasNestedLinkActive.value = true
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

              toggle()
            }
          },
        },
        header
      )
      const collapseWrap = h('div', { class: 'collapse-wrap' }, parentLink)
      const content =
        hasNestedLinkActive.value || isOpen.value ? h('ul', {}, links) : undefined

      return h(
        'li',
        {
          class: [
            'collapse-links has-children',
            (hasNestedLinkActive.value || isOpen.value) && 'active',
          ],
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
            }
          ),
        ]
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
  transition: opacity 0.2s ease-in, transform 0.1s ease-in;
}

.collapse-links-transition-leave-active {
  transition: opacity 0.2s ease-out, transform 0.1s ease-out;
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
