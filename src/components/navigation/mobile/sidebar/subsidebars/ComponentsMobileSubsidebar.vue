<script lang="ts">
import { defineComponent } from 'vue'

const ComponentsMobileSubsidebar = defineComponent({
  name: 'ComponentsMobileSubsidebar',
  components: {},
  setup() {
    // ComponentsMobileSubsidebar - Composition API

    return {}
  },
})

export default ComponentsMobileSubsidebar
</script>

<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Components</h3>
      </div>

      <ul class="submenu">
        <li>
          <a href="/components-hub.html">Components Hub</a>
        </li>
        <li>
          <a href="/components-avatars.html">Avatars</a>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Accordions <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/components-accordion-basic.html"
                ><Icon icon="feather:circle" />Accordion</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-accordion-collapse.html"
                ><Icon icon="feather:circle" />Collapse</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-accordion-images.html"
                ><Icon icon="feather:circle" />Image Accordion</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="/components-breadcrumb.html">Breadcrumb</a>
        </li>
        <li>
          <a href="/components-dropdown.html">Dropdown</a>
        </li>
        <li>
          <a href="/components-icon-box.html">Icon Box</a>
        </li>
        <li>
          <a href="/components-loader.html">Loader</a>
        </li>
        <li>
          <a href="/components-messages.html">Message</a>
        </li>
        <li>
          <a href="/components-modal.html">Modal</a>
        </li>
        <li>
          <a href="/components-progress.html">Progress</a>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Tabs <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/components-tabs-regular.html"
                ><Icon icon="feather:circle" />Regular Tabs</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-tabs-slider.html"
                ><Icon icon="feather:circle" />Slider Tabs</a
              >
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Flex Table <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/components-table-flex.html"
                ><Icon icon="feather:circle" />Base Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-compact.html"
                ><Icon icon="feather:circle" />Compact Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-media.html"
                ><Icon icon="feather:circle" />Media Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-advanced.html"
                ><Icon icon="feather:circle" />Advanced Table</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="/components-snacks.html">Snacks</a>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Plugins <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/components-plugins-alertify.html"
                ><Icon icon="feather:circle" />Alertify</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-autocomplete.html"
                ><Icon icon="feather:circle" />Autocomplete</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-pickaday.html"
                ><Icon icon="feather:circle" />Datepicker</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-choices.html"
                ><Icon icon="feather:circle" />ChoicesJs</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-nouislider.html"
                ><Icon icon="feather:circle" />NoUI Slider</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-filepond.html"
                ><Icon icon="feather:circle" />Filepond</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-lightgallery.html"
                ><Icon icon="feather:circle" />Light Gallery</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-videogallery.html"
                ><Icon icon="feather:circle" />Video Gallery</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-video-player.html"
                ><Icon icon="feather:circle" />Video Player</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-toasts.html"
                ><Icon icon="feather:circle" />Toasts</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-webuipopover.html"
                ><Icon icon="feather:circle" />WebUI Popover</a
              >
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Rich Text <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a
                class="is-submenu"
                href="/components-plugins-editor-summernote.html"
                ><Icon icon="feather:circle" />Summernote</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-editor-sun.html"
                ><Icon icon="feather:circle" />Sun Editor</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>