<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-cards"
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
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
              <h1 class="title is-4">Card Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="card-grid-toolbar">
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
                      <span>Filter</span>
                    </div>
                    <div class="select-icon">
                      <Icon icon="feather:chevron-down" />
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>UI/UX Design</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Web Development</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Software Engineering</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Business</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Product Management</span>
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
                <span>Add User</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner">
            <div class="card-grid card-grid-v1">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-4.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-4-dark.svg"
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

              <!--Card Grid v1-->
              <div class="columns is-multiline">
                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                            src="/@images/icons/flags/united-states-of-america.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Tara Svenson</span
                          >
                          <span data-filter-match>UI/UX Designer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>65%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="65"
                            max="100"
                          >
                            65%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Helmut Fritz</span
                          >
                          <span data-filter-match>Product Manager</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>38%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="38"
                            max="100"
                          >
                            38%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Melany Wallace</span
                          >
                          <span data-filter-match>Web Developer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>58%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="58"
                            max="100"
                          >
                            58%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Hakeem Calami</span
                          >
                          <span data-filter-match>Software Engineer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>85%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="85"
                            max="100"
                          >
                            85%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Alejandro Badajoz</span
                          >
                          <span data-filter-match>Business Analyst</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>28%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="28"
                            max="100"
                          >
                            28%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Jeanne Marchand</span
                          >
                          <span data-filter-match>Mobile Developer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>67%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="67"
                            max="100"
                          >
                            67%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Greta Kroppfer</span
                          >
                          <span data-filter-match>Sales Manager</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>56%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="56"
                            max="100"
                          >
                            56%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Ana Baker</span
                          >
                          <span data-filter-match>UI/UX Designer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>12%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="12"
                            max="100"
                          >
                            12%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Mary Lebowski</span
                          >
                          <span data-filter-match>Project Manager</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>29%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="29"
                            max="100"
                          >
                            29%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Jonathan Krugger</span
                          >
                          <span data-filter-match>Product Manager</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>91%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="91"
                            max="100"
                          >
                            91%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Benoit Leblanc</span
                          >
                          <span data-filter-match>Software Engineer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>44%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="44"
                            max="100"
                          >
                            44%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Christie Dallas</span
                          >
                          <span data-filter-match>Web Developer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>61%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="61"
                            max="100"
                          >
                            61%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Courtney Wilson</span
                          >
                          <span data-filter-match>Web Developer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>53%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="53"
                            max="100"
                          >
                            53%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Jason Guarank</span
                          >
                          <span data-filter-match>Business Analyst</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>78%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="78"
                            max="100"
                          >
                            78%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Irina Vierbovsky</span
                          >
                          <span data-filter-match>Project Manager</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>36%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="36"
                            max="100"
                          >
                            36%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Edouard Falant</span
                          >
                          <span data-filter-match>Web Developer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>49%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="49"
                            max="100"
                          >
                            49%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Alice Carasca</span
                          >
                          <span data-filter-match>Software Engineer</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>78%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="78"
                            max="100"
                          >
                            78%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-6">
                  <div class="card-grid-item">
                    <div class="card-grid-item-body">
                      <div class="left">
                        <div class="h-avatar is-big">
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
                        <div class="meta">
                          <span class="dark-inverted" data-filter-match
                            >Dwayne Hicks</span
                          >
                          <span data-filter-match>Product Manager</span>
                        </div>
                      </div>
                      <div class="right">
                        <div class="social-links">
                          <a href="#" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-dribbble"></i>
                          </a>
                          <a href="#" class="social-link">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="card-grid-item-footer">
                      <div class="left">
                        <div class="progress-stats">
                          <span class="dark-inverted">Progress</span>
                          <span>17%</span>
                        </div>
                        <div class="progress-bar">
                          <progress
                            class="progress is-primary is-tiny"
                            value="17"
                            max="100"
                          >
                            17%
                          </progress>
                        </div>
                      </div>
                      <div class="right">
                        <div class="buttons">
                          <button
                            class="button h-button is-rounded is-dark-outlined"
                          >
                            View Profile
                          </button>
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
    </div>
  </DefaultLayout>
</template>
