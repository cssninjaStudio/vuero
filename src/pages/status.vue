<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onceImageErrored } from '/@src/utils/via-placeholder'
import { useDarkmode } from '/@src/stores/darkmode'

const darkmode = useDarkmode()

useHead({
  title: 'Utility Status - Sidebar - Vuero',
})
</script>

<template>
  <MinimalLayout>
    <!-- Status -->
    <div class="status-page-wrapper">
      <!--Status header-->
      <div class="head">
        <RouterLink to="/" class="logo">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>
        <div>
          <RouterLink class="action-link mx-4" to="/sidebar/dashboards">
            Home
          </RouterLink>
          <RouterLink class="action-link mx-4" to="/roadmap"> Roadmap </RouterLink>
        </div>
      </div>

      <!--Status body-->
      <div class="status-block">
        <div class="status-header">
          <div class="indicator"></div>
          <div class="title is-4">All services are online.</div>
          <div class="subtitle is-6">As of September 20, 2020 at 11:08 PM PST.</div>
        </div>

        <div class="status-uptime">
          <div class="title">Services</div>
          <div class="uptime">Uptime of the past 90 days</div>
        </div>

        <div class="status-list">
          <!--Status item-->
          <div class="list-block">
            <div class="icon-wrap">
              <img
                src="/demo/photos/animaticons/lightbulb.gif"
                alt=""
                @error.once="onceImageErrored(150)"
              />
            </div>
            <div class="progress-wrap">
              <div class="progress-wrap-inner">
                <div>
                  <div class="label">REST API</div>
                  <p>Including replicated servers</p>
                </div>
                <div class="amount has-text-centered">
                  <span>99%</span>
                </div>
              </div>
              <progress class="progress is-primary is-smaller" value="99" max="100">
                99%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block api">
            <div class="icon-wrap">
              <img
                src="/demo/photos/animaticons/image.gif"
                alt=""
                @error.once="onceImageErrored(150)"
              />
            </div>
            <div class="progress-wrap">
              <div class="progress-wrap-inner">
                <div>
                  <div class="label">CDN Assets</div>
                  <p>Assets delivered from our CDN</p>
                </div>
                <div class="amount has-text-centered">
                  <span>100%</span>
                </div>
              </div>
              <progress class="progress is-success is-smaller" value="100" max="100">
                100%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block">
            <div class="icon-wrap">
              <img
                src="/demo/photos/animaticons/search.gif"
                alt=""
                @error.once="onceImageErrored(150)"
              />
            </div>
            <div class="progress-wrap">
              <div class="progress-wrap-inner">
                <div>
                  <div class="label">Search Indexes</div>
                  <p>Including replicated search</p>
                </div>
                <div class="amount has-text-centered">
                  <span>99%</span>
                </div>
              </div>
              <progress class="progress is-primary is-smaller" value="99" max="100">
                99%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block">
            <div class="icon-wrap">
              <img
                src="/demo/photos/animaticons/diamond.gif"
                alt=""
                @error.once="onceImageErrored(150)"
              />
            </div>
            <div class="progress-wrap">
              <div class="progress-wrap-inner">
                <div>
                  <div class="label">Integrations</div>
                  <p>We are experiencing some issues</p>
                </div>
                <div class="amount has-text-centered">
                  <span>72%</span>
                </div>
              </div>
              <progress class="progress is-warning is-smaller" value="72" max="100">
                72%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block api">
            <div class="icon-wrap">
              <img
                src="/demo/photos/animaticons/chart.gif"
                alt=""
                @error.once="onceImageErrored(150)"
              />
            </div>
            <div class="progress-wrap">
              <div class="progress-wrap-inner">
                <div>
                  <div class="label">Load Balancing</div>
                  <p>Everything is working fine</p>
                </div>
                <div class="amount has-text-centered">
                  <span>100%</span>
                </div>
              </div>
              <progress class="progress is-success is-smaller" value="100" max="100">
                100%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block api">
            <div class="icon-wrap">
              <img
                src="/demo/photos/animaticons/rocket.gif"
                alt=""
                @error.once="onceImageErrored(150)"
              />
            </div>
            <div class="progress-wrap">
              <div class="progress-wrap-inner">
                <div>
                  <div class="label">Load Booster</div>
                  <p>Everything is working fine</p>
                </div>
                <div class="amount has-text-centered">
                  <span>100%</span>
                </div>
              </div>
              <progress class="progress is-success is-smaller" value="100" max="100">
                100%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block">
            <div class="icon-wrap">
              <img
                src="/demo/photos/animaticons/check.gif"
                alt=""
                @error.once="onceImageErrored(150)"
              />
            </div>
            <div class="progress-wrap">
              <div class="progress-wrap-inner">
                <div>
                  <div class="label">Security</div>
                  <p>Everything is working fine</p>
                </div>
                <div class="amount has-text-centered">
                  <span>100%</span>
                </div>
              </div>
              <progress class="progress is-primary is-smaller" value="100" max="100">
                100%
              </progress>
            </div>
          </div>
        </div>
      </div>
      <div class="status-block">
        <div class="tweets-header">
          <div class="icon">
            <i aria-hidden="true" class="fab fa-twitter"></i>
          </div>
          <div class="username">
            <span class="dark-inverted">&commat;cssninjaStudio</span>
          </div>
          <a class="action-link" tabindex="0">View on Twitter</a>
        </div>
        <div class="status-tweets">
          <div class="updates">
            <div class="update">
              <VAvatar
                picture="/images/logos/logo/hanzo.svg"
                badge="/images/icons/stacks/html5.svg"
              />

              <div class="update-content">
                <div class="timestamp">July 29 at 5:39pm</div>
                <div class="tweet">
                  We're experiencing higher than normal load on our batch infrastructure.
                  Webhooks are about an hour delayed. API calls are not impacted
                </div>
              </div>
            </div>
            <div class="update">
              <VAvatar
                picture="/images/logos/logo/hanzo.svg"
                badge="/images/icons/stacks/html5.svg"
              />

              <div class="update-content">
                <div class="timestamp">July 23 at 9:21pm</div>
                <div class="tweet">
                  Sorry about that! Our systems are showing everything as caught up now.
                  Let us know if you're still seeing problems!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="status-footer">
        <label
          class="dark-mode"
          tabindex="0"
          role="button"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
        >
          <input
            data-cy="dark-mode-toggle"
            type="checkbox"
            :checked="!darkmode.isDark"
            @change="darkmode.onChange"
          />
          <span></span>
        </label>
        <div>
          <a href="#">Legal</a>
          <a href="#">About</a>
          <a href="#">Jobs</a>
        </div>
        <div class="copyright">
          <span role="img" aria-label="copyright">&copy;</span>
          <span>2020-2023 cssninjaStudio</span>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
.status-page-wrapper {
  max-width: 720px;
  margin: 0 auto;
  padding: 60px 16px;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .logo {
      display: block;
      width: 50px;
      min-width: 50px;
      height: 50px;
    }
  }

  .status-block {
    background: var(--white);
    margin-bottom: 40px;
    border: 1px solid var(--fade-grey-dark-3);
    border-radius: var(--radius-large);

    .status-header {
      padding: 40px;

      .indicator {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin-inline-end: 20px;
        background: var(--success);
      }

      .title {
        display: inline-block;
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
      }

      .subtitle {
        display: block;
        margin-inline-start: 35px;
        color: var(--light-text);
      }
    }

    .status-uptime {
      border-top: 1px solid var(--fade-grey-dark-3);
      border-bottom: 1px solid var(--fade-grey-dark-3);
      padding: 16px 40px;
      font-family: var(--font);

      .title {
        display: inline-block;
        font-size: 14px;
        font-family: var(--font-alt);
        margin-bottom: 0;
        font-weight: 500;
        color: var(--light-text);
      }

      .uptime {
        display: inline-block;
        margin-inline-start: 60px;
        font-size: 14px;
        color: var(--light-text);
      }
    }

    .status-list {
      padding: 40px;

      .list-block {
        display: flex;
        align-items: center;

        .icon-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 54px;
          width: 54px;
          min-width: 54px;
          border-radius: var(--radius-rounded);
          background: var(--white);
          border: 1px solid var(--fade-grey-dark-3);
          box-shadow: var(--light-box-shadow);
          color: var(--primary);
          margin-inline-end: 12px;

          img {
            display: block;
            max-width: 54px;
            border-radius: var(--radius-rounded);
          }
        }

        .progress-wrap {
          flex-grow: 2;

          .progress-wrap-inner {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
          }
        }
      }

      .label {
        font-family: var(--font-alt);
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 0;
        line-height: 1.2;
      }

      p {
        font-size: 0.9rem;
        font-family: var(--font);
      }

      .amount {
        position: relative;
        top: -2px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: var(--light-text);
        margin-inline-start: auto;
        height: 40px;
        width: 40px;
        border-radius: 12px;
        border: 1px solid var(--fade-grey-dark-3);
        box-shadow: var(--light-box-shadow);

        span {
          font-family: var(--font);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 0.85rem;
        }
      }
    }
  }

  .tweets-header {
    display: flex;
    align-items: center;
    padding: 24px 40px;
    border-bottom: 1px solid var(--fade-grey-dark-3);

    .icon i {
      font-size: 1.6rem;
      color: var(--twitter);
    }

    .username {
      margin-inline-start: 10px;
      font-family: var(--font-alt);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    .action-link {
      margin-inline-start: auto;
    }
  }

  .status-tweets {
    .updates {
      padding: 20px 40px 40px;

      .update {
        display: flex;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 30px;
        }

        .update-content {
          margin-inline-start: 12px;

          .timestamp {
            color: var(--light-text);
          }

          .tweet {
            font-family: var(--font);
            color: var(--dark-text);
          }
        }
      }
    }
  }

  .status-footer {
    display: flex;
    padding: 20px;
    align-items: center;

    .dark-mode {
      display: inline-block;
      transform: scale(0.5);
    }

    a {
      font-family: var(--font);
      color: var(--light-text-dark-8);
      padding: 0 10px;
      transition: color 0.3s;

      &:hover,
      &:focus {
        font-weight: 500;
        color: var(--primary);
      }
    }

    .copyright {
      margin-inline-start: auto;
      font-family: var(--font);
      color: var(--light-text);
    }
  }
}

.is-dark {
  .status-page-wrapper {
    .status-block {
      background: var(--dark-sidebar-light-6);
      border-color: var(--dark-sidebar-light-12);

      .status-uptime {
        border-color: var(--dark-sidebar-light-12);
      }

      .status-list {
        hr {
          background-color: var(--dark-sidebar-light-12);
          height: 1px;
        }

        .list-block {
          .progress-wrap {
            .progress-wrap-inner {
              .amount {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-12);

                span {
                  color: var(--dark-dark-text);
                }
              }
            }
          }
        }
      }

      .tweets-header {
        border-color: var(--dark-sidebar-light-12);
      }

      .status-tweets {
        .updates {
          .update {
            .update-content {
              .tweet {
                color: var(--dark-dark-text);
              }
            }
          }
        }
      }
    }

    .status-footer {
      a {
        &:hover {
          color: var(--primary);
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .status-page-wrapper {
    padding-top: 20px;

    .status-block {
      .status-header {
        padding: 30px;
      }

      .status-uptime {
        padding: 16px 30px;

        .uptime {
          display: none;
        }
      }

      .status-list {
        padding: 30px;

        .list-block {
          .icon-wrap {
            display: none;
          }
        }
      }
    }

    .tweets-header {
      padding: 24px 30px;
    }

    .status-tweets {
      .updates {
        padding: 20px 30px 30px;

        .update {
          .v-avatar {
            display: none;
          }

          .update-content {
            margin-inline-start: 0;
          }
        }
      }
    }

    .status-footer {
      flex-direction: column;
      align-items: center;

      .copyright {
        margin: 10px 0;
      }
    }
  }
}
</style>
