<template>
  <div class="user-grid user-grid-v2">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/images/illustrations/placeholders/search-4.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/images/illustrations/placeholders/search-4-dark.svg"
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

    <div class="columns is-multiline">
      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>37 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/13.jpg"
                alt=""
                data-user-popover="6"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/illustrator.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Tara Svenson</h3>
            <p data-filter-match>UI/UX Designer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-warning" data-user-popover="36">
                  <span>BT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/18.jpg"
                  alt=""
                  data-user-popover="7"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-info" data-user-popover="34">
                  <span>JD</span>
                </span>
              </div>
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
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">Overdue</span>
                <span>59 tasks remaining</span>
              </div>
              <div class="status-icon is-warning">
                <i class="fas fa-exclamation"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/37.jpg"
                alt=""
                data-user-popover="31"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/flags/france.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Helmut Fritz</h3>
            <p data-filter-match>Product Manager</p>
            <div class="people">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/21.jpg"
                  alt=""
                  data-user-popover="19"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-success" data-user-popover="37">
                  <span>AT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/39.jpg"
                  alt=""
                  data-user-popover="33"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>21 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/25.jpg"
                alt=""
                data-user-popover="4"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/js.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Melany Wallace</h3>
            <p data-filter-match>Web Developer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/21.jpg"
                  alt=""
                  data-user-popover="19"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-h-purple" data-user-popover="35">
                  <span>SC</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/39.jpg"
                  alt=""
                  data-user-popover="33"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>11 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/29.jpg"
                alt=""
                data-user-popover="25"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/python.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Hakeem Calami</h3>
            <p data-filter-match>Software Engineer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/28.jpg"
                  alt=""
                  data-user-popover="24"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/33.jpg"
                  alt=""
                  data-user-popover="29"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">Blocked</span>
                <span>17 tasks remaining</span>
              </div>
              <div class="status-icon is-danger">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/39.jpg"
                alt=""
                data-user-popover="33"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/python.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Alejandro Badajoz</h3>
            <p data-filter-match>Business Analyst</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-success" data-user-popover="37">
                  <span>AT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/23.jpg"
                  alt=""
                  data-user-popover="21"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>14 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/40.jpg"
                alt=""
                data-user-popover="11"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/android.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Jeanne Marchand</h3>
            <p data-filter-match>Mobile Developer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-warning" data-user-popover="36">
                  <span>BT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/18.jpg"
                  alt=""
                  data-user-popover="7"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-info" data-user-popover="34">
                  <span>JD</span>
                </span>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>18 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/19.jpg"
                alt=""
                data-user-popover="17"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/flags/germany.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Greta Kroppfer</h3>
            <p data-filter-match>Sales Manager</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-h-purple" data-user-popover="35">
                  <span>SC</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/27.jpg"
                  alt=""
                  data-user-popover="10"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>27 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/9.jpg"
                alt=""
                data-user-popover="1"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/photoshop.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Anna Baker</h3>
            <p data-filter-match>UI/UX Designer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-success" data-user-popover="37">
                  <span>AT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/23.jpg"
                  alt=""
                  data-user-popover="21"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>31 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/5.jpg"
                alt=""
                data-user-popover="9"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/flags/united-states-of-america.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Mary Lebowski</h3>
            <p data-filter-match>Project Manager</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-warning" data-user-popover="36">
                  <span>BT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/18.jpg"
                  alt=""
                  data-user-popover="7"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-info" data-user-popover="34">
                  <span>JD</span>
                </span>
              </div>
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
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>9 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/32.jpg"
                alt=""
                data-user-popover="28"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/flags/united-states-of-america.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Jonathan Krugger</h3>
            <p data-filter-match>Product Manager</p>
            <div class="people">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/21.jpg"
                  alt=""
                  data-user-popover="19"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-h-purple" data-user-popover="35">
                  <span>SC</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/39.jpg"
                  alt=""
                  data-user-popover="33"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>22 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/36.jpg"
                alt=""
                data-user-popover="30"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/reactjs.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Benoit Leblanc</h3>
            <p data-filter-match>Software Engineer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-warning" data-user-popover="36">
                  <span>BT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/31.jpg"
                  alt=""
                  data-user-popover="27"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">Overdue</span>
                <span>43 tasks remaining</span>
              </div>
              <div class="status-icon is-warning">
                <i class="fas fa-exclamation"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/38.jpg"
                alt=""
                data-user-popover="32"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/vuejs.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Christie Dallas</h3>
            <p data-filter-match>Web Developer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/33.jpg"
                  alt=""
                  data-user-popover="29"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/26.jpg"
                  alt=""
                  data-user-popover="23"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>13 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/26.jpg"
                alt=""
                data-user-popover="23"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/html5.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Courtney Wilson</h3>
            <p data-filter-match>Web Developer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/21.jpg"
                  alt=""
                  data-user-popover="19"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-success" data-user-popover="37">
                  <span>AT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/39.jpg"
                  alt=""
                  data-user-popover="33"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>39 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/16.jpg"
                alt=""
                data-user-popover="16"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/flags/united-states-of-america.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Jason Guarank</h3>
            <p data-filter-match>Business Analyst</p>
            <div class="people">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/14.jpg"
                  alt=""
                  data-user-popover="14"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-h-purple" data-user-popover="35">
                  <span>SC</span>
                </span>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>7 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/23.jpg"
                alt=""
                data-user-popover="21"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/flags/united-states-of-america.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Irina Vierbovsky</h3>
            <p data-filter-match>Project Manager</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-success" data-user-popover="37">
                  <span>AT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/34.jpg"
                  alt=""
                  data-user-popover="12"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>19 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/28.jpg"
                alt=""
                data-user-popover="24"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/angular.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Edouard Falant</h3>
            <p data-filter-match>Web Developer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-warning" data-user-popover="36">
                  <span>BT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/18.jpg"
                  alt=""
                  data-user-popover="7"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-info" data-user-popover="34">
                  <span>JD</span>
                </span>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>14 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/7.jpg"
                alt=""
                data-user-popover="0"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/stacks/csharp.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Alice Carasca</h3>
            <p data-filter-match>Software Engineer</p>
            <div class="people">
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/25.jpg"
                  alt=""
                  data-user-popover="4"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-h-purple" data-user-popover="35">
                  <span>SC</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <img
                  class="avatar"
                  src="/images/avatars/photos/12.jpg"
                  alt=""
                  data-user-popover="2"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item-wrap">
          <div class="grid-item-head">
            <div class="flex-head">
              <div class="meta">
                <span class="dark-inverted">In Sync</span>
                <span>5 tasks remaining</span>
              </div>
              <div class="status-icon is-success">
                <i class="fas fa-check"></i>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:check-circle"></i>
                </span>
                <span>Tasks</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:file"></i>
                </span>
                <span>Files</span>
              </button>
            </div>
          </div>
          <div class="grid-item">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/22.jpg"
                alt=""
                data-user-popover="20"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/icons/flags/united-states-of-america.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted" data-filter-match>Dwayne Hicks</h3>
            <p data-filter-match>Product Manager</p>
            <div class="people">
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-warning" data-user-popover="36">
                  <span>BT</span>
                </span>
              </div>
              <div class="v-avatar is-small">
                <span class="avatar is-fake is-h-purple" data-user-popover="35">
                  <span>SC</span>
                </span>
              </div>
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/grids/_grid-users.scss';
</style>
