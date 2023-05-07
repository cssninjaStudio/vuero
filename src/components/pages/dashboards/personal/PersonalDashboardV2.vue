<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import { useTaskCompletionChart } from '/@src/data/dashboards/personal-v2/taskCompletionChart'
import { useTeamEfficiencyChart } from '/@src/data/dashboards/personal-v2/teamEfficiencyChart'
import { popovers } from '/@src/data/users/userPopovers'
import * as usersData from '/@src/data/dashboards/personal-v2/users'

const { completionOptions } = useTaskCompletionChart()
const { barOptions } = useTeamEfficiencyChart()
const avatarStack1 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack2 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack3 = usersData.avatarStack1 as VAvatarProps[]
const avatarStack4 = usersData.avatarStack1 as VAvatarProps[]

const democheck = ref(['value_2'])
</script>

<template>
  <div class="personal-dashboard personal-dashboard-v2">
    <!--Personal Dashboard V2-->
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="dashboard-header">
          <VAvatar
            picture="/images/avatars/svg/vuero-1.svg"
            badge="/images/icons/flags/united-states-of-america.svg"
            size="xl"
          />
          <div class="user-meta is-dark-bordered-12">
            <h3 class="title is-4 is-narrow is-bold">Welcome back, Erik K.</h3>
            <p class="light-text">It's really nice to see you again</p>
          </div>
          <div class="user-action">
            <h3 class="title is-2 is-narrow">3</h3>
            <p class="light-text">Tasks are pending review</p>
            <a class="action-link" tabindex="0">View Tasks</a>
          </div>
          <div class="cta h-hidden-tablet-p">
            <div class="media-flex inverted-text">
              <i aria-hidden="true" class="lnil lnil-crown-alt-1"></i>
              <p class="white-text">Start using our team and project management tools</p>
            </div>
            <a class="link inverted-text">Learn More</a>
          </div>
        </div>
      </div>

      <div class="column is-8">
        <div class="dashboard-card has-margin-bottom">
          <div class="card-head">
            <h3 class="dark-inverted">Active Projects</h3>
            <a class="action-link" tabindex="0">View All</a>
          </div>
          <div class="active-projects">
            <!--Project-->
            <VBlock title="Delivery App Project" subtitle="Updated 30m ago" center>
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/1.jpg"
                  badge="/images/icons/stacks/illustrator.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack :avatars="avatarStack1" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock title="Health and Fitness Dashboard" subtitle="Updated 5h ago" center>
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/2.png"
                  badge="/images/icons/stacks/reactjs.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack :avatars="avatarStack2" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock title="Learning Tracker Dashboard" subtitle="Updated 7h ago" center>
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/3.png"
                  badge="/images/icons/stacks/angular.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack :avatars="avatarStack3" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>

            <!--Project-->
            <VBlock title="Banking App Dashboard" subtitle="Updated 10h ago" center>
              <template #icon>
                <VAvatar
                  picture="/demo/photos/apps/4.png"
                  badge="/images/icons/stacks/js.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <VAvatarStack :avatars="avatarStack4" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </VBlock>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">Task Completion</h3>
            <a class="action-link" tabindex="0">Reports</a>
          </div>
          <ApexChart
            id="completion-chart"
            :height="completionOptions.chart.height"
            :type="completionOptions.chart.type"
            :series="completionOptions.series"
            :options="completionOptions"
          >
          </ApexChart>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">Team Efficiency</h3>
            <a class="action-link" tabindex="0">Reports</a>
          </div>
          <ApexChart
            id="efficiency-chart"
            :height="barOptions.chart.height"
            :type="barOptions.chart.type"
            :series="barOptions.series"
            :options="barOptions"
          >
          </ApexChart>
        </div>
      </div>

      <div class="column is-4">
        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">My Team</h3>
            <a class="action-link" tabindex="0">View All</a>
          </div>
          <div class="active-team">
            <ul class="user-list">
              <li>
                <div>
                  <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                    <VAvatar picture="/demo/avatars/18.jpg" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user18" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Esteban C.</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                    <VAvatar initials="SC" color="h-orange" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user120" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Sara Connor</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                    <VAvatar picture="/demo/avatars/13.jpg" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user13" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Tara S.</div>
                  <div class="position">UI/UX Designer</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
              <li>
                <div>
                  <Tippy class="has-help-cursor" interactive :offset="[0, 10]">
                    <VAvatar initials="NL" color="success" />
                    <template #content>
                      <UserPopoverContent :user="popovers.user121" />
                    </template>
                  </Tippy>
                </div>
                <div class="user-list-info">
                  <div class="name dark-inverted">Naomi Liversky</div>
                  <div class="position">Frontend developer</div>
                </div>
                <div class="user-list-icons">
                  <a><i aria-hidden="true" class="fas fa-phone"></i></a>
                  <a><i aria-hidden="true" class="fas fa-video"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">Todo Today</h3>
            <a class="action-link" tabindex="0">View All</a>
          </div>
          <div class="active-list">
            <div class="checkboxes-list">
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_1" />
                <div class="item-meta">
                  <span class="dark-inverted">Call Mr. Markstrom</span>
                  <span>Review the project initial wireframes</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_2" />
                <div class="item-meta">
                  <span class="dark-inverted">Finish wireframes</span>
                  <span>Make all requested changes and publish</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_3" />
                <div class="item-meta">
                  <span class="dark-inverted">Update timesheets</span>
                  <span>Update all the team timesheets</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <VAnimatedCheckbox v-model="democheck" value="value_4" />
                <div class="item-meta">
                  <span class="dark-inverted">Request payout</span>
                  <span>send project invoice to client</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <VPlaceholderSection
            title="Go Premium"
            subtitle="Unlock more features and business tools by going premium"
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/chart-guy.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/chart-guy-dark.svg"
                alt=""
              />
            </template>

            <template #action>
              <VButton color="primary" elevated> Go Premium </VButton>
            </template>
          </VPlaceholderSection>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .personal-dashboard {
    margin-top: 30px;
  }
}

.personal-dashboard-v2 {
  .dashboard-header {
    @include vuero-s-card;

    display: flex;
    align-items: center;
    padding: 30px;

    .user-meta {
      padding: 0 3rem;
      border-inline-end: 1px solid var(--fade-grey-dark-3);

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
      margin-inline-start: auto;
      background: var(--primary-light-8);
      padding: 20px;
      border-radius: var(--radius-large);
      box-shadow: var(--primary-box-shadow);

      .lnil,
      .lnir {
        position: absolute;
        bottom: 1rem;
        inset-inline-end: 1rem;
        font-size: 4rem;
        opacity: 0.3;
      }

      .link {
        font-family: var(--font-alt);
        display: block;
        font-weight: 500;
        margin-top: 0.5rem;

        &:hover,
        &:focus {
          color: var(--smoke-white);
          opacity: 0.6;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card;

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
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
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

.is-dark {
  .personal-dashboard-v2 {
    .dashboard-header,
    .dashboard-card {
      @include vuero-card--dark;
    }

    .home-header {
      .cta {
        background: var(--primary-light-2);
        box-shadow: var(--primary-box-shadow);
      }
    }
  }
}

@media only screen and (width <= 767px) {
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
        margin-inline-start: 0;
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
