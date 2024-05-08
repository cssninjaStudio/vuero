<script setup lang="ts">
import { VIconBoxMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VIconBox'
})

useHead({
  title: 'VIconBox - Components - Vuero',
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
          label: 'VIconBox',
          to: '/components/icon-box',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Icon Box-->
        <IconBoxDefaultDocumentation />

        <!--Box Colors-->
        <IconBoxColorsDocumentation />

        <!--Box Border-->
        <IconBoxSquaredBorderDocumentation />

        <!--Box Rounded-->
        <IconBoxRoundedDocumentation />

        <!--Box Colors-->
        <IconBoxRoundedBorderDocumentation />

        <!--Lucide Icons-->
        <IconBoxFeatherDocumentation />

        <!--Font Awesome-->
        <IconBoxFaDocumentation />

        <DocumentationMeta
          name="VIconBox"
          :meta="VIconBoxMeta"
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
