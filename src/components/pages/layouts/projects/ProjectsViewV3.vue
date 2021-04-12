<script setup lang="ts">
import { ref } from 'vue'

const filterProjects = ref(0)
</script>

<template>
  <div class="all-projects">
    <div class="illustration-header">
      <img
        class="light-image"
        src="/@src/assets/illustrations/projects/header.svg"
        alt=""
      />
      <img
        class="dark-image"
        src="/@src/assets/illustrations/projects/header-dark.svg"
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
            <div class="circle-chart-wrapper is-success">
              <CircleChart :value="55" />
            </div>
            <h3>Customer Management Dashboard</h3>
          </a>
        </div>
        <div class="column is-4">
          <a class="project-box">
            <div class="circle-chart-wrapper is-danger">
              <CircleChart :value="80" />
            </div>
            <h3>CandyBar Website and App Redesign</h3>
          </a>
        </div>
        <div class="column is-4">
          <a class="project-box">
            <div class="circle-chart-wrapper is-info">
              <CircleChart :value="28" />
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

          <V-Control>
            <Multiselect
              v-model="filterProjects"
              :options="['Shipping Soon', 'In Progress', 'Blocked', 'Archived']"
              placeholder="Shipping Soon"
            />
          </V-Control>
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
                <V-Tag label="Finance" color="solid" rounded />
                <V-Tag label="Marketing" color="solid" rounded />
                <V-Tag label="Payments" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/13.jpg' },
                    { picture: '/demo/avatars/11.jpg' },
                  ]"
                />

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
                <V-Tag label="Sports" color="solid" rounded />
                <V-Tag label="Surf" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/7.jpg' },
                    { picture: '/demo/avatars/9.jpg' },
                    { color: 'info', initials: 'JD' },
                    { picture: '/demo/avatars/12.jpg' },
                    { picture: '/demo/avatars/8.jpg' },
                    { picture: '/demo/avatars/25.jpg' },
                    { picture: '/demo/avatars/25.jpg' },
                    { picture: '/demo/avatars/25.jpg' },
                    { picture: '/demo/avatars/25.jpg' },
                  ]"
                />

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
                <V-Tag label="Business" color="solid" rounded />
                <V-Tag label="Startups" color="solid" rounded />
                <V-Tag label="Management" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[{ picture: '/demo/avatars/14.jpg' }]"
                />

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
                <V-Tag label="Javascript" color="solid" rounded />
                <V-Tag label="Tesseract" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/8.jpg' },
                    { picture: '/demo/avatars/22.jpg' },
                    { picture: '/demo/avatars/12.jpg' },
                    { picture: '/demo/avatars/10.jpg' },
                    { picture: '/demo/avatars/26.jpg' },
                  ]"
                />

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
                <V-Tag label="AI" color="solid" rounded />
                <V-Tag label="Machine Learning" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/13.jpg' },
                    { picture: '/demo/avatars/11.jpg' },
                    { picture: '/demo/avatars/8.jpg' },
                    { picture: '/demo/avatars/22.jpg' },
                  ]"
                />

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
                <V-Tag label="Music" color="solid" rounded />
                <V-Tag label="Venue" color="solid" rounded />
                <V-Tag label="Urban" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/13.jpg' },
                    { picture: '/demo/avatars/11.jpg' },
                  ]"
                />

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
                <V-Tag label="Business" color="solid" rounded />
                <V-Tag label="Customers" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/13.jpg' },
                    { picture: '/demo/avatars/16.jpg' },
                    { picture: '/demo/avatars/10.jpg' },
                    { picture: '/demo/avatars/9.jpg' },
                  ]"
                />

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
                <V-Tag label="Mobile" color="solid" rounded />
                <V-Tag label="Hybrid" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/22.jpg' },
                    { picture: '/demo/avatars/10.jpg' },
                    { picture: '/demo/avatars/26.jpg' },
                  ]"
                />

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
                <V-Tag label="Business" color="solid" rounded />
                <V-Tag label="Finance" color="solid" rounded />
              </div>
            </div>
            <div class="item-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem
                iste, inquam, de voluptate quid sentit? Itaque contra est, ac
                dicitis; Quae cum essent dicta, discessimus. Iam enim adesse
                poterit. Duo Reges: constructio interrete.
              </p>

              <div class="item-people">
                <V-AvatarStack
                  size="small"
                  :avatars="[
                    { picture: '/demo/avatars/14.jpg' },
                    { picture: '/demo/avatars/16.jpg' },
                    { picture: '/demo/avatars/10.jpg' },
                  ]"
                />

                <span class="label">1 week left</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/projects/_projects.scss';
</style>
