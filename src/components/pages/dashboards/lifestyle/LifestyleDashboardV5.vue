<script setup lang="ts">
import {
  members,
  featuredLeft,
  featuredRight,
  feed,
} from '/@src/data/dashboards/lifestyle-v5'
</script>

<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v5">
    <div class="dashboard-title is-main">
      <div class="left">
        <h2 class="dark-inverted">Recent Videos</h2>
        <p class="h-hidden-mobile">Recent videos in this workspace</p>
      </div>
      <div class="right">
        <div class="members">
          <h4>Members</h4>
          <div class="members-list">
            <VAvatar size="small" squared>
              <template #avatar>
                <button class="avatar is-fake is-squared">
                  <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
                </button>
              </template>
            </VAvatar>
            <VAvatar
              v-for="member in members.list"
              :key="member.id"
              :picture="member.avatar"
              size="small"
              squared
            />
            <VAvatar size="small" initials="+6" squared />
          </div>
        </div>
      </div>
    </div>

    <!--Media Feed-->
    <div class="media-feed">
      <!--Group-->
      <div class="feed-group">
        <h4 class="group-title">Today</h4>

        <div class="group-content">
          <div class="columns">
            <div class="column is-6">
              <div class="columns is-multiline">
                <div
                  v-for="item in featuredLeft.videos"
                  :key="item.id"
                  class="column"
                  :class="[
                    item.size === 'large' && 'is-12',
                    item.size === 'regular' && 'is-6',
                  ]"
                >
                  <div
                    v-background="{
                      src: item.poster,
                      placeholder: 'https://via.placeholder.com/800x600',
                    }"
                    class="media-feed-item has-background-image"
                    :class="[item.size === 'large' && 'is-big']"
                  >
                    <!--Duration-->
                    <span class="tag item-duration">{{ item.duration }}</span>
                    <!--Play button-->
                    <button class="play-button">
                      <i aria-hidden="true" class="iconify" data-icon="feather:play"></i>
                    </button>
                    <!--Bottom Overlay-->
                    <div class="item-overlay"></div>
                    <!-- Overlay content -->
                    <div class="overlay-layer">
                      <div class="overlay-content">
                        <div class="inner-content">
                          <h3 class="media-title">
                            {{ item.name }}
                          </h3>
                          <div class="media-meta">
                            <img :src="item.author.avatar" alt="" />
                            <a class="meta-item is-hoverable">{{ item.author.name }}</a>
                            <span class="separator">|</span>
                            <span v-if="item.new" class="meta-item">NEW</span>
                            <span v-if="item.new" class="separator">|</span>
                            <a class="meta-item is-hoverable"
                              >{{ item.comments }} comments</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="columns is-multiline">
                <div
                  v-for="item in featuredRight.videos"
                  :key="item.id"
                  class="column"
                  :class="[
                    item.size === 'large' && 'is-12',
                    item.size === 'regular' && 'is-6',
                  ]"
                >
                  <div
                    v-background="{
                      src: item.poster,
                      placeholder: 'https://via.placeholder.com/800x600',
                    }"
                    class="media-feed-item has-background-image"
                    :class="[item.size === 'large' && 'is-big']"
                  >
                    <!--Duration-->
                    <span class="tag item-duration">{{ item.duration }}</span>
                    <!--Play button-->
                    <button class="play-button">
                      <i aria-hidden="true" class="iconify" data-icon="feather:play"></i>
                    </button>
                    <!--Bottom Overlay-->
                    <div class="item-overlay"></div>
                    <!-- Overlay content -->
                    <div class="overlay-layer">
                      <div class="overlay-content">
                        <div class="inner-content">
                          <h3 class="media-title">
                            {{ item.name }}
                          </h3>
                          <div class="media-meta">
                            <img :src="item.author.avatar" alt="" />
                            <a class="meta-item is-hoverable">{{ item.author.name }}</a>
                            <span class="separator">|</span>
                            <span v-if="item.new" class="meta-item">NEW</span>
                            <span v-if="item.new" class="separator">|</span>
                            <a class="meta-item is-hoverable"
                              >{{ item.comments }} comments</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Group-->
      <div class="feed-group">
        <h4 class="group-title">Yesterday</h4>

        <div class="group-content">
          <div class="columns is-multiline">
            <!--Media item-->
            <div v-for="item in feed" :key="item.id" class="column is-3">
              <div
                v-background="{
                  src: item.poster,
                  placeholder: 'https://via.placeholder.com/800x600',
                }"
                class="media-feed-item has-background-image"
                :class="[item.size === 'large' && 'is-big']"
              >
                <!--Duration-->
                <span class="tag item-duration">{{ item.duration }}</span>
                <!--Play button-->
                <button class="play-button">
                  <i aria-hidden="true" class="iconify" data-icon="feather:play"></i>
                </button>
                <!--Bottom Overlay-->
                <div class="item-overlay"></div>
                <!-- Overlay content -->
                <div class="overlay-layer">
                  <div class="overlay-content">
                    <div class="inner-content">
                      <h3 class="media-title">
                        {{ item.name }}
                      </h3>
                      <div class="media-meta">
                        <img :src="item.author.avatar" alt="" />
                        <a class="meta-item is-hoverable">{{ item.author.name }}</a>
                        <span class="separator">|</span>
                        <span v-if="item.new" class="meta-item">NEW</span>
                        <span v-if="item.new" class="separator">|</span>
                        <a class="meta-item is-hoverable">{{ item.comments }} comments</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.lifestyle-dashboard-v5 {
  .dashboard-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: var(--font);

    &.is-main {
      margin-bottom: 30px;

      h2 {
        font-size: 1.8rem;
      }
    }

    h2 {
      font-family: var(--font-alt);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    .members {
      h4 {
        font-family: var(--font);
        color: var(--light-text);
        padding: 0 0.35rem;
        margin-bottom: 0.75rem;
      }

      .members-list {
        display: flex;

        .v-avatar {
          margin: 0 0.35rem;

          button {
            border: none;
            background: var(--primary);
            box-shadow: var(--primary-box-shadow);
            color: var(--white);
            cursor: pointer;

            svg {
              stroke: var(--white);
              height: 16px;
              width: 16px;
            }
          }
        }
      }
    }
  }

  .media-feed {
    .feed-group {
      + .feed-group {
        margin-top: 3.5rem;
      }

      .group-title {
        font-family: var(--font);
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--light-text);
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      .group-content {
        .media-feed-item {
          position: relative;
          @include vuero-r-card;

          padding: 1.5rem;
          min-height: 220px;
          overflow: hidden;

          &.is-big {
            min-height: 380px;

            .item-duration {
              top: 40px;
              inset-inline-end: 40px;
            }

            .play-button {
              top: 40px;
              inset-inline-start: 40px;
              height: 60px;
              width: 60px;
              border-radius: 1rem;

              svg {
                height: 26px;
                width: 26px;
              }
            }

            .overlay-layer {
              .overlay-content {
                .inner-content {
                  padding: 40px;

                  .media-title {
                    font-size: 2.5rem;
                    line-height: 43px;
                  }
                }
              }
            }
          }

          .play-button {
            position: absolute;
            top: 20px;
            inset-inline-start: 20px;
            background: var(--white);
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            border-radius: 0.75rem;
            z-index: 3;
            cursor: pointer;
            box-shadow: var(--light-box-shadow);

            &:hover,
            &:focus {
              svg,
              svg * {
                stroke: var(--primary);
                fill: var(--primary);
              }
            }

            svg,
            svg * {
              position: relative;
              inset-inline-start: 2px;
              height: 15px;
              width: 15px;
              fill: var(--dark-text);
              stroke: var(--dark-text);
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
            }
          }

          .item-duration {
            position: absolute;
            top: 20px;
            inset-inline-end: 20px;
            background: var(--primary);
            box-shadow: var(--primary-box-shadow);
            font-family: var(--font);
            font-weight: 500;
            color: var(--white);
            height: 2.75em;
            padding-inline-start: 1rem;
            padding-inline-end: 1rem;
            border-radius: 0.5rem;
            line-height: 2.7;
            z-index: 3;
          }

          .overlay-layer {
            position: absolute;
            top: 0;
            inset-inline-start: 0;
            height: 100%;
            width: 100%;
            z-index: 2;

            .overlay-content {
              position: relative;
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;

              .inner-content {
                padding: 20px;
                color: var(--white);

                .media-title {
                  font-family: var(--font-alt);
                  font-size: 1.3rem;
                  font-weight: bolder;
                  line-height: 24px;
                  color: var(--smoke-white);
                  margin-bottom: 6px;
                }

                .media-meta {
                  display: flex;
                  align-items: center;

                  img {
                    display: block;
                    height: 30px;
                    width: 30px;
                    min-width: 30px;
                    border-radius: 50%;
                    margin-inline-end: 6px;
                  }

                  .meta-item {
                    display: block;
                    font-size: 0.82rem;
                    font-weight: 500;
                    color: var(--smoke-white-dark-8);
                    transition: color 0.3s;

                    &.is-hoverable:hover {
                      color: var(--primary);
                    }
                  }

                  .separator {
                    padding: 0 10px;
                    font-size: 0.8rem;

                    // color: var(--smoke-white-dark-10);
                    opacity: 0.6;
                    text-align: center;
                    color: var(--smoke-white);
                  }
                }
              }
            }
          }

          .item-overlay {
            position: absolute;
            top: 0;
            inset-inline-start: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(to top, #161616, rgb(255 0 0 / 0%));
            z-index: 0;
          }
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-v5 {
    .dashboard-title {
      .members {
        .members-list {
          .h-avatar {
            button {
              background: var(--primary) !important;
            }

            .avatar {
              &.is-fake {
                background: var(--dark-sidebar-light-2);
              }
            }
          }
        }
      }
    }

    .media-feed {
      .feed-group {
        .group-content {
          .media-feed-item {
            @include vuero-card--dark;

            .item-duration {
              background: var(--primary) !important;
              color: var(--white) !important;
              box-shadow: var(--primary-box-shadow) !important;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-v5 {
    .media-feed {
      .feed-group {
        .group-content {
          > .columns {
            display: flex;

            .column {
              min-width: 50%;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .lifestyle-dashboard-v5 {
    .media-feed {
      .feed-group {
        .group-content {
          .media-feed-item {
            .overlay-layer {
              .overlay-content {
                .inner-content {
                  .media-title {
                    font-size: 1.1rem;
                  }

                  .media-meta {
                    img {
                      height: 24px;
                      width: 24px;
                      min-width: 24px;
                    }

                    .separator {
                      padding: 0 5px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
