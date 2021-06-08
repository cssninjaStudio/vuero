<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { popovers } from '/@src/data/users/userPopovers'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'V-PlaceholderSection'
useHead({
  title: 'V-PlaceholderSection - Components - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <V-Breadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: { name: 'index' },
        },
        {
          label: 'Components',
          to: { name: 'components' },
        },
        {
          label: 'V-PlaceholderSection',
          to: { name: 'components-placeholder-section' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <div class="columns is-vcentered">
          <div class="column is-6">
            <V-Card>
              <V-PlaceholderSection
                title="You were invited"
                subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
              >
                <template #image>
                  <V-Avatar
                    picture="/demo/avatars/22.jpg"
                    badge="/images/icons/flags/united-states-of-america.svg"
                  />
                </template>
              </V-PlaceholderSection>
            </V-Card>
          </div>

          <div class="column is-6">
            <V-PlaceholderSection
              title="Go Premium"
              subtitle="Unlock more features and business tools by going premium"
            >
              <template #action>
                <V-Buttons align="centered">
                  <V-Button color="primary">View plans</V-Button>
                </V-Buttons>
              </template>
            </V-PlaceholderSection>
          </div>
        </div>

        <VPlaceholderSectionPropsDocumentation />

        <VPlaceholderSectionSlotsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
