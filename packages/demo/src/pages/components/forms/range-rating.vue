<script setup lang="ts">
import { VRangeRatingMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

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

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Rating button-->
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
      </div>
      <div
        v-if="toc.length"
        class="column is-3 toc-column"
      >
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
