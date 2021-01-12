<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-project"
      class="view-wrapper is-webapp"
      data-page-title="Datatable"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Datatable</h1>
            </div>

            <Toolbar />
          </div>

          <div class="datatable-toolbar is-webapp">
            <div class="field has-addons is-disabled">
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <i class="fas fa-check"></i>
                  </span>
                  <span>Promote</span>
                </button>
              </p>
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <i class="fas fa-times"></i>
                  </span>
                  <span>Delete</span>
                </button>
              </p>
              <p class="control">
                <button class="button h-button">
                  <span class="icon is-small">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                  <span>Transfer</span>
                </button>
              </p>
            </div>

            <div class="buttons">
              <button class="button h-button is-primary is-elevated">
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Add User</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <!-- Datatable -->
            <div class="table-wrapper" data-simplebar>
              <table
                id="users-datatable"
                class="table is-datatable is-hoverable table-is-bordered"
              >
                <thead>
                  <tr>
                    <th>
                      <div class="control">
                        <label
                          class="checkbox is-primary is-outlined is-circle"
                        >
                          <input type="checkbox" />
                          <span></span>
                        </label>
                      </div>
                    </th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>

            <div
              id="paging-first-datatable"
              class="pagination datatable-pagination"
            >
              <div class="datatable-info">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
