<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">Elements</h3>
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
          <RouterLink :to="{ name: 'elements' }">Elements Hub</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-colors' }">Colors</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-helpers' }">Helpers</RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            Icons
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'elements-icons-iconify' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Iconify
          </RouterLink>
          <RouterLink
            :to="{ name: 'elements-icons-line-icons-light' }"
            class="is-submenu"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Line Icons Light
          </RouterLink>
          <RouterLink
            :to="{ name: 'elements-icons-line-icons-regular' }"
            class="is-submenu"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Line Icons Regular
          </RouterLink>
          <RouterLink :to="{ name: 'elements-icons-font-awesome' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Font Awesome 5
          </RouterLink>
        </VCollapseLinks>

        <li class="divider with-label">
          <span class="divider-label">Interaction</span>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-dropdown' }"> VDropdown </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-loader' }">VLoader</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload' }">
            VPlaceload
            <VTag label="v1.2" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload-text' }">
            VPlaceloadText
            <VTag label="v1.2" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-placeload-avatar' }">
            VPlaceloadAvatar
            <VTag label="v1.2" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-message' }">
            VMessage
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-modal' }">VModal</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-progress' }"> VProgress </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tooltip' }">
            VTootlip
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            Buttons
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'elements-button' }" class="is-submenu">
            VButton
          </RouterLink>
          <RouterLink :to="{ name: 'elements-action' }" class="is-submenu">
            VAction
          </RouterLink>
          <RouterLink :to="{ name: 'elements-icon-button' }" class="is-submenu">
            VIconButton
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Forms
            <VTag label="v2.3" class="ml-2" color="primary" outlined curved />
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'elements-forms-field' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VField
          </RouterLink>
          <RouterLink :to="{ name: 'elements-forms-control' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VControl
          </RouterLink>
          <RouterLink :to="{ name: 'elements-forms-inputs' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VInput
          </RouterLink>
          <RouterLink :to="{ name: 'elements-forms-textarea' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VTextarea
          </RouterLink>
          <RouterLink :to="{ name: 'elements-forms-selects' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VSelect
          </RouterLink>
          <RouterLink :to="{ name: 'elements-checkbox' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCheckbox
          </RouterLink>
          <RouterLink :to="{ name: 'elements-radio' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VRadio
          </RouterLink>
          <!-- <RouterLink :to="{ name: 'elements-forms-addons' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            Input Addons
          </RouterLink> -->
          <RouterLink :to="{ name: 'elements-forms-file' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"> </i>
            File Input
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Switches
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'elements-animated-checkbox' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VAnimatedCheckbox
          </RouterLink>
          <RouterLink :to="{ name: 'elements-switch-block' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VSwitchBlock
          </RouterLink>
          <RouterLink :to="{ name: 'elements-switch-segment' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VSwitchSegment
            <VTag label="v1.1" color="primary" outlined curved />
          </RouterLink>
        </VCollapseLinks>

        <li class="divider"></li>

        <VCollapseLinks>
          <template #header>
            Addons
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'elements-addons-calendar' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCalendar &amp; VDatePicker
          </RouterLink>
          <RouterLink :to="{ name: 'elements-addons-imask-input' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VIMaskInput
          </RouterLink>
          <RouterLink :to="{ name: 'elements-addons-filepond' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VFilePond
          </RouterLink>
          <RouterLink :to="{ name: 'elements-addons-credit-card' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            VCreditCard
          </RouterLink>
          <RouterLink
            :to="{ name: 'elements-addons-vueform-multiselect' }"
            class="is-submenu"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            @vueform/multiselect
          </RouterLink>
          <RouterLink :to="{ name: 'elements-addons-vueform-slider' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            @vueform/slider
          </RouterLink>
          <RouterLink :to="{ name: 'elements-addons-ckeditor' }" class="is-submenu">
            <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
            CKEditor 5
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
