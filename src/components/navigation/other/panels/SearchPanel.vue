<script lang="ts">
import { defineComponent } from 'vue'
import {
  ChevronLeftIcon,
  SearchIcon,
  ChromeIcon,
  TvIcon,
  TwitterIcon,
} from '@zhuowenli/vue-feather-icons'

const SearchPanel = defineComponent({
  name: 'SearchPanel',
  components: {
    ChevronLeftIcon,
    SearchIcon,
    ChromeIcon,
    TvIcon,
    TwitterIcon,
  },
  setup() {
    // SearchPanel - Composition API

    return {}
  },
})

export default SearchPanel
</script>

<template>
  <div id="search-panel" class="right-panel-wrapper is-search is-left">
    <div class="panel-overlay"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <img class="light-image" src="/img/logos/logo/logo.svg" alt="" />
        <img class="dark-image" src="/img/logos/logo/logo-light.svg" alt="" />
        <a class="close-panel">
          <ChevronLeftIcon />
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
              <SearchIcon />
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
                <ChromeIcon />
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
                <TvIcon />
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
                <TwitterIcon />
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
                  src="https://via.placeholder.com/150x150"
                  data-demo-src="/img/avatars/photos/7.jpg"
                  alt=""
                  data-user-popover="0"
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
                  src="https://via.placeholder.com/150x150"
                  data-demo-src="/img/avatars/photos/13.jpg"
                  alt=""
                  data-user-popover="6"
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
                  src="https://via.placeholder.com/150x150"
                  data-demo-src="/img/avatars/photos/22.jpg"
                  alt=""
                  data-user-popover="5"
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
