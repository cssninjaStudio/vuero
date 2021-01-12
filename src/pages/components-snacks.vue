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
              <h1 class="title is-4">Snacks</h1>
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
                    <span>Snacks</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Snacks-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Snacks</h3>
                    <p>
                      Huro provides a special component called snacks. You can
                      use it to display serial data or tag like structured data.
                      Default Snacks have a greyish background color. You can
                      attach any icon in the closing section. The following
                      example shows how to use snacks with images. Check the
                      markup for more details.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/photo/demo/misc/buoy.jpg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/logos/metamovies.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Metamovies</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/avatars/photos/7.jpg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Corporate</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/flags/united-states-of-america.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">English</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/logos/slicer.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Slicer</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Metamovies&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Corporate&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;English&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Slicer&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Whiite Snacks-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">White Snacks</h3>
                    <p>
                      Huro provides a special component called snacks. You can
                      use it to display serial data or tag like structured data.
                      Whereas default Snacks have a greyish background color,
                      you can make them white by using the
                      <code>is-white</code> class. You can attach any icon in
                      the closing section. The following example shows how to
                      use snacks with images. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack is-white">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/photo/demo/misc/buoy.jpg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/logos/metamovies.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Metamovies</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/avatars/photos/25.jpg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Corporate</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/flags/united-states-of-america.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">English</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/logos/slicer.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Slicer</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Metamovies&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Corporate&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;English&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Slicer&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Feather Icons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icon</h3>
                    <p>
                      Instead of using images, snacks can also display icons,
                      with different styles, the default style is outlined. The
                      following example shows how to use snacks with Feather
                      Icons. Available icon color modifiers are
                      <code>is-primary</code>, <code>is-success</code>,
                      <code>is-info</code> <code>is-warning</code>,
                      <code>is-danger</code>. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack is-white">
                        <div class="snack-media is-icon">
                          <i
                            class="snack-icon"
                            data-feather="shopping-cart"
                          ></i>
                        </div>
                        <span class="snack-text">Shopping</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-primary">
                          <i class="snack-icon" data-feather="smile"></i>
                        </div>
                        <span class="snack-text">Emotions</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-success">
                          <i class="snack-icon" data-feather="life-buoy"></i>
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-info">
                          <i class="snack-icon" data-feather="briefcase"></i>
                        </div>
                        <span class="snack-text">Business</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-warning">
                          <i
                            class="snack-icon"
                            data-feather="alert-octagon"
                          ></i>
                        </div>
                        <span class="snack-text">Warning</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-danger">
                          <i class="snack-icon" data-feather="thermometer"></i>
                        </div>
                        <span class="snack-text">Heath</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;shopping-cart&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Shopping&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-primary&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;smile&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Emotions&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-success&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;life-buoy&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-info&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;briefcase&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Business&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-warning&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;alert-octagon&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Warning&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-danger&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;thermometer&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Heath&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Feather Icon Solid-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icon Solid</h3>
                    <p>
                      Instead of using images, snacks can also display icons,
                      with different styles. To use a solid style, add the
                      <code>is-solid</code> class to the
                      <code>snack-icon</code> element. The following example
                      shows how to use snacks with Feather Icons. Available icon
                      color modifiers are <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>
                      <code>is-warning</code>, <code>is-danger</code>. Check the
                      markup for more details.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack">
                        <div class="snack-media is-icon is-primary is-solid">
                          <i class="snack-icon" data-feather="smile"></i>
                        </div>
                        <span class="snack-text">Emotions</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-success is-solid">
                          <i class="snack-icon" data-feather="life-buoy"></i>
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-info is-solid">
                          <i class="snack-icon" data-feather="briefcase"></i>
                        </div>
                        <span class="snack-text">Business</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-warning is-solid">
                          <i
                            class="snack-icon"
                            data-feather="alert-octagon"
                          ></i>
                        </div>
                        <span class="snack-text">Warning</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-danger is-solid">
                          <i class="snack-icon" data-feather="thermometer"></i>
                        </div>
                        <span class="snack-text">Heath</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-primary is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;smile&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Emotions&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-success is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;life-buoy&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-info is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;briefcase&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Business&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-warning is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;alert-octagon&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Warning&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-danger is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;thermometer&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Heath&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Font Awesome-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Font Awesome</h3>
                    <p>
                      Instead of using images, snacks can also display icons,
                      with different styles, the default style is outlined. The
                      following example shows how to use snacks with Font
                      Awesome. Available icon color modifiers are
                      <code>is-primary</code>, <code>is-success</code>,
                      <code>is-info</code> <code>is-warning</code>,
                      <code>is-danger</code>. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack is-white">
                        <div class="snack-media is-icon">
                          <i class="snack-icon fas fa-shopping-cart"></i>
                        </div>
                        <span class="snack-text">Shopping</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-primary">
                          <i class="snack-icon fas fa-smile"></i>
                        </div>
                        <span class="snack-text">Emotions</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-success">
                          <i class="snack-icon fas fa-life-ring"></i>
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-info">
                          <i class="snack-icon fas fa-building"></i>
                        </div>
                        <span class="snack-text">Business</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-warning">
                          <i class="snack-icon fas fa-radiation"></i>
                        </div>
                        <span class="snack-text">Warning</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-danger">
                          <i class="snack-icon fas fa-thermometer-half"></i>
                        </div>
                        <span class="snack-text">Heath</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-shopping-cart&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Shopping&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-primary&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-smile&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Emotions&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-success&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-life-ring&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-info&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-building&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Business&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-warning&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-radiation&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Warning&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-danger&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-thermometer-half&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Heath&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Font Awesome Solid-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Font Awesome Solid</h3>
                    <p>
                      Instead of using images, snacks can also display icons,
                      with different styles. To use a solid style, add the
                      <code>is-solid</code> class to the
                      <code>snack-icon</code> element. The following example
                      shows how to use snacks with Font Awesome. Available icon
                      color modifiers are <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>
                      <code>is-warning</code>, <code>is-danger</code>. Check the
                      markup for more details.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack">
                        <div class="snack-media is-icon is-primary is-solid">
                          <i class="snack-icon fas fa-smile"></i>
                        </div>
                        <span class="snack-text">Emotions</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-success is-solid">
                          <i class="snack-icon fas fa-life-ring"></i>
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-info is-solid">
                          <i class="snack-icon fas fa-building"></i>
                        </div>
                        <span class="snack-text">Business</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-warning is-solid">
                          <i class="snack-icon fas fa-radiation"></i>
                        </div>
                        <span class="snack-text">Warning</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-danger is-solid">
                          <i class="snack-icon fas fa-thermometer-half"></i>
                        </div>
                        <span class="snack-text">Heath</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-primary is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-smile&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Emotions&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-success is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-life-ring&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-info is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-building&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Business&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-warning is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-radiation&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Warning&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-danger is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon fas fa-thermometer-half&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Heath&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Line Icons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Line Icons</h3>
                    <p>
                      Instead of using images, snacks can also display icons,
                      with different styles, the default style is outlined. The
                      following example shows how to use snacks with Line Icons.
                      Available icon color modifiers are
                      <code>is-primary</code>, <code>is-success</code>,
                      <code>is-info</code> <code>is-warning</code>,
                      <code>is-danger</code>. Check the markup for more details.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack is-white">
                        <div class="snack-media is-icon">
                          <i class="snack-icon lnil lnil-cart"></i>
                        </div>
                        <span class="snack-text">Shopping</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-primary">
                          <i class="snack-icon lnil lnil-sleep"></i>
                        </div>
                        <span class="snack-text">Emotions</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-success">
                          <i class="snack-icon lnil lnil-life-ring"></i>
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-info">
                          <i class="snack-icon lnil lnil-apartment"></i>
                        </div>
                        <span class="snack-text">Business</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-warning">
                          <i class="snack-icon lnil lnil-warning"></i>
                        </div>
                        <span class="snack-text">Warning</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-danger">
                          <i class="snack-icon lnil lnil-thermometer"></i>
                        </div>
                        <span class="snack-text">Heath</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-cart&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Shopping&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-primary&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-sleep&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Emotions&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-success&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-life-ring&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-info&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-apartment&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Business&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-warning&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-warning&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Warning&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-danger&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-thermometer&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Heath&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Line Icons Solid-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Line Icons Solid</h3>
                    <p>
                      Instead of using images, snacks can also display icons,
                      with different styles. To use a solid style, add the
                      <code>is-solid</code> class to the
                      <code>snack-icon</code> element. The following example
                      shows how to use snacks with Line Icons. Available icon
                      color modifiers are <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>
                      <code>is-warning</code>, <code>is-danger</code>. Check the
                      markup for more details.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack">
                        <div class="snack-media is-icon is-primary is-solid">
                          <i class="snack-icon lnil lnil-sleep"></i>
                        </div>
                        <span class="snack-text">Emotions</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-success is-solid">
                          <i class="snack-icon lnil lnil-life-ring"></i>
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack">
                        <div class="snack-media is-icon is-info is-solid">
                          <i class="snack-icon lnil lnil-apartment"></i>
                        </div>
                        <span class="snack-text">Business</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-warning is-solid">
                          <i class="snack-icon lnil lnil-warning"></i>
                        </div>
                        <span class="snack-text">Warning</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white">
                        <div class="snack-media is-icon is-danger is-solid">
                          <i class="snack-icon lnil lnil-thermometer"></i>
                        </div>
                        <span class="snack-text">Heath</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-primary is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-sleep&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Emotions&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-success is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-life-ring&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-info is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-apartment&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Business&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-warning is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-warning&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Warning&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-danger is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon lnil lnil-thermometer&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Heath&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Small Snacks-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Small Snacks</h3>
                    <p>
                      Image snacks can have a smaller size, which can help with
                      smaller UI elements layouts. To display a smaller snack,
                      add the <code>is-small</code> class to the target
                      <code>snack</code> element.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack is-white is-small">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/photo/demo/misc/buoy.jpg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-small">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/logos/metamovies.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Metamovies</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white is-small">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/avatars/photos/18.jpg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Corporate</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-small">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/flags/united-states-of-america.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">English</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white is-small">
                        <div class="snack-media">
                          <img
                            class="avatar"
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="/@images/icons/logos/slicer.svg"
                            alt=""
                          />
                        </div>
                        <span class="snack-text">Slicer</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack is-white is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Metamovies&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Corporate&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;English&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media&#x22;&#x3E;
            &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Slicer&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Small Icons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Small Icons</h3>
                    <p>
                      Image snacks can have a smaller size, which can help with
                      smaller UI elements layouts. To display a smaller snack,
                      add the <code>is-small</code> class to the target
                      <code>snack</code> element.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="snacks">
                      <div class="snack is-small">
                        <div class="snack-media is-icon is-primary">
                          <i class="snack-icon" data-feather="smile"></i>
                        </div>
                        <span class="snack-text">Emotions</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white is-small">
                        <div class="snack-media is-icon is-success is-solid">
                          <i class="snack-icon" data-feather="life-buoy"></i>
                        </div>
                        <span class="snack-text">Support</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-small">
                        <div class="snack-media is-icon is-info">
                          <i class="snack-icon" data-feather="briefcase"></i>
                        </div>
                        <span class="snack-text">Business</span>
                        <span class="snack-action">
                          <Icon icon="feather:x" />
                        </span>
                      </div>

                      <div class="snack is-white is-small">
                        <div class="snack-media is-icon is-warning is-solid">
                          <i
                            class="snack-icon"
                            data-feather="alert-octagon"
                          ></i>
                        </div>
                        <span class="snack-text">Warning</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>

                      <div class="snack is-white is-small">
                        <div class="snack-media is-icon is-danger">
                          <i class="snack-icon" data-feather="thermometer"></i>
                        </div>
                        <span class="snack-text">Heath</span>
                        <span class="snack-action">
                          <Icon icon="feather:plus" />
                        </span>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;snacks&#x22;&#x3E;
    &#x3C;div class=&#x22;snack is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-primary&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;smile&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Emotions&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-success is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;life-buoy&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Support&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-info&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;briefcase&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Business&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-warning is-solid&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;alert-octagon&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Warning&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;snack is-white is-small&#x22;&#x3E;
        &#x3C;div class=&#x22;snack-media is-icon is-danger&#x22;&#x3E;
            &#x3C;i class=&#x22;snack-icon&#x22; data-feather=&#x22;thermometer&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;span class=&#x22;snack-text&#x22;&#x3E;Heath&#x3C;/span&#x3E;
        &#x3C;span class=&#x22;snack-action&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
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
