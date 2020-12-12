<script lang="ts">
import { defineComponent } from 'vue'

const FilterToolbar = defineComponent({
  name: 'FilterToolbar',
  components: {},
  setup() {
    // FilterToolbar - Composition API

    return {}
  },
})

export default FilterToolbar
</script>

<template>
  <div class="toolbar ml-auto">
    <div class="control has-icon">
      <input
        type="text"
        class="input is-rounded textFilter-input"
        placeholder="Filter icons..."
      />
      <div class="form-icon">
        <i data-feather="search"></i>
      </div>
    </div>

    <div class="toolbar-link">
      <label class="dark-mode ml-auto">
        <input type="checkbox" checked />
        <span></span>
      </label>
    </div>

    <div class="toolbar-notifications is-hidden-mobile">
      <div class="dropdown is-spaced is-dots is-right dropdown-trigger">
        <div class="is-trigger" aria-haspopup="true">
          <i data-feather="bell"></i>
          <span class="new-indicator pulsate"></span>
        </div>
        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <div class="heading">
              <div class="heading-left">
                <h6 class="heading-title">Notifications</h6>
              </div>
              <div class="heading-right">
                <a class="notification-link" href="#">See all</a>
              </div>
            </div>
            <ul class="notification-list">
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="https://via.placeholder.com/150x150"
                      data-demo-src="assets/img/avatars/photos/7.jpg"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">Alice C.</span> left a comment.
                    </p>
                    <p class="time">1 hour ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="https://via.placeholder.com/150x150"
                      data-demo-src="assets/img/avatars/photos/12.jpg"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">Joshua S.</span> uploaded a file.
                    </p>
                    <p class="time">2 hours ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="https://via.placeholder.com/150x150"
                      data-demo-src="assets/img/avatars/photos/13.jpg"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">Tara S.</span> sent you a message.
                    </p>
                    <p class="time">2 hours ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="https://via.placeholder.com/150x150"
                      data-demo-src="assets/img/avatars/photos/25.jpg"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">Melany W.</span> left a comment.
                    </p>
                    <p class="time">3 hours ago</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <a class="toolbar-link">
      <i data-feather="grid"></i>
    </a>
  </div>
</template>