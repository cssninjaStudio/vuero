<script lang="ts">
import { defineComponent } from 'vue'

const LandingComponents = defineComponent({
  name: 'LandingComponents',
  components: {},
  setup() {
    // LandingComponents - Composition API

    return {}
  },
})

export default LandingComponents
</script>

<template>
  <!--Elements-->
  <div id="demo-elements" class="tab-content has-text-left is-active">
    <div class="columns is-multiline">
      <div class="column is-3">
        <a href="/elements-colors.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/colors.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/colors-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Colors</div>
        </a>
      </div>

      <div class="column is-3">
        <a href="/elements-tags.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/badges.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/badges-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Tags & Badges</div>
        </a>
      </div>

      <div class="column is-3">
        <a href="/elements-buttons.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/buttons.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/buttons-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Buttons</div>
        </a>
      </div>

      <div class="column is-3">
        <a href="/elements-blocks.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/blocks.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/blocks-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Blocks</div>
        </a>
      </div>

      <div class="column is-3">
        <a href="/elements-content.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/content.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/content-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Content</div>
        </a>
      </div>
      <div class="column is-3">
        <a href="/elements-icons-fa.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/font-awesome.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/font-awesome-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Font Awesome</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-icons-feather.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/feather-icons.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/feather-icons-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Feather Icons</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-icons-lnir.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/line-icons2.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/line-icons2-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Line Icons</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-icons-lnil.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/line-icons.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/line-icons-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Line Icons Light</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-cards-basic.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/cards.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/cards-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Basic Cards</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-cards-advanced.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/cards.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/cards-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Advanced Cards</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-cards-bulma.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/cards.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/cards-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Bulma Cards</div>
        </a>
      </div>

      <div class="column is-3">
        <a href="/elements-table.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/tables.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/tables-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Tables</div>
        </a>
      </div>

      <div class="column is-3">
        <a href="/elements-tooltips.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/tooltip.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/tooltip-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Tooltips</div>
        </a>
      </div>
    </div>
  </div>

  <!--Components-->
  <div id="demo-components" class="tab-content has-text-left">
    <div class="columns is-multiline">
      <!--Item-->
      <div class="column is-3">
        <a
          href="/components-avatars.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/avatar.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/avatar-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Avatars</div>
        </a>
      </div>
      <!--Item-->
      <div class="column is-3">
        <a
          href="/components-accordion-basic.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/accordion.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/accordion-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Accordions</div>
        </a>
      </div>
      <!--Item-->
      <div class="column is-3">
        <a
          href="/components-breadcrumb.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/breadcrumb.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/breadcrumb-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Breadcrumb</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-dropdown.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/dropdowns.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/dropdowns-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Dropdowns</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-icon-box.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/icon-box.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/icon-box-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Icon Box</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-messages.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/messages.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/messages-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Messages</div>
        </a>
      </div>

      <div class="column is-3">
        <a href="/components-modal.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/modals.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/modals-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Modals</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-progress.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/progress.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/progress-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Progress</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-tabs-regular.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/tabs.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/tabs-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Tabs</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-tabs-slider.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/slider-tabs.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/slider-tabs-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Slider Tabs</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-table-flex.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/flex-tables.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/flex-tables-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Flex Tables</div>
        </a>
      </div>

      <div class="column is-3">
        <a href="/components-snacks.html" target="_blank" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/snacks.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/snacks-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Snacks</div>
        </a>
      </div>
    </div>
  </div>

  <!--Forms-->
  <div id="demo-forms" class="tab-content has-text-left">
    <div class="columns is-multiline">
      <div class="column is-3">
        <a
          href="/elements-forms-inputs.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/inputs.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/inputs-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Inputs</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-forms-addons.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/inputs-addons.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/inputs-addons-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Input Addons</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-forms-textarea.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/textarea.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/textarea-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Textarea</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-forms-custom.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/selects.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/selects-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Selects</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-forms-selects.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/selects.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/selects-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Custom</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-forms-file.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/file-input.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/file-input-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">File Input</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-forms-checkboxes.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/toggles.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/toggles-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Checkboxes</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-forms-radios.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/toggles.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/toggles-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Radio Buttons</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/elements-forms-switch.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/switch.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/switch-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Switch</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/admin-form-layouts-1.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/forms.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/forms-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Form Layout V1</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/admin-form-layouts-2.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/forms.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/forms-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Form Layout V2</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/admin-form-layouts-3.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/forms.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/forms-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Form Layout V3</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/admin-form-layouts-4.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/forms.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/forms-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Form Layout V4</div>
        </a>
      </div>
    </div>
  </div>

  <!--Sections-->
  <div id="plugins-sections" class="tab-content has-text-left">
    <div class="columns is-multiline">
      <div class="column is-3">
        <a
          href="/components-plugins-alertify.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/alert.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/alert-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Alertify</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-autocomplete.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/autocomplete.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/autocomplete-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Autocomplete</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-datepicker.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/datepicker.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/datepicker-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Datepicker</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-choices.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/tags-inputs.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/tags-inputs-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Tags Input</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-nouislider.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/slider.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/slider-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Range Slider</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-filepond.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/file-input.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/file-input-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Filepond</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-lightgallery.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/lightbox.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/lightbox-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Light Gallery</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-videogallery.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/video-gallery.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/video-gallery-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Video Gallery</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-video-player.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/video.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/video-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Video Player</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-toasts.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/toasts.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/toasts-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Toasts</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-webuipopover.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/popover.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/popover-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Popovers</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-editor-summernote.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/summernote.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/summernote-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Summernote</div>
        </a>
      </div>

      <div class="column is-3">
        <a
          href="/components-plugins-editor-sun.html"
          target="_blank"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="assets/img/icons/components/summernote.svg"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-l"
              src="assets/img/icons/components/summernote-dark.svg"
              alt=""
              data-lazy-load
            />
          </div>
          <div class="component-title">Sun Editor</div>
        </a>
      </div>
    </div>
  </div>
</template>