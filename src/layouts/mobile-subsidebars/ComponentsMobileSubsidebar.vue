<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Components</h3>
      </div>

      <ul class="submenu">
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
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/snack">
            VSnack
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
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/grid">
            VGrid <small>& VGridItem</small>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/breadcrumb">
            VBreadcrumb
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/tabs">
            VTabs
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/pagination">
            VFlexPagination
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/markdown-preview">
            VMarkdownPreview
            <VTag
              label="v2.6"
              size="tiny"
              class="ml-2"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/markdown-editor">
            VMarkdownEditor
            <VTag
              label="v2.6"
              size="tiny"
              class="ml-2"
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
              size="tiny"
              class="ml-2"
              color="primary"
              outlined
              curved
            />
            <iconify-icon
              aria-hidden="true"
              class="iconify rtl-hidden"
              icon="lucide:chevron-right"
            />
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/flextable/"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
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
            />
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
            />
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
            />
            Render functions
          </RouterLink>
          <RouterLink
            to="/components/flextable/wrapper/"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
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
            />
            Async data
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Accordions
            <iconify-icon
              aria-hidden="true"
              class="iconify rtl-hidden"
              icon="lucide:chevron-right"
            />
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/accordion/"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
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
            />
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
            />
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
            />
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/card/"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
            VCard
          </RouterLink>
          <RouterLink
            to="/components/card/action"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
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
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
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
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
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
            />
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/placeholder-page"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
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
            />
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
            />
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/plugins/notif"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
            Notyf
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Placeholders
            <iconify-icon
              aria-hidden="true"
              class="iconify rtl-hidden"
              icon="lucide:chevron-right"
            />
            <iconify-icon
              aria-hidden="true"
              class="iconify ltr-hidden"
              icon="lucide:chevron-left"
            />
          </template>

          <RouterLink
            to="/components/plugins/tippy"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            />
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
            />
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
            />
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
            />
            VPlyr
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
