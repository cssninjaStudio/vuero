<template>
  <DefaultLayout>
    <ElementsSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      data-sidebar-open
      data-naver-offset="278"
      data-menu-item="#elements-sidebar-menu"
      data-mobile-item="#elements-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="elements-sidebar"
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
              <h1 class="title is-4">Bulma Cards</h1>
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
                  <RouterLink :to="{ name: 'elements-hub' }">
                    <span>Elements</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Bulma Cards</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Bulma Cards-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Quick Cards</h3>
                    <p>
                      Vuero also features classic Bulma cards, but with a
                      particular Vuero flavour. Simply add the
                      <code>h-card</code> class to a Bulma
                      <code>card</code> element to leverage the styles provided
                      by Vuero.
                    </p>
                  </div>
                </div>

                <div class="columns is-multiline">
                  <!--Card-->
                  <div class="column is-4">
                    <div class="card h-card">
                      <header class="card-header">
                        <div class="card-header-title">Featured Tweet</div>
                        <a href="#" class="card-header-icon text-twitter">
                          <span class="icon">
                            <i class="fab fa-twitter"></i>
                          </span>
                        </a>
                      </header>
                      <div class="card-content">
                        <div class="media-flex p-b-10">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar is-squared"
                              src="/@images/avatars/photos/19.jpg"
                              alt=""
                              data-user-popover="17"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Greta K.</span>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus nec iaculis mauris.
                            </span>
                            <span>
                              <a class="text-twitter" href="#">@bulmaio</a>.
                              <a class="text-twitter" href="#">#css</a>
                              <a class="text-twitter" href="#">#responsive</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">Save</a>
                        <a href="#" class="card-footer-item">Edit</a>
                      </footer>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="column is-4">
                    <div class="card h-card">
                      <header class="card-header">
                        <div class="card-header-title">Featured Story</div>
                        <a href="#" class="card-header-icon text-instagram">
                          <span class="icon">
                            <i class="fab fa-instagram"></i>
                          </span>
                        </a>
                      </header>
                      <div class="card-content">
                        <div class="media-flex p-b-10">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar is-squared"
                              src="/@images/avatars/photos/5.jpg"
                              alt=""
                              data-user-popover="9"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Mary L.</span>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus nec iaculis mauris.
                            </span>
                            <span>
                              <a class="text-twitter" href="#">@bulmaio</a>.
                              <a class="text-twitter" href="#">#css</a>
                              <a class="text-twitter" href="#">#responsive</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">Save</a>
                        <a href="#" class="card-footer-item">Edit</a>
                      </footer>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="column is-4">
                    <div class="card h-card">
                      <header class="card-header">
                        <div class="card-header-title">Featured Post</div>
                        <a href="#" class="card-header-icon text-facebook">
                          <span class="icon">
                            <i class="fab fa-facebook-f"></i>
                          </span>
                        </a>
                      </header>
                      <div class="card-content">
                        <div class="media-flex p-b-10">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar is-squared"
                              src="/@images/avatars/photos/36.jpg"
                              alt=""
                              data-user-popover="30"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Benoit L.</span>
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus nec iaculis mauris.
                            </span>
                            <span>
                              <a class="text-twitter" href="#">@bulmaio</a>.
                              <a class="text-twitter" href="#">#css</a>
                              <a class="text-twitter" href="#">#responsive</a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">Save</a>
                        <a href="#" class="card-footer-item">Edit</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Bulma Cards-->
                <div class="demo-card has-margin-top">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Full Cards</h3>
                    <p>
                      Vuero also features classic Bulma cards, but with a
                      particular Vuero flavour. Simply add the
                      <code>h-card</code> class to a Bulma
                      <code>card</code> element to leverage the styles provided
                      by Vuero.
                    </p>
                  </div>
                </div>

                <div class="columns is-multiline">
                  <!--Card-->
                  <div class="column is-4">
                    <div class="card h-card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img
                            src="/@images/photo/demo/apps/1.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media-flex-center no-margin">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/19.jpg"
                              alt=""
                              data-user-popover="17"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <img
                              class="badge"
                              src="/@images/icons/flags/germany.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Greta K.</span>
                            <span>Sales Manager</span>
                          </div>
                        </div>

                        <div class="inner-content p-t-20 p-b-20">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ego vero isti, inquam, permitto. Id Sextilius
                            factum negabat. Apparet statim, quae sint officia,
                            quae actiones. Sed hoc sane concedamus...
                          </p>
                        </div>

                        <a class="action-link">Read More</a>
                      </div>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="column is-4">
                    <div class="card h-card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img
                            src="/@images/photo/demo/apps/2.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media-flex-center no-margin">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/23.jpg"
                              alt=""
                              data-user-popover="21"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <img
                              class="badge"
                              src="/@images/icons/flags/united-states-of-america.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Irina V.</span>
                            <span>Project Manager</span>
                          </div>
                        </div>

                        <div class="inner-content p-t-20 p-b-20">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ego vero isti, inquam, permitto. Id Sextilius
                            factum negabat. Apparet statim, quae sint officia,
                            quae actiones. Sed hoc sane concedamus...
                          </p>
                        </div>

                        <a class="action-link">Read More</a>
                      </div>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="column is-4">
                    <div class="card h-card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img
                            src="/@images/photo/demo/apps/7.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media-flex-center no-margin">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/12.jpg"
                              alt=""
                              data-user-popover="2"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <img
                              class="badge"
                              src="/@images/icons/flags/united-states-of-america.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Joshua S.</span>
                            <span>Backend Developer</span>
                          </div>
                        </div>

                        <div class="inner-content p-t-20 p-b-20">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ego vero isti, inquam, permitto. Id Sextilius
                            factum negabat. Apparet statim, quae sint officia,
                            quae actiones. Sed hoc sane concedamus...
                          </p>
                        </div>

                        <a class="action-link">Read More</a>
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
