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
  title: 'V-Card - Components - Vuero',
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
        <h1 class="title is-4">V-Card</h1>
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
            label: 'V-Card',
            to: { name: 'components-card' },
          },
        ]"
      />

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <!--Basic Cards-->
          <CardBaseDocumentation />

          <div class="columns is-multiline mb-6">
            <div class="column is-4">
              <V-Card radius="smooth">
                <h3 class="title is-5 mb-2">I have smooth radius</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card>
                <h3 class="title is-5 mb-2">I have regular radius</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card radius="rounded">
                <h3 class="title is-5 mb-2">I have rounded radius</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
          </div>

          <!--Elevated Cards-->
          <CardElevatedDocumentation />

          <div class="columns is-multiline mb-6">
            <div class="column is-4 mb-2">
              <V-Card radius="smooth" elevated>
                <h3 class="title is-5 mb-2">Raised V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card elevated>
                <h3 class="title is-5 mb-2">Raised V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card radius="rounded" elevated>
                <h3 class="title is-5 mb-2">Raised V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
          </div>

          <!--Colored Cards-->
          <CardColorsDocumentation />

          <div class="columns is-multiline mb-6">
            <div class="column is-4">
              <V-Card radius="smooth" color="primary">
                <h3 class="title is-5 mb-2">Primary V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card color="secondary">
                <h3 class="title is-5 mb-2">Secondary V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card radius="rounded" color="info">
                <h3 class="title is-5 mb-2">Info V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card radius="smooth" color="success">
                <h3 class="title is-5 mb-2">Success V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card color="warning">
                <h3 class="title is-5 mb-2">Warning V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card radius="rounded" color="danger">
                <h3 class="title is-5 mb-2">Danger V-Card</h3>
                <p>
                  I can be used as is in any layout. V-Cards are simple
                  containers that can hold any type of content.
                </p>
              </V-Card>
            </div>
          </div>

          <!--Structured Cards-->
          <CardStructuredDocumentation />

          <div class="columns is-multiline mb-6">
            <div class="column is-4">
              <V-Card radius="smooth" elevated>
                <div class="card-head">
                  <V-Block
                    title="Greta K."
                    subtitle="Sales Manager"
                    center
                    class="no-margin"
                  >
                    <template #icon>
                      <tippy
                        class="has-help-cursor"
                        interactive
                        :offset="[0, 10]"
                        placement="top-start"
                      >
                        <V-Avatar
                          picture="/demo/avatars/19.jpg"
                          badge="/images/icons/flags/germany.svg"
                        />
                        <template #content>
                          <UserPopoverContent :user="popovers.user19" />
                        </template>
                      </tippy>
                    </template>
                  </V-Block>

                  <UserCardDropdown />
                </div>

                <div class="card-inner">
                  <p>
                    I can be used as is in any layout. V-Cards are simple
                    containers that can hold any type of content.
                  </p>
                </div>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card elevated>
                <div class="card-head">
                  <V-Block
                    title="Greta K."
                    subtitle="Sales Manager"
                    center
                    class="no-margin"
                  >
                    <template #icon>
                      <tippy
                        class="has-help-cursor"
                        interactive
                        :offset="[0, 10]"
                        placement="top-start"
                      >
                        <V-Avatar
                          picture="/demo/avatars/19.jpg"
                          badge="/images/icons/flags/germany.svg"
                        />
                        <template #content>
                          <UserPopoverContent :user="popovers.user19" />
                        </template>
                      </tippy>
                    </template>
                  </V-Block>

                  <UserCardDropdown />
                </div>
                <div class="card-inner">
                  <p>
                    I can be used as is in any layout. V-Cards are simple
                    containers that can hold any type of content.
                  </p>
                </div>
              </V-Card>
            </div>
            <div class="column is-4">
              <V-Card radius="rounded" elevated>
                <div class="card-head">
                  <V-Block
                    title="Greta K."
                    subtitle="Sales Manager"
                    center
                    class="no-margin"
                  >
                    <template #icon>
                      <tippy
                        class="has-help-cursor"
                        interactive
                        :offset="[0, 10]"
                        placement="top-start"
                      >
                        <V-Avatar
                          picture="/demo/avatars/19.jpg"
                          badge="/images/icons/flags/germany.svg"
                        />
                        <template #content>
                          <UserPopoverContent :user="popovers.user19" />
                        </template>
                      </tippy>
                    </template>
                  </V-Block>

                  <UserCardDropdown />
                </div>
                <div class="card-inner">
                  <p>
                    I can be used as is in any layout. V-Cards are simple
                    containers that can hold any type of content.
                  </p>
                </div>
              </V-Card>
            </div>
          </div>

          <!--Props-->
          <CardPropsDocumentation />

          <!--Slots-->
          <CardSlotsDocumentation />
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
