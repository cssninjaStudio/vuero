<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

defineProps({
  activeTab: {
    type: String as PropType<'elements' | 'components' | 'forms' | 'plugins'>,
    default: 'elements',
  },
})
</script>

<template>
  <!--Elements-->
  <div
    id="demo-elements"
    :class="[activeTab === 'elements' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-colors' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/colors.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/colors-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Colors</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-tags' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/badges.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/badges-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Tags & Badges</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-buttons' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/buttons.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/buttons-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Buttons</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-content' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/content.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/content-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Content</div>
        </RouterLink>
      </div>
      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-icons-fa' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/font-awesome.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/font-awesome-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Font Awesome</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-icons-feather' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/feather-icons.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/feather-icons-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Feather Icons</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-icons-lnir' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/line-icons2.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/line-icons2-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Line Icons</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-icons-lnil' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/line-icons.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/line-icons-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Line Icons Light</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-cards-basic' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/cards.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/cards-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Basic Cards</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-table' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/tables.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/tables-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Tables</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-tooltips' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/tooltip.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/tooltip-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Tooltips</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Components-->
  <div
    id="demo-components"
    :class="[activeTab === 'components' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <!--Item-->
      <div class="column is-3">
        <RouterLink :to="{ name: 'components-avatars' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/avatar.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/avatar-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Avatars</div>
        </RouterLink>
      </div>
      <!--Item-->
      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-accordion-basic' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/accordion.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/accordion-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Accordions</div>
        </RouterLink>
      </div>
      <div class="column is-3">
        <RouterLink :to="{ name: 'components-vblock' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/blocks.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/blocks-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Blocks</div>
        </RouterLink>
      </div>
      <!--Item-->
      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-breadcrumb' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/breadcrumb.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/breadcrumb-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Breadcrumb</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-vcard-advanced' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/cards.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/cards-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Advanced Cards</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-vcard-bulma' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/cards.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/cards-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Bulma Cards</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'components-dropdown' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/dropdowns.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/dropdowns-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Dropdowns</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'components-icon-box' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/icon-box.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/icon-box-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Icon Box</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'components-messages' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/messages.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/messages-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Messages</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'components-modal' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/modals.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/modals-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Modals</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'components-progress' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/progress.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/progress-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Progress</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-table-flex' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/flex-tables.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/flex-tables-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Flex Tables</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'components-snacks' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/snacks.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/snacks-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Snacks</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Forms-->
  <div
    id="demo-forms"
    :class="[activeTab === 'forms' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-forms-inputs' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/inputs.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/inputs-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Inputs</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-forms-addons' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/inputs-addons.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/inputs-addons-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Input Addons</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-forms-textarea' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/textarea.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/textarea-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Textarea</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-forms-selects' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/selects.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/selects-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Selects</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink :to="{ name: 'elements-forms-file' }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/file-input.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/file-input-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">File Input</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-forms-checkboxes' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/toggles.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/toggles-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Checkboxes</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-forms-radios' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/toggles.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/toggles-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Radio Buttons</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'elements-forms-switch' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/switch.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/switch-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Switch</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'admin-layouts-form-layouts-1' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/forms.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/forms-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Form Layout V1</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'admin-layouts-form-layouts-2' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/forms.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/forms-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Form Layout V2</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'admin-layouts-form-layouts-3' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/forms.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/forms-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Form Layout V3</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'admin-layouts-form-layouts-4' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/forms.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/forms-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Form Layout V4</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Sections-->
  <div
    id="plugins-sections"
    :class="[activeTab === 'plugins' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-plugins-vdatatable' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/autocomplete.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/autocomplete-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">V-Datatable</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-plugins-datepicker' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/datepicker.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/datepicker-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">V-Calendar</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-plugins-lightgallery' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/lightbox.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/lightbox-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Photo Swipe</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-plugins-video-player' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/video.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/video-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Vue-Plyr</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-plugins-toasts' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/toasts.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/toasts-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">Notyf</div>
        </RouterLink>
      </div>

      <div class="column is-3">
        <RouterLink
          :to="{ name: 'components-plugins-popover' }"
          class="component-box"
        >
          <div class="component">
            <img
              class="light-image-l"
              src="/images/icons/components/popover.svg"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              src="/images/icons/components/popover-dark.svg"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">V-Tippy</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
