<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-onboarding"
      class="view-wrapper is-webapp"
      data-page-title="Onboarding"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Onboarding</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Onboarding-->
            <div class="standard-onboarding is-webapp">
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
                      src="/@images/illustrations/onboarding/set6-1.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set6-1-dark.svg"
                      alt=""
                    />
                    <h3>Configure Shop</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a class="button h-button is-primary is-elevated"
                        >Configure</a
                      >
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set6-2.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set6-2-dark.svg"
                      alt=""
                    />
                    <h3>Configure Warehouse</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a class="button h-button is-primary is-elevated"
                        >Configure</a
                      >
                    </div>
                  </div>
                  <!--Card-->
                  <div class="onboarding-card">
                    <img
                      class="light-image"
                      src="/@images/illustrations/onboarding/set6-3.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/onboarding/set6-3-dark.svg"
                      alt=""
                    />
                    <h3>Manage Products</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Recte dicis; Ita enim vivunt quidam, ut eorum vita
                      refellatur oratio. Sed tament.
                    </p>
                    <div class="button-wrap">
                      <a class="button h-button is-primary is-elevated"
                        >Manage</a
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
  </WebappLayout>
</template>
