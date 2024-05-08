<script setup lang="ts">
const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'vueform/slider'
})

useHead({
  title: 'vueform/slider - Addons - Vuero',
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
          label: 'Addons',
        },
        {
          label: 'vueform/slider',
          to: '/components/addons/vueform-slider',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Simple slider-->
        <SliderBaseDocumentation />

        <!--Squared tooltip-->
        <SliderSquaredDocumentation />

        <!--Curved tooltip-->
        <SliderCurvedDocumentation />

        <!--Slider colors-->
        <SliderColorDocumentation />

        <!--Multiple sliders-->
        <SliderMultipleDocumentation />

        <!--Tooltip format-->
        <SliderFormatDocumentation />

        <!--Slider Mergin-->
        <SliderMergingDocumentation />

        <div class="pb-6 mb-6" />
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
