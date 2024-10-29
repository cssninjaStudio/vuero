<script setup lang="ts">
import { VPlyrMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VPlyr'
})

useHead({
  title: 'VPlyr - Plugins - Vuero',
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
          label: 'Plugins',
        },
        {
          label: 'VPlyr',
          to: '/components/plugins/plyr',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <!-- 1:1 Video Player -->
      <VideoBaseDocumentation />

      <!-- 4:3 Video Player -->
      <VideoFourDocumentation />

      <!-- 16:9 Video Player -->
      <VideoSixteenDocumentation />

      <DocumentationMeta
        name="VPlyr"
        :meta="VPlyrMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
