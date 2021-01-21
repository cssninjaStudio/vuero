<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  activeTab: {
    type: String as PropType<'overview' | 'content' | 'brands'>,
    required: true,
  },
})
</script>

<template>
  <div class="flex-list-wrapper flex-list-v2">
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

    <!--Active Tab-->
    <div
      id="active-items-tab"
      class="tab-content"
      :class="[activeTab === 'active' && 'is-active']"
    >
      <div class="flex-table">
        <!--Table header-->
        <div class="flex-table-header" data-filter-hide>
          <span class="is-grow">Project</span>
          <span>Customer</span>
          <span>Industry</span>
          <span>Status</span>
          <span>Team</span>
          <span class="cell-end">Actions</span>
        </div>

        <div class="flex-list-inner">
          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/1.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Website Redesign</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>3
                    months</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Blake & Mortimer</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>HR Vetting</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>In Progress</span>
            </div>
            <div class="flex-table-cell" data-th="Relations">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
                  <span class="avatar is-fake is-info" data-user-popover="34">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+2</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/3.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Mobile App Rework</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>2
                    months</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Pollos Hermanos</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Food</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>In Progress</span>
            </div>
            <div class="flex-table-cell" data-th="Team">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
                  <span class="avatar is-fake is-danger" data-user-popover="35">
                    <span>SC</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/2.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >ERP Solution Development</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>6
                    months</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Best Mart</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Distribution</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>Paused</span>
            </div>
            <div class="flex-table-cell" data-th="Team">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
                  <span
                    class="avatar is-fake is-warning"
                    data-user-popover="37"
                  >
                    <span>AT</span>
                  </span>
                </div>
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
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+6</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/4.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Website Proof Of Concept</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>1
                    month</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Los Fragueros</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Clothing</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>In Progress</span>
            </div>
            <div class="flex-table-cell" data-th="Team">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
                  <span
                    class="avatar is-fake is-success"
                    data-user-popover="36"
                  >
                    <span>BT</span>
                  </span>
                </div>
                <div class="h-avatar is-small">
                  <span
                    class="avatar is-fake is-warning"
                    data-user-popover="37"
                  >
                    <span>AT</span>
                  </span>
                </div>
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
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/6.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Add an Accouting Module</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>3
                    weeks</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>WorkForce</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Software</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>In Progress</span>
            </div>
            <div class="flex-table-cell" data-th="Team">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
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
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/5.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >New UX Exploration</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>3
                    months</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Brenton Brothers</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Software</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>Offline</span>
            </div>
            <div class="flex-table-cell" data-th="Team">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/36.jpg"
                    alt=""
                    data-user-popover="30"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
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
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/7.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Ordering App Development</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>5
                    months</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Find Your Stuff</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Retail</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>In Progress</span>
            </div>
            <div class="flex-table-cell" data-th="Team">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/11.jpg"
                    alt=""
                    data-user-popover="13"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+2</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/8.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Learning App for Children</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>2
                    months</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Coding Kids</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Education</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>In Progress</span>
            </div>
            <div class="flex-table-cell" data-th="Relations">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
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
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/9.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >App Wireframe Implementation</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>2
                    weeks</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Freako</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Retail</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>In progress</span>
            </div>
            <div class="flex-table-cell" data-th="Relations">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
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
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/images/photo/demo/abstracts/10.png"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Corporate Social Network</span
                >
                <span class="item-meta">
                  <span data-filter-match
                    ><i class="iconify" data-icon="feather:clock"></i>5
                    months</span
                  >
                </span>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Customer">
              <span class="light-text" data-filter-match>Publicis</span>
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <span class="light-text" data-filter-match>Media</span>
            </div>
            <div class="flex-table-cell" data-th="Status">
              <span class="tag is-rounded" data-filter-match>In Progress</span>
            </div>
            <div class="flex-table-cell" data-th="Team">
              <div class="avatar-stack is-pushed-mobile">
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
                  <span class="avatar is-fake is-info" data-user-popover="34">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-small">
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
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+2</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <ProjectListDropdown />
            </div>
          </div>
        </div>
      </div>

      <!--Table Pagination-->
      <nav
        class="flex-pagination pagination is-rounded"
        aria-label="pagination"
        data-filter-hide
      >
        <a class="pagination-previous has-chevron"
          ><i class="iconify" data-icon="feather:chevron-left"
        /></a>
        <a class="pagination-next has-chevron"
          ><i class="iconify" data-icon="feather:chevron-right"
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
    </div>

    <!--inactive Tab-->
    <div
      id="inactive-items-tab"
      class="tab-content"
      :class="[activeTab === 'closed' && 'is-active']"
    >
      <!--Empty placeholder-->
      <div class="page-placeholder">
        <div class="placeholder-content">
          <img
            class="light-image is-larger"
            src="/images/illustrations/placeholders/projects.svg"
            alt=""
          />
          <img
            class="dark-image is-larger"
            src="/images/illustrations/placeholders/projects-dark.svg"
            alt=""
          />
          <h3>No closed projects.</h3>
          <p>
            Looks like you don't have any closed project yet. When you'll start
            closing off projects, they will be showing up in here.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/pages/lists/_list-flex.scss';
</style>
