<script setup lang="ts">
import { VSnackMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VSnack'
})

useHead({
  title: 'VSnack - Components - Vuero',
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
          label: 'VSnack',
          to: '/components/snack',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- VSnack base -->
      <VSnackBaseDocumentation />

      <!-- VSnack white -->
      <VSnackWhiteDocumentation />

      <!-- VSnack feather -->
      <VSnackFeatherDocumentation />

      <!-- VSnack feather solid -->
      <VSnackFeatherSolidDocumentation />

      <!-- VSnack fa -->
      <VSnackFaDocumentation />

      <!-- VSnack fa solid -->
      <VSnackFaSolidDocumentation />

      <!-- VSnack line -->
      <VSnackLineDocumentation />

      <!-- VSnack line solid -->
      <VSnackLineSolidDocumentation />

      <!-- VSnack small image -->
      <VSnackSmallImageDocumentation />

      <!-- VSnack small icon -->
      <VSnackSmallIconDocumentation />

      <DocumentationMeta
        name="VSnack"
        :meta="VSnackMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
