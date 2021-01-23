<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  activeTab: {
    type: String as PropType<'all' | 'saved'>,
    default: 'all',
  },
})
</script>

<template>
  <!--List-->
  <div class="list-view list-view-v3">
    <!--List Empty Search Placeholder -->
    <div class="page-placeholder custom-text-filter-placeholder is-hidden">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/images/illustrations/placeholders/search-3.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/images/illustrations/placeholders/search-3-dark.svg"
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
            <img
              class="avatar"
              src="/images/photo/demo/brands/airbnb.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>Node JS Fullstack Developer wanted 👌</h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>San Diego</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Full Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>3 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/hubspot.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                Project Manager for React Native Project
              </h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>Los Angeles</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Part Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>2 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/slack.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                UI/UX Designer to Consolidate the UX Team 💪💪
              </h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>Los Angeles</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Full Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>3 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/gitlab.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>IT Team Senior DevOps Manager</h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>Los Angeles</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Full Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>10 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/google.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                Fullstack Developer With Solid MongoDB Skills
              </h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>San Francisco</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Full Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>5 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/facebook.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                Fullstack Javascript and Node JS Developer
              </h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>Pasadena</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Full Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>4 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/tnw.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>Product Owner for React Native Project</h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>Los Angeles</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Full Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>2 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/dribbble.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                UI/UX Designer With Html5 and Sass Skills 👍
              </h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>Los Angeles</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Full Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>4 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/atlassian.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>Experienced Senior UX Team Manager</h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>Melbourne</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Full Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>10 Years Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Item-->
        <div class="list-view-item">
          <div class="list-view-item-inner">
            <img
              class="avatar"
              src="/images/photo/demo/brands/github.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta-left">
              <h3 data-filter-match>
                Fullstack Javascript and Node JS Developer
              </h3>
              <span>
                <i class="iconify" data-icon="feather:map-pin"></i>
                <span data-filter-match>Los Angeles</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:clock"></i>
                <span data-filter-match>Part Time</span>
                <i class="fas fa-circle icon-separator"></i>
                <i class="iconify" data-icon="feather:check-circle"></i>
                <span data-filter-match>1 Year Exp.</span>
              </span>
            </div>
            <div class="meta-right">
              <div class="buttons">
                <a class="button h-button is-primary is-outlined is-raised"
                  >Apply Now</a
                >
                <button
                  class="button is-light is-circle hint--bubble hint--primary hint--top"
                  data-hint="Save"
                >
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:bookmark"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FlexPagination />
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
              src="/images/illustrations/placeholders/thinking-canvas.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/images/illustrations/placeholders/thinking-canvas-dark.svg"
              alt=""
            />
            <h3>No saved jobs.</h3>
            <p class="">
              Looks like you don't have any saved jobs for the moment. It's also
              possible that some of your saved items expired
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
