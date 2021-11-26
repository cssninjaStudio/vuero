<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Components</h3>
      </div>

      <ul class="submenu">
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
          <RouterLink :to="{ name: 'components-icon-wrap' }"> VIconWrap </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snack' }"> VSnack </RouterLink>
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
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-grid' }">
            VGrid <small>& VGridItem</small>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-breadcrumb' }"> VBreadcrumb </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-tabs' }"> VTabs </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-flex-pagination' }">
            VFlexPagination
          </RouterLink>
        </li>

        <SidebarCollapsableLinks>
          <template #header>
            VFlexTable
            <VTag label="v2.2" color="primary" outlined curved />
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'components-flex-table' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Basic usage
          </RouterLink>
          <RouterLink :to="{ name: 'components-flex-table-columns' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Customize columns
          </RouterLink>
          <RouterLink :to="{ name: 'components-flex-table-slots' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Slots usage
          </RouterLink>
          <RouterLink :to="{ name: 'components-flex-table-render' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Render functions
          </RouterLink>
          <RouterLink :to="{ name: 'components-flex-table-wrapper' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VFlexTableWrapper
          </RouterLink>
          <RouterLink
            :to="{ name: 'components-flex-table-wrapper-async' }"
            class="is-submenu"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Async data
          </RouterLink>
        </SidebarCollapsableLinks>

        <SidebarCollapsableLinks>
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
        </SidebarCollapsableLinks>

        <SidebarCollapsableLinks>
          <template #header>
            Cards
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'components-card' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCard
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
        </SidebarCollapsableLinks>

        <SidebarCollapsableLinks>
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
        </SidebarCollapsableLinks>

        <li class="divider"></li>

        <SidebarCollapsableLinks>
          <template #header>
            Plugins
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'components-plugins-notif' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Notyf
          </RouterLink>
        </SidebarCollapsableLinks>

        <SidebarCollapsableLinks>
          <template #header>
            Placeholders
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

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
        </SidebarCollapsableLinks>
      </ul>
    </div>
  </div>
</template>
