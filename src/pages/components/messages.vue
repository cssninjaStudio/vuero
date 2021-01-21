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
  title: 'Components - Messages - Vuero',
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
        <h1 class="title is-4">Messages</h1>
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
              <span>Messages</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-12">
          <!--Message-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Message</h3>
              <p>
                Vuero provides a component for messages that you can use in your
                forms, for instance. The default message is displayed on a grey
                background. Check the markup for more details.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="message">
                <a class="delete"></a>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                  ac ex sit amet fringilla. Nullam gravida purus diam, et
                  dictum.
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;message&#x22;&#x3E;
    &#x3C;a class=&#x22;delete&#x22;&#x3E;&#x3C;/a&#x3E;
    &#x3C;div class=&#x22;message-body&#x22;&#x3E;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis placerat
        ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum.
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Message Colors-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Message Colors</h3>
              <p>
                Vuero provides a component for messages that you can use in your
                forms, for instance. You can change message colors with modifier
                classes. Available modifier classes are
                <code>is-primary</code>, <code>is-info</code>,
                <code>is-success</code>, <code>is-warning</code> and
                <code>is-danger</code>. See code for more details about usage.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="message is-primary">
                <a class="delete"></a>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                  ac ex sit amet fringilla. Nullam gravida purus diam, et
                  dictum.
                </div>
              </div>

              <div class="message is-success">
                <a class="delete"></a>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                  ac ex sit amet fringilla. Nullam gravida purus diam, et
                  dictum.
                </div>
              </div>

              <div class="message is-warning">
                <a class="delete"></a>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                  ac ex sit amet fringilla. Nullam gravida purus diam, et
                  dictum.
                </div>
              </div>

              <div class="message is-danger">
                <a class="delete"></a>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
                  ac ex sit amet fringilla. Nullam gravida purus diam, et
                  dictum.
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;message is-primary&#x22;&#x3E;
    &#x3C;a class=&#x22;delete&#x22;&#x3E;&#x3C;/a&#x3E;
    &#x3C;div class=&#x22;message-body&#x22;&#x3E;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis placerat
        ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum.
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;message is-success&#x22;&#x3E;
    &#x3C;a class=&#x22;delete&#x22;&#x3E;&#x3C;/a&#x3E;
    &#x3C;div class=&#x22;message-body&#x22;&#x3E;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis placerat
        ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum.
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;message is-warning&#x22;&#x3E;
    &#x3C;a class=&#x22;delete&#x22;&#x3E;&#x3C;/a&#x3E;
    &#x3C;div class=&#x22;message-body&#x22;&#x3E;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis placerat
        ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum.
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;message is-danger&#x22;&#x3E;
    &#x3C;a class=&#x22;delete&#x22;&#x3E;&#x3C;/a&#x3E;
    &#x3C;div class=&#x22;message-body&#x22;&#x3E;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis placerat
        ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum.
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
</template>
