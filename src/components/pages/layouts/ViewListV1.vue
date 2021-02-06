<script setup lang="ts">
import { computed, ref } from 'vue'

const data = [
  {
    id: '5',
    name: 'Mary Lebowski',
    location: 'San Diego, CA',
    role: 'Project Manager',
    roleColor: 'primary',
    medias: {
      avatar: '/images/avatars/photos/5.jpg',
      flag: '/images/icons/flags/united-states-of-america.svg',
    },
    stats: {
      projects: 14,
      replies: 97,
      posts: 16,
    },
    teams: [
      { picture: '/images/avatars/photos/9.jpg' },
      { picture: '/images/avatars/photos/8.jpg' },
    ],
  },
  {
    id: '34',
    name: 'Daniel Redbird',
    location: 'Toronto, Canada',
    role: 'Web Developer',
    roleColor: 'orange',
    medias: {
      avatar: '/images/avatars/photos/34.jpg',
      flag: '/images/icons/flags/canada.svg',
    },
    stats: {
      projects: 45,
      replies: 12,
      posts: 5,
    },
    teams: [
      { picture: '/images/avatars/photos/12.jpg' },
      { picture: '/images/avatars/photos/22.jpg' },
      { picture: '/images/avatars/photos/40.jpg' },
    ],
  },
  {
    id: '8',
    name: 'Erik Kovalsky',
    location: 'New York, NY',
    role: 'Product Manager',
    roleColor: 'secondary',
    medias: {
      avatar: '/images/avatars/photos/8.jpg',
      flag: '/images/icons/flags/united-states-of-america.svg',
    },
    stats: {
      projects: 14,
      replies: 97,
      posts: 16,
    },
    teams: [
      { picture: '/images/avatars/photos/7.jpg' },
      { picture: '/images/avatars/photos/23.jpg' },
    ],
  },
  {
    id: '40',
    name: 'Jeanne Marchand',
    location: 'Paris, France',
    role: 'Mobile Developer',
    roleColor: 'orange',
    medias: {
      avatar: '/images/avatars/photos/40.jpg',
      flag: '/images/icons/flags/france.svg',
    },
    stats: {
      projects: 6,
      replies: 12,
      posts: 8,
    },
    teams: [
      { picture: '/images/avatars/photos/18.jpg' },
      { picture: '/images/avatars/photos/13.jpg' },
      { picture: '/images/avatars/photos/8.jpg' },
      { picture: '/images/avatars/photos/8.jpg' },
      { picture: '/images/avatars/photos/8.jpg' },
      { picture: '/images/avatars/photos/8.jpg' },
      { picture: '/images/avatars/photos/8.jpg' },
      { picture: '/images/avatars/photos/8.jpg' },
    ],
  },
  {
    id: '27',
    name: 'Carmen Escudero',
    location: 'Madrid, Spain',
    role: 'HR Manager',
    roleColor: 'primary',
    medias: {
      avatar: '/images/avatars/photos/27.jpg',
      flag: '/images/icons/flags/spain.svg',
    },
    stats: {
      projects: 8,
      replies: 158,
      posts: 54,
    },
    teams: [{ picture: '/images/avatars/photos/18.jpg' }],
  },
  {
    id: '9',
    name: 'Anna Baker',
    location: 'San Francisco, CA',
    role: 'UI/UX Designer',
    roleColor: 'green',
    medias: {
      avatar: '/images/avatars/photos/9.jpg',
      flag: '/images/icons/flags/united-states-of-america.svg',
    },
    stats: {
      projects: 19,
      replies: 28,
      posts: 12,
    },
    teams: [
      { picture: '/images/avatars/photos/8.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
    ],
  },
  {
    id: '18',
    name: 'Esteban Castellanos',
    location: 'Miami, FL',
    role: 'UI/UX Designer',
    roleColor: 'green',
    medias: {
      avatar: '/images/avatars/photos/18.jpg',
      flag: '/images/icons/flags/united-states-of-america.svg',
    },
    stats: {
      projects: 59,
      replies: 158,
      posts: 16,
    },
    teams: [
      { picture: '/images/avatars/photos/27.jpg' },
      { picture: '/images/avatars/photos/16.jpg' },
      { picture: '/images/avatars/photos/29.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
    ],
  },
  {
    id: '10',
    name: 'Henry Grobstone',
    location: 'Miami, FL',
    role: 'Business Analyst',
    roleColor: 'primary',
    medias: {
      avatar: '/images/avatars/photos/10.jpg',
      flag: '/images/icons/flags/united-states-of-america.svg',
    },
    stats: {
      projects: 42,
      replies: 15,
      posts: 2,
    },
    teams: [
      { picture: '/images/avatars/photos/32.jpg' },
      { picture: '/images/avatars/photos/22.jpg' },
    ],
  },
  {
    id: '25',
    name: 'Melany Wallace',
    location: 'San Jose, CA',
    role: 'Web Developer',
    roleColor: 'orange',
    medias: {
      avatar: '/images/avatars/photos/25.jpg',
      flag: '/images/icons/flags/united-states-of-america.svg',
    },
    stats: {
      projects: 17,
      replies: 22,
      posts: 4,
    },
    teams: [
      { picture: '/images/avatars/photos/26.jpg' },
      { picture: '/images/avatars/photos/38.jpg' },
      { picture: '/images/avatars/photos/21.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
      { picture: '/images/avatars/photos/5.jpg' },
    ],
  },
  {
    id: '7',
    name: 'Alice Carasca',
    location: 'San Diego, CA',
    role: 'Software Engineer',
    roleColor: 'orange',
    medias: {
      avatar: '/images/avatars/photos/7.jpg',
      flag: '/images/icons/flags/united-states-of-america.svg',
    },
    stats: {
      projects: 31,
      replies: 82,
      posts: 14,
    },
    teams: [
      { picture: '/images/avatars/photos/9.jpg' },
      { picture: '/images/avatars/photos/8.jpg' },
    ],
  },
]

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return data
  } else {
    return data.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-view-toolbar">
      <V-Field>
        <V-Control iconed iconify="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </V-Control>
      </V-Field>

      <div class="list-info">
        <span v-if="filteredData.length === 1">1 record found</span>
        <span v-else>{{ filteredData.length }} records found</span>
      </div>

      <div class="buttons">
        <V-Button color="primary" fa="fas fa-check" elevated>
          Approve
        </V-Button>
      </div>
    </div>

    <div class="page-content-inner">
      <!--List-->
      <div class="list-view list-view-v1">
        <!--List Empty Search Placeholder -->
        <div
          :class="[filteredData.length !== 0 && 'is-hidden']"
          class="page-placeholder custom-text-filter-placeholder"
        >
          <div class="placeholder-content">
            <img
              class="light-image"
              src="/images/illustrations/placeholders/search-1.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/images/illustrations/placeholders/search-1-dark.svg"
              alt=""
            />
            <h3>We couldn't find any matching results.</h3>
            <p class="is-larger">
              Too bad. Looks like we couldn't find any matching results for the
              search terms you've entered. Please try different search terms or
              criteria.
            </p>
          </div>
        </div>

        <div class="list-view-inner">
          <!--Item-->
          <transition-group name="list-complete" tag="div">
            <div
              v-for="item in filteredData"
              :key="item.id"
              class="list-view-item"
            >
              <div class="list-view-item-inner">
                <V-Avatar
                  :picture="item.medias.avatar"
                  size="large"
                  :badge="item.medias.flag"
                />
                <div class="meta-left">
                  <h3>{{ item.name }}</h3>
                  <span>
                    <i class="iconify" data-icon="feather:map-pin"></i>
                    <span>{{ item.location }}</span>
                  </span>
                </div>
                <div class="meta-right">
                  <div class="tags">
                    <V-Tag
                      :label="item.role"
                      :color="item.roleColor"
                      rounded
                      elevated
                    />
                  </div>

                  <div class="stats">
                    <div class="stat">
                      <span>{{ item.stats.projects }}</span>
                      <span>Projects</span>
                    </div>
                    <div class="separator"></div>
                    <div class="stat">
                      <span>{{ item.stats.replies }}</span>
                      <span>Replies</span>
                    </div>
                    <div class="separator"></div>
                    <div class="stat">
                      <span>{{ item.stats.posts }}</span>
                      <span>Posts</span>
                    </div>
                  </div>

                  <div class="network">
                    <V-AvatarStack
                      :avatars="item.teams"
                      :limit="3"
                      size="small"
                    />
                    <span>in Team</span>
                  </div>

                  <!--Dropdown-->
                  <ListViewV1Dropdown />
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <V-FlexPagination
        v-if="filteredData.length > 5"
        :item-per-page="10"
        :total-items="873"
        :current-page="42"
        :max-links-displayed="5"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../assets/scss/abstracts/_variables.scss';
@import '../../../assets/scss/abstracts/_mixins.scss';
@import '../../../assets/scss/pages/lists/_list-view.scss';
</style>
