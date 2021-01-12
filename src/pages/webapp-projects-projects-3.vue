<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Projects Projects 3 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-projects"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Projects"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Projects</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner all-projects is-webapp">
            <div class="illustration-header">
              <img
                class="light-image"
                src="/@images/illustrations/projects/header.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@images/illustrations/projects/header-dark.svg"
                alt=""
              />
              <div class="header-stats">
                <div class="stats-inner">
                  <div class="stat-item">
                    <span class="is-success">12</span>
                    <p>In Progress</p>
                  </div>
                  <div class="stat-item">
                    <span class="is-warning">4</span>
                    <p>Blocked</p>
                  </div>
                  <div class="stat-item">
                    <span class="is-info">89</span>
                    <p>Shipped</p>
                  </div>
                  <div class="stat-item">
                    <span class="is-primary">141</span>
                    <p>Projects Total</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="recent-projects">
              <h3 class="recent-heading">Recent Projects</h3>

              <div class="columns">
                <div class="column is-4">
                  <a class="project-box">
                    <div
                      class="circle-chart-wrapper is-success"
                      data-completion="55"
                    >
                      <CircleChart />
                    </div>
                    <h3>Customer Management Dashboard</h3>
                  </a>
                </div>
                <div class="column is-4">
                  <a class="project-box">
                    <div
                      class="circle-chart-wrapper is-danger"
                      data-completion="80"
                    >
                      <CircleChart />
                    </div>
                    <h3>CandyBar Website and App Redesign</h3>
                  </a>
                </div>
                <div class="column is-4">
                  <a class="project-box">
                    <div
                      class="circle-chart-wrapper is-info"
                      data-completion="28"
                    >
                      <CircleChart />
                    </div>
                    <h3>Marketing and Investment Platform</h3>
                  </a>
                </div>
              </div>
            </div>

            <div class="project-minimal-grid">
              <div class="grid-header">
                <h3>Projects</h3>
                <div class="filter">
                  <span>Filter by</span>
                  <div class="control">
                    <div class="h-select">
                      <div class="select-box">
                        <span>Shipping Soon</span>
                      </div>
                      <div class="select-icon">
                        <Icon icon="feather:chevron-down" />
                      </div>
                      <div class="select-drop has-slimscroll-sm">
                        <div class="drop-inner">
                          <div class="option-row">
                            <input type="radio" name="hero_select" checked />
                            <div class="option-meta">
                              <span>Shipping Soon</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="hero_select" />
                            <div class="option-meta">
                              <span>In Progress</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="hero_select" />
                            <div class="option-meta">
                              <span>Blocked</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns is-multiline grid-body">
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">UI/UX Design</span>
                      <span class="status is-success">In Progress</span>
                    </div>
                    <div class="item-title">
                      <h3>Finance App Onboarding Revamp</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">Finance</span>
                        <span class="tag is-rounded is-solid">Marketing</span>
                        <span class="tag is-rounded is-solid">Payments</span>
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/13.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/11.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>

                        <span class="label">1 month left</span>
                      </div>
                    </div>
                  </a>
                </div>
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">Web Development</span>
                      <span class="status is-info">Shipping Soon</span>
                    </div>
                    <div class="item-title">
                      <h3>Ecommerce Website for Sunset Surfers</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">Sports</span>
                        <span class="tag is-rounded is-solid">Surf</span>
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/7.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/9.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/12.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/25.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <span class="avatar is-more">
                              <span class="inner">
                                <span>+3</span>
                              </span>
                            </span>
                          </div>
                        </div>

                        <span class="label">3 days left</span>
                      </div>
                    </div>
                  </a>
                </div>
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">Business</span>
                      <span class="status is-warning">Overdue</span>
                    </div>
                    <div class="item-title">
                      <h3>Business Model for Growing Startup</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">Business</span>
                        <span class="tag is-rounded is-solid">Startups</span>
                        <span class="tag is-rounded is-solid">Management</span>
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/14.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>

                        <span class="label">1 week left</span>
                      </div>
                    </div>
                  </a>
                </div>
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">Web Development</span>
                      <span class="status is-danger">Blocked</span>
                    </div>
                    <div class="item-title">
                      <h3>Build a Document Parser with React Hooks</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">Javascript</span>
                        <span class="tag is-rounded is-solid">Tesseract</span>
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/22.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/10.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/26.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>

                        <span class="label">2 months left</span>
                      </div>
                    </div>
                  </a>
                </div>
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">AI</span>
                      <span class="status is-success">In Progress</span>
                    </div>
                    <div class="item-title">
                      <h3>Stabilize AI Project and Consolidate Features</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">AI</span>
                        <span class="tag is-rounded is-solid"
                          >Machine Learning</span
                        >
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/13.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/11.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/22.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>

                        <span class="label">3 months left</span>
                      </div>
                    </div>
                  </a>
                </div>
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">UI/UX Design</span>
                      <span class="status is-success">In Progress</span>
                    </div>
                    <div class="item-title">
                      <h3>Rework BigBro Branding and Identity</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">Music</span>
                        <span class="tag is-rounded is-solid">Venue</span>
                        <span class="tag is-rounded is-solid">Urban</span>
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/13.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/11.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>

                        <span class="label">2 months left</span>
                      </div>
                    </div>
                  </a>
                </div>
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">UI/UX Design</span>
                      <span class="status is-success">In Progress</span>
                    </div>
                    <div class="item-title">
                      <h3>Customer Management Dashboard</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">Business</span>
                        <span class="tag is-rounded is-solid">Customers</span>
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/13.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/16.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/10.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/9.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>

                        <span class="label">2 months left</span>
                      </div>
                    </div>
                  </a>
                </div>
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">Web Development</span>
                      <span class="status is-danger">Blocked</span>
                    </div>
                    <div class="item-title">
                      <h3>CandyBar Website and App Redesign</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">Mobile</span>
                        <span class="tag is-rounded is-solid">Hybrid</span>
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/22.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/10.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/26.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>

                        <span class="label">5 days left</span>
                      </div>
                    </div>
                  </a>
                </div>
                <!--Project-->
                <div class="column is-4">
                  <a class="grid-item">
                    <div class="item-head">
                      <span class="type">Business</span>
                      <span class="status is-info">Shipping Soon</span>
                    </div>
                    <div class="item-title">
                      <h3>Marketing and Investment Platform</h3>
                      <div class="tags">
                        <span class="tag is-rounded is-solid">Business</span>
                        <span class="tag is-rounded is-solid">Finance</span>
                      </div>
                    </div>
                    <div class="item-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>

                      <div class="item-people">
                        <div class="avatar-stack">
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/14.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/16.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar is-small">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/10.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                        </div>

                        <span class="label">1 week left</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
