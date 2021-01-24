<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'

const props = defineProps({
  webapp: {
    type: Boolean,
    default: false,
  },
})

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
    teams: ['/images/avatars/photos/9.jpg', '/images/avatars/photos/8.jpg'],
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
      '/images/avatars/photos/12.jpg',
      '/images/avatars/photos/22.jpg',
      '/images/avatars/photos/40.jpg',
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
    teams: ['/images/avatars/photos/7.jpg', '/images/avatars/photos/23.jpg'],
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
      '/images/avatars/photos/18.jpg',
      '/images/avatars/photos/13.jpg',
      '/images/avatars/photos/8.jpg',
      '/images/avatars/photos/8.jpg',
      '/images/avatars/photos/8.jpg',
      '/images/avatars/photos/8.jpg',
      '/images/avatars/photos/8.jpg',
      '/images/avatars/photos/8.jpg',
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
    teams: ['/images/avatars/photos/18.jpg'],
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
    teams: ['/images/avatars/photos/8.jpg', '/images/avatars/photos/5.jpg'],
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
      '/images/avatars/photos/27.jpg',
      '/images/avatars/photos/16.jpg',
      '/images/avatars/photos/29.jpg',
      '/images/avatars/photos/5.jpg',
      '/images/avatars/photos/5.jpg',
      '/images/avatars/photos/5.jpg',
      '/images/avatars/photos/5.jpg',
      '/images/avatars/photos/5.jpg',
      '/images/avatars/photos/5.jpg',
      '/images/avatars/photos/5.jpg',
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
    teams: ['/images/avatars/photos/32.jpg', '/images/avatars/photos/22.jpg'],
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
      '/images/avatars/photos/26.jpg',
      '/images/avatars/photos/38.jpg',
      '/images/avatars/photos/21.jpg',
      '/images/avatars/photos/5.jpg',
      '/images/avatars/photos/5.jpg',
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
    teams: ['/images/avatars/photos/9.jpg', '/images/avatars/photos/8.jpg'],
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
    <div class="list-view-toolbar" :class="[webapp && 'is-webapp']">
      <div class="control has-icon">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="list-info">
        <span v-if="filteredData.length === 1">1 record found</span>
        <span v-else>{{ filteredData.length }} records found</span>
      </div>

      <div class="buttons">
        <button class="button h-button is-primary is-elevated">
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
          <span>Approve</span>
        </button>
      </div>
    </div>

    <div class="page-content-inner" :class="[webapp && 'is-webapp']">
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
                <div class="h-avatar is-large">
                  <img
                    class="avatar"
                    :src="item.medias.avatar"
                    alt=""
                    data-user-popover="9"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <img class="badge" :src="item.medias.flag" alt="" />
                </div>
                <div class="meta-left">
                  <h3 data-filter-match>{{ item.name }}</h3>
                  <span>
                    <i class="iconify" data-icon="feather:map-pin"></i>
                    <span data-filter-match>{{ item.location }}</span>
                  </span>
                </div>
                <div class="meta-right">
                  <div class="tags">
                    <span
                      class="tag is-rounded is-elevated"
                      :class="[`is-${item.roleColor}`]"
                      data-filter-match
                      >{{ item.role }}</span
                    >
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
                    <div class="avatar-stack">
                      <div
                        v-for="team in item.teams.slice(0, 3)"
                        :key="team"
                        class="h-avatar is-small"
                      >
                        <img
                          class="avatar"
                          :src="team"
                          alt=""
                          data-user-popover="1"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div
                        v-if="item.teams.length > 3"
                        class="h-avatar is-small"
                      >
                        <span class="avatar is-more">
                          <span class="inner">
                            <span>+{{ item.teams.length - 3 }}</span>
                          </span>
                        </span>
                      </div>
                    </div>
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

      <FlexPagination v-if="filteredData.length > 5" />
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/lists/_list-view.scss';
</style>
