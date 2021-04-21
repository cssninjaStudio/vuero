<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import useMakrdownToc from '/@src/composable/useMarkdownToc'
import { popovers } from '/@src/data/users/userPopovers'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-CardAction - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">V-CardAction</h1>
      </div>

      <Toolbar />
    </div>

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
            label: 'V-CardAction',
            to: { name: 'components-card-action' },
          },
        ]"
      />

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <VCardActionDocumentation />

          <div class="columns is-multiline mb-6">
            <div class="column is-4">
              <V-CardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
              >
                <template #action>
                  <V-Tag color="green" label="trending" rounded />
                </template>
              </V-CardAction>
            </div>
            <div class="column is-4">
              <V-CardAction
                avatar="/demo/avatars/18.jpg"
                badge="/images/icons/flags/united-states-of-america.svg"
                title="George W."
                subtitle="Software Engineer"
              >
                <template #action>
                  <V-IconButton icon="feather:heart" circle />
                </template>
              </V-CardAction>
            </div>
            <div class="column is-4">
              <V-CardAction
                avatar="/demo/avatars/22.jpg"
                badge="/images/icons/flags/france.svg"
                title="Sandrine C."
                subtitle="HR Manager"
                radius="rounded"
              >
                <template #action>
                  <WidgetDropdown />
                </template>
              </V-CardAction>
            </div>
          </div>

          <VCardActionContentDocumentation />

          <div class="columns is-multiline mb-6">
            <div class="column is-4">
              <V-CardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
              >
                <template #action>
                  <V-Tag color="green" label="trending" rounded />
                </template>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </div>
            <div class="column is-4">
              <V-CardAction
                avatar="/demo/avatars/18.jpg"
                badge="/images/icons/flags/united-states-of-america.svg"
                title="George W."
                subtitle="Software Engineer"
              >
                <template #action>
                  <V-Action>View</V-Action>
                </template>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </div>
            <div class="column is-4">
              <V-CardAction
                avatar="/demo/avatars/22.jpg"
                badge="/images/icons/flags/france.svg"
                title="Sandrine C."
                subtitle="HR Manager"
                radius="rounded"
              >
                <template #action>
                  <WidgetDropdown />
                </template>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </div>
          </div>
          <!--Props-->
          <VCardActionPropsDocumentation />
          <!--Slots-->
          <VCardActionSlotsDocumentation />
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
