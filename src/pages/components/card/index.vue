<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { popovers } from '/@src/data/users/userPopovers'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCard')

useHead({
  title: 'VCard - Components - Vuero',
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
          label: 'VCard',
          to: '/components/card/',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Basic Cards-->
        <CardBaseDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4">
            <VCard radius="smooth">
              <h3 class="title is-5 mb-2">I have smooth radius</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard>
              <h3 class="title is-5 mb-2">I have regular radius</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard radius="rounded">
              <h3 class="title is-5 mb-2">I have rounded radius</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
        </div>

        <!--Elevated Cards-->
        <CardElevatedDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4 mb-2">
            <VCard radius="smooth" elevated>
              <h3 class="title is-5 mb-2">Raised VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard elevated>
              <h3 class="title is-5 mb-2">Raised VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard radius="rounded" elevated>
              <h3 class="title is-5 mb-2">Raised VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
        </div>

        <!--Colored Cards-->
        <CardColorsDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4">
            <VCard radius="smooth" color="primary">
              <h3 class="title is-5 mb-2">Primary VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard color="secondary">
              <h3 class="title is-5 mb-2">Secondary VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard radius="rounded" color="info">
              <h3 class="title is-5 mb-2">Info VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard radius="smooth" color="success">
              <h3 class="title is-5 mb-2">Success VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard color="warning">
              <h3 class="title is-5 mb-2">Warning VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard radius="rounded" color="danger">
              <h3 class="title is-5 mb-2">Danger VCard</h3>
              <p>
                I can be used as is in any layout. VCards are simple containers that can
                hold any type of content.
              </p>
            </VCard>
          </div>
        </div>

        <!--Structured Cards-->
        <CardStructuredDocumentation />

        <div class="columns is-multiline mb-6">
          <div class="column is-4">
            <VCard radius="smooth" elevated>
              <div class="card-head">
                <VBlock
                  title="Greta K."
                  subtitle="Sales Manager"
                  center
                  class="no-margin"
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        picture="/demo/avatars/19.jpg"
                        badge="/images/icons/flags/germany.svg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user19" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>

                <UserCardDropdown />
              </div>

              <div class="card-inner">
                <p>
                  I can be used as is in any layout. VCards are simple containers that can
                  hold any type of content.
                </p>
              </div>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard elevated>
              <div class="card-head">
                <VBlock
                  title="Greta K."
                  subtitle="Sales Manager"
                  center
                  class="no-margin"
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        picture="/demo/avatars/19.jpg"
                        badge="/images/icons/flags/germany.svg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user19" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>

                <UserCardDropdown />
              </div>
              <div class="card-inner">
                <p>
                  I can be used as is in any layout. VCards are simple containers that can
                  hold any type of content.
                </p>
              </div>
            </VCard>
          </div>
          <div class="column is-4">
            <VCard radius="rounded" elevated>
              <div class="card-head">
                <VBlock
                  title="Greta K."
                  subtitle="Sales Manager"
                  center
                  class="no-margin"
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        picture="/demo/avatars/19.jpg"
                        badge="/images/icons/flags/germany.svg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user19" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>

                <UserCardDropdown />
              </div>
              <div class="card-inner">
                <p>
                  I can be used as is in any layout. VCards are simple containers that can
                  hold any type of content.
                </p>
              </div>
            </VCard>
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
</template>
