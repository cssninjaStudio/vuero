<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Projects Project - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-project"
      class="view-wrapper is-webapp"
      data-page-title="Project"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Project</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner project-details is-webapp">
            <div class="tabs-wrapper is-triple-slider">
              <div class="tabs-inner">
                <div class="tabs">
                  <ul>
                    <li data-tab="project-tab" class="is-active">
                      <a><span>Project</span></a>
                    </li>
                    <li data-tab="team-tab">
                      <a><span>Team</span></a>
                    </li>
                    <li data-tab="tasks-tab">
                      <a><span>Tasks</span></a>
                    </li>
                    <li class="tab-naver"></li>
                  </ul>
                </div>
              </div>

              <div id="project-tab" class="tab-content is-active">
                <div class="columns project-details-inner">
                  <div class="column is-8">
                    <div class="project-details-card">
                      <div class="card-head">
                        <div class="title-wrap">
                          <h3>Brand and Website Redesign</h3>
                          <p>UI/UX Design</p>
                        </div>
                        <button class="button">
                          <span class="icon is-small">
                            <Icon icon="feather:edit-3" />
                          </span>
                        </button>
                      </div>

                      <div class="project-overview">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quid iudicant sensus? Primum quid tu dicis
                          breve? Etiam beatissimum? Ne discipulum abducam,
                          times.
                        </p>
                        <div class="avatar-stack">
                          <div class="h-avatar">
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
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/9.jpg"
                              alt=""
                              data-user-popover="1"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/12.jpg"
                              alt=""
                              data-user-popover="2"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="h-avatar">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/8.jpg"
                              alt=""
                              data-user-popover="3"
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
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
                          </div>
                          <div class="h-avatar">
                            <span class="avatar is-more">
                              <span class="inner">
                                <span>+3</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="project-features">
                        <div class="project-feature">
                          <i class="lnil lnil-vector-pen"></i>
                          <h4>UI/UX Design</h4>
                          <p>
                            Designing a perfect user experience is in the scope
                            of this project.
                          </p>
                        </div>
                        <div class="project-feature">
                          <i class="lnil lnil-alarm-clock"></i>
                          <h4>1 Week Sprints</h4>
                          <p>
                            This project development iterations follow a 1 week
                            sprint pattern.
                          </p>
                        </div>
                        <div class="project-feature">
                          <i class="lnil lnil-calendar"></i>
                          <h4>3 Months</h4>
                          <p>
                            This project and all related tasks should completed
                            within 3 months.
                          </p>
                        </div>
                        <div class="project-feature">
                          <i class="lnil lnil-diamond-alt"></i>
                          <h4>Fixed</h4>
                          <p>
                            This project's budget planning is based on an
                            imutable fixed bid.
                          </p>
                        </div>
                      </div>

                      <div class="project-files">
                        <h4>Recent Files</h4>
                        <div class="columns is-multiline">
                          <div class="column is-6">
                            <div class="file-box">
                              <img
                                src="/@images/icons/files/zip-format.svg"
                                alt=""
                              />
                              <div class="meta">
                                <span>Preliminary Sketches</span>
                                <span
                                  >3MB <Icon icon="fa-circle" /> 5 days
                                  ago</span
                                >
                              </div>
                              <FileCardDropdown />
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="file-box">
                              <img src="/@images/icons/files/pdf.svg" alt="" />
                              <div class="meta">
                                <span>Project Scope</span>
                                <span
                                  >0.8MB <Icon icon="fa-circle" /> 7 days
                                  ago</span
                                >
                              </div>
                              <FileCardDropdown />
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="file-box">
                              <img
                                src="/@images/icons/files/presentation.svg"
                                alt=""
                              />
                              <div class="meta">
                                <span>Project Presentation</span>
                                <span
                                  >2.4MB <Icon icon="fa-circle" /> 7 days
                                  ago</span
                                >
                              </div>
                              <FileCardDropdown />
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="file-box">
                              <img
                                src="/@images/icons/files/sheet.svg"
                                alt=""
                              />
                              <div class="meta">
                                <span>Project Budget</span>
                                <span
                                  >0.6MB <Icon icon="fa-circle" /> 8 days
                                  ago</span
                                >
                              </div>
                              <FileCardDropdown />
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="file-box">
                              <img src="/@images/icons/files/doc.svg" alt="" />
                              <div class="meta">
                                <span>Project Notes</span>
                                <span
                                  >0.4MB <Icon icon="fa-circle" /> 8 days
                                  ago</span
                                >
                              </div>
                              <FileCardDropdown />
                            </div>
                          </div>
                          <div class="column is-6">
                            <div class="file-box">
                              <img
                                src="/@images/icons/files/video.svg"
                                alt=""
                              />
                              <div class="meta">
                                <span>POC Demo</span>
                                <span
                                  >8.75MB <Icon icon="fa-circle" /> 8 days
                                  ago</span
                                >
                              </div>
                              <FileCardDropdown />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="column is-4">
                    <div class="side-card">
                      <h4>Project Tools</h4>

                      <div class="media-flex-center">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/icons/stacks/sketch.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>Sketch</span>
                          <span>Design Software</span>
                        </div>
                      </div>
                      <div class="media-flex-center">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/icons/stacks/illustrator.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>Illustrator</span>
                          <span>Design Software</span>
                        </div>
                      </div>
                      <div class="media-flex-center">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/icons/stacks/photoshop.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>Photoshop</span>
                          <span>Design Software</span>
                        </div>
                      </div>
                    </div>

                    <div class="side-card">
                      <h4>Project Stacks</h4>

                      <div class="media-flex-center">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/icons/stacks/html5.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>Html5</span>
                          <span>Hypertext Markup</span>
                        </div>
                      </div>
                      <div class="media-flex-center">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/icons/stacks/css3.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>CSS3</span>
                          <span>Cascading Stylesheets</span>
                        </div>
                      </div>
                      <div class="media-flex-center">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/icons/stacks/vuejs.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>VueJS</span>
                          <span>Javascript Framework</span>
                        </div>
                      </div>
                    </div>

                    <div class="side-card">
                      <h4>Customer</h4>

                      <div class="media-flex-center">
                        <div class="h-avatar is-small">
                          <img
                            class="avatar"
                            src="/@images/illustrations/dashboards/flights/company1.svg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                        </div>
                        <div class="flex-meta">
                          <span>VFlights</span>
                          <span>Transportation company</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Project Team-->
              <div id="team-tab" class="tab-content">
                <div class="project-details-inner">
                  <div class="project-team-card">
                    <div class="columns is-multiline">
                      <!--Team Member-->
                      <div class="column is-6 has-border-bottom">
                        <div class="media-flex-center">
                          <div class="h-avatar is-medium">
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
                          <div class="flex-meta">
                            <span>Alice C.</span>
                            <span>Software Engineer</span>
                          </div>
                          <div class="flex-end">
                            <TeamCardDropdown />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Si enim ad populum me vocas, eum. Quod cum
                          dixissent, ille contra. Cur id non ita fit? Duo Reges:
                          constructio interrete.
                        </p>
                      </div>
                      <!--Team Member-->
                      <div class="column is-6 has-border-bottom">
                        <div class="media-flex-center">
                          <div class="h-avatar is-medium">
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
                          <div class="flex-meta">
                            <span>Anna B.</span>
                            <span>UX Designer</span>
                          </div>
                          <div class="flex-end">
                            <TeamCardDropdown />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Si enim ad populum me vocas, eum. Quod cum
                          dixissent, ille contra. Cur id non ita fit? Duo Reges:
                          constructio interrete.
                        </p>
                      </div>
                      <!--Team Member-->
                      <div class="column is-6 has-border-bottom">
                        <div class="media-flex-center">
                          <div class="h-avatar is-medium">
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
                          <div class="flex-meta">
                            <span>Joshua S.</span>
                            <span>Backend Developer</span>
                          </div>
                          <div class="flex-end">
                            <TeamCardDropdown />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Si enim ad populum me vocas, eum. Quod cum
                          dixissent, ille contra. Cur id non ita fit? Duo Reges:
                          constructio interrete.
                        </p>
                      </div>
                      <!--Team Member-->
                      <div class="column is-6 has-border-bottom">
                        <div class="media-flex-center">
                          <div class="h-avatar is-medium">
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
                          <div class="flex-meta">
                            <span>Erik K.</span>
                            <span>Product Manager</span>
                          </div>
                          <div class="flex-end">
                            <TeamCardDropdown />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Si enim ad populum me vocas, eum. Quod cum
                          dixissent, ille contra. Cur id non ita fit? Duo Reges:
                          constructio interrete.
                        </p>
                      </div>
                      <!--Team Member-->
                      <div class="column is-6 has-border-bottom">
                        <div class="media-flex-center">
                          <div class="h-avatar is-medium">
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
                          <div class="flex-meta">
                            <span>Melany W.</span>
                            <span>Web Developer</span>
                          </div>
                          <div class="flex-end">
                            <TeamCardDropdown />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Si enim ad populum me vocas, eum. Quod cum
                          dixissent, ille contra. Cur id non ita fit? Duo Reges:
                          constructio interrete.
                        </p>
                      </div>
                      <!--Team Member-->
                      <div class="column is-6 has-border-bottom">
                        <div class="media-flex-center">
                          <div class="h-avatar is-medium">
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
                          <div class="flex-meta">
                            <span>Tara S.</span>
                            <span>UI/UX Designer</span>
                          </div>
                          <div class="flex-end">
                            <TeamCardDropdown />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Si enim ad populum me vocas, eum. Quod cum
                          dixissent, ille contra. Cur id non ita fit? Duo Reges:
                          constructio interrete.
                        </p>
                      </div>
                      <!--Team Member-->
                      <div class="column is-6">
                        <div class="media-flex-center">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/18.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Esteban C.</span>
                            <span>UI/UX Designer</span>
                          </div>
                          <div class="flex-end">
                            <TeamCardDropdown />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Si enim ad populum me vocas, eum. Quod cum
                          dixissent, ille contra. Cur id non ita fit? Duo Reges:
                          constructio interrete.
                        </p>
                      </div>
                      <!--Team Member-->
                      <div class="column is-6">
                        <div class="media-flex-center">
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar"
                              src="/@images/avatars/photos/5.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                          </div>
                          <div class="flex-meta">
                            <span>Mary L.</span>
                            <span>Project Manager</span>
                          </div>
                          <div class="flex-end">
                            <TeamCardDropdown />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Si enim ad populum me vocas, eum. Quod cum
                          dixissent, ille contra. Cur id non ita fit? Duo Reges:
                          constructio interrete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tasks-tab" class="tab-content">
                <div class="project-details-inner">
                  <div class="task-grid">
                    <div class="grid-header">
                      <h3>Tasks</h3>
                      <div class="filter">
                        <span>Filter by</span>
                        <div class="control">
                          <div class="h-select">
                            <div class="select-box">
                              <span>In Progress</span>
                            </div>
                            <div class="select-icon">
                              <Icon icon="feather:chevron-down" />
                            </div>
                            <div class="select-drop has-slimscroll-sm">
                              <div class="drop-inner">
                                <div class="option-row">
                                  <input type="radio" name="task_select" />
                                  <div class="option-meta">
                                    <span>New</span>
                                  </div>
                                </div>
                                <div class="option-row">
                                  <input
                                    type="radio"
                                    name="task_select"
                                    checked
                                  />
                                  <div class="option-meta">
                                    <span>In Progress</span>
                                  </div>
                                </div>
                                <div class="option-row">
                                  <input type="radio" name="task_select" />
                                  <div class="option-meta">
                                    <span>Closed</span>
                                  </div>
                                </div>
                                <div class="option-row">
                                  <input type="radio" name="task_select" />
                                  <div class="option-meta">
                                    <span>Archived</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="columns is-multiline">
                      <!--Task-->
                      <div class="column is-4">
                        <div
                          class="task-card right-panel-trigger"
                          data-panel="task-panel"
                        >
                          <a href="#" class="title-wrap">
                            <h3>
                              Build a desktop and mobile landing page wireframe
                            </h3>
                            <span>45%</span>
                          </a>
                          <div class="content-wrap">
                            <div class="left">
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
                                    src="/@images/avatars/photos/5.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                              </div>
                              <div class="attachments">
                                <i class="lnil lnil-paperclip"></i>
                                <span>3 attachments</span>
                              </div>
                            </div>
                            <div class="right">
                              <div
                                class="circle-chart-wrapper is-info"
                                data-completion="45"
                              >
                                <CircleChart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--Task-->
                      <div class="column is-4">
                        <div
                          class="task-card right-panel-trigger"
                          data-panel="task-panel"
                        >
                          <a href="#" class="title-wrap">
                            <h3>
                              Build a custom video player javascript library
                            </h3>
                            <span>90%</span>
                          </a>
                          <div class="content-wrap">
                            <div class="left">
                              <div class="avatar-stack">
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
                              </div>
                              <div class="attachments">
                                <i class="lnil lnil-paperclip"></i>
                                <span>1 attachment</span>
                              </div>
                            </div>
                            <div class="right">
                              <div
                                class="circle-chart-wrapper is-success"
                                data-completion="90"
                              >
                                <CircleChart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--Task-->
                      <div class="column is-4">
                        <div
                          class="task-card right-panel-trigger"
                          data-panel="task-panel"
                        >
                          <a href="#" class="title-wrap">
                            <h3>Develop a JWT authentication controller</h3>
                            <span>65%</span>
                          </a>
                          <div class="content-wrap">
                            <div class="left">
                              <div class="avatar-stack">
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
                              </div>
                              <div class="attachments">
                                <i class="lnil lnil-paperclip"></i>
                                <span>1 attachment</span>
                              </div>
                            </div>
                            <div class="right">
                              <div
                                class="circle-chart-wrapper is-danger"
                                data-completion="65"
                              >
                                <CircleChart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--Task-->
                      <div class="column is-4">
                        <div
                          class="task-card right-panel-trigger"
                          data-panel="task-panel"
                        >
                          <a href="#" class="title-wrap">
                            <h3>
                              Design custom illustrations for landing page
                            </h3>
                            <span>38%</span>
                          </a>
                          <div class="content-wrap">
                            <div class="left">
                              <div class="avatar-stack">
                                <div class="h-avatar is-small">
                                  <img
                                    class="avatar"
                                    src="/@images/avatars/photos/5.jpg"
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
                                    src="/@images/avatars/photos/7.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </div>
                              </div>
                              <div class="attachments">
                                <i class="lnil lnil-paperclip"></i>
                                <span>1 attachment</span>
                              </div>
                            </div>
                            <div class="right">
                              <div
                                class="circle-chart-wrapper is-warning"
                                data-completion="38"
                              >
                                <CircleChart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--Task-->
                      <div class="column is-4">
                        <div
                          class="task-card right-panel-trigger"
                          data-panel="task-panel"
                        >
                          <a href="#" class="title-wrap">
                            <h3>Implement sign up with social media</h3>
                            <span>59%</span>
                          </a>
                          <div class="content-wrap">
                            <div class="left">
                              <div class="avatar-stack">
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
                              </div>
                              <div class="attachments">
                                <i class="lnil lnil-paperclip"></i>
                                <span>2 attachments</span>
                              </div>
                            </div>
                            <div class="right">
                              <div
                                class="circle-chart-wrapper"
                                data-completion="59"
                              >
                                <CircleChart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--Task-->
                      <div class="column is-4">
                        <div
                          class="task-card right-panel-trigger"
                          data-panel="task-panel"
                        >
                          <a href="#" class="title-wrap">
                            <h3>Implement user management API controller</h3>
                            <span>78%</span>
                          </a>
                          <div class="content-wrap">
                            <div class="left">
                              <div class="avatar-stack">
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
                              </div>
                              <div class="attachments">
                                <i class="lnil lnil-paperclip"></i>
                                <span>3 attachments</span>
                              </div>
                            </div>
                            <div class="right">
                              <div
                                class="circle-chart-wrapper is-info"
                                data-completion="78"
                              >
                                <CircleChart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--Task-->
                      <div class="column is-4">
                        <div
                          class="task-card right-panel-trigger"
                          data-panel="task-panel"
                        >
                          <a href="#" class="title-wrap">
                            <h3>Implement job management API controller</h3>
                            <span>36%</span>
                          </a>
                          <div class="content-wrap">
                            <div class="left">
                              <div class="avatar-stack">
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
                              </div>
                              <div class="attachments">
                                <i class="lnil lnil-paperclip"></i>
                                <span>3 attachments</span>
                              </div>
                            </div>
                            <div class="right">
                              <div
                                class="circle-chart-wrapper is-success"
                                data-completion="36"
                              >
                                <CircleChart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--Task-->
                      <div class="column is-4">
                        <div
                          class="task-card right-panel-trigger"
                          data-panel="task-panel"
                        >
                          <a href="#" class="title-wrap">
                            <h3>Review and refactor server side code</h3>
                            <span>49%</span>
                          </a>
                          <div class="content-wrap">
                            <div class="left">
                              <div class="avatar-stack">
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
                              </div>
                              <div class="attachments">
                                <i class="lnil lnil-paperclip"></i>
                                <span>2 attachments</span>
                              </div>
                            </div>
                            <div class="right">
                              <div
                                class="circle-chart-wrapper is-danger"
                                data-completion="49"
                              >
                                <CircleChart />
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
      </div>
    </div>

    <TaskPanel />
  </WebappLayout>
</template>
