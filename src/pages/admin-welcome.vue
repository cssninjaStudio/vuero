<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-onboarding"
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
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
              <h1 class="title is-4">Welcome</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <div class="standard-onboarding">
              <div class="title-wrap">
                <p>Looks like you're new here</p>
                <h2>Welcome to Vuero. What would you like to do?</h2>
              </div>

              <div class="onboarding-wrap">
                <div class="onboarding-wrap-inner">
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set1-1.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set1-1-dark.svg"
                      alt=""
                    />
                    <h3>Configure Shop</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a
                        class="button h-button is-primary is-outlined is-rounded is-raised"
                        >Configure Shop</a
                      >
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set1-2.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set1-2-dark.svg"
                      alt=""
                    />
                    <h3>Manage Products</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a
                        class="button h-button is-primary is-outlined is-rounded is-raised"
                        >Manage Products</a
                      >
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set1-3.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set1-3-dark.svg"
                      alt=""
                    />
                    <h3>Setup Payments</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a
                        class="button h-button is-primary is-outlined is-rounded is-raised"
                        >Setup Payments</a
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
  </DefaultLayout>
</template>
