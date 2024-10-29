<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Tippy'
})

useHead({
  title: 'Tippy - Plugins - Vuero',
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
          label: 'Tippy',
          to: '/components/plugins/tippy',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <!-- Text Popover -->
      <PopoverBaseDocumentation />

      <!-- Popover Position -->
      <PopoverPositionDocumentation />

      <!-- Avatar Popover -->
      <PopoverAvatarDocumentation />

      <!-- Icon Popover -->
      <PopoverIconDocumentation />

      <!-- Profile Popover -->
      <PopoverComplexDocumentation />
    </DocumentationTocContainer>
  </div>
</template>
