<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
</script>

<template>
  <div class="dashboard-header-wrapper">
    <div class="dashboard-header">
      <div class="avatar-container">
        <img
          src="/demo/photos/faces/girl1.jpg"
          alt=""
          @error.once="onceImageErrored(150)"
        />
        <button class="button is-circle">
          <span class="icon is-small">
            <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
          </span>
        </button>
      </div>
      <div class="header-meta">
        <div class="username-wrap">
          <div class="username">
            <h3>
              <span>sweet_candy13</span>
              <i aria-hidden="true" class="fas fa-star"></i>
            </h3>
            <span>Clarissa Geller</span>
          </div>
          <div class="badges">
            <VTag rounded color="info" label="Music" />
            <VTag rounded color="primary" label="Lifestyle" />
          </div>
        </div>
        <div class="meta-stats">
          <div class="meta-stat">
            <span>1247</span>
            <span>Posts</span>
          </div>
          <div class="meta-stat">
            <span>38.3K</span>
            <span>Followers</span>
          </div>
          <div class="meta-stat">
            <span>329</span>
            <span>Following</span>
          </div>
        </div>
        <div class="meta-description">
          <p>
            Artist, musician, songwriter, influencer, these are the many names people give
            me. But for you Iam simply Clarissa. *Forever with all my friends* // Latest
            video can be found here youtu.be/8Tcee5Cyz
          </p>
        </div>
        <div class="meta-achievements">
          <div>
            <Tippy>
              <div class="meta-achievement is-danger">
                <i aria-hidden="true" class="fas fa-fire"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <VIconBox size="small" color="danger">
                      <i aria-hidden="true" class="fas fa-fire"></i>
                    </VIconBox>
                    <h4 class="dark-inverted">On Fire</h4>
                  </div>
                  <div class="popover-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </template>
            </Tippy>
          </div>

          <div>
            <Tippy>
              <div class="meta-achievement is-primary">
                <i aria-hidden="true" class="fas fa-medal"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <VIconBox size="small" color="primary">
                      <i aria-hidden="true" class="fas fa-medal"></i>
                    </VIconBox>
                    <h4 class="dark-inverted">Post Veteran</h4>
                  </div>
                  <div class="popover-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </template>
            </Tippy>
          </div>

          <div>
            <Tippy>
              <div class="meta-achievement is-yellow">
                <i aria-hidden="true" class="fas fa-trophy"></i>
              </div>
              <template #content>
                <div class="v-popover-content is-text">
                  <div class="popover-head">
                    <VIconBox size="small" color="yellow">
                      <i aria-hidden="true" class="fas fa-medal"></i>
                    </VIconBox>
                    <h4 class="dark-inverted">Social Champion</h4>
                  </div>
                  <div class="popover-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </template>
            </Tippy>
          </div>
        </div>
      </div>

      <div class="end">
        <!--Dropdown-->
        <InfluencerDropdown />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dashboard-header-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 220px;
  margin-bottom: 20px;
  z-index: 1;

  .dashboard-header {
    display: flex;
    width: 100%;

    .avatar-container {
      position: relative;
      height: 140px;
      width: 140px;
      min-width: 140px;

      img {
        display: block;
        height: 140px;
        width: 140px;
        min-width: 140px;
        border-radius: var(--radius-rounded);
      }

      .button {
        position: absolute;
        bottom: 5px;
        inset-inline-end: 5px;
      }
    }

    .header-meta {
      font-family: var(--font);
      margin-inline-start: 16px;

      .username-wrap {
        display: flex;

        .username {
          h3 {
            font-family: var(--font-alt);
            color: var(--dark-text);
            font-size: 1.2rem;
            font-weight: 700;

            i {
              font-size: 1.2rem;
              margin-inline-start: 5px;
              color: var(--yellow);
            }
          }

          > span {
            color: var(--light-text-dark-5);
          }
        }

        .badges {
          margin-inline-start: 16px;

          .tag {
            margin-inline-end: 0.5rem;
          }
        }
      }

      .meta-stats {
        display: flex;
        padding: 16px 0;

        .meta-stat {
          margin-inline-end: 30px;

          span {
            &:first-child {
              color: var(--dark-text);
              font-size: 1.3rem;
              font-weight: 600;
              margin-inline-end: 0.25rem;
            }

            &:nth-child(2) {
              color: var(--light-text);
            }
          }
        }
      }

      .meta-description {
        max-width: 640px;

        p {
          color: var(--light-text-dark-5);
        }
      }

      .meta-achievements {
        display: flex;
        padding-top: 16px;

        .meta-achievement {
          height: 36px;
          width: 36px;
          min-width: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--white);
          background: var(--fade-grey);
          border-radius: var(--radius-rounded);
          margin-inline-end: 10px;
          box-shadow: var(--light-box-shadow);

          &.is-primary {
            color: var(--primary);
            background: var(--primary-light-45);
          }

          &.is-yellow {
            color: var(--yellow);
            background: var(--yellow-light-22);
          }

          &.is-danger {
            color: var(--danger);
            background: var(--danger-light-40);
          }
        }
      }
    }

    .end {
      margin-inline-start: auto;
    }
  }
}

.is-dark {
  .dashboard-header-wrapper {
    .dashboard-header {
      .header-meta {
        .username-wrap {
          .username {
            h3 {
              color: var(--dark-dark-text);
            }
          }
        }

        .meta-stats {
          .meta-stat {
            span {
              &:first-child {
                color: var(--dark-dark-text);
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (width <= 767px) {
  .dashboard-header-wrapper {
    height: 418px;

    .dashboard-header {
      flex-direction: column;

      .avatar-container {
        margin: 0 auto 10px;
      }

      .header-meta {
        margin-inline-start: 0;
        text-align: center;

        .username-wrap {
          flex-direction: column;

          .badges {
            margin: 10px auto;
          }
        }

        .meta-stats {
          justify-content: center;

          .meta-stat {
            margin: 0 10px;
          }
        }

        .meta-achievements {
          justify-content: center;
          padding-bottom: 16px;
        }
      }

      .end {
        position: absolute;
        inset-inline-end: 0;
      }
    }
  }
}
</style>
