<script setup lang="ts">
import { VDropdownMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
// pageTitle.value = 'VDropdown'
onMounted(() => {
  pageTitle.value = 'VDropdown'
})

useHead({
  title: 'VDropdown - Components - Vuero',
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
          label: 'VDropdown',
          to: '/components/dropdown',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Dropdown -->
      <DropdownDocumentation />

      <!-- Dropdown -->
      <DropdownColorsDocumentation />

      <!-- Dropdown -->
      <DropdownButtonSlotDocumentation />

      <!-- Dropdown -->
      <DropdownButtonHoverDocumentation />

      <!-- Dropdown -->
      <DropdownModernDocumentation />

      <!-- Dropdown -->
      <DropdownWithIconsDocumentation />

      <!-- Dropdown -->
      <DropdownWithImagesDocumentation />

      <DocumentationMeta
        name="VDropdown"
        :meta="VDropdownMeta"
      />

      <!-- Artificial Spacing -->
      <div class="demo-spacer" />
    </DocumentationTocContainer>
  </div>
</template>
