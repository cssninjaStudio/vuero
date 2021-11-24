<script lang="ts">
import { h, defineComponent, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute()
    const isAsc = computed(() => route.query?.sort === `${props.id}:asc`)
    const isDesc = computed(() => route.query?.sort === `${props.id}:desc`)

    const sort = computed(() => {
      return isAsc.value
        ? `${props.id}:desc`
        : isDesc.value
        ? undefined
        : `${props.id}:asc`
    })

    return () =>
      h(
        RouterLink,
        {
          to: {
            ...route,
            query: {
              ...route.query,
              sort: sort.value,
            },
          },
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
              { key: `${route.query.sort}`, class: 'is-inline' },
              h('span', {
                class: 'iconify is-inline',
                'data-icon': isAsc.value
                  ? 'fa:sort-asc'
                  : isDesc.value
                  ? 'fa:sort-desc'
                  : 'fa:sort',
              })
            )

            return [props.label, icon]
          },
        }
      )
  },
})
</script>
