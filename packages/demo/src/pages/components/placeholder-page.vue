<script setup lang="ts">
import { VPlaceholderPageMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VPlaceholderPage'
})

useHead({
  title: 'VPlaceholderPage - Components - Vuero',
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
          label: 'VPlaceholderPage',
          to: '/components/placeholder-page',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <VPlaceholderPage
        title="We couldn't find any matching results."
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/images/illustrations/placeholders/search-1.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/images/illustrations/placeholders/search-1-dark.svg"
            alt=""
          >
        </template>
        <template #action>
          <VButtons align="centered">
            <VButton>Go to the catalog</VButton>
            <VButton color="primary">
              Search everywhere
            </VButton>
          </VButtons>
        </template>
      </VPlaceholderPage>

      <div class="pt-6">
        <DocumentationMeta
          name="VPlaceholderPage"
          :meta="VPlaceholderPageMeta"
        />
      </div>
    </DocumentationTocContainer>
  </div>
</template>
