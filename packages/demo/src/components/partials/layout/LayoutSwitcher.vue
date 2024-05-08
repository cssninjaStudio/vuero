<script setup lang="ts">
import { kebabCase } from 'scule'

defineOptions({
  inheritAttrs: false,
})

const layoutSwitcher = useLayoutSwitcher()
const isModalOpen = ref(false)

const selectedSlug = computed(() => {
  switch (layoutSwitcher.dynamicLayoutId) {
    case 'navsearch-fixed':
    case 'navsearch-fixed-fade':
    case 'navsearch-reveal':
    case 'navsearch-shrink':
      return 'search'
    case 'navbar-default':
    case 'navbar-fade':
    case 'navbar-colored':
      return 'navbar'
    case 'sideblock-default':
    case 'sideblock-color':
    case 'sideblock-color-curved':
    case 'sideblock-curved':
      return 'sideblock'
    default:
      return 'sidebar'
  }
})

const layoutComponent = (slug?: string) => {
  switch (slug) {
    case 'search':
      return 'NavsearchLayout'
    case 'sidebar':
      return 'SidebarLayout'
    case 'sideblock':
      return 'SideblockLayout'
    case 'navbar':
    default:
      return 'NavbarLayout'
  }
}

const componentCode = computed(() => {
  let code = `<${layoutComponent(selectedSlug.value)}`
  let propSet = false

  for (const [key, value] of Object.entries(layoutSwitcher.dynamicLayoutProps)) {
    if (key === 'key') continue
    if (!value) continue
    if (value === 'default') continue

    propSet = true
    code += `\n  ${kebabCase(key)}="${value}"`
  }

  code += propSet ? `\n>` : '>'

  code += `\n  <slot />`
  code += `\n</${layoutComponent(selectedSlug.value)}>`

  return code
})
const codeLines = computed(() => componentCode.value.split('\n').length)
</script>

<template>
  <div>
    <a
      aria-label="Open layout switcher"
      class="icon-link"
      tabindex="0"
      v-bind="$attrs"
      role="button"
      @keydown.enter.prevent="isModalOpen = true"
      @click.passive="isModalOpen = true"
    >
      <VIcon
        class="sidebar-svg"
        icon="lucide:paintbrush"
      />
    </a>
    <VModal
      :open="isModalOpen"
      title="Select Layout"
      class="layout-switcher-modal-wrapper"
      size="big"
      actions="right"
      noscroll
      tabs
      @close="isModalOpen = false"
    >
      <template #content>
        <div class="switcher-modal-content">
          <div class="layout-size">
            <VField
              label="Content size"
            >
              <VControl class="has-icons-left" icon="lucide:unfold-horizontal">
                <VSelect v-model="layoutSwitcher.contentSize" @update:model-value="isModalOpen = false">
                  <VOption value="default">
                    Default
                  </VOption>
                  <VOption value="large">
                    Large
                  </VOption>
                  <VOption value="wide">
                    Wide
                  </VOption>
                  <VOption value="full">
                    Full
                  </VOption>
                </VSelect>
              </VControl>
            </VField>

            <VField
              label="Use this layout"
            >
              <VControl>
                <VTextarea
                  :model-value="componentCode"
                  :rows="codeLines"
                  readonly
                  class="font-mono"
                />
              </VControl>
            </VField>

            <DocumentationColor color="primary" />
          </div>
          <VTabs
            v-model:selected="selectedSlug"
            :tabs="[
              { label: 'Navbar', value: 'navbar' },
              {
                label: 'Navsearch',
                value: 'search',
              },
              { label: 'Sidebar', value: 'sidebar' },
              { label: 'Sideblock', value: 'sideblock' },
            ]"
          >
            <template #tab="{ activeValue }">
              <div>
                <div class="has-slimscroll layout-selector">
                  <Transition
                    name="fade-fast"
                    mode="out-in"
                  >
                    <div
                      v-if="activeValue === 'navbar'"
                      class="columns is-multiline is-half-mobile-p"
                    >
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.navbarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'navbar-default' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navbar-default')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navbar-default')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-7.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-7-dark.svg"
                            alt=""
                          >
                          <h3>Default theme</h3>
                          <p>Top nav with categories</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.navbarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'navbar-fade' && 'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navbar-fade')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navbar-fade')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-8.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-8-dark.svg"
                            alt=""
                          >
                          <h3>Fade theme</h3>
                          <p>Transparent top nav</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.navbarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'navbar-colored' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navbar-colored')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navbar-colored')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-9.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-9-dark.svg"
                            alt=""
                          >
                          <h3>Colored theme</h3>
                          <p>Colored top nav</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                    </div>
                    <div
                      v-else-if="activeValue === 'search'"
                      class="columns is-multiline is-half-mobile-p"
                    >
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.navbarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'navsearch-fixed' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navsearch-fixed')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navsearch-fixed')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-10.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-10-dark.svg"
                            alt=""
                          >
                          <h3>Default theme</h3>
                          <p>Clean top nav variation</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.navbarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'navsearch-fixed-fade' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navsearch-fixed-fade')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navsearch-fixed-fade')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-11.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-11-dark.svg"
                            alt=""
                          >
                          <h3>Fade theme</h3>
                          <p>Transparent variation</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.navbarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'navsearch-shrink' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navsearch-shrink')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navsearch-shrink')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-12.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-12-dark.svg"
                            alt=""
                          >
                          <h3>Shrink behavior</h3>
                          <p>Only display search when on top</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>

                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.navbarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'navsearch-reveal' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navsearch-reveal')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('navsearch-reveal')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-12.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-12-dark.svg"
                            alt=""
                          >
                          <h3>Reveal behavior</h3>
                          <p>Only display search scrolling up</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                    </div>
                    <div
                      v-else-if="activeValue === 'sidebar'"
                      class="columns is-multiline is-half-mobile-p"
                    >
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'sidebar-default' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-default')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-default')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-1.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-1-dark.svg"
                            alt=""
                          >
                          <h3>Default theme</h3>
                          <p>The good old default sidebar</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'sidebar-color' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-color')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-color')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-2.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-2-dark.svg"
                            alt=""
                          >
                          <h3>Colored theme</h3>
                          <p>Colored variation of sidebar</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'sidebar-curved' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-curved')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-curved')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-3.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-3-dark.svg"
                            alt=""
                          >
                          <h3>Curved theme</h3>
                          <p>Sidebar with curved edges</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'sidebar-color-curved' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-color-curved')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-color-curved')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-4.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-4-dark.svg"
                            alt=""
                          >
                          <h3>Curved theme</h3>
                          <p>Curved edges with color</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'sidebar-labels' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-labels')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-labels')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-5.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-5-dark.svg"
                            alt=""
                          >
                          <h3>Sidebar Labels</h3>
                          <p>Default labels displayed</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'sidebar-labels-hover' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-labels-hover')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-labels-hover')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-5.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-5-dark.svg"
                            alt=""
                          >
                          <h3>Hover Labels</h3>
                          <p>Labels displayed on hover</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.dynamicLayoutId === 'sidebar-float' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-float')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sidebar-float')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-6.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-6-dark.svg"
                            alt=""
                          >
                          <h3>Floating Sidebar</h3>
                          <p>Floating rounded variation</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                    </div>
                    <div
                      v-else-if="activeValue === 'sideblock'"
                      class="columns is-multiline is-half-mobile-p"
                    >
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.isSidebarRoute &&
                              layoutSwitcher.dynamicLayoutId === 'sideblock-default' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sideblock-default')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sideblock-default')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-13.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-13-dark.svg"
                            alt=""
                          >
                          <h3>Default Sideblock</h3>
                          <p>The good old default sideblock</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.isSidebarRoute &&
                              layoutSwitcher.dynamicLayoutId === 'sideblock-color' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sideblock-color')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sideblock-color')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-15.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-15-dark.svg"
                            alt=""
                          >
                          <h3>Colored Sideblock</h3>
                          <p>Colored variation of sideblock</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.isSidebarRoute &&
                              layoutSwitcher.dynamicLayoutId === 'sideblock-curved' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sideblock-curved')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sideblock-curved')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-14.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-14-dark.svg"
                            alt=""
                          >
                          <h3>Curved Sideblock</h3>
                          <p>Sideblock with curved edges</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                      <div class="column is-6">
                        <VLink
                          :to="layoutSwitcher.sidebarLayoutLink"
                          class="layout-item"
                          :class="[
                            layoutSwitcher.isSidebarRoute &&
                              layoutSwitcher.dynamicLayoutId === 'sideblock-color-curved' &&
                              'is-active',
                          ]"
                          @keydown.enter.prevent="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sideblock-color-curved')
                              isModalOpen = false
                            }
                          "
                          @click.passive="
                            () => {
                              layoutSwitcher.setDynamicLayoutId('sideblock-color-curved')
                              isModalOpen = false
                            }
                          "
                        >
                          <img
                            class="light-image-block"
                            src="/images/icons/layouts/layout-16.svg"
                            alt=""
                          >
                          <img
                            class="dark-image-block"
                            src="/images/icons/layouts/layout-16-dark.svg"
                            alt=""
                          >
                          <h3>Curved Colored</h3>
                          <p>Curved edges with color</p>
                          <div class="indicator">
                            <VIcon
                              icon="lucide:check"
                            />
                          </div>
                        </VLink>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </template>
          </VTabs>
        </div>
      </template>
    </VModal>
  </div>
</template>

<style scoped lang="scss">

/* ==========================================================================
1. Layout Selector
========================================================================== */

.layout-selector {
  min-height: 340px;
  max-height: 440px;
  overflow-y: auto;
  overflow-x: hidden;

  .layout-item, :deep(.layout-item) {
    position: relative;
    display: block;
    text-align: center;
    cursor: pointer;

    &:hover,
    &:focus {
      img {
        filter: grayscale(0);
        opacity: 1;
      }
    }

    &.is-active {
      pointer-events: none;

      img {
        filter: grayscale(0);
        opacity: 1;
      }

      .indicator {
        opacity: 1;
      }
    }

    .indicator {
      position: absolute;
      top: 0;
      inset-inline-end: 36px;
      background: var(--primary);
      border: 4px solid var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      width: 32px;
      border-radius: var(--radius-rounded);
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
      color: var(--white);

      .iconify, :deep(.iconify) {
        color: var(--white);
        height: 13px;
        width: 13px;
        font-size: 13px;

        * {
          stroke-width: 3px;
        }
      }
    }

    img {
      max-width: 150px;
      margin: 0 auto;
      filter: grayscale(1);
      opacity: 0.6;
      transition: all 0.3s; // transition-all test
    }

    h3 {
      font-family: var(--font-alt);
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--dark-text);
    }

    p {
      font-size: 0.9rem;
    }
  }
}

.switcher-modal-content {
  display: flex;

  .tabs-wrapper {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .layout-size {
    padding: 1rem;
    width: 300px;
    max-width: 300px;
    border-inline-end: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
    gap: 1rem;
    flex-grow: 1;
    flex-shrink: 0;
  }
}

@media only screen and (width <= 767px) {
  :global(.layout-switcher-modal-wrapper .modal-content) {
    max-height: 100vh;
  }

  .switcher-modal-content {
    flex-direction: column-reverse;

    .layout-size {
      width: 100%;
      max-width: none;
      border-inline-end: 0;
      border-top: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
    }
  }
}

/* ==========================================================================
1. Layout Selector Dark Mode
========================================================================== */

.is-dark {
  .switcher-modal-content {
    .layout-size {
      border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
    }
  }

  .layout-selector {
    .layout-item {
      &.is-active {
        .indicator {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 6%) !important;
        }
      }

      h3 {
        color: var(--dark-dark-text);
      }
    }
  }
}

</style>
