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

useTitle('Elements - Tags - Vuero')
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
              <h1 class="title is-4">Tags & Badges</h1>
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
                    <span>Tags &amp; Badges</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Tags-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Tags</h3>
                    <p>
                      Vuero offers a tag component than can be customized to fit
                      any needs. Tags can have multiple colors. Available
                      modifier classes are <code>is-primary</code>,
                      <code>is-info</code>, <code>is-success</code>,
                      <code>is-warning</code>, <code>is-danger</code>,
                      <code>is-light</code>, <code>is-white</code>,
                      <code>is-solid</code>.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <div class="tags">
                      <span class="tag">Default</span>
                      <span class="tag is-light">Light</span>
                      <span class="tag is-white">White</span>
                      <span class="tag is-solid">Solid</span>
                      <span class="tag is-primary">Primary</span>
                      <span class="tag is-info">Info</span>
                      <span class="tag is-success">Success</span>
                      <span class="tag is-warning">Warning</span>
                      <span class="tag is-danger">Danger</span>
                      <span class="tag is-orange">Orange</span>
                      <span class="tag is-blue">Blue</span>
                      <span class="tag is-green">Green</span>
                      <span class="tag is-purple">Purple</span>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag&#x22;&#x3E;Default&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-light&#x22;&#x3E;Light&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-white&#x22;&#x3E;White&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-solid&#x22;&#x3E;Solid&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-primary&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-info&#x22;&#x3E;Info&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-success&#x22;&#x3E;Success&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-warning&#x22;&#x3E;Warning&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-danger&#x22;&#x3E;Danger&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-orange&#x22;&#x3E;Orange&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-blue&#x22;&#x3E;Blue&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-green&#x22;&#x3E;Green&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-purple&#x22;&#x3E;Purple&#x3C;/span&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tags-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Tags</h3>
                    <p>
                      Vuero tags can have rounded edges. Use the
                      <code>is-rounded</code> modifier class on a
                      <code>tag</code> element to apply a rounded style. See the
                      code examples for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <div class="tags">
                      <span class="tag is-rounded">Default</span>
                      <span class="tag is-rounded is-light">Light</span>
                      <span class="tag is-rounded is-white">White</span>
                      <span class="tag is-rounded is-solid">Solid</span>
                      <span class="tag is-rounded is-primary">Primary</span>
                      <span class="tag is-rounded is-info">Info</span>
                      <span class="tag is-rounded is-success">Success</span>
                      <span class="tag is-rounded is-warning">Warning</span>
                      <span class="tag is-rounded is-danger">Danger</span>
                      <span class="tag is-rounded is-orange">Orange</span>
                      <span class="tag is-rounded is-blue">Blue</span>
                      <span class="tag is-rounded is-green">Green</span>
                      <span class="tag is-rounded is-purple">Purple</span>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag is-rounded&#x22;&#x3E;Default&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-light&#x22;&#x3E;Light&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-white&#x22;&#x3E;White&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid&#x22;&#x3E;Solid&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-primary&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-info&#x22;&#x3E;Info&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-success&#x22;&#x3E;Success&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-warning&#x22;&#x3E;Warning&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-danger&#x22;&#x3E;Danger&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-orange&#x22;&#x3E;Orange&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-blue&#x22;&#x3E;Blue&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-green&#x22;&#x3E;Green&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-purple&#x22;&#x3E;Purple&#x3C;/span&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tags-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Outlined Tags</h3>
                    <p>
                      Vuero tags can have an outlined style. Use the
                      <code>is-outlined</code> modifier class on a
                      <code>tag</code> element to apply an outlined style. See
                      the code examples for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <div class="tags">
                      <span class="tag is-rounded is-primary is-outlined"
                        >Primary</span
                      >
                      <span class="tag is-rounded is-info is-outlined"
                        >Info</span
                      >
                      <span class="tag is-rounded is-success is-outlined"
                        >Success</span
                      >
                      <span class="tag is-rounded is-warning is-outlined"
                        >Warning</span
                      >
                      <span class="tag is-rounded is-danger is-outlined"
                        >Danger</span
                      >
                      <span class="tag is-rounded is-orange is-outlined"
                        >Orange</span
                      >
                      <span class="tag is-rounded is-blue is-outlined"
                        >Blue</span
                      >
                      <span class="tag is-rounded is-green is-outlined"
                        >Green</span
                      >
                      <span class="tag is-rounded is-purple is-outlined"
                        >Purple</span
                      >
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag is-rounded is-primary is-outlined&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-info is-outlined&#x22;&#x3E;Info&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-success is-outlined&#x22;&#x3E;Success&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-warning is-outlined&#x22;&#x3E;Warning&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-danger is-outlined&#x22;&#x3E;Danger&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-orange is-outlined&#x22;&#x3E;Orange&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-blue is-outlined&#x22;&#x3E;Blue&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-green is-outlined&#x22;&#x3E;Green&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-purple is-outlined&#x22;&#x3E;Purple&#x3C;/span&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tags-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Light Colors</h3>
                    <p>
                      Vuero tags can have light background colors. Use the
                      <code>is-light</code> modifier class on a solid color
                      <code>tag</code> element to apply an light style. See the
                      code examples for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <div class="tags">
                      <span class="tag is-rounded is-primary is-light"
                        >Primary</span
                      >
                      <span class="tag is-rounded is-info is-light">Info</span>
                      <span class="tag is-rounded is-success is-light"
                        >Success</span
                      >
                      <span class="tag is-rounded is-warning is-light"
                        >Warning</span
                      >
                      <span class="tag is-rounded is-danger is-light"
                        >Danger</span
                      >
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag is-rounded is-primary is-light&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-info is-light&#x22;&#x3E;Info&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-success is-light&#x22;&#x3E;Success&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-warning is-light&#x22;&#x3E;Warning&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-danger is-light&#x22;&#x3E;Danger&#x3C;/span&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tags-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Elevated Tags</h3>
                    <p>
                      Vuero tags can be elevated. Use the
                      <code>is-elevated</code> modifier class on a solid color
                      <code>tag</code> element to apply an elevated style. See
                      the code examples for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <div class="tags">
                      <span class="tag is-rounded is-elevated">Default</span>
                      <span class="tag is-rounded is-solid is-elevated"
                        >Solid</span
                      >
                      <span class="tag is-rounded is-primary is-elevated"
                        >Primary</span
                      >
                      <span class="tag is-rounded is-info is-elevated"
                        >Info</span
                      >
                      <span class="tag is-rounded is-success is-elevated"
                        >Success</span
                      >
                      <span class="tag is-rounded is-warning is-elevated"
                        >Warning</span
                      >
                      <span class="tag is-rounded is-danger is-elevated"
                        >Danger</span
                      >
                      <span class="tag is-rounded is-orange is-elevated"
                        >Orange</span
                      >
                      <span class="tag is-rounded is-blue is-elevated"
                        >Blue</span
                      >
                      <span class="tag is-rounded is-green is-elevated"
                        >Green</span
                      >
                      <span class="tag is-rounded is-purple is-elevated"
                        >Purple</span
                      >
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag is-rounded is-elevated&#x22;&#x3E;Default&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid is-elevated&#x22;&#x3E;Solid&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-primary is-elevated&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-info is-elevated&#x22;&#x3E;Info&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-success is-elevated&#x22;&#x3E;Success&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-warning is-elevated&#x22;&#x3E;Warning&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-danger is-elevated&#x22;&#x3E;Danger&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-orange is-elevated&#x22;&#x3E;Orange&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-blue is-elevated&#x22;&#x3E;Blue&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-green is-elevated&#x22;&#x3E;Green&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-purple is-elevated&#x22;&#x3E;Purple&#x3C;/span&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tags-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Tag Addons</h3>
                    <p>
                      Vuero tags can be merged into a single one to achieve
                      addon styles. You can attach another tag or a delete
                      button if you need to. See the code example for more
                      details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <div class="tags has-addons">
                      <span class="tag">Package</span>
                      <span class="tag is-primary">Bulma</span>
                    </div>
                    <div class="tags has-addons">
                      <span class="tag is-primary">John Maynard</span>
                      <a class="tag is-delete"></a>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
    &#x3C;span class=&#x22;tag&#x22;&#x3E;Package&#x3C;/span&#x3E;
    &#x3C;span class=&#x22;tag is-primary&#x22;&#x3E;Bulma&#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
    &#x3C;span class=&#x22;tag is-primary&#x22;&#x3E;John Maynard&#x3C;/span&#x3E;
    &#x3C;a class=&#x22;tag is-delete&#x22;&#x3E;&#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tags-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Tag List</h3>
                    <p>
                      Vuero tag adons can be organized in an inline tag list.
                      You can use it to build a custom tag input for example.
                      See the code examples for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <div class="field is-grouped is-grouped-multiline">
                      <div class="control">
                        <div class="tags has-addons">
                          <a class="tag is-warning">javascript</a>
                          <a class="tag is-delete"></a>
                        </div>
                      </div>

                      <div class="control">
                        <div class="tags has-addons">
                          <a class="tag is-danger">CSS</a>
                          <a class="tag is-delete"></a>
                        </div>
                      </div>

                      <div class="control">
                        <div class="tags has-addons">
                          <a class="tag is-info">React</a>
                          <a class="tag is-delete"></a>
                        </div>
                      </div>

                      <div class="control">
                        <div class="tags has-addons">
                          <a class="tag is-success">Nodejs</a>
                          <a class="tag is-delete"></a>
                        </div>
                      </div>

                      <div class="control">
                        <div class="tags has-addons">
                          <a class="tag is-dark">Deno</a>
                          <a class="tag is-delete"></a>
                        </div>
                      </div>

                      <div class="control">
                        <div class="tags has-addons">
                          <a class="tag is-info">Docker</a>
                          <a class="tag is-delete"></a>
                        </div>
                      </div>

                      <div class="control">
                        <div class="tags has-addons">
                          <a class="tag is-primary">Kubernetes</a>
                          <a class="tag is-delete"></a>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field is-grouped is-grouped-multiline&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
            &#x3C;a class=&#x22;tag is-warning&#x22;&#x3E;javascript&#x3C;/a&#x3E;
            &#x3C;a class=&#x22;tag is-delete&#x22;&#x3E;&#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
            &#x3C;a class=&#x22;tag is-danger&#x22;&#x3E;CSS&#x3C;/a&#x3E;
            &#x3C;a class=&#x22;tag is-delete&#x22;&#x3E;&#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
            &#x3C;a class=&#x22;tag is-info&#x22;&#x3E;React&#x3C;/a&#x3E;
            &#x3C;a class=&#x22;tag is-delete&#x22;&#x3E;&#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
            &#x3C;a class=&#x22;tag is-success&#x22;&#x3E;Nodejs&#x3C;/a&#x3E;
            &#x3C;a class=&#x22;tag is-delete&#x22;&#x3E;&#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
            &#x3C;a class=&#x22;tag is-dark&#x22;&#x3E;Deno&#x3C;/a&#x3E;
            &#x3C;a class=&#x22;tag is-delete&#x22;&#x3E;&#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
            &#x3C;a class=&#x22;tag is-info&#x22;&#x3E;Docker&#x3C;/a&#x3E;
            &#x3C;a class=&#x22;tag is-delete&#x22;&#x3E;&#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;tags has-addons&#x22;&#x3E;
            &#x3C;a class=&#x22;tag is-primary&#x22;&#x3E;Kubernetes&#x3C;/a&#x3E;
            &#x3C;a class=&#x22;tag is-delete&#x22;&#x3E;&#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
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
