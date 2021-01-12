<template>
  <DefaultLayout>
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
      data-naver-offset="150"
      data-menu-item="#home-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="home-sidebar"
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
              <h1 class="title is-4">Widgets</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Data Widgets-->
            <div class="columns is-multiline">
              <!--Widget Column-->
              <div class="column is-3">
                <!--Widget-->
                <div class="widget gauge-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Gauge Widget</h3>
                    </div>
                    <div class="right">
                      <WidgetDropdown />
                    </div>
                  </div>
                  <div class="gauge-wrap">
                    <div id="gauge-holder" class="gauge-holder"></div>
                  </div>
                  <div class="widget-content">
                    <p>
                      Your score has been calculated based on the latest metrics
                    </p>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget text-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>New Followers</h3>
                    </div>
                    <div class="right">
                      <div class="avatar-stack">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/7.jpg"
                            alt=""
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
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="widget-content">
                    <p>
                      Great News! <span>Alice</span>, <span>Erik</span> and
                      <span>Mary</span> are now following you. Take some time to
                      look at their profile.
                    </p>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget search-widget">
                  <div class="field">
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Search..."
                      />
                      <button class="search-button">
                        <Icon icon="feather:search" />
                      </button>
                    </div>

                    <div class="topics">
                      <a>#Politics</a>
                      <a>#Movies</a>
                      <a>#Tech</a>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget video-widget">
                  <div class="widget-content">
                    <img
                      src="/@images/photo/demo/widgets/1.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/400x300'
                      "
                    />
                    <div class="widget-meta">
                      <Icon icon="feather:play-circle" />
                      <h4>A nice and short little movie</h4>
                      <span class="views">
                        <Icon icon="feather:eye" />
                        <span>38,274</span>
                      </span>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget tags-widget">
                  <div class="widget-content">
                    <div class="tags">
                      <span class="tag is-primary is-outlined is-curved"
                        >Politics</span
                      >
                      <span class="tag is-primary is-curved">Economy</span>
                      <span class="tag is-primary is-outlined is-curved"
                        >Finance</span
                      >
                      <span class="tag is-primary is-outlined is-curved"
                        >Environment</span
                      >
                      <span class="tag is-primary is-outlined is-curved"
                        >Food</span
                      >
                      <span class="tag is-primary is-curved">Technology</span>
                    </div>
                  </div>
                </div>
              </div>

              <!--Widget Column-->
              <div class="column is-3">
                <!--Widget-->
                <div class="widget icon-toolbar-widget">
                  <div class="icon-toolbar">
                    <div class="toolbar-icon">
                      <a class="inner-icon is-active">
                        <Icon icon="feather:activity" />
                      </a>
                    </div>
                    <div class="toolbar-icon">
                      <a class="inner-icon">
                        <Icon icon="feather:search" />
                      </a>
                    </div>
                    <div class="toolbar-icon">
                      <a class="inner-icon">
                        <Icon icon="feather:file-text" />
                      </a>
                    </div>
                    <div class="toolbar-icon">
                      <a class="inner-icon">
                        <Icon icon="feather:home" />
                      </a>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget calendar-widget">
                  <div class="calendar-widget-inner">
                    <div class="calendar-square">
                      <div class="date">
                        <span>22</span>
                        <span>Monday</span>
                      </div>
                    </div>
                    <div class="calendar-square">
                      <div class="date">
                        <span>23</span>
                        <span>Tuesday</span>
                      </div>
                    </div>
                    <div class="calendar-square">
                      <div class="date">
                        <span>24</span>
                        <span>Wednesday</span>
                      </div>
                    </div>
                    <div class="calendar-square">
                      <div class="date">
                        <span>25</span>
                        <span>Thursday</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget picker-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <a class="action-icon">
                        <Icon icon="feather:chevron-left" />
                      </a>
                    </div>
                    <div class="center">
                      <h3>October 2020</h3>
                    </div>
                    <div class="right">
                      <a class="action-icon">
                        <Icon icon="feather:chevron-right" />
                      </a>
                    </div>
                  </div>
                  <table class="calendar">
                    <thead>
                      <tr>
                        <td>Mon</td>
                        <td>Tue</td>
                        <td>Wed</td>
                        <td>Thu</td>
                        <td>Fri</td>
                        <td>Sat</td>
                        <td>Sun</td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td class="prev-month">29</td>
                        <td class="prev-month">30</td>
                        <td class="prev-month">31</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                      </tr>

                      <tr>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td class="current-day">18</td>
                      </tr>

                      <tr>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                      </tr>

                      <tr>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td class="next-month">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--Widget-->
                <div class="widget icon-list-widget">
                  <div class="icon-list">
                    <div class="icon-list-item">
                      <div class="icon-wrap">
                        <Icon icon="feather:circle" />
                      </div>
                      <div class="item-meta">
                        <span>Global</span>
                      </div>
                    </div>
                    <div class="icon-list-item">
                      <div class="icon-wrap">
                        <Icon icon="feather:briefcase" />
                      </div>
                      <div class="item-meta">
                        <span>Business</span>
                      </div>
                    </div>
                    <div class="icon-list-item">
                      <div class="icon-wrap">
                        <Icon icon="feather:play" />
                      </div>
                      <div class="item-meta">
                        <span>Entertainment</span>
                      </div>
                    </div>
                    <div class="icon-list-item">
                      <div class="icon-wrap">
                        <Icon icon="feather:feather" />
                      </div>
                      <div class="item-meta">
                        <span>Design</span>
                      </div>
                    </div>
                    <div class="icon-list-item">
                      <div class="icon-wrap">
                        <Icon icon="feather:file" />
                      </div>
                      <div class="item-meta">
                        <span>Documents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Widget Column-->
              <div class="column is-3">
                <!--Widget-->
                <div class="widget text-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Payment</h3>
                    </div>
                    <div class="right">
                      <a class="right-icon has-indicator">
                        <Icon icon="feather:bell" />
                      </a>
                    </div>
                  </div>
                  <div class="widget-content">
                    <p>
                      You have an upcoming payment for your recurring
                      subscription fee due on <span>Sept 20, 2020</span>.
                    </p>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget image-widget">
                  <img
                    src="/@images/photo/demo/widgets/2.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/400x300'
                    "
                  />
                  <div class="progress-wrap">
                    <progress class="progress is-primary is-tiny" max="100">
                      55%
                    </progress>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget inbox-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Inbox</h3>
                    </div>
                    <div class="right">
                      <WidgetDropdown />
                    </div>
                  </div>
                  <div class="widget-content">
                    <div class="sender-block">
                      <div class="sender-block-inner">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/7.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="meta">
                          <span>Alice C. just sent you an inbox message.</span>
                        </div>
                      </div>
                      <div class="exerpt">
                        <h5>
                          <i class="fas fa-circle"></i>
                          <span>Design Project</span>
                        </h5>
                        <p>
                          Where are we in terms of design? We need to review the
                          new screens.
                        </p>
                        <small>28 minutes ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Widget Column-->
              <div class="column is-3">
                <!--Widget-->
                <div class="widget tags-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Labels</h3>
                    </div>
                    <div class="right">
                      <WidgetDropdown />
                    </div>
                  </div>
                  <div class="widget-content">
                    <div class="tags">
                      <span class="tag is-primary is-outlined is-curved"
                        >Family</span
                      >
                      <span class="tag is-primary is-curved">Home</span>
                      <span class="tag is-primary is-outlined is-curved"
                        >Health</span
                      >
                      <span class="tag is-primary is-outlined is-curved"
                        >Business</span
                      >
                      <span class="tag is-primary is-outlined is-curved"
                        >Personal</span
                      >
                      <span class="tag is-primary is-curved">Utility</span>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget list-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Notifications</h3>
                    </div>
                    <div class="right">
                      <WidgetDropdown />
                    </div>
                  </div>
                  <div class="widget-content">
                    <ul>
                      <li>
                        <a>
                          <span>Personal</span>
                          <span class="tag is-rounded">4</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Business</span>
                          <span class="tag is-rounded">9</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Family</span>
                          <span class="tag is-rounded">2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget stats-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3 class="is-vhidden">Statistics</h3>
                    </div>
                    <div class="right">
                      <WidgetDropdown />
                    </div>
                  </div>
                  <div class="widget-content">
                    <div class="has-text-centered">
                      <div class="stat-number">
                        <span
                          >$1638,42 <Icon icon="feather:trending-up"
                        /></span>
                        <span>Earned from Sales</span>
                      </div>
                    </div>
                    <div id="trend-chart" class="stat-chart"></div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget text-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Messages</h3>
                    </div>
                    <div class="right">
                      <a class="right-icon has-indicator">
                        <Icon icon="feather:message-square" />
                      </a>
                    </div>
                  </div>
                  <div class="widget-content">
                    <p>
                      You currently have more than
                      <span>10 unread messages</span> in your inbox. It could be
                      a good time to check them out.
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
