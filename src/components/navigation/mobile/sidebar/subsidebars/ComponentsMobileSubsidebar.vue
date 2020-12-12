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
                ><i data-feather="circle"></i>Accordion</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-accordion-collapse.html"
                ><i data-feather="circle"></i>Collapse</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-accordion-images.html"
                ><i data-feather="circle"></i>Image Accordion</a
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
                ><i data-feather="circle"></i>Regular Tabs</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-tabs-slider.html"
                ><i data-feather="circle"></i>Slider Tabs</a
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
                ><i data-feather="circle"></i>Base Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-compact.html"
                ><i data-feather="circle"></i>Compact Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-media.html"
                ><i data-feather="circle"></i>Media Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-advanced.html"
                ><i data-feather="circle"></i>Advanced Table</a
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
                ><i data-feather="circle"></i>Alertify</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-autocomplete.html"
                ><i data-feather="circle"></i>Autocomplete</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-pickaday.html"
                ><i data-feather="circle"></i>Datepicker</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-choices.html"
                ><i data-feather="circle"></i>ChoicesJs</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-nouislider.html"
                ><i data-feather="circle"></i>NoUI Slider</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-filepond.html"
                ><i data-feather="circle"></i>Filepond</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-lightgallery.html"
                ><i data-feather="circle"></i>Light Gallery</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-videogallery.html"
                ><i data-feather="circle"></i>Video Gallery</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-video-player.html"
                ><i data-feather="circle"></i>Video Player</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-toasts.html"
                ><i data-feather="circle"></i>Toasts</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-webuipopover.html"
                ><i data-feather="circle"></i>WebUI Popover</a
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
                ><i data-feather="circle"></i>Summernote</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-editor-sun.html"
                ><i data-feather="circle"></i>Sun Editor</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>