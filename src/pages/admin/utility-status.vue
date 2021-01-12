<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Utility Status - Admin - Vuero')
</script>

<template>
  <MinimalLayout>
    <!-- Status -->
    <div class="status-page-wrapper">
      <!--Status header-->
      <div class="head">
        <RouterLink :to="{ name: 'index' }" class="logo">
          <img src="/@images/logos/logo/logo.svg" alt="" />
        </RouterLink>
        <a class="action-link" onclick="goBack()">Take me Back</a>
      </div>

      <!--Status body-->
      <div class="status-block">
        <div class="status-header">
          <div class="indicator"></div>
          <div class="title is-4">All services are online.</div>
          <div class="subtitle is-6">
            As of September 20, 2020 at 11:08 PM PST.
          </div>
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
                src="/@images/photo/demo/animaticons/lightbulb.gif"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
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
              <progress
                class="progress is-primary is-smaller"
                value="99"
                max="100"
              >
                99%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block api">
            <div class="icon-wrap">
              <img
                src="/@images/photo/demo/animaticons/image.gif"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
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
              <progress
                class="progress is-success is-smaller"
                value="100"
                max="100"
              >
                100%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block">
            <div class="icon-wrap">
              <img
                src="/@images/photo/demo/animaticons/search.gif"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
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
              <progress
                class="progress is-primary is-smaller"
                value="99"
                max="100"
              >
                99%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block">
            <div class="icon-wrap">
              <img
                src="/@images/photo/demo/animaticons/diamond.gif"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
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
              <progress
                class="progress is-warning is-smaller"
                value="72"
                max="100"
              >
                72%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block api">
            <div class="icon-wrap">
              <img
                src="/@images/photo/demo/animaticons/chart.gif"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
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
              <progress
                class="progress is-success is-smaller"
                value="100"
                max="100"
              >
                100%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block api">
            <div class="icon-wrap">
              <img
                src="/@images/photo/demo/animaticons/rocket.gif"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
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
              <progress
                class="progress is-success is-smaller"
                value="100"
                max="100"
              >
                100%
              </progress>
            </div>
          </div>
          <hr />
          <div class="list-block">
            <div class="icon-wrap">
              <img
                src="/@images/photo/demo/animaticons/check.gif"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
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
              <progress
                class="progress is-primary is-smaller"
                value="100"
                max="100"
              >
                100%
              </progress>
            </div>
          </div>
        </div>
      </div>
      <div class="status-block">
        <div class="tweets-header">
          <div class="icon">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="username">
            <span>&commat;cssninjaStudio</span>
          </div>
          <a class="action-link">View on Twitter</a>
        </div>
        <div class="status-tweets">
          <div class="updates">
            <div class="update">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/@images/logos/logo/hanzo.svg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <img
                  class="badge"
                  src="/@images/icons/stacks/html5.svg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="update-content">
                <div class="timestamp">July 29 at 5:39pm</div>
                <div class="tweet">
                  We're experiencing higher than normal load on our batch
                  infrastructure. Webhooks are about an hour delayed. API calls
                  are not impacted
                </div>
              </div>
            </div>
            <div class="update">
              <div class="h-avatar">
                <img
                  class="avatar"
                  src="/@images/logos/logo/hanzo.svg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
                <img
                  class="badge"
                  src="/@images/icons/stacks/html5.svg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="update-content">
                <div class="timestamp">July 23 at 9:21pm</div>
                <div class="tweet">
                  Sorry about that! Our systems are showing everything as caught
                  up now. Let us know if you're still seeing problems!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="status-footer">
        <div>
          <a href="#">Legal</a>
          <a href="#">About</a>
          <a href="#">Jobs</a>
        </div>
        <div class="copyright">
          <span>&copy; 2020-2021 Css Ninja</span>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>
