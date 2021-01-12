<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboards Apps 1 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-apex-charts"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Food Delivery"
      data-naver-offset="150"
      data-menu-item="#dashboards-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Food Delivery</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Food Delivery Dashboard-->
            <div class="food-delivery-dashboard is-webapp">
              <!--Left-->
              <div class="left">
                <div class="left-header">
                  <div class="header-image">
                    <img
                      src="/@images/illustrations/dashboards/food/header.svg"
                      alt=""
                    />
                  </div>
                  <div class="header-meta">
                    <h3>$0 delivery for 30 days! 🎉</h3>
                    <p>$0 delivery fee for orders over $10 for 30 days</p>
                    <a class="action-link">
                      <span>Learn More</span>
                      <Icon icon="fa-arrow-right" />
                    </a>
                  </div>
                </div>

                <div class="left-body">
                  <div class="restaurants">
                    <div class="restaurants-toolbar">
                      <div class="left">
                        <h3>Restaurants</h3>
                      </div>

                      <div class="right"></div>
                    </div>

                    <div class="food-pills">
                      <div class="food-pills-inner pill-carousel">
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-1.svg"
                              alt=""
                            />
                          </div>
                          <span>All</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-2.svg"
                              alt=""
                            />
                          </div>
                          <span>Pizza</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-3.svg"
                              alt=""
                            />
                          </div>
                          <span>Asian</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-4.svg"
                              alt=""
                            />
                          </div>
                          <span>Fast</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-5.svg"
                              alt=""
                            />
                          </div>
                          <span>Grills</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-6.svg"
                              alt=""
                            />
                          </div>
                          <span>Cakes</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-7.svg"
                              alt=""
                            />
                          </div>
                          <span>Thai</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-8.svg"
                              alt=""
                            />
                          </div>
                          <span>Sushi</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-9.svg"
                              alt=""
                            />
                          </div>
                          <span>Fruits</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-10.svg"
                              alt=""
                            />
                          </div>
                          <span>Veggie</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-11.svg"
                              alt=""
                            />
                          </div>
                          <span>Brunch</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-12.svg"
                              alt=""
                            />
                          </div>
                          <span>Pasta</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-13.svg"
                              alt=""
                            />
                          </div>
                          <span>Fish</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-2.svg"
                              alt=""
                            />
                          </div>
                          <span>Pizza</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-3.svg"
                              alt=""
                            />
                          </div>
                          <span>Asian</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-4.svg"
                              alt=""
                            />
                          </div>
                          <span>Fast</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-5.svg"
                              alt=""
                            />
                          </div>
                          <span>Grills</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-6.svg"
                              alt=""
                            />
                          </div>
                          <span>Cakes</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-7.svg"
                              alt=""
                            />
                          </div>
                          <span>Thai</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-9.svg"
                              alt=""
                            />
                          </div>
                          <span>Fruits</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-10.svg"
                              alt=""
                            />
                          </div>
                          <span>Veggie</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-11.svg"
                              alt=""
                            />
                          </div>
                          <span>Brunch</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-12.svg"
                              alt=""
                            />
                          </div>
                          <span>Pasta</span>
                        </div>
                        <!--Pill-->
                        <div class="food-pill">
                          <div class="food-pill-icon">
                            <img
                              src="/@images/illustrations/dashboards/food/icon-13.svg"
                              alt=""
                            />
                          </div>
                          <span>Fish</span>
                        </div>
                      </div>
                    </div>

                    <div class="restaurants-list">
                      <div class="columns is-multiline">
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/1.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>40</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-2.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/800x450'
                                  "
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Mario's Place</h4>
                                <p>
                                  <span>Pizza</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.9</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/2.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>30</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-4.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Jimmy's Downtown</h4>
                                <p>
                                  <span>Fast</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.5</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/3.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>45</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-9.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Fruity Loops</h4>
                                <p>
                                  <span>Fruits</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.8</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/4.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>20</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-10.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>The Green Heaven</h4>
                                <p>
                                  <span>Veggie</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>5.0</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/5.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>30</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-10.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Salad Bar</h4>
                                <p>
                                  <span>Veggie</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.8</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/6.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>50</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-12.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Little Italy</h4>
                                <p>
                                  <span>Pasta</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>1.1</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/7.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>15</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-7.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>The Noodle Bar</h4>
                                <p>
                                  <span>Thai</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.9</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/8.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>20</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-4.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Jerry's Epic Burger</h4>
                                <p>
                                  <span>Fast</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>5.0</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/9.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>55</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-13.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Meals From The Sea</h4>
                                <p>
                                  <span>Fish</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.7</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/10.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>45</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-6.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Delicious Little Things</h4>
                                <p>
                                  <span>Cakes</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>5.0</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/11.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>15</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-4.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Pollos Hermanos</h4>
                                <p>
                                  <span>Fast</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>5.0</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/12.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>30</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-6.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Iced & Delicious</h4>
                                <p>
                                  <span>Cakes</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.2</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/13.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>30</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-8.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Osaka Sushi</h4>
                                <p>
                                  <span>Sushi</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.9</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/14.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>10</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-10.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Quick Treats</h4>
                                <p>
                                  <span>Veggie</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>3.8</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/15.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>30</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-10.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Sam' Dwich</h4>
                                <p>
                                  <span>Veggie</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.5</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/16.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>45</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-6.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Sunchine Cookies</h4>
                                <p>
                                  <span>Cakes</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.9</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/17.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>45</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-4.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>O' Fried Chicken</h4>
                                <p>
                                  <span>Fast</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>1.0</span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--Restaurant-->
                        <div class="column is-4">
                          <div class="restaurants-list-item">
                            <div class="image-container">
                              <img
                                src="/@images/photo/demo/food/18.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/800x450'
                                "
                              />
                              <div class="timer">
                                <div>
                                  <span>30</span>
                                  <span>Min</span>
                                </div>
                              </div>
                            </div>
                            <div class="meta-container">
                              <div class="meta-icon">
                                <img
                                  src="/@images/illustrations/dashboards/food/icon-7.svg"
                                  alt=""
                                />
                              </div>
                              <div class="meta-content">
                                <h4>Bangkok Woks</h4>
                                <p>
                                  <span>Thai</span>
                                  <Icon icon="fa-circle" />
                                  <span class="rating">
                                    <Icon icon="fa-star" />
                                    <span>4.5</span>
                                  </span>
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

              <div class="right fixed-parent">
                <div class="sticky-panel fixed-child">
                  <div class="widget icon-toolbar-widget">
                    <div class="icon-toolbar">
                      <div class="toolbar-icon">
                        <a
                          class="inner-icon is-active"
                          data-section="cart-section"
                        >
                          <Icon icon="feather:shopping-cart" />
                        </a>
                      </div>
                      <div class="toolbar-icon">
                        <a class="inner-icon" data-section="activity-section">
                          <Icon icon="feather:activity" />
                        </a>
                      </div>
                      <div class="toolbar-icon">
                        <a class="inner-icon" data-section="address-section">
                          <Icon icon="feather:map-pin" />
                        </a>
                      </div>
                      <div class="toolbar-icon">
                        <a class="inner-icon" data-section="settings-section">
                          <Icon icon="feather:settings" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    id="cart-section"
                    class="cart-widget side-section is-active"
                  >
                    <div class="widget-toolbar">
                      <div class="left">
                        <h3 class="is-bigger">My Order</h3>
                      </div>
                      <div class="right">
                        <span class="tag is-curved">0 items</span>
                      </div>
                    </div>
                    <div class="section-placeholder">
                      <div class="placeholder-content">
                        <img
                          src="/@images/illustrations/dashboards/food/cart-placeholder.svg"
                          alt=""
                        />
                        <h3 class="dark-inverted">No Items</h3>
                        <p>
                          Your cart is currently empty. Start adding products.
                        </p>
                      </div>
                    </div>
                    <div class="cart-items has-slimscroll is-hidden">
                      <div class="cart-item">
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar is-squared"
                            src="/@images/photo/demo/food/1.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="meta">
                          <span class="text"> Double XL Burger </span>
                          <span class="price">$15.50 x 1</span>
                        </div>
                      </div>
                      <div class="cart-item">
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar is-squared"
                            src="/@images/photo/demo/food/2.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="meta">
                          <span class="text"> Cherry Cupcakes </span>
                          <span class="price">$8.00 x 3</span>
                        </div>
                      </div>
                      <div class="cart-item">
                        <div class="h-avatar is-medium">
                          <img
                            class="avatar is-squared"
                            src="/@images/photo/demo/food/3.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="meta">
                          <span class="text"> Extra Fries </span>
                          <span class="price">$7.90 x 2</span>
                        </div>
                      </div>
                    </div>
                    <div class="cart-button">
                      <div class="total">
                        <span class="label">Total</span>
                        <span>$0.00</span>
                      </div>
                      <div
                        class="button h-button is-primary is-raised is-bold is-fullwidth"
                      >
                        Start Checkout
                      </div>
                    </div>
                  </div>

                  <div id="activity-section" class="side-section">
                    <div class="widget followers-widget">
                      <div class="widget-toolbar">
                        <div class="left">
                          <h3 class="is-bigger">Followers</h3>
                        </div>
                        <div class="right">
                          <WidgetDropdown />
                        </div>
                      </div>
                      <div class="channels">
                        <div class="channel">
                          <div class="channel-icon">
                            <i class="fab fa-facebook-f"></i>
                          </div>
                          <div class="channel-stats">
                            <span>22K</span>
                          </div>
                        </div>
                        <div class="channel">
                          <div class="channel-icon">
                            <i class="fab fa-twitter"></i>
                          </div>
                          <div class="channel-stats">
                            <span>38K</span>
                          </div>
                        </div>
                        <div class="channel">
                          <div class="channel-icon">
                            <i class="fab fa-instagram"></i>
                          </div>
                          <div class="channel-stats">
                            <span>5K</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="widget illustration-widget illustration-widget-v2"
                    >
                      <img
                        class="main"
                        src="/@images/illustrations/dashboards/food/widget.svg"
                        alt=""
                      />
                      <h3>You unlocked 2 new Achievements</h3>
                      <p>
                        Congrats, your efforts have been rewarded. Keep up like
                        this!
                      </p>
                    </div>
                  </div>

                  <div id="address-section" class="side-section">
                    <div class="widget text-widget">
                      <div class="widget-toolbar">
                        <div class="left">
                          <h3 class="is-bigger">Deliver to</h3>
                        </div>
                        <div class="right">
                          <a class="action-link"> Edit </a>
                        </div>
                      </div>
                      <div class="widget-content">
                        <p>Erik Kovalsky</p>
                        <p>38, Suite B2 Parkman Avenue</p>
                        <p>Los Angeles, CA</p>
                      </div>
                    </div>

                    <div class="widget contact-widget is-reversed">
                      <div class="widget-content">
                        <div class="left">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar is-squared"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              data-user-popover="3"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>
                        <div class="right">
                          <h3>Erik K.</h3>
                          <div class="company">
                            <span>Vuero Ltd.</span>
                            <p>Product Manager</p>
                          </div>
                          <div class="contact-info">
                            <span>
                              <Icon icon="feather:map-pin" />
                              <span>Los Angeles, CA</span>
                            </span>
                            <span>
                              <Icon icon="feather:phone" />
                              <span>+1 444-5156</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <p class="email">erikkovalsky@huro.io</p>
                    </div>
                  </div>

                  <div id="settings-section" class="side-section">
                    <div class="widget icon-list-widget">
                      <div class="widget-toolbar">
                        <div class="left">
                          <h3 class="is-bigger">Settings</h3>
                        </div>
                        <div class="right">
                          <WidgetDropdown />
                        </div>
                      </div>
                      <div class="icon-list">
                        <div class="icon-list-item">
                          <div class="icon-wrap">
                            <Icon icon="feather:circle" />
                          </div>
                          <div class="item-meta">
                            <span>Global</span>
                          </div>
                        </div>
                        <div class="icon-list-item">
                          <div class="icon-wrap">
                            <Icon icon="feather:user" />
                          </div>
                          <div class="item-meta">
                            <span>Profile</span>
                          </div>
                        </div>
                        <div class="icon-list-item">
                          <div class="icon-wrap">
                            <Icon icon="feather:credit-card" />
                          </div>
                          <div class="item-meta">
                            <span>Payments</span>
                          </div>
                        </div>
                        <div class="icon-list-item">
                          <div class="icon-wrap">
                            <Icon icon="feather:clock" />
                          </div>
                          <div class="item-meta">
                            <span>History</span>
                          </div>
                        </div>
                        <div class="icon-list-item">
                          <div class="icon-wrap">
                            <Icon icon="feather:file" />
                          </div>
                          <div class="item-meta">
                            <span>Invoices</span>
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
      </div>
    </div>
  </WebappLayout>
</template>
