<template>
  <div class="tile-grid tile-grid-v3">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/images/illustrations/placeholders/search-6.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/images/illustrations/placeholders/search-6-dark.svg"
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

    <!--Tile Grid v3-->
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <a href="#" class="tile is-child tile-grid-item is-medium">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/11.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  How to serve coffee at the office the proper way
                </h3>
                <p class="h-hidden-tablet-l h-hidden-desktop">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match
                    >Alejandro B.</span
                  >
                  <span>30 minutes ago</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="tile is-parent">
        <a href="#" class="tile is-child tile-grid-item is-medium">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/12.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  Teamwork can dramatically increase productivity
                </h3>
                <p class="h-hidden-tablet-l h-hidden-desktop">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match>Hilde V.</span>
                  <span>4 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="tile is-parent">
        <a href="#" class="tile is-child tile-grid-item is-medium">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/13.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  Is team building a scam or the next thing?
                </h3>
                <p class="h-hidden-tablet-l h-hidden-desktop">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match
                    >Sandrine C.</span
                  >
                  <span>5 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <a href="#" class="tile is-child tile-grid-item is-medium">
              <div class="tile-grid-item-inner">
                <img
                  src="/images/photo/demo/14.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/400x300'
                  "
                />
                <div class="meta">
                  <div class="tile-title">
                    <h3 class="dark-inverted" data-filter-match>
                      3 things you should know when applying for developer jobs
                    </h3>
                    <p class="h-hidden-tablet-l h-hidden-desktop">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Optime, inquam. Duo Reges constructio.
                    </p>
                  </div>
                  <div class="tile-meta">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/27.jpg"
                        alt=""
                        data-user-popover="10"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta-inner">
                      <span class="dark-inverted" data-filter-match
                        >Carmen E.</span
                      >
                      <span>8 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" class="tile is-child tile-grid-item is-medium">
              <div class="tile-grid-item-inner">
                <img
                  src="/images/photo/demo/15.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/400x300'
                  "
                />
                <div class="meta">
                  <div class="tile-title">
                    <h3 class="dark-inverted" data-filter-match>
                      The construction business massively invests in mobile apps
                    </h3>
                    <p class="h-hidden-tablet-l h-hidden-desktop">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Optime, inquam. Duo Reges constructio.
                    </p>
                  </div>
                  <div class="tile-meta">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/10.jpg"
                        alt=""
                        data-user-popover="8"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta-inner">
                      <span class="dark-inverted" data-filter-match
                        >Henry G.</span
                      >
                      <span>1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="tile is-parent">
            <a href="#" class="tile is-child tile-grid-item is-large">
              <div class="tile-grid-item-inner">
                <img
                  src="/images/photo/demo/16.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/400x300'
                  "
                />
                <div class="meta">
                  <div class="tile-title">
                    <h3 class="dark-inverted" data-filter-match>
                      Finding the right spot for your startup
                    </h3>
                    <p class="h-hidden-tablet-l h-hidden-desktop">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Optime, inquam. Duo Reges constructio.
                    </p>
                  </div>
                  <div class="tile-meta">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/22.jpg"
                        alt=""
                        data-user-popover="5"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta-inner">
                      <span class="dark-inverted" data-filter-match
                        >Jimmy H.</span
                      >
                      <span>1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="tile is-parent">
          <a href="#" class="tile is-child tile-grid-item is-wide">
            <div class="tile-grid-item-inner">
              <img
                src="/images/photo/demo/18.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/400x300'
                "
              />
              <div class="meta">
                <div class="tile-title">
                  <h3 class="dark-inverted" data-filter-match>
                    4 tips to make your business lunches awesome
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Optime, inquam. Duo Reges constructio.
                  </p>
                  <p class="h-hidden-mobile h-hidden-tablet-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Optime, inquam. Duo Reges constructio.
                  </p>
                </div>
                <div class="tile-meta">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/16.jpg"
                      alt=""
                      data-user-popover="16"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="meta-inner">
                    <span class="dark-inverted" data-filter-match
                      >Jason G.</span
                    >
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="tile is-parent">
        <a href="#" class="tile is-child tile-grid-item is-tall">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/19.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  Setting up a design system for your app project
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
                <p class="h-hidden-mobile h-hidden-tablet-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match
                    >Courtney W.</span
                  >
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <a href="#" class="tile is-child tile-grid-item is-wide">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/20.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  Foundation of a great E-Learning system
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match>Erik K.</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="tile is-parent is-6">
        <a href="#" class="tile is-child tile-grid-item is-wide">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/23.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  Why it pays to profile your customers
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match>Jeanne M.</span>
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <a href="#" class="tile is-child tile-grid-item is-medium">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/22.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  Using flashy colors in your websites and apps
                </h3>
                <p class="h-hidden-tablet-l h-hidden-desktop">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match>Ana B.</span>
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="tile is-parent">
        <a href="#" class="tile is-child tile-grid-item is-medium">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/24.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  Building a consistent and talented team
                </h3>
                <p class="h-hidden-tablet-l h-hidden-desktop">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match>Greta K.</span>
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="tile is-parent">
        <a href="#" class="tile is-child tile-grid-item is-medium">
          <div class="tile-grid-item-inner">
            <img
              src="/images/photo/demo/27.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/400x300'"
            />
            <div class="meta">
              <div class="tile-title">
                <h3 class="dark-inverted" data-filter-match>
                  Diving into building an e-commerce brand - part 1
                </h3>
                <p class="h-hidden-tablet-l h-hidden-desktop">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Optime, inquam. Duo Reges constructio.
                </p>
              </div>
              <div class="tile-meta">
                <div class="h-avatar is-small">
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
                <div class="meta-inner">
                  <span class="dark-inverted" data-filter-match>Harvey M.</span>
                  <span>4 days ago</span>
                </div>
              </div>
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
@import '../../assets/scss/pages/grids/_grid-tiles.scss';
</style>
