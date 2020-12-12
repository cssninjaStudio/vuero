<script lang="ts">
import { defineComponent } from 'vue'

const ElementsWebappMenu = defineComponent({
  name: 'ElementsWebappMenu',
  components: {},
  setup() {
    // ElementsWebappMenu - Composition API

    return {}
  },
})

export default ElementsWebappMenu
</script>

<template>
  <div id="elements-webapp-menu" class="webapp-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-2">
        <ul>
          <li data-tab="elements-basic-pages-tab" class="is-active">
            <a>Basic UI</a>
          </li>
          <li data-tab="elements-forms-pages-tab"><a>Form Controls</a></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div id="elements-basic-pages-tab" class="tab-content is-active">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">General</h4>
                <ul>
                  <li>
                    <a href="/elements-hub.html">
                      <i class="lnil lnil-home"></i>
                      <span>Elements Hub</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-colors.html">
                      <i class="lnil lnil-color-palette"></i>
                      <span>Colors</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-helpers.html">
                      <i class="lnil lnil-help"></i>
                      <span>Helpers</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Icons</h4>
                <ul>
                  <li>
                    <a href="/elements-icons-lnil.html">
                      <span>Line Icons Light</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-icons-lnir.html">
                      <span>Line Icons Regular</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-icons-fa.html">
                      <span>Font Awesome 5</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-icons-feather.html">
                      <span>Feather Icons</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Base</h4>
                <ul>
                  <li>
                    <a href="/elements-buttons.html">
                      <span>Buttons</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-blocks.html">
                      <span>Blocks</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-content.html">
                      <span>Content</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-tags.html">
                      <span>Tags</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Advanced</h4>
                <ul>
                  <li>
                    <a href="/elements-cards-basic.html">
                      <span>Basic Cards</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-cards-advanced.html">
                      <span>Advanced Cards</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-cards-bulma.html">
                      <span>Bulma Cards</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-table.html">
                      <span>Table</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-tooltips.html">
                      <span>Tooltips</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="elements-forms-pages-tab" class="tab-content">
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Input</h4>
                <ul>
                  <li>
                    <a href="/elements-forms-inputs.html">
                      <span>Inputs</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-forms-addons.html">
                      <span>Input Addons</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-forms-textarea.html">
                      <span>Textarea</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Selects</h4>
                <ul>
                  <li>
                    <a href="/elements-forms-selects.html">
                      <span>Regular</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-forms-custom.html">
                      <span>Custom</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-forms-file.html">
                      <span>File Input</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Toggles</h4>
                <ul>
                  <li>
                    <a href="/elements-forms-checkboxes.html">
                      <span>Checkboxes</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-forms-radios.html">
                      <span>Radio Buttons</span>
                      <i data-feather="circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/elements-forms-switch.html">
                      <span>Switches</span>
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