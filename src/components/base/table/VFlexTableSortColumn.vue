<script lang="ts">
import { h, defineComponent, computed } from 'vue'
import { RouterLink, useRoute, RouteLocationOptions } from 'vue-router'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: undefined,
    },
    modelValue: {
      type: String,
      default: undefined,
    },
    noRouter: {
      type: Boolean,
      default: undefined,
    },
    routerQueryKey: {
      type: String,
      default: 'sort',
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const route = useRoute()
    const rawSort = computed(
      () => props.modelValue ?? route.query[props.routerQueryKey] ?? ''
    )

    const isAsc = computed(() => rawSort.value === `${props.id}:asc`)
    const isDesc = computed(() => rawSort.value === `${props.id}:desc`)

    const nextSort = computed(() => {
      return isAsc.value
        ? `${props.id}:desc`
        : isDesc.value
        ? undefined
        : `${props.id}:asc`
    })

    const sortedLink = computed(() => {
      if (props.noRouter) {
        return {}
      }

      const query: any = {
        ...route.query,
      }

      if (props.routerQueryKey) {
        query[props.routerQueryKey] = nextSort.value
      }

      return {
        name: route.name,
        params: route.params,
        query: query,
      } as RouteLocationOptions
    })

    const handleLinkClick = (e: MouseEvent) => {
      context.emit('update:modelValue', nextSort.value)

      if (props.noRouter) {
        e.preventDefault()
        e.stopPropagation()

        return false
      }
    }

    return () => {
      const slotContent = context.slots?.default?.({
        isDesc: isDesc.value,
        isAsc: isAsc.value,
        nextSort: nextSort.value,
        value: rawSort.value,
      })

      const link = h(
        RouterLink,
        {
          to: sortedLink.value,
          onClick: handleLinkClick,
          onKeydown(e: KeyboardEvent) {
            if (e.code === 'Space') {
              e.preventDefault()
              e.stopPropagation()

              if (e.target instanceof HTMLAnchorElement) {
                e.target.dispatchEvent(new MouseEvent('click'))
              }
            }
          },
        },
        {
          default() {
            const icon = h(
              'span',
              { key: `${rawSort.value}`, class: 'is-inline' },
              h('span', {
                class: 'ml-3 iconify is-inline',
                'data-icon': isAsc.value
                  ? 'fa:sort-asc'
                  : isDesc.value
                  ? 'fa:sort-desc'
                  : 'fa:sort',
              })
            )

            return [slotContent ?? props.label, icon]
          },
        }
      )

      return h('span', {}, link)
    }
  },
})
</script>
