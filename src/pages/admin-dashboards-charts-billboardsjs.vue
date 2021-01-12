<template>
  <DefaultLayout>
    <GenericSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-home"
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
              <h1 class="title is-4">Billboard Js</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <div class="columns is-multiline">
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-1"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-2"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-3"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-4"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-5"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-6"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-7"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-8"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-9"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-10"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-11"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-12"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-13"></div>
                </div>
              </div>
              <div class="column is-6">
                <div class="s-card">
                  <div id="billboardjs-chart-14"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
