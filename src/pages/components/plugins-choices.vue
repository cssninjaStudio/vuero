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
  title: 'Components - Plugins Choices - Vuero',
})
</script>

<template>
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
        <h1 class="title is-4">Choices js</h1>
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
              <span>Components</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Plugins</span>
            </a>
          </li>
          <li>
            <a>
              <span>Choices js</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Choices Input-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Choices Input</h3>
              <p>
                Vuero is integrated with ChoicesJs, a performant vanilla
                javascript tags input library. You can check the plugin
                documentation on
                <a href="https://github.com/jshjohnson/Choices">Github</a>. You
                can also access the javascript code by visiting the
                <code>assets/js/components.js</code> file. The following shows
                how it works with an input element.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <input
                    id="choices-text-remove-button"
                    class="input"
                    value="Software, Sass, Engineering"
                    placeholder="Enter something"
                  />
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
//JS CODE
var textRemove = new Choices(document.getElementById('choices-text-remove-button'), {
    delimiter: ',',
    editItems: true,
    //maxItemCount: 5,
    removeItemButton: true,
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input id=&#x22;choices-text-remove-button&#x22; class=&#x22;input&#x22;
            value=&#x22;Software, Sass, Engineering&#x22; placeholder=&#x22;Enter something&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Choices Select-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Choices Select</h3>
              <p>
                Vuero is integrated with ChoicesJs, a performant vanilla
                javascript tags input library. You can check the plugin
                documentation on
                <a href="https://github.com/jshjohnson/Choices">Github</a>. You
                can also access the javascript code by visiting the
                <code>assets/js/components.js</code> file. The following shows
                how it works with a select element.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <label>Add some heroes</label>
                <div class="control">
                  <select
                    id="choices-multiple-remove-button"
                    class="form-control"
                    name="choices-multiple-remove-button"
                    multiple
                  >
                    <option value="superman" selected>Superman</option>
                    <option value="batman">Batman</option>
                    <option value="galactus">Galactus</option>
                    <option value="spawn">Spawn</option>
                  </select>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
//JS CODE
var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
    removeItemButton: true,
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;label&#x3E;Add some heroes&#x3C;/label&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;select class=&#x22;form-control&#x22; name=&#x22;choices-multiple-remove-button&#x22;
            id=&#x22;choices-multiple-remove-button&#x22; placeholder=&#x22;This is a placeholder&#x22;
            multiple&#x3E;
            &#x3C;option value=&#x22;superman&#x22; selected&#x3E;Superman&#x3C;/option&#x3E;
            &#x3C;option value=&#x22;batman&#x22;&#x3E;Batman&#x3C;/option&#x3E;
            &#x3C;option value=&#x22;galactus&#x22;&#x3E;Galactus&#x3C;/option&#x3E;
            &#x3C;option value=&#x22;spawn&#x22;&#x3E;Spawn&#x3C;/option&#x3E;
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
</template>
