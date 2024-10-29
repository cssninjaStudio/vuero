<script setup lang="ts">
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

    <DocumentationTocContainer class="is-multiline">
      <!-- Simple slider -->
      <SliderBaseDocumentation />

      <!-- Squared tooltip -->
      <SliderSquaredDocumentation />

      <!-- Curved tooltip -->
      <SliderCurvedDocumentation />

      <!-- Slider colors -->
      <SliderColorDocumentation />

      <!-- Multiple sliders -->
      <SliderMultipleDocumentation />

      <!-- Tooltip format -->
      <SliderFormatDocumentation />

      <!-- Slider Mergin -->
      <SliderMergingDocumentation />

      <div class="pb-6 mb-6" />
    </DocumentationTocContainer>
  </div>
</template>
