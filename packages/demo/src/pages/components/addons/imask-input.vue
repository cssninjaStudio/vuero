<script setup lang="ts">
import { VIMaskInputMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VIMaskInput'
})

useHead({
  title: 'VIMaskInput - Addons - Vuero',
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
          label: 'VIMaskInput',
          to: '/components/addons/imask-input',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <VImaskInputDocumentation />

      <DocumentationMeta
        name="VIMaskInput"
        :meta="VIMaskInputMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
