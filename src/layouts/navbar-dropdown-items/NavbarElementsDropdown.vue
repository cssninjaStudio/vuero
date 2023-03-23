<script setup lang="ts">
const dropdownElement = ref()
const selectedCategory = ref('')
const route = useRoute()

watch([() => route.fullPath, dropdownElement], () => {
  if (dropdownElement.value) {
    dropdownElement.value.close?.()
  }
})
</script>

<template>
  <VDropdown ref="dropdownElement" class="has-mega-dropdown" modern spaced>
    <template #button="{ toggle }">
      <div
        class="dropdown-trigger is-trigger"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <VButton
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          icon-caret="feather:chevron-down"
          rounded
          @click="toggle"
        >
          Elements
        </VButton>
      </div>
    </template>

    <template #content>
      <div class="category-selector" :class="[selectedCategory !== '' && 'is-hidden']">
        <div class="title-wrap">
          <h4>Select a category</h4>
        </div>
        <div class="category-selector-inner">
          <!-- Interaction Item -->
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'interaction'"
            @click="selectedCategory = 'interaction'"
          >
            <i aria-hidden="true" class="lnil lnil-pointer-top"></i>
            <span>Interaction</span>
          </div>
          <!-- Advanced Item -->
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'advanced'"
            @click="selectedCategory = 'advanced'"
          >
            <i aria-hidden="true" class="lnil lnil-Website"></i>
            <span>Advanced</span>
          </div>
          <!-- Addons Item -->
          <div
            class="category-item"
            tabindex="0"
            role="button"
            @keydown.space.prevent="selectedCategory = 'addons'"
            @click="selectedCategory = 'addons'"
          >
            <i aria-hidden="true" class="lnil lnil-code"></i>
            <span>Addons</span>
          </div>

          <img
            class="placeholder-image light-image"
            src="/@src/assets/illustrations/components/buttons.svg"
            alt=""
          />
          <img
            class="placeholder-image dark-image"
            src="/@src/assets/illustrations/components/buttons-dark.svg"
            alt=""
          />
        </div>
      </div>

      <div class="content-wrap" :class="[selectedCategory === '' && 'is-hidden']">
        <!--Back button-->
        <button class="button is-circle back-button" @click="selectedCategory = ''">
          <span class="icon is-small">
            <i aria-hidden="true" class="iconify" data-icon="feather:arrow-left"></i>
          </span>
        </button>

        <!--Interaction-->
        <div
          :class="[selectedCategory === 'interaction' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Interaction/General-->
          <div class="column is-6">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>General</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink to="/elements/" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-home"></i>
                  </div>
                  <div class="meta">
                    <span>Elements Hub</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/colors" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-color-palette"></i>
                  </div>
                  <div class="meta">
                    <span>Colors</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/helpers" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-help"></i>
                  </div>
                  <div class="meta">
                    <span>Helpers</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/icons/iconify" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-minus"></i>
                  </div>
                  <div class="meta">
                    <span>Iconify</span>
                  </div>
                </RouterLink>

                <RouterLink
                  to="/elements/icons/line-icons-light"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-minus"></i>
                  </div>
                  <div class="meta">
                    <span>Line Icons Light</span>
                  </div>
                </RouterLink>

                <RouterLink
                  to="/elements/icons/line-icons-regular"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-minus"></i>
                  </div>
                  <div class="meta">
                    <span>Line Icons Regular</span>
                  </div>
                </RouterLink>

                <RouterLink
                  to="/elements/icons/font-awesome"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-minus"></i>
                  </div>
                  <div class="meta">
                    <span>Font Awesome 5</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Interaction/Interaction-->
          <div class="column is-6">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-orange">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Interaction</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink to="/elements/action" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pointer-top"></i>
                  </div>
                  <div class="meta">
                    <span>VAction</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/button" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pointer-top"></i>
                  </div>
                  <div class="meta">
                    <span>VButton</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/dropdown" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-chevron-down"></i>
                  </div>
                  <div class="meta">
                    <span>VDropdown</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/icon-button" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pointer-top"></i>
                  </div>
                  <div class="meta">
                    <span>VIconButton</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/loader" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-spinner-3"></i>
                  </div>
                  <div class="meta">
                    <span>VLoader</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/placeload/" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-reload"></i>
                  </div>
                  <div class="meta">
                    <span>VPlaceload</span>
                    <VTag label="v1.2" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink to="/elements/placeload/text" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-reload"></i>
                  </div>
                  <div class="meta">
                    <span>VPlaceloadText</span>
                    <VTag label="v1.2" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink
                  to="/elements/placeload/avatar"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-reload"></i>
                  </div>
                  <div class="meta">
                    <span>VPlaceloadAvatar</span>
                    <VTag label="v1.2" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink to="/elements/message" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-capital-letter"></i>
                  </div>
                  <div class="meta">
                    <span>VMessage</span>
                    <VTag label="v1.1" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink to="/elements/modal" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-top-right-arrow-box"></i>
                  </div>
                  <div class="meta">
                    <span>VModal</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/progress" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-half-battery"></i>
                  </div>
                  <div class="meta">
                    <span>VProgress</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/tooltip" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-comments-alt"></i>
                  </div>
                  <div class="meta">
                    <span>VTooltip</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!--Advanced-->
        <div
          :class="[selectedCategory === 'advanced' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Advanced/Forms-->
          <div class="column is-6">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Forms</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink to="/elements/forms/field" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-stop"></i>
                  </div>
                  <div class="meta">
                    <span>VField</span>
                    <VTag label="v2.3" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>
                <RouterLink to="/elements/forms/control" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-stop"></i>
                  </div>
                  <div class="meta">
                    <span>VControl</span>
                    <VTag label="v2.3" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>
                <RouterLink to="/elements/forms/inputs" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-font"></i>
                  </div>
                  <div class="meta">
                    <span>VInput</span>
                    <VTag label="v2.3" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink to="/elements/forms/textarea" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-font"></i>
                  </div>
                  <div class="meta">
                    <span>VTextarea</span>
                    <VTag label="v2.3" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink to="/elements/forms/selects" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-font"></i>
                  </div>
                  <div class="meta">
                    <span>VSelect</span>
                    <VTag label="v2.3" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink to="/elements/checkbox" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-round-box-check"></i>
                  </div>
                  <div class="meta">
                    <span>VCheckbox</span>
                    <VTag label="v2.3" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink to="/elements/radio" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
                  </div>
                  <div class="meta">
                    <span>VRadio</span>
                    <VTag label="v2.3" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <!-- <RouterLink
                  to="/elements/forms/addons"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-font"></i>
                  </div>
                  <div class="meta">
                    <span>Input Addons</span>
                  </div>
                </RouterLink> -->

                <RouterLink to="/elements/forms/file" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-upload"></i>
                  </div>
                  <div class="meta">
                    <span>File Input</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Advanced/Switches-->
          <div class="column is-6">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-green">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Switches</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  to="/elements/animated-checkbox"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-round-box-check"></i>
                  </div>
                  <div class="meta">
                    <span>VAnimatedCheckbox</span>
                    <VTag label="v1.1" color="primary" outlined curved class="ml-3" />
                  </div>
                </RouterLink>

                <RouterLink to="/elements/switch-block" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-switch"></i>
                  </div>
                  <div class="meta">
                    <span>VSwitchBlock</span>
                  </div>
                </RouterLink>
                <RouterLink to="/elements/switch-segment" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-switch"></i>
                  </div>
                  <div class="meta">
                    <span>VSwitchSegment</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!--Addons-->
        <div
          :class="[selectedCategory === 'addons' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Addons/Addons-->
          <div class="column is-12">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-green">
                <i aria-hidden="true" class="iconify" data-icon="feather:circle"></i>
                <span>Addons</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink to="/elements/addons/calendar" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-code"></i>
                  </div>
                  <div class="meta">
                    <span>VCalendar</span>
                  </div>
                </RouterLink>

                <RouterLink
                  to="/elements/addons/imask-input"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-code"></i>
                  </div>
                  <div class="meta">
                    <span>VIMaskInput</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/addons/filepond" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-code"></i>
                  </div>
                  <div class="meta">
                    <span>VFilePond</span>
                  </div>
                </RouterLink>

                <RouterLink
                  to="/elements/addons/vueform-multiselect"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-code"></i>
                  </div>
                  <div class="meta">
                    <span>@vueform/multiselect</span>
                  </div>
                </RouterLink>

                <RouterLink
                  to="/elements/addons/vueform-slider"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-code"></i>
                  </div>
                  <div class="meta">
                    <span>@vueform/slider</span>
                  </div>
                </RouterLink>

                <RouterLink to="/elements/addons/ckeditor" class="dropdown-item is-media">
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-code"></i>
                  </div>
                  <div class="meta">
                    <span>CKEditor 5</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>
