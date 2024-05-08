<script setup lang="ts">
import { VBlockMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VBlock'
})

useHead({
  title: 'VBlock - Components - Vuero',
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
          label: 'VBlock',
          to: '/components/block',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--VBlock base-->
        <VBlockBaseDocumentation />

        <!--VBlock icon-->
        <VBlockIconDocumentation />

        <!--VBlock center-->
        <VBlockCenterDocumentation />

        <!--VBlock icon center-->
        <VBlockIconCenterDocumentation />

        <!--VBlock base responsive-->
        <VBlockBaseResponsiveDocumentation />

        <!--VBlock center responsive-->
        <VBlockCenterResponsiveDocumentation />

        <DocumentationMeta
          name="VBlock"
          :meta="VBlockMeta"
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
