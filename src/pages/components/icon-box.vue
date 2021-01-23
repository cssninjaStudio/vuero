<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - Icon Box - Vuero',
})
</script>

<template>
  <div>
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
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }">
              <span class="icon is-small is-solo">
                <i class="iconify" data-icon="feather:home"></i>
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
          <IconBoxDefaultDocumentation />

          <!--Box Colors-->
          <IconBoxColorsDocumentation />

          <!--Box Border-->
          <IconBoxSquaredBorderDocumentation />

          <!--Box Rounded-->
          <IconBoxRoundedDocumentation />

          <!--Box Colors-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Rounded Border</h3>
              <p>
                Vuero icon boxes let you display icons in a fancy and colore
                way. Box sizes can be controled with css classes. You can add a
                colored border around the box by adding the
                <code>is-bordered</code> class to the
                <code>h-icon</code> element. See code for more details about
                usage.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="icons">
                <div class="h-icon is-medium is-primary is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-info is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-success is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-warning is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-danger is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-purple is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-yellow is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-orange is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-green is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-red is-bordered is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="h-icon is-medium is-blue is-bordered is-rounded">
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
                Vuero icon boxes work also very well with Feather Icons icon
                set. Use the same markup and just replace the existing icons
                with some from Feather Icons.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="icons">
                <div class="h-icon is-medium is-primary is-rounded">
                  <i class="iconify" data-icon="feather:award"></i>
                </div>
                <div class="h-icon is-medium is-info is-rounded">
                  <i class="iconify" data-icon="feather:chrome"></i>
                </div>
                <div class="h-icon is-medium is-success is-rounded">
                  <i class="iconify" data-icon="feather:clock"></i>
                </div>
                <div class="h-icon is-medium is-warning is-rounded">
                  <i class="iconify" data-icon="feather:coffee"></i>
                </div>
                <div class="h-icon is-medium is-danger is-rounded">
                  <i class="iconify" data-icon="feather:home"></i>
                </div>
                <div class="h-icon is-medium is-purple is-rounded">
                  <i class="iconify" data-icon="feather:lock"></i>
                </div>
                <div class="h-icon is-medium is-yellow is-rounded">
                  <i class="iconify" data-icon="feather:moon"></i>
                </div>
                <div class="h-icon is-medium is-orange is-rounded">
                  <i class="iconify" data-icon="feather:phone"></i>
                </div>
                <div class="h-icon is-medium is-green is-rounded">
                  <i class="iconify" data-icon="feather:paperclip"></i>
                </div>
                <div class="h-icon is-medium is-red is-rounded">
                  <i class="iconify" data-icon="feather:smile"></i>
                </div>
                <div class="h-icon is-medium is-blue is-rounded">
                  <i class="iconify" data-icon="feather:shield"></i>
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
                Vuero icon boxes work also very well with Font Awesome icon set.
                Use the same markup and just replace the existing icons with
                some from Font Awesome.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="icons">
                <div class="h-icon is-medium is-primary is-rounded">
                  <i class="fas fa-atom"></i>
                </div>
                <div class="h-icon is-medium is-info is-rounded">
                  <i class="fas fa-birthday-cake"></i>
                </div>
                <div class="h-icon is-medium is-success is-rounded">
                  <i class="fas fa-leaf"></i>
                </div>
                <div class="h-icon is-medium is-warning is-rounded">
                  <i class="fas fa-bolt"></i>
                </div>
                <div class="h-icon is-medium is-danger is-rounded">
                  <i class="fas fa-ankh"></i>
                </div>
                <div class="h-icon is-medium is-purple is-rounded">
                  <i class="fas fa-bell"></i>
                </div>
                <div class="h-icon is-medium is-yellow is-rounded">
                  <i class="fab fa-bitcoin"></i>
                </div>
                <div class="h-icon is-medium is-orange is-rounded">
                  <i class="fas fa-bowling-ball"></i>
                </div>
                <div class="h-icon is-medium is-green is-rounded">
                  <i class="fas fa-fan"></i>
                </div>
                <div class="h-icon is-medium is-red is-rounded">
                  <i class="fas fa-envelope-open"></i>
                </div>
                <div class="h-icon is-medium is-blue is-rounded">
                  <i class="fas fa-briefcase-medical"></i>
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
</template>
