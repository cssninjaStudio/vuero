<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('List View 2 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-list"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#layouts-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
        >
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="toggleSidebar('layouts')"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[activeSidebar !== 'none' && 'active']"
                  class="icon-box-toggle"
                >
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">List View</h1>
            </div>

            <Toolbar />
          </div>

          <div class="list-view-toolbar">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".list-view-item"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="tabs-inner">
              <div class="tabs">
                <ul>
                  <li data-tab="active-items-tab" class="is-active">
                    <a><span>Active</span></a>
                  </li>
                  <li data-tab="inactive-items-tab">
                    <a><span>Inactive</span></a>
                  </li>
                  <li class="tab-naver"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-content-inner">
            <!--List-->
            <div class="list-view list-view-v2">
              <!--List Empty Search Placeholder -->
              <div
                class="page-placeholder custom-text-filter-placeholder is-hidden"
              >
                <div class="placeholder-content">
                  <img
                    class="light-image"
                    src="/@images/illustrations/placeholders/search-2.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@images/illustrations/placeholders/search-2-dark.svg"
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

              <!--Active Tab-->
              <div id="active-items-tab" class="tab-content is-active">
                <div class="list-view-inner">
                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/1.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>1396 Redmond Street</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >1396 Redmond Street, Apartment 12, Suite H 102, Los
                            Angeles, CA</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>5 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>3 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>1 bathroom</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-air-flow"></i>
                            <span data-filter-match>Heater</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                          <span>
                            <i class="lnil lnil-more"></i>
                            <span>3 more</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/2.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>24 Mulberry Street</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >24 Mulberry Street, Suite 43, New York, NY</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>3 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>2 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>1 bathroom</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/3.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>62 John Walberg Ave</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >62 John Walberg Avenue, Apartment 10, Suite 24, Los
                            Angeles, CA</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>4 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>2 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>2 bathroom</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-air-flow"></i>
                            <span data-filter-match>Heater</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                          <span>
                            <i class="lnil lnil-more"></i>
                            <span>3 more</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/4.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>48 Manhattan Ave</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >48 Manhattan Avenue, Suite G12, New York, NY</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>5 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>4 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>3 bathrooms</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-air-flow"></i>
                            <span data-filter-match>Heater</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                          <span>
                            <i class="lnil lnil-more"></i>
                            <span>3 more</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/5.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>12 Charity Street</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >12 Charity Street, Apartment 49, Brooklynn,
                            NY</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>3 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>2 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>1 bathroom</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/6.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>23 Bakery Street</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >23 Bakery Street, Suite 121, New York, NY</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>3 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>2 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>1 bathroom</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-air-flow"></i>
                            <span data-filter-match>Heater</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                          <span>
                            <i class="lnil lnil-more"></i>
                            <span>4 more</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/7.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>1028 Pasadena Ave</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >1028 Pasadena Avenue, Suite F 24, Los Angeles,
                            CA</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>7 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>5 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>3 bathrooms</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-air-flow"></i>
                            <span data-filter-match>Heater</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                          <span>
                            <i class="lnil lnil-more"></i>
                            <span>6 more</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/8.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>54 Church Street</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >54 Church Street, Apartment 2, New York, NY</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>2 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>1 bed</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>1 bathroom</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-air-flow"></i>
                            <span data-filter-match>Heater</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/9.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>112 Old City District</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >112 Old City District, Apartment 5 Suite 42, New
                            York, NY</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>3 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>2 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>1 bathroom</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-air-flow"></i>
                            <span data-filter-match>Heater</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--List Item-->
                  <div class="list-view-item">
                    <div class="list-view-item-inner">
                      <img src="/@images/photo/demo/10.jpg" alt="" />
                      <div class="meta-left">
                        <h3>
                          <span data-filter-match>51 St Leonard Street</span>
                          <span class="rating">
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                            <Icon icon="fa-star active" />
                          </span>
                        </h3>
                        <p>
                          <Icon icon="feather:map-pin" />
                          <span data-filter-match
                            >51 St Leonard Street, Suite 23, New York, NY</span
                          >
                        </p>
                        <span>
                          <span data-filter-match>4 rooms</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span data-filter-match>2 beds</span>
                          <Icon icon="fa-circle icon-separator" />
                          <span>1 bathroom</span>
                        </span>

                        <div class="icon-list">
                          <span>
                            <i class="lnil lnil-car"></i>
                            <span data-filter-match>Parking</span>
                          </span>
                          <span>
                            <i class="lnil lnil-signal"></i>
                            <span data-filter-match>Wifi</span>
                          </span>
                          <span>
                            <i class="lnil lnil-air-flow"></i>
                            <span data-filter-match>Heater</span>
                          </span>
                          <span>
                            <i class="lnil lnil-sun"></i>
                            <span data-filter-match>Cleaning</span>
                          </span>
                          <span>
                            <i class="lnil lnil-more"></i>
                            <span>2 more</span>
                          </span>
                        </div>
                      </div>
                      <div class="meta-right">
                        <div class="buttons">
                          <a class="button h-button is-light">More Info</a>
                          <a class="button h-button is-primary is-raised"
                            >Book Now</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <nav
                  class="flex-pagination pagination is-rounded"
                  aria-label="pagination"
                  data-filter-hide
                >
                  <a class="pagination-previous has-chevron"
                    ><Icon icon="chevron-left"
                  /></a>
                  <a class="pagination-next has-chevron"
                    ><Icon icon="chevron-right"
                  /></a>
                  <ul class="pagination-list">
                    <li>
                      <a class="pagination-link" aria-label="Goto page 1">1</a>
                    </li>
                    <li><span class="pagination-ellipsis">…</span></li>
                    <li>
                      <a class="pagination-link" aria-label="Goto page 45"
                        >45</a
                      >
                    </li>
                    <li>
                      <a
                        class="pagination-link is-current"
                        aria-label="Page 46"
                        aria-current="page"
                        >46</a
                      >
                    </li>
                    <li>
                      <a class="pagination-link" aria-label="Goto page 47"
                        >47</a
                      >
                    </li>
                    <li><span class="pagination-ellipsis">…</span></li>
                    <li>
                      <a class="pagination-link" aria-label="Goto page 86"
                        >86</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>

              <!--Inactive Tab-->
              <div id="inactive-items-tab" class="tab-content">
                <div class="list-view-inner">
                  <!--Empty placeholder-->
                  <div class="page-placeholder custom-text-filter-placeholder">
                    <div class="placeholder-content">
                      <img
                        class="light-image"
                        src="/@images/illustrations/placeholders/having-coffee.svg"
                        alt=""
                      />
                      <img
                        class="dark-image"
                        src="/@images/illustrations/placeholders/having-coffee-dark.svg"
                        alt=""
                      />
                      <h3>There are no inactive properties.</h3>
                      <p class="is-larger">
                        Looks like there are no inactive properties to display.
                        You can disable and also enable a property from the
                        property settings.
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
