<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'

export type TocItem = {
  id: string
  title: string
  level: number
}

const stayFocus = useLocalStorage('disable-stay-focus', '')

const stayFocusEnabled = computed({
  get() {
    return stayFocus.value !== 'disabled'
  },
  set(value) {
    stayFocus.value = value ? '' : 'disabled'
  },
})

const props = withDefaults(
  defineProps<{
    toc?: TocItem[]
  }>(),
  {
    toc: () => [],
  }
)

const route = useRoute()
const router = useRouter()

const isActiveAnchor = computed(() => {
  return (id: string) => {
    if (`#${id}` === route.hash) {
      return true
    }
    return false
  }
})

const onTocClick = (id?: string) => {
  VueScrollTo.scrollTo(id ? `#${id}` : '#app', 500, { offset: -30 })
  router.replace({
    ...route,
    hash: `#${id}`,
  })
}

onMounted(() => {
  if (route.hash && !route.hash.startsWith('#&')) {
    VueScrollTo.scrollTo(route.hash, 0, { offset: -30 })
  } else {
    VueScrollTo.scrollTo('#app', 0, { offset: -30 })
  }
})
</script>

<template>
  <div class="toc">
    <strong class="toc-title">Contents</strong>
    <ul>
      <li v-for="item of props.toc" :key="item.id" :class="[`toc-level-${item.level}`]">
        <a
          :href="`#${item.id}`"
          :class="[isActiveAnchor(item.id) && 'is-active']"
          @click.prevent="() => onTocClick(item.id)"
          @keydown.space.prevent="() => onTocClick(item.id)"
        >
          {{ item.title }}
        </a>
      </li>
      <li>
        <a
          class="back-to-top"
          href="#"
          @click.prevent="() => onTocClick()"
          @keydown.space.prevent="() => onTocClick()"
        >
          <span>Back To Top</span>
        </a>
      </li>
      <li>
        <div class="stay-focus-mode">
          <label
            v-tooltip.rounded="'Blur the content when the mouse is over'"
            for="toggle-stay-focus"
            >Stay focus mode</label
          >

          <VField id="toggle-stay-focus" grouped>
            <VControl>
              <VSwitchSegment v-model="stayFocusEnabled" />
            </VControl>
          </VField>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.toc {
  position: fixed;
  display: block;
  padding-inline-start: 2rem;
  transition: opacity 0.3s ease;
  opacity: 0.6;

  &:hover,
  &:focus,
  &:focus-within {
    opacity: 1;
  }
}

.toc-title {
  font-family: var(--font-alt);
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--dark-text);
  padding-bottom: 4px;
  margin-bottom: 1.25rem;
  display: block;
}

ul {
  border-inline-start: 1px solid var(--fade-grey-dark-6);

  li {
    padding: 0.25rem 0;

    a {
      position: relative;
      inset-inline-start: -2px;
      font-family: var(--font);
      border-inline-start: 3px solid transparent;
      padding: 0.5rem 1.25rem;

      &.is-active {
        font-weight: 500;
        border-color: var(--primary);
      }
    }
  }
}

.toc-level-4 {
  padding-inline-start: 14px;

  + .toc-level-3 {
    padding-top: 4px;
  }
}

.toc-level-5 {
  padding-inline-start: 24px;
}

a {
  color: var(--light-text);

  &.is-active {
    color: var(--primary);
  }

  &:focus:not(.is-active),
  &:hover:not(.is-active) {
    color: var(--dark-text);
  }
}

.back-to-top {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.stay-focus-mode {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
}

.is-dark {
  .toc-title {
    color: var(--dark-dark-text);
  }

  ul {
    border-color: var(--dark-sidebar-light-22);
  }

  a {
    &:focus:not(.is-active),
    &:hover:not(.is-active) {
      color: var(--white);
    }
  }
}
</style>
