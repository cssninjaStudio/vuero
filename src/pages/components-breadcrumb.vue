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

useTitle('Components - Breadcrumb - Vuero')
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
              <h1 class="title is-4">Breadcrumb</h1>
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
                  <RouterLink :to="{ name: 'components-hub' }">
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Breadcrumb</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Breadcrumb-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Breadcrumb</h3>
                    <p>
                      Vuero provides a breadcrumb component that you can use to
                      enhance your navigation experience. Default breadcrumb
                      items are seperated by a slash sign. You can use icons as
                      well with breadcrumb items. See markup for more details
                      about usage. You can also change the alignment by using
                      the <code>is-centered</code> or
                      <code>is-right</code> class on the
                      <code>breadcrumb</code> element.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                      <ul>
                        <li>
                          <a href="#">
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <nav class="breadcrumb" aria-label="breadcrumbs">
                      <ul>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:shopping-cart" />
                            </span>
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:cpu" />
                            </span>
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:monitor" />
                            </span>
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;nav class=&#x22;breadcrumb&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;

&#x3C;nav class=&#x22;breadcrumb&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;shopping-cart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;cpu&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;monitor&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Arrow Separator-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Arrow Separator</h3>
                    <p>
                      Breadcrumb items can be separated by alternative
                      separators. To display arrow breadcrumb separators, add
                      the <code>has-arrow-separator</code> class to the target
                      <code>breadcrumb</code> element. See markup for more
                      details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <nav
                      class="breadcrumb has-arrow-separator"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <nav
                      class="breadcrumb has-arrow-separator"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:shopping-cart" />
                            </span>
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:cpu" />
                            </span>
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:monitor" />
                            </span>
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;nav class=&#x22;breadcrumb has-arrow-separator&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;

&#x3C;nav class=&#x22;breadcrumb has-arrow-separator&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;shopping-cart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;cpu&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;monitor&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Bullet Separator-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bullet Separator</h3>
                    <p>
                      Breadcrumb items can be separated by alternative
                      separators. To display bullet breadcrumb separators, add
                      the <code>has-bullet-separator</code> class to the target
                      <code>breadcrumb</code> element. See markup for more
                      details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <nav
                      class="breadcrumb has-bullet-separator"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <nav
                      class="breadcrumb has-bullet-separator"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:shopping-cart" />
                            </span>
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:cpu" />
                            </span>
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:monitor" />
                            </span>
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;nav class=&#x22;breadcrumb has-bullet-separator&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;

&#x3C;nav class=&#x22;breadcrumb has-bullet-separator&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;shopping-cart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;cpu&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;monitor&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Dot Separator-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Dot Separator</h3>
                    <p>
                      Breadcrumb items can be separated by alternative
                      separators. To display dot breadcrumb separators, add the
                      <code>has-dot-separator</code> class to the target
                      <code>breadcrumb</code> element. See markup for more
                      details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <nav
                      class="breadcrumb has-dot-separator"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <nav
                      class="breadcrumb has-dot-separator"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:shopping-cart" />
                            </span>
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:cpu" />
                            </span>
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:monitor" />
                            </span>
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;nav class=&#x22;breadcrumb has-dot-separator&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;

&#x3C;nav class=&#x22;breadcrumb has-dot-separator&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;shopping-cart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;cpu&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;monitor&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Succeeds Separator-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Succeeds Separator</h3>
                    <p>
                      Breadcrumb items can be separated by alternative
                      separators. To display succeeds breadcrumb separators, add
                      the <code>has-succeeds-separator</code> class to the
                      target <code>breadcrumb</code> element. See markup for
                      more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <nav
                      class="breadcrumb has-succeeds-separator"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <nav
                      class="breadcrumb has-succeeds-separator"
                      aria-label="breadcrumbs"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:shopping-cart" />
                            </span>
                            <span>Catalogue</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:cpu" />
                            </span>
                            <span>Computers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="icon is-small">
                              <Icon icon="feather:monitor" />
                            </span>
                            <span>Monitors</span>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;nav class=&#x22;breadcrumb has-succeeds-separator&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;

&#x3C;nav class=&#x22;breadcrumb has-succeeds-separator&#x22; aria-label=&#x22;breadcrumbs&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;shopping-cart&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Catalogue&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;cpu&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Computers&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li&#x3E;
            &#x3C;a href=&#x22;#&#x22;&#x3E;
                &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;monitor&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span&#x3E;Monitors&#x3C;/span&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/nav&#x3E;
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
