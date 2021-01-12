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
              <h1 class="title is-4">Dropdown</h1>
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
                    <span>Dropdown</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Dropdown-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Dropdown</h3>
                    <p>
                      You can use a regular dropdown to display a menu that will
                      hold your options. You can change the menu orientation.
                      Use the <code>is-right</code> class on the
                      <code>dropdown</code> element to align it to the right
                      instead of left, which is the default. Use the
                      <code>is-up</code> class to make it a dropup. Refer to the
                      markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped">
                      <div class="control">
                        <div class="dropdown dropdown-trigger">
                          <div class="is-trigger">
                            <button class="button" aria-haspopup="true">
                              <span>Dropdown button</span>
                              <span class="icon is-small">
                                <i
                                  class="fas fa-angle-down"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="control">
                        <div class="dropdown dropdown-trigger is-right">
                          <div class="is-trigger">
                            <button class="button" aria-haspopup="true">
                              <span>Dropdown button</span>
                              <span class="icon is-small">
                                <i
                                  class="fas fa-angle-down"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="control">
                        <div class="dropdown dropdown-trigger is-right is-up">
                          <div class="is-trigger">
                            <button class="button" aria-haspopup="true">
                              <span>Dropdown button</span>
                              <span class="icon is-small">
                                <i
                                  class="fas fa-angle-down"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;dropdown dropdown-trigger&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22;&#x3E;
        &#x3C;button class=&#x22;button&#x22; aria-haspopup=&#x22;true&#x22;
            aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;span&#x3E;Dropdown button&#x3C;/span&#x3E;
            &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-angle-down&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; id=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Active dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                With a divider
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;dropdown dropdown-trigger is-right&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22;&#x3E;
        &#x3C;button class=&#x22;button&#x22; aria-haspopup=&#x22;true&#x22;
            aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;span&#x3E;Dropdown button&#x3C;/span&#x3E;
            &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-angle-down&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; id=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Active dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                With a divider
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;dropdown dropdown-trigger is-right is-up&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22;&#x3E;
        &#x3C;button class=&#x22;button&#x22; aria-haspopup=&#x22;true&#x22;
            aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;span&#x3E;Dropdown button&#x3C;/span&#x3E;
            &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-angle-down&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; id=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Active dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                With a divider
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Dropdown-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Dropdown Colors</h3>
                    <p>
                      You can use all the available color classes on the
                      dropdown buttons, like <code>is-primary</code> or
                      <code>is-danger</code> for instance. Refer to the button
                      documentation for full customization options.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped">
                      <div class="control">
                        <div class="dropdown dropdown-trigger">
                          <div class="is-trigger">
                            <button
                              class="button is-primary"
                              aria-haspopup="true"
                            >
                              <span>Dropdown button</span>
                              <span class="icon is-small">
                                <i
                                  class="fas fa-angle-down"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="control">
                        <div class="dropdown dropdown-trigger is-right">
                          <div class="is-trigger">
                            <button
                              class="button is-danger"
                              aria-haspopup="true"
                            >
                              <span>Dropdown button</span>
                              <span class="icon is-small">
                                <i
                                  class="fas fa-angle-down"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;dropdown dropdown-trigger&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22;&#x3E;
        &#x3C;button class=&#x22;button is-primary&#x22; aria-haspopup=&#x22;true&#x22;
            aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;span&#x3E;Dropdown button&#x3C;/span&#x3E;
            &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-angle-down&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; id=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Active dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                With a divider
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;dropdown dropdown-trigger&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22;&#x3E;
        &#x3C;button class=&#x22;button is-danger&#x22; aria-haspopup=&#x22;true&#x22;
            aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;span&#x3E;Dropdown button&#x3C;/span&#x3E;
            &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-angle-down&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; id=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Active dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                With a divider
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Dropdown-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Context Menu</h3>
                    <p>
                      Vuero dropdowns can also be displayed as a context menu
                      holding a single icon. The icon can be whatever you want.
                      This dropdown will have the specific
                      <code>is-dots</code> class. Please refer to the markup for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped">
                      <div class="control">
                        <div class="dropdown is-dots dropdown-trigger">
                          <div class="is-trigger" aria-haspopup="true">
                            <Icon icon="feather:more-vertical" />
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="dropdown is-dots dropdown-trigger">
                          <div class="is-trigger" aria-haspopup="true">
                            <Icon icon="feather:more-horizontal" />
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="dropdown is-dots dropdown-trigger">
                          <div class="is-trigger" aria-haspopup="true">
                            <Icon icon="feather:help-circle" />
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;dropdown is-dots dropdown-trigger&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22; aria-haspopup=&#x22;true&#x22; aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
        &#x3C;i data-feather=&#x22;more-vertical&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; id=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Active dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                With a divider
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Dropdown-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Modern Dropdown</h3>
                    <p>
                      If you add in some specific markup, regular dropdown
                      buttons can be enhanced into modern dropdowns with an
                      animated caret icon. Use the <code>is-modern</code> class
                      on the <code>dropdown</code> element along with the
                      specific markup that is provided in the code example. All
                      button modifiers still apply.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped">
                      <div class="control">
                        <div class="dropdown is-modern dropdown-trigger">
                          <div class="is-trigger" aria-haspopup="true">
                            <button class="button" aria-haspopup="true">
                              <span>Modern Drop</span>
                              <span class="caret">
                                <Icon icon="feather:chevron-down" />
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="control">
                        <div
                          class="dropdown is-modern dropdown-trigger is-right"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <button
                              class="button is-rounded"
                              aria-haspopup="true"
                            >
                              <span>Modern Drop</span>
                              <span class="caret">
                                <Icon icon="feather:chevron-down" />
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="control">
                        <div
                          class="dropdown is-modern dropdown-trigger is-up is-right"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <button class="button" aria-haspopup="true">
                              <span>Modern Drop</span>
                              <span class="caret">
                                <Icon icon="feather:chevron-down" />
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item font-size-base">
                                Dropdown item
                              </a>
                              <a class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item font-size-base">
                                Other dropdown item
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item font-size-base">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;dropdown is-modern dropdown-trigger&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22; aria-haspopup=&#x22;true&#x22; aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
        &#x3C;button class=&#x22;button&#x22; aria-haspopup=&#x22;true&#x22;
            aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;span&#x3E;Modern Drop&#x3C;/span&#x3E;
            &#x3C;span class=&#x22;caret&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; id=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Active dropdown item
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                Other dropdown item
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item font-size-base&#x22;&#x3E;
                With a divider
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Dropdown-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Menu with Icons</h3>
                    <p>
                      Dropdown menus can have icons and more structured content.
                      You can use them to display any type of information or
                      options. Use the <code>is-spaced</code> with the provided
                      markup in the code example.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped">
                      <div class="control">
                        <div
                          class="dropdown is-modern is-spaced dropdown-trigger"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <button class="button" aria-haspopup="true">
                              <span>Modern Drop</span>
                              <span class="caret">
                                <Icon icon="feather:chevron-down" />
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-coins"></i>
                                </div>
                                <div class="meta">
                                  <span>Invest</span>
                                  <span>Buy more stocks</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-dollar-up"></i>
                                </div>
                                <div class="meta">
                                  <span>Compare</span>
                                  <span>Compare with others</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-bank"></i>
                                </div>
                                <div class="meta">
                                  <span>Trade</span>
                                  <span>View opportunities</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-wallet-alt-1"></i>
                                </div>
                                <div class="meta">
                                  <span>Wallet</span>
                                  <span>Open stock wallet</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="control">
                        <div
                          class="dropdown is-modern is-spaced dropdown-trigger is-right"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <button
                              class="button is-rounded"
                              aria-haspopup="true"
                            >
                              <span>Modern Drop</span>
                              <span class="caret">
                                <Icon icon="feather:chevron-down" />
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-coins"></i>
                                </div>
                                <div class="meta">
                                  <span>Invest</span>
                                  <span>Buy more stocks</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-dollar-up"></i>
                                </div>
                                <div class="meta">
                                  <span>Compare</span>
                                  <span>Compare with others</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-bank"></i>
                                </div>
                                <div class="meta">
                                  <span>Trade</span>
                                  <span>View opportunities</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-wallet-alt-1"></i>
                                </div>
                                <div class="meta">
                                  <span>Wallet</span>
                                  <span>Open stock wallet</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="control">
                        <div
                          class="dropdown is-modern is-dots is-spaced dropdown-trigger is-right"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <Icon icon="feather:more-horizontal" />
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-coins"></i>
                                </div>
                                <div class="meta">
                                  <span>Invest</span>
                                  <span>Buy more stocks</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-dollar-up"></i>
                                </div>
                                <div class="meta">
                                  <span>Compare</span>
                                  <span>Compare with others</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-bank"></i>
                                </div>
                                <div class="meta">
                                  <span>Trade</span>
                                  <span>View opportunities</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-wallet-alt-1"></i>
                                </div>
                                <div class="meta">
                                  <span>Wallet</span>
                                  <span>Open stock wallet</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;dropdown is-modern is-spaced dropdown-trigger&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22; aria-haspopup=&#x22;true&#x22; aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
        &#x3C;button class=&#x22;button&#x22; aria-haspopup=&#x22;true&#x22;
            aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;span&#x3E;Modern Drop&#x3C;/span&#x3E;
            &#x3C;span class=&#x22;caret&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item is-media&#x22;&#x3E;
                &#x3C;div class=&#x22;icon&#x22;&#x3E;
                    &#x3C;i class=&#x22;lnil lnil-coins&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;meta&#x22;&#x3E;
                    &#x3C;span&#x3E;Invest&#x3C;/span&#x3E;
                    &#x3C;span&#x3E;Buy more stocks&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item is-media&#x22;&#x3E;
                &#x3C;div class=&#x22;icon&#x22;&#x3E;
                    &#x3C;i class=&#x22;lnil lnil-dollar-up&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;meta&#x22;&#x3E;
                    &#x3C;span&#x3E;Compare&#x3C;/span&#x3E;
                    &#x3C;span&#x3E;Compare with others&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item is-media&#x22;&#x3E;
                &#x3C;div class=&#x22;icon&#x22;&#x3E;
                    &#x3C;i class=&#x22;lnil lnil-bank&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;meta&#x22;&#x3E;
                    &#x3C;span&#x3E;Trade&#x3C;/span&#x3E;
                    &#x3C;span&#x3E;View opportunities&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item is-media&#x22;&#x3E;
                &#x3C;div class=&#x22;icon&#x22;&#x3E;
                    &#x3C;i class=&#x22;lnil lnil-wallet-alt-1&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;meta&#x22;&#x3E;
                    &#x3C;span&#x3E;Wallet&#x3C;/span&#x3E;
                    &#x3C;span&#x3E;Open stock wallet&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Dropdown-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Menu with Images</h3>
                    <p>
                      Dropdown menus can have images and more structured
                      content. You can use them to display any type of
                      information or options. Use the
                      <code>is-spaced</code> with the provided markup in the
                      code example. The inner images can be made rounded by
                      adding the <code>is-rounded</code> class to the image
                      element.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped">
                      <div class="control">
                        <div
                          class="dropdown is-modern is-spaced dropdown-trigger"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <button class="button" aria-haspopup="true">
                              <span>Modern Drop</span>
                              <span class="caret">
                                <Icon icon="feather:chevron-down" />
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <img
                                  class="item-img"
                                  src="/@images/avatars/photos/8.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <div class="meta">
                                  <span>Erik K.</span>
                                  <span>New York, NY</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <img
                                  class="item-img"
                                  src="/@images/avatars/photos/7.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <div class="meta">
                                  <span>Alice C.</span>
                                  <span>San Diego, CA</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <img
                                  class="item-img"
                                  src="/@images/avatars/photos/25.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <div class="meta">
                                  <span>Melany W.</span>
                                  <span>San Jose, CA</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <img
                                  class="item-img"
                                  src="/@images/avatars/photos/9.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <div class="meta">
                                  <span>Anna B</span>
                                  <span>San Francisco, CA</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="control">
                        <div
                          class="dropdown is-modern is-spaced dropdown-trigger is-right"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <button
                              class="button is-rounded"
                              aria-haspopup="true"
                            >
                              <span>Modern Drop</span>
                              <span class="caret">
                                <Icon icon="feather:chevron-down" />
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <img
                                  class="item-img is-rounded"
                                  src="/@images/avatars/photos/8.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <div class="meta">
                                  <span>Erik K.</span>
                                  <span>New York, NY</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <img
                                  class="item-img is-rounded"
                                  src="/@images/avatars/photos/7.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <div class="meta">
                                  <span>Alice C.</span>
                                  <span>San Diego, CA</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <img
                                  class="item-img is-rounded"
                                  src="/@images/avatars/photos/25.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <div class="meta">
                                  <span>Melany W.</span>
                                  <span>San Jose, CA</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <img
                                  class="item-img is-rounded"
                                  src="/@images/avatars/photos/9.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <div class="meta">
                                  <span>Anna B</span>
                                  <span>San Francisco, CA</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;dropdown is-modern is-spaced dropdown-trigger&#x22;&#x3E;
    &#x3C;div class=&#x22;is-trigger&#x22; aria-haspopup=&#x22;true&#x22; aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
        &#x3C;button class=&#x22;button&#x22; aria-haspopup=&#x22;true&#x22;
            aria-controls=&#x22;dropdown-menu&#x22;&#x3E;
            &#x3C;span&#x3E;Modern Drop&#x3C;/span&#x3E;
            &#x3C;span class=&#x22;caret&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;dropdown-menu&#x22; role=&#x22;menu&#x22;&#x3E;
        &#x3C;div class=&#x22;dropdown-content&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item is-media&#x22;&#x3E;
                &#x3C;img class=&#x22;item-img&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;src=&#x22;assets/img/avatars/svg/1.gif&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;div class=&#x22;meta&#x22;&#x3E;
                    &#x3C;span&#x3E;John Doe&#x3C;/span&#x3E;
                    &#x3C;span&#x3E;Island&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item is-media&#x22;&#x3E;
                &#x3C;img class=&#x22;item-img&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;src=&#x22;assets/img/avatars/svg/1.gif&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;div class=&#x22;meta&#x22;&#x3E;
                    &#x3C;span&#x3E;Alex Miller&#x3C;/span&#x3E;
                    &#x3C;span&#x3E;England&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/a&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item is-media&#x22;&#x3E;
                &#x3C;img class=&#x22;item-img&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;src=&#x22;assets/img/avatars/svg/1.gif&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;div class=&#x22;meta&#x22;&#x3E;
                    &#x3C;span&#x3E;Lana Davis&#x3C;/span&#x3E;
                    &#x3C;span&#x3E;Germany&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/a&#x3E;
            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
            &#x3C;a href=&#x22;#&#x22; class=&#x22;dropdown-item is-media&#x22;&#x3E;
                &#x3C;img class=&#x22;item-img&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;src=&#x22;assets/img/avatars/svg/1.gif&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;div class=&#x22;meta&#x22;&#x3E;
                    &#x3C;span&#x3E;Stephane Robert&#x3C;/span&#x3E;
                    &#x3C;span&#x3E;France&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/a&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Artificial Spacing-->
                <div class="demo-spacer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
