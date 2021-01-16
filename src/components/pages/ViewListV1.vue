<template>
  <!--List-->
  <div class="list-view list-view-v1">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/@images/illustrations/placeholders/search-1.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@images/illustrations/placeholders/search-1-dark.svg"
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

    <div class="list-view-inner">
      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/5.jpg"
              alt=""
              data-user-popover="9"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/@images/icons/flags/united-states-of-america.svg"
              alt=""
            />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Mary Lebowski</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>San Diego, CA</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-primary is-elevated"
                data-filter-match
                >Project Manager</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>24</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>167</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>72</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/9.jpg"
                    alt=""
                    data-user-popover="1"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/34.jpg"
              alt=""
              data-user-popover="12"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img class="badge" src="/@images/icons/flags/canada.svg" alt="" />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Daniel Redbird</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>Toronto, Canada</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-orange is-elevated"
                data-filter-match
                >Web Developer</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>45</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>12</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>5</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/12.jpg"
                    alt=""
                    data-user-popover="2"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
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
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/40.jpg"
                    alt=""
                    data-user-popover="11"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+5</span>
                    </span>
                  </span>
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/8.jpg"
              alt=""
              data-user-popover="3"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/@images/icons/flags/united-states-of-america.svg"
              alt=""
            />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Erik Kovalsky</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>New York, NY</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-secondary is-elevated"
                data-filter-match
                >Product Manager</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>14</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>97</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>16</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
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
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/23.jpg"
                    alt=""
                    data-user-popover="21"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/40.jpg"
              alt=""
              data-user-popover="11"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img class="badge" src="/@images/icons/flags/france.svg" alt="" />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Jeanne Marchand</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>Paris, France</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-orange is-elevated"
                data-filter-match
                >Mobile Developer</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>6</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>12</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>8</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/18.jpg"
                    alt=""
                    data-user-popover="7"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
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
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+5</span>
                    </span>
                  </span>
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/27.jpg"
              alt=""
              data-user-popover="10"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img class="badge" src="/@images/icons/flags/spain.svg" alt="" />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Carmen Escudero</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>Madrid, Spain</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-primary is-elevated"
                data-filter-match
                >HR Manager</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>8</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>158</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>54</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/18.jpg"
                    alt=""
                    data-user-popover="7"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/9.jpg"
              alt=""
              data-user-popover="1"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/@images/icons/flags/united-states-of-america.svg"
              alt=""
            />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Anna Baker</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>San Francisco, CA</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-green is-elevated"
                data-filter-match
                >UI/UX Designer</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>19</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>28</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>12</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/5.jpg"
                    alt=""
                    data-user-popover="9"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/18.jpg"
              alt=""
              data-user-popover="7"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/@images/icons/flags/united-states-of-america.svg"
              alt=""
            />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Esteban Castellanos</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>Miami, FL</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-green is-elevated"
                data-filter-match
                >UI/UX Designer</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>59</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>158</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>16</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/27.jpg"
                    alt=""
                    data-user-popover="10"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/16.jpg"
                    alt=""
                    data-user-popover="16"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/29.jpg"
                    alt=""
                    data-user-popover="25"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+7</span>
                    </span>
                  </span>
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/10.jpg"
              alt=""
              data-user-popover="8"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/@images/icons/flags/united-states-of-america.svg"
              alt=""
            />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Henry Grobstone</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>Miami, FL</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-primary is-elevated"
                data-filter-match
                >Business Analyst</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>42</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>15</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>2</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/32.jpg"
                    alt=""
                    data-user-popover="28"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/22.jpg"
                    alt=""
                    data-user-popover="20"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/25.jpg"
              alt=""
              data-user-popover="4"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/@images/icons/flags/united-states-of-america.svg"
              alt=""
            />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Melany Wallace</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>San Jose, CA</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-orange is-elevated"
                data-filter-match
                >Web Developer</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>17</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>22</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>4</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/26.jpg"
                    alt=""
                    data-user-popover="23"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/38.jpg"
                    alt=""
                    data-user-popover="32"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/21.jpg"
                    alt=""
                    data-user-popover="19"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+2</span>
                    </span>
                  </span>
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>

      <!--Item-->
      <div class="list-view-item">
        <div class="list-view-item-inner">
          <div class="h-avatar is-large">
            <img
              class="avatar"
              src="/@images/avatars/photos/7.jpg"
              alt=""
              data-user-popover="0"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/@images/icons/flags/united-states-of-america.svg"
              alt=""
            />
          </div>
          <div class="meta-left">
            <h3 data-filter-match>Alice Carasca</h3>
            <span>
              <Icon icon="feather:map-pin" />
              <span data-filter-match>San Diego, CA</span>
            </span>
          </div>
          <div class="meta-right">
            <div class="tags">
              <span
                class="tag is-rounded is-orange is-elevated"
                data-filter-match
                >Software Engineer</span
              >
            </div>

            <div class="stats">
              <div class="stat">
                <span>31</span>
                <span>Projects</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>82</span>
                <span>Replies</span>
              </div>
              <div class="separator"></div>
              <div class="stat">
                <span>14</span>
                <span>Posts</span>
              </div>
            </div>

            <div class="network">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/9.jpg"
                    alt=""
                    data-user-popover="1"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
              <span>in Team</span>
            </div>

            <!--Dropdown-->
            <ListViewV1Dropdown />
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav
    class="flex-pagination pagination is-rounded"
    aria-label="pagination"
    data-filter-hide
  >
    <a class="pagination-previous has-chevron"
      ><Icon icon="feather:chevron-left"
    /></a>
    <a class="pagination-next has-chevron"
      ><Icon icon="feather:chevron-right"
    /></a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link" aria-label="Goto page 1">1</a>
      </li>
      <li><span class="pagination-ellipsis">…</span></li>
      <li>
        <a class="pagination-link" aria-label="Goto page 45">45</a>
      </li>
      <li>
        <a
          class="pagination-link is-current"
          aria-label="Page 46"
          aria-current="page"
          >46</a
        >
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 47">47</a>
      </li>
      <li><span class="pagination-ellipsis">…</span></li>
      <li>
        <a class="pagination-link" aria-label="Goto page 86">86</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/lists/_list-view.scss';
</style>
