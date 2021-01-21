<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - Plugins Videogallery - Vuero',
})
</script>

<template>
  <div>
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
        <h1 class="title is-4">Video Gallery</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
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
              <span>Video Gallery</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Light Gallery-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Video Gallery</h3>
              <p>
                Vuero is integrated with LightgalleryJs, a performant vanilla
                javascript lightbox library. You can check the plugin
                documentation on
                <a href="https://github.com/sachinchoolur/lightgallery.js"
                  >Github</a
                >. You can also access the javascript code by visiting the
                <code>assets/js/components.js</code> file. The following example
                shows you how it works with youtube videos. Works also with
                Vimeo.
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
lightGallery(document.getElementById(&#x27;videogallery&#x27;));

//MARKUP
&#x3C;div id=&#x22;videogallery&#x22; class=&#x22;light-gallery-wrap&#x22;&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=4vtL0Tq13E8&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=Ke90Tje7VS0&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=nhBVL41-_Cw&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=H0wHx_ID_vo&#x26;t=269s&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=Ttf3CEsEwMQ&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=roywYSEPSvc&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=0PA69L88HeI&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=3Vl8a3zYjiw&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
    &#x3C;a href=&#x22;https://www.youtube.com/watch?v=VjXb3PRL9WI&#x22; data-poster=&#x22;https://via.placeholder.com/800x600&#x22;&#x3E;
        &#x3C;img src=&#x22;https://via.placeholder.com/800x600&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;/a&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="videogallery" class="light-gallery-wrap">
        <a
          href="https://www.youtube.com/watch?v=4vtL0Tq13E8"
          data-poster="/images/photo/video/poster/1.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/1.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
          data-poster="/images/photo/video/poster/2.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/2.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=nhBVL41-_Cw"
          data-poster="/images/photo/video/poster/3.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/3.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=H0wHx_ID_vo&t=269s"
          data-poster="/images/photo/video/poster/4.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/4.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=Ttf3CEsEwMQ"
          data-poster="/images/photo/video/poster/5.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/5.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=roywYSEPSvc"
          data-poster="/images/photo/video/poster/6.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/6.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=0PA69L88HeI"
          data-poster="/images/photo/video/poster/7.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/7.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=3Vl8a3zYjiw"
          data-poster="/images/photo/video/poster/8.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/8.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=VjXb3PRL9WI"
          data-poster="/images/photo/video/poster/9.jpg"
        >
          <div class="video-overlay"></div>
          <div class="video-button">
            <div class="button-inner">
              <i class="fas fa-play"></i>
            </div>
          </div>
          <img
            src="/images/photo/video/poster/9.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/800x600'"
          />
        </a>
      </div>
    </div>
  </div>
</template>
