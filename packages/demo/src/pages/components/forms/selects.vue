<script setup lang="ts">
import { VSelectMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VSelect'
})

useHead({
  title: 'VSelect - Forms Elements - Vuero',
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
          label: 'VSelect',
          to: '/components/forms/selects',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Select-->
        <SelectBaseDocumentation />

        <!--Rounded Select-->
        <SelectRoundedDocumentation />

        <!--Font Awesome-->
        <SelectFaDocumentation />

        <!--Line Icons-->
        <SelectLineDocumentation />

        <!--Lucide Icons-->
        <SelectFeatherDocumentation />

        <!--Loading-->
        <SelectLoadingDocumentation />

        <!--Multiple-->
        <SelectMultipleDocumentation />

        <DocumentationMeta
          name="VSelect"
          :meta="VSelectMeta"
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
