<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      data-sidebar-open
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
              data-sidebar="components-sidebar"
            >
              <span class="menu-toggle has-chevron">
                <span class="icon-box-toggle">
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
                      Huro provides special navigation tabs that you can use to
                      build nice looking and optimized layouts. Tabs work with a
                      javascript implementation. Check the markup for more
                      details. These tabs only support 2 items.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper is-slider">
                      <div class="tabs-inner">
                        <div class="tabs">
                          <ul>
                            <li data-tab="team-tab" class="is-active">
                              <a><span>Team</span></a>
                            </li>
                            <li data-tab="projects-tab">
                              <a><span>Projects</span></a>
                            </li>
                            <li class="tab-naver"></li>
                          </ul>
                        </div>
                      </div>

                      <div id="team-tab" class="tab-content is-active">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div id="projects-tab" class="tab-content">
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
                      Huro provides special navigation tabs that you can use to
                      build nice looking and optimized layouts. Add the
                      <code>is-squared</code> class to the
                      <code>tabs-wrapper</code> element to make the tabs
                      squared. Tabs work with a javascript implementation. Check
                      the markup for more details. These tabs only support 2
                      items.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper is-slider is-squared">
                      <div class="tabs-inner">
                        <div class="tabs">
                          <ul>
                            <li data-tab="team-tab1" class="is-active">
                              <a><span>Team</span></a>
                            </li>
                            <li data-tab="projects-tab1">
                              <a><span>Projects</span></a>
                            </li>
                            <li class="tab-naver"></li>
                          </ul>
                        </div>
                      </div>

                      <div id="team-tab1" class="tab-content is-active">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div id="projects-tab1" class="tab-content">
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
                      Huro provides special navigation tabs that you can use to
                      build nice looking and optimized layouts. Tabs work with a
                      javascript implementation. Check the markup for more
                      details. These tabs only support 3 items.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper is-triple-slider">
                      <div class="tabs-inner">
                        <div class="tabs">
                          <ul>
                            <li data-tab="team-tab2" class="is-active">
                              <a><span>Team</span></a>
                            </li>
                            <li data-tab="projects-tab2">
                              <a><span>Projects</span></a>
                            </li>
                            <li data-tab="tasks-tab2">
                              <a><span>Tasks</span></a>
                            </li>
                            <li class="tab-naver"></li>
                          </ul>
                        </div>
                      </div>

                      <div id="team-tab2" class="tab-content is-active">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div id="projects-tab2" class="tab-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div id="tasks-tab2" class="tab-content">
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
                      Huro provides special navigation tabs that you can use to
                      build nice looking and optimized layouts. Add the
                      <code>is-squared</code> class to the
                      <code>tabs-wrapper</code> element to make the tabs
                      squared. Tabs work with a javascript implementation. Check
                      the markup for more details. These tabs only support 3
                      items.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="tabs-wrapper is-triple-slider is-squared">
                      <div class="tabs-inner">
                        <div class="tabs">
                          <ul>
                            <li data-tab="team-tab3" class="is-active">
                              <a><span>Team</span></a>
                            </li>
                            <li data-tab="projects-tab3">
                              <a><span>Projects</span></a>
                            </li>
                            <li data-tab="tasks-tab3">
                              <a><span>Tasks</span></a>
                            </li>
                            <li class="tab-naver"></li>
                          </ul>
                        </div>
                      </div>

                      <div id="team-tab3" class="tab-content is-active">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div id="projects-tab3" class="tab-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times. Quae diligentissime contra Aristonem dicuntur a
                          Chryippo. Duo Reges: constructio interrete.
                        </p>
                      </div>

                      <div id="tasks-tab3" class="tab-content">
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
      </div>
    </div>
  </DefaultLayout>
</template>
