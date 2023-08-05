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
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:x"
        />
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
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/flextable/"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Basic usage
          </RouterLink>
          <RouterLink
            to="/components/flextable/columns"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Customize columns
          </RouterLink>
          <RouterLink
            to="/components/flextable/slots"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Slots usage
          </RouterLink>
          <RouterLink
            to="/components/flextable/render"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Render functions (advanced)
          </RouterLink>
          <RouterLink
            to="/components/flextable/wrapper/"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VFlexTableWrapper
          </RouterLink>
          <RouterLink
            to="/components/flextable/wrapper/async"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Async data (advanced)
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Accordions
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/accordion/"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VAccordion
          </RouterLink>
          <RouterLink
            to="/components/collapse"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VCollapse
          </RouterLink>
          <RouterLink
            to="/components/accordion/image"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VAccordionImage
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Cards
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/card/"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
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
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
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
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VCardAdvanced
          </RouterLink>
          <RouterLink
            to="/components/card/media"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
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
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VCardSocial
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Placeholders
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/components/placeholder-page"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VPlaceholderPage
          </RouterLink>
          <RouterLink
            to="/components/placeholder-section"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VPlaceholderSection
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />

        <VCollapseLinks>
          <template #header>
            Plugins
            <i
              aria-hidden="true"
              class="iconify rtl-hidden"
              data-icon="feather:chevron-right"
            />
            <i
              aria-hidden="true"
              class="iconify ltr-hidden"
              data-icon="feather:chevron-left"
            />
          </template>
          <RouterLink
            to="/components/plugins/notif"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Notyf
          </RouterLink>
          <RouterLink
            to="/components/plugins/tippy"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            Tippy
          </RouterLink>
          <RouterLink
            to="/components/plugins/billboard-js"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VBillboardJS
          </RouterLink>
          <RouterLink
            to="/components/plugins/photos-swipe"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
            VPhotosSwipe
          </RouterLink>
          <RouterLink
            to="/components/plugins/plyr"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:circle"
            />
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
