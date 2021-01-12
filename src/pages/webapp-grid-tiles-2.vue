<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Grid Tiles 2 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-cards"
      class="view-wrapper is-webapp"
      data-page-title="Tile Grids"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Tile Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="tile-grid-toolbar is-webapp">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".column"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="buttons">
              <div class="field h-hidden-mobile">
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>All Files</span>
                    </div>
                    <div class="select-icon">
                      <Icon icon="feather:chevron-down" />
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Recently updated</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>My Files</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Team Files</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="grid_filter" />
                          <div class="option-meta">
                            <span>Deprecated</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="button h-button is-primary is-raised">
                <span class="icon">
                  <Icon icon="fa-plus" />
                </span>
                <span>Add File</span>
              </button>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <div class="tile-grid tile-grid-v2">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-4.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-4-dark.svg"
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

              <!--Tile Grid v1-->
              <div class="columns is-multiline">
                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/pdf.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted">Company UX Guide</span>
                        <span>
                          <span>4.7 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 2 days ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/sheet.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted">Tech Summit Expenses</span>
                        <span>
                          <span>34 KB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 1 week ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/doc-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted">Project Outline</span>
                        <span>
                          <span>77 KB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 2 weeks ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/ppt.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted">UX Presentation</span>
                        <span>
                          <span>2.3 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 4 days ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/ai.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >Website Homepage Redesign</span
                        >
                        <span>
                          <span>4.8 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 3 hours ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/doc-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >UX Ramp Up for Interns</span
                        >
                        <span>
                          <span>1.8 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 6 hours ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/pdf.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted">2020 Projects Digest</span>
                        <span>
                          <span>8.9 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 2 days ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/doc-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >Financial Report - 2020</span
                        >
                        <span>
                          <span>1.2 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 2 months ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/sheet.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >2020 Supplier Expenses</span
                        >
                        <span>
                          <span>250 KB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 2 weeks ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/ai.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >Website About Page Redesign</span
                        >
                        <span>
                          <span>3.9 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 2 months ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/ai.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >Website Pricing Page Redesign</span
                        >
                        <span>
                          <span>2.6 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 2 months ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/doc-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >Financial Report - 2019</span
                        >
                        <span>
                          <span>1.1 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 8 months ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/sheet.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >2019 Supplier Expenses</span
                        >
                        <span>
                          <span>34 KB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 8 months ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/ai.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted"
                          >Website Contact Page Redesign</span
                        >
                        <span>
                          <span>5.8 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 3 months ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/pdf.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted">Company Brand Book</span>
                        <span>
                          <span>5.3 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 3 weeks ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
                    </div>
                  </div>
                </div>

                <!--Grid item-->
                <div class="column is-4">
                  <div class="tile-grid-item">
                    <div class="tile-grid-item-inner">
                      <img
                        src="/@images/icons/files/pdf.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <div class="meta">
                        <span class="dark-inverted">2019 Projects Digest</span>
                        <span>
                          <span>4.7 MB</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>Updated 9 months ago</span>
                        </span>
                      </div>
                      <FileTileDropdown />
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
