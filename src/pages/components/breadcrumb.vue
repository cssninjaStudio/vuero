<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VBreadcrumb')

useHead({
  title: 'VBreadcrumb - Components - Vuero',
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
          label: 'VBreadcrumb',
          to: '/components/breadcrumb',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Breadcrumb Default-->
        <BreadcrumbDefaultDocumentation />

        <!--Arrow Separator-->
        <BreadcrumbArrowDocumentation />

        <!--Bullet Separator-->
        <BreadcrumbBulletDocumentation />

        <!--Dot Separator-->
        <BreadcrumbDotDocumentation />

        <!--Succeeds Separator-->
        <BreadcrumbSucceedsDocumentation />

        <!--Props-->
        <BreadcrumbPropsDocumentation />

        <!--Slots-->
        <BreadcrumbSlotsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
