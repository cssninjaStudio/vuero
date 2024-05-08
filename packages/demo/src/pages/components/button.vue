<script setup lang="ts">
import { VButtonMeta, VButtonsMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VButton'
})

useHead({
  title: 'VButton - Components - Vuero',
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
          label: 'Buttons',
        },
        {
          label: 'VButton',
          to: '/components/button',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--VButton base-->
        <VButtonBaseDocumentation />

        <!--VButton link-->
        <VButtonLinkDocumentation />

        <!--VButton colors-->
        <VButtonColorsDocumentation />

        <!--VButton light colors-->
        <VButtonColorsLightDocumentation />

        <!--VButton outlined colors-->
        <VButtonColorsOutlinedDocumentation />

        <!--VButton placeload-->
        <VButtonPlaceloadDocumentation />

        <!--VButton Elevation-->
        <VButtonElevatedDocumentation />

        <!--VButton Disabled-->
        <VButtonDisabledDocumentation />

        <!--VButton Font Awesome-->
        <VButtonFaDocumentation />

        <!--VButton Feather-->
        <VButtonFeatherDocumentation />

        <!--VButton Group-->
        <VButtonGroupDocumentation />

        <!--VButton Addons-->
        <VButtonAddonsDocumentation />

        <DocumentationMeta
          name="VButton"
          :meta="VButtonMeta"
        />

        <DocumentationMeta
          name="VButtons"
          :meta="VButtonsMeta"
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
