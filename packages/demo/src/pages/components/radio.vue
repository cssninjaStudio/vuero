<script setup lang="ts">
import { VRadioMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VRadio'
})

useHead({
  title: 'VRadio - Switches Elements - Vuero',
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
          label: 'Switches',
        },
        {
          label: 'VRadio',
          to: '/components/radio',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- @TODO -->
      <!-- Outlined Radio -->
      <RadioOutlinedDocumentation />

      <!-- Outlined Square Radio -->
      <RadioOutlinedSquareDocumentation />

      <!-- Radio Solid -->
      <RadioSolidDocumentation />

      <!-- Radio Solid Square -->
      <RadioSolidSquareDocumentation />

      <DocumentationMeta
        name="VRadio"
        :meta="VRadioMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
