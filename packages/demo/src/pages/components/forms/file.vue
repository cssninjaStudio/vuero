<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'File Input'
})

useHead({
  title: 'File Input - Forms Elements - Vuero',
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
          label: 'Forms',
        },
        {
          label: 'File Input',
          to: '/components/forms/file',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- File input button -->
      <FileBaseDocumentation />

      <!-- File input boxed -->
      <FileBoxedDocumentation />

      <!-- File Left -->
      <FileLeftDocumentation />

      <!-- File Right -->
      <FileRightDocumentation />
    </DocumentationTocContainer>
  </div>
</template>
