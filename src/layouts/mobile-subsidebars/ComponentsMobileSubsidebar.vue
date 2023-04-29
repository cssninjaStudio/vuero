<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Components</h3>
      </div>

      <ul class="submenu">
        <li>
          <RouterLink to="/components/">Components Hub</RouterLink>
        </li>
        <li>
          <RouterLink to="/components/content">Content</RouterLink>
        </li>

        <li>
          <RouterLink to="/components/table">Table</RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Display</span>
        </li>
        <li>
          <RouterLink to="/components/avatar/">VAvatar</RouterLink>
        </li>
        <li>
          <RouterLink to="/components/avatar/stack"> VAvatarStack </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/block">VBlock</RouterLink>
        </li>

        <li>
          <RouterLink to="/components/icon-box"> VIconBox </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/icon-wrap"> VIconWrap </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/snack"> VSnack </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/tag">VTag</RouterLink>
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
          <RouterLink to="/components/breadcrumb"> VBreadcrumb </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/tabs"> VTabs </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/pagination"> VFlexPagination </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/markdown-preview">
            VMarkdownPreview
            <VTag label="v2.6" size="tiny" class="ml-2" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/components/markdown-editor">
            VMarkdownEditor
            <VTag label="v2.6" size="tiny" class="ml-2" color="primary" outlined curved />
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            VFlexTable
            <VTag label="v2.2" size="tiny" class="ml-2" color="primary" outlined curved />
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

          <RouterLink to="/components/flextable/" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Basic usage
          </RouterLink>
          <RouterLink to="/components/flextable/columns" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Customize columns
          </RouterLink>
          <RouterLink to="/components/flextable/slots" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Slots usage
          </RouterLink>
          <RouterLink to="/components/flextable/render" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Render functions
          </RouterLink>
          <RouterLink to="/components/flextable/wrapper/" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VFlexTableWrapper
          </RouterLink>
          <RouterLink to="/components/flextable/wrapper/async" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Async data
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

          <RouterLink to="/components/accordion/" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VAccordion
          </RouterLink>
          <RouterLink to="/components/collapse" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCollapse
          </RouterLink>
          <RouterLink to="/components/accordion/image" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
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

          <RouterLink to="/components/card/" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCard
          </RouterLink>
          <RouterLink to="/components/card/action" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCardAction
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
          <RouterLink to="/components/card/advanced" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCardAdvanced
          </RouterLink>
          <RouterLink to="/components/card/media" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCardMedia
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
          <RouterLink to="/components/card/social" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
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

          <RouterLink to="/components/placeholder-page" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VPlaceholderPage
          </RouterLink>
          <RouterLink to="/components/placeholder-section" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VPlaceholderSection
          </RouterLink>
        </VCollapseLinks>

        <li class="divider"></li>

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

          <RouterLink to="/components/plugins/notif" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Notyf
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

          <RouterLink to="/components/plugins/tippy" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Tippy
          </RouterLink>
          <RouterLink to="/components/plugins/billboard-js" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VBillboardJS
          </RouterLink>
          <RouterLink to="/components/plugins/photos-swipe" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VPhotosSwipe
          </RouterLink>
          <RouterLink to="/components/plugins/plyr" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VPlyr
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
