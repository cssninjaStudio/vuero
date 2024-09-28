<script setup lang="ts">
import { VAnimatedCheckboxMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VAnimatedCheckbox'
})

useHead({
  title: 'VAnimatedCheckbox - Switches Elements - Vuero',
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
          label: 'VAnimatedCheckbox',
          to: '/components/animated-checkbox',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- @TODO -->
      <AnimatedCheckboxDocumentation />

      <DocumentationMeta
        name="VAnimatedCheckbox"
        :meta="VAnimatedCheckboxMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
