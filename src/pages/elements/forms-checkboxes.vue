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

useTitle('Elements - Forms Checkboxes - Vuero')
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
              <h1 class="title is-4">Checkboxes</h1>
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
                    <span>Checkboxes</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Checkbox-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Outlined Checkbox</h3>
                    <p>
                      Vuero provides default styled checkboxes in 2 main styles,
                      <code>outlined</code> and <code>solid</code>. Those
                      checkboxes also support all main colors. The available
                      modifiers are <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>
                      <code>is-warning</code>, <code>is-danger</code>.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <label class="checkbox">
                          <input type="checkbox" checked />
                          <span></span>
                          Option 1
                        </label>

                        <label class="checkbox is-outlined is-primary">
                          <input type="checkbox" />
                          <span></span>
                          Option 2
                        </label>

                        <label class="checkbox is-outlined is-info">
                          <input type="checkbox" />
                          <span></span>
                          Option 3
                        </label>

                        <label class="checkbox is-outlined is-success">
                          <input type="checkbox" />
                          <span></span>
                          Option 4
                        </label>

                        <label class="checkbox is-outlined is-warning">
                          <input type="checkbox" />
                          <span></span>
                          Option 5
                        </label>

                        <label class="checkbox is-outlined is-danger">
                          <input type="checkbox" />
                          <span></span>
                          Option 6
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;checkbox&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22; checked&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 1
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 2
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 3
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 4
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 5
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 6
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Checkbox-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Outlined Circle</h3>
                    <p>
                      Vuero checkboxes can be circles instead of squares. Simply
                      add the <code>is-circle</code> modifier class to your
                      <code>checkbox</code> element. See the code example for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <label class="checkbox is-circle">
                          <input type="checkbox" />
                          <span></span>
                          Option 1
                        </label>

                        <label
                          class="checkbox is-outlined is-circle is-primary"
                        >
                          <input type="checkbox" />
                          <span></span>
                          Option 2
                        </label>

                        <label class="checkbox is-outlined is-circle is-info">
                          <input type="checkbox" />
                          <span></span>
                          Option 3
                        </label>

                        <label
                          class="checkbox is-outlined is-circle is-success"
                        >
                          <input type="checkbox" />
                          <span></span>
                          Option 4
                        </label>

                        <label
                          class="checkbox is-outlined is-circle is-warning"
                        >
                          <input type="checkbox" />
                          <span></span>
                          Option 5
                        </label>

                        <label class="checkbox is-outlined is-circle is-danger">
                          <input type="checkbox" />
                          <span></span>
                          Option 6
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;checkbox is-circle&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 1
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-circle is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 2
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-circle is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 3
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-circle is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 4
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-circle is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 5
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-outlined is-circle is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 6
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Checkbox-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Solid Checkbox</h3>
                    <p>
                      Vuero provides default styled checkboxes in 2 main styles,
                      <code>outlined</code> and <code>solid</code>. Those
                      checkboxes also support all main colors. The available
                      modifiers are <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>
                      <code>is-warning</code>, <code>is-danger</code>.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <label class="checkbox is-solid">
                          <input type="checkbox" />
                          <span></span>
                          Option 1
                        </label>

                        <label class="checkbox is-solid is-primary">
                          <input type="checkbox" />
                          <span></span>
                          Option 2
                        </label>

                        <label class="checkbox is-solid is-info">
                          <input type="checkbox" />
                          <span></span>
                          Option 3
                        </label>

                        <label class="checkbox is-solid is-success">
                          <input type="checkbox" />
                          <span></span>
                          Option 4
                        </label>

                        <label class="checkbox is-solid is-warning">
                          <input type="checkbox" />
                          <span></span>
                          Option 5
                        </label>

                        <label class="checkbox is-solid is-danger">
                          <input type="checkbox" />
                          <span></span>
                          Option 6
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;checkbox is-solid&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 1
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 2
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 3
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 4
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 5
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 6
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Checkbox-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Solid Circle</h3>
                    <p>
                      Vuero checkboxes can be circles instead of squares. Simply
                      add the <code>is-circle</code> modifier class to your
                      <code>checkbox</code> element. See the code example for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <label class="checkbox is-circle">
                          <input type="checkbox" />
                          <span></span>
                          Option 1
                        </label>

                        <label class="checkbox is-solid is-circle is-primary">
                          <input type="checkbox" />
                          <span></span>
                          Option 2
                        </label>

                        <label class="checkbox is-solid is-circle is-info">
                          <input type="checkbox" />
                          <span></span>
                          Option 3
                        </label>

                        <label class="checkbox is-solid is-circle is-success">
                          <input type="checkbox" />
                          <span></span>
                          Option 4
                        </label>

                        <label class="checkbox is-solid is-circle is-warning">
                          <input type="checkbox" />
                          <span></span>
                          Option 5
                        </label>

                        <label class="checkbox is-solid is-circle is-danger">
                          <input type="checkbox" />
                          <span></span>
                          Option 6
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field demo-select&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;checkbox is-circle&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 1 
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-circle is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 2
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-circle is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 3
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-circle is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 4
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-circle is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 5
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;checkbox is-solid is-circle is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;checkbox&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Option 6
        &#x3C;/label&#x3E;
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
