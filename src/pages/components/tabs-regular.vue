<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab1 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab2 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab3 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab4 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab5 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab6 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab7 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab8 = ref<'team' | 'projects' | 'tasks'>('team')

onMounted(() => {
  activeSidebar.value = 'components'
})

const displayCode1 = ref(false)
const code1 = `<!-- basic tab -->
<script setup lang="ts">
import { ref } from 'vue'

type Tabs = 'team' | 'projects' | 'tasks'
const activeTab = ref<Tabs>('team')
\<\/script>

<template>
  <div class="tabs-wrapper">
    <div class="tabs-inner">
      <div class="tabs">
        <ul>
          <li :class="[activeTab === 'team' && 'is-active']">
            <a @click="activeTab = 'team'">Team</a>
          </li>
          <li :class="[activeTab === 'projects' && 'is-active']">
            <a @click="activeTab = 'projects'">Projects</a>
          </li>
          <li :class="[activeTab === 'tasks' && 'is-active']">
            <a @click="activeTab = 'tasks'">Tasks</a>
          </li>
        </ul>
      </div>
    </div>
      

    <div class="tab-content" :class="[activeTab === 'team' && 'is-active']">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.</p>
    </div>

    <div class="tab-content" :class="[activeTab === 'projects' && 'is-active']">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.</p>
    </div>

    <div class="tab-content" :class="[activeTab === 'tasks' && 'is-active']">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.</p>
    </div>
  </div>
</template>`

useTitle('Components - Tabs Regular - Vuero')
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
              <h1 class="title is-4">Tabs</h1>
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
                    <span>Tabs</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Tabs</h3>
                    <p>
                      Vuero provides styled navigation tabs that you can use to
                      build nice looking and optimized layouts. Tabs work with a
                      javascript implementation. Check the markup for more
                      details.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[displayCode1 && 'is-active']"
                      @click="displayCode1 = !displayCode1"
                    >
                      <Icon
                        v-show="displayCode1"
                        icon="feather:code"
                        class="open"
                      />
                      <Icon
                        v-show="!displayCode1"
                        icon="feather:x"
                        class="close"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs">
                          <ul>
                            <li :class="[activeTab === 'team' && 'is-active']">
                              <a @click="activeTab = 'team'">Team</a>
                            </li>
                            <li
                              :class="[activeTab === 'projects' && 'is-active']"
                            >
                              <a @click="activeTab = 'projects'">Projects</a>
                            </li>
                            <li :class="[activeTab === 'tasks' && 'is-active']">
                              <a @click="activeTab = 'tasks'">Tasks</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab"
                        class="tab-content"
                        :class="[activeTab === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab"
                        class="tab-content"
                        :class="[activeTab === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab"
                        class="tab-content"
                        :class="[activeTab === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <HighlightJS
                      v-if="displayCode1"
                      lang="vue"
                      class="highlight highlight-block"
                      :code="code1"
                    />
                  </div>
                </div>

                <!--Centered Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Centered Tabs</h3>
                    <p>
                      Vuero provides styled navigation tabs that you can use to
                      build nice looking and optimized layouts. Tabs work with a
                      javascript implementation. Use the
                      <code>is-centered</code> class to center align the tabs.
                      Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs is-centered">
                          <ul>
                            <li :class="[activeTab1 === 'team' && 'is-active']">
                              <a @click="activeTab1 = 'team'">Team</a>
                            </li>
                            <li
                              :class="[
                                activeTab1 === 'projects' && 'is-active',
                              ]"
                            >
                              <a @click="activeTab1 = 'projects'">Projects</a>
                            </li>
                            <li
                              :class="[activeTab1 === 'tasks' && 'is-active']"
                            >
                              <a @click="activeTab1 = 'tasks'">Tasks</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab1"
                        class="tab-content"
                        :class="[activeTab1 === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab1"
                        class="tab-content"
                        :class="[activeTab1 === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab1"
                        class="tab-content"
                        :class="[activeTab1 === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper&#x22;&#x3E;
    &#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
        &#x3C;div class=&#x22;tabs is-centered&#x22;&#x3E;
            &#x3C;ul&#x3E;
                &#x3C;li data-tab=&#x22;team-tab&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;Team&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;projects-tab&#x22;&#x3E;&#x3C;a&#x3E;Projects&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;tasks-tab&#x22;&#x3E;&#x3C;a&#x3E;Tasks&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    

    &#x3C;div id=&#x22;team-tab&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;projects-tab&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;tasks-tab&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Right Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Right Tabs</h3>
                    <p>
                      Vuero provides styled navigation tabs that you can use to
                      build nice looking and optimized layouts. Use the
                      <code>is-right</code> class to center align the tabs on
                      the right. Tabs work with a javascript implementation.
                      Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs is-right">
                          <ul>
                            <li :class="[activeTab2 === 'team' && 'is-active']">
                              <a @click="activeTab2 = 'team'">Team</a>
                            </li>
                            <li
                              :class="[
                                activeTab2 === 'projects' && 'is-active',
                              ]"
                            >
                              <a @click="activeTab2 = 'projects'">Projects</a>
                            </li>
                            <li
                              :class="[activeTab2 === 'tasks' && 'is-active']"
                            >
                              <a @click="activeTab2 = 'tasks'">Tasks</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab2"
                        class="tab-content"
                        :class="[activeTab2 === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab2"
                        class="tab-content"
                        :class="[activeTab2 === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab2"
                        class="tab-content"
                        :class="[activeTab2 === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper&#x22;&#x3E;
    &#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
        &#x3C;div class=&#x22;tabs is-right&#x22;&#x3E;
            &#x3C;ul&#x3E;
                &#x3C;li data-tab=&#x22;team-tab&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;Team&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;projects-tab&#x22;&#x3E;&#x3C;a&#x3E;Projects&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;tasks-tab&#x22;&#x3E;&#x3C;a&#x3E;Tasks&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    

    &#x3C;div id=&#x22;team-tab&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;projects-tab&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;tasks-tab&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Feather Icons Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icons</h3>
                    <p>
                      You can easily embed <code>Feather Icons</code> in your
                      tab elements. The styling is already taken care of, just
                      add the icons you want. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs">
                          <ul>
                            <li :class="[activeTab3 === 'team' && 'is-active']">
                              <a @click="activeTab3 = 'team'">
                                <Icon icon="feather:users" />
                                <span>Team</span>
                              </a>
                            </li>
                            <li
                              :class="[
                                activeTab3 === 'projects' && 'is-active',
                              ]"
                            >
                              <a @click="activeTab3 = 'projects'">
                                <Icon icon="feather:box" />
                                <span>Projects</span>
                              </a>
                            </li>
                            <li
                              :class="[activeTab3 === 'tasks' && 'is-active']"
                            >
                              <a @click="activeTab3 = 'tasks'">
                                <Icon icon="feather:check" />
                                <span>Tasks</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab3"
                        class="tab-content"
                        :class="[activeTab3 === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab3"
                        class="tab-content"
                        :class="[activeTab3 === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab3"
                        class="tab-content"
                        :class="[activeTab3 === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper&#x22;&#x3E;
    &#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
        &#x3C;div class=&#x22;tabs&#x22;&#x3E;
            &#x3C;ul&#x3E;
                &#x3C;li data-tab=&#x22;team-tab3&#x22; class=&#x22;is-active&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i data-feather=&#x22;users&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Team&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;projects-tab3&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i data-feather=&#x22;box&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Projects&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;tasks-tab3&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Tasks&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    

    &#x3C;div id=&#x22;team-tab3&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;projects-tab3&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;tasks-tab3&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Font Awesome Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Font Awesome</h3>
                    <p>
                      You can easily embed <code>Font Awesome 5</code> in your
                      tab elements. The styling is already taken care of, just
                      add the icons you want. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs">
                          <ul>
                            <li :class="[activeTab4 === 'team' && 'is-active']">
                              <a @click="activeTab4 = 'team'">
                                <i class="fas fa-users"></i>
                                <span>Team</span>
                              </a>
                            </li>
                            <li
                              :class="[
                                activeTab4 === 'projects' && 'is-active',
                              ]"
                            >
                              <a @click="activeTab4 = 'projects'">
                                <i class="fas fa-umbrella"></i>
                                <span>Projects</span>
                              </a>
                            </li>
                            <li
                              :class="[activeTab4 === 'tasks' && 'is-active']"
                            >
                              <a @click="activeTab4 = 'tasks'">
                                <i class="fas fa-tasks"></i>
                                <span>Tasks</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab4"
                        class="tab-content"
                        :class="[activeTab4 === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab4"
                        class="tab-content"
                        :class="[activeTab4 === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab4"
                        class="tab-content"
                        :class="[activeTab4 === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper&#x22;&#x3E;
    &#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
        &#x3C;div class=&#x22;tabs&#x22;&#x3E;
            &#x3C;ul&#x3E;
                &#x3C;li data-tab=&#x22;team-tab4&#x22; class=&#x22;is-active&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i class=&#x22;fas fa-users&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Team&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;projects-tab4&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i class=&#x22;fas fa-umbrella&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Projects&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;tasks-tab4&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i class=&#x22;fas fa-tasks&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Tasks&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    

    &#x3C;div id=&#x22;team-tab4&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;projects-tab4&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;tasks-tab4&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Font Awesome Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Line Icons</h3>
                    <p>
                      You can easily embed <code>Line Icons</code> in your tab
                      elements. The styling is already taken care of, just add
                      the icons you want. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs">
                          <ul>
                            <li :class="[activeTab5 === 'team' && 'is-active']">
                              <a @click="activeTab5 = 'team'">
                                <i class="lnil lnil-hierchy-alt"></i>
                                <span>Team</span>
                              </a>
                            </li>
                            <li
                              :class="[
                                activeTab5 === 'projects' && 'is-active',
                              ]"
                            >
                              <a @click="activeTab5 = 'projects'">
                                <i class="lnil lnil-analytics-alt-1"></i>
                                <span>Projects</span>
                              </a>
                            </li>
                            <li
                              :class="[activeTab5 === 'tasks' && 'is-active']"
                            >
                              <a @click="activeTab5 = 'tasks'">
                                <i class="lnil lnil-licencse"></i>
                                <span>Tasks</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab5"
                        class="tab-content"
                        :class="[activeTab5 === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab5"
                        class="tab-content"
                        :class="[activeTab5 === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab5"
                        class="tab-content"
                        :class="[activeTab5 === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper&#x22;&#x3E;
    &#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
        &#x3C;div class=&#x22;tabs&#x22;&#x3E;
            &#x3C;ul&#x3E;
                &#x3C;li data-tab=&#x22;team-tab5&#x22; class=&#x22;is-active&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-hierchy-alt&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Team&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;projects-tab5&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-analytics-alt-1&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Projects&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;tasks-tab5&#x22;&#x3E;
                    &#x3C;a&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-licencse&#x22;&#x3E;&#x3C;/i&#x3E;
                        &#x3C;span&#x3E;Tasks&#x3C;/span&#x3E;
                    &#x3C;/a&#x3E;
                &#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    

    &#x3C;div id=&#x22;team-tab5&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;projects-tab5&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;tasks-tab5&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Boxed Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Boxed Tabs</h3>
                    <p>
                      Tabs can be displayed in an old school boxed layout. To
                      display boxed tabs, use the <code>is-boxed</code> class on
                      the main <code>tabs</code> element. check the markup for
                      more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs is-boxed">
                          <ul>
                            <li :class="[activeTab6 === 'team' && 'is-active']">
                              <a @click="activeTab6 = 'team'">Team</a>
                            </li>
                            <li
                              :class="[
                                activeTab6 === 'projects' && 'is-active',
                              ]"
                            >
                              <a @click="activeTab6 = 'projects'">Projects</a>
                            </li>
                            <li
                              :class="[activeTab6 === 'tasks' && 'is-active']"
                            >
                              <a @click="activeTab6 = 'tasks'">Tasks</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab6"
                        class="tab-content"
                        :class="[activeTab6 === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab6"
                        class="tab-content"
                        :class="[activeTab6 === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab6"
                        class="tab-content"
                        :class="[activeTab6 === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper&#x22;&#x3E;
    &#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
        &#x3C;div class=&#x22;tabs is-boxed&#x22;&#x3E;
            &#x3C;ul&#x3E;
                &#x3C;li data-tab=&#x22;team-tab6&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;Team&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;projects-tab6&#x22;&#x3E;&#x3C;a&#x3E;Projects&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;tasks-tab6&#x22;&#x3E;&#x3C;a&#x3E;Tasks&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    

    &#x3C;div id=&#x22;team-tab6&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;projects-tab6&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;tasks-tab6&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Toggle Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Toggle Tabs</h3>
                    <p>
                      Tabs can be displayed in exclusive toggle layout. To
                      display toggle tabs, use the <code>is-toggle</code> class
                      on the main <code>tabs</code> element. check the markup
                      for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs is-toggle">
                          <ul>
                            <li :class="[activeTab7 === 'team' && 'is-active']">
                              <a @click="activeTab7 = 'team'">Team</a>
                            </li>
                            <li
                              :class="[
                                activeTab7 === 'projects' && 'is-active',
                              ]"
                            >
                              <a @click="activeTab7 = 'projects'">Projects</a>
                            </li>
                            <li
                              :class="[activeTab7 === 'tasks' && 'is-active']"
                            >
                              <a @click="activeTab7 = 'tasks'">Tasks</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab7"
                        class="tab-content"
                        :class="[activeTab7 === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab7"
                        class="tab-content"
                        :class="[activeTab7 === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab7"
                        class="tab-content"
                        :class="[activeTab7 === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper&#x22;&#x3E;
    &#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
        &#x3C;div class=&#x22;tabs is-toggle&#x22;&#x3E;
            &#x3C;ul&#x3E;
                &#x3C;li data-tab=&#x22;team-tab7&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;Team&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;projects-tab7&#x22;&#x3E;&#x3C;a&#x3E;Projects&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;tasks-tab7&#x22;&#x3E;&#x3C;a&#x3E;Tasks&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    

    &#x3C;div id=&#x22;team-tab7&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;projects-tab7&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;tasks-tab7&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded Toggle Tabs-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Toggle Tabs</h3>
                    <p>
                      Tabs can be displayed in exclusive toggle layout. To
                      display rounded toggle tabs, use the
                      <code>is-toggle</code> and
                      <code>is-toggle-rounded</code> classes on the main
                      <code>tabs</code> element. check the markup for more
                      details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper">
                      <div class="tabs-inner">
                        <div class="tabs is-toggle is-toggle-rounded">
                          <ul>
                            <li :class="[activeTab8 === 'team' && 'is-active']">
                              <a @click="activeTab8 = 'team'">Team</a>
                            </li>
                            <li
                              :class="[
                                activeTab8 === 'projects' && 'is-active',
                              ]"
                            >
                              <a @click="activeTab8 = 'projects'">Projects</a>
                            </li>
                            <li
                              :class="[activeTab8 === 'tasks' && 'is-active']"
                            >
                              <a @click="activeTab8 = 'tasks'">Tasks</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        id="team-tab8"
                        class="tab-content"
                        :class="[activeTab8 === 'team' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="projects-tab8"
                        class="tab-content"
                        :class="[activeTab8 === 'projects' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div
                        id="team-tab8"
                        class="tab-content"
                        :class="[activeTab8 === 'tasks' && 'is-active']"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;tabs-wrapper&#x22;&#x3E;
    &#x3C;div class=&#x22;tabs-inner&#x22;&#x3E;
        &#x3C;div class=&#x22;tabs is-toggle is-toggle-rounded&#x22;&#x3E;
            &#x3C;ul&#x3E;
                &#x3C;li data-tab=&#x22;team-tab8&#x22; class=&#x22;is-active&#x22;&#x3E;&#x3C;a&#x3E;Team&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;projects-tab8&#x22;&#x3E;&#x3C;a&#x3E;Projects&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li data-tab=&#x22;tasks-tab8&#x22;&#x3E;&#x3C;a&#x3E;Tasks&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    

    &#x3C;div id=&#x22;team-tab8&#x22; class=&#x22;tab-content is-active&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;projects-tab8&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div id=&#x22;tasks-tab8&#x22; class=&#x22;tab-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.&#x3C;/p&#x3E;
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
