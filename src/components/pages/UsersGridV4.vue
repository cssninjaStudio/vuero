<template>
  <div class="user-grid user-grid-v4">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/images/illustrations/placeholders/search-5.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/images/illustrations/placeholders/search-5-dark.svg"
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
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/13.jpg"
              alt=""
              data-user-popover="6"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/illustrator.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Tara Svenson</h3>
          <p data-filter-match>UI/UX Designer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-primary is-raised">
              Add To Project
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/37.jpg"
              alt=""
              data-user-popover="31"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/france.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Helmut Fritz</h3>
          <p data-filter-match>Product Manager</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/25.jpg"
              alt=""
              data-user-popover="4"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/js.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Melany Wallace</h3>
          <p data-filter-match>Web Developer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/29.jpg"
              alt=""
              data-user-popover="25"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/python.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Hakeem Calami</h3>
          <p data-filter-match>Software Engineer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/39.jpg"
              alt=""
              data-user-popover="33"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/python.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Alejandro Badajoz</h3>
          <p data-filter-match>Business Analyst</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/40.jpg"
              alt=""
              data-user-popover="11"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/android.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Jeanne Marchand</h3>
          <p data-filter-match>Mobile Developer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/19.jpg"
              alt=""
              data-user-popover="17"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/germany.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Greta Kroppfer</h3>
          <p data-filter-match>Sales Manager</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-primary is-raised">
              Add To Project
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/9.jpg"
              alt=""
              data-user-popover="1"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/photoshop.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Anna Baker</h3>
          <p data-filter-match>UI/UX Designer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/5.jpg"
              alt=""
              data-user-popover="9"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/united-states-of-america.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Mary Lebowski</h3>
          <p data-filter-match>Project Manager</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-primary is-raised">
              Add To Project
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/32.jpg"
              alt=""
              data-user-popover="28"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/united-states-of-america.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Jonathan Krugger</h3>
          <p data-filter-match>Product Manager</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-primary is-raised">
              Add To Project
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/36.jpg"
              alt=""
              data-user-popover="30"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/reactjs.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Benoit Leblanc</h3>
          <p data-filter-match>Software Engineer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/38.jpg"
              alt=""
              data-user-popover="32"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/vuejs.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Christie Dallas</h3>
          <p data-filter-match>Web Developer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/26.jpg"
              alt=""
              data-user-popover="23"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/html5.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Courtney Wilson</h3>
          <p data-filter-match>Web Developer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/16.jpg"
              alt=""
              data-user-popover="16"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/united-states-of-america.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Jason Guarank</h3>
          <p data-filter-match>Business Analyst</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/23.jpg"
              alt=""
              data-user-popover="21"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/united-states-of-america.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Irina Vierbovsky</h3>
          <p data-filter-match>Project Manager</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/28.jpg"
              alt=""
              data-user-popover="24"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/angular.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Edouard Falant</h3>
          <p data-filter-match>Web Developer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-primary is-raised">
              Add To Project
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/7.jpg"
              alt=""
              data-user-popover="0"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/stacks/csharp.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Alice Carasca</h3>
          <p data-filter-match>Software Engineer</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <div class="grid-item">
          <UserCardDropdown />
          <div class="v-avatar is-big">
            <img
              class="avatar"
              src="/images/avatars/photos/22.jpg"
              alt=""
              data-user-popover="20"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/united-states-of-america.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <h3 class="dark-inverted" data-filter-match>Dwayne Hicks</h3>
          <p data-filter-match>Product Manager</p>
          <div class="button-wrap has-text-centered">
            <button class="button v-button is-dark-outlined">
              Add To Team
            </button>
            <div>
              <a class="dark-inverted-hover">View Profile</a>
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
