<script setup lang="ts">
import { ref } from 'vue'
import { completionOptions } from '/@src/composition/state/charts/apexcharts/examples/taskCompletionChart'
import { barOptions } from '/@src/composition/state/charts/apexcharts/examples/teamEfficiencyChart'

const democheck1 = ref(false)
const democheck2 = ref(true)
const democheck3 = ref(false)
const democheck4 = ref(false)
</script>

<template>
  <!--Personal Dashboard V2-->
  <div class="personal-dashboard personal-dashboard-v2">
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="dashboard-header">
          <div class="v-avatar is-xl">
            <img
              class="avatar"
              src="/images/avatars/photos/8.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/united-states-of-america.svg"
              alt=""
            />
          </div>
          <div class="user-meta is-dark-bordered-12">
            <h3 class="title is-4 is-narrow is-bold">Welcome back, Erik K.</h3>
            <p class="light-text">It's really nice to see you again</p>
          </div>
          <div class="user-action">
            <h3 class="title is-2 is-narrow">3</h3>
            <p class="light-text">Tasks are pending review</p>
            <a class="action-link">View Tasks</a>
          </div>
          <div class="cta h-hidden-tablet-p">
            <div class="media-flex inverted-text">
              <i class="lnil lnil-crown-alt-1"></i>
              <p class="white-text">
                Start using our team and project management tools
              </p>
            </div>
            <a class="link inverted-text">Learn More</a>
          </div>
        </div>
      </div>

      <div class="column is-8">
        <div class="dashboard-card has-margin-bottom">
          <div class="card-head">
            <h3 class="dark-inverted">Active Projects</h3>
            <a class="action-link">View All</a>
          </div>
          <div class="active-projects">
            <!--Project-->
            <div class="media-flex-center">
              <div class="v-avatar is-medium">
                <img
                  class="avatar is-squared"
                  src="/images/photo/demo/apps/1.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <img
                  class="badge"
                  src="/images/icons/stacks/illustrator.svg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span class="dark-text dark-inverted"
                  >Delivery App Project</span
                >
                <span class="light-text">Updated 30m ago</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/18.jpg"
                      alt=""
                      data-user-popover="7"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/16.jpg"
                      alt=""
                      data-user-popover="16"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/23.jpg"
                      alt=""
                      data-user-popover="21"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>

                <V-Dropdown dots right spaced classes="end-action">
                  <template #button="{ open }">
                    <button class="is-trigger" @click="open">
                      <i class="iconify" data-icon="feather:more-vertical"></i>
                    </button>
                  </template>

                  <template #content>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-whiteboard-alt-2"></i>
                      </div>
                      <div class="meta">
                        <span>View</span>
                        <span>View project board</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-pencil"></i>
                      </div>
                      <div class="meta">
                        <span>Edit</span>
                        <span>Edit project</span>
                      </div>
                    </a>
                    <hr class="dropdown-divider" />
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-checkmark-circle"></i>
                      </div>
                      <div class="meta">
                        <span>Tasks</span>
                        <span>View pending tasks</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-hierchy-alt"></i>
                      </div>
                      <div class="meta">
                        <span>Team</span>
                        <span>View project team</span>
                      </div>
                    </a>
                  </template>
                </V-Dropdown>
              </div>
            </div>
            <!--Project-->
            <div class="media-flex-center">
              <div class="v-avatar is-medium">
                <img
                  class="avatar is-squared"
                  src="/images/photo/demo/apps/2.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <img
                  class="badge"
                  src="/images/icons/stacks/reactjs.svg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span class="dark-text dark-inverted"
                  >Health and Fitness Dashboard</span
                >
                <span class="light-text">Updated 5h ago</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/21.jpg"
                      alt=""
                      data-user-popover="19"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/32.jpg"
                      alt=""
                      data-user-popover="28"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>

                <V-Dropdown dots right spaced classes="end-action">
                  <template #button="{ open }">
                    <button class="is-trigger" @click="open">
                      <i class="iconify" data-icon="feather:more-vertical"></i>
                    </button>
                  </template>

                  <template #content>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-whiteboard-alt-2"></i>
                      </div>
                      <div class="meta">
                        <span>View</span>
                        <span>View project board</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-pencil"></i>
                      </div>
                      <div class="meta">
                        <span>Edit</span>
                        <span>Edit project</span>
                      </div>
                    </a>
                    <hr class="dropdown-divider" />
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-checkmark-circle"></i>
                      </div>
                      <div class="meta">
                        <span>Tasks</span>
                        <span>View pending tasks</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-hierchy-alt"></i>
                      </div>
                      <div class="meta">
                        <span>Team</span>
                        <span>View project team</span>
                      </div>
                    </a>
                  </template>
                </V-Dropdown>
              </div>
            </div>
            <!--Project-->
            <div class="media-flex-center">
              <div class="v-avatar is-medium">
                <img
                  class="avatar is-squared"
                  src="/images/photo/demo/apps/3.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <img
                  class="badge"
                  src="/images/icons/stacks/angular.svg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span class="dark-text dark-inverted"
                  >Learning Tracker Dashboard</span
                >
                <span class="light-text">Updated 7h ago</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="v-avatar is-small">
                    <div
                      class="avatar is-fake is-success"
                      data-user-popover="38"
                    >
                      <span>NL</span>
                    </div>
                  </div>
                </div>

                <V-Dropdown dots right spaced classes="end-action">
                  <template #button="{ open }">
                    <button class="is-trigger" @click="open">
                      <i class="iconify" data-icon="feather:more-vertical"></i>
                    </button>
                  </template>

                  <template #content>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-whiteboard-alt-2"></i>
                      </div>
                      <div class="meta">
                        <span>View</span>
                        <span>View project board</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-pencil"></i>
                      </div>
                      <div class="meta">
                        <span>Edit</span>
                        <span>Edit project</span>
                      </div>
                    </a>
                    <hr class="dropdown-divider" />
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-checkmark-circle"></i>
                      </div>
                      <div class="meta">
                        <span>Tasks</span>
                        <span>View pending tasks</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-hierchy-alt"></i>
                      </div>
                      <div class="meta">
                        <span>Team</span>
                        <span>View project team</span>
                      </div>
                    </a>
                  </template>
                </V-Dropdown>
              </div>
            </div>
            <!--Project-->
            <div class="media-flex-center">
              <div class="v-avatar is-medium">
                <img
                  class="avatar is-squared"
                  src="/images/photo/demo/apps/4.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <img
                  class="badge"
                  src="/images/icons/stacks/js.svg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span class="dark-text dark-inverted"
                  >Banking App Dashboard</span
                >
                <span class="light-text">Updated 10h ago</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/13.jpg"
                      alt=""
                      data-user-popover="6"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/25.jpg"
                      alt=""
                      data-user-popover="4"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/38.jpg"
                      alt=""
                      data-user-popover="32"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>

                <V-Dropdown dots right spaced classes="end-action">
                  <template #button="{ open }">
                    <button class="is-trigger" @click="open">
                      <i class="iconify" data-icon="feather:more-vertical"></i>
                    </button>
                  </template>

                  <template #content>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-whiteboard-alt-2"></i>
                      </div>
                      <div class="meta">
                        <span>View</span>
                        <span>View project board</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-pencil"></i>
                      </div>
                      <div class="meta">
                        <span>Edit</span>
                        <span>Edit project</span>
                      </div>
                    </a>
                    <hr class="dropdown-divider" />
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-checkmark-circle"></i>
                      </div>
                      <div class="meta">
                        <span>Tasks</span>
                        <span>View pending tasks</span>
                      </div>
                    </a>
                    <a href="#" class="dropdown-item is-media">
                      <div class="icon">
                        <i class="lnil lnil-hierchy-alt"></i>
                      </div>
                      <div class="meta">
                        <span>Team</span>
                        <span>View project team</span>
                      </div>
                    </a>
                  </template>
                </V-Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">Task Completion</h3>
            <a class="action-link">Reports</a>
          </div>
          <apexchart
            id="completion-chart"
            :height="completionOptions.chart.height"
            :type="completionOptions.chart.type"
            :series="completionOptions.series"
            :options="completionOptions"
          ></apexchart>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">Team Efficiency</h3>
            <a class="action-link">Reports</a>
          </div>
          <apexchart
            id="efficiency-chart"
            :height="barOptions.chart.height"
            :type="barOptions.chart.type"
            :series="barOptions.series"
            :options="barOptions"
          ></apexchart>
        </div>
      </div>

      <div class="column is-4">
        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">My Team</h3>
            <a class="action-link">View All</a>
          </div>
          <div class="active-team">
            <ul class="user-list">
              <li>
                <div class="v-avatar">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/18.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Esteban C.</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i class="fas fa-phone"></i></a>
                  <a><i class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div class="v-avatar">
                  <div
                    class="avatar is-fake is-h-orange"
                    data-user-popover="35"
                  >
                    <span>SC</span>
                  </div>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Sara Connor</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i class="fas fa-phone"></i></a>
                  <a><i class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div class="v-avatar">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/13.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Tara S.</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i class="fas fa-phone"></i></a>
                  <a><i class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div class="v-avatar">
                  <div class="avatar is-fake is-success" data-user-popover="38">
                    <span>NL</span>
                  </div>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Naomi Liversky</div>
                  <div class="position">Frontend developer</div>
                </div>
                <div class="user-list-icons">
                  <a><i class="fas fa-phone"></i></a>
                  <a><i class="fas fa-video"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">Todo Today</h3>
            <a class="action-link">View All</a>
          </div>
          <div class="active-list">
            <div class="checkboxes-list">
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <AnimatedCheckbox v-model:checked="democheck1" />
                <div class="item-meta">
                  <span class="dark-inverted">Call Mr. Markstrom</span>
                  <span>Review the project initial wireframes</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <AnimatedCheckbox v-model:checked="democheck2" />
                <div class="item-meta">
                  <span class="dark-inverted">Finish wireframes</span>
                  <span>Make all requested changes and publish</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <AnimatedCheckbox v-model:checked="democheck3" />
                <div class="item-meta">
                  <span class="dark-inverted">Update timesheets</span>
                  <span>Update all the team timesheets</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <AnimatedCheckbox v-model:checked="democheck4" />
                <div class="item-meta">
                  <span class="dark-inverted">Request payout</span>
                  <span>send project invoice to client</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="section-placeholder">
            <div class="placeholder-content">
              <img
                class="light-image"
                src="/images/illustrations/placeholders/chart-guy.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/images/illustrations/placeholders/chart-guy-dark.svg"
                alt=""
              />
              <h3 class="dark-inverted">Go Premium</h3>
              <p>Unlock more features and business tools by going premium</p>
              <a class="button v-button is-primary is-elevated">Go Premium</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';

.personal-dashboard-v2 {
  .dashboard-header {
    @include vuero-s-card();

    display: flex;
    align-items: center;
    padding: 30px;

    .user-meta {
      padding: 0 3rem;
      border-right: 1px solid darken($fade-grey, 3%);

      h3 {
        max-width: 180px;
      }
    }

    .user-action {
      padding: 0 3rem;
    }

    .cta {
      position: relative;
      flex-grow: 2;
      max-width: 275px;
      margin-left: auto;
      background: lighten($primary, 8%);
      padding: 20px;
      border-radius: 6px;
      box-shadow: $primary-box-shadow;

      .lnil,
      .lnir {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 4rem;
        opacity: 0.3;
      }

      .link {
        font-family: $font-alt;
        display: block;
        font-weight: 500;
        margin-top: 0.5rem;

        &:hover {
          color: $smoke-white;
          opacity: 0.6;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card();

    padding: 30px;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: $font-alt;
        font-size: 1rem;
        font-weight: 600;
        color: $dark-text;
        margin-bottom: 0;
      }
    }

    .active-projects,
    .active-team,
    .active-list {
      padding: 10px 0;
    }
  }
}

body {
  &.is-dark {
    .personal-dashboard-v2 {
      .dashboard-header,
      .dashboard-card {
        @include vuero-card--dark();
      }

      .home-header {
        .cta {
          background: lighten($accent, 2%);
          box-shadow: $accent-box-shadow;
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .personal-dashboard-v2 {
    .dashboard-header {
      flex-direction: column;
      text-align: center;

      .v-avatar {
        margin-bottom: 10px;
      }

      .user-meta {
        padding-top: 10px;
        padding-bottom: 10px;
        border: none;
      }

      .user-action {
        padding-bottom: 30px;
      }

      .cta {
        margin-left: 0;
      }
    }

    .active-projects {
      .media-flex-center {
        .flex-end {
          .avatar-stack {
            display: none;
          }
        }
      }
    }
  }
}
</style>
