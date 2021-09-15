<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'VBreadcrumb'
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
          to: { name: 'index' },
        },
        {
          label: 'Components',
          to: { name: 'components' },
        },
        {
          label: 'VBreadcrumb',
          to: { name: 'components-breadcrumb' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
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
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
