<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">Components</h3>
      <div
        class="panel-close"
        tabindex="0"
        @keydown.space.prevent="emit('close')"
        @click="emit('close')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li>
          <RouterLink :to="{ name: 'components' }">Components Hub</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-content' }">Content</RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'components-table' }">Table</RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Display</span>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatar' }">VAvatar</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatar-stack' }">
            VAvatarStack
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-block' }">VBlock</RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'components-icon-box' }"> VIconBox </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-icon-wrap' }">
            VIconWrap
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snack' }">
            VSnack <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-tag' }">VTag</RouterLink>
        </li>

        <li class="divider with-label">
          <span class="divider-label">Layout</span>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-flex' }">
            VFlex <small>& VFlexItem</small>
            <VTag label="v2.0" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-grid' }">
            VGrid <small>& VGridItem</small>
            <VTag label="v2.0" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-breadcrumb' }"> VBreadcrumb </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-tabs' }">
            VTabs <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-pagination' }">
            VFlexPagination
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            VFlexTable
            <VTag label="v2.2" class="ml-2" color="primary" outlined curved />
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'components-flextable' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Basic usage
          </RouterLink>
          <RouterLink :to="{ name: 'components-flextable-columns' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Customize columns
          </RouterLink>
          <RouterLink :to="{ name: 'components-flextable-slots' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Slots usage
          </RouterLink>
          <RouterLink :to="{ name: 'components-flextable-render' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Render functions (advanced)
          </RouterLink>
          <RouterLink :to="{ name: 'components-flextable-wrapper' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VFlexTableWrapper
          </RouterLink>
          <RouterLink
            :to="{ name: 'components-flextable-wrapper-async' }"
            class="is-submenu"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Async data (advanced)
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Accordions
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'components-accordion' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VAccordion
          </RouterLink>
          <RouterLink :to="{ name: 'components-collapse' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCollapse
          </RouterLink>
          <RouterLink :to="{ name: 'components-accordion-image' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VAccordionImage
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Cards
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'components-card' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCard
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
          <RouterLink :to="{ name: 'components-card-action' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCardAction
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
          <RouterLink :to="{ name: 'components-card-advanced' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCardAdvanced
          </RouterLink>
          <RouterLink :to="{ name: 'components-card-media' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCardMedia
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
          <RouterLink :to="{ name: 'components-card-social' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCardSocial
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Placeholders
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>
          <RouterLink :to="{ name: 'components-placeholder-page' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VPlaceholderPage
          </RouterLink>
          <RouterLink :to="{ name: 'components-placeholder-section' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VPlaceholderSection
          </RouterLink>
        </VCollapseLinks>

        <li class="divider"></li>

        <VCollapseLinks>
          <template #header>
            Plugins
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>
          <RouterLink :to="{ name: 'components-plugins-notif' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Notyf
          </RouterLink>
          <RouterLink :to="{ name: 'components-plugins-tippy' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Tippy
          </RouterLink>
          <RouterLink
            :to="{ name: 'components-plugins-billboard-js' }"
            class="is-submenu"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VBillboardJS
          </RouterLink>
          <RouterLink
            :to="{ name: 'components-plugins-photos-swipe' }"
            class="is-submenu"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VPhotosSwipe
          </RouterLink>
          <RouterLink :to="{ name: 'components-plugins-plyr' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VPlyr
          </RouterLink>
          <RouterLink
            :to="{ name: 'components-plugins-simple-datatables' }"
            class="is-submenu"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VSimpleDatatables
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
