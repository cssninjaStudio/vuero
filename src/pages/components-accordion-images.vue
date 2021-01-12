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
              <h1 class="title is-4">Image Accordion</h1>
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
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Accordions</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Images</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Image Accordion-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Image Accordion</h3>
                    <p>
                      A nice experimental and playful CSS only image accordion.
                      Can be used for many purposes. Background images are added
                      with js, so you don't have to change any CSS. Images
                      simply stack on mobile. Check markup for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner no-padding">
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;image-accordion&#x22;&#x3E;
    &#x3C;ul&#x3E;
        &#x3C;li class=&#x22;has-background-image&#x22; tabindex=&#x22;1&#x22; data-background=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
            &#x3C;div&#x3E;
                &#x3C;a&#x3E;
                    &#x3C;h2&#x3E;Office Part I&#x3C;/h2&#x3E;
                    &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit&#x3C;/p&#x3E;
                &#x3C;/a&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;has-background-image&#x22; tabindex=&#x22;2&#x22; data-background=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
            &#x3C;div&#x3E;
                &#x3C;a&#x3E;
                    &#x3C;h2&#x3E;Office Part II&#x3C;/h2&#x3E;
                    &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit&#x3C;/p&#x3E;
                &#x3C;/a&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;has-background-image&#x22; tabindex=&#x22;3&#x22; data-background=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
            &#x3C;div&#x3E;
                &#x3C;a&#x3E;
                    &#x3C;h2&#x3E;12 Great Landscapes&#x3C;/h2&#x3E;
                    &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit&#x3C;/p&#x3E;
                &#x3C;/a&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;has-background-image&#x22; tabindex=&#x22;4&#x22; data-background=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
            &#x3C;div&#x3E;
                &#x3C;a&#x3E;
                    &#x3C;h2&#x3E;Team Meetup&#x3C;/h2&#x3E;
                    &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit&#x3C;/p&#x3E;
                &#x3C;/a&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;has-background-image&#x22; tabindex=&#x22;5&#x22; data-background=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
            &#x3C;div&#x3E;
                &#x3C;a&#x3E;
                    &#x3C;h2&#x3E;Purple Shades&#x3C;/h2&#x3E;
                    &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit&#x3C;/p&#x3E;
                &#x3C;/a&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/li&#x3E;
        &#x3C;li class=&#x22;has-background-image&#x22; tabindex=&#x22;6&#x22; data-background=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
            &#x3C;div&#x3E;
                &#x3C;a&#x3E;
                    &#x3C;h2&#x3E;Blue Note&#x3C;/h2&#x3E;
                    &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit&#x3C;/p&#x3E;
                &#x3C;/a&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/li&#x3E;
    &#x3C;/ul&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <div class="image-accordion">
                  <ul>
                    <li
                      class="has-background-image"
                      tabindex="1"
                      data-background="https://via.placeholder.com/800x600"
                      data-demo-background="https://source.unsplash.com/FV3GConVSss/1600x900"
                    >
                      <div>
                        <a>
                          <h2>Office Part I</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </a>
                      </div>
                    </li>
                    <li
                      class="has-background-image"
                      tabindex="2"
                      data-background="https://via.placeholder.com/800x600"
                      data-demo-background="https://source.unsplash.com/rRiAzFkJPMo/1600x900"
                    >
                      <div>
                        <a>
                          <h2>Office Part II</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </a>
                      </div>
                    </li>
                    <li
                      class="has-background-image"
                      tabindex="3"
                      data-background="https://via.placeholder.com/800x600"
                      data-demo-background="https://source.unsplash.com/tvleqH3p1os/1600x900"
                    >
                      <div>
                        <a>
                          <h2>12 Great Landscapes</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </a>
                      </div>
                    </li>
                    <li
                      class="has-background-image"
                      tabindex="4"
                      data-background="https://via.placeholder.com/800x600"
                      data-demo-background="https://source.unsplash.com/-Xv7k95vOFA/1600x900"
                    >
                      <div>
                        <a>
                          <h2>Team Meetup</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </a>
                      </div>
                    </li>
                    <li
                      class="has-background-image"
                      tabindex="5"
                      data-background="https://via.placeholder.com/800x600"
                      data-demo-background="https://source.unsplash.com/F6NvgzU3RfM/1600x900"
                    >
                      <div>
                        <a>
                          <h2>Purple Shades</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </a>
                      </div>
                    </li>
                    <li
                      class="has-background-image"
                      tabindex="6"
                      data-background="https://via.placeholder.com/800x600"
                      data-demo-background="https://source.unsplash.com/5E5N49RWtbA/1600x900"
                    >
                      <div>
                        <a>
                          <h2>Blue Note</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
