<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'basic' | 'forms'>('basic')
</script>

<template>
  <div id="elements-webapp-menu" class="webapp-subnavbar-inner tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs is-centered is-2">
        <ul>
          <li :class="[activeTab === 'basic' && 'is-active']">
            <a @click="activeTab = 'basic'">Basic UI</a>
          </li>
          <li :class="[activeTab === 'forms' && 'is-active']">
            <a @click="activeTab = 'forms'">Form Controls</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div
        id="elements-basic-pages-tab"
        class="tab-content"
        :class="[activeTab === 'basic' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">General</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements' }">
                      <i class="lnil lnil-home"></i>
                      <span>Elements Hub</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-colors' }">
                      <i class="lnil lnil-color-palette"></i>
                      <span>Colors</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-helpers' }">
                      <i class="lnil lnil-help"></i>
                      <span>Helpers</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Icons</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-lnil' }">
                      <span>Line Icons Light</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-lnir' }">
                      <span>Line Icons Regular</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-fa' }">
                      <span>Font Awesome 5</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-icons-feather' }">
                      <span>Feather Icons</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Base</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-buttons' }">
                      <span>Buttons</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-blocks' }">
                      <span>Blocks</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-content' }">
                      <span>Content</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-tags' }">
                      <span>Tags</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Advanced</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-cards-basic' }">
                      <span>Basic Cards</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-cards-advanced' }">
                      <span>Advanced Cards</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-cards-bulma' }">
                      <span>Bulma Cards</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-table' }">
                      <span>Table</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-tooltips' }">
                      <span>Tooltips</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="elements-forms-pages-tab"
        class="tab-content"
        :class="[activeTab === 'forms' && 'is-active']"
      >
        <div class="tab-content-inner">
          <div class="center has-slimscroll">
            <div class="columns">
              <div class="column is-3">
                <h4 class="column-heading">Input</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-inputs' }">
                      <span>Inputs</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-addons' }">
                      <span>Input Addons</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-textarea' }">
                      <span>Textarea</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Selects</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-selects' }">
                      <span>Regular</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-custom' }">
                      <span>Custom</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-file' }">
                      <span>File Input</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <h4 class="column-heading">Toggles</h4>
                <ul>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-checkboxes' }">
                      <span>Checkboxes</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-radios' }">
                      <span>Radio Buttons</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'elements-forms-switch' }">
                      <span>Switches</span>
                      <Icon icon="feather:circle" />
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="column is-3">
                <a href="https://cssninja.io" class="column-placeholder">
                  <img
                    class="light-image"
                    src="/@images/icons/misc/buoy.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/icons/misc/buoy-dark.svg"
                    alt=""
                  />
                  <h3>Support</h3>
                </a>
                <a
                  href="https://docs.huro.cssninja.io"
                  class="column-placeholder"
                >
                  <img
                    class="light-image"
                    src="/@images/icons/misc/docs.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/icons/misc/docs-dark.svg"
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
