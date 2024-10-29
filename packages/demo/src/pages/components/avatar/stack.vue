<script setup lang="ts">
import { VAvatarStackMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VAvatarStack'
})

useHead({
  title: 'VAvatarStack - Components - Vuero',
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
          label: 'VAvatarStack',
          to: '/components/avatar/stack',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Small Stack -->
      <AvatarStackSmallDocumentation />

      <!-- Regular Stack -->
      <AvatarStackRegularDocumentation />

      <!-- Medium Stack -->
      <AvatarStackMediumDocumentation />

      <DocumentationMeta
        name="VAvatarStack"
        :meta="VAvatarStackMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
