<script setup lang="ts">
import { computed, ref } from 'vue'
import { activePanel } from '/@src/composition/state/activePanelState'
import { popovers } from '/@src/data/users/userPopovers'

const filter = ref('')
const filteredData = computed(() => {
  if (!filter.value) {
    return []
  }

  return Object.values(popovers).filter((user) => {
    return (
      user.fullName.match(new RegExp(filter.value, 'i')) ||
      user.position.match(new RegExp(filter.value, 'i'))
    )
  })
})
</script>

<template>
  <div
    id="search-panel"
    :class="[activePanel === 'search' && 'is-active']"
    class="right-panel-wrapper is-search is-left"
  >
    <div class="panel-overlay" @click="activePanel = 'none'"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <AnimatedLogo width="38px" height="38px" />
        <a class="close-panel" @click="activePanel = 'none'">
          <i class="iconify" data-icon="feather:chevron-left"></i>
        </a>
      </div>
      <div class="right-panel-body has-slimscroll">
        <V-Field>
          <V-Control icon="feather:search">
            <input
              v-model="filter"
              type="text"
              class="input is-rounded search-input"
              placeholder="Search..."
            />
            <template #extra>
              <div
                v-if="filteredData.length > 0"
                class="is-active search-results has-slimscroll"
              >
                <div
                  v-for="user in filteredData"
                  :key="user.id"
                  class="search-result"
                >
                  <V-Avatar
                    :picture="user.avatar"
                    :initials="user.initials"
                    :color="user.color"
                  />
                  <div class="meta">
                    <span>{{ user.username }}</span>
                    <span>{{ user.position }}</span>
                  </div>
                </div>
              </div>
            </template>
          </V-Control>
        </V-Field>

        <div class="recent">
          <h4>Recently viewed</h4>
          <div class="recent-block">
            <a class="media-flex-center">
              <div class="v-icon is-info is-rounded is-small">
                <i class="iconify" data-icon="feather:chrome"></i>
              </div>
              <div class="flex-meta">
                <span>Browser Support</span>
                <span>Blog post</span>
              </div>
            </a>
            <a class="media-flex-center">
              <div class="v-icon is-orange is-rounded is-small">
                <i class="iconify" data-icon="feather:tv"></i>
              </div>
              <div class="flex-meta">
                <span>Twitch API</span>
                <span>Blog post</span>
              </div>
            </a>
            <a class="media-flex-center">
              <div class="v-icon is-green is-rounded is-small">
                <i class="iconify" data-icon="feather:twitter"></i>
              </div>
              <div class="flex-meta">
                <span>Twitter Auth</span>
                <span>Blog post</span>
              </div>
            </a>
          </div>
        </div>

        <div class="recent">
          <h4>Recent Members</h4>
          <div class="recent-block">
            <a class="media-flex-center">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/7.jpg"
                  alt=""
                  data-user-popover="0"
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span>Alice C.</span>
                <span>Software Engineer</span>
              </div>
            </a>
            <a class="media-flex-center">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/13.jpg"
                  alt=""
                  data-user-popover="6"
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span>Tara S.</span>
                <span>UI/UX Designer</span>
              </div>
            </a>
            <a class="media-flex-center">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/22.jpg"
                  alt=""
                  data-user-popover="5"
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span>Jimmy H.</span>
                <span>Project Manager</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../assets/scss/abstracts/_variables.scss';
@import '../../../assets/scss/abstracts/_mixins.scss';
@import '../../../assets/scss/layout/_right-panel.scss';
</style>
