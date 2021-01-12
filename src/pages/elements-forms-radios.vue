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
              <h1 class="title is-4">Radios</h1>
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
                    <span>Forms</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Radios</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Outlined Radio-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Outlined Radio</h3>
                    <p>
                      Huro provides default styled radio buttons in 2 main
                      styles, <code>outlined</code> and <code>solid</code>.
                      Those checkboxes also support all main colors. The
                      available modifiers are <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>
                      <code>is-warning</code>, <code>is-danger</code>.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <label class="radio">
                          <input type="radio" name="outlined_radio" />
                          <span></span>
                          Choice 1
                        </label>

                        <label class="radio is-outlined is-primary">
                          <input type="radio" name="outlined_radio" />
                          <span></span>
                          Choice 2
                        </label>

                        <label class="radio is-outlined is-info">
                          <input type="radio" name="outlined_radio" />
                          <span></span>
                          Choice 3
                        </label>

                        <label class="radio is-outlined is-success">
                          <input type="radio" name="outlined_radio" />
                          <span></span>
                          Choice 4
                        </label>

                        <label class="radio is-outlined is-warning">
                          <input type="radio" name="outlined_radio" />
                          <span></span>
                          Choice 5
                        </label>

                        <label class="radio is-outlined is-danger">
                          <input type="radio" name="outlined_radio" />
                          <span></span>
                          Choice 6
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;radio&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 1
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-outlined is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 2
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-outlined is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 3
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-outlined is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 4
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-outlined is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 5
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-outlined is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 6
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Outlined Radio-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Outlined Square</h3>
                    <p>
                      Huro radio buttons can be squares instead of circles.
                      Simply add the <code>is-square</code> modifier class to
                      your <code>radio</code> element. See the code example for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <label class="radio is-square">
                          <input type="radio" name="outlined_square_radio" />
                          <span></span>
                          Choice 1
                        </label>

                        <label class="radio is-square is-outlined is-primary">
                          <input type="radio" name="outlined_square_radio" />
                          <span></span>
                          Choice 2
                        </label>

                        <label class="radio is-square is-outlined is-info">
                          <input type="radio" name="outlined_square_radio" />
                          <span></span>
                          Choice 3
                        </label>

                        <label class="radio is-square is-outlined is-success">
                          <input type="radio" name="outlined_square_radio" />
                          <span></span>
                          Choice 4
                        </label>

                        <label class="radio is-square is-outlined is-warning">
                          <input type="radio" name="outlined_square_radio" />
                          <span></span>
                          Choice 5
                        </label>

                        <label class="radio is-square is-outlined is-danger">
                          <input type="radio" name="outlined_square_radio" />
                          <span></span>
                          Choice 6
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;radio is-square&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 1
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-square is-outlined is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 2
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-square is-outlined is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 3
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-square is-outlined is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 4
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-square is-outlined is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 5
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-square is-outlined is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;outlined_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 6
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Radio-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Solid Radio</h3>
                    <p></p>
                    <p>
                      Huro provides default styled radio buttons in 2 main
                      styles, <code>outlined</code> and <code>solid</code>.
                      Those checkboxes also support all main colors. The
                      available modifiers are <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>
                      <code>is-warning</code>, <code>is-danger</code>.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <label class="radio is-solid">
                          <input type="radio" name="solid_radio" />
                          <span></span>
                          Choice 1
                        </label>

                        <label class="radio is-solid is-primary">
                          <input type="radio" name="solid_radio" />
                          <span></span>
                          Choice 2
                        </label>

                        <label class="radio is-solid is-info">
                          <input type="radio" name="solid_radio" />
                          <span></span>
                          Choice 3
                        </label>

                        <label class="radio is-solid is-success">
                          <input type="radio" name="solid_radio" />
                          <span></span>
                          Choice 4
                        </label>

                        <label class="radio is-solid is-warning">
                          <input type="radio" name="solid_radio" />
                          <span></span>
                          Choice 5
                        </label>

                        <label class="radio is-solid is-danger">
                          <input type="radio" name="solid_radio" />
                          <span></span>
                          Choice 6
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;radio is-solid&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 1
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 2
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 3
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 4
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 5
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 6
        &#x3C;/label&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Radio-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Solid Square</h3>
                    <p>
                      Huro radio buttons can be squares instead of circles.
                      Simply add the <code>is-square</code> modifier class to
                      your <code>radio</code> element. See the code example for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <label class="radio is-solid is-square">
                          <input type="radio" name="solid_square_radio" />
                          <span></span>
                          Choice 1
                        </label>

                        <label class="radio is-solid is-square is-primary">
                          <input type="radio" name="solid_square_radio" />
                          <span></span>
                          Choice 2
                        </label>

                        <label class="radio is-solid is-square is-info">
                          <input type="radio" name="solid_square_radio" />
                          <span></span>
                          Choice 3
                        </label>

                        <label class="radio is-solid is-square is-success">
                          <input type="radio" name="solid_square_radio" />
                          <span></span>
                          Choice 4
                        </label>

                        <label class="radio is-solid is-square is-warning">
                          <input type="radio" name="solid_square_radio" />
                          <span></span>
                          Choice 5
                        </label>

                        <label class="radio is-solid is-square is-danger">
                          <input type="radio" name="solid_square_radio" />
                          <span></span>
                          Choice 6
                        </label>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;label class=&#x22;radio is-solid is-square&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 1
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-square is-primary&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 2
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-square is-info&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 3
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-square is-success&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 4
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-square is-warning&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 5
        &#x3C;/label&#x3E;

        &#x3C;label class=&#x22;radio is-solid is-square is-danger&#x22;&#x3E;
            &#x3C;input type=&#x22;radio&#x22; name=&#x22;solid_square_radio&#x22;&#x3E;
            &#x3C;span&#x3E;&#x3C;/span&#x3E;
            Choice 6
        &#x3C;/label&#x3E;
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
