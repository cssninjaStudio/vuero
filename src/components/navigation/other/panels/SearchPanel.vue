<script setup lang="ts">
import { activePanel } from '/@src/composition/state/ui/activePanelState'
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
        <img class="light-image" src="/@images/logos/logo/logo.svg" alt="" />
        <img
          class="dark-image"
          src="/@images/logos/logo/logo-light.svg"
          alt=""
        />
        <a class="close-panel" @click="activePanel = 'none'">
          <Icon icon="feather:chevron-left" />
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
              <Icon icon="feather:search" />
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
              <div class="h-icon is-info is-rounded is-small">
                <Icon icon="feather:chrome" />
              </div>
              <div class="flex-meta">
                <span>Browser Support</span>
                <span>Blog post</span>
              </div>
            </a>
            <a
              class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
            >
              <div class="h-icon is-orange is-rounded is-small">
                <Icon icon="feather:tv" />
              </div>
              <div class="flex-meta">
                <span>Twitch API</span>
                <span>Blog post</span>
              </div>
            </a>
            <a
              class="media-flex-center is-responsive-mobile is-responsive-tablet-p"
            >
              <div class="h-icon is-green is-rounded is-small">
                <Icon icon="feather:twitter" />
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
              <div class="h-avatar is-small">
                <img
                  class="avatar"
                  src="/@images/avatars/photos/7.jpg"
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
              <div class="h-avatar is-small">
                <img
                  class="avatar"
                  src="/@images/avatars/photos/13.jpg"
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
              <div class="h-avatar is-small">
                <img
                  class="avatar"
                  src="/@images/avatars/photos/22.jpg"
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
