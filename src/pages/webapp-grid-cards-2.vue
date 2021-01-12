<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-cards"
      class="view-wrapper is-webapp"
      data-page-title="Card Grids"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Card Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="card-grid-toolbar is-webapp">
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

          <div class="page-content-inner is-webapp">
            <div class="card-grid card-grid-v2">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-3.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-3-dark.svg"
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

              <!--Card Grid v2-->
              <div class="columns is-multiline">
                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Alice C.</span
                            >
                            <span>updated 3m ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://www.sketchappsources.com/resources/source-image/annuacion-web-ui-kit.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Delivery App Project
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />August 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/27.jpg"
                                alt=""
                                data-user-popover="10"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/15.jpg"
                                alt=""
                                data-user-popover="15"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              data-user-popover="3"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Erik K.</span
                            >
                            <span>updated 5h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://gillde.com/wp-content/uploads/2019/08/UI-Design-32-1.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Health and Fitness Dashboard
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />October 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/21.jpg"
                                alt=""
                                data-user-popover="19"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Melany W.</span
                            >
                            <span>updated 5h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://icons8.com/wp-content/uploads/2020/03/dashboard-design-1.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Learning Tracker Dashboard
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />September 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/14.jpg"
                                alt=""
                                data-user-popover="14"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Irina V.</span
                            >
                            <span>updated 5h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://static-2.gumroad.com/res/gumroad/6757669395433/asset_previews/1af3b3832e4bc04f55fb010c14243d4b/retina/gem-dashboard-ui-kit-1024x768.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Banking and Finance Dashboard
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />October 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/21.jpg"
                                alt=""
                                data-user-popover="19"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/11.jpg"
                              alt=""
                              data-user-popover="13"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Kelly M.</span
                            >
                            <span>updated 2h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://miro.medium.com/max/4000/1*O-nvPXL3EkDvs8q8T4W5pg.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Resume Management Mobile App
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />October 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/30.jpg"
                                alt=""
                                data-user-popover="26"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Ana B.</span
                            >
                            <span>updated 3d ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://www.inbloogle.com/wp-content/uploads/2018/11/website-designing01.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Banking Landing Page
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />December 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/15.jpg"
                                alt=""
                                data-user-popover="15"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/8.jpg"
                                alt=""
                                data-user-popover="3"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Melany W.</span
                            >
                            <span>updated 1h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://i.pinimg.com/originals/19/62/1a/19621aba00cc7f261b9d82eca36e3201.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Learning App Design
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />November 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/11.jpg"
                                alt=""
                                data-user-popover="13"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Mary L.</span
                            >
                            <span>updated 4d ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://i.pinimg.com/originals/9f/cd/df/9fcddff148685457196a6199d897b0fe.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Educational App Design
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />November 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/21.jpg"
                                alt=""
                                data-user-popover="19"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/33.jpg"
                                alt=""
                                data-user-popover="29"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/27.jpg"
                              alt=""
                              data-user-popover="10"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Carmen E.</span
                            >
                            <span>updated 2h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://i.pinimg.com/originals/12/5f/0d/125f0d1c1761e7b1f3b479e4ab6291da.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Banking Solution Website
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />October 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/30.jpg"
                                alt=""
                                data-user-popover="26"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/27.jpg"
                              alt=""
                              data-user-popover="10"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Carmen E.</span
                            >
                            <span>updated 2h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://i.pinimg.com/originals/a3/e8/62/a3e8627bde1c43d2146cbf5aef88d869.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              HR Webapp Design
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />August 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/24.jpg"
                                alt=""
                                data-user-popover="22"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/22.jpg"
                                alt=""
                                data-user-popover="5"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Tara S.</span
                            >
                            <span>updated 8h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://icons8.com/wp-content/uploads/2020/03/ice-cream-dashboard-design.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Ice Cream Delivery Dashboard
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />January 2021
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Joshua S.</span
                            >
                            <span>updated 4d ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111431653/original/a5060a3c219e1905df6f6c16b170a6f0002f908e/create-a-professional-landing-page-and-one-page-ui-design.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Mobile App Landing Page
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />October 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <span
                                class="avatar is-fake is-h-purple"
                                data-user-popover="35"
                              >
                                <span>SC</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Joshua S.</span
                            >
                            <span>updated 4d ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://static.collectui.com/shots/3721946/%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BC-%F0%9F%94%8D-large"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Web Marketing Landing Page
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />November 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/15.jpg"
                                alt=""
                                data-user-popover="15"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/8.jpg"
                                alt=""
                                data-user-popover="3"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/15.jpg"
                              alt=""
                              data-user-popover="15"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Hilde V.</span
                            >
                            <span>updated 7h ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://i.pinimg.com/originals/bb/4e/f0/bb4ef07a0805c03f89a68ec6df8e3e19.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Startup Landing Page
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />November 2020
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/31.jpg"
                                alt=""
                                data-user-popover="27"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>

                <!--Grid Item-->
                <div class="column is-4">
                  <div class="card-grid-item">
                    <div class="card">
                      <header class="card-header">
                        <div class="card-header-title">
                          <div class="h-avatar is-small">
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
                          </div>
                          <div class="meta">
                            <span class="dark-inverted" data-filter-match
                              >Alejandro B.</span
                            >
                            <span>updated 2d ago</span>
                          </div>
                        </div>
                        <div class="card-header-icon">
                          <UserCardDropdown />
                        </div>
                      </header>
                      <div class="card-image">
                        <figure class="image is-16by9">
                          <img
                            src="https://www.uidownload.com/files/505/130/404/landing-page-design-for-finance-city.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/1280x960'
                            "
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="card-content-flex">
                          <div class="card-info">
                            <h3 class="dark-inverted" data-filter-match>
                              Expense Management System
                            </h3>
                            <p data-filter-match>
                              <Icon icon="feather:calendar" />January 2021
                            </p>
                          </div>
                          <div class="avatar-stack">
                            <div class="h-avatar is-small">
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
                            </div>
                            <div class="h-avatar is-small">
                              <img
                                class="avatar"
                                src="/@images/avatars/photos/24.jpg"
                                alt=""
                                data-user-popover="22"
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer class="card-footer">
                        <a href="#" class="card-footer-item">View</a>
                        <a href="#" class="card-footer-item">Settings</a>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>

              <!--Infinite Loader-->
              <div class="infinite-scroll-loader" data-filter-hide>
                <div class="infinite-scroll-loader-inner">
                  <div class="loader is-loading"></div>
                  <div class="loader-end is-hidden">
                    <span>No more items to load</span>
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
