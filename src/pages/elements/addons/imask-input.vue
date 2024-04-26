<script setup lang="ts">
import { VIMaskInputMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

useVueroContext({
  pageTitle: 'VIMaskInput',
})

useHead({
  title: 'VIMaskInput - Addons - Vuero',
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
          label: 'Elements',
          to: '/elements/',
        },
        {
          label: 'Addons',
        },
        {
          label: 'VIMaskInput',
          to: '/elements/addons/imask-input',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <VImaskInputDocumentation />

        <DocumentationMeta
          name="VIMaskInput"
          :meta="VIMaskInputMeta"
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
