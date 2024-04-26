<script setup lang="ts">
import { VMessageMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

useVueroContext({
  pageTitle: 'VMessage',
})

useHead({
  title: 'VMessage - Elements - Vuero',
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
          label: 'VMessage',
          to: '/elements/message',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Message-->
        <VMessageBaseDocumentation />

        <!--Message Colors-->
        <VMessageColorsDocumentation />

        <DocumentationMeta
          name="VMessage"
          :meta="VMessageMeta"
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
