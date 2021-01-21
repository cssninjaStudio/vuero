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
  title: 'Components - Plugins Autocomplete - Vuero',
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
        <h1 class="title is-4">Autocomplete</h1>
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
              <span>Autocomplete</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Simple Autocomplete-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Simple Autocomplete</h3>
              <p>
                Vuero is integrated with EasyAutocomplete, a nice jQuery
                automplete library. You can check the plugin documentation on
                <a href="http://github.com/pawelczak/EasyAutocomplete">Github</a
                >. You can also access the javascript code by visiting the
                <code>assets/js/components.js</code> file. The following shows
                how it works with a simple result template.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field is-autocomplete">
                <div class="control has-icon">
                  <input
                    id="autocomplete-demo-simple"
                    type="text"
                    class="input"
                    placeholder="Search people..."
                  />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:search"></i>
                  </div>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
//JS CODE
var demoSimpleOptions = {
    url: "assets/data/user.json",
    getValue: "name",
    template: {
        type: "custom",
        method: function (value, item) {
            return `
                &#x3C;div class=&#x22;template-wrapper&#x22;&#x3E;
                    &#x3C;div class=&#x22;entry-text&#x22;&#x3E;
                        &#x3C;span&#x3E;${value}&#x3C;/span&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            `
        }
    },
    highlightPhrase: false,
    list: {
        maxNumberOfElements: 5,
        showAnimation: {
            type: "fade", //normal|slide|fade
            time: 400,
            callback: function () { }
        },
        match: {
            enabled: true
        },
        onChooseEvent: function () {
            //do your stuff here
        }
    },
};

$("#autocomplete-demo-simple").easyAutocomplete(demoSimpleOptions);

//MARKUP
&#x3C;div class=&#x22;field is-autocomplete&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon&#x22;&#x3E;
        &#x3C;input id=&#x22;autocomplete-demo-simple&#x22; type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Search people...&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;search&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Subtext Autocomplete-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Subtext Autocomplete</h3>
              <p>
                Vuero is integrated with EasyAutocomplete, a nice jQuery
                automplete library. You can check the plugin documentation on
                <a href="http://github.com/pawelczak/EasyAutocomplete">Github</a
                >. You can also access the javascript code by visiting the
                <code>assets/js/components.js</code> file. The following shows
                how it works with a subtitle result template.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field is-autocomplete">
                <div class="control has-icon">
                  <input
                    id="autocomplete-demo-subtext"
                    type="text"
                    class="input"
                    placeholder="Search people..."
                  />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:search"></i>
                  </div>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
//JS CODE
var demoSubtextOptions = {
    url: "assets/data/user.json",
    getValue: "name",
    template: {
        type: "custom",
        method: function (value, item) {
            return `
                &#x3C;div class=&#x22;template-wrapper&#x22;&#x3E;
                    &#x3C;div class=&#x22;entry-text&#x22;&#x3E;
                        &#x3C;span&#x3E;${value}&#x3C;/span&#x3E;
                        &#x3C;span&#x3E;${item.location}&#x3C;/span&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            `
        }
    },
    highlightPhrase: false,
    list: {
        maxNumberOfElements: 5,
        showAnimation: {
            type: "fade", //normal|slide|fade
            time: 400,
            callback: function () { }
        },
        match: {
            enabled: true
        },
        onChooseEvent: function () {
            //do your stuff here
        }
    },
};

$("#autocomplete-demo-subtext").easyAutocomplete(demoSubtextOptions);

//MARKUP
&#x3C;div class=&#x22;field is-autocomplete&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon&#x22;&#x3E;
        &#x3C;input id=&#x22;autocomplete-demo-subtext&#x22; type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Search people...&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;search&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Advanced Autocomplete-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Advanced Autocomplete</h3>
              <p>
                Vuero is integrated with EasyAutocomplete, a nice jQuery
                automplete library. You can check the plugin documentation on
                <a href="http://github.com/pawelczak/EasyAutocomplete">Github</a
                >. You can also access the javascript code by visiting the
                <code>assets/js/components.js</code> file. The following shows
                how it works with an advanced result template.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field is-autocomplete">
                <div class="control has-icon">
                  <input
                    id="autocomplete-demo-advanced"
                    type="text"
                    class="input"
                    placeholder="Search people..."
                  />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:search"></i>
                  </div>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
//JS CODE
var demoAdvancedOptions = {
    url: "assets/data/user.json",
    getValue: "name",
    template: {
        type: "custom",
        method: function (value, item) {
            return `
                &#x3C;div class=&#x22;template-wrapper&#x22;&#x3E;
                    &#x3C;div class=&#x22;avatar-wrapper&#x22;&#x3E;
                        &#x3C;img class=&#x22;autocpl-avatar&#x22; src=&#x22;${item.pic}&#x22;&#x3E;
                        &#x3C;img class=&#x22;avatar-badge&#x22; src=&#x22;${item.badge}&#x22;&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;entry-text&#x22;&#x3E;
                        &#x3C;span&#x3E;${value}&#x3C;/span&#x3E;
                        &#x3C;span&#x3E;${item.location}&#x3C;/span&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            `
        }
    },
    highlightPhrase: false,
    list: {
        maxNumberOfElements: 5,
        showAnimation: {
            type: "fade", //normal|slide|fade
            time: 400,
            callback: function () { }
        },
        match: {
            enabled: true
        },
        onChooseEvent: function () {
            //do your stuff here
        }
    },
};

$("#autocomplete-demo-advanced").easyAutocomplete(demoAdvancedOptions);

//MARKUP
&#x3C;div class=&#x22;field is-autocomplete&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon&#x22;&#x3E;
        &#x3C;input id=&#x22;autocomplete-demo-advanced&#x22; type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Search people...&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;search&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <div class="demo-spacer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
