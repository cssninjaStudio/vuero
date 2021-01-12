<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Components - Plugins Toasts - Vuero')
</script>

<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      data-sidebar-open
      data-naver-offset="342"
      data-menu-item="#components-sidebar-menu"
      data-mobile-item="#components-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="components-sidebar"
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
              <h1 class="title is-4">Notyf</h1>
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
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Plugins</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Toasts</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Success Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Success Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The success
                      toast is one the 2 notyf default toasts.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="success-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Success Toast</a
                      >
                    </div>
                  </div>
                </div>

                <!--Error Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Error Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The error toast
                      is one the 2 notyf default toasts.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="error-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Error Toast</a
                      >
                    </div>
                  </div>
                </div>

                <!--Info Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Info Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The info toast
                      is a custom configured toast.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="info-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Info Toast</a
                      >
                    </div>
                  </div>
                </div>

                <!--Warning Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Warning Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The warning
                      toast is a custom configured toast.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="warning-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Warning Toast</a
                      >
                    </div>
                  </div>
                </div>

                <!--Primary Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Primary Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The primary
                      toast is a custom configured toast.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="primary-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Primary Toast</a
                      >
                    </div>
                  </div>
                </div>

                <!--Purple Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Purple Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The primary
                      toast is a custom configured toast.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="purple-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Purple Toast</a
                      >
                    </div>
                  </div>
                </div>

                <!--Blue Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Blue Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The primary
                      toast is a custom configured toast.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="blue-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Blue Toast</a
                      >
                    </div>
                  </div>
                </div>

                <!--Green Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Green Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The primary
                      toast is a custom configured toast.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="green-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Green Toast</a
                      >
                    </div>
                  </div>
                </div>

                <!--Orange Toast-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Orange Toast</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The primary
                      toast is a custom configured toast.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        id="orange-toast-demo"
                        class="button h-button is-rounded toast-trigger"
                        >Orange Toast</a
                      >
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
