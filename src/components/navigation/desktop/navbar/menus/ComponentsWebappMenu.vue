<script lang="ts">
import { defineComponent } from 'vue'

const ComponentsWebappMenu = defineComponent({
  name: 'ComponentsWebappMenu',
  components: {},
  setup() {
    // ComponentsWebappMenu - Composition API

    return {}
  },
})

export default ComponentsWebappMenu
</script>

<template>
  <div id="components-webapp-menu" class="webapp-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-2">
        <ul>
          <li data-tab="components-basic-pages-tab" class="is-active">
            <a>UI Components</a>
          </li>
          <li data-tab="components-plugins-pages-tab"><a>JS Plugins</a></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div id="components-basic-pages-tab" class="tab-content is-active">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">General</h4>
                <ul>
                  <li>
                    <a href="/components-avatars.html">
                      <span>Avatars</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-accordion-basic.html">
                      <span>Accordion</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-accordion-collapse.html">
                      <span>Collapse</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-accordion-images.html">
                      <span>Image Accordion</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-breadcrumb.html">
                      <span>Breadcrumb</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Interaction</h4>
                <ul>
                  <li>
                    <a href="/components-loader.html">
                      <span>Loader</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-dropdown.html">
                      <span>Dropdown</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-modal.html">
                      <span>Modal Dialogs</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-tabs-regular.html">
                      <span>Regular Tabs</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-tabs-slider.html">
                      <span>Slider Tabs</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Presentation</h4>
                <ul>
                  <li>
                    <a href="/components-icon-box.html">
                      <span>Icon Box</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-messages.html">
                      <span>Message</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-progress.html">
                      <span>Progress</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-snacks.html">
                      <span>Snacks</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Flex Table</h4>
                <ul>
                  <li>
                    <a href="/components-table-flex.html">
                      <span>Base Table</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-table-flex-compact.html">
                      <span>Compact Table</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-table-flex-media.html">
                      <span>Media Table</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-table-flex-advanced.html">
                      <span>Advanced Table</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="components-plugins-pages-tab" class="tab-content">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <ul>
                  <li>
                    <a href="/components-plugins-alertify.html">
                      <span>Alertify</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-autocomplete.html">
                      <span>Autocomplete</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-datepicker.html">
                      <span>Datepicker</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-choices.html">
                      <span>Choices JS</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <ul>
                  <li>
                    <a href="/components-plugins-filepond.html">
                      <span>Filepond</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-lightgallery.html">
                      <span>Light Gallery</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-videogallery.html">
                      <span>Video Gallery</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-video-player.html">
                      <span>Video Player</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <ul>
                  <li>
                    <a href="/components-plugins-toasts.html">
                      <span>Toast Messages</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-webuipopover.html">
                      <span>WebUI Popovers</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-nouislider.html">
                      <span>NoUI Slider</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-editor-summernote.html">
                      <span>Summernote</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/components-plugins-editor-sun.html">
                      <span>Sun Editor</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a
                  href="https://cssninja.io"
                  target="_blank"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="assets/img/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="assets/img/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  target="_blank"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="assets/img/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="assets/img/icons/misc/docs-dark.svg"
                    alt=""
                  />
                  <h3>Documentation</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>