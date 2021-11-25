<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouteLocationOptions } from 'vue-router'
import { useI18n } from 'vue-i18n'

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

const { t } = useI18n()
const route = useRoute()
const lastPage = computed(() => Math.ceil(props.totalItems / props.itemPerPage) || 1)
const totalPageDisplayed = computed(() =>
  lastPage.value > props.maxLinksDisplayed + 2
    ? props.maxLinksDisplayed + 2
    : lastPage.value
)
const pages = computed(() => {
  const _pages = []
  let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2)
  let lastButton =
    firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2))

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

<i18n lang="yaml">
de:
  goto-page-title: 'Gehe zu Seite {page}'
en:
  goto-page-title: 'Goto page {page}'
es-MX:
  goto-page-title: 'Ir a la página {page}'
es:
  goto-page-title: 'Ir a la página {page}'
fr-FR:
  goto-page-title: 'Aller à la page {page}'
zh-CN:
  goto-page-title: '转到第{page}页'
</i18n>

<template>
  <VFlex
    role="navigation"
    class="flex-pagination pagination is-rounded"
    aria-label="pagination"
    justify-content="space-between"
  >
    <ul class="pagination-list">
      <slot name="before-pagination"></slot>
      <li>
        <RouterLink
          :to="paginatedLink(1)"
          tabindex="0"
          class="pagination-link"
          :aria-label="t('goto-page-title', { page: 1 })"
          :class="[currentPage === 1 && 'is-current']"
          @keydown.space.prevent="(e) => (e.target as HTMLAnchorElement).click()"
          @click="(e) => handleLinkClick(e, 1)"
        >
          1
        </RouterLink>
      </li>

      <li v-if="showLastLink && (pages.length === 0 || pages[0] > 2)">
        <span class="pagination-ellipsis">…</span>
      </li>

      <li v-for="page in pages" :key="page">
        <RouterLink
          :to="paginatedLink(page)"
          tabindex="0"
          class="pagination-link"
          :aria-label="t('goto-page-title', { page: page })"
          :aria-current="currentPage === page ? 'page' : undefined"
          :class="[currentPage === page && 'is-current']"
          @keydown.space.prevent="(e) => (e.target as HTMLAnchorElement).click()"
          @click="(e) => handleLinkClick(e, page)"
        >
          {{ page }}
        </RouterLink>
      </li>

      <li v-if="showLastLink && pages[pages.length - 1] < lastPage - 1">
        <span class="pagination-ellipsis">…</span>
      </li>

      <li v-if="showLastLink">
        <RouterLink
          :to="paginatedLink(lastPage)"
          tabindex="0"
          class="pagination-link"
          :aria-label="t('goto-page-title', { page: lastPage })"
          :class="[currentPage === lastPage && 'is-current']"
          @keydown.space.prevent="(e) => (e.target as HTMLAnchorElement).click()"
          @click="(e) => handleLinkClick(e, lastPage)"
        >
          {{ lastPage }}
        </RouterLink>
      </li>
      <slot name="after-pagination"></slot>
    </ul>

    <slot name="before-navigation"></slot>
    <RouterLink
      :to="paginatedLink(currentPage - 1)"
      tabindex="0"
      class="pagination-previous has-chevron"
      @keydown.space.prevent="(e) => (e.target as HTMLAnchorElement).click()"
      @click="(e) => handleLinkClick(e, currentPage - 1)"
    >
      <i aria-hidden="true" class="iconify" data-icon="feather:chevron-left"></i>
    </RouterLink>
    <RouterLink
      :to="paginatedLink(currentPage + 1)"
      tabindex="0"
      class="pagination-next has-chevron"
      @keydown.space.prevent="(e) => (e.target as HTMLAnchorElement).click()"
      @click="(e) => handleLinkClick(e, currentPage + 1)"
    >
      <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
    </RouterLink>
    <slot name="after-navigation"></slot>
  </VFlex>
</template>
