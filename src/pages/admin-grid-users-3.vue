<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-users"
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
        >
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="layouts-sidebar"
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
              <h1 class="title is-4">User Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="user-grid-toolbar is-reversed">
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

            <div class="tabs-inner">
              <div class="tabs">
                <ul>
                  <li data-tab="active-items-tab" class="is-active">
                    <a><span>All</span></a>
                  </li>
                  <li data-tab="inactive-items-tab">
                    <a><span>Team</span></a>
                  </li>
                  <li class="tab-naver"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-content-inner">
            <div class="user-grid user-grid-v3">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-5.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-5-dark.svg"
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

              <!--Active Tab-->
              <div id="active-items-tab" class="tab-content is-active">
                <div class="columns is-multiline">
                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/13.jpg"
                          alt=""
                          data-user-popover="6"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/illustrator.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Tara Svenson
                      </h3>
                      <p data-filter-match>UI/UX Designer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">72</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">75/100</span>
                            <div class="stats">
                              <span class="dark-inverted">12</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >6,2,8,14,12,4,3,6</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">17</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/37.jpg"
                          alt=""
                          data-user-popover="31"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/france.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Helmut Fritz
                      </h3>
                      <p data-filter-match>Product Manager</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">16</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">45/100</span>
                            <div class="stats">
                              <span class="dark-inverted">8</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >12,5,8,10,4,8,17,6</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">9</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/25.jpg"
                          alt=""
                          data-user-popover="4"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/js.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Melany Wallace
                      </h3>
                      <p data-filter-match>Web Developer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">22</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">65/100</span>
                            <div class="stats">
                              <span class="dark-inverted">11</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >2,5,8,16,15,8,17,4</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">15</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/29.jpg"
                          alt=""
                          data-user-popover="25"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/python.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Hakeem Calami
                      </h3>
                      <p data-filter-match>Software Engineer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">4</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">30/100</span>
                            <div class="stats">
                              <span class="dark-inverted">5</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >14,5,8,12,15,8,11,6</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">6</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/39.jpg"
                          alt=""
                          data-user-popover="33"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/python.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Alejandro Badajoz
                      </h3>
                      <p data-filter-match>Business Analyst</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">7</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">50/100</span>
                            <div class="stats">
                              <span class="dark-inverted">9</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >2,5,14,12,22,8,17,6</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">17</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/40.jpg"
                          alt=""
                          data-user-popover="11"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/android.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Jeanne Marchand
                      </h3>
                      <p data-filter-match>Mobile Developer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">23</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">80/100</span>
                            <div class="stats">
                              <span class="dark-inverted">17</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >2,15,14,12,18,8,17,6</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">21</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
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
                      <h3 class="dark-inverted" data-filter-match>
                        Greta Kroppfer
                      </h3>
                      <p data-filter-match>Sales Manager</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">5</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">20/100</span>
                            <div class="stats">
                              <span class="dark-inverted">4</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >2,6,14,12,11,8,17,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">8</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/9.jpg"
                          alt=""
                          data-user-popover="1"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/photoshop.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Anna Baker
                      </h3>
                      <p data-filter-match>UI/UX Designer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">12</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">70/100</span>
                            <div class="stats">
                              <span class="dark-inverted">28</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >2,16,14,29,11,28,17,5</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">11</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/5.jpg"
                          alt=""
                          data-user-popover="9"
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
                      <h3 class="dark-inverted" data-filter-match>
                        Mary Lebowski
                      </h3>
                      <p data-filter-match>Project Manager</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">18</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">70/100</span>
                            <div class="stats">
                              <span class="dark-inverted">28</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >2,16,11,2,11,4,6,5</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">27</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/32.jpg"
                          alt=""
                          data-user-popover="28"
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
                      <h3 class="dark-inverted" data-filter-match>
                        Jonathan Krugger
                      </h3>
                      <p data-filter-match>Product Manager</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">44</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">90/100</span>
                            <div class="stats">
                              <span class="dark-inverted">54</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >12,16,32,6,28,4,26,35</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">62</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/36.jpg"
                          alt=""
                          data-user-popover="30"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/reactjs.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Benoit Leblanc
                      </h3>
                      <p data-filter-match>Software Engineer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">31</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">80/100</span>
                            <div class="stats">
                              <span class="dark-inverted">19</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >12,16,14,6,28,4,3,22</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">21</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/38.jpg"
                          alt=""
                          data-user-popover="32"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/vuejs.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Christie Dallas
                      </h3>
                      <p data-filter-match>Web Developer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">17</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">60/100</span>
                            <div class="stats">
                              <span class="dark-inverted">10</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >18,16,9,6,32,4,9,22</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">35</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/26.jpg"
                          alt=""
                          data-user-popover="23"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/html5.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Courtney Wilson
                      </h3>
                      <p data-filter-match>Web Developer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">34</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">20/100</span>
                            <div class="stats">
                              <span class="dark-inverted">2</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >11,16,11,6,22,5,9,18</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">12</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/16.jpg"
                          alt=""
                          data-user-popover="16"
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
                      <h3 class="dark-inverted" data-filter-match>
                        Jason Guarank
                      </h3>
                      <p data-filter-match>Business Analyst</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">0</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">45/100</span>
                            <div class="stats">
                              <span class="dark-inverted">12</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >12,25,11,16,26,5,7,18</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">12</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
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
                      <h3 class="dark-inverted" data-filter-match>
                        Irina Vierbovsky
                      </h3>
                      <p data-filter-match>Project Manager</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">6</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">10/100</span>
                            <div class="stats">
                              <span class="dark-inverted">1</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >12,2,11,5,26,5,7,14</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">6</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/28.jpg"
                          alt=""
                          data-user-popover="24"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/angular.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Edouard Falant
                      </h3>
                      <p data-filter-match>Web Developer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">8</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">60/100</span>
                            <div class="stats">
                              <span class="dark-inverted">16</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >13,2,17,5,26,5,28,14</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">19</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/7.jpg"
                          alt=""
                          data-user-popover="0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/stacks/csharp.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <h3 class="dark-inverted" data-filter-match>
                        Alice Carasca
                      </h3>
                      <p data-filter-match>Software Engineer</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">8</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">80/100</span>
                            <div class="stats">
                              <span class="dark-inverted">22</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >16,5,32,5,22,5,36,11</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">39</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--Grid item-->
                  <div class="column is-3">
                    <div class="grid-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/22.jpg"
                          alt=""
                          data-user-popover="20"
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
                      <h3 class="dark-inverted" data-filter-match>
                        Dwayne Hicks
                      </h3>
                      <p data-filter-match>Product Manager</p>
                      <div class="icon-tabs-wrapper">
                        <div class="icon-tabs">
                          <div class="icon-tabs-inner">
                            <a
                              data-target-section="subsection-1"
                              class="tab-item is-active"
                            >
                              <Icon icon="feather:activity" />
                            </a>
                            <a
                              data-target-section="subsection-2"
                              class="tab-item"
                            >
                              <Icon icon="feather:briefcase" />
                            </a>
                            <a
                              data-target-section="subsection-3"
                              class="tab-item"
                            >
                              <Icon icon="feather:check-circle" />
                            </a>
                            <div class="icon-tabs-naver"></div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-1 is-active">
                          <div class="chart-block">
                            <span class="updating-chart"
                              >5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">13</span>
                              <span>Posts</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-2">
                          <div class="chart-block">
                            <span class="mini-donut-chart">60/100</span>
                            <div class="stats">
                              <span class="dark-inverted">15</span>
                              <span>Projects</span>
                            </div>
                          </div>
                        </div>

                        <div class="icon-tabs-content subsection-3">
                          <div class="chart-block">
                            <span class="mini-bar-chart"
                              >16,5,12,5,17,5,29,7</span
                            >
                            <div class="stats">
                              <span class="dark-inverted">14</span>
                              <span>Tasks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:check" />
                          </span>
                          <span>Hire</span>
                        </button>
                        <button class="button h-button is-dark-outlined">
                          <span class="icon">
                            <Icon icon="feather:message-circle" />
                          </span>
                          <span>Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--inactive Tab-->
              <div id="inactive-items-tab" class="tab-content">
                <!--Empty placeholder-->
                <div class="page-placeholder">
                  <div class="placeholder-content">
                    <img
                      class="light-image is-larger"
                      src="/@images/illustrations/placeholders/team.svg"
                      alt=""
                    />
                    <img
                      class="dark-image is-larger"
                      src="/@images/illustrations/placeholders/team-dark.svg"
                      alt=""
                    />
                    <h3>No team members.</h3>
                    <p>
                      Looks like you don't have any team members yet. When
                      you'll start adding some to your team, they will be
                      showing up in here.
                    </p>
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
