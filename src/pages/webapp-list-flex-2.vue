<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-project"
      class="view-wrapper is-webapp"
      data-page-title="Flex Lists"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
        >
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Flex Lists</h1>
            </div>

            <Toolbar />
          </div>

          <div class="list-flex-toolbar is-reversed is-webapp flex-list-v2">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".flex-table-item"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="tabs-inner">
              <div class="tabs">
                <ul>
                  <li data-tab="active-items-tab" class="is-active">
                    <a><span>Active</span></a>
                  </li>
                  <li data-tab="inactive-items-tab">
                    <a><span>Closed</span></a>
                  </li>
                  <li class="tab-naver"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <div class="flex-list-wrapper flex-list-v2 is-webapp">
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

              <!--Active Tab-->
              <div id="active-items-tab" class="tab-content is-active">
                <div class="flex-table">
                  <!--Table header-->
                  <div class="flex-table-header" data-filter-hide>
                    <span class="is-grow">Project</span>
                    <span>Customer</span>
                    <span>Industry</span>
                    <span>Status</span>
                    <span>Team</span>
                    <span class="cell-end">Actions</span>
                  </div>

                  <div class="flex-list-inner">
                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/1.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >Website Redesign</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />3 months</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >Blake & Mortimer</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match
                          >HR Vetting</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >In Progress</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Relations">
                        <div class="avatar-stack is-pushed-mobile">
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
                          <div class="h-avatar is-small">
                            <span
                              class="avatar is-fake is-info"
                              data-user-popover="34"
                            >
                              <span>JD</span>
                            </span>
                          </div>
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
                            <span class="avatar is-more">
                              <span class="inner">
                                <span>+2</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/3.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >Mobile App Rework</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />2 months</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >Pollos Hermanos</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match>Food</span>
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >In Progress</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Team">
                        <div class="avatar-stack is-pushed-mobile">
                          <div class="h-avatar is-small">
                            <span
                              class="avatar is-fake is-danger"
                              data-user-popover="35"
                            >
                              <span>SC</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/2.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >ERP Solution Development</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />6 months</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >Best Mart</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match
                          >Distribution</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >Paused</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Team">
                        <div class="avatar-stack is-pushed-mobile">
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
                          <div class="h-avatar is-small">
                            <span
                              class="avatar is-fake is-warning"
                              data-user-popover="37"
                            >
                              <span>AT</span>
                            </span>
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
                          <div class="h-avatar is-small">
                            <span class="avatar is-more">
                              <span class="inner">
                                <span>+6</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/4.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >Website Proof Of Concept</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />1 month</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >Los Fragueros</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match
                          >Clothing</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >In Progress</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Team">
                        <div class="avatar-stack is-pushed-mobile">
                          <div class="h-avatar is-small">
                            <span
                              class="avatar is-fake is-success"
                              data-user-popover="36"
                            >
                              <span>BT</span>
                            </span>
                          </div>
                          <div class="h-avatar is-small">
                            <span
                              class="avatar is-fake is-warning"
                              data-user-popover="37"
                            >
                              <span>AT</span>
                            </span>
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
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/6.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >Add an Accouting Module</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />3 weeks</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >WorkForce</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match
                          >Software</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >In Progress</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Team">
                        <div class="avatar-stack is-pushed-mobile">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/18.jpg"
                              alt=""
                              data-user-popover="7"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/5.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >New UX Exploration</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />3 months</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >Brenton Brothers</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match
                          >Software</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >Offline</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Team">
                        <div class="avatar-stack is-pushed-mobile">
                          <div class="h-avatar is-small">
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
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/7.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >Ordering App Development</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />5 months</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >Find Your Stuff</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match>Retail</span>
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >In Progress</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Team">
                        <div class="avatar-stack is-pushed-mobile">
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
                            <span class="avatar is-more">
                              <span class="inner">
                                <span>+2</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/8.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >Learning App for Children</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />2 months</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >Coding Kids</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match
                          >Education</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >In Progress</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Relations">
                        <div class="avatar-stack is-pushed-mobile">
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
                              src="/@images/avatars/photos/5.jpg"
                              alt=""
                              data-user-popover="9"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/9.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >App Wireframe Implementation</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />2 weeks</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match>Freako</span>
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match>Retail</span>
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >In progress</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Relations">
                        <div class="avatar-stack is-pushed-mobile">
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
                        </div>
                      </div>
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
                      </div>
                    </div>

                    <!--Table item-->
                    <div class="flex-table-item">
                      <div class="flex-table-cell is-media is-grow">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/photo/demo/abstracts/10.png"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div>
                          <span
                            class="item-name dark-inverted"
                            data-filter-match
                            >Corporate Social Network</span
                          >
                          <span class="item-meta">
                            <span data-filter-match
                              ><Icon icon="feather:clock" />5 months</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="flex-table-cell" data-th="Customer">
                        <span class="light-text" data-filter-match
                          >Publicis</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Industry">
                        <span class="light-text" data-filter-match>Media</span>
                      </div>
                      <div class="flex-table-cell" data-th="Status">
                        <span class="tag is-rounded" data-filter-match
                          >In Progress</span
                        >
                      </div>
                      <div class="flex-table-cell" data-th="Team">
                        <div class="avatar-stack is-pushed-mobile">
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
                          <div class="h-avatar is-small">
                            <span
                              class="avatar is-fake is-info"
                              data-user-popover="34"
                            >
                              <span>JD</span>
                            </span>
                          </div>
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
                            <span class="avatar is-more">
                              <span class="inner">
                                <span>+2</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex-table-cell cell-end" data-th="Actions">
                        <ProjectListDropdown />
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

              <!--inactive Tab-->
              <div id="inactive-items-tab" class="tab-content">
                <!--Empty placeholder-->
                <div class="page-placeholder">
                  <div class="placeholder-content">
                    <img
                      class="light-image is-larger"
                      src="/@images/illustrations/placeholders/projects.svg"
                      alt=""
                    />
                    <img
                      class="dark-image is-larger"
                      src="/@images/illustrations/placeholders/projects-dark.svg"
                      alt=""
                    />
                    <h3>No closed projects.</h3>
                    <p class="is-larger">
                      Looks like you don't have any closed project yet. When
                      you'll start closing off projects, they will be showing up
                      in here.
                    </p>
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
