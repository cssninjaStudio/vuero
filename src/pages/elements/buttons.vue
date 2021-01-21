<script setup lang="ts">
import type { Ref } from 'vue'
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

import * as examples from './buttons.examples'

const examplesIds = Object.keys(examples)
const display = ref<any>({})
for (const id of examplesIds) {
  display[id] = false
}

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Elements - Buttons - Vuero',
})
</script>

<template>
  <DefaultLayout>
    <ElementsSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="278"
      data-menu-item="#elements-sidebar-menu"
      data-mobile-item="#elements-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="toggleSidebar('elements')"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[activeSidebar !== 'none' && 'active']"
                  class="icon-box-toggle"
                >
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Buttons</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <nav
              class="breadcrumb has-bullet-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <RouterLink :to="{ name: 'index' }">
                    <span class="icon is-small is-solo">
                      <i class="iconify" data-icon="feather:home"></i>
                    </span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'elements' }">
                    <span>Elements</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Buttons</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--H-Button-->
                <ButtonSimpleDocumentation />

                <!--Solid Buttons-->
                <ButtonSolidDocumentation />

                <!--Light Buttons-->
                <ButtonLightDocumentation />

                <!--Outlined Buttons-->
                <ButtonOutlinedDocumentation />

                <!--Elevated Buttons-->
                <ButtonElevatedDocumentation />

                <!--Loading Buttons-->
                <ButtonLoadingDocumentation />

                <!--Disabled Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Disabled</h3>
                    <p>
                      Vuero buttons can be shown in a disabled state. To show a
                      disabled button, add the <code>disabled</code> html
                      attribute to the target button element.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.disabledButton && 'is-active']"
                      @click="display.disabledButton = !display.disabledButton"
                    >
                      <span
                        v-show="display.disabledButton"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.disabledButton"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-button is-primary is-disabled"
                        >Primary</a
                      >
                      <a class="button h-button is-info is-disabled">Info</a>
                      <a class="button h-button is-success is-disabled"
                        >Success</a
                      >
                      <a class="button h-button is-warning is-disabled"
                        >Warning</a
                      >
                      <a class="button h-button is-danger is-disabled"
                        >Danger</a
                      >
                    </div>

                    <HighlightJS
                      v-if="display.disabledButton"
                      language="vue"
                      class="highlight highlight-block"
                      :code="examples.disabledButton"
                    />
                  </div>
                </div>

                <!--Icon Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Font Awesome</h3>
                    <p>
                      Vuero buttons work well with Font Awesome Icons. Add an
                      <code>icon</code> element inside the button to handle
                      icons. You can also create square and circle buttons with
                      a single icon. Please refer to markup for detailed
                      examples.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.fontAwesomeButton && 'is-active']"
                      @click="
                        display.fontAwesomeButton = !display.fontAwesomeButton
                      "
                    >
                      <span
                        v-show="display.fontAwesomeButton"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.fontAwesomeButton"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <button class="button h-button is-primary is-elevated">
                        <span class="icon">
                          <i class="fab fa-twitter"></i>
                        </span>
                        <span>Tweet Now</span>
                      </button>
                      <button
                        class="button h-button is-success is-rounded is-elevated"
                      >
                        <span class="icon">
                          <i class="fas fa-check"></i>
                        </span>
                        <span>Save Changes</span>
                      </button>
                      <button class="button">
                        <span class="icon is-small">
                          <i class="fab fa-twitter"></i>
                        </span>
                      </button>
                      <button class="button is-primary is-circle is-elevated">
                        <span class="icon is-small">
                          <i class="fab fa-linkedin-in"></i>
                        </span>
                      </button>
                    </div>

                    <HighlightJS
                      v-if="display.fontAwesomeButton"
                      language="vue"
                      class="highlight highlight-block"
                      :code="examples.fontAwesomeButton"
                    />
                  </div>
                </div>

                <!--Icon Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icons</h3>
                    <p>
                      Vuero buttons work well with Feather Icons. Add an
                      <code>icon</code> element inside the button to handle
                      icons. You can also create square and circle buttons with
                      a single icon. Please refer to markup for detailed
                      examples.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.featherButton && 'is-active']"
                      @click="display.featherButton = !display.featherButton"
                    >
                      <span
                        v-show="display.featherButton"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.featherButton"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <button class="button h-button is-primary is-elevated">
                        <span class="icon">
                          <i class="iconify" data-icon="feather:twitter"></i>
                        </span>
                        <span>Tweet Now</span>
                      </button>
                      <button
                        class="button h-button is-danger is-rounded is-elevated"
                      >
                        <span class="icon">
                          <i class="iconify" data-icon="feather:gitlab"></i>
                        </span>
                        <span>Commit Code</span>
                      </button>
                      <button class="button">
                        <span class="icon is-small">
                          <i class="iconify" data-icon="feather:mail"></i>
                        </span>
                      </button>
                      <button class="button is-primary is-circle is-elevated">
                        <span class="icon is-small">
                          <i
                            class="iconify"
                            data-icon="feather:message-square"
                          ></i>
                        </span>
                      </button>
                    </div>

                    <HighlightJS
                      v-if="display.featherButton"
                      language="vue"
                      class="highlight highlight-block"
                      :code="examples.featherButton"
                    />
                  </div>
                </div>

                <!--Grouped Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Button Group</h3>
                    <p>
                      You can easily align buttons and group them together by
                      wrapping them inside a <code>buttons</code> element. You
                      can mix any button styles.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.groupButton && 'is-active']"
                      @click="display.groupButton = !display.groupButton"
                    >
                      <span
                        v-show="display.groupButton"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.groupButton"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <button class="button h-button">
                        <span class="icon">
                          <i class="iconify" data-icon="feather:eye"></i>
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button">
                        <span class="icon">
                          <i class="iconify" data-icon="feather:edit-2"></i>
                        </span>
                        <span>Edit</span>
                      </button>
                      <button class="button h-button is-success is-elevated">
                        <span class="icon">
                          <i class="fas fa-check"></i>
                        </span>
                        <span>Approve</span>
                      </button>
                    </div>

                    <HighlightJS
                      v-if="display.groupButton"
                      language="vue"
                      class="highlight highlight-block"
                      :code="examples.groupButton"
                    />
                  </div>
                </div>

                <!--Addon Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Addons</h3>
                    <p>
                      Vuero buttons can be grouped together in an addon styled
                      block of buttons. This makes creating conmplex interfaces
                      much more easier. Refer to markup for a detailed example.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.addonsButton && 'is-active']"
                      @click="display.addonsButton = !display.addonsButton"
                    >
                      <span
                        v-show="display.addonsButton"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.addonsButton"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field has-addons">
                      <p class="control">
                        <button class="button h-button">
                          <span class="icon is-small">
                            <i class="fas fa-align-left"></i>
                          </span>
                          <span>Left</span>
                        </button>
                      </p>
                      <p class="control">
                        <button class="button h-button">
                          <span class="icon is-small">
                            <i class="fas fa-align-center"></i>
                          </span>
                          <span>Center</span>
                        </button>
                      </p>
                      <p class="control">
                        <button class="button h-button">
                          <span class="icon is-small">
                            <i class="fas fa-align-right"></i>
                          </span>
                          <span>Right</span>
                        </button>
                      </p>
                    </div>

                    <HighlightJS
                      v-if="display.addonsButton"
                      language="vue"
                      class="highlight highlight-block"
                      :code="examples.addonsButton"
                    />
                  </div>
                </div>

                <!--H-Action-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">H-Action</h3>
                    <p>
                      Vuero also provides a simple button called
                      <code>h-action</code>. it doesn't come up with a lot of
                      modifiers like the H Button but is a solid alternative
                      when you want to use simple buttons.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.actionButton && 'is-active']"
                      @click="display.actionButton = !display.actionButton"
                    >
                      <span
                        v-show="display.actionButton"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.actionButton"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-action">Button</a>
                      <button class="button h-action is-rounded">Button</button>
                      <a class="button h-action is-hoverable">Button</a>
                      <button class="button h-action is-grey">Button</button>
                    </div>

                    <HighlightJS
                      v-if="display.actionButton"
                      language="vue"
                      class="highlight highlight-block"
                      :code="examples.actionButton"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
