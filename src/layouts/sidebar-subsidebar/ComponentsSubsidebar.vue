<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">
        Components
      </h3>
      <div
        class="panel-close"
        tabindex="0"
        role="button"
        @keydown.space.prevent="emit('close')"
        @click="emit('close')"
      >
        <iconify-icon
          aria-hidden="true"
          class="iconify"
          icon="lucide:x"
        ></iconify-icon>
      </div>
    </div>
    <div
      class="inner"
      data-simplebar
    >
      <ul>
        <li>
          <RouterLink to="/components/">
            Components Hub
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/content">
            Content
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/components/table">
            Table
          </RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Display</span>
        </li>
        <li>
          <RouterLink to="/components/avatar/">
            VAvatar
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/avatar/stack">
            VAvatarStack
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/block">
            VBlock
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/components/icon-box">
            VIconBox
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/icon-wrap">
            VIconWrap
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/snack">
            VSnack <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/tag">
            VTag
          </RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Layout</span>
        </li>
        <li>
          <RouterLink to="/components/flex">
            VFlex <small>& VFlexItem</small>
            <VTag
              label="v2.0"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/grid">
            VGrid <small>& VGridItem</small>
            <VTag
              label="v2.0"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/breadcrumb">
            VBreadcrumb
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/tabs">
            VTabs <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/pagination">
            VFlexPagination
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/markdown-preview">
            VMarkdownPreview <VTag
              label="v2.6"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/markdown-editor">
            VMarkdownEditor <VTag
              label="v2.6"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            VFlexTable
            <VTag
              label="v2.2"
              class="ml-2"
              color="primary"
              outlined
              curved
            />
            <iconify-icon
              aria-hidden="true"
              class="iconify rtl-hidden"
              icon="lucide:chevron-right"
            ></iconify-icon>
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            ></iconify-icon>
          </template>

          <RouterLink
            to="/components/flextable/"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Basic usage
          </RouterLink>
          <RouterLink
            to="/components/flextable/columns"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Customize columns
          </RouterLink>
          <RouterLink
            to="/components/flextable/slots"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Slots usage
          </RouterLink>
          <RouterLink
            to="/components/flextable/render"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Render functions (advanced)
          </RouterLink>
          <RouterLink
            to="/components/flextable/wrapper/"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VFlexTableWrapper
          </RouterLink>
          <RouterLink
            to="/components/flextable/wrapper/async"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Async data (advanced)
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Accordions
            <iconify-icon
              aria-hidden="true"
              class="iconify rtl-hidden"
              icon="lucide:chevron-right"
            ></iconify-icon>
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            ></iconify-icon>
          </template>

          <RouterLink
            to="/components/accordion/"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VAccordion
          </RouterLink>
          <RouterLink
            to="/components/collapse"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCollapse
          </RouterLink>
          <RouterLink
            to="/components/accordion/image"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VAccordionImage
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Cards
            <iconify-icon
              aria-hidden="true"
              class="iconify rtl-hidden"
              icon="lucide:chevron-right"
            ></iconify-icon>
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            ></iconify-icon>
          </template>

          <RouterLink
            to="/components/card/"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCard
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/components/card/action"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCardAction
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/components/card/advanced"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCardAdvanced
          </RouterLink>
          <RouterLink
            to="/components/card/media"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCardMedia
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
          <RouterLink
            to="/components/card/social"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCardSocial
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Placeholders
            <iconify-icon
              aria-hidden="true"
              class="iconify rtl-hidden"
              icon="lucide:chevron-right"
            ></iconify-icon>
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            ></iconify-icon>
          </template>
          <RouterLink
            to="/components/placeholder-page"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VPlaceholderPage
          </RouterLink>
          <RouterLink
            to="/components/placeholder-section"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VPlaceholderSection
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />

        <VCollapseLinks>
          <template #header>
            Plugins
            <iconify-icon
              aria-hidden="true"
              class="iconify rtl-hidden"
              icon="lucide:chevron-right"
            ></iconify-icon>
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            ></iconify-icon>
          </template>
          <RouterLink
            to="/components/plugins/notif"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Notyf
          </RouterLink>
          <RouterLink
            to="/components/plugins/tippy"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Tippy
          </RouterLink>
          <RouterLink
            to="/components/plugins/billboard-js"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VBillboardJS
          </RouterLink>
          <RouterLink
            to="/components/plugins/photos-swipe"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VPhotosSwipe
          </RouterLink>
          <RouterLink
            to="/components/plugins/plyr"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VPlyr
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
