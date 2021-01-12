<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
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
              <h1 class="title is-4">Onboarding</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Onboarding V4-->
            <div class="onboarding-wrapper onboarding-v4">
              <div class="title-wrap">
                <p>Looks like you're new here</p>
                <h2 class="dark-inverted">
                  Welcome to Huro. What would you like to do?
                </h2>
              </div>

              <div class="onboarding-wrap">
                <div class="onboarding-wrap-inner">
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set5-1.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set5-1-dark.svg"
                      alt=""
                    />
                    <div class="onboarding-content">
                      <h3 class="dark-inverted">Plan a Trip</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Recte dicis; Ita enim vivunt.
                      </p>
                      <div class="button-wrap">
                        <a
                          class="button h-button is-primary is-rounded is-elevated"
                          >Explore</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set5-2.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set5-2-dark.svg"
                      alt=""
                    />
                    <div class="onboarding-content">
                      <h3 class="dark-inverted">Book a Flight</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Recte dicis; Ita enim vivunt.
                      </p>
                      <div class="button-wrap">
                        <a
                          class="button h-button is-primary is-rounded is-elevated"
                          >Book Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set5-3.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set5-3-dark.svg"
                      alt=""
                    />
                    <div class="onboarding-content">
                      <h3 class="dark-inverted">Browse Destinations</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Recte dicis; Ita enim vivunt.
                      </p>
                      <div class="button-wrap">
                        <a
                          class="button h-button is-primary is-rounded is-elevated"
                          >Browse</a
                        >
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
