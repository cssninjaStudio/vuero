<script setup lang="ts">
import { ref } from 'vue'
import { activePanel } from '/@src/state/activePanelState'

type TabId = 'team' | 'projects' | 'schedule'
const activeTab = ref<TabId>('team')
</script>

<template>
  <div
    id="activity-panel"
    :class="[activePanel === 'activity' && 'is-active']"
    class="right-panel-wrapper is-activity"
  >
    <div class="panel-overlay" @click="activePanel = 'none'"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <h3>Activity</h3>
        <a class="close-panel" @click="activePanel = 'none'">
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="feather:chevron-right"
          ></i>
        </a>
      </div>
      <div class="tabs-wrapper is-triple-slider is-squared">
        <div class="tabs-inner">
          <div class="tabs">
            <ul>
              <li :class="[activeTab === 'team' && 'is-active']">
                <a @click="activeTab = 'team'"><span>Team</span></a>
              </li>
              <li :class="[activeTab === 'projects' && 'is-active']">
                <a @click="activeTab = 'projects'"><span>Projects</span></a>
              </li>
              <li :class="[activeTab === 'schedule' && 'is-active']">
                <a @click="activeTab = 'schedule'"><span>Schedule</span></a>
              </li>
              <li class="tab-naver"></li>
            </ul>
          </div>
        </div>

        <div class="right-panel-body">
          <div
            id="team-side-tab"
            class="tab-content"
            :class="[activeTab === 'team' && 'is-active']"
          >
            <!--Team Member-->
            <div class="team-card">
              <V-Avatar
                picture="/demo/avatars/12.jpg"
                badge="/images/icons/flags/united-states-of-america.svg"
              />

              <div class="meta">
                <span>Joshua S.</span>
                <span>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:map-pin"
                  ></i>
                  Las Vegas, NV
                </span>
              </div>
              <a class="link">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                ></i>
              </a>
            </div>

            <!--Team Member-->
            <div class="team-card">
              <V-Avatar
                picture="/demo/avatars/25.jpg"
                badge="/images/icons/flags/united-states-of-america.svg"
              />

              <div class="meta">
                <span>Melany W.</span>
                <span>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:map-pin"
                  ></i>
                  San Jose, CA
                </span>
              </div>
              <a class="link">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                ></i>
              </a>
            </div>

            <!--Team Member-->
            <div class="team-card">
              <V-Avatar
                picture="/demo/avatars/18.jpg"
                badge="/images/icons/flags/united-states-of-america.svg"
              />

              <div class="meta">
                <span>Esteban C.</span>
                <span>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:map-pin"
                  ></i>
                  Miami, FL
                </span>
              </div>
              <a class="link">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                ></i>
              </a>
            </div>

            <!--Team Member-->
            <div class="team-card">
              <V-Avatar
                picture="/demo/avatars/13.jpg"
                badge="/images/icons/flags/united-states-of-america.svg"
              />

              <div class="meta">
                <span>Tara S.</span>
                <span>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:map-pin"
                  ></i>
                  New York, NY
                </span>
              </div>
              <a class="link">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                ></i>
              </a>
            </div>
          </div>

          <div
            id="projects-side-tab"
            class="tab-content"
            :class="[activeTab === 'projects' && 'is-active']"
          >
            <!--Project-->
            <div class="project-card">
              <div class="project-inner">
                <img
                  class="project-avatar"
                  src="/images/icons/logos/slicer.svg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <div class="meta">
                  <span>The slicer project</span>
                  <span>getslicer.io</span>
                </div>
                <a class="link">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:arrow-right"
                  ></i>
                </a>
              </div>
              <div class="project-foot">
                <progress
                  class="progress is-primary is-tiny"
                  value="31"
                  max="100"
                >
                  31%
                </progress>
                <div class="foot-stats">
                  <span>5 / 24</span>

                  <div class="avatar-stack">
                    <V-Avatar size="small" picture="/demo/avatars/5.jpg" />
                    <V-Avatar size="small" picture="/demo/avatars/7.jpg" />
                    <V-Avatar size="small" picture="/demo/avatars/8.jpg" />
                  </div>
                </div>
              </div>
            </div>

            <!--Project-->
            <div class="project-card">
              <div class="project-inner">
                <img
                  class="project-avatar"
                  src="/images/icons/logos/metamovies.svg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <div class="meta">
                  <span>Metamovies reworked</span>
                  <span>metamovies.co</span>
                </div>
                <a class="link">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:arrow-right"
                  ></i>
                </a>
              </div>
              <div class="project-foot">
                <progress
                  class="progress is-primary is-tiny"
                  value="84"
                  max="100"
                >
                  84%
                </progress>
                <div class="foot-stats">
                  <span>28 / 31</span>

                  <div class="avatar-stack">
                    <V-Avatar size="small" picture="/demo/avatars/13.jpg" />
                    <V-Avatar size="small" picture="/demo/avatars/18.jpg" />
                  </div>
                </div>
              </div>
            </div>

            <!--Project-->
            <div class="project-card">
              <div class="project-inner">
                <img
                  class="project-avatar"
                  src="/images/icons/logos/fastpizza.svg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <div class="meta">
                  <span>Fast Pizza redesign</span>
                  <span>fastpizza.com</span>
                </div>
                <a class="link">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:arrow-right"
                  ></i>
                </a>
              </div>
              <div class="project-foot">
                <progress
                  class="progress is-primary is-tiny"
                  value="60"
                  max="100"
                >
                  60%
                </progress>
                <div class="foot-stats">
                  <span>25 / 39</span>

                  <div class="avatar-stack">
                    <V-Avatar size="small" picture="/demo/avatars/7.jpg" />
                    <V-Avatar size="small" picture="/demo/avatars/25.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="schedule-side-tab"
            class="tab-content"
            :class="[activeTab === 'schedule' && 'is-active']"
          >
            <!--Timeline-->
            <div class="icon-timeline">
              <!--Timeline item-->
              <div class="timeline-item">
                <div class="timeline-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:phone-call"
                  ></i>
                </div>
                <div class="timeline-content">
                  <p>Call Danny at Colby's</p>
                  <span>Today - 11:30am</span>
                </div>
              </div>
              <!--Timeline item-->
              <div class="timeline-item">
                <div class="timeline-icon">
                  <img
                    class="avatar"
                    src="/demo/avatars/7.jpg"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="timeline-content">
                  <p>Meeting with Alice</p>
                  <span>Today - 01:00pm</span>
                </div>
              </div>
              <!--Timeline item-->
              <div class="timeline-item">
                <div class="timeline-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:message-circle"
                  ></i>
                </div>
                <div class="timeline-content">
                  <p>Answer Annie's message</p>
                  <span>Today - 01:45pm</span>
                </div>
              </div>
              <!--Timeline item-->
              <div class="timeline-item">
                <div class="timeline-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:mail"
                  ></i>
                </div>
                <div class="timeline-content">
                  <p>Send new campaign</p>
                  <span>Today - 02:30pm</span>
                </div>
              </div>
              <!--Timeline item-->
              <div class="timeline-item">
                <div class="timeline-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:smile"
                  ></i>
                </div>
                <div class="timeline-content">
                  <p>Project review</p>
                  <span>Today - 03:30pm</span>
                </div>
              </div>
              <!--Timeline item-->
              <div class="timeline-item">
                <div class="timeline-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:phone-call"
                  ></i>
                </div>
                <div class="timeline-content">
                  <p>Call Trisha Jackson</p>
                  <span>Today - 05:00pm</span>
                </div>
              </div>
              <!--Timeline item-->
              <div class="timeline-item">
                <div class="timeline-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:feather"
                  ></i>
                </div>
                <div class="timeline-content">
                  <p>Write proposal for Don</p>
                  <span>Today - 06:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/layout/_right-panel.scss';
</style>
