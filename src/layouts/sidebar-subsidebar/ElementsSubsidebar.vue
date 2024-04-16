<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">
        Elements
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
          <RouterLink to="/elements/">
            Elements Hub
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/colors">
            Colors
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/helpers">
            Helpers
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            Icons
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
            to="/elements/icons/iconify"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Iconify
          </RouterLink>
          <RouterLink
            to="/elements/icons/line-icons-light"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Line Icons Light
          </RouterLink>
          <RouterLink
            to="/elements/icons/line-icons-regular"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Line Icons Regular
          </RouterLink>
          <RouterLink
            to="/elements/icons/font-awesome"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            Font Awesome 5
          </RouterLink>
        </VCollapseLinks>

        <li class="divider with-label">
          <span class="divider-label">Interaction</span>
        </li>
        <li>
          <RouterLink to="/elements/dropdown">
            VDropdown
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/loader">
            VLoader
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/placeload/">
            VPlaceload
            <VTag
              label="v1.2"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/placeload/text">
            VPlaceloadText
            <VTag
              label="v1.2"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/placeload/avatar">
            VPlaceloadAvatar
            <VTag
              label="v1.2"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/message">
            VMessage
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/modal">
            VModal
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/progress">
            VProgress
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/elements/tooltip">
            VTootlip
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </li>

        <VCollapseLinks>
          <template #header>
            Buttons
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
            to="/elements/button"
            class="is-submenu"
          >
            VButton
          </RouterLink>
          <RouterLink
            to="/elements/action"
            class="is-submenu"
          >
            VAction
          </RouterLink>
          <RouterLink
            to="/elements/icon-button"
            class="is-submenu"
          >
            VIconButton
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Forms
            <VTag
              label="v2.3"
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
            to="/elements/forms/field"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VField
          </RouterLink>
          <RouterLink
            to="/elements/forms/control"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VControl
          </RouterLink>
          <RouterLink
            to="/elements/forms/inputs"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VInput
          </RouterLink>
          <RouterLink
            to="/elements/forms/textarea"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VTextarea
          </RouterLink>
          <RouterLink
            to="/elements/forms/selects"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VSelect
          </RouterLink>
          <RouterLink
            to="/elements/checkbox"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCheckbox
          </RouterLink>
          <RouterLink
            to="/elements/radio"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VRadio
          </RouterLink>
          <!-- <RouterLink to="/elements/forms/addons" class="is-submenu">
            <iconify-icon aria-hidden="true" class="iconify" icon="lucide:circle"></iconify-icon>
            Input Addons
          </RouterLink> -->
          <RouterLink
            to="/elements/forms/range-rating"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VRangeRating
          </RouterLink>
          <RouterLink
            to="/elements/forms/file"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            File Input
          </RouterLink>
        </VCollapseLinks>

        <VCollapseLinks>
          <template #header>
            Switches
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
            to="/elements/animated-checkbox"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VAnimatedCheckbox
          </RouterLink>
          <RouterLink
            to="/elements/switch-block"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VSwitchBlock
          </RouterLink>
          <RouterLink
            to="/elements/switch-segment"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VSwitchSegment
            <VTag
              label="v1.1"
              color="primary"
              outlined
              curved
            />
          </RouterLink>
        </VCollapseLinks>

        <li class="divider" />

        <VCollapseLinks>
          <template #header>
            Addons
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
            to="/elements/addons/calendar"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCalendar &amp; VDatePicker
          </RouterLink>
          <RouterLink
            to="/elements/addons/imask-input"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VIMaskInput
          </RouterLink>
          <RouterLink
            to="/elements/addons/filepond"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VFilePond
          </RouterLink>
          <RouterLink
            to="/elements/addons/credit-card"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            VCreditCard
          </RouterLink>
          <RouterLink
            to="/elements/addons/vueform-multiselect"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            @vueform/multiselect
          </RouterLink>
          <RouterLink
            to="/elements/addons/vueform-slider"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
            @vueform/slider
          </RouterLink>
          <RouterLink
            to="/elements/addons/ckeditor"
            class="is-submenu"
          >
            <iconify-icon
              aria-hidden="true"
              class="iconify"
              icon="lucide:circle"
            ></iconify-icon>
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
