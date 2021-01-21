<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Elements - Cards Basics - Vuero',
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
              <h1 class="title is-4">Basic Cards</h1>
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
                    <span>Basic Cards</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Basic Cards-->
                <div class="demo-card is-narrow">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Basic Cards</h3>
                    <p>
                      Vuero cards are very versatile and can be used in any type
                      of layout. Vuero provides 3 main basic cards with the
                      following classes: <code>.s-card</code>,
                      <code>.r-card</code> and <code>.l-card</code>. The main
                      difference each one of those is the border radius, giving
                      a unique look and feel to each one of them. If you explore
                      Vuero SCSS code, you will notice that they serve as a base
                      for numerous components, using the SCSS
                      <code>@extend</code> directive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column is-4">
                <div class="s-card demo-s-card">
                  <h3 class="title is-5">Iam an S-Card</h3>
                  <p>
                    I can be used as is in any layout. S Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="r-card demo-r-card">
                  <h3 class="title is-5">Iam an R-Card</h3>
                  <p>
                    I can be used as is in any layout. R Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="l-card demo-l-card">
                  <h3 class="title is-5">Iam an L-Card</h3>
                  <p>
                    I can be used as is in any layout. L Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Elevated Cards-->
                <div class="demo-card is-narrow has-margin-top">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Elevated Cards</h3>
                    <p>
                      Vuero cards can be elevated and show a slight box shadow.
                      To display elevated cards, simply add the
                      <code>is-raised</code> class to the target card element.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column is-4">
                <div class="s-card is-raised demo-s-card">
                  <h3 class="title is-5">Raised S-Card</h3>
                  <p>
                    I can be used as is in any layout. S Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="r-card is-raised demo-r-card">
                  <h3 class="title is-5">Raised R-Card</h3>
                  <p>
                    I can be used as is in any layout. R Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="l-card is-raised demo-l-card">
                  <h3 class="title is-5">Raised L-Card</h3>
                  <p>
                    I can be used as is in any layout. L Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Colored Cards-->
                <div class="demo-card is-narrow has-margin-top">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Colored Cards</h3>
                    <p>
                      Vuero cards can have colored backgrounds when you need
                      them to. To display Available color modifiers are
                      <code>.is-primary</code>, <code>.is-info</code>,
                      <code>.is-success</code>, <code>.is-warning</code> and
                      <code>.is-danger</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column is-4">
                <div class="s-card is-primary demo-s-card">
                  <h3 class="title is-5">Primary S-Card</h3>
                  <p>
                    I can be used as is in any layout. S Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="r-card is-secondary demo-r-card">
                  <h3 class="title is-5">Secondary R-Card</h3>
                  <p>
                    I can be used as is in any layout. R Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="l-card is-info demo-l-card">
                  <h3 class="title is-5">Info L-Card</h3>
                  <p>
                    I can be used as is in any layout. L Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="s-card is-success demo-s-card">
                  <h3 class="title is-5">Success S-Card</h3>
                  <p>
                    I can be used as is in any layout. S Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="r-card is-warning demo-r-card">
                  <h3 class="title is-5">Warning R-Card</h3>
                  <p>
                    I can be used as is in any layout. R Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
              <div class="column is-4">
                <div class="l-card is-danger demo-l-card">
                  <h3 class="title is-5">Danger L-Card</h3>
                  <p>
                    I can be used as is in any layout. L Cards are simple
                    containers that can hold any type of content, from simple
                    plain text to more structured markup.
                  </p>
                </div>
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Colored Cards-->
                <div class="demo-card is-narrow has-margin-top">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Structured Cards</h3>
                    <p>
                      Vuero cards can have a small flex header where you can put
                      come content. Reference the markup for more details about
                      usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-multiline">
              <div class="column is-4">
                <div class="s-card is-raised demo-s-card">
                  <div class="card-head">
                    <div class="media-flex-center no-margin">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/19.jpg"
                          alt=""
                          data-user-popover="17"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/germany.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Greta K.</span>
                        <span>Sales Manager</span>
                      </div>
                    </div>
                    <UserCardDropdown />
                  </div>
                  <div class="card-inner">
                    <p>
                      I can be used as is in any layout. L Cards are simple
                      containers that can hold any type of content, from simple
                      plain text to more structured markup.
                    </p>
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div class="r-card is-raised demo-r-card">
                  <div class="card-head">
                    <div class="media-flex-center no-margin">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/19.jpg"
                          alt=""
                          data-user-popover="17"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/germany.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Greta K.</span>
                        <span>Sales Manager</span>
                      </div>
                    </div>
                    <UserCardDropdown />
                  </div>
                  <div class="card-inner">
                    <p>
                      I can be used as is in any layout. L Cards are simple
                      containers that can hold any type of content, from simple
                      plain text to more structured markup.
                    </p>
                  </div>
                </div>
              </div>
              <div class="column is-4">
                <div class="l-card is-raised demo-l-card">
                  <div class="card-head">
                    <div class="media-flex-center no-margin">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/19.jpg"
                          alt=""
                          data-user-popover="17"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/germany.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Greta K.</span>
                        <span>Sales Manager</span>
                      </div>
                    </div>
                    <UserCardDropdown />
                  </div>
                  <div class="card-inner">
                    <p>
                      I can be used as is in any layout. L Cards are simple
                      containers that can hold any type of content, from simple
                      plain text to more structured markup.
                    </p>
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
