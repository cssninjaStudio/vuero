<script setup lang="ts">
import { VBreadcrumbMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VBreadcrumb'
})

useHead({
  title: 'VBreadcrumb - Components - Vuero',
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
          label: 'VBreadcrumb',
          to: '/components/breadcrumb',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Breadcrumb Default -->
      <BreadcrumbDefaultDocumentation />

      <!-- Arrow Separator -->
      <BreadcrumbArrowDocumentation />

      <!-- Bullet Separator -->
      <BreadcrumbBulletDocumentation />

      <!-- Dot Separator -->
      <BreadcrumbDotDocumentation />

      <!-- Succeeds Separator -->
      <BreadcrumbSucceedsDocumentation />

      <DocumentationMeta
        name="VBreadcrumb"
        :meta="VBreadcrumbMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
