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

useTitle('Components - Accordion Basic - Vuero')
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
              <h1 class="title is-4">Accordion</h1>
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
                    <span>Accordions</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Accordion</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Accordion-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Accordion</h3>
                    <p>
                      Vuero provides an accordion component with enough styling
                      to be able to use it as is, out of the box. You have the
                      choice between a regular accordion, which means that each
                      item can be openened separately, and an exclusive
                      accordion, meaning that only one item can be expanded at a
                      time. To make an accordion exclusive, just add the
                      <code>is-exclusive</code> class to the target
                      <code>accordion</code> element. Check the markup for more
                      details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner no-padding">
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;single-accordion&#x22;&#x3E;
    &#x3C;div class=&#x22;accordion-header&#x22;&#x3E;Accordion Item 1&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;accordion-content&#x22;&#x3E;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.&#x3C;/div&#x3E;

    &#x3C;div class=&#x22;accordion-header&#x22;&#x3E;Accordion Item 2&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;accordion-content&#x22;&#x3E;Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.&#x3C;/div&#x3E;

    &#x3C;div class=&#x22;accordion-header&#x22;&#x3E;Accordion Item 3&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;accordion-content&#x22;&#x3E;Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.&#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;single-accordion is-exclusive&#x22;&#x3E;
    &#x3C;div class=&#x22;accordion-header&#x22;&#x3E;Exclusive Item 1&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;accordion-content&#x22;&#x3E;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.&#x3C;/div&#x3E;

    &#x3C;div class=&#x22;accordion-header&#x22;&#x3E;Exclusive Item 2&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;accordion-content&#x22;&#x3E;Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.&#x3C;/div&#x3E;

    &#x3C;div class=&#x22;accordion-header&#x22;&#x3E;Exclusive Item 3&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;accordion-content&#x22;&#x3E;Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column is-6">
                <div class="single-accordion">
                  <div class="accordion-header">Accordion Item 1</div>
                  <div class="accordion-content">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </div>

                  <div class="accordion-header">Accordion Item 2</div>
                  <div class="accordion-content">
                    Et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </div>

                  <div class="accordion-header">Accordion Item 3</div>
                  <div class="accordion-content">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur.
                  </div>
                </div>
              </div>

              <div class="column is-6">
                <div class="single-accordion is-exclusive">
                  <div class="accordion-header">Exclusive Item 1</div>
                  <div class="accordion-content">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </div>

                  <div class="accordion-header">Exclusive Item 2</div>
                  <div class="accordion-content">
                    Et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </div>

                  <div class="accordion-header">Exclusive Item 3</div>
                  <div class="accordion-content">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur.
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
