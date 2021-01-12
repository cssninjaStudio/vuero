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

useTitle('Components - Icon Box - Vuero')
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
              <h1 class="title is-4">Icon Box</h1>
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
                  <RouterLink :to="{ name: 'components' }">
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Icon Box</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Icon Box-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Icon Box</h3>
                    <p>
                      Vuero icon boxes let you display icons in a fancy and
                      colore way. Box sizes can be controled with css classes.
                      Available modifier classes are <code>is-small</code>,
                      <code>is-medium</code>, <code>is-large</code>,
                      <code>is-big</code> and <code>is-xl</code>. See code for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="icons">
                      <div class="h-icon is-small is-primary">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-primary is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-primary">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-large is-primary is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-big is-primary">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-xl is-primary is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-icon is-small is-primary&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-primary is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-primary&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-large is-primary is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-big is-primary&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-xl is-primary is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Box Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Box Colors</h3>
                    <p>
                      Vuero icon boxes let you display icons in a fancy and
                      colore way. Box sizes can be controled with css classes.
                      You can change the box colors by using one of the
                      following classes: <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>,
                      <code>is-warning</code>, <code>is-danger</code>,
                      <code>is-purple</code>, <code>is-blue</code>,
                      <code>is-yellow</code>, <code>is-orange</code>,
                      <code>is-red</code>, <code>is-green</code>. See code for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="icons">
                      <div class="h-icon is-medium is-primary">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-info">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-success">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-warning">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-danger">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-purple">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-yellow">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-orange">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-green">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-red">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-blue">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-icon is-medium is-primary&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-info&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-success&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-warning&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-danger&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-purple&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-blue&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-yellow&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-orange&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-green&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-red&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Box Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Squared Border</h3>
                    <p>
                      Vuero icon boxes let you display icons in a fancy and
                      colore way. Box sizes can be controled with css classes.
                      You can add a colored border around the box by adding the
                      <code>is-bordered</code> class to the
                      <code>h-icon</code> element. See code for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="icons">
                      <div class="h-icon is-medium is-primary is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-info is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-success is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-warning is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-danger is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-purple is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-yellow is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-orange is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-green is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-red is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-blue is-bordered">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-icon is-medium is-primary is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-info is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-success is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-warning is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-danger is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-purple is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-blue is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-yellow is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-orange is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-green is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-red is-bordered&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Box Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Box</h3>
                    <p>
                      Vuero icon boxes let you display icons in a fancy and
                      colore way. Box sizes can be controled with css classes.
                      You can make the box rounded by adding the
                      <code>is-rounded</code> class to the
                      <code>h-icon</code> element. See code for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="icons">
                      <div class="h-icon is-medium is-primary is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-info is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-success is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-warning is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-danger is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-purple is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-yellow is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-orange is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-green is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-red is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div class="h-icon is-medium is-blue is-rounded">
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-icon is-medium is-primary is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-info is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-success is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-warning is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-danger is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-purple is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-blue is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-yellow is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-orange is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-green is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-red is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Box Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Border</h3>
                    <p>
                      Vuero icon boxes let you display icons in a fancy and
                      colore way. Box sizes can be controled with css classes.
                      You can add a colored border around the box by adding the
                      <code>is-bordered</code> class to the
                      <code>h-icon</code> element. See code for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="icons">
                      <div
                        class="h-icon is-medium is-primary is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-info is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-success is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-warning is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-danger is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-purple is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-yellow is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-orange is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-green is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-red is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                      <div
                        class="h-icon is-medium is-blue is-bordered is-rounded"
                      >
                        <i class="lnil lnil-vector-pen"></i>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-icon is-medium is-primary is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-info is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-success is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-warning is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-danger is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-purple is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-blue is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-yellow is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-orange is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-green is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-red is-bordered is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;lnil lnil-vector-pen&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Feather Icons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icons</h3>
                    <p>
                      Vuero icon boxes work also very well with Feather Icons
                      icon set. Use the same markup and just replace the
                      existing icons with some from Feather Icons.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="icons">
                      <div class="h-icon is-medium is-primary is-rounded">
                        <Icon icon="feather:award" />
                      </div>
                      <div class="h-icon is-medium is-info is-rounded">
                        <Icon icon="feather:chrome" />
                      </div>
                      <div class="h-icon is-medium is-success is-rounded">
                        <Icon icon="feather:clock" />
                      </div>
                      <div class="h-icon is-medium is-warning is-rounded">
                        <Icon icon="feather:coffee" />
                      </div>
                      <div class="h-icon is-medium is-danger is-rounded">
                        <Icon icon="feather:home" />
                      </div>
                      <div class="h-icon is-medium is-purple is-rounded">
                        <Icon icon="feather:lock" />
                      </div>
                      <div class="h-icon is-medium is-yellow is-rounded">
                        <Icon icon="feather:moon" />
                      </div>
                      <div class="h-icon is-medium is-orange is-rounded">
                        <Icon icon="feather:phone" />
                      </div>
                      <div class="h-icon is-medium is-green is-rounded">
                        <Icon icon="feather:paperclip" />
                      </div>
                      <div class="h-icon is-medium is-red is-rounded">
                        <Icon icon="feather:smile" />
                      </div>
                      <div class="h-icon is-medium is-blue is-rounded">
                        <Icon icon="feather:shield" />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-icon is-medium is-primary is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;award&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-info is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;chrome&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-success is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;clock&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-warning is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;coffee&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-danger is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;home&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-purple is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;lock&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-yellow is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;moon&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-orange is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;phone&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-green is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;paperclip&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-red is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;smile&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-blue is-rounded&#x22;&#x3E;
    &#x3C;i data-feather=&#x22;shield&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Font Awesome-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Font Awesome</h3>
                    <p>
                      Vuero icon boxes work also very well with Font Awesome
                      icon set. Use the same markup and just replace the
                      existing icons with some from Font Awesome.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="icons">
                      <div class="h-icon is-medium is-primary is-rounded">
                        <Icon icon="fa-atom" />
                      </div>
                      <div class="h-icon is-medium is-info is-rounded">
                        <Icon icon="fa-birthday-cake" />
                      </div>
                      <div class="h-icon is-medium is-success is-rounded">
                        <Icon icon="fa-leaf" />
                      </div>
                      <div class="h-icon is-medium is-warning is-rounded">
                        <Icon icon="fa-bolt" />
                      </div>
                      <div class="h-icon is-medium is-danger is-rounded">
                        <Icon icon="fa-ankh" />
                      </div>
                      <div class="h-icon is-medium is-purple is-rounded">
                        <Icon icon="fa-bell" />
                      </div>
                      <div class="h-icon is-medium is-yellow is-rounded">
                        <i class="fab fa-bitcoin"></i>
                      </div>
                      <div class="h-icon is-medium is-orange is-rounded">
                        <Icon icon="fa-bowling-ball" />
                      </div>
                      <div class="h-icon is-medium is-green is-rounded">
                        <Icon icon="fa-fan" />
                      </div>
                      <div class="h-icon is-medium is-red is-rounded">
                        <Icon icon="fa-envelope-open" />
                      </div>
                      <div class="h-icon is-medium is-blue is-rounded">
                        <Icon icon="fa-briefcase-medical" />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-icon is-medium is-primary is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-atom&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-info is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-birthday-cake&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-success is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-leaf&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-warning is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-bolt&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-danger is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-ankh&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-purple is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-bell&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-yellow is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fab fa-bitcoin&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-orange is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-bowling-ball&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-green is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-fan&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-red is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-envelope-open&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-icon is-medium is-blue is-rounded&#x22;&#x3E;
    &#x3C;i class=&#x22;fas fa-briefcase-medical&#x22;&#x3E;&#x3C;/i&#x3E;
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
