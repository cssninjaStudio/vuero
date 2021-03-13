<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import useMakrdownToc from '/@src/composable/useMarkdownToc'
import { popovers } from '/@src/data/users/userPopovers'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Cards Basics - Elements - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('elements')"
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
        <h1 class="title is-4">Cards Basics</h1>
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
            label: 'Elements',
            to: { name: 'elements' },
          },
          {
            label: 'Cards Basics',
            to: { name: 'elements-cards-basic' },
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
              <div class="s-card demo-s-card">
                <h3 class="title is-5">Iam an S-Card</h3>
                <p>
                  I can be used as is in any layout. S Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="r-card demo-r-card">
                <h3 class="title is-5">Iam an R-Card</h3>
                <p>
                  I can be used as is in any layout. R Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="l-card demo-l-card">
                <h3 class="title is-5">Iam an L-Card</h3>
                <p>
                  I can be used as is in any layout. L Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
          </div>

          <!--Elevated Cards-->
          <CardElevatedDocumentation />

          <div class="columns is-multiline mb-6">
            <div class="column is-4">
              <div class="s-card is-raised demo-s-card">
                <h3 class="title is-5">Raised S-Card</h3>
                <p>
                  I can be used as is in any layout. S Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="r-card is-raised demo-r-card">
                <h3 class="title is-5">Raised R-Card</h3>
                <p>
                  I can be used as is in any layout. R Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="l-card is-raised demo-l-card">
                <h3 class="title is-5">Raised L-Card</h3>
                <p>
                  I can be used as is in any layout. L Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
          </div>

          <!--Colored Cards-->
          <CardColorsDocumentation />

          <div class="columns is-multiline mb-6">
            <div class="column is-4">
              <div class="s-card is-primary demo-s-card">
                <h3 class="title is-5">Primary S-Card</h3>
                <p>
                  I can be used as is in any layout. S Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="r-card is-secondary demo-r-card">
                <h3 class="title is-5">Secondary R-Card</h3>
                <p>
                  I can be used as is in any layout. R Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="l-card is-info demo-l-card">
                <h3 class="title is-5">Info L-Card</h3>
                <p>
                  I can be used as is in any layout. L Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="s-card is-success demo-s-card">
                <h3 class="title is-5">Success S-Card</h3>
                <p>
                  I can be used as is in any layout. S Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="r-card is-warning demo-r-card">
                <h3 class="title is-5">Warning R-Card</h3>
                <p>
                  I can be used as is in any layout. R Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
            <div class="column is-4">
              <div class="l-card is-danger demo-l-card">
                <h3 class="title is-5">Danger L-Card</h3>
                <p>
                  I can be used as is in any layout. L Cards are simple
                  containers that can hold any type of content.
                </p>
              </div>
            </div>
          </div>

          <!--Structured Cards-->
          <CardStructuredDocumentation />

          <div class="columns is-multiline">
            <div class="column is-4">
              <div class="s-card is-raised demo-s-card">
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
                          picture="/images/avatars/photos/19.jpg"
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
                    I can be used as is in any layout. L Cards are simple
                    containers that can hold any type of content.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="r-card is-raised demo-r-card">
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
                          picture="/images/avatars/photos/19.jpg"
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
                    I can be used as is in any layout. L Cards are simple
                    containers that can hold any type of content.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="l-card is-raised demo-l-card">
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
                          picture="/images/avatars/photos/19.jpg"
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
                    I can be used as is in any layout. L Cards are simple
                    containers that can hold any type of content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
