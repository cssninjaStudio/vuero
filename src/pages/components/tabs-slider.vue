<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'team' | 'projects'>('team')
const activeTab1 = ref<'team' | 'projects'>('team')
const activeTab2 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab3 = ref<'team' | 'projects' | 'tasks'>('team')

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - Tabs Slider - Vuero',
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
        <h1 class="title is-4">Slider Tabs</h1>
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
              <span>Slider Tabs</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-12">
          <!--Slider Tabs-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Slider Tabs 2x</h3>
              <p>
                Vuero provides special navigation tabs that you can use to build
                nice looking and optimized layouts. Tabs work with a javascript
                implementation. Check the markup for more details. These tabs
                only support 2 items.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="tabs-wrapper is-slider">
                <div class="tabs-inner">
                  <div class="tabs">
                    <ul>
                      <li :class="[activeTab === 'team' && 'is-active']">
                        <a @click="activeTab = 'team'"><span>Team</span></a>
                      </li>
                      <li :class="[activeTab === 'projects' && 'is-active']">
                        <a @click="activeTab = 'projects'"
                          ><span>Projects</span></a
                        >
                      </li>
                      <li class="tab-naver"></li>
                    </ul>
                  </div>
                </div>

                <div
                  id="team-tab"
                  class="tab-content"
                  :class="[activeTab === 'team' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>

                <div
                  id="projects-tab"
                  class="tab-content"
                  :class="[activeTab === 'projects' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper is-slider&#x22;&#x3E;
&#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
  &#x3C;div class=&#x22;tabs&#x22;&#x3E;
      &#x3C;ul&#x3E;
          &#x3C;li data-tab=&#x22;team-tab&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Team&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li data-tab=&#x22;projects-tab&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Projects&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li class=&#x22;tab-naver&#x22;&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;


&#x3C;div id=&#x22;team-tab&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;

&#x3C;div id=&#x22;projects-tab&#x22; class=&#x22;tab-content&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Slider Tabs-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Squared Slider Tabs 2x</h3>
              <p>
                Vuero provides special navigation tabs that you can use to build
                nice looking and optimized layouts. Add the
                <code>is-squared</code> class to the
                <code>tabs-wrapper</code> element to make the tabs squared. Tabs
                work with a javascript implementation. Check the markup for more
                details. These tabs only support 2 items.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="tabs-wrapper is-slider is-squared">
                <div class="tabs-inner">
                  <div class="tabs">
                    <ul>
                      <li :class="[activeTab1 === 'team' && 'is-active']">
                        <a @click="activeTab1 = 'team'"><span>Team</span></a>
                      </li>
                      <li :class="[activeTab1 === 'projects' && 'is-active']">
                        <a @click="activeTab1 = 'projects'"
                          ><span>Projects</span></a
                        >
                      </li>
                      <li class="tab-naver"></li>
                    </ul>
                  </div>
                </div>

                <div
                  id="team-tab1"
                  class="tab-content"
                  :class="[activeTab1 === 'team' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>

                <div
                  id="projects-tab1"
                  class="tab-content"
                  :class="[activeTab1 === 'projects' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper is-slider is-squared&#x22;&#x3E;
&#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
  &#x3C;div class=&#x22;tabs&#x22;&#x3E;
      &#x3C;ul&#x3E;
          &#x3C;li data-tab=&#x22;team-tab1&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Team&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li data-tab=&#x22;projects-tab1&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Projects&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li class=&#x22;tab-naver&#x22;&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;


&#x3C;div id=&#x22;team-tab1&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;

&#x3C;div id=&#x22;projects-tab1&#x22; class=&#x22;tab-content&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Slider Tabs-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Slider Tabs 3x</h3>
              <p>
                Vuero provides special navigation tabs that you can use to build
                nice looking and optimized layouts. Tabs work with a javascript
                implementation. Check the markup for more details. These tabs
                only support 3 items.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="tabs-wrapper is-triple-slider">
                <div class="tabs-inner">
                  <div class="tabs">
                    <ul>
                      <li :class="[activeTab2 === 'team' && 'is-active']">
                        <a @click="activeTab2 = 'team'"><span>Team</span></a>
                      </li>
                      <li :class="[activeTab2 === 'projects' && 'is-active']">
                        <a @click="activeTab2 = 'projects'"
                          ><span>Projects</span></a
                        >
                      </li>
                      <li :class="[activeTab2 === 'tasks' && 'is-active']">
                        <a @click="activeTab2 = 'tasks'"><span>Tasks</span></a>
                      </li>
                      <li class="tab-naver"></li>
                    </ul>
                  </div>
                </div>

                <div
                  id="team-tab2"
                  class="tab-content"
                  :class="[activeTab2 === 'team' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>

                <div
                  id="projects-tab2"
                  class="tab-content"
                  :class="[activeTab2 === 'projects' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>

                <div
                  id="team-tab2"
                  class="tab-content"
                  :class="[activeTab2 === 'tasks' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper is-triple-slider&#x22;&#x3E;
&#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
  &#x3C;div class=&#x22;tabs&#x22;&#x3E;
      &#x3C;ul&#x3E;
          &#x3C;li data-tab=&#x22;team-tab2&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Team&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li data-tab=&#x22;projects-tab2&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Projects&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li data-tab=&#x22;tasks-tab2&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Tasks&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li class=&#x22;tab-naver&#x22;&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;


&#x3C;div id=&#x22;team-tab2&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;

&#x3C;div id=&#x22;projects-tab2&#x22; class=&#x22;tab-content&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;

&#x3C;div id=&#x22;tasks-tab2&#x22; class=&#x22;tab-content&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Squared Slider Tabs-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Squared Slider Tabs 3x</h3>
              <p>
                Vuero provides special navigation tabs that you can use to build
                nice looking and optimized layouts. Add the
                <code>is-squared</code> class to the
                <code>tabs-wrapper</code> element to make the tabs squared. Tabs
                work with a javascript implementation. Check the markup for more
                details. These tabs only support 3 items.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="tabs-wrapper is-triple-slider is-squared">
                <div class="tabs-inner">
                  <div class="tabs">
                    <ul>
                      <li :class="[activeTab3 === 'team' && 'is-active']">
                        <a @click="activeTab3 = 'team'"><span>Team</span></a>
                      </li>
                      <li :class="[activeTab3 === 'projects' && 'is-active']">
                        <a @click="activeTab3 = 'projects'"
                          ><span>Projects</span></a
                        >
                      </li>
                      <li :class="[activeTab3 === 'tasks' && 'is-active']">
                        <a @click="activeTab3 = 'tasks'"><span>Tasks</span></a>
                      </li>
                      <li class="tab-naver"></li>
                    </ul>
                  </div>
                </div>

                <div
                  id="team-tab3"
                  class="tab-content"
                  :class="[activeTab3 === 'team' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>

                <div
                  id="projects-tab3"
                  class="tab-content"
                  :class="[activeTab3 === 'projects' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>

                <div
                  id="team-tab3"
                  class="tab-content"
                  :class="[activeTab3 === 'tasks' && 'is-active']"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                    beatissimum? Ne discipulum abducam, times. Quae
                    diligentissime contra Aristonem dicuntur a Chryippo. Duo
                    Reges: constructio interrete.
                  </p>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper is-triple-slider is-squared&#x22;&#x3E;
&#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
  &#x3C;div class=&#x22;tabs&#x22;&#x3E;
      &#x3C;ul&#x3E;
          &#x3C;li data-tab=&#x22;team-tab3&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Team&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li data-tab=&#x22;projects-tab3&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Projects&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li data-tab=&#x22;tasks-tab3&#x22;&#x3E;&#x3C;a&#x3E;&#x3C;span&#x3E;Tasks&#x3C;/span&#x3E;&#x3C;/a&#x3E;&#x3C;/li&#x3E;
          &#x3C;li class=&#x22;tab-naver&#x22;&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/div&#x3E;


&#x3C;div id=&#x22;team-tab3&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;

&#x3C;div id=&#x22;projects-tab3&#x22; class=&#x22;tab-content&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;

&#x3C;div id=&#x22;tasks-tab3&#x22; class=&#x22;tab-content&#x22;&#x3E;
  &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
      sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
      abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo.
      Duo Reges: constructio interrete.&#x3C;/p&#x3E;
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
