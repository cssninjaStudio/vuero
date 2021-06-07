<script setup lang="ts">
import { ref } from 'vue'
import { completionOptions } from '/@src/data/dashboards/personal-v2/taskCompletionChart'
import { barOptions } from '/@src/data/dashboards/personal-v2/teamEfficiencyChart'
import {
  avatarStack1,
  avatarStack2,
  avatarStack3,
  avatarStack4,
} from '/@src/data/dashboards/personal-v2/users'
import { popovers } from '/@src/data/users/userPopovers'

const democheck = ref(['value_2'])
</script>

<template>
  <div class="personal-dashboard personal-dashboard-v2">
    <!--Personal Dashboard V2-->
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="dashboard-header">
          <V-Avatar
            picture="/demo/avatars/8.jpg"
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
            <a class="action-link">View Tasks</a>
          </div>
          <div class="cta h-hidden-tablet-p">
            <div class="media-flex inverted-text">
              <i aria-hidden="true" class="lnil lnil-crown-alt-1"></i>
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
            <V-Block
              title="Delivery App Project"
              subtitle="Updated 30m ago"
              center
            >
              <template #icon>
                <V-Avatar
                  picture="/demo/photos/apps/1.jpg"
                  badge="/images/icons/stacks/illustrator.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <V-AvatarStack :avatars="avatarStack1" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </V-Block>

            <!--Project-->
            <V-Block
              title="Health and Fitness Dashboard"
              subtitle="Updated 5h ago"
              center
            >
              <template #icon>
                <V-Avatar
                  picture="/demo/photos/apps/2.png"
                  badge="/images/icons/stacks/reactjs.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <V-AvatarStack :avatars="avatarStack2" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </V-Block>

            <!--Project-->
            <V-Block
              title="Learning Tracker Dashboard"
              subtitle="Updated 7h ago"
              center
            >
              <template #icon>
                <V-Avatar
                  picture="/demo/photos/apps/3.png"
                  badge="/images/icons/stacks/angular.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <V-AvatarStack :avatars="avatarStack3" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </V-Block>

            <!--Project-->
            <V-Block
              title="Banking App Dashboard"
              subtitle="Updated 10h ago"
              center
            >
              <template #icon>
                <V-Avatar
                  picture="/demo/photos/apps/4.png"
                  badge="/images/icons/stacks/js.svg"
                  size="medium"
                  squared
                />
              </template>
              <template #action>
                <V-AvatarStack :avatars="avatarStack4" size="small" />
                <ProjectWidgetDropdown />
              </template>
            </V-Block>
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
          >
          </apexchart>
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
          >
          </apexchart>
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
                <tippy class="has-help-cursor" interactive :offset="[0, 10]">
                  <V-Avatar picture="/demo/avatars/18.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user18" />
                  </template>
                </tippy>
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
                <tippy class="has-help-cursor" interactive :offset="[0, 10]">
                  <V-Avatar initials="SC" color="h-orange" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user120" />
                  </template>
                </tippy>
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
                <tippy class="has-help-cursor" interactive :offset="[0, 10]">
                  <V-Avatar picture="/demo/avatars/13.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user13" />
                  </template>
                </tippy>
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
                <tippy class="has-help-cursor" interactive :offset="[0, 10]">
                  <V-Avatar initials="NL" color="success" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user121" />
                  </template>
                </tippy>
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
            <a class="action-link">View All</a>
          </div>
          <div class="active-list">
            <div class="checkboxes-list">
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <V-AnimatedCheckbox v-model="democheck" value="value_1" />
                <div class="item-meta">
                  <span class="dark-inverted">Call Mr. Markstrom</span>
                  <span>Review the project initial wireframes</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <V-AnimatedCheckbox v-model="democheck" value="value_2" />
                <div class="item-meta">
                  <span class="dark-inverted">Finish wireframes</span>
                  <span>Make all requested changes and publish</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <V-AnimatedCheckbox v-model="democheck" value="value_3" />
                <div class="item-meta">
                  <span class="dark-inverted">Update timesheets</span>
                  <span>Update all the team timesheets</span>
                </div>
              </div>
              <!-- List item -->
              <div class="list-item">
                <!-- Animated checkbox-->
                <V-AnimatedCheckbox v-model="democheck" value="value_4" />
                <div class="item-meta">
                  <span class="dark-inverted">Request payout</span>
                  <span>send project invoice to client</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <V-PlaceholderSection
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
              <V-Button color="primary" elevated> Go Premium </V-Button>
            </template>
          </V-PlaceholderSection>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';

.is-navbar {
  .personal-dashboard {
    margin-top: 30px;
  }
}

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
      border-radius: $radius-large;
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

.is-dark {
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
