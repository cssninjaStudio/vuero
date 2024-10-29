<script setup lang="ts">
import { VSwitchSegmentMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VSwitchSegment'
})

useHead({
  title: 'VSwitchSegment - Switches Elements - Vuero',
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
          label: 'VSwitchSegment',
          to: '/components/switch-segment',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Switch -->
      <SwitchSegmentDocumentation />

      <!-- Label -->
      <SwitchSegmentLabelDocumentation />

      <DocumentationMeta
        name="VSwitchSegment"
        :meta="VSwitchSegmentMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
