<template>
  <div>
    <div class="card-grid-toolbar">
      <div class="control has-icon">
        <input
          class="input custom-text-filter"
          placeholder="Search..."
          data-filter-target=".column"
        />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="buttons">
        <div class="field h-hidden-mobile">
          <div class="control">
            <div class="h-select">
              <div class="select-box">
                <span>All Projects</span>
              </div>
              <div class="select-icon">
                <i class="iconify" data-icon="feather:chevron-down"></i>
              </div>
              <div class="select-drop has-slimscroll-sm">
                <div class="drop-inner">
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Web Apps</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Mobile Apps</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Dashboards</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Landing Pages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="button v-button is-primary is-raised">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>New Project</span>
        </button>
      </div>
    </div>

    <div class="card-grid card-grid-v2">
      <!--List Empty Search Placeholder -->
      <div class="page-placeholder custom-text-filter-placeholder is-hidden">
        <div class="placeholder-content">
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-3-dark.svg"
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

      <!--Card Grid v2-->
      <div class="columns is-multiline">
        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/7.jpg"
                      alt=""
                      data-user-popover="0"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Alice C.</span
                    >
                    <span>updated 3m ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/1.jpg"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Delivery App Project
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i>August
                      2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/27.jpg"
                        alt=""
                        data-user-popover="10"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/15.jpg"
                        alt=""
                        data-user-popover="15"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/12.jpg"
                        alt=""
                        data-user-popover="2"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/8.jpg"
                      alt=""
                      data-user-popover="3"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match>Erik K.</span>
                    <span>updated 5h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/2.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Health and Fitness Dashboard
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >October 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/13.jpg"
                        alt=""
                        data-user-popover="6"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/21.jpg"
                        alt=""
                        data-user-popover="19"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/25.jpg"
                      alt=""
                      data-user-popover="4"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Melany W.</span
                    >
                    <span>updated 5h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/3.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Learning Tracker Dashboard
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >September 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/14.jpg"
                        alt=""
                        data-user-popover="14"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/23.jpg"
                      alt=""
                      data-user-popover="21"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Irina V.</span
                    >
                    <span>updated 5h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/4.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Banking and Finance Dashboard
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >October 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/13.jpg"
                        alt=""
                        data-user-popover="6"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/21.jpg"
                        alt=""
                        data-user-popover="19"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/11.jpg"
                      alt=""
                      data-user-popover="13"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Kelly M.</span
                    >
                    <span>updated 2h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/5.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Resume Management Mobile App
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >October 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/30.jpg"
                        alt=""
                        data-user-popover="26"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/39.jpg"
                        alt=""
                        data-user-popover="33"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/9.jpg"
                      alt=""
                      data-user-popover="1"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match>Ana B.</span>
                    <span>updated 3d ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/6.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Banking Landing Page
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >December 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/15.jpg"
                        alt=""
                        data-user-popover="15"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/40.jpg"
                        alt=""
                        data-user-popover="11"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/8.jpg"
                        alt=""
                        data-user-popover="3"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/25.jpg"
                      alt=""
                      data-user-popover="4"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Melany W.</span
                    >
                    <span>updated 1h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/7.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Learning App Design
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >November 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/11.jpg"
                        alt=""
                        data-user-popover="13"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/5.jpg"
                      alt=""
                      data-user-popover="9"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match>Mary L.</span>
                    <span>updated 4d ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/8.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Educational App Design
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >November 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/21.jpg"
                        alt=""
                        data-user-popover="19"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/29.jpg"
                        alt=""
                        data-user-popover="25"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/33.jpg"
                        alt=""
                        data-user-popover="29"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/27.jpg"
                      alt=""
                      data-user-popover="10"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Carmen E.</span
                    >
                    <span>updated 2h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/9.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Banking Solution Website
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >October 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/30.jpg"
                        alt=""
                        data-user-popover="26"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/19.jpg"
                        alt=""
                        data-user-popover="17"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/27.jpg"
                      alt=""
                      data-user-popover="10"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Carmen E.</span
                    >
                    <span>updated 2h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/10.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      HR Webapp Design
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i>August
                      2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/24.jpg"
                        alt=""
                        data-user-popover="22"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/22.jpg"
                        alt=""
                        data-user-popover="5"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/13.jpg"
                      alt=""
                      data-user-popover="6"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match>Tara S.</span>
                    <span>updated 8h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/11.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Ice Cream Delivery Dashboard
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >January 2021
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/28.jpg"
                        alt=""
                        data-user-popover="24"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/12.jpg"
                      alt=""
                      data-user-popover="2"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Joshua S.</span
                    >
                    <span>updated 4d ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/12.jpg"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Mobile App Landing Page
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >October 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <span
                        class="avatar is-fake is-h-purple"
                        data-user-popover="35"
                      >
                        <span>SC</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/12.jpg"
                      alt=""
                      data-user-popover="2"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Joshua S.</span
                    >
                    <span>updated 4d ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/13.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Web Marketing Landing Page
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >November 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/15.jpg"
                        alt=""
                        data-user-popover="15"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/40.jpg"
                        alt=""
                        data-user-popover="11"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/8.jpg"
                        alt=""
                        data-user-popover="3"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/15.jpg"
                      alt=""
                      data-user-popover="15"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Hilde V.</span
                    >
                    <span>updated 7h ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/14.jpg"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Startup Landing Page
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >November 2020
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/31.jpg"
                        alt=""
                        data-user-popover="27"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>

        <!--Grid Item-->
        <div class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/39.jpg"
                      alt=""
                      data-user-popover="33"
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta">
                    <span class="dark-inverted" data-filter-match
                      >Alejandro B.</span
                    >
                    <span>updated 2d ago</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    src="/images/photo/demo/apps/15.png"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted" data-filter-match>
                      Expense Management System
                    </h3>
                    <p data-filter-match>
                      <i class="iconify" data-icon="feather:calendar"></i
                      >January 2021
                    </p>
                  </div>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/5.jpg"
                        alt=""
                        data-user-popover="9"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/24.jpg"
                        alt=""
                        data-user-popover="22"
                        @error.once="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../assets/scss/pages/grids/_grid-cards.scss';
</style>
