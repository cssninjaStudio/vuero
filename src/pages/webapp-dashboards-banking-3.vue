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
            <!--Banking Dashboard V3-->
            <div
              class="banking-dashboard banking-dashboard-v3 has-webapp-spacing"
            >
              <!--Header-->
              <div class="dashboard-header">
                <div class="left">
                  <span>Latest Bitcoin (BTC) Price Chart</span>
                  <div class="currency">
                    <span class="amount is-positive dark-inverted"
                      >$10584.30</span
                    >
                  </div>
                </div>
                <div class="right">
                  <div class="buttons">
                    <button class="button h-action">Hour</button>
                    <button class="button h-action">Day</button>
                    <button class="button h-action is-active">Week</button>
                    <button class="button h-action">Month</button>
                    <button class="button h-action">Year</button>
                  </div>
                </div>
              </div>

              <!--Body-->
              <div class="columns">
                <div class="column is-8">
                  <!--Tiles-->
                  <div class="dashboard-tiles">
                    <!--Tile-->
                    <div class="dashboard-tile">
                      <span>Market Cap</span>
                      <span class="dark-inverted">$129,992,260,090</span>
                    </div>
                    <!--Tile-->
                    <div class="dashboard-tile">
                      <span>Volume 24h</span>
                      <span class="dark-inverted">$453,178 K</span>
                    </div>
                    <!--Tile-->
                    <div class="dashboard-tile">
                      <span>Low/high 24h</span>
                      <span class="dark-inverted">$10,212.16 - $10,584.30</span>
                    </div>
                  </div>

                  <!--Chart-->
                  <div class="dashboard-card">
                    <div id="currency-chart"></div>
                  </div>

                  <div class="columns is-multiline">
                    <div class="column is-6">
                      <div class="dashboard-card">
                        <div id="radial-chart"></div>
                      </div>
                    </div>
                    <div class="column is-6">
                      <div class="dashboard-card">
                        <div id="radial-gauge"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column is-4">
                  <!--Info-->
                  <div class="dashboard-card is-side">
                    <div class="media-flex-center is-responsive-mobile">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/icons/cryptocurrencies/btc.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Bitcoin</span>
                        <span>BTC</span>
                      </div>
                      <div class="flex-end">
                        <!--Dropdown-->
                        <GraphDropdown />
                      </div>
                    </div>
                    <div class="currency-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vide, quantum, inquam, fallare, Torquate. Quid censes in
                        Latino fore? Optime, inquam. Ratio quidem vestra sic
                        cogit. Prave, nequiter, turpiter cenabat; Duo Reges:
                        constructio interrete.
                      </p>
                    </div>
                    <div class="button-wrap">
                      <button class="button h-button is-primary is-elevated">
                        Buy BTC
                      </button>
                      <button class="button h-button is-dark-outlined">
                        Compare
                      </button>
                    </div>
                  </div>

                  <div class="dashboard-card is-side">
                    <div class="subheading-wrap">
                      <h4 class="subheading dark-inverted">Followers</h4>
                      <a href="#" class="action-link">View All</a>
                    </div>

                    <div class="people">
                      <div class="h-avatar">
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
                      <div class="h-avatar">
                        <span
                          class="avatar is-fake is-h-purple"
                          data-user-popover="35"
                        >
                          <span>SC</span>
                        </span>
                      </div>
                      <div class="h-avatar">
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
                      <div class="h-avatar">
                        <span
                          class="avatar is-fake is-success"
                          data-user-popover="37"
                        >
                          <span>AT</span>
                        </span>
                      </div>
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
                      <div class="h-avatar">
                        <span class="avatar is-fake is-h-yellow">
                          <span>50K</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="dashboard-card is-side">
                    <div class="subheading-wrap">
                      <h4 class="subheading dark-inverted">Popular Coins</h4>
                      <a href="#" class="action-link">View All</a>
                    </div>

                    <div class="media-flex-center">
                      <div class="h-avatar is-small">
                        <img
                          class="avatar"
                          src="/@images/icons/cryptocurrencies/xmr.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Monero</span>
                        <span>XMR</span>
                      </div>
                      <div class="flex-end">
                        <button class="button is-circle is-dark-outlined">
                          <span class="icon is-small">
                            <Icon icon="feather:plus" />
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="media-flex-center">
                      <div class="h-avatar is-small">
                        <img
                          class="avatar"
                          src="/@images/icons/cryptocurrencies/ltc.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Litecoin</span>
                        <span>LTC</span>
                      </div>
                      <div class="flex-end">
                        <button class="button is-circle is-dark-outlined">
                          <span class="icon is-small">
                            <Icon icon="feather:plus" />
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="media-flex-center">
                      <div class="h-avatar is-small">
                        <img
                          class="avatar"
                          src="/@images/icons/cryptocurrencies/link.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>ChainLink</span>
                        <span>LINK</span>
                      </div>
                      <div class="flex-end">
                        <button class="button is-circle is-dark-outlined">
                          <span class="icon is-small">
                            <Icon icon="feather:plus" />
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="media-flex-center">
                      <div class="h-avatar is-small">
                        <img
                          class="avatar"
                          src="/@images/icons/cryptocurrencies/bnb.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Binance Coin</span>
                        <span>BNB</span>
                      </div>
                      <div class="flex-end">
                        <button class="button is-circle is-dark-outlined">
                          <span class="icon is-small">
                            <Icon icon="feather:plus" />
                          </span>
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
  </WebappLayout>
</template>
