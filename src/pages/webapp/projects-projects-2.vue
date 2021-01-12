<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Projects Projects 2 - WebApp - Vuero')
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
            <div class="projects-toolbar">
              <div class="control has-icon">
                <input class="input" placeholder="Search..." />
                <div class="form-icon">
                  <Icon icon="feather:search" />
                </div>
              </div>

              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/7.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/9.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/12.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/25.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/22.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>

              <a class="button h-button is-primary is-raised is-bold">
                <span>New Project</span>
              </a>
            </div>

            <div class="all-projects-header">
              <div class="header-item">
                <div class="item-inner">
                  <i class="lnil lnil-analytics-alt-1"></i>
                  <span>147</span>
                  <p>Published projects</p>
                </div>
              </div>
              <div class="header-item">
                <div class="item-inner">
                  <i class="lnil lnil-target-alt-1"></i>
                  <span>1638</span>
                  <p>Completed Tasks</p>
                </div>
              </div>
              <div class="header-item">
                <div class="item-inner">
                  <i class="lnil lnil-pie-chart-alt"></i>
                  <span>88%</span>
                  <p>Team Performance</p>
                </div>
              </div>
              <div class="header-item">
                <div class="item-inner">
                  <i class="lnil lnil-leaf"></i>
                  <span>17</span>
                  <p>Team Members</p>
                </div>
              </div>
            </div>

            <div class="columns is-multiline projects-card-grid">
              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#118 Agios Inc. Rebranding</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-primary">
                            <span>FE</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-success">
                            <span>SD</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-info">
                            <span>NJ</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#117 Sweet Candy Website Updates</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-primary">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/7.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-success">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-danger">
                            <span>DC</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#116 Update our Design Plugin</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-primary">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/25.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#115 Refactor Chat App</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-primary">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/7.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-success">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/23.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#114 Develop a Marketing Website</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-primary">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/11.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-warning">
                            <span>AG</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#113 Develop a Landing Page</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-primary">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/12.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#112 Build a Social Mobile App</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-primary">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/24.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-success">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/18.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-success">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/16.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#111 Bulma Inc. Rebranding</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim adesse poterit. Duo Reges:
                        constructio interrete.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-info">
                            <span>ET</span>
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-warning">
                            <span>BH</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project-->
              <div class="column is-6">
                <div class="grid-item">
                  <div class="top-section">
                    <div class="head">
                      <h3>#110 Develop a Localisation Plugin</h3>
                      <!--Dropdown-->
                      <ProjectCardDropdown />
                    </div>
                    <div class="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Idem iste, inquam, de voluptate quid sentit? Itaque
                        contra est, ac dicitis; Quae cum essent dicta,
                        discessimus. Iam enim.
                      </p>
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="foot-block">
                      <h4 class="heading">Developers</h4>
                      <div class="developers">
                        <div class="h-avatar is-small">
                          <span class="avatar">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/25.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </span>
                        </div>
                        <div class="h-avatar is-small">
                          <span class="avatar is-fake is-info">
                            <span>ET</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Deadline</h4>
                      <p>Aug 7 2020</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Budget</h4>
                      <p>$15,000</p>
                    </div>
                    <div class="foot-block">
                      <h4 class="heading">Status</h4>
                      <p>In Progress</p>
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
