<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { VFlexPaginationMeta } from '/@src/data/documentation/components-meta'

const route = useRoute()
const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  }
  catch {
    // discard
  }
  return 1
})

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VFlexPagination')

useHead({
  title: 'VFlexPagination - Components - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'VFlexPagination',
          to: '/components/pagination',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Flex Table-->
        <VFlexPaginationBaseDocumentation />

        <div class="mt-4">
          <VFlexPagination
            :item-per-page="8"
            :total-items="512"
            :current-page="currentPage"
          />
        </div>

        <div class="mt-4 mb-6">
          <VFlexPagination
            :item-per-page="8"
            :total-items="512"
            :current-page="currentPage"
            :max-links-displayed="6"
          />
        </div>

        <DocumentationMeta
          name="VFlexPagination"
          :meta="VFlexPaginationMeta"
        />
      </div>
    </div>
  </div>
</template>
