<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
</script>

<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v4">
    <div class="columns">
      <div class="column is-8">
        <div class="columns is-multiline">
          <!--Header-->
          <div class="column is-12">
            <div class="illustration-header-2">
              <div class="header-image">
                <img
                  src="/@src/assets/illustrations/dashboards/lifestyle/reading.svg"
                  alt=""
                />
              </div>
              <div class="header-meta">
                <h3>Hello, Erik.</h3>
                <p>
                  Have any ideas for a new article? If not, you should definitely check
                  the feed for some inspiration.
                </p>
                <VButton light outlined icon="feather:plus"> New Article </VButton>
              </div>
            </div>
          </div>

          <!--Content-->
          <div class="column is-7">
            <div class="writing-stats">
              <!--Stat-->
              <div class="writing-stat">
                <span>Articles</span>
                <span class="dark-inverted">209</span>
              </div>
              <!--Stat-->
              <div class="writing-stat">
                <span>Readers</span>
                <span class="dark-inverted">863</span>
              </div>
              <!--Stat-->
              <div class="writing-stat">
                <span>Comments</span>
                <span class="dark-inverted">386</span>
              </div>
            </div>

            <div class="featured-authors">
              <!--Header-->
              <div class="featured-authors-header">
                <h3 class="dark-inverted">Featured Authors</h3>
                <a class="action-link" tabindex="0">View All</a>
              </div>

              <div class="featured-authors-list">
                <!--Item-->
                <div class="featured-authors-item">
                  <VBlock title="Alice C." subtitle="Software Engineer" center>
                    <template #icon>
                      <VAvatar picture="/demo/avatars/7.jpg" squared />
                    </template>
                    <template #action>
                      <span class="dark-inverted">112K</span>
                    </template>
                  </VBlock>
                </div>
                <!--Item-->
                <div class="featured-authors-item">
                  <VBlock title="Elizabeth F." subtitle="Web Developer" center>
                    <template #icon>
                      <VAvatar picture="/demo/avatars/21.jpg" squared />
                    </template>
                    <template #action>
                      <span class="dark-inverted">91K</span>
                    </template>
                  </VBlock>
                </div>
                <!--Item-->
                <div class="featured-authors-item">
                  <VBlock title="Jonathan K." subtitle="UI/UX Designer" center>
                    <template #icon>
                      <VAvatar picture="/demo/avatars/32.jpg" squared />
                    </template>
                    <template #action>
                      <span class="dark-inverted">72K</span>
                    </template>
                  </VBlock>
                </div>
                <!--Item-->
                <div class="featured-authors-item">
                  <VBlock title="Christie D." subtitle="Software Engineer" center>
                    <template #icon>
                      <VAvatar picture="/demo/avatars/38.jpg" squared />
                    </template>
                    <template #action>
                      <span class="dark-inverted">19K</span>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>

          <!--Content-->
          <div class="column is-5">
            <!--Updates-->
            <div class="updates">
              <!--Header-->
              <div class="updates-header">
                <h3 class="dark-inverted">Updates</h3>
                <a class="action-link" tabindex="0">View All</a>
              </div>

              <div class="updates-list">
                <!--Update-->
                <div class="update-item is-dark-bordered-12">
                  <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                  <span class="dark-inverted">Oct 23</span>
                </div>
                <!--Update-->
                <div class="update-item is-dark-bordered-12">
                  <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                  <span class="dark-inverted">Oct 23</span>
                </div>
                <!--Update-->
                <div class="update-item is-dark-bordered-12">
                  <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                  <span class="dark-inverted">Oct 23</span>
                </div>
                <!--Update-->
                <div class="update-item is-dark-bordered-12">
                  <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                  <span class="dark-inverted">Oct 23</span>
                </div>
                <!--Update-->
                <div class="update-item is-dark-bordered-12">
                  <p>Lorem ipsum sit dolor amet is a dummy text used by typographers.</p>
                  <span class="dark-inverted">Oct 23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Feed-->
      <div class="column is-4">
        <div class="articles-feed">
          <!--Header-->
          <div class="articles-feed-header">
            <h3 class="dark-inverted">New Articles</h3>
            <a class="action-link" tabindex="0">View All</a>
          </div>
          <!--Subheader-->
          <div class="articles-feed-subheader">
            <div class="selector">
              <button class="button is-selected">Recent</button>
              <button class="button">Popular</button>
            </div>
          </div>
          <!--List-->
          <div class="articles-feed-list">
            <div class="articles-feed-list-inner">
              <!--Item-->
              <a class="articles-feed-item">
                <div class="featured-image">
                  <img
                    src="/demo/photos/38.jpg"
                    alt=""
                    @error.once="onceImageErrored(800, 600)"
                  />
                </div>
                <div class="featured-content">
                  <h4 class="dark-inverted">Learning the modern novel</h4>
                  <p>Some article content and lorem ipsum sit dolor amet</p>

                  <VBlock title="Alice C." subtitle="Software Engineer">
                    <template #icon>
                      <VAvatar picture="/demo/avatars/7.jpg" squared />
                    </template>
                  </VBlock>
                </div>
              </a>
              <!--Item-->
              <a class="articles-feed-item">
                <div class="featured-image">
                  <img
                    src="/demo/photos/37.jpg"
                    alt=""
                    @error.once="onceImageErrored(800, 600)"
                  />
                </div>
                <div class="featured-content">
                  <h4 class="dark-inverted">5 Writing tips for you</h4>
                  <p>Some article content and lorem ipsum sit dolor amet</p>

                  <VBlock title="Mary L." subtitle="Project Manager">
                    <template #icon>
                      <VAvatar picture="/demo/avatars/5.jpg" squared />
                    </template>
                  </VBlock>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.lifestyle-dashboard-v4 {
  .illustration-header-2 {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 16px;
    background: var(--primary);
    font-family: var(--font);
    box-shadow: var(--primary-box-shadow);

    .header-image {
      position: relative;
      height: 175px;
      width: 320px;

      img {
        position: absolute;
        top: 0;
        inset-inline-start: -40px;
        display: block;
        pointer-events: none;
      }
    }

    .header-meta {
      margin-inline-start: 0;
      padding-inline-end: 30px;

      h3 {
        color: var(--smoke-white);
        font-family: var(--font-alt);
        font-weight: 700;
        font-size: 1.3rem;
        max-width: 280px;
      }

      p {
        font-weight: 400;
        color: var(--smoke-white-dark-2);
        margin-bottom: 16px;
        max-width: 320px;
      }

      .action-link {
        span {
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-inline-end: 6px;
        }

        i {
          font-size: 12px;
        }
      }
    }
  }

  .writing-stats {
    display: flex;
    margin-bottom: 1rem;
    margin-inline-start: -8px;
    margin-inline-end: -8px;

    .writing-stat {
      @include vuero-l-card;

      margin: 8px;
      width: calc(33.3% - 16px);
      padding: 12px;

      span {
        display: block;

        &:first-child {
          font-family: var(--font-alt);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          margin-bottom: 5px;
          color: var(--light-text);
        }

        &:nth-child(2) {
          font-family: var(--font);
          font-weight: 700;
          font-size: 1.8rem;
          color: var(--dark-text);
        }
      }
    }
  }

  .featured-authors {
    @include vuero-l-card;

    padding: 20px;

    .featured-authors-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 1.1rem;
        color: var(--dark-text);
      }

      .action-link {
        font-size: 0.9rem;
      }
    }

    .featured-authors-list {
      .featured-authors-item {
        &:not(:last-child) {
          margin-bottom: 20px;
        }

        .media-flex-center {
          .flex-end {
            span {
              font-family: var(--font-alt);
              font-weight: 600;
              color: var(--dark-text);
            }
          }
        }
      }
    }
  }

  .updates {
    @include vuero-l-card;

    padding: 20px;
    margin-top: 8px;

    .updates-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 1.1rem;
        color: var(--dark-text);
      }

      .action-link {
        font-size: 0.9rem;
      }
    }

    .updates-list {
      .update-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--fade-grey-dark-3);

        &:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }

        p {
          font-size: 0.9rem;
        }

        span {
          display: block;
          min-width: 60px;
          text-align: inset-inline-end;
          font-family: var(--font);
          font-weight: 600;
          font-size: 0.8rem;
          color: var(--dark-text);
        }
      }
    }
  }

  .articles-feed {
    background: var(--widget-grey);
    padding: 30px;
    border-radius: 12px;

    .articles-feed-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 1.1rem;
        color: var(--dark-text);
      }

      .action-link {
        font-size: 0.9rem;
      }
    }

    .articles-feed-subheader {
      margin-bottom: 20px;

      .selector {
        .button {
          font-size: 0.8rem;
          border-radius: 50px;
          margin-inline-end: 4px;

          &.is-selected {
            background: var(--primary);
            color: var(--white);
            border-color: var(--primary);
            box-shadow: var(--primary-box-shadow);
          }
        }
      }
    }

    .articles-feed-list {
      .articles-feed-list-inner {
        .articles-feed-item {
          display: block;

          &:not(:last-child) {
            margin-bottom: 20px;
          }

          .featured-image {
            height: 180px;
            overflow: hidden;
            border-start-start-radius: 18px;
            border-start-end-radius: 18px;

            img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .featured-content {
            position: relative;
            padding: 25px;
            border-radius: 18px;
            background: var(--white);
            margin-top: -40px;
            z-index: 1;

            h4,
            p {
              margin-bottom: 10px;
            }

            h4 {
              font-family: var(--font-alt);
              font-size: 1rem;
              font-weight: 600;
              color: var(--dark-text);
            }

            .media-flex-center {
              .flex-meta {
                span {
                  font-size: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-v4 {
    .illustration-header-2 {
      background: var(--dark-sidebar);
      box-shadow: none;
    }

    .writing-stats {
      .writing-stat {
        @include vuero-card--dark;
      }
    }

    .updates,
    .featured-authors {
      @include vuero-card--dark;
    }

    .articles-feed {
      background: var(--dark-sidebar-light-8);

      .articles-feed-subheader {
        .selector {
          .button {
            &.is-selected {
              background: var(--primary) !important;
              border-color: var(--primary) !important;
              box-shadow: var(--primary-box-shadow) !important;
              color: var(--white) !important;
            }
          }
        }
      }

      .articles-feed-list {
        .articles-feed-list-inner {
          .articles-feed-item {
            .featured-content {
              background: var(--dark-sidebar);
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .lifestyle-dashboard-v4 {
    .illustration-header-2 {
      flex-direction: column;
      text-align: center;

      .header-image {
        height: auto;
        width: 100%;

        img {
          position: relative;
          width: 100%;
          max-width: 260px;
          margin: 0 auto;
          top: 0;
          inset-inline-start: 0;
          margin-top: -34px;
        }
      }

      .header-meta {
        padding: 20px;

        > p {
          max-width: 280px;
          margin-inline-start: auto;
          margin-inline-end: auto;
        }
      }
    }

    .writing-stats {
      .writing-stat {
        text-align: center;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-v4 {
    .articles-feed {
      .articles-feed-list {
        .articles-feed-list-inner {
          display: flex;
          flex-wrap: wrap;
          margin-inline-start: -12px;
          margin-inline-end: -12px;

          .articles-feed-item {
            width: calc(50% - 24px);
            margin: 12px;
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .lifestyle-dashboard-v4 {
    .updates {
      .updates-list {
        .update-item {
          > span {
            display: none;
          }
        }
      }
    }

    .articles-feed {
      padding: 20px;
    }
  }
}
</style>
