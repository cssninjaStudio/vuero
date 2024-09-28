<script setup lang="ts">
import { VFilePondMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VFilePond'
})

useHead({
  title: 'VFilePond - Addons - Vuero',
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
          label: 'VFilePond',
          to: '/components/addons/filepond',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <VFilepondDocumentation />

      <DocumentationMeta
        name="VFilePond"
        :meta="VFilePondMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
