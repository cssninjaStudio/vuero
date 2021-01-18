<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useTitle('Components - Plugins Video Player - Vuero')
</script>

<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="342"
      data-menu-item="#components-sidebar-menu"
      data-mobile-item="#components-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="toggleSidebar('components')"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[activeSidebar !== 'none' && 'active']"
                  class="icon-box-toggle"
                >
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Video Player</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <nav
              class="breadcrumb has-bullet-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <RouterLink :to="{ name: 'index' }">
                    <span class="icon is-small is-solo">
                      <i class="iconify" data-icon="feather:home"></i>
                    </span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'elements' }">
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Plugins</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Video Player</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Video Player-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Video Player</h3>
                    <p>
                      Vuero ships with this dead simple, yet solid and
                      customizable vanilla JS video player. You can change the
                      controls as you'd like and easily customize the styles.
                      We've provided an example below with player toolbar
                      customization, native 16:9 ratio and dark mode support.
                      Learn more about the plugin and how to use it
                      <a href="https://jonneal.dev/media-player/">here</a>.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner no-padding">
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
// get target from media with controls
const $target = document.querySelector('audio[controls], video[controls]');

// assign media player from target
const player = new MediaPlayer(
    $target,
    {
        prefix: 'media',
        lang: {
            play: 'play',
            pause: 'pause',
            mute: 'mute',
            unmute: 'unmute',
            volume: 'volume',
            currentTime: 'current time',
            remainingTime: 'remaining time',
            enterFullscreen: 'enter fullscreen',
            leaveFullscreen: 'leave fullscreen',
            download: 'download'
        },
        svgs: {
            play: '#symbol-play',
            pause: '#symbol-pause',
            mute: '#symbol-mute',
            unmute: '#symbol-unmute',
            volume: '#symbol-volume',
            currentTime: '#symbol-currentTime',
            remainingTime: '#symbol-remainingTime',
            enterFullscreen: '#symbol-enterFullscreen',
            leaveFullscreen: '#symbol-leaveFullscreen',
            download: '#symbol-download'
        },
        timeDir: 'ltr',
        volumeDir: 'ltr'
    }
);

//MARKUP
&#x3C;div class=&#x22;video-container&#x22;&#x3E;
    &#x3C;video id=&#x22;video-player&#x22; class=&#x22;media-player&#x22; src=&#x22;https://diveinto.org/media/uscenes_h-264_hd_test.mp4&#x22;
        poster=&#x22;https://diveinto.org/media/uscenes_h-264_hd_test.jpg&#x22; controls loop
        data-options=&#x27;{}&#x27;&#x3E;&#x3C;/video&#x3E;
&#x3C;/div&#x3E;

&#x3C;svg class=&#x22;is-hidden&#x22;&#x3E;
    &#x3C;symbol id=&#x22;symbol-play&#x22; viewBox=&#x22;0 0 24 24&#x22; width=&#x22;18&#x22; height=&#x22;18&#x22; stroke=&#x22;currentColor&#x22; stroke-width=&#x22;2&#x22; fill=&#x22;none&#x22; stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; class=&#x22;css-i6dzq1&#x22;&#x3E;
        &#x3C;polygon points=&#x22;5 3 19 12 5 21 5 3&#x22;&#x3E;&#x3C;/polygon&#x3E;
    &#x3C;/symbol&#x3E;
    &#x3C;symbol id=&#x22;symbol-pause&#x22; viewBox=&#x22;0 0 24 24&#x22; width=&#x22;18&#x22; height=&#x22;18&#x22; stroke=&#x22;currentColor&#x22; stroke-width=&#x22;2&#x22; fill=&#x22;none&#x22; stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; class=&#x22;css-i6dzq1&#x22;&#x3E;
        &#x3C;rect x=&#x22;6&#x22; y=&#x22;4&#x22; width=&#x22;4&#x22; height=&#x22;16&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;rect x=&#x22;14&#x22; y=&#x22;4&#x22; width=&#x22;4&#x22; height=&#x22;16&#x22;&#x3E;&#x3C;/rect&#x3E;
    &#x3C;/symbol&#x3E;
    &#x3C;symbol id=&#x22;symbol-mute&#x22; viewBox=&#x22;0 0 24 24&#x22; width=&#x22;18&#x22; height=&#x22;18&#x22; stroke=&#x22;currentColor&#x22; stroke-width=&#x22;2&#x22; fill=&#x22;none&#x22; stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; class=&#x22;css-i6dzq1&#x22;&#x3E;
        &#x3C;polygon points=&#x22;11 5 6 9 2 9 2 15 6 15 11 19 11 5&#x22;&#x3E;&#x3C;/polygon&#x3E;&#x3C;path d=&#x22;M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07&#x22;&#x3E;&#x3C;/path&#x3E;
    &#x3C;/symbol&#x3E;
    &#x3C;symbol id=&#x22;symbol-unmute&#x22; viewBox=&#x22;0 0 24 24&#x22; width=&#x22;18&#x22; height=&#x22;18&#x22; stroke=&#x22;currentColor&#x22; stroke-width=&#x22;2&#x22; fill=&#x22;none&#x22; stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; class=&#x22;css-i6dzq1&#x22;&#x3E;
        &#x3C;polygon points=&#x22;11 5 6 9 2 9 2 15 6 15 11 19 11 5&#x22;&#x3E;&#x3C;/polygon&#x3E;
        &#x3C;line x1=&#x22;23&#x22; y1=&#x22;9&#x22; x2=&#x22;17&#x22; y2=&#x22;15&#x22;&#x3E;&#x3C;/line&#x3E;&#x3C;line x1=&#x22;17&#x22; y1=&#x22;9&#x22; x2=&#x22;23&#x22; y2=&#x22;15&#x22;&#x3E;&#x3C;/line&#x3E;
    &#x3C;/symbol&#x3E;
    &#x3C;symbol id=&#x22;symbol-download&#x22; viewBox=&#x22;0 0 24 24&#x22; width=&#x22;18&#x22; height=&#x22;18&#x22; stroke=&#x22;currentColor&#x22; stroke-width=&#x22;2&#x22; fill=&#x22;none&#x22; stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; class=&#x22;css-i6dzq1&#x22;&#x3E;
        &#x3C;path d=&#x22;M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;polyline points=&#x22;7 10 12 15 17 10&#x22;&#x3E;&#x3C;/polyline&#x3E;
        &#x3C;line x1=&#x22;12&#x22; y1=&#x22;15&#x22; x2=&#x22;12&#x22; y2=&#x22;3&#x22;&#x3E;&#x3C;/line&#x3E;
    &#x3C;/symbol&#x3E;
    &#x3C;symbol id=&#x22;symbol-enterFullscreen&#x22; viewBox=&#x22;0 0 24 24&#x22; width=&#x22;18&#x22; height=&#x22;18&#x22; stroke=&#x22;currentColor&#x22; stroke-width=&#x22;2&#x22; fill=&#x22;none&#x22; stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; class=&#x22;css-i6dzq1&#x22;&#x3E;
        &#x3C;path d=&#x22;M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3&#x22;&#x3E;&#x3C;/path&#x3E;
    &#x3C;/symbol&#x3E;
    &#x3C;symbol id=&#x22;symbol-leaveFullscreen&#x22; viewBox=&#x22;0 0 24 24&#x22; width=&#x22;18&#x22; height=&#x22;18&#x22; stroke=&#x22;currentColor&#x22; stroke-width=&#x22;2&#x22; fill=&#x22;none&#x22; stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; class=&#x22;css-i6dzq1&#x22;&#x3E;
        &#x3C;path d=&#x22;M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3&#x22;&#x3E;&#x3C;/path&#x3E;
    &#x3C;/symbol&#x3E;
&#x3C;/svg&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <div class="p-t-20 p-b-20">
                  <div class="video-container">
                    <video
                      id="video-player"
                      class="media-player"
                      src="https://diveinto.org/media/uscenes_h-264_hd_test.mp4"
                      poster="https://diveinto.org/media/uscenes_h-264_hd_test.jpg"
                      controls
                      loop
                      data-options="{}"
                    ></video>
                  </div>

                  <svg class="is-hidden">
                    <symbol
                      id="symbol-play"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </symbol>
                    <symbol
                      id="symbol-pause"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </symbol>
                    <symbol
                      id="symbol-mute"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <polygon
                        points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                      ></polygon>
                      <path
                        d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                      ></path>
                    </symbol>
                    <symbol
                      id="symbol-unmute"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <polygon
                        points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                      ></polygon>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </symbol>
                    <symbol
                      id="symbol-download"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path
                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                      ></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </symbol>
                    <symbol
                      id="symbol-enterFullscreen"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path
                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                      ></path>
                    </symbol>
                    <symbol
                      id="symbol-leaveFullscreen"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <path
                        d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                      ></path>
                    </symbol>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
