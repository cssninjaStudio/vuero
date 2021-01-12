<template>
  <WebappLayout>
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper is-webapp"
      data-page-title="Dashboard"
      data-naver-offset="150"
      data-menu-item="#dashboards-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Dashboard</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Lifestyle Dashboard V4-->
            <div
              class="lifestyle-dashboard lifestyle-dashboard-v4 has-webapp-spacing"
            >
              <div class="columns">
                <div class="column is-8">
                  <div class="columns is-multiline">
                    <!--Header-->
                    <div class="column is-12">
                      <div class="illustration-header-2">
                        <div class="header-image">
                          <img
                            src="/@images/illustrations/dashboards/lifestyle/reading.svg"
                            alt=""
                          />
                        </div>
                        <div class="header-meta">
                          <h3>Hello, Erik.</h3>
                          <p>
                            Have any ideas for a new article? If not, you should
                            definitely check the feed for some inspiration.
                          </p>
                          <button class="button h-button is-light is-outlined">
                            <span class="icon is-small">
                              <Icon icon="feather:plus" />
                            </span>
                            <span>New Article</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <!--Content-->
                    <div class="column is-7">
                      <div class="writing-stats">
                        <!--Stat-->
                        <div class="writing-stat">
                          <span>Articles</span>
                          <span class="dark-inverted">209</span>
                        </div>
                        <!--Stat-->
                        <div class="writing-stat">
                          <span>Readers</span>
                          <span class="dark-inverted">863</span>
                        </div>
                        <!--Stat-->
                        <div class="writing-stat">
                          <span>Comments</span>
                          <span class="dark-inverted">386</span>
                        </div>
                      </div>

                      <div class="featured-authors">
                        <!--Header-->
                        <div class="featured-authors-header">
                          <h3 class="dark-inverted">Featured Authors</h3>
                          <a class="action-link">View All</a>
                        </div>

                        <div class="featured-authors-list">
                          <!--Item-->
                          <div class="featured-authors-item">
                            <div class="media-flex-center">
                              <div class="h-avatar">
                                <img
                                  class="avatar is-squared"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/7.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="flex-meta">
                                <span>Alice C.</span>
                                <span>Software Engineer</span>
                              </div>
                              <div class="flex-end">
                                <span class="dark-inverted">112K</span>
                              </div>
                            </div>
                          </div>
                          <!--Item-->
                          <div class="featured-authors-item">
                            <div class="media-flex-center">
                              <div class="h-avatar">
                                <img
                                  class="avatar is-squared"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/21.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="flex-meta">
                                <span>Elizabeth F.</span>
                                <span>Web Developer</span>
                              </div>
                              <div class="flex-end">
                                <span class="dark-inverted">91K</span>
                              </div>
                            </div>
                          </div>
                          <!--Item-->
                          <div class="featured-authors-item">
                            <div class="media-flex-center">
                              <div class="h-avatar">
                                <img
                                  class="avatar is-squared"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/32.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="flex-meta">
                                <span>Jonathan K.</span>
                                <span>UI/UX Designer</span>
                              </div>
                              <div class="flex-end">
                                <span class="dark-inverted">72K</span>
                              </div>
                            </div>
                          </div>
                          <!--Item-->
                          <div class="featured-authors-item">
                            <div class="media-flex-center">
                              <div class="h-avatar">
                                <img
                                  class="avatar is-squared"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/38.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="flex-meta">
                                <span>Christie D.</span>
                                <span>Software Engineer</span>
                              </div>
                              <div class="flex-end">
                                <span class="dark-inverted">19K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Content-->
                    <div class="column is-5">
                      <!--Updates-->
                      <div class="updates">
                        <!--Header-->
                        <div class="updates-header">
                          <h3 class="dark-inverted">Updates</h3>
                          <a class="action-link">View All</a>
                        </div>

                        <div class="updates-list">
                          <!--Update-->
                          <div class="update-item is-dark-bordered-12">
                            <p>
                              Lorem ipsum sit dolor amet is a dummy text used by
                              typographers.
                            </p>
                            <span class="dark-inverted">Oct 23</span>
                          </div>
                          <!--Update-->
                          <div class="update-item is-dark-bordered-12">
                            <p>
                              Lorem ipsum sit dolor amet is a dummy text used by
                              typographers.
                            </p>
                            <span class="dark-inverted">Oct 23</span>
                          </div>
                          <!--Update-->
                          <div class="update-item is-dark-bordered-12">
                            <p>
                              Lorem ipsum sit dolor amet is a dummy text used by
                              typographers.
                            </p>
                            <span class="dark-inverted">Oct 23</span>
                          </div>
                          <!--Update-->
                          <div class="update-item is-dark-bordered-12">
                            <p>
                              Lorem ipsum sit dolor amet is a dummy text used by
                              typographers.
                            </p>
                            <span class="dark-inverted">Oct 23</span>
                          </div>
                          <!--Update-->
                          <div class="update-item is-dark-bordered-12">
                            <p>
                              Lorem ipsum sit dolor amet is a dummy text used by
                              typographers.
                            </p>
                            <span class="dark-inverted">Oct 23</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Feed-->
                <div class="column is-4">
                  <div class="articles-feed">
                    <!--Header-->
                    <div class="articles-feed-header">
                      <h3 class="dark-inverted">New Articles</h3>
                      <a class="action-link">View All</a>
                    </div>
                    <!--Subheader-->
                    <div class="articles-feed-subheader">
                      <div class="selector">
                        <button class="button is-selected">Recent</button>
                        <button class="button">Popular</button>
                      </div>
                    </div>
                    <!--List-->
                    <div class="articles-feed-list">
                      <div class="articles-feed-list-inner">
                        <!--Item-->
                        <a class="articles-feed-item">
                          <div class="featured-image">
                            <img
                              src="https://via.placeholder.com/800x600"
                              data-demo-src="/@images/photo/demo/38.jpg"
                              alt=""
                            />
                          </div>
                          <div class="featured-content">
                            <h4 class="dark-inverted">
                              Learning the modern novel
                            </h4>
                            <p>
                              Some article content and lorem ipsum sit dolor
                              amet
                            </p>

                            <div class="media-flex-center">
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar is-squared"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/7.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="flex-meta">
                                <span>Alice C.</span>
                                <span>Software Engineer</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <!--Item-->
                        <a class="articles-feed-item">
                          <div class="featured-image">
                            <img
                              src="https://via.placeholder.com/800x600"
                              data-demo-src="/@images/photo/demo/37.jpg"
                              alt=""
                            />
                          </div>
                          <div class="featured-content">
                            <h4 class="dark-inverted">
                              5 Writing tips for you
                            </h4>
                            <p>
                              Some article content and lorem ipsum sit dolor
                              amet
                            </p>

                            <div class="media-flex-center">
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar is-squared"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/5.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="flex-meta">
                                <span>Mary L.</span>
                                <span>Project Manager</span>
                              </div>
                            </div>
                          </div>
                        </a>
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
  </WebappLayout>
</template>
