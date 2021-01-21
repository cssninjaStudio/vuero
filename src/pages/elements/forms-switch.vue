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
  title: 'Elements - Forms Switch - Vuero',
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
              <h1 class="title is-4">Switch</h1>
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
                    <span>Switch</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Switch-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Switch</h3>
                    <p>
                      Vuero provides nicely styled switch checkboxes when you
                      need to display such control in yoour forms. Vuero
                      switches have several color modififers. Available
                      modifiers are
                      <code>is-primary</code>, <code>is-success</code>,
                      <code>is-info</code> <code>is-warning</code>,
                      <code>is-danger</code>. Please refer to the markup for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped demo-select">
                      <div class="control">
                        <label class="form-switch">
                          <input type="checkbox" class="is-switch" />
                          <i></i>
                        </label>
                      </div>

                      <div class="control">
                        <label class="form-switch is-primary">
                          <input type="checkbox" class="is-switch" checked />
                          <i></i>
                        </label>
                      </div>

                      <div class="control">
                        <label class="form-switch is-success">
                          <input type="checkbox" class="is-switch" checked />
                          <i></i>
                        </label>
                      </div>

                      <div class="control">
                        <label class="form-switch is-info">
                          <input type="checkbox" class="is-switch" checked />
                          <i></i>
                        </label>
                      </div>

                      <div class="control">
                        <label class="form-switch is-warning">
                          <input type="checkbox" class="is-switch" checked />
                          <i></i>
                        </label>
                      </div>

                      <div class="control">
                        <label class="form-switch is-danger">
                          <input type="checkbox" class="is-switch" checked />
                          <i></i>
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field is-grouped&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;form-switch&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;is-switch&#x22;&#x3E;
            &#x3C;i&#x3E;&#x3C;/i&#x3E;
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;form-switch is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;is-switch&#x22; checked&#x3E;
            &#x3C;i&#x3E;&#x3C;/i&#x3E;
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;form-switch is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;is-switch&#x22; checked&#x3E;
            &#x3C;i&#x3E;&#x3C;/i&#x3E;
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;form-switch is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;is-switch&#x22; checked&#x3E;
            &#x3C;i&#x3E;&#x3C;/i&#x3E;
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;form-switch is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;is-switch&#x22; checked&#x3E;
            &#x3C;i&#x3E;&#x3C;/i&#x3E;
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;form-switch is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;is-switch&#x22; checked&#x3E;
            &#x3C;i&#x3E;&#x3C;/i&#x3E;
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Thin Switch-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Thin Switch</h3>
                    <p>
                      Vuero also provides thin switch checkboxes when you need
                      to display such control in yoour forms. Vuero switches
                      have several color modififers. Available modifiers are
                      <code>is-primary</code>, <code>is-success</code>,
                      <code>is-info</code> <code>is-warning</code>,
                      <code>is-danger</code>. Please refer to the markup for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped demo-select">
                      <div class="control">
                        <div class="thin-switch">
                          <input
                            id="thin-switch-1"
                            class="input"
                            type="checkbox"
                          />
                          <label for="thin-switch-1" class="slider"></label>
                        </div>
                      </div>

                      <div class="control">
                        <div class="thin-switch is-primary">
                          <input
                            id="thin-switch-2"
                            class="input"
                            type="checkbox"
                            checked
                          />
                          <label for="thin-switch-2" class="slider"></label>
                        </div>
                      </div>

                      <div class="control">
                        <div class="thin-switch is-success">
                          <input
                            id="thin-switch-3"
                            class="input"
                            type="checkbox"
                            checked
                          />
                          <label for="thin-switch-3" class="slider"></label>
                        </div>
                      </div>

                      <div class="control">
                        <div class="thin-switch is-info">
                          <input
                            id="thin-switch-4"
                            class="input"
                            type="checkbox"
                            checked
                          />
                          <label for="thin-switch-4" class="slider"></label>
                        </div>
                      </div>

                      <div class="control">
                        <div class="thin-switch is-warning">
                          <input
                            id="thin-switch-5"
                            class="input"
                            type="checkbox"
                            checked
                          />
                          <label for="thin-switch-5" class="slider"></label>
                        </div>
                      </div>

                      <div class="control">
                        <div class="thin-switch is-danger">
                          <input
                            id="thin-switch-6"
                            class="input"
                            type="checkbox"
                            checked
                          />
                          <label for="thin-switch-6" class="slider"></label>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field is-grouped&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;thin-switch&#x22;&#x3E;
            &#x3C;input id=&#x22;thin-switch-1&#x22; class=&#x22;input&#x22; type=&#x22;checkbox&#x22; /&#x3E;
            &#x3C;label for=&#x22;thin-switch-1&#x22; class=&#x22;slider&#x22;&#x3E;&#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;thin-switch is-primary&#x22;&#x3E;
            &#x3C;input id=&#x22;thin-switch-2&#x22; class=&#x22;input&#x22; type=&#x22;checkbox&#x22; checked /&#x3E;
            &#x3C;label for=&#x22;thin-switch-2&#x22; class=&#x22;slider&#x22;&#x3E;&#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;thin-switch is-success&#x22;&#x3E;
            &#x3C;input id=&#x22;thin-switch-3&#x22; class=&#x22;input&#x22; type=&#x22;checkbox&#x22; checked /&#x3E;
            &#x3C;label for=&#x22;thin-switch-3&#x22; class=&#x22;slider&#x22;&#x3E;&#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;thin-switch is-info&#x22;&#x3E;
            &#x3C;input id=&#x22;thin-switch-4&#x22; class=&#x22;input&#x22; type=&#x22;checkbox&#x22; checked /&#x3E;
            &#x3C;label for=&#x22;thin-switch-4&#x22; class=&#x22;slider&#x22;&#x3E;&#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;thin-switch is-warning&#x22;&#x3E;
            &#x3C;input id=&#x22;thin-switch-5&#x22; class=&#x22;input&#x22; type=&#x22;checkbox&#x22; checked /&#x3E;
            &#x3C;label for=&#x22;thin-switch-5&#x22; class=&#x22;slider&#x22;&#x3E;&#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;thin-switch is-danger&#x22;&#x3E;
            &#x3C;input id=&#x22;thin-switch-6&#x22; class=&#x22;input&#x22; type=&#x22;checkbox&#x22; checked /&#x3E;
            &#x3C;label for=&#x22;thin-switch-6&#x22; class=&#x22;slider&#x22;&#x3E;&#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Switch-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Switch Block</h3>
                    <p>
                      You might have to add a label to your switches in some
                      cases. If so, use the switch block markup, which provides
                      a nice and clean flexbox layout. See the code example for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="switch-block">
                      <label class="form-switch">
                        <input type="checkbox" class="is-switch" checked />
                        <i></i>
                      </label>
                      <div class="text">
                        <span>Some option</span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;switch-block&#x22;&#x3E;
    &#x3C;label class=&#x22;form-switch&#x22;&#x3E;
        &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;is-switch&#x22; checked&#x3E;
        &#x3C;i&#x3E;&#x3C;/i&#x3E;
    &#x3C;/label&#x3E;
    &#x3C;div class=&#x22;text&#x22;&#x3E;
        &#x3C;span&#x3E;Some option&#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Switch-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Thin Switch Block</h3>
                    <p>
                      You might have to add a label to your switches in some
                      cases. If so, use the switch block markup, which provides
                      a nice and clean flexbox layout. See the code example for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="thin-switch-block">
                      <div class="thin-switch">
                        <input
                          id="thin-switch-7"
                          class="input"
                          type="checkbox"
                          checked
                        />
                        <label for="thin-switch-7" class="slider"></label>
                      </div>
                      <div class="text">
                        <span>Some option</span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;thin-switch-block&#x22;&#x3E;
    &#x3C;div class=&#x22;thin-switch&#x22;&#x3E;
        &#x3C;input id=&#x22;thin-switch-7&#x22; class=&#x22;input&#x22; type=&#x22;checkbox&#x22; checked /&#x3E;
        &#x3C;label for=&#x22;thin-switch-7&#x22; class=&#x22;slider&#x22;&#x3E;&#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;text&#x22;&#x3E;
        &#x3C;span&#x3E;Some option&#x3C;/span&#x3E;
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
