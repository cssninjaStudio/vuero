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
              <h1 class="title is-4">Dashboard</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Lifestyle Dashboard V3-->
            <div class="lifestyle-dashboard lifestyle-dashboard-v3">
              <div class="illustration-header">
                <div class="header-image">
                  <img
                    src="/@images/illustrations/dashboards/lifestyle/doctor.svg"
                    alt=""
                  />
                </div>
                <div class="header-meta">
                  <h3>Today's Summary</h3>
                  <p>
                    Monitor your activity and keep improving your weak points.
                  </p>
                  <div class="summary-stats">
                    <div class="summary-stat">
                      <span>900 kcal</span>
                      <span>Burnt today</span>
                    </div>
                    <div class="summary-stat">
                      <span>2300 kcal</span>
                      <span>Eaten today</span>
                    </div>
                    <div class="summary-stat">
                      <span>10,864</span>
                      <span>Steps walked</span>
                    </div>
                    <div class="summary-stat">
                      <span>2% fat</span>
                      <span>Burnt today</span>
                    </div>
                    <div class="summary-stat h-hidden-tablet-p">
                      <span>8.4 km</span>
                      <span>distance today</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns is-multiline is-flex-tablet-p">
                <!--Tile-->
                <div class="column is-3">
                  <div class="health-tile">
                    <div class="tile-head">
                      <div class="h-icon is-primary">
                        <i class="fas fa-tint"></i>
                      </div>
                      <h4>
                        <span class="dark-inverted">114/90</span>
                        <span>Min/Max</span>
                      </h4>
                    </div>
                    <h3 class="dark-inverted">Blood</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      Illis videtur.
                    </p>
                  </div>
                </div>

                <!--Tile-->
                <div class="column is-3">
                  <div class="health-tile">
                    <div class="tile-head">
                      <div class="h-icon is-primary">
                        <i class="fas fa-heart"></i>
                      </div>
                      <h4>
                        <span class="dark-inverted">112</span>
                        <span>Bpm</span>
                      </h4>
                    </div>
                    <h3 class="dark-inverted">Heart Rate</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      Illis videtur.
                    </p>
                  </div>
                </div>

                <!--Tile-->
                <div class="column is-3">
                  <div class="health-tile">
                    <div class="tile-head">
                      <div class="h-icon is-primary">
                        <i class="fas fa-pump-medical"></i>
                      </div>
                      <h4>
                        <span class="dark-inverted">12/14</span>
                        <span>units</span>
                      </h4>
                    </div>
                    <h3 class="dark-inverted">Blood Pressure</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      Illis videtur.
                    </p>
                  </div>
                </div>

                <!--Tile-->
                <div class="column is-3">
                  <div class="health-tile">
                    <div class="tile-head">
                      <div class="h-icon is-primary">
                        <i class="fas fa-weight"></i>
                      </div>
                      <h4>
                        <span class="dark-inverted">60.4</span>
                        <span>lbs</span>
                      </h4>
                    </div>
                    <h3 class="dark-inverted">Weight</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      Illis videtur.
                    </p>
                  </div>
                </div>
              </div>

              <div class="columns is-multiline">
                <div class="column is-9">
                  <div class="columns is-multiline">
                    <!--Dashboard Card-->
                    <div class="column is-6">
                      <div class="dashboard-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Overall Condition</h3>
                          <WidgetDropdown />
                        </div>
                        <div class="chart-meta">
                          <p>
                            <Icon icon="feather:help-circle" /> Your overall
                            condition is very good. Make it even better.
                            <a class="is-dark-primary">Read how</a>
                          </p>
                        </div>
                        <div id="overall-chart"></div>
                      </div>
                    </div>

                    <!--Dashboard Card-->
                    <div class="column is-6">
                      <div class="dashboard-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Energy Report</h3>
                          <WidgetDropdown />
                        </div>
                        <div class="chart-meta">
                          <p>
                            <Icon icon="feather:help-circle" /> Your energy
                            seems a bit unstable. You can improve it.
                            <a class="is-dark-primary">Read how</a>
                          </p>
                        </div>
                        <div id="energy-chart"></div>
                      </div>
                    </div>

                    <!--Dashboard Card-->
                    <div class="column is-6">
                      <div class="dashboard-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Oxygenation</h3>
                          <WidgetDropdown />
                        </div>
                        <div class="chart-meta">
                          <p>
                            <Icon icon="feather:help-circle" /> Your oxygen
                            seems a bit unstable. You can improve it.
                            <a class="is-dark-primary">Read how</a>
                          </p>
                        </div>
                        <div id="oxygen-chart"></div>
                      </div>
                    </div>

                    <!--Dashboard Card-->
                    <div class="column is-6">
                      <div class="dashboard-card">
                        <div class="card-head">
                          <h3 class="dark-inverted">Overall Progress</h3>
                          <WidgetDropdown />
                        </div>
                        <div class="chart-meta">
                          <p>
                            <Icon icon="feather:help-circle" /> Your overall
                            condition is very good. Make it even better.
                            <a class="is-dark-primary">Read how</a>
                          </p>
                        </div>
                        <div id="progress-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column is-3">
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
                        <a>#Health</a>
                        <a>#Cardio</a>
                        <a>#Nutrition</a>
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
                  <div class="widget gauge-widget">
                    <div class="widget-toolbar">
                      <div class="left">
                        <h3 class="is-bigger">Personal Score</h3>
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
                        Your score has been calculated based on the latest
                        metrics
                      </p>
                    </div>
                  </div>

                  <!--Widget-->
                  <div class="widget text-widget">
                    <div class="widget-toolbar">
                      <div class="left">
                        <h3 class="is-bigger">New Friends</h3>
                      </div>
                      <div class="right">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/7.jpg"
                              alt=""
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/8.jpg"
                              alt=""
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="/@images/avatars/photos/5.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="widget-content">
                      <p>
                        Great News! <span>Alice</span>, <span>Erik</span> and
                        <span>Mary</span> are now friends with you. Take some
                        time to look at their profile.
                      </p>
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
