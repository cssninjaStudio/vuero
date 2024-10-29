<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Content'
})

useHead({
  title: 'Content - Components - Vuero',
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
          label: 'Content',
          to: '/components/content',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Typography -->
      <ContentUnorderedListsDocumentation />

      <!-- Typography -->
      <ContentOrderedListsDocumentation />

      <!-- Typography -->
      <ContentTitlesDocumentation />

      <!-- Typography -->
      <ContentSubtitlesDocumentation />

      <!-- Typography -->
      <ContentBlockquotesDocumentation />

      <!-- Typography -->
      <ContentDividersDocumentation />

      <!-- Typography -->
      <ContentTablesDocumentation />
    </DocumentationTocContainer>
  </div>
</template>
