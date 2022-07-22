<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
import {
  valueSingle,
  optionsSingle,
} from '/@src/data/dashboards/lifestyle-v1/dashboardData'
</script>

<template>
  <div id="content-tab" class="tab-content is-active">
    <div class="body-title">
      <h3>Content Stats</h3>
      <VField class="is-minimal-select">
        <VControl>
          <Multiselect
            id="content-stats-select"
            v-model="valueSingle"
            :options="optionsSingle"
            placeholder="Select an option"
            :max-height="145"
          />
        </VControl>
      </VField>
    </div>

    <div class="columns is-multiline">
      <!--Posting hours-->
      <div class="column is-12 h-hidden-mobile">
        <OverviewCard heatmap>
          <div class="card-head">
            <h3 class="dark-inverted">Posting Habits</h3>
          </div>

          <Heatmap />
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4">
        <OverviewCard>
          <div class="card-head">
            <h4>Post Day</h4>
            <VIconBox color="green" rounded>
              <i aria-hidden="true" class="fas fa-calendar-day"></i>
            </VIconBox>
          </div>
          <div class="card-metric is-smaller">
            <span>Monday</span>
          </div>
          <div class="card-foot is-down">
            <span>Best day to post.</span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4">
        <OverviewCard>
          <div class="card-head">
            <h4>hashtags</h4>
            <VIconBox color="info" rounded>
              <i aria-hidden="true" class="fab fa-slack-hash"></i>
            </VIconBox>
          </div>
          <div class="card-metric is-smaller">
            <span>#Music</span>
          </div>
          <div class="card-foot is-down">
            <span>Most used hashtag.</span>
          </div>
        </OverviewCard>
      </div>

      <!--Card-->
      <div class="column is-4">
        <OverviewCard>
          <div class="card-head">
            <h4>Filters</h4>
            <VIconBox color="orange" rounded>
              <i aria-hidden="true" class="fas fa-camera"></i>
            </VIconBox>
          </div>
          <div class="card-metric is-smaller">
            <span>Normal</span>
          </div>
          <div class="card-foot is-down">
            <span>Most used filter.</span>
          </div>
        </OverviewCard>
      </div>

      <div class="column is-12">
        <OverviewCard metrics>
          <div class="columns is-flex-tablet-p">
            <!--Metric-->
            <div class="column is-3">
              <div class="metric">
                <div class="metric-head">
                  <h4>Avg. Payout per Post</h4>
                </div>
                <div class="metric is-smaller">
                  <span>$640.42</span>
                </div>
                <div class="metric-foot is-up">
                  <span>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:arrow-right"
                      ></i>
                      +0.8%</span
                    >
                    more than usual.
                  </span>
                </div>
              </div>
            </div>
            <!--Metric-->
            <div class="column is-3">
              <div class="metric">
                <div class="metric-head">
                  <h4>Lowest Payout</h4>
                </div>
                <div class="metric is-smaller">
                  <span>$451.32</span>
                </div>
                <div class="metric-foot is-down">
                  <span>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:arrow-right"
                      ></i>
                      -0.2%</span
                    >
                    less than ususal.
                  </span>
                </div>
              </div>
            </div>
            <!--Metric-->
            <div class="column is-3">
              <div class="metric">
                <div class="metric-head">
                  <h4>Highest Payout</h4>
                </div>
                <div class="metric is-smaller">
                  <span>$731.87</span>
                </div>
                <div class="metric-foot is-up">
                  <span>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:arrow-right"
                      ></i>
                      +1.2%</span
                    >
                    more than ususal.
                  </span>
                </div>
              </div>
            </div>
            <!--Metric-->
            <div class="column is-3">
              <div class="metric">
                <div class="metric-head">
                  <h4>Lifetime Earnings</h4>
                </div>
                <div class="metric is-smaller">
                  <span>$23.4K</span>
                </div>
                <div class="metric-foot is-up">
                  <span>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:arrow-right"
                      ></i>
                      +4.2%</span
                    >
                    more than ususal.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </OverviewCard>
      </div>

      <!--Posts-->
      <div class="column is-4">
        <div class="card v-card">
          <header class="card-header">
            <div class="post-stats">
              <span>Most Liked Posts</span>
              <div class="post-stat">
                <i aria-hidden="true" class="fas fa-heart text-h-red"></i>
                <span class="count dark-inverted">15.9K</span>
              </div>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="/demo/photos/30.jpg"
                alt=""
                @error.once="onceImageErrored(1280, 960)"
              />
            </figure>
          </div>
          <div class="card-content post-group-wrap">
            <div class="post-group">
              <a>
                <img
                  src="/demo/photos/33.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/34.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/35.jpeg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/36.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--Posts-->
      <div class="column is-4">
        <div class="card v-card">
          <header class="card-header">
            <div class="post-stats">
              <span>Most Commented Posts</span>
              <div class="post-stat">
                <i aria-hidden="true" class="fas fa-comment text-h-yellow"></i>
                <span class="count dark-inverted">2.3K</span>
              </div>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="/demo/photos/31.png"
                alt=""
                @error.once="onceImageErrored(1280, 960)"
              />
            </figure>
          </div>
          <div class="card-content post-group-wrap">
            <div class="post-group">
              <a>
                <img
                  src="/demo/photos/33.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/34.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/35.jpeg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/36.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--Posts-->
      <div class="column is-4">
        <div class="card v-card">
          <header class="card-header">
            <div class="post-stats">
              <span>Most Engaging Posts</span>
              <div class="post-stat">
                <i aria-hidden="true" class="fas fa-hand-paper text-h-green"></i>
                <span class="count dark-inverted">51.6%</span>
              </div>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="/demo/photos/32.jpg"
                alt=""
                @error.once="onceImageErrored(1280, 960)"
              />
            </figure>
          </div>
          <div class="card-content post-group-wrap">
            <div class="post-group">
              <a>
                <img
                  src="/demo/photos/33.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/34.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/35.jpeg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
              <a>
                <img
                  src="/demo/photos/36.jpg"
                  alt=""
                  @error.once="onceImageErrored(1280, 960)"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
