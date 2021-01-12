<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Elements - Colors - Vuero')
</script>

<template>
  <DefaultLayout>
    <ElementsSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      data-sidebar-open
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
              data-sidebar="elements-sidebar"
            >
              <span class="menu-toggle has-chevron">
                <span class="icon-box-toggle">
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Theme Colors</h1>
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
                  <RouterLink :to="{ name: 'elements-hub' }">
                    <span>Elements</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Theme Colors</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Theme Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Theme Colors</h3>
                    <p>
                      Vuero uses predefined SCSS color variables that you can
                      use if you are using the gulp project or another setup
                      that includes Sass compilation. SCSS variables are very
                      helpful, as you only need to change the variable value to
                      be able to change a color accross the hole theme. Also,
                      please note that <code>$accent</code> variable is never
                      directly used. It acts as counterpart of the
                      <code>$primary</code> color when you turn the dark mode
                      on.
                    </p>
                  </div>
                </div>

                <div class="columns is-multiline">
                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-primary"></div>
                      <div class="meta">
                        <span>$primary</span>
                        <span>#37105ff</span>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-accent"></div>
                      <div class="meta">
                        <span>$accent</span>
                        <span>#797bf2</span>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-info"></div>
                      <div class="meta">
                        <span>$info</span>
                        <span>#039BE5</span>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-success"></div>
                      <div class="meta">
                        <span>$success</span>
                        <span>#06d6a0</span>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-warning"></div>
                      <div class="meta">
                        <span>$warning</span>
                        <span>#faae42</span>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-danger"></div>
                      <div class="meta">
                        <span>$danger</span>
                        <span>#e62965</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-h-purple"></div>
                      <div class="meta">
                        <span>$h-purple</span>
                        <span>#8269B2</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-h-blue"></div>
                      <div class="meta">
                        <span>$h-blue</span>
                        <span>#37C3FF</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-h-green"></div>
                      <div class="meta">
                        <span>$h-green</span>
                        <span>#93E088</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-h-orange"></div>
                      <div class="meta">
                        <span>$h-orange</span>
                        <span>#FFA981</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-h-red"></div>
                      <div class="meta">
                        <span>$h-red</span>
                        <span>#F92B60</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-h-yellow"></div>
                      <div class="meta">
                        <span>$h-yellow</span>
                        <span>#FFD66E</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-fade-grey"></div>
                      <div class="meta">
                        <span>$fade-grey</span>
                        <span>#ededed</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-dark-text"></div>
                      <div class="meta">
                        <span>$dark-text</span>
                        <span>#283252</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-light-text"></div>
                      <div class="meta">
                        <span>$light-text</span>
                        <span>#a2a5b9</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-muted-grey"></div>
                      <div class="meta">
                        <span>$muted-grey</span>
                        <span>#999</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-placeholder"></div>
                      <div class="meta">
                        <span>$placeholder</span>
                        <span>#cecece</span>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="color-card">
                      <div class="color-dot is-dark"></div>
                      <div class="meta">
                        <span>$dark-sidebar</span>
                        <span>#232326</span>
                      </div>
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
