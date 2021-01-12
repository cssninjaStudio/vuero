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

useTitle('Components - Plugins Webuipopover - Vuero')
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
              <h1 class="title is-4">WebUI Popover</h1>
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
                    <span>WebUI Popover</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Text Popover-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Text Popover</h3>
                    <p>
                      Vuero popovers are a custom implementation of
                      WebUIPopover. You don't have to write any javascript code,
                      just use the popover attributes to set your content. The
                      text popover needs the
                      <code>data-toggle="popover"</code> to be initilized
                      properly. Check the code example to review the supported
                      attributes.You can check the plugin documentation on
                      <a href="https://github.com/sandywalker/webui-popover"
                        >Github</a
                      >. You can also access the javascript code by visiting the
                      <code>assets/js/popover.js</code> file.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Hover Popover"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit"
                      data-pop-position="top"
                    >
                      Hover Me
                    </button>
                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="click"
                      data-pop-width="220"
                      data-pop-title="Click Popover"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit"
                      data-pop-position="top"
                    >
                      Click Me
                    </button>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Hover Popover&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit&#x22;
    data-pop-position=&#x22;top&#x22;&#x3E;
        Hover Me
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;click&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Click Popover&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit&#x22;
    data-pop-position=&#x22;top&#x22;&#x3E;
        Click Me
&#x3C;/button&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Popover Position-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Popover Position</h3>
                    <p>
                      Vuero popovers support multiple positionning options. Not
                      that auto positionning is verry reliable and performant.
                      Here are all the possible values: auto, top, right,
                      bottom, left,top-right, top-left, bottom-right,
                      bottom-left, auto-top, auto-right, auto-bottom, auto-left,
                      horizontal, and vertical.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Left"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="left"
                    >
                      Left
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Top Left"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top-left"
                    >
                      Top Left
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Top"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top"
                    >
                      Top
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Top Right"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top-right"
                    >
                      Top Right
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Right"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="right"
                    >
                      Right
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Bottom Right"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="bottom-right"
                    >
                      Bottom Right
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Bottom"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="bottom"
                    >
                      Bottom
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Bottom Left"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="bottom-left"
                    >
                      Bottom Left
                    </button>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Left&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;left&#x22;&#x3E;
        Left
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Top Left&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top-left&#x22;&#x3E;
        Top Left
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Top&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top&#x22;&#x3E;
        Top
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Top Right&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top-right&#x22;&#x3E;
        Top Right
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Right&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;right&#x22;&#x3E;
        Right
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Bottom Right&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;bottom-right&#x22;&#x3E;
        Bottom Right
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Bottom&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;bottom&#x22;&#x3E;
        Bottom
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Bottom Left&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;bottom-left&#x22;&#x3E;
        Bottom Left
&#x3C;/button&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Header Image-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Header Image</h3>
                    <p>
                      You can use the extra attribute
                      <code>data-pop-avatar</code> if you want to pass an extra
                      avatar image url inside the popover header. You can access
                      the javascript code by visiting the
                      <code>assets/js/popover.js</code> file.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Alejandro B."
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top"
                      data-pop-avatar="/@images/avatars/photos/39.jpg"
                    >
                      Hover Me
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="click"
                      data-pop-width="220"
                      data-pop-title="Alice C."
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top"
                      data-pop-avatar="/@images/avatars/photos/7.jpg"
                    >
                      Click Me
                    </button>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Alejandro B.&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top&#x22;
    data-pop-avatar=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
        Hover Me
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;click&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Alice C.&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top&#x22;
    data-pop-avatar=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
        Click Me
&#x3C;/button&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Header Icon-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Header Icon</h3>
                    <p>
                      You can use the extra attributes
                      <code>data-pop-icon</code> and
                      <code>data-pop-iconbg</code> if you want to pass an extra
                      icon box inside the popover header. You can access the
                      javascript code by visiting the
                      <code>assets/js/popover.js</code> file.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Hover Popover"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top"
                      data-pop-icon="lnil lnil-crown-alt-1"
                      data-pop-iconbg="primary"
                    >
                      Primary
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Hover Popover"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top"
                      data-pop-icon="lnil lnil-crown-alt-1"
                      data-pop-iconbg="info"
                    >
                      Info
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Hover Popover"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top"
                      data-pop-icon="lnil lnil-crown-alt-1"
                      data-pop-iconbg="orange"
                    >
                      Orange
                    </button>

                    <button
                      class="button h-button is-dark-outlined"
                      data-toggle="popover"
                      data-pop-mode="hover"
                      data-pop-width="220"
                      data-pop-title="Hover Popover"
                      data-pop-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      data-pop-position="top"
                      data-pop-icon="lnil lnil-crown-alt-1"
                      data-pop-iconbg="green"
                    >
                      Green
                    </button>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Hover Popover&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top&#x22;
    data-pop-icon=&#x22;lnil lnil-crown-alt-1&#x22;
    data-pop-iconbg=&#x22;primary&#x22;&#x3E;
        Primary
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Hover Popover&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top&#x22;
    data-pop-icon=&#x22;lnil lnil-crown-alt-1&#x22;
    data-pop-iconbg=&#x22;info&#x22;&#x3E;
        Info
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Hover Popover&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top&#x22;
    data-pop-icon=&#x22;lnil lnil-crown-alt-1&#x22;
    data-pop-iconbg=&#x22;orange&#x22;&#x3E;
        Orange
&#x3C;/button&#x3E;

&#x3C;button class=&#x22;button h-button is-dark-outlined&#x22; data-toggle=&#x22;popover&#x22;
    data-pop-mode=&#x22;hover&#x22;
    data-pop-width=&#x22;220&#x22;
    data-pop-title=&#x22;Hover Popover&#x22;
    data-pop-content=&#x22;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#x22;
    data-pop-position=&#x22;top&#x22;
    data-pop-icon=&#x22;lnil lnil-crown-alt-1&#x22;
    data-pop-iconbg=&#x22;green&#x22;&#x3E;
        Green
&#x3C;/button&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--User Popover-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">User Popover</h3>
                    <p>
                      WebUIPopover can be used to create powerful rich popovers
                      that can work very well with asynchronous data. The only
                      caveat is that it is jQuery based. You can check the
                      plugin documentation on
                      <a href="https://github.com/sandywalker/webui-popover"
                        >Github</a
                      >. You can also access the javascript code by visiting the
                      <code>assets/js/popover.js</code> file.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/7.jpg"
                        alt=""
                        data-user-popover="0"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/9.jpg"
                        alt=""
                        data-user-popover="1"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/12.jpg"
                        alt=""
                        data-user-popover="2"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/8.jpg"
                        alt=""
                        data-user-popover="3"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/25.jpg"
                        alt=""
                        data-user-popover="4"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22; data-user-popover=&#x22;0&#x22;&#x3E;
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
