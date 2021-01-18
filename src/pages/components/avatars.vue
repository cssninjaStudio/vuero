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

useTitle('Components - Avatars - Vuero')
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
              <h1 class="title is-4">Avatars</h1>
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
                  <RouterLink :to="{ name: 'components' }">
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Avatars</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Avatar-->
                <AvatarDocumentation />

                <!--Avatar-->
                <AvatarHandleFallbackDocumentation />

                <!--Square Avatar-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Square Avatar</h3>
                    <p>
                      Avatars can have a square shape instead of a circle shape
                      by adding the <code>is-squared</code> class to the target
                      <code>.avatar</code> element. See code for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/7.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/8.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/11.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-large">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/21.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-big">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/13.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-xl">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-large&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-big&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-xl&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Avatar Dot-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Avatar Dot</h3>
                    <p>
                      Avatars can have a small dot attached to them, if you'd
                      like to show a user status for example. Add the
                      <code>has-dot</code> class to the target
                      <code>.h-avatar</code>
                      element. See code for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="h-avatar is-small has-dot">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/7.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar has-dot">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/8.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium has-dot">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/11.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-large has-dot">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/21.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-big has-dot">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/13.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-xl has-dot">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-small has-dot&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar has-dot&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium has-dot&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-large has-dot&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-big has-dot&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-xl has-dot&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Square Avatar Dot-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Square Avatar Dot</h3>
                    <p>
                      Squared avatars can also have dots. Add the
                      <code>has-dot</code> class to the target
                      <code>.h-avatar</code> element, as well as the
                      <code>has-dot-squared</code> class to the target
                      <code>.h-avatar</code> parent element. See code for more
                      details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="h-avatar is-small has-dot has-dot-squared">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/7.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar has-dot has-dot-squared">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/8.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium has-dot has-dot-squared">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/11.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-large has-dot has-dot-squared">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/21.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-big has-dot has-dot-squared">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/13.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-xl has-dot has-dot-squared">
                      <img
                        class="avatar is-squared"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-small has-dot has-dot-squared&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar has-dot has-dot-squared&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium has-dot has-dot-squared&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-large has-dot has-dot-squared&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-big has-dot has-dot-squared&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-xl has-dot has-dot-squared&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar is-squared&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Avatar Dot Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Avatar Dot Colors</h3>
                    <p>
                      Avatar dots can have different colors. Available modifier
                      classes are <code>dot-primary</code>,
                      <code>dot-info</code>, <code>dot-warning</code>,
                      <code>dot-danger</code> and <code>dot-grey</code>. See
                      code for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="h-avatar is-medium has-dot">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/7.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium has-dot dot-primary">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/8.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium has-dot dot-info">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/11.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium has-dot dot-warning">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/21.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium has-dot dot-danger">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/13.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium has-dot dot-grey">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-medium has-dot&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium has-dot dot-primary&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium has-dot dot-info&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium has-dot dot-warning&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium has-dot dot-danger&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium has-dot dot-grey&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Avatar Badge-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Avatar Badges</h3>
                    <p>
                      Vuero avatars can have badge images attached to them.
                      Simply add a 1:1 ratio image with the
                      <code>badge</code> class inside an
                      <code>h-avatar</code> element.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/7.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/united-states-of-america.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/8.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/united-states-of-america.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/11.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/united-states-of-america.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-large">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/21.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/united-states-of-america.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-big">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/13.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/united-states-of-america.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-xl">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/united-states-of-america.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-large&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-big&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-xl&#x22;&#x3E;
    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Fake Avatar-->
            <div class="demo-card">
              <div class="demo-title">
                <h3 class="title is-thin is-5">Fake Avatar</h3>
                <p>
                  When no default image is provided, you can use a fake avatar.
                  Same size mofifiers are available. See the code examples for
                  more details about usage.
                </p>
                <a class="code-trigger">
                  <i class="iconify open" data-icon="feather:code"></i>
                  <i class="iconify close" data-icon="feather:x"></i>
                </a>
              </div>
              <div class="card-inner">
                <div class="h-avatar is-small">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-large">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-big">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-xl">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                </div>

                <div class="highlight highlight-block">
                  <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-large&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-big&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-xl&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                </div>
              </div>
            </div>

            <!--Fake Squared Avatar-->
            <div class="demo-card">
              <div class="demo-title">
                <h3 class="title is-thin is-5">Square Fake Avatar</h3>
                <p>
                  Avatars can have a square shape instead of a circle shape by
                  adding the <code>.is-squared</code> class to the target
                  <code>.avatar</code> element. See code for more details about
                  usage.
                </p>
                <a class="code-trigger">
                  <i class="iconify open" data-icon="feather:code"></i>
                  <i class="iconify close" data-icon="feather:x"></i>
                </a>
              </div>
              <div class="card-inner">
                <div class="h-avatar is-small">
                  <span class="avatar is-squared is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar">
                  <span class="avatar is-squared is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-large">
                  <span class="avatar is-squared is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-big">
                  <span class="avatar is-squared is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-xl">
                  <span class="avatar is-squared is-fake">
                    <span>JD</span>
                  </span>
                </div>

                <div class="highlight highlight-block">
                  <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-large&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-big&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-xl&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                </div>
              </div>
            </div>

            <!--Fake Avatar badges-->
            <div class="demo-card">
              <div class="demo-title">
                <h3 class="title is-thin is-5">Fake Badges</h3>
                <p>
                  When no default image is provided, you can use a fake avatar.
                  Same size mofifiers are available. Fake avatars can also have
                  badges. See the code examples for more details about usage.
                </p>
                <a class="code-trigger">
                  <i class="iconify open" data-icon="feather:code"></i>
                  <i class="iconify close" data-icon="feather:x"></i>
                </a>
              </div>
              <div class="card-inner">
                <div class="h-avatar is-small">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                  <img
                    class="badge"
                    src="/@images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                  <img
                    class="badge"
                    src="/@images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                  <img
                    class="badge"
                    src="/@images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-large">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                  <img
                    class="badge"
                    src="/@images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-big">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                  <img
                    class="badge"
                    src="/@images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-xl">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                  <img
                    class="badge"
                    src="/@images/icons/flags/united-states-of-america.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>

                <div class="highlight highlight-block">
                  <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-large&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-big&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-xl&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;img class=&#x22;badge&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                </div>
              </div>
            </div>

            <!--Fake Colors-->
            <div class="demo-card">
              <div class="demo-title">
                <h3 class="title is-thin is-5">Fake Colors</h3>
                <p>
                  Fake avatars can have different colors to break monotony.
                  Available color classes are <code>is-primary</code>,
                  <code>is-success</code>, <code>is-info</code>,
                  <code>is-warning</code>, <code>is-danger</code>,
                  <code>is-h-purple</code>, <code>is-h-orange</code>,
                  <code>is-h-blue</code>, <code>is-h-green</code>,
                  <code>is-h-red</code>, <code>is-h-yellow</code>. Supports dark
                  mode.
                </p>
                <a class="code-trigger">
                  <i class="iconify open" data-icon="feather:code"></i>
                  <i class="iconify close" data-icon="feather:x"></i>
                </a>
              </div>
              <div class="card-inner">
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-primary">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-success">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-info">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-warning">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-danger">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-h-purple">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-h-orange">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-h-blue">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-h-green">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-h-red">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-fake is-h-yellow">
                    <span>JD</span>
                  </span>
                </div>

                <div class="highlight highlight-block">
                  <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-primary&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-success&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-info&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-warning&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-danger&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-purple&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-orange&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-blue&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-green&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-red&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-yellow&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                </div>
              </div>
            </div>

            <!-- Squared Fake Colors-->
            <div class="demo-card">
              <div class="demo-title">
                <h3 class="title is-thin is-5">Squared Fake Colors</h3>
                <p>
                  Fake avatars can have different colors to break monotony.
                  Available color classes are <code>is-primary</code>,
                  <code>is-success</code>, <code>is-info</code>,
                  <code>is-warning</code>, <code>is-danger</code>. Supports dark
                  mode.
                </p>
                <a class="code-trigger">
                  <i class="iconify open" data-icon="feather:code"></i>
                  <i class="iconify close" data-icon="feather:x"></i>
                </a>
              </div>
              <div class="card-inner">
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-primary">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-success">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-info">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-warning">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-danger">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-h-purple">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-h-orange">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-h-blue">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-h-green">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-h-red">
                    <span>JD</span>
                  </span>
                </div>
                <div class="h-avatar is-medium">
                  <span class="avatar is-squared is-fake is-h-yellow">
                    <span>JD</span>
                  </span>
                </div>

                <div class="highlight highlight-block">
                  <pre><code class="code-highlight">
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-primary&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-success&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-info&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-warning&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-danger&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-purple&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-orange&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-blue&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-squared is-fake is-green&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-red&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
&#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
    &#x3C;span class=&#x22;avatar is-fake is-yellow&#x22;&#x3E;
        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                </div>
              </div>
            </div>

            <!--Small Stack-->
            <div class="demo-card">
              <div class="demo-title">
                <h3 class="title is-thin is-5">Small Stack</h3>
                <p>
                  Vuero avatars can be stacked in an slighlty overlaping line.
                  Simply wrap your avatars inside an
                  <code>avatar-stack</code> element. You can only use small,
                  standard and medium avatars.
                </p>
                <a class="code-trigger">
                  <i class="iconify open" data-icon="feather:code"></i>
                  <i class="iconify close" data-icon="feather:x"></i>
                </a>
              </div>
              <div class="card-inner">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/7.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-fake is-info">
                      <span>JD</span>
                    </span>
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/8.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/5.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-fake is-success">
                      <span>CF</span>
                    </span>
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+2</span>
                      </span>
                    </span>
                  </div>
                </div>

                <div class="highlight highlight-block">
                  <pre><code class="code-highlight">
&#x3C;div class=&#x22;avatar-stack&#x22;&#x3E;
    &#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-fake is-info&#x22;&#x3E;
            &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-fake is-success&#x22;&#x3E;
            &#x3C;span&#x3E;CF&#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-small&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-more&#x22;&#x3E;
            &#x3C;span class=&#x22;inner&#x22;&#x3E;
                &#x3C;span&#x3E;+2&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                </div>
              </div>
            </div>

            <!--Small Stack-->
            <div class="demo-card">
              <div class="demo-title">
                <h3 class="title is-thin is-5">Standard Stack</h3>
                <p>
                  Vuero avatars can be stacked in an slighlty overlaping line.
                  Simply wrap your avatars inside an
                  <code>avatar-stack</code> element. You can only use small,
                  standard and medium avatars.
                </p>
                <a class="code-trigger">
                  <i class="iconify open" data-icon="feather:code"></i>
                  <i class="iconify close" data-icon="feather:x"></i>
                </a>
              </div>
              <div class="card-inner">
                <div class="avatar-stack">
                  <div class="h-avatar">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/11.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar">
                    <span class="avatar is-fake is-info">
                      <span>JD</span>
                    </span>
                  </div>
                  <div class="h-avatar">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/18.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/24.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar">
                    <span class="avatar is-fake is-success">
                      <span>CF</span>
                    </span>
                  </div>
                  <div class="h-avatar">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+2</span>
                      </span>
                    </span>
                  </div>
                </div>

                <div class="highlight highlight-block">
                  <pre><code class="code-highlight">
&#x3C;div class=&#x22;avatar-stack&#x22;&#x3E;
    &#x3C;div class=&#x22;h-avatarl&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatarl&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-fake is-info&#x22;&#x3E;
            &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatarl&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatarl&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatarl&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-fake is-success&#x22;&#x3E;
            &#x3C;span&#x3E;CF&#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatarl&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-more&#x22;&#x3E;
            &#x3C;span class=&#x22;inner&#x22;&#x3E;
                &#x3C;span&#x3E;+2&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                </div>
              </div>
            </div>

            <!--Medium Stack-->
            <div class="demo-card">
              <div class="demo-title">
                <h3 class="title is-thin is-5">Medium Stack</h3>
                <p>
                  Vuero avatars can be stacked in an slighlty overlaping line.
                  Simply wrap your avatars inside an
                  <code>avatar-stack</code> element. You can only use small,
                  standard and medium avatars.
                </p>
                <a class="code-trigger">
                  <i class="iconify open" data-icon="feather:code"></i>
                  <i class="iconify close" data-icon="feather:x"></i>
                </a>
              </div>
              <div class="card-inner">
                <div class="avatar-stack">
                  <div class="h-avatar is-medium">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/24.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-medium">
                    <span class="avatar is-fake is-info">
                      <span>JD</span>
                    </span>
                  </div>
                  <div class="h-avatar is-medium">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/13.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-medium">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/8.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-medium">
                    <span class="avatar is-fake is-success">
                      <span>CF</span>
                    </span>
                  </div>
                  <div class="h-avatar is-medium">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+2</span>
                      </span>
                    </span>
                  </div>
                </div>

                <div class="highlight highlight-block">
                  <pre><code class="code-highlight">
&#x3C;div class=&#x22;avatar-stack&#x22;&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-fake is-info&#x22;&#x3E;
            &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22;
            alt=&#x22;&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-fake is-success&#x22;&#x3E;
            &#x3C;span&#x3E;CF&#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;h-avatar is-medium&#x22;&#x3E;
        &#x3C;span class=&#x22;avatar is-more&#x22;&#x3E;
            &#x3C;span class=&#x22;inner&#x22;&#x3E;
                &#x3C;span&#x3E;+2&#x3C;/span&#x3E;
            &#x3C;/span&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
