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
            <!--Finance Dashboard V3-->
            <div class="finance-dashboard sales-dashboard">
              <!--Header-->
              <div class="dashboard-header">
                <div class="h-avatar is-large">
                  <img
                    class="avatar"
                    src="https://via.placeholder.com/150x150"
                    data-demo-src="/@images/avatars/photos/8.jpg"
                    alt=""
                  />
                </div>
                <div class="start">
                  <h3 class="dark-inverted">Welcome back, Erik Kovalsky</h3>
                  <p>We're very happy to see you again on your dashboard.</p>
                </div>
                <div class="end">
                  <button class="button h-button is-dark-outlined">
                    View Reports
                  </button>
                  <button class="button h-button is-primary is-elevated">
                    Transactions
                  </button>
                </div>
              </div>

              <div class="spark-tiles">
                <div class="columns is-multiline">
                  <div class="column is-3">
                    <div class="spark-tile">
                      <div id="spark1"></div>
                    </div>
                  </div>
                  <div class="column is-3">
                    <div class="spark-tile">
                      <div id="spark2"></div>
                    </div>
                  </div>
                  <div class="column is-3">
                    <div class="spark-tile">
                      <div id="spark3"></div>
                    </div>
                  </div>
                  <div class="column is-3">
                    <div class="spark-tile">
                      <div id="spark4"></div>
                    </div>
                  </div>
                  <div class="column is-7">
                    <div class="dashboard-card">
                      <div class="card-head">
                        <h3 class="dark-inverted">Revenue Overview</h3>
                      </div>
                      <div class="revenue-stats">
                        <div class="revenue-stat">
                          <span>This Month</span>
                          <span class="current">$75,648.43</span>
                        </div>
                        <div class="revenue-stat">
                          <span>Last Month</span>
                          <span class="dark-inverted">$91,512.18</span>
                        </div>
                        <div class="revenue-stat">
                          <span>Last Month</span>
                          <span class="dark-inverted">$91,512.18</span>
                        </div>
                      </div>
                      <div id="revenue-chart"></div>
                    </div>
                  </div>
                  <div class="column is-5">
                    <div class="dashboard-card flex-chart">
                      <div class="chart-media">
                        <div class="meta">
                          <h4 class="dark-inverted">Sales Revenue</h4>
                          <span class="is-dark-primary">$8,641.26</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Bonum integritas corporis: misera debilitas.
                            Ita ne hoc quidem modo paria.
                          </p>
                        </div>
                        <div class="chart-container">
                          <div id="radial-circle"></div>
                        </div>
                      </div>
                    </div>
                    <div class="dashboard-card flex-chart">
                      <div class="card-head">
                        <h3 class="dark-inverted">Additional Stats</h3>
                      </div>
                      <div class="chart-group">
                        <div class="group">
                          <div class="group-content">
                            <div class="chart-container">
                              <div id="group-radial-1"></div>
                            </div>
                            <span class="dark-inverted">264</span>
                            <p>New Deals</p>
                          </div>
                        </div>
                        <div class="group">
                          <div class="group-content">
                            <div class="chart-container">
                              <div id="group-radial-2"></div>
                            </div>
                            <span class="dark-inverted">1,203</span>
                            <p>Proposals</p>
                          </div>
                        </div>
                        <div class="group">
                          <div class="group-content">
                            <div class="chart-container">
                              <div id="group-radial-3"></div>
                            </div>
                            <span class="dark-inverted">3,078</span>
                            <p>Closed Deals</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="column is-3">
                    <!--Widget-->
                    <div class="widget gauge-widget is-straight">
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
                  </div>
                  <div class="column is-6">
                    <div class="dashboard-card">
                      <div class="card-head">
                        <h3 class="dark-inverted">Orders Summary</h3>
                      </div>
                      <div id="bar-chart"></div>
                    </div>
                  </div>
                  <div class="column is-3">
                    <!--Widget-->
                    <div class="widget picker-widget is-straight">
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
