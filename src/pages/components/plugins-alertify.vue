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
  title: 'Components - Plugins Alertify - Vuero',
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
        <h1 class="title is-4">Alertify</h1>
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
            <RouterLink :to="{ name: 'elements' }">
              <span>Plugins</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Alertify</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Alertify-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Alertify</h3>
              <p>
                If a user needs to confirm an action before it is executed, you
                should use a confirm prompt. For more information about usage
                and available options, please refer to the
                <a href="https://alertifyjs.com/alert.html"
                  >plugin documentation</a
                >
                and to the code example below.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <button id="alertify-demo-1" class="button h-button">
                Launch Alert
              </button>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
//Markup
&#x3C;button id=&#x22;alertify-demo-1&#x22; class=&#x22;button h-button&#x22;&#x3E;Launch Alert&#x3C;/button&#x3E;

//Javascript
$('#alertify-demo-1').on('click', function () {
    initConfirm('Standard Alert', 'Are you sure you want to perfom this action? You won\'t be able to recover or to revert it.', false, false, 'Delete', 'Cancel');
})
</code></pre>
              </div>
            </div>
          </div>

          <!--Alertify-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">With Callback</h3>
              <p>
                A callback function can be executed when the OK or CANCEL
                buttons are pressed. For more information about usage and
                available options, please check the provided code example.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <button id="alertify-demo-2" class="button h-button">
                Launch Alert
              </button>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
//Markup
&#x3C;button id=&#x22;alertify-demo-2&#x22; class=&#x22;button h-button&#x22;&#x3E;Launch Alert&#x3C;/button&#x3E;

//Javascript
$('#alertify-demo-2').on('click', function () {
    initConfirm('Custom Alert', 'You can pass a callback function as a callback parameter to define what happens after the confirm button is clicked.', false, false, 'Callback', 'Cancel', function (closeEvent) {
        alert('The callback was executed!')
    })
})
</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
