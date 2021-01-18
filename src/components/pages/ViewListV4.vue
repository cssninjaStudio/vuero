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
  <!--List-->
  <div class="list-view list-view-v4">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/@images/illustrations/placeholders/search-3.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@images/illustrations/placeholders/search-3-dark.svg"
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
      <div class="list-view-inner">
        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Strawberry &amp; Cream Cake</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-1.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/7.jpg"
                  alt=""
                  data-user-popover="0"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Alice C.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Cakes</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>1h 45m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>3 files</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/9.jpg"
                      alt=""
                      data-user-popover="1"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
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
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Orange & Lemon Cake</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-2.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/22.jpg"
                  alt=""
                  data-user-popover="5"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Jimmy H.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Cakes</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>1h 15m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>2 files</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
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
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/27.jpg"
                      alt=""
                      data-user-popover="10"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
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
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+15</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Three Chocolates Cake</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-3.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/15.jpg"
                  alt=""
                  data-user-popover="15"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Hilde V.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Cakes</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>2h</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>4 files</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/19.jpg"
                      alt=""
                      data-user-popover="17"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/24.jpg"
                      alt=""
                      data-user-popover="22"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
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
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+15</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Wedding Cake</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-4.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/26.jpg"
                  alt=""
                  data-user-popover="23"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Courtney W.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Cakes</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>3h 30m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>7 files</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/32.jpg"
                      alt=""
                      data-user-popover="28"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
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
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/29.jpg"
                      alt=""
                      data-user-popover="25"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+79</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Vanilla Waffles</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-5.svg"
              alt=""
              data-user-popover="14"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/14.jpg"
                  alt=""
                  data-user-popover="14"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Ryan B.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Waffles</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>1h 00m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>2 files</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
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
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/9.jpg"
                      alt=""
                      data-user-popover="1"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
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
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+45</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Strawberry Slice</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-6.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/7.jpg"
                  alt=""
                  data-user-popover="0"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Alice C.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Slices</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>45m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>1 file</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
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
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/25.jpg"
                      alt=""
                      data-user-popover="4"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
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
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+37</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Marmelade Donuts</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-7.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/21.jpg"
                  alt=""
                  data-user-popover="19"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Elizabeth F.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Donuts</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>2h 15m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>2 files</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
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
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/25.jpg"
                      alt=""
                      data-user-popover="4"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+45</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Peanut Butter Sandwich</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-8.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/12.jpg"
                  alt=""
                  data-user-popover="2"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Joshua S.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Sandwiches</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>15m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>1 file</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/19.jpg"
                      alt=""
                      data-user-popover="17"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/28.jpg"
                      alt=""
                      data-user-popover="24"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/36.jpg"
                      alt=""
                      data-user-popover="30"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+29</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Peanut Butter Slice</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-9.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/12.jpg"
                  alt=""
                  data-user-popover="2"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Joshua S.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Slices</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>15m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>1 file</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
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
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/31.jpg"
                      alt=""
                      data-user-popover="27"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
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
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+12</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <div class="pre-meta">
              <h3 data-filter-match>Strawberry Spicy</h3>
            </div>
            <img
              class="avatar"
              src="/@images/illustrations/list-views/cake-10.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                <img
                  class="avatar"
                  src="/@images/avatars/photos/11.jpg"
                  alt=""
                  data-user-popover="13"
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <span>by Kelly M.</span>
              </h3>
              <span>
                <i class="iconify" data-icon="feather:archive"></i>
                <span data-filter-match>Slices</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>1h 15m</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:paperclip"></i>
                <span data-filter-match>2 files</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="network">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/24.jpg"
                      alt=""
                      data-user-popover="22"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/23.jpg"
                      alt=""
                      data-user-popover="23"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
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
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+61</span>
                      </span>
                    </span>
                  </div>
                </div>
                <span>Like this</span>
              </div>
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >View Recipe</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:heart"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        class="flex-pagination pagination is-rounded"
        data-hint="pagination"
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
            <a class="pagination-link" data-hint="Goto page 1">1</a>
          </li>
          <li><span class="pagination-ellipsis">…</span></li>
          <li>
            <a class="pagination-link" data-hint="Goto page 45">45</a>
          </li>
          <li>
            <a
              class="pagination-link is-current"
              data-hint="Page 46"
              aria-current="page"
              >46</a
            >
          </li>
          <li>
            <a class="pagination-link" data-hint="Goto page 47">47</a>
          </li>
          <li><span class="pagination-ellipsis">…</span></li>
          <li>
            <a class="pagination-link" data-hint="Goto page 86">86</a>
          </li>
        </ul>
      </nav>
    </div>

    <!--Inactive Tab-->
    <div
      id="inactive-items-tab"
      class="tab-content"
      :class="[activeTab === 'saved' && 'is-active']"
    >
      <div class="list-view-inner">
        <!--Empty placeholder-->
        <div
          class="page-placeholder custom-text-filter-placeholder"
          data-filter-hide
        >
          <div class="placeholder-content">
            <img
              class="light-image"
              src="/@images/illustrations/placeholders/cooking.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@images/illustrations/placeholders/cooking-dark.svg"
              alt=""
            />
            <h3>No saved recipes.</h3>
            <p class="is-larger">
              Looks like you don't have any saved recipes for the moment. Start
              by exploring the latest ones and add your favorites to the saved
              recipes section.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/lists/_list-view.scss';
</style>
