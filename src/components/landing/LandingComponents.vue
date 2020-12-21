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
              src="/src/assets/images/icons/components/colors.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/colors-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/badges.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/badges-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/buttons.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/buttons-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/blocks.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/blocks-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/content.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/content-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/font-awesome.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/font-awesome-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/feather-icons.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/feather-icons-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/line-icons2.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/line-icons2-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/line-icons.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/line-icons-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/cards.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/cards-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/cards.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/cards-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/cards.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/cards-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/tables.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/tables-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/tooltip.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/tooltip-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/avatar.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/avatar-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/accordion.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/accordion-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/breadcrumb.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/breadcrumb-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/dropdowns.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/dropdowns-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/icon-box.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/icon-box-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/messages.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/messages-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/modals.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/modals-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/progress.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/progress-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/tabs.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/tabs-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/slider-tabs.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/slider-tabs-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/flex-tables.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/flex-tables-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/snacks.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/snacks-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/inputs.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/inputs-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/inputs-addons.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/inputs-addons-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/textarea.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/textarea-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/selects.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/selects-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/selects.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/selects-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/file-input.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/file-input-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/toggles.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/toggles-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/toggles.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/toggles-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/switch.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/switch-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/forms.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/forms-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/forms.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/forms-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/forms.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/forms-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/forms.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/forms-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/alert.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/alert-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/autocomplete.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/autocomplete-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/datepicker.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/datepicker-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/tags-inputs.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/tags-inputs-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/slider.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/slider-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/file-input.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/file-input-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/lightbox.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/lightbox-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/video-gallery.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/video-gallery-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/video.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/video-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/toasts.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/toasts-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/popover.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/popover-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/summernote.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/summernote-dark.svg"
              alt=""
              loading="lazy"
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
              src="/src/assets/images/icons/components/summernote.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/src/assets/images/icons/components/summernote-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Sun Editor</div>
        </a>
      </div>
    </div>
  </div>
</template>