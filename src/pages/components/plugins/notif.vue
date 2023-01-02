<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useNotyf } from '/@src/composable/useNotyf'
import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const notyf = useNotyf()

onMounted(() => {
  notyf.success('This toast is displayed when the page is mounted')
})

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('notyf')

useHead({
  title: 'Notyf - Plugins - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'Plugins',
        },
        {
          label: 'Notif',
          to: '/components/plugins/notif',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Success Toast-->
        <NotyfSuccessDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.success('Success Toast')"> Success Toast </VButton>
        </div>

        <!--Error Toast-->
        <NotyfErrorDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.error('Error Toast')"> Error Toast </VButton>
        </div>

        <!--Info Toast-->
        <NotyfInfoDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.info('Info Toast')">Info Toast</VButton>
        </div>

        <!--Warning Toast-->
        <NotyfWarningDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.warning('Warning Toast')"> Warning Toast </VButton>
        </div>

        <!--Primary Toast-->
        <NotyfPrimaryDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.primary('Primary Toast')"> Primary Toast </VButton>
        </div>

        <!--Purple Toast-->
        <NotyfPurpleDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.purple('Purple Toast')"> Purple Toast </VButton>
        </div>

        <!--Blue Toast-->
        <NotyfBlueDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.blue('Blue Toast')">Blue Toast</VButton>
        </div>

        <!--Green Toast-->
        <NotyfGreenDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.green('Green Toast')"> Green Toast </VButton>
        </div>

        <!--Orange Toast-->
        <NotyfOrangeDocumentation />

        <div class="buttons mb-6">
          <VButton bold @click="notyf.orange('Orange Toast')"> Orange Toast </VButton>
        </div>
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
