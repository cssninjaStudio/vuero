<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-cards"
      class="view-wrapper is-webapp"
      data-page-title="Tile Grids"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Tile Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="tile-grid-toolbar is-webapp">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".column"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="buttons">
              <div class="field h-hidden-mobile">
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>All Files</span>
                    </div>
                    <div class="select-icon">
                      <Icon icon="feather:chevron-down" />
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Recently updated</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>My Files</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Team Files</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Deprecated</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="button h-button is-primary is-raised">
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>New Post</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <div class="tile-grid tile-grid-v3">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-6.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-6-dark.svg"
                    alt=""
                  />
                  <h3>We couldn't find any matching results.</h3>
                  <p class="is-larger">
                    Too bad. Looks like we couldn't find any matching results
                    for the search terms you've entered. Please try different
                    search terms or criteria.
                  </p>
                </div>
              </div>

              <!--Tile Grid v3-->
              <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <a href="#" class="tile is-child tile-grid-item is-medium">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/11.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            How to serve coffee at the office the proper way
                          </h3>
                          <p class="h-hidden-tablet-l h-hidden-desktop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/39.jpg"
                              alt=""
                              data-user-popover="33"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Alejandro B.</span
                            >
                            <span>30 minutes ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="tile is-parent">
                  <a href="#" class="tile is-child tile-grid-item is-medium">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/12.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            Teamwork can dramatically increase productivity
                          </h3>
                          <p class="h-hidden-tablet-l h-hidden-desktop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/15.jpg"
                              alt=""
                              data-user-popover="15"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Hilde V.</span
                            >
                            <span>4 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="tile is-parent">
                  <a href="#" class="tile is-child tile-grid-item is-medium">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/13.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            Is team building a scam or the next thing?
                          </h3>
                          <p class="h-hidden-tablet-l h-hidden-desktop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/24.jpg"
                              alt=""
                              data-user-popover="22"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Sandrine C.</span
                            >
                            <span>5 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                  <div class="tile">
                    <div class="tile is-parent is-vertical">
                      <a
                        href="#"
                        class="tile is-child tile-grid-item is-medium"
                      >
                        <div class="tile-grid-item-inner">
                          <img
                            src="https://via.placeholder.com/400x300"
                            data-demo-src="/@images/photo/demo/14.jpg"
                            alt=""
                          />
                          <div class="meta">
                            <div class="tile-title">
                              <h3 class="dark-inverted" data-filter-match>
                                3 things you should know when applying for
                                developer jobs
                              </h3>
                              <p class="h-hidden-tablet-l h-hidden-desktop">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Optime, inquam. Duo Reges
                                constructio.
                              </p>
                            </div>
                            <div class="tile-meta">
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/27.jpg"
                                  alt=""
                                  data-user-popover="10"
                                />
                              </div>
                              <div class="meta-inner">
                                <span class="dark-inverted" data-filter-match
                                  >Carmen E.</span
                                >
                                <span>8 hours ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        class="tile is-child tile-grid-item is-medium"
                      >
                        <div class="tile-grid-item-inner">
                          <img
                            src="https://via.placeholder.com/400x300"
                            data-demo-src="/@images/photo/demo/15.jpg"
                            alt=""
                          />
                          <div class="meta">
                            <div class="tile-title">
                              <h3 class="dark-inverted" data-filter-match>
                                The construction business massively invests in
                                mobile apps
                              </h3>
                              <p class="h-hidden-tablet-l h-hidden-desktop">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Optime, inquam. Duo Reges
                                constructio.
                              </p>
                            </div>
                            <div class="tile-meta">
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/10.jpg"
                                  alt=""
                                  data-user-popover="8"
                                />
                              </div>
                              <div class="meta-inner">
                                <span class="dark-inverted" data-filter-match
                                  >Henry G.</span
                                >
                                <span>1 day ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="tile is-parent">
                      <a href="#" class="tile is-child tile-grid-item is-large">
                        <div class="tile-grid-item-inner">
                          <img
                            src="https://via.placeholder.com/400x300"
                            data-demo-src="/@images/photo/demo/16.jpg"
                            alt=""
                          />
                          <div class="meta">
                            <div class="tile-title">
                              <h3 class="dark-inverted" data-filter-match>
                                Finding the right spot for your startup
                              </h3>
                              <p class="h-hidden-tablet-l h-hidden-desktop">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Optime, inquam. Duo Reges
                                constructio.
                              </p>
                            </div>
                            <div class="tile-meta">
                              <div class="h-avatar is-small">
                                <img
                                  class="avatar"
                                  src="https://via.placeholder.com/150x150"
                                  data-demo-src="/@images/avatars/photos/22.jpg"
                                  alt=""
                                  data-user-popover="5"
                                />
                              </div>
                              <div class="meta-inner">
                                <span class="dark-inverted" data-filter-match
                                  >Jimmy H.</span
                                >
                                <span>1 day ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <a href="#" class="tile is-child tile-grid-item is-wide">
                      <div class="tile-grid-item-inner">
                        <img
                          src="https://via.placeholder.com/400x300"
                          data-demo-src="/@images/photo/demo/18.jpg"
                          alt=""
                        />
                        <div class="meta">
                          <div class="tile-title">
                            <h3 class="dark-inverted" data-filter-match>
                              4 tips to make your business lunches awesome
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Optime, inquam. Duo Reges constructio.
                            </p>
                            <p class="h-hidden-mobile h-hidden-tablet-p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Optime, inquam. Duo Reges constructio.
                            </p>
                          </div>
                          <div class="tile-meta">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="/@images/avatars/photos/16.jpg"
                                alt=""
                                data-user-popover="16"
                              />
                            </div>
                            <div class="meta-inner">
                              <span class="dark-inverted" data-filter-match
                                >Jason G.</span
                              >
                              <span>2 days ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="tile is-parent">
                  <a href="#" class="tile is-child tile-grid-item is-tall">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/19.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            Setting up a design system for your app project
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                          <p class="h-hidden-mobile h-hidden-tablet-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/26.jpg"
                              alt=""
                              data-user-popover="23"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Courtney W.</span
                            >
                            <span>2 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <a href="#" class="tile is-child tile-grid-item is-wide">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/20.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            Foundation of a great E-Learning system
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/8.jpg"
                              alt=""
                              data-user-popover="3"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Erik K.</span
                            >
                            <span>2 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="tile is-parent is-6">
                  <a href="#" class="tile is-child tile-grid-item is-wide">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/23.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            Why it pays to profile your customers
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/40.jpg"
                              alt=""
                              data-user-popover="11"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Jeanne M.</span
                            >
                            <span>3 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <a href="#" class="tile is-child tile-grid-item is-medium">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/22.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            Using flashy colors in your websites and apps
                          </h3>
                          <p class="h-hidden-tablet-l h-hidden-desktop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/9.jpg"
                              alt=""
                              data-user-popover="1"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Ana B.</span
                            >
                            <span>3 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="tile is-parent">
                  <a href="#" class="tile is-child tile-grid-item is-medium">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/24.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            Building a consistent and talented team
                          </h3>
                          <p class="h-hidden-tablet-l h-hidden-desktop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/19.jpg"
                              alt=""
                              data-user-popover="17"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Greta K.</span
                            >
                            <span>3 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="tile is-parent">
                  <a href="#" class="tile is-child tile-grid-item is-medium">
                    <div class="tile-grid-item-inner">
                      <img
                        src="https://via.placeholder.com/400x300"
                        data-demo-src="/@images/photo/demo/27.jpg"
                        alt=""
                      />
                      <div class="meta">
                        <div class="tile-title">
                          <h3 class="dark-inverted" data-filter-match>
                            Diving into building an e-commerce brand - part 1
                          </h3>
                          <p class="h-hidden-tablet-l h-hidden-desktop">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Optime, inquam. Duo Reges constructio.
                          </p>
                        </div>
                        <div class="tile-meta">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/33.jpg"
                              alt=""
                              data-user-popover="29"
                            />
                          </div>
                          <div class="meta-inner">
                            <span class="dark-inverted" data-filter-match
                              >Harvey M.</span
                            >
                            <span>4 days ago</span>
                          </div>
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
  </WebappLayout>
</template>
