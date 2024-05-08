<script setup lang="ts">
import { VTagMeta, VTagsMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VTag'
})

useHead({
  title: 'VTag - Components - Vuero',
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
          label: 'VTag',
          to: '/components/tag',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--VTag base-->
        <VTagBaseDocumentation />

        <!--VTag rounded-->
        <VTagRoundedDocumentation />

        <!--VTag curved-->
        <VTagCurvedDocumentation />

        <!--VTag Outlined-->
        <VTagOutlinedDocumentation />

        <!--VTag Elevated-->
        <VTagElevatedDocumentation />

        <!--VTag addons-->
        <VTagAddonsDocumentation />

        <!--VTag list-->
        <VTagListDocumentation />

        <DocumentationMeta
          name="VTag"
          :meta="VTagMeta"
        />
        <DocumentationMeta
          name="VTags"
          :meta="VTagsMeta"
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
