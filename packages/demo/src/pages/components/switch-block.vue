<script setup lang="ts">
import { VSwitchBlockMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VSwitchBlock'
})

useHead({
  title: 'VSwitchBlock - Switches Elements - Vuero',
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
          label: 'VSwitchBlock',
          to: '/components/switch-block',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Switch -->
      <SwitchBlockDocumentation />

      <!-- Thin Switch -->
      <SwitchBlockThinDocumentation />

      <!-- Switch Block -->
      <SwitchBlockLabelDocumentation />

      <!-- Switch Block Thin -->
      <SwitchBlockThinLabelDocumentation />

      <DocumentationMeta
        name="VSwitchBlock"
        :meta="VSwitchBlockMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
