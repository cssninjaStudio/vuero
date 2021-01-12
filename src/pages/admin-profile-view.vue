<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Profile View - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="user-profile"
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
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
              <h1 class="title is-4">User Profile</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--User profile-->
            <div class="profile-wrapper">
              <div class="profile-header has-text-centered">
                <div class="h-avatar is-xl">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <img
                    class="badge"
                    src="/@images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <h3 class="title is-4 is-narrow is-thin">Erik Kovalsky</h3>
                <p class="light-text">
                  Hey everyone, Iam a product manager from New York and Iam
                  looking for new opportunities in the software business.
                </p>
                <div class="profile-stats">
                  <div class="profile-stat">
                    <i class="lnil lnil-users-alt"></i>
                    <span>500+ Relations</span>
                  </div>
                  <div class="separator"></div>
                  <div class="profile-stat">
                    <i class="lnil lnil-checkmark-circle"></i>
                    <span>78 Projects</span>
                  </div>
                  <div class="separator"></div>
                  <div class="socials">
                    <a><i class="fab fa-facebook-f"></i></a>
                    <a><i class="fab fa-twitter"></i></a>
                    <a><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>

              <div class="profile-body">
                <div class="columns">
                  <div class="column is-8">
                    <div class="profile-card">
                      <div class="profile-card-section">
                        <div class="section-title">
                          <h4>About Me</h4>
                          <RouterLink :to="{ name: 'admin-profile-edit-1' }"
                            ><i class="lnil lnil-pencil"></i
                          ></RouterLink>
                        </div>
                        <div class="section-content">
                          <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Falli igitur possumus. Praeteritis, inquit,
                            gaudeo. Duo Reges: constructio interrete. Idemne,
                            quod iucunde? Quis enim redargueret? Non semper,
                            inquam; Quid nunc honeste dicit? Eam tum adesse, cum
                            dolor omnis absit; Negat enim summo bono afferre
                            incrementum diem.
                          </p>
                        </div>
                      </div>
                      <div class="profile-card-section">
                        <div class="section-title">
                          <h4>Experience</h4>
                          <a><i class="lnil lnil-pencil"></i></a>
                        </div>
                        <div class="section-content">
                          <div class="experience-wrapper">
                            <div class="experience-item">
                              <img
                                src="/@images/photo/demo/brands/airbnb.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <div class="meta">
                                <span class="dark-inverted">Airbnb HQ</span>
                                <span>
                                  <span>January 2018</span>
                                  <Icon icon="fa-circle" />
                                  <span>October 2020</span>
                                </span>
                                <span>Product Manager</span>
                              </div>
                            </div>
                            <div class="experience-item">
                              <img
                                src="/@images/photo/demo/brands/facebook.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <div class="meta">
                                <span class="dark-inverted">Facebook</span>
                                <span>
                                  <span>January 2018</span>
                                  <Icon icon="fa-circle" />
                                  <span>October 2020</span>
                                </span>
                                <span>Product Manager</span>
                              </div>
                            </div>
                            <div class="experience-item">
                              <img
                                src="/@images/photo/demo/brands/atlassian.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <div class="meta">
                                <span class="dark-inverted">Atlassian</span>
                                <span>
                                  <span>January 2018</span>
                                  <Icon icon="fa-circle" />
                                  <span>October 2020</span>
                                </span>
                                <span>Web Developer</span>
                              </div>
                            </div>
                            <div class="experience-item">
                              <img
                                src="/@images/photo/demo/brands/github.svg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <div class="meta">
                                <span class="dark-inverted">Github</span>
                                <span>
                                  <span>January 2018</span>
                                  <Icon icon="fa-circle" />
                                  <span>October 2020</span>
                                </span>
                                <span>Web Developer</span>
                              </div>
                            </div>
                          </div>
                          <div class="more-button has-text-centered">
                            <a class="button h-button is-light">View More</a>
                          </div>
                        </div>
                      </div>
                      <div class="profile-card-section">
                        <div class="section-title">
                          <h4>Languages</h4>
                          <RouterLink :to="{ name: 'admin-profile-edit-2' }"
                            ><i class="lnil lnil-pencil"></i
                          ></RouterLink>
                        </div>
                        <div class="section-content">
                          <div class="languages-wrapper">
                            <div class="languages-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/icons/flags/united-states-of-america.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <span class="languages-donut">100/100</span>
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">English</span>
                                <span>Native Speaker, fluent</span>
                              </div>
                            </div>
                            <div class="languages-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/icons/flags/france.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <span class="languages-donut">80/100</span>
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">French</span>
                                <span>Fluent, written and spoken</span>
                              </div>
                            </div>
                            <div class="languages-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/icons/flags/germany.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <span class="languages-donut">30/100</span>
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">German</span>
                                <span>Beginner level</span>
                              </div>
                            </div>
                            <div class="languages-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/icons/flags/spain.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <span class="languages-donut">40/100</span>
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">Spanish</span>
                                <span>Beginner level</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!--Skills-->
                      <div class="profile-card-section">
                        <div class="section-title">
                          <h4>Skills</h4>
                          <RouterLink :to="{ name: 'admin-profile-edit-2' }"
                            ><i class="lnil lnil-pencil"></i
                          ></RouterLink>
                        </div>
                        <div class="section-content">
                          <div class="skills-wrapper">
                            <!--Skill-->
                            <div class="skills-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/icons/stacks/js.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="skill-info">
                                <span class="dark-inverted">Javascript</span>
                                <span>7 years of experience</span>
                              </div>
                              <div class="people">
                                <div class="h-avatar is-small">
                                  <span
                                    class="avatar is-fake is-warning"
                                    data-user-popover="36"
                                  >
                                    <span>BT</span>
                                  </span>
                                </div>
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/18.jpg"
                                    alt=""
                                    data-user-popover="7"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <span
                                    class="avatar is-fake is-info"
                                    data-user-popover="34"
                                  >
                                    <span>JD</span>
                                  </span>
                                </div>
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/7.jpg"
                                    alt=""
                                    data-user-popover="0"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <span class="avatar is-fake">
                                    <span>38</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <!--Skill-->
                            <div class="skills-item">
                              <div class="icon-wrap has-icon">
                                <i class="lnil lnil-burger-alt"></i>
                              </div>
                              <div class="skill-info">
                                <span class="dark-inverted"
                                  >Product Management</span
                                >
                                <span>4 years of experience</span>
                              </div>
                              <div class="people">
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/21.jpg"
                                    alt=""
                                    data-user-popover="19"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <span
                                    class="avatar is-fake is-success"
                                    data-user-popover="37"
                                  >
                                    <span>AT</span>
                                  </span>
                                </div>
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/39.jpg"
                                    alt=""
                                    data-user-popover="33"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/23.jpg"
                                    alt=""
                                    data-user-popover="21"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <span class="avatar is-fake">
                                    <span>27</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <!--Skill-->
                            <div class="skills-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/icons/stacks/html5.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="skill-info">
                                <span class="dark-inverted">Html 5</span>
                                <span>10+ years of experience</span>
                              </div>
                              <div class="people">
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/38.jpg"
                                    alt=""
                                    data-user-popover="32"
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
                                    data-user-popover="13"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <span
                                    class="avatar is-fake is-h-purple"
                                    data-user-popover="35"
                                  >
                                    <span>SC</span>
                                  </span>
                                </div>
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/13.jpg"
                                    alt=""
                                    data-user-popover="6"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <span class="avatar is-fake">
                                    <span>19</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <!--Skill-->
                            <div class="skills-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/icons/stacks/css3.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="skill-info">
                                <span class="dark-inverted">CSS 3</span>
                                <span>10+ years of experience</span>
                              </div>
                              <div class="people">
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/21.jpg"
                                    alt=""
                                    data-user-popover="19"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <span
                                    class="avatar is-fake is-h-purple"
                                    data-user-popover="35"
                                  >
                                    <span>SC</span>
                                  </span>
                                </div>
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/5.jpg"
                                    alt=""
                                    data-user-popover="9"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/7.jpg"
                                    alt=""
                                    data-user-popover="0"
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                                <div class="h-avatar is-small">
                                  <span class="avatar is-fake">
                                    <span>31</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="more-button has-text-centered">
                            <a class="button h-button is-light">View More</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Recommendations-->
                    <div class="profile-card">
                      <div class="profile-card-section no-padding">
                        <div class="section-title">
                          <h4>Recommendations</h4>
                          <a><i class="lnil lnil-pencil"></i></a>
                          <a class="action-link">View All</a>
                        </div>
                        <div class="section-content">
                          <div class="recommendations-wrapper">
                            <!--Recommendation-->
                            <div class="recommendations-item">
                              <div class="h-avatar is-large">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/5.jpg"
                                  alt=""
                                  data-user-popover="9"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/flags/united-states-of-america.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <h3 class="dark-inverted">Project Manager</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. At multis malis affectus.
                                Certe, nisi voluptatem tanti aestimaretis.
                              </p>
                              <div class="meta">
                                <span>Mary L.</span>
                                <span>September 3, 2020</span>
                              </div>
                            </div>

                            <!--Recommendation-->
                            <div class="recommendations-item">
                              <div class="h-avatar is-large">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/18.jpg"
                                  alt=""
                                  data-user-popover="7"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/flags/united-states-of-america.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <h3 class="dark-inverted">UI/UX Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. At multis malis affectus.
                                Certe, nisi voluptatem tanti aestimaretis.
                              </p>
                              <div class="meta">
                                <span>Esteban C.</span>
                                <span>September 9, 2020</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <!--Notifications-->
                    <div class="profile-card">
                      <div class="profile-card-section no-padding">
                        <div class="section-title">
                          <h4>Notifications</h4>
                          <div class="control">
                            <label class="form-switch is-success">
                              <input
                                type="checkbox"
                                class="is-switch"
                                checked
                              />
                              <i></i>
                            </label>
                          </div>
                        </div>
                        <div class="section-content">
                          <div class="network-notifications">
                            <h3 class="dark-inverted">Notify Your Network?</h3>
                            <p>
                              Enable or disable this setting to manage if your
                              network should be notified when you make changes
                              to your profile.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Tools-->
                    <div class="profile-card">
                      <div class="profile-card-section no-padding">
                        <div class="section-title">
                          <h4>Tools</h4>
                          <RouterLink :to="{ name: 'admin-profile-edit-2' }"
                            ><i class="lnil lnil-pencil"></i
                          ></RouterLink>
                          <a class="action-link">View All</a>
                        </div>
                        <div class="section-content">
                          <div class="tools-wrapper">
                            <!--Tool-->
                            <div class="tools-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/icons/stacks/illustrator.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <span class="languages-donut">80/100</span>
                              </div>
                              <div class="meta">
                                <span class="dark-inverted"
                                  >Adobe Illustrator</span
                                >
                                <span>Advanced level</span>
                              </div>
                            </div>

                            <!--Tool-->
                            <div class="tools-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/photo/demo/brands/jira.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <span class="languages-donut">60/100</span>
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">Jira Software</span>
                                <span>Intermediate level</span>
                              </div>
                            </div>

                            <!--Tool-->
                            <div class="tools-item">
                              <div class="icon-wrap">
                                <img
                                  src="/@images/photo/demo/brands/office.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <span class="languages-donut">95/100</span>
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">MS Office</span>
                                <span>Expert level</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Recent Views-->
                    <div class="profile-card">
                      <div class="profile-card-section no-padding">
                        <div class="section-title">
                          <h4>Recent Views</h4>
                          <a class="action-link">View All</a>
                        </div>
                        <div class="section-content">
                          <div class="people-wrapper">
                            <!--People-->
                            <a href="#" class="people-item">
                              <div class="h-avatar">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/25.jpg"
                                  alt=""
                                  data-user-popover="4"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/stacks/js.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">Melany W.</span>
                                <span>Web Developer</span>
                              </div>
                            </a>

                            <!--People-->
                            <a href="#" class="people-item">
                              <div class="h-avatar">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/29.jpg"
                                  alt=""
                                  data-user-popover="25"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/stacks/python.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">Hakeem C.</span>
                                <span>Web Developer</span>
                              </div>
                            </a>

                            <!--People-->
                            <a href="#" class="people-item">
                              <div class="h-avatar">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/38.jpg"
                                  alt=""
                                  data-user-popover="32"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/stacks/vuejs.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">Christie D.</span>
                                <span>Web Developer</span>
                              </div>
                            </a>

                            <!--People-->
                            <a href="#" class="people-item">
                              <div class="h-avatar">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/28.jpg"
                                  alt=""
                                  data-user-popover="24"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/stacks/angular.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">Edouard F.</span>
                                <span>Software Engineer</span>
                              </div>
                            </a>

                            <!--People-->
                            <a href="#" class="people-item">
                              <div class="h-avatar">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/photos/19.jpg"
                                  alt=""
                                  data-user-popover="17"
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/flags/germany.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <div class="meta">
                                <span class="dark-inverted">Greta K.</span>
                                <span>Sales Manager</span>
                              </div>
                            </a>
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
  </DefaultLayout>
</template>
