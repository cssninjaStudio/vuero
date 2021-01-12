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
              <h1 class="title is-4">Loader</h1>
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
                    <span>Loader</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Loader-->
                <div class="demo-card has-more-margin">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Loader</h3>
                    <p class="m-b-20">
                      Huro ships with a dead simple and versatile loader. This
                      loader is mostly CSS based and gets activated by toggling
                      a class on the parent with Javascript. The main loader
                      parent wrapper class adds the
                      <code>relative</code> position to the target. The loader
                      element's size can be change with classes: available
                      classes are <code>is-small</code>,
                      <code>is-large</code> and <code>is-xl</code>. Please refer
                      to the code example for more details about usage.
                    </p>

                    <button
                      id="show-demo-loaders"
                      class="button h-button is-primary is-elevated"
                    >
                      Show Loaders
                    </button>

                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//Javascript
$('.has-loader').addClass('has-loader-active');

//Markup
&#x3C;!--Parent element who will contain the loader--&#x3E;
&#x3C;div class=&#x22;has-loader&#x22;&#x3E;
    &#x3C;!--Loader element--&#x3E;
    &#x3C;div class=&#x22;h-loader-wrapper&#x22;&#x3E;
        &#x3C;div class=&#x22;loader is-small is-loading&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <div class="columns is-multiline">
                  <div class="column is-4">
                    <div class="s-card is-raised demo-s-card has-loader">
                      <!--Loader-->
                      <div class="h-loader-wrapper">
                        <div class="loader is-small is-loading"></div>
                      </div>

                      <div class="card-head">
                        <div class="media-flex-center no-margin">
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/19.jpg"
                              alt=""
                              data-user-popover="17"
                            />
                            <img
                              class="badge"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/icons/flags/germany.svg"
                              alt=""
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Greta K.</span>
                            <span>Sales Manager</span>
                          </div>
                        </div>
                        <div
                          class="dropdown is-spaced is-dots is-right dropdown-trigger is-up"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <Icon icon="feather:more-vertical" />
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-lock"></i>
                                </div>
                                <div class="meta">
                                  <span>Permissions</span>
                                  <span>Edit permissions</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-bubble"></i>
                                </div>
                                <div class="meta">
                                  <span>Message</span>
                                  <span>Send a message</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-share"></i>
                                </div>
                                <div class="meta">
                                  <span>Share</span>
                                  <span>Share this profile</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-trash-can-alt"></i>
                                </div>
                                <div class="meta">
                                  <span>Remove</span>
                                  <span>Remove from grid</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-inner">
                        <p>
                          I can be used as is in any layout. L Cards are simple
                          containers that can hold any type of content, from
                          simple plain text to more structured markup.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="r-card is-raised demo-r-card has-loader">
                      <!--Loader-->
                      <div class="h-loader-wrapper">
                        <div class="loader is-loading"></div>
                      </div>

                      <div class="card-head">
                        <div class="media-flex-center no-margin">
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/19.jpg"
                              alt=""
                              data-user-popover="17"
                            />
                            <img
                              class="badge"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/icons/flags/germany.svg"
                              alt=""
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Greta K.</span>
                            <span>Sales Manager</span>
                          </div>
                        </div>
                        <div
                          class="dropdown is-spaced is-dots is-right dropdown-trigger is-up"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <Icon icon="feather:more-vertical" />
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-lock"></i>
                                </div>
                                <div class="meta">
                                  <span>Permissions</span>
                                  <span>Edit permissions</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-bubble"></i>
                                </div>
                                <div class="meta">
                                  <span>Message</span>
                                  <span>Send a message</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-share"></i>
                                </div>
                                <div class="meta">
                                  <span>Share</span>
                                  <span>Share this profile</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-trash-can-alt"></i>
                                </div>
                                <div class="meta">
                                  <span>Remove</span>
                                  <span>Remove from grid</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-inner">
                        <p>
                          I can be used as is in any layout. L Cards are simple
                          containers that can hold any type of content, from
                          simple plain text to more structured markup.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="l-card is-raised demo-l-card has-loader">
                      <!--Loader-->
                      <div class="h-loader-wrapper">
                        <div class="loader is-large is-loading"></div>
                      </div>

                      <div class="card-head">
                        <div class="media-flex-center no-margin">
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/19.jpg"
                              alt=""
                              data-user-popover="17"
                            />
                            <img
                              class="badge"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/icons/flags/germany.svg"
                              alt=""
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Greta K.</span>
                            <span>Sales Manager</span>
                          </div>
                        </div>
                        <div
                          class="dropdown is-spaced is-dots is-right dropdown-trigger is-up"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <Icon icon="feather:more-vertical" />
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-lock"></i>
                                </div>
                                <div class="meta">
                                  <span>Permissions</span>
                                  <span>Edit permissions</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-bubble"></i>
                                </div>
                                <div class="meta">
                                  <span>Message</span>
                                  <span>Send a message</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-share"></i>
                                </div>
                                <div class="meta">
                                  <span>Share</span>
                                  <span>Share this profile</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-trash-can-alt"></i>
                                </div>
                                <div class="meta">
                                  <span>Remove</span>
                                  <span>Remove from grid</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-inner">
                        <p>
                          I can be used as is in any layout. L Cards are simple
                          containers that can hold any type of content, from
                          simple plain text to more structured markup.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="l-card is-raised demo-l-card has-loader">
                      <!--Loader-->
                      <div class="h-loader-wrapper">
                        <div class="loader is-xl is-loading"></div>
                      </div>

                      <div class="card-head">
                        <div class="media-flex-center no-margin">
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/19.jpg"
                              alt=""
                              data-user-popover="17"
                            />
                            <img
                              class="badge"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/icons/flags/germany.svg"
                              alt=""
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Greta K.</span>
                            <span>Sales Manager</span>
                          </div>
                        </div>
                        <div
                          class="dropdown is-spaced is-dots is-right dropdown-trigger is-up"
                        >
                          <div class="is-trigger" aria-haspopup="true">
                            <Icon icon="feather:more-vertical" />
                          </div>
                          <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-lock"></i>
                                </div>
                                <div class="meta">
                                  <span>Permissions</span>
                                  <span>Edit permissions</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-bubble"></i>
                                </div>
                                <div class="meta">
                                  <span>Message</span>
                                  <span>Send a message</span>
                                </div>
                              </a>
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-share"></i>
                                </div>
                                <div class="meta">
                                  <span>Share</span>
                                  <span>Share this profile</span>
                                </div>
                              </a>
                              <hr class="dropdown-divider" />
                              <a href="#" class="dropdown-item is-media">
                                <div class="icon">
                                  <i class="lnil lnil-trash-can-alt"></i>
                                </div>
                                <div class="meta">
                                  <span>Remove</span>
                                  <span>Remove from grid</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-inner">
                        <p>
                          I can be used as is in any layout. L Cards are simple
                          containers that can hold any type of content, from
                          simple plain text to more structured markup.
                        </p>
                      </div>
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
