<script setup lang="ts">
import { VRadioMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VRadio'
})

useHead({
  title: 'VRadio - Switches Elements - Vuero',
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
          label: 'Switches',
        },
        {
          label: 'VRadio',
          to: '/components/radio',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!-- @TODO -->
        <!--Outlined Radio-->
        <RadioOutlinedDocumentation />

        <!--Outlined Square Radio-->
        <RadioOutlinedSquareDocumentation />

        <!--Radio Solid-->
        <RadioSolidDocumentation />

        <!--Radio Solid Square-->
        <RadioSolidSquareDocumentation />

        <DocumentationMeta
          name="VRadio"
          :meta="VRadioMeta"
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
