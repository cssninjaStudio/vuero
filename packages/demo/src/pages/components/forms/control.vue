<script setup lang="ts">
import { VControlMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VControl'
})

const breadcrumb = [
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
    label: 'VControl',
    to: '/components/forms/control',
  },
]

useHead({
  title: 'VControl - Components - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="breadcrumb"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <VControlValidationDocumentation />
        <VControlValidationRoundedDocumentation />
        <VControlValidationVeeZodDocumentation>
          <template #example>
            <DocumentationDemoFormValidation />
          </template>
        </VControlValidationVeeZodDocumentation>

        <DocumentationMeta
          name="VControl"
          :meta="VControlMeta"
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
