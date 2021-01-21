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
  title: 'Elements - Forms Selects - Vuero',
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
              <h1 class="title is-4">Selects</h1>
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
                    <span>Forms</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Selects</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Select</h3>
                    <p>
                      Vuero provides default styles for the native Html
                      <code>select</code> element. There's an additional wrapper
                      for the styles to apply properly. Please refer to the code
                      example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="select">
                        <select>
                          <option>Select a Hero</option>
                          <option>Superman</option>
                          <option>Batman</option>
                          <option>Spiderman</option>
                          <option>Deadpool</option>
                          <option>Spawn</option>
                          <option>Galactus</option>
                        </select>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;select&#x22;&#x3E;
        &#x3C;select&#x3E;
            &#x3C;option&#x3E;Select dropdown&#x3C;/option&#x3E;
            &#x3C;option&#x3E;With options&#x3C;/option&#x3E;
        &#x3C;/select&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Select</h3>
                    <p>
                      The Vuero select can have rounded edges. Like other
                      controls, simply add the <code>is-rounded</code> class to
                      the <code>select</code> wrapper element. Please refer to
                      the code example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="select is-rounded">
                        <select>
                          <option>Select a Hero</option>
                          <option>Superman</option>
                          <option>Batman</option>
                          <option>Spiderman</option>
                          <option>Deadpool</option>
                          <option>Spawn</option>
                          <option>Galactus</option>
                        </select>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;select is-rounded&#x22;&#x3E;
        &#x3C;select&#x3E;
            &#x3C;option&#x3E;Select dropdown&#x3C;/option&#x3E;
            &#x3C;option&#x3E;With options&#x3C;/option&#x3E;
        &#x3C;/select&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Font Awesome</h3>
                    <p>
                      Vuero selects can have icons attached to them. They work
                      pretty well with Font Awesome icons. You can add an icon
                      element inside the select. Please refer to the code
                      example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icons-left">
                        <div class="select">
                          <select>
                            <option selected>Country</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Spain</option>
                            <option>United Kingdom</option>
                          </select>
                        </div>
                        <div class="icon is-small is-left">
                          <i class="fas fa-globe"></i>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icons-left&#x22;&#x3E;
        &#x3C;div class=&#x22;select&#x22;&#x3E;
            &#x3C;select&#x3E;
                &#x3C;option selected&#x3E;Country&#x3C;/option&#x3E;
                &#x3C;option&#x3E;Select dropdown&#x3C;/option&#x3E;
                &#x3C;option&#x3E;With options&#x3C;/option&#x3E;
            &#x3C;/select&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;icon is-small is-left&#x22;&#x3E;
            &#x3C;i class=&#x22;fas fa-globe&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Line Icons</h3>
                    <p>
                      Vuero selects can have icons attached to them. They work
                      pretty well with Feather icons. You can add an icon
                      element inside the select. Please refer to the code
                      example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icons-left">
                        <div class="select">
                          <select>
                            <option selected>Country</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Spain</option>
                            <option>United Kingdom</option>
                          </select>
                        </div>
                        <div class="icon is-small is-left">
                          <i class="lnil lnil-basketball"></i>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icons-left&#x22;&#x3E;
        &#x3C;div class=&#x22;select&#x22;&#x3E;
            &#x3C;select&#x3E;
                &#x3C;option selected&#x3E;Country&#x3C;/option&#x3E;
                &#x3C;option&#x3E;Select dropdown&#x3C;/option&#x3E;
                &#x3C;option&#x3E;With options&#x3C;/option&#x3E;
            &#x3C;/select&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;icon is-small is-left&#x22;&#x3E;
            &#x3C;i class=&#x22;lnil lnil-basketball&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icons</h3>
                    <p>
                      Vuero selects can have icons attached to them. They work
                      pretty well with Line Icons. You can add an icon element
                      inside the select. Please refer to the code example for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icons-left">
                        <div class="select">
                          <select>
                            <option selected>Country</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Spain</option>
                            <option>United Kingdom</option>
                          </select>
                        </div>
                        <div class="icon is-small is-left">
                          <i class="iconify" data-icon="feather:globe"></i>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icons-left&#x22;&#x3E;
        &#x3C;div class=&#x22;select&#x22;&#x3E;
            &#x3C;select&#x3E;
                &#x3C;option selected&#x3E;Country&#x3C;/option&#x3E;
                &#x3C;option&#x3E;Select dropdown&#x3C;/option&#x3E;
                &#x3C;option&#x3E;With options&#x3C;/option&#x3E;
            &#x3C;/select&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;icon is-small is-left&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;globe&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Loading State</h3>
                    <p>
                      huro selects can be shown in a loading state. To apply
                      that style, simply add the <code>is-loading</code> class
                      to the select wrapping element. Please refer to the code
                      example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="select is-loading">
                        <select>
                          <option>Select a Hero</option>
                          <option>Superman</option>
                          <option>Batman</option>
                          <option>Spiderman</option>
                          <option>Deadpool</option>
                          <option>Spawn</option>
                          <option>Galactus</option>
                        </select>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;select is-loading&#x22;&#x3E;
        &#x3C;select&#x3E;
            &#x3C;option&#x3E;Select dropdown&#x3C;/option&#x3E;
            &#x3C;option&#x3E;With options&#x3C;/option&#x3E;
        &#x3C;/select&#x3E;
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
