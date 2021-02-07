<template>
  <div class="card-grid card-grid-v4">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/@src/assets/illustrations/placeholders/search-4.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
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
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/11.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              How to serve coffee at the office the proper way
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Alejandro B.</span>
              <span>30 minutes ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/12.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Teamwork can dramatically increase productivity
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/15.jpg"
                alt=""
                data-user-popover="15"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Hilde V.</span>
              <span>4 hours ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/13.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Is team building a scam or the next thing?
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/24.jpg"
                alt=""
                data-user-popover="22"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Sandrine C.</span>
              <span>5 hours ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/14.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              3 things you should know when applying for developer jobs
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Carmen E.</span>
              <span>8 hours ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/15.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              The construction business massively invests in mobile apps
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/10.jpg"
                alt=""
                data-user-popover="8"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Henry G.</span>
              <span>1 day ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/17.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Finding the right spot for your startup
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Jimmy H.</span>
              <span>1 day ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/18.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              4 tips to make your business lunches awesome
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/16.jpg"
                alt=""
                data-user-popover="16"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Jason G.</span>
              <span>2 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/19.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Setting up a design system for your app project
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Courtney W.</span>
              <span>2 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/20.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Foundation of a great E-Learning system
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/8.jpg"
                alt=""
                data-user-popover="3"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Erik K.</span>
              <span>2 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/21.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Have you considered product management training?
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Ryan B.</span>
              <span>3 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/22.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Using flashy colors in your websites and apps
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/9.jpg"
                alt=""
                data-user-popover="1"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Ana B.</span>
              <span>3 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/23.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">Why it pays to profile your customers</h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/40.jpg"
                alt=""
                data-user-popover="11"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Jeanne M.</span>
              <span>3 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/24.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Building a consistent and talented team
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/19.jpg"
                alt=""
                data-user-popover="17"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Greta K.</span>
              <span>3 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/25.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Building a consistent and talented team
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Edouard F.</span>
              <span>3 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/26.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              What framework to choose to build a mobile app in 2020?
            </h3>
          </div>
          <div class="card-grid-item-footer">
            <div class="v-avatar is-small">
              <img
                class="avatar"
                src="/images/avatars/photos/5.jpg"
                alt=""
                data-user-popover="9"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Mary L.</span>
              <span>3 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/27.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Diving into building an e-commerce brand - part 1
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Harvey M.</span>
              <span>4 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/28.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              Diving into building an e-commerce brand - part 2
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Harvey M.</span>
              <span>4 days ago</span>
            </div>
          </div>
        </a>
      </div>

      <!--Grid item-->
      <div class="column is-3">
        <a href="#" class="card-grid-item">
          <img
            src="/images/photo/demo/29.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/400x300'"
          />
          <div class="card-grid-item-content">
            <h3 class="dark-inverted">
              How to make sure to reach the goals you set
            </h3>
          </div>
          <div class="card-grid-item-footer">
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
            <div class="meta">
              <span class="dark-inverted" data-filter-match>Yasseen A.</span>
              <span>4 days ago</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/grids/_grid-cards.scss';
</style>
