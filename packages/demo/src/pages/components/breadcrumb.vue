<script setup lang="ts">
import { VBreadcrumbMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VBreadcrumb'
})

useHead({
  title: 'VBreadcrumb - Components - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
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

        <DocumentationMeta
          name="VBreadcrumb"
          :meta="VBreadcrumbMeta"
        />
      </div>
      <div
        v-if="toc.length"
        class="column is-3 toc-column"
      >
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
