<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="edit-profile"
      class="view-wrapper is-webapp"
      data-page-title="Notifications"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Notifications</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner is-webapp">
            <!--Notifications Page-->
            <div class="timeline-wrapper">
              <div class="timeline-header"></div>
              <div class="timeline-wrapper-inner">
                <div class="timeline-container">
                  <!--Timeline item-->
                  <div class="timeline-item is-unread">
                    <div class="date">
                      <span>Sep 23, 2020</span>
                    </div>
                    <div class="dot is-info"></div>
                    <div class="content-wrap">
                      <div class="content-box">
                        <div class="status"></div>
                        <div class="h-avatar">
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
                        <div class="box-text">
                          <div class="meta-text">
                            <p>
                              <span>Tara S.</span> added you to the
                              <a>Barber Website Redesign Project</a>.
                            </p>
                            <span>11:42 am</span>
                          </div>
                        </div>
                        <div class="box-end">
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
                  </div>

                  <!--Timeline item-->
                  <div class="timeline-item is-unread">
                    <div class="date">
                      <span>Sep 23, 2020</span>
                    </div>
                    <div class="dot is-danger"></div>
                    <div class="content-wrap">
                      <div class="content-box">
                        <div class="status"></div>
                        <div class="h-avatar">
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
                        <div class="box-text">
                          <div class="meta-text">
                            <p>
                              <span>Irina V.</span> left a comment on a
                              <a>Task</a>, in <a>Corporate Tools Rebranding</a>.
                            </p>
                            <span>9:18 am</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Timeline item-->
                  <div class="timeline-item">
                    <div class="date">
                      <span>Sep 22, 2020</span>
                    </div>
                    <div class="dot is-success"></div>
                    <div class="content-wrap">
                      <div class="content-box">
                        <div class="status"></div>
                        <div class="h-avatar">
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
                        <div class="box-text">
                          <div class="meta-text">
                            <p>
                              <span>Mary L.</span> added 3 new members to the
                              <a>Blake & Mortimer Project</a>.
                            </p>
                            <span>9:18 am</span>
                          </div>
                        </div>
                        <div class="box-end">
                          <div class="h-avatar is-small">
                            <span
                              class="avatar is-fake is-warning"
                              data-user-popover="36"
                            >
                              <span>BT</span>
                            </span>
                          </div>
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
                          <div class="h-avatar is-small">
                            <span
                              class="avatar is-fake is-info"
                              data-user-popover="34"
                            >
                              <span>JD</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Timeline item-->
                  <div class="timeline-item">
                    <div class="date">
                      <span>Sep 23, 2020</span>
                    </div>
                    <div class="dot is-purple"></div>
                    <div class="content-wrap">
                      <div class="content-box">
                        <div class="status"></div>
                        <div class="h-avatar">
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
                        <div class="box-text">
                          <div class="meta-text">
                            <p>
                              <span>Joshua S.</span> changed the status of a
                              <a>Task</a> from
                              <small class="tag is-rounded is-purple"
                                >Pending</small
                              >
                              to
                              <small class="tag is-rounded is-green"
                                >Completed</small
                              >
                            </p>
                            <span>9:18 am</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Timeline item-->
                  <div class="timeline-item">
                    <div class="date">
                      <span>Sep 22, 2020</span>
                    </div>
                    <div class="dot is-warning"></div>
                    <div class="content-wrap">
                      <div class="content-box">
                        <div class="status"></div>
                        <div class="h-avatar">
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
                        </div>
                        <div class="box-text">
                          <div class="meta-text">
                            <p>
                              <span>Courtney W.</span> uploaded 2 new files to
                              the <a>Blake & Mortimer Project</a>.
                            </p>
                            <span>9:18 am</span>
                          </div>
                        </div>
                        <div class="box-end">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar is-squared"
                              src="/@images/photo/demo/apps/5.png"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar is-squared"
                              src="/@images/photo/demo/apps/8.png"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Timeline item-->
                  <div class="timeline-item">
                    <div class="date">
                      <span>Sep 23, 2020</span>
                    </div>
                    <div class="dot is-info"></div>
                    <div class="content-wrap">
                      <div class="content-box">
                        <div class="status"></div>
                        <div class="h-avatar">
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
                        <div class="box-text">
                          <div class="meta-text">
                            <p>
                              <span>Yassine A.</span> mentionned you in a
                              <a>comment</a> on
                              <a>Delivery tracking Dashboard</a>.
                            </p>
                            <span>11:42 am</span>
                          </div>
                        </div>
                        <div class="box-end">
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
                  </div>

                  <!--Timeline item-->
                  <div class="timeline-item">
                    <div class="date">
                      <span>Sep 23, 2020</span>
                    </div>
                    <div class="dot is-danger"></div>
                    <div class="content-wrap">
                      <div class="content-box">
                        <div class="status"></div>
                        <div class="h-avatar">
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
                        <div class="box-text">
                          <div class="meta-text">
                            <p>
                              <span>Tara S.</span> left a comment on a
                              <a>Task</a>, in <a>Corporate Tools Rebranding</a>.
                            </p>
                            <span>9:18 am</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--Timeline item-->
                  <div class="timeline-item">
                    <div class="date">
                      <span>Sep 23, 2020</span>
                    </div>
                    <div class="dot is-purple"></div>
                    <div class="content-wrap">
                      <div class="content-box">
                        <div class="status"></div>
                        <div class="h-avatar">
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
                        <div class="box-text">
                          <div class="meta-text">
                            <p>
                              <span>Melany W.</span> changed the status of a
                              <a>Task</a> from
                              <small class="tag is-rounded is-danger"
                                >Overdue</small
                              >
                              to
                              <small class="tag is-rounded is-green"
                                >Completed</small
                              >
                            </p>
                            <span>9:18 am</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="load-more-wrap has-text-centered">
                  <button class="button h-button is-dark-outlined">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
