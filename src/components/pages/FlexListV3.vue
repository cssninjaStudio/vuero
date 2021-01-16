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
  <div class="flex-list-wrapper flex-list-v3">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/@images/illustrations/placeholders/search-4.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@images/illustrations/placeholders/search-4-dark.svg"
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
      :class="[activeTab === 'all' && 'is-active']"
    >
      <div class="flex-table">
        <!--Table header-->
        <div class="flex-table-header" data-filter-hide>
          <span class="is-grow-lg">Course</span>
          <span>Category</span>
          <span>Main Skill</span>
          <span>Difficulty</span>
          <span class="cell-end">Actions</span>
        </div>

        <div class="flex-list-inner">
          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/1.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Introduction to Html5</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/8.jpg"
                        alt=""
                        data-user-popover="3"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Erik K.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnil lnil-html5 cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>Html5</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $26</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/2.png"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Mastering VueJS and Typescript</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/12.jpg"
                        alt=""
                        data-user-popover="2"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Joshua S.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-nodejs cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>NodeJS</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $12</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/3.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Discovering CSS3 and Stylesheets</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        data-user-popover="9"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Mary L.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-css3 cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>CSS3</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $16</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/4.png"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Get Started with Laravel 6</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/18.jpg"
                        alt=""
                        data-user-popover="7"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Esteban C.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-laravel cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>Laravel</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> FREE</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/5.jpeg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Python Basics for Beginners</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/18.jpg"
                        alt=""
                        data-user-popover="7"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Esteban C.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-python cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>Python</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $8</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/6.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Mastering State with React Hooks</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/30.jpg"
                        alt=""
                        data-user-popover="26"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Clément D.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-react cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>ReactJS</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $25</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/7.png"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Setting up an Express Server</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/38.jpg"
                        alt=""
                        data-user-popover="32"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Christie D.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-nodejs cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>NodeJS</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot"></i>
                <i class="fas fa-circle dot"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $12</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/9.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Learning to use Kubernetes</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/30.jpg"
                        alt=""
                        data-user-popover="26"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Clément D.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-chrome cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match
                >Kubernetes</span
              >
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $34</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/11.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >Another Angular Crash Course</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/34.jpg"
                        alt=""
                        data-user-popover="12"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Daniel R.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-angular cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>Angular</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $22</a
              >
            </div>
          </div>

          <!--Table item-->
          <div class="flex-table-item">
            <div class="flex-table-cell is-media is-grow-lg">
              <img
                class="media"
                src="/@images/photo/demo/courses/12.jpg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x110'
                "
              />
              <div>
                <span class="item-name dark-inverted" data-filter-match
                  >learning Advanced Docker Concepts</span
                >
                <div class="item-meta">
                  <div class="flex-media">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/30.jpg"
                        alt=""
                        data-user-popover="26"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <span>by Clément D.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-table-cell" data-th="Category">
              <span class="light-text" data-filter-match>Web Development</span>
            </div>
            <div class="flex-table-cell" data-th="Main Skill">
              <i class="lnir lnir-docker cell-icon is-pushed-mobile"></i>
              <span class="light-text no-push" data-filter-match>Docker</span>
            </div>
            <div class="flex-table-cell" data-th="Difficulty">
              <span class="dot-levels">
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
                <i class="fas fa-circle dot active"></i>
              </span>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <a class="button h-button has-dot dark-outlined is-pushed-mobile"
                >Purchase <i class="fas fa-circle dot"></i> $35</a
              >
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
    </div>

    <!--inactive Tab-->
    <div
      id="inactive-items-tab"
      class="tab-content"
      :class="[activeTab === 'saved' && 'is-active']"
    >
      <!--Empty placeholder-->
      <div class="page-placeholder">
        <div class="placeholder-content">
          <img
            class="light-image is-larger"
            src="/@images/illustrations/placeholders/courses.svg"
            alt=""
          />
          <img
            class="dark-image is-larger"
            src="/@images/illustrations/placeholders/courses-dark.svg"
            alt=""
          />
          <h3>No saved courses.</h3>
          <p class="is-larger">
            Looks like you don't have any saved courses yet. You can add a
            course to your saved courses by visiting the course details and
            clicking on the bookmark button.
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
