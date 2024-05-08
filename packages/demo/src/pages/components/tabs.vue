<script setup lang="ts">
import { VTabsMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VTabs'
})

useHead({
  title: 'VTabs - Components - Vuero',
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
          label: 'VTabs',
          to: '/components/tabs',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--VTabs-->
        <TabsBaseDocumentation />

        <!--Centered Tabs-->
        <TabsCenteredDocumentation />

        <!--Right Tabs-->
        <TabsRightDocumentation />

        <!--Iconify Tabs-->
        <TabsIconifyDocumentation />

        <!--Boxed Tabs-->
        <TabsBoxedDocumentation />

        <!--Toggle Tabs-->
        <TabsToggleDocumentation />

        <!--Rounded Toggle Tabs-->
        <TabsRoundedDocumentation />

        <!--Slider Tabs 2x-->
        <TabsSliderDoubleDocumentation />

        <!--Square Slider Tabs 2x-->
        <TabsSliderDsquareDocumentation />

        <!--Slider Tabs 3x-->
        <TabsSliderTripleDocumentation />

        <!--Squared Slider Tabs 3x-->
        <TabsSliderTsquareDocumentation />

        <DocumentationMeta
          name="VTabs"
          :meta="VTabsMeta"
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
