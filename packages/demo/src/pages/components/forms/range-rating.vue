<script setup lang="ts">
import { VRangeRatingMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Rating'
})

useHead({
  title: 'VRangeRating - Forms Elements - Vuero',
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
          label: 'VRangeRating',
          to: '/components/forms/range-rating',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Rating button -->
      <RangeRatingBasicDocumentation />

      <RangeRatingMaxDocumentation />

      <RangeRatingLabelDocumentation />

      <RangeRatingReadonlyDocumentation />

      <RangeRatingSizesDocumentation />

      <RangeRatingCustomIconDocumentation />

      <DocumentationMeta
        name="VRangeRating"
        :meta="VRangeRatingMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
