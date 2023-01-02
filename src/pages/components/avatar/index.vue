<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VAvatar')

useHead({
  title: 'VAvatar - Components - Vuero',
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
          label: 'VAvatar',
          to: '/components/avatar/',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Avatar-->
        <AvatarDefaultDocumentation />

        <!--Avatar Square-->
        <AvatarSquareDocumentation />

        <!--Avatar Fallback-->
        <AvatarHandleFallbackDocumentation />

        <!--Avatar Dot-->
        <AvatarDotDocumentation />

        <!--Avatar Dot Squared-->
        <AvatarDotSquaredDocumentation />

        <!--Avatar Dot Colors-->
        <AvatarDotColorsDocumentation />

        <!--Avatar Badge-->
        <AvatarBadgeDocumentation />

        <!--Avatar Fake-->
        <AvatarFakeDocumentation />

        <!--Avatar Fake Squared-->
        <AvatarFakeSquareDocumentation />

        <!--Avatar Fake Badge-->
        <AvatarFakeBadgeDocumentation />

        <!--Avatar Fake Colors-->
        <AvatarFakeColorDocumentation />

        <!--Avatar Fake Squared Colors-->
        <AvatarFakeSquaredColorDocumentation />

        <!--Props-->
        <AvatarPropsDocumentation />

        <!--Slots-->
        <AvatarSlotsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
