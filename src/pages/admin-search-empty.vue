<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-search"
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted"
        >
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
              <h1 class="title is-4">Empty Search</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Empty Search-->
            <div class="search-results-wrapper">
              <div class="search-results-header">
                <div class="control has-icon">
                  <input class="input" placeholder="Search again..." />
                  <div class="form-icon">
                    <Icon icon="feather:search" />
                  </div>
                </div>

                <div class="search-info">
                  <span>0 results found</span>
                </div>

                <div class="tabs-inner">
                  <div class="tabs is-disabled">
                    <ul>
                      <li data-tab="all-items-tab" class="is-active">
                        <a><span>All</span></a>
                      </li>
                      <li data-tab="people-items-tab">
                        <a><span>People</span></a>
                      </li>
                      <li data-tab="records-items-tab">
                        <a><span>Records</span></a>
                      </li>
                      <li class="tab-naver"></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="search-results-body">
                <!--Search Placeholder -->
                <div class="page-placeholder">
                  <div class="placeholder-content">
                    <img
                      class="light-image"
                      src="/@images/illustrations/placeholders/search-7.svg"
                      alt=""
                    />
                    <img
                      class="dark-image"
                      src="/@images/illustrations/placeholders/search-7-dark.svg"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
