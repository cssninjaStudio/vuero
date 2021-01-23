<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  activeTab: {
    type: String as PropType<'active' | 'inactive'>,
    default: 'active',
  },
})
</script>

<template>
  <!--List-->
  <div class="list-view list-view-v2">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/images/illustrations/placeholders/search-2.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/images/illustrations/placeholders/search-2-dark.svg"
          alt=""
        />
        <h3>We couldn't find any matching results.</h3>
        <p class="is-larger">
          Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria.
        </p>
      </div>
    </div>

    <!--Active Tab-->
    <div
      id="active-items-tab"
      class="tab-content"
      :class="[activeTab === 'active' && 'is-active']"
    >
      <div class="list-view-inner">
        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/1.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>1396 Redmond Street</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >1396 Redmond Street, Apartment 12, Suite H 102, Los Angeles,
                  CA</span
                >
              </p>
              <span>
                <span data-filter-match>5 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>3 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/2.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>24 Mulberry Street</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >24 Mulberry Street, Suite 43, New York, NY</span
                >
              </p>
              <span>
                <span data-filter-match>3 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>2 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/3.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>62 John Walberg Ave</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >62 John Walberg Avenue, Apartment 10, Suite 24, Los Angeles,
                  CA</span
                >
              </p>
              <span>
                <span data-filter-match>4 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>2 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/4.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>48 Manhattan Ave</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >48 Manhattan Avenue, Suite G12, New York, NY</span
                >
              </p>
              <span>
                <span data-filter-match>5 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>4 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/5.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>12 Charity Street</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >12 Charity Street, Apartment 49, Brooklynn, NY</span
                >
              </p>
              <span>
                <span data-filter-match>3 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>2 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/6.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>23 Bakery Street</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >23 Bakery Street, Suite 121, New York, NY</span
                >
              </p>
              <span>
                <span data-filter-match>3 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>2 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/7.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>1028 Pasadena Ave</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >1028 Pasadena Avenue, Suite F 24, Los Angeles, CA</span
                >
              </p>
              <span>
                <span data-filter-match>7 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>5 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/8.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>54 Church Street</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >54 Church Street, Apartment 2, New York, NY</span
                >
              </p>
              <span>
                <span data-filter-match>2 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>1 bed</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/9.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>112 Old City District</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >112 Old City District, Apartment 5 Suite 42, New York,
                  NY</span
                >
              </p>
              <span>
                <span data-filter-match>3 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>2 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <!--List Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img src="/images/photo/demo/10.jpg" alt="" />
            <div class="meta-left">
              <h3>
                <span data-filter-match>51 St Leonard Street</span>
                <span class="rating">
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                  <i class="fas fa-star active"></i>
                </span>
              </h3>
              <p>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match
                  >51 St Leonard Street, Suite 23, New York, NY</span
                >
              </p>
              <span>
                <span data-filter-match>4 rooms</span>
                <i class="fas fa-circle icon-separator"></i>
                <span data-filter-match>2 beds</span>
                <i class="fas fa-circle icon-separator"></i>
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
                <a class="button h-button is-primary is-raised">Book Now</a>
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
          ><i class="iconify" data-icon="feather:chevron-left"
        /></a>
        <a class="pagination-next has-chevron"
          ><i class="iconify" data-icon="feather:chevron-right"
        /></a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">1</a>
          </li>
          <li><span class="pagination-ellipsis">…</span></li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45">45</a>
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
            <a class="pagination-link" aria-label="Goto page 47">47</a>
          </li>
          <li><span class="pagination-ellipsis">…</span></li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">86</a>
          </li>
        </ul>
      </nav>
    </div>

    <!--Inactive Tab-->
    <div
      id="inactive-items-tab"
      class="tab-content"
      :class="[activeTab === 'inactive' && 'is-active']"
    >
      <div class="list-view-inner">
        <!--Empty placeholder-->
        <div class="page-placeholder custom-text-filter-placeholder">
          <div class="placeholder-content">
            <img
              class="light-image"
              src="/images/illustrations/placeholders/having-coffee.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/images/illustrations/placeholders/having-coffee-dark.svg"
              alt=""
            />
            <h3>There are no inactive properties.</h3>
            <p class="is-larger">
              Looks like there are no inactive properties to display. You can
              disable and also enable a property from the property settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/lists/_list-view.scss';
</style>
