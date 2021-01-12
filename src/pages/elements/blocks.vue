<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'elements'
})

useTitle('Elements - Blocks - Vuero')
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
              <h1 class="title is-4">Blocks</h1>
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
                      <Icon icon="feather:home" />
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
                      Vuero provides a versatile and very flexible flex media
                      element. Simply create and element with the following
                      markup. Please note that this version does not have
                      horizontal alignment. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="l-card">
                          <div class="media-flex">
                            <div class="h-avatar">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/9.jpg"
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

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;media-flex&#x22;&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-meta&#x22;&#x3E;
        &#x3C;span&#x3E;Anna B.&#x3C;/span&#x3E;
        &#x3C;span&#x3E;UX Designer&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-end&#x22;&#x3E;
        &#x3C;!--Your action here (dropdown, button etc...)--&#x3E;                                              
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Media Flex-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">With Icon</h3>
                    <p>
                      Vuero provides a versatile and very flexible flex media
                      element. The avatar can be replaced with an icon or any
                      sort of element. Please note that this version does not
                      have horizontal alignment. Check the markup for more
                      details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="l-card">
                          <div class="media-flex">
                            <div class="h-icon is-success is-rounded">
                              <Icon icon="feather:clock" />
                            </div>
                            <div class="flex-meta">
                              <span>Team Tasks</span>
                              <span>View all tasks</span>
                            </div>
                            <div class="flex-end">
                              <button
                                class="button h-button is-primary is-elevated"
                              >
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;media-flex&#x22;&#x3E;
    &#x3C;div class=&#x22;h-icon is-success is-rounded&#x22;&#x3E;
        &#x3C;i data-feather=&#x22;clock&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-meta&#x22;&#x3E;
        &#x3C;span&#x3E;Team Tasks&#x3C;/span&#x3E;
        &#x3C;span&#x3E;View all tasks&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-end&#x22;&#x3E;
        &#x3C;!--Your action here (dropdown, button etc...)--&#x3E;                                              
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Media Flex Center-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Media Flex Center</h3>
                    <p>
                      Vuero provides a versatile and very flexible flex media
                      element. Simply create and element with the following
                      markup. Please note that this version has horizontal
                      alignment. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="l-card">
                          <div class="media-flex-center">
                            <div class="h-avatar">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/9.jpg"
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

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;media-flex-center&#x22;&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-meta&#x22;&#x3E;
        &#x3C;span&#x3E;Anna B.&#x3C;/span&#x3E;
        &#x3C;span&#x3E;UX Designer&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-end&#x22;&#x3E;
        &#x3C;!--Your action here (dropdown, button etc...)--&#x3E;                                              
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Media Flex-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">With Icon</h3>
                    <p>
                      Vuero provides a versatile and very flexible flex media
                      element. The avatar can be replaced with an icon or any
                      sort of element. Please note that this version does not
                      have horizontal alignment. Check the markup for more
                      details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="l-card">
                          <div class="media-flex-center">
                            <div class="h-icon is-medium is-info is-rounded">
                              <Icon icon="feather:chrome" />
                            </div>
                            <div class="flex-meta">
                              <span>Browser Support</span>
                              <span>View browser support</span>
                            </div>
                            <div class="flex-end">
                              <button
                                class="button h-button is-primary is-elevated"
                              >
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;media-flex-center&#x22;&#x3E;
    &#x3C;div class=&#x22;h-icon is-info is-rounded&#x22;&#x3E;
        &#x3C;i data-feather=&#x22;chrome&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-meta&#x22;&#x3E;
        &#x3C;span&#x3E;Browser Support&#x3C;/span&#x3E;
        &#x3C;span&#x3E;View browser support&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-end&#x22;&#x3E;
        &#x3C;!--Your action here (dropdown, button etc...)--&#x3E;                                              
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Mobile Responsive-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Mobile Responsive</h3>
                    <p>
                      Media flex blocks can be made responsive for a specific
                      viewport by adding some classes. When set to responsive
                      mode, the flex block elements stack to fit in the
                      available space. To make a flex block responsive on mobile
                      only, add the <code>is-responsive-mobile</code> class to
                      the target <code>media-flex</code> or
                      <code>media-flex-center</code> element. Resize your screen
                      to see it in action.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="l-card">
                          <div class="media-flex-center is-responsive-mobile">
                            <div class="h-avatar">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/9.jpg"
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
                              <button
                                class="button h-button is-primary is-elevated"
                              >
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;media-flex-center is-responsive-mobile&#x22;&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-meta&#x22;&#x3E;
        &#x3C;span&#x3E;Anna B.&#x3C;/span&#x3E;
        &#x3C;span&#x3E;UX Designer&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-end&#x22;&#x3E;
        &#x3C;!--Your action here (dropdown, button etc...)--&#x3E;                                              
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tablet Responsive-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Tablet Responsive</h3>
                    <p>
                      Media flex blocks can be made responsive for a specific
                      viewport by adding some classes. When set to responsive
                      mode, the flex block elements stack to fit in the
                      available space. To make a flex block responsive on tablet
                      portrait mode only, add the
                      <code>is-responsive-tablet-p</code> class to the target
                      <code>media-flex</code> or
                      <code>media-flex-center</code> element. Resize your screen
                      to see it in action.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="l-card">
                          <div
                            class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
                          >
                            <div class="h-icon is-medium is-info is-rounded">
                              <Icon icon="feather:chrome" />
                            </div>
                            <div class="flex-meta">
                              <span>Browser Support</span>
                              <span>View browser support reports</span>
                            </div>
                            <div class="flex-end">
                              <button
                                class="button h-button is-primary is-elevated"
                              >
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;media-flex-center is-responsive-mobile is-responsive-tablet-p&#x22;&#x3E;
    &#x3C;div class=&#x22;h-icon is-info is-rounded&#x22;&#x3E;
        &#x3C;i data-feather=&#x22;chrome&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-meta&#x22;&#x3E;
        &#x3C;span&#x3E;Browser Support&#x3C;/span&#x3E;
        &#x3C;span&#x3E;View browser support&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;flex-end&#x22;&#x3E;
        &#x3C;!--Your action here (dropdown, button etc...)--&#x3E;                                              
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
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
