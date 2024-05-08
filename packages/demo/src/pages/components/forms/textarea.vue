<script setup lang="ts">
import { VTextareaMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VTextarea'
})

useHead({
  title: 'VTextarea - Forms Elements - Vuero',
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
          label: 'VTextarea',
          to: '/components/forms/textarea',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Textarea-->
        <TextareaBaseDocumentation />

        <!--Textarea Focus-->
        <TextareaFocusDocumentation />

        <!--Textarea loading-->
        <TextareaLoadingDocumentation />

        <!--Textarea disabled-->
        <TextareaDisabledDocumentation />

        <!--Textarea Addon-->
        <TextareaAddonDocumentation />

        <DocumentationMeta
          name="VTextarea"
          :meta="VTextareaMeta"
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
