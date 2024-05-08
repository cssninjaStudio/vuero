<script setup lang="ts">
import type { RouteLocationOptions } from 'vue-router'

export interface VFlexPaginationProps {
  itemPerPage: number
  totalItems: number
  currentPage?: number
  maxLinksDisplayed?: number
  noRouter?: boolean
  routerQueryKey?: string
}

export interface VFlexPaginationEmits {
  (e: 'update:currentPage', currentPage: number): void
}

const emits = defineEmits<VFlexPaginationEmits>()
const props = withDefaults(defineProps<VFlexPaginationProps>(), {
  currentPage: 1,
  maxLinksDisplayed: 4,
  useRouter: true,
  routerQueryKey: 'page',
})

const route = useRoute()
const lastPage = computed(() => Math.ceil(props.totalItems / props.itemPerPage) || 1)
const totalPageDisplayed = computed(() =>
  lastPage.value > props.maxLinksDisplayed + 2
    ? props.maxLinksDisplayed + 2
    : lastPage.value,
)
const pages = computed(() => {
  const _pages = []
  let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2)
  let lastButton
    = firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2))

  if (firstButton < 1) {
    firstButton = 1
    lastButton = firstButton + (totalPageDisplayed.value - 1)
  }

  if (lastButton > lastPage.value) {
    lastButton = lastPage.value
    firstButton = lastButton - (totalPageDisplayed.value - 1)
  }

  for (let page = firstButton; page <= lastButton; page += 1) {
    if (page === firstButton || page === lastButton) {
      continue
    }

    _pages.push(page)
  }

  return _pages
})

const showLastLink = computed(() => lastPage.value > 1)

const paginatedLink = (page = 1) => {
  if (props.noRouter) {
    return {}
  }

  const _page = Math.max(1, Math.min(page, lastPage.value))
  const query: any = {
    ...route.query,
  }

  if (props.routerQueryKey) {
    query[props.routerQueryKey] = _page <= 1 ? undefined : _page
  }

  return {
    name: route.name,
    params: route.params,
    query,
  } as RouteLocationOptions
}
const handleLinkClick = (e: MouseEvent, page = 1) => {
  const _page = Math.max(1, Math.min(page, lastPage.value))
  emits('update:currentPage', _page)

  if (props.noRouter) {
    e.preventDefault()
    e.stopPropagation()

    return false
  }
}
</script>

<template>
  <VFlex
    role="navigation"
    class="flex-pagination pagination is-rounded"
    aria-label="pagination"
    justify-content="space-between"
  >
    <ul class="pagination-list">
      <slot name="before-pagination" />
      <li>
        <NuxtLink
          :to="paginatedLink(1)"
          tabindex="0"
          class="pagination-link"
          :class="[currentPage === 1 && 'is-current']"
          @keydown.enter.prevent="
            (e: MouseEvent) => (e.target as HTMLAnchorElement).click()
          "
          @click="(e: MouseEvent) => handleLinkClick(e, 1)"
        >
          1
        </NuxtLink>
      </li>

      <li v-if="showLastLink && (pages.length === 0 || pages[0] > 2)">
        <span class="pagination-ellipsis">…</span>
      </li>

      <li
        v-for="page in pages"
        :key="page"
      >
        <NuxtLink
          :to="paginatedLink(page)"
          tabindex="0"
          class="pagination-link"
          :aria-current="currentPage === page ? 'page' : undefined"
          :class="[currentPage === page && 'is-current']"
          @keydown.enter.prevent="
            (e: MouseEvent) => (e.target as HTMLAnchorElement).click()
          "
          @click="(e: MouseEvent) => handleLinkClick(e, page)"
        >
          {{ page }}
        </NuxtLink>
      </li>

      <li v-if="showLastLink && pages[pages.length - 1] < lastPage - 1">
        <span class="pagination-ellipsis">…</span>
      </li>

      <li v-if="showLastLink">
        <NuxtLink
          :to="paginatedLink(lastPage)"
          tabindex="0"
          class="pagination-link"
          :class="[currentPage === lastPage && 'is-current']"
          @keydown.enter.prevent="
            (e: MouseEvent) => (e.target as HTMLAnchorElement).click()
          "
          @click="(e: MouseEvent) => handleLinkClick(e, lastPage)"
        >
          {{ lastPage }}
        </NuxtLink>
      </li>
      <slot name="after-pagination" />
    </ul>

    <slot name="before-navigation" />
    <NuxtLink
      :to="paginatedLink(currentPage - 1)"
      tabindex="0"
      class="pagination-previous has-chevron"
      @keydown.enter.prevent="(e: MouseEvent) => (e.target as HTMLAnchorElement).click()"
      @click="(e: MouseEvent) => handleLinkClick(e, currentPage - 1)"
    >
      <VIcon icon="lucide:chevron-left" class="rtl-hidden" />
      <VIcon icon="lucide:chevron-right" class="ltr-hidden" />
    </NuxtLink>
    <NuxtLink
      :to="paginatedLink(currentPage + 1)"
      tabindex="0"
      class="pagination-next has-chevron"
      @keydown.enter.prevent="(e: MouseEvent) => (e.target as HTMLAnchorElement).click()"
      @click="(e: MouseEvent) => handleLinkClick(e, currentPage + 1)"
    >
      <VIcon icon="lucide:chevron-left" class="ltr-hidden" />
      <VIcon icon="lucide:chevron-right" class="rtl-hidden" />
    </NuxtLink>
    <slot name="after-navigation" />
  </VFlex>
</template>
