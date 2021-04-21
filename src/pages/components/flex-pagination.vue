<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, onMounted } from 'vue'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'
import { flexRowsBasic } from '/@src/data/documentation/table'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  } catch {}
  return 1
})

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-FlexPagination - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">V-FlexPagination</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <V-Breadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: { name: 'index' },
          },
          {
            label: 'Components',
            to: { name: 'components' },
          },
          {
            label: 'V-FlexPagination',
            to: { name: 'components-flex-pagination' },
          },
        ]"
      />

      <div class="columns">
        <div class="column is-12">
          <!--Flex Table-->
          <VFlexPaginationBaseDocumentation />

          <div class="mt-4">
            <V-FlexPagination
              :item-per-page="8"
              :total-items="512"
              :current-page="currentPage"
            />
          </div>

          <div class="mt-4 mb-6">
            <V-FlexPagination
              :item-per-page="8"
              :total-items="512"
              :current-page="currentPage"
              :max-links-displayed="6"
            />
          </div>

          <!--Props-->
          <VFlexPaginationPropsDocumentation />
        </div>
      </div>
    </div>
  </div>
</template>
