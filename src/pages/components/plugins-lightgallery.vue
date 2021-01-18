<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useTitle('Components - Plugins Lightgallery - Vuero')
</script>

<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
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
              @click="toggleSidebar('components')"
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
              <h1 class="title is-4">Light Gallery</h1>
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
                    <span>Light Gallery</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Light Gallery-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Light Gallery</h3>
                    <p>
                      Vuero is integrated with LightgalleryJs, a performant
                      vanilla javascript lightbox library. You can check the
                      plugin documentation on
                      <a href="https://github.com/sachinchoolur/lightgallery.js"
                        >Github</a
                      >. You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The following
                      example shows you how it works with images.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner no-padding">
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
lightGallery(document.getElementById(&#x27;lightgallery&#x27;));

//MARKUP
&#x3C;div id=&#x22;lightgallery&#x22; class=&#x22;light-gallery-wrap&#x22;&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://via.placeholder.com/1600x900&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/1600x900&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="lightgallery" class="light-gallery-wrap">
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/1.jpg"
              >
                <img
                  src="/@images/photo/demo/apps/1.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/2.png"
              >
                <img
                  src="/@images/photo/demo/apps/2.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/3.png"
              >
                <img
                  src="/@images/photo/demo/apps/3.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/4.png"
              >
                <img
                  src="/@images/photo/demo/apps/4.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/5.png"
              >
                <img
                  src="/@images/photo/demo/apps/5.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/6.png"
              >
                <img
                  src="/@images/photo/demo/apps/6.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/7.png"
              >
                <img
                  src="/@images/photo/demo/apps/7.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/8.png"
              >
                <img
                  src="/@images/photo/demo/apps/8.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
              <a
                href="https://via.placeholder.com/1600x900"
                data-demo-href="/@images/photo/demo/apps/9.png"
              >
                <img
                  src="/@images/photo/demo/apps/9.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/1600x900'
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
