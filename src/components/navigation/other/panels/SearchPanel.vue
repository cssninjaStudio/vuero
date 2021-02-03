<script setup lang="ts">
import { activePanel } from '/@src/composition/state/activePanelState'
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
        <div class="field">
          <div class="control has-icon">
            <input
              type="text"
              class="input is-rounded search-input"
              placeholder="Search..."
            />
            <div class="form-icon">
              <i class="iconify" data-icon="feather:search"></i>
            </div>
            <div class="search-results has-slimscroll"></div>
          </div>
        </div>

        <div class="recent">
          <h4>Recently viewed</h4>
          <div class="recent-block">
            <a
              class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
            >
              <div class="v-icon is-info is-rounded is-small">
                <i class="iconify" data-icon="feather:chrome"></i>
              </div>
              <div class="flex-meta">
                <span>Browser Support</span>
                <span>Blog post</span>
              </div>
            </a>
            <a
              class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
            >
              <div class="v-icon is-orange is-rounded is-small">
                <i class="iconify" data-icon="feather:tv"></i>
              </div>
              <div class="flex-meta">
                <span>Twitch API</span>
                <span>Blog post</span>
              </div>
            </a>
            <a
              class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
            >
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
            <a
              class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
            >
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/7.jpg"
                  alt=""
                  data-user-popover="0"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span>Alice C.</span>
                <span>Software Engineer</span>
              </div>
            </a>
            <a
              class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
            >
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/13.jpg"
                  alt=""
                  data-user-popover="6"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="flex-meta">
                <span>Tara S.</span>
                <span>UI/UX Designer</span>
              </div>
            </a>
            <a
              class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
            >
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/22.jpg"
                  alt=""
                  data-user-popover="5"
                  @error="
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
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../assets/scss/layout/_right-panel.scss';
</style>
