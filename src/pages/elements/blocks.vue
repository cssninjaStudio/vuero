<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

import * as examples from './blocks.examples'

const examplesIds = Object.keys(examples)
const display = ref<any>({})
for (const id of examplesIds) {
  display[id] = false
}

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Elements - Blocks - Vuero',
})
</script>

<template>
  <div>
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
        <h1 class="title is-4">Blocks</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
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
              <span>Blocks</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-12">
          <!--Media Flex-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Media Flex</h3>
              <p>
                Vuero provides a versatile and very flexible flex media element.
                Simply create and element with the following markup. Please note
                that this version does not have horizontal alignment. Check the
                markup for more details.
              </p>
              <a
                class="code-trigger"
                :class="[display.mediaFlexBlock && 'is-active']"
                @click="display.mediaFlexBlock = !display.mediaFlexBlock"
              >
                <span
                  v-show="display.mediaFlexBlock"
                  class="iconify open"
                  data-icon="feather:code"
                />
                <span
                  v-show="!display.mediaFlexBlock"
                  class="iconify close"
                  data-icon="feather:x"
                />
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <div class="l-card">
                    <div class="media-flex">
                      <div class="v-avatar">
                        <img
                          class="avatar"
                          src="/images/avatars/photos/9.jpg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Anna B.</span>
                        <span>UX Designer</span>
                      </div>
                      <div class="flex-end">
                        <TeamCardDropdown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HighlightJS
                v-if="display.mediaFlexBlock"
                language="vue"
                :code="examples.mediaFlexBlock"
              />
            </div>
          </div>

          <!--Media Flex-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">With Icon</h3>
              <p>
                Vuero provides a versatile and very flexible flex media element.
                The avatar can be replaced with an icon or any sort of element.
                Please note that this version does not have horizontal
                alignment. Check the markup for more details.
              </p>
              <a
                class="code-trigger"
                :class="[display.mediaFlexIconBlock && 'is-active']"
                @click="
                  display.mediaFlexIconBlock = !display.mediaFlexIconBlock
                "
              >
                <span
                  v-show="display.mediaFlexIconBlock"
                  class="iconify open"
                  data-icon="feather:code"
                />
                <span
                  v-show="!display.mediaFlexIconBlock"
                  class="iconify close"
                  data-icon="feather:x"
                />
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <div class="l-card">
                    <div class="media-flex">
                      <div class="v-icon is-success is-rounded">
                        <i class="iconify" data-icon="feather:clock"></i>
                      </div>
                      <div class="flex-meta">
                        <span>Team Tasks</span>
                        <span>View all tasks</span>
                      </div>
                      <div class="flex-end">
                        <button class="button v-button is-primary is-elevated">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HighlightJS
                v-if="display.mediaFlexIconBlock"
                language="vue"
                :code="examples.mediaFlexIconBlock"
              />
            </div>
          </div>

          <!--Media Flex Center-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Media Flex Center</h3>
              <p>
                Vuero provides a versatile and very flexible flex media element.
                Simply create and element with the following markup. Please note
                that this version has horizontal alignment. Check the markup for
                more details.
              </p>
              <a
                class="code-trigger"
                :class="[display.mediaFlexCenterBlock && 'is-active']"
                @click="
                  display.mediaFlexCenterBlock = !display.mediaFlexCenterBlock
                "
              >
                <span
                  v-show="display.mediaFlexCenterBlock"
                  class="iconify open"
                  data-icon="feather:code"
                />
                <span
                  v-show="!display.mediaFlexCenterBlock"
                  class="iconify close"
                  data-icon="feather:x"
                />
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <div class="l-card">
                    <div class="media-flex-center">
                      <div class="v-avatar">
                        <img
                          class="avatar"
                          src="/images/avatars/photos/9.jpg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Anna B.</span>
                        <span>UX Designer</span>
                      </div>
                      <div class="flex-end">
                        <TeamCardDropdown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HighlightJS
                v-if="display.mediaFlexCenterBlock"
                language="vue"
                :code="examples.mediaFlexCenterBlock"
              />
            </div>
          </div>

          <!--Media Flex-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">With Icon</h3>
              <p>
                Vuero provides a versatile and very flexible flex media element.
                The avatar can be replaced with an icon or any sort of element.
                Please note that this version does not have horizontal
                alignment. Check the markup for more details.
              </p>
              <a
                class="code-trigger"
                :class="[display.mediaFlexCenterIconBlock && 'is-active']"
                @click="
                  display.mediaFlexCenterIconBlock = !display.mediaFlexCenterIconBlock
                "
              >
                <span
                  v-show="display.mediaFlexCenterIconBlock"
                  class="iconify open"
                  data-icon="feather:code"
                />
                <span
                  v-show="!display.mediaFlexCenterIconBlock"
                  class="iconify close"
                  data-icon="feather:x"
                />
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <div class="l-card">
                    <div class="media-flex-center">
                      <div class="v-icon is-medium is-info is-rounded">
                        <i class="iconify" data-icon="feather:chrome"></i>
                      </div>
                      <div class="flex-meta">
                        <span>Browser Support</span>
                        <span>View browser support</span>
                      </div>
                      <div class="flex-end">
                        <button class="button v-button is-primary is-elevated">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HighlightJS
                v-if="display.mediaFlexCenterIconBlock"
                language="vue"
                :code="examples.mediaFlexCenterIconBlock"
              />
            </div>
          </div>

          <!--Mobile Responsive-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Mobile Responsive</h3>
              <p>
                Media flex blocks can be made responsive for a specific viewport
                by adding some classes. When set to responsive mode, the flex
                block elements stack to fit in the available space. To make a
                flex block responsive on mobile only, add the
                <code>is-responsive-mobile</code> class to the target
                <code>media-flex</code> or
                <code>media-flex-center</code> element. Resize your screen to
                see it in action.
              </p>
              <a
                class="code-trigger"
                :class="[display.mediaFlexCenterMobileBlock && 'is-active']"
                @click="
                  display.mediaFlexCenterMobileBlock = !display.mediaFlexCenterMobileBlock
                "
              >
                <span
                  v-show="display.mediaFlexCenterMobileBlock"
                  class="iconify open"
                  data-icon="feather:code"
                />
                <span
                  v-show="!display.mediaFlexCenterMobileBlock"
                  class="iconify close"
                  data-icon="feather:x"
                />
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <div class="l-card">
                    <div class="media-flex-center is-responsive-mobile">
                      <div class="v-avatar">
                        <img
                          class="avatar"
                          src="/images/avatars/photos/9.jpg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Anna B.</span>
                        <span>UX Designer</span>
                      </div>
                      <div class="flex-end">
                        <button class="button v-button is-primary is-elevated">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HighlightJS
                v-if="display.mediaFlexCenterMobileBlock"
                language="vue"
                :code="examples.mediaFlexCenterMobileBlock"
              />
            </div>
          </div>

          <!--Tablet Responsive-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Tablet Responsive</h3>
              <p>
                Media flex blocks can be made responsive for a specific viewport
                by adding some classes. When set to responsive mode, the flex
                block elements stack to fit in the available space. To make a
                flex block responsive on tablet portrait mode only, add the
                <code>is-responsive-tablet-p</code> class to the target
                <code>media-flex</code> or
                <code>media-flex-center</code> element. Resize your screen to
                see it in action.
              </p>
              <a
                class="code-trigger"
                :class="[display.mediaFlexCenterTabletBlock && 'is-active']"
                @click="
                  display.mediaFlexCenterTabletBlock = !display.mediaFlexCenterTabletBlock
                "
              >
                <span
                  v-show="display.mediaFlexCenterTabletBlock"
                  class="iconify open"
                  data-icon="feather:code"
                />
                <span
                  v-show="!display.mediaFlexCenterTabletBlock"
                  class="iconify close"
                  data-icon="feather:x"
                />
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <div class="l-card">
                    <div
                      class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
                    >
                      <div class="v-icon is-medium is-info is-rounded">
                        <i class="iconify" data-icon="feather:chrome"></i>
                      </div>
                      <div class="flex-meta">
                        <span>Browser Support</span>
                        <span>View browser support reports</span>
                      </div>
                      <div class="flex-end">
                        <button class="button v-button is-primary is-elevated">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HighlightJS
                v-if="display.mediaFlexCenterTabletBlock"
                language="vue"
                :code="examples.mediaFlexCenterTabletBlock"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
