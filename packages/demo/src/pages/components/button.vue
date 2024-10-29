<script setup lang="ts">
import { VButtonMeta, VButtonsMeta } from '/@src/data/documentation/components-meta'

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

    <DocumentationTocContainer>
      <!-- VButton base -->
      <VButtonBaseDocumentation />

      <!-- VButton link -->
      <VButtonLinkDocumentation />

      <!-- VButton colors -->
      <VButtonColorsDocumentation />

      <!-- VButton light colors -->
      <VButtonColorsLightDocumentation />

      <!-- VButton outlined colors -->
      <VButtonColorsOutlinedDocumentation />

      <!-- VButton placeload -->
      <VButtonPlaceloadDocumentation />

      <!-- VButton Elevation -->
      <VButtonElevatedDocumentation />

      <!-- VButton Disabled -->
      <VButtonDisabledDocumentation />

      <!-- VButton Font Awesome -->
      <VButtonFaDocumentation />

      <!-- VButton Feather -->
      <VButtonFeatherDocumentation />

      <!-- VButton Group -->
      <VButtonGroupDocumentation />

      <!-- VButton Addons -->
      <VButtonAddonsDocumentation />

      <DocumentationMeta
        name="VButton"
        :meta="VButtonMeta"
      />

      <DocumentationMeta
        name="VButtons"
        :meta="VButtonsMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
