<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'elements'
})

useTitle('Elements - Icons Feather - Vuero')
</script>

<template>
  <DefaultLayout>
    <ElementsSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="278"
      data-menu-item="#elements-sidebar-menu"
      data-mobile-item="#elements-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="toggleSidebar('elements')"
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
              <h1 class="title is-4">Feather Icons</h1>
            </div>

            <FilterToolbar />
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
                      <Icon icon="feather:home" />
                    </span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'elements-hub' }">
                    <span>Elements</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Feather Icons</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Line Icons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icons</h3>
                    <p>
                      Vuero is bundled with the
                      <code>Feather Icons</code> javascript svg library.
                      Everyone likes Font Awesome icons and they are widely used
                      accross a large variety of websites. Please refer to the
                      code example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;!--Feather icon usage (html) --&#x3E;
&#x3C;i data-feather=&#x22;activity&#x22;&#x3E;&#x3C;/i&#x3E;
&#x3C;!--Feather icon usage (js) --&#x3E;
&#x3C;script&#x3E; feather.replace(); &#x3C;/script&#x3E;
</code></pre>
                    </div>

                    <ul class="demo-icon-list">
                      <li class="textFilter-target">
                        <Icon icon="feather:activity" />
                        <p class="textFilter-match">activity</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:airplay" />
                        <p class="textFilter-match">airplay</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:alert-circle" />
                        <p class="textFilter-match">alert-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:alert-octagon" />
                        <p class="textFilter-match">alert-octagon</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:alert-triangle" />
                        <p class="textFilter-match">alert-triangle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:align-center" />
                        <p class="textFilter-match">align-center</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:align-justify" />
                        <p class="textFilter-match">align-justify</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:align-left" />
                        <p class="textFilter-match">align-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:align-right" />
                        <p class="textFilter-match">align-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:anchor" />
                        <p class="textFilter-match">anchor</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:aperture" />
                        <p class="textFilter-match">aperture</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:archive" />
                        <p class="textFilter-match">archive</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-down-circle" />
                        <p class="textFilter-match">arrow-down-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-down-left" />
                        <p class="textFilter-match">arrow-down-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-down-right" />
                        <p class="textFilter-match">arrow-down-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-down" />
                        <p class="textFilter-match">arrow-down</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-left-circle" />
                        <p class="textFilter-match">arrow-left-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-left" />
                        <p class="textFilter-match">arrow-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-right-circle" />
                        <p class="textFilter-match">arrow-right-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-right" />
                        <p class="textFilter-match">arrow-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-up-circle" />
                        <p class="textFilter-match">arrow-up-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-up-left" />
                        <p class="textFilter-match">arrow-up-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-up-right" />
                        <p class="textFilter-match">arrow-up-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:arrow-up" />
                        <p class="textFilter-match">arrow-up</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:at-sign" />
                        <p class="textFilter-match">at-sign</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:award" />
                        <p class="textFilter-match">award</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:bar-chart-2" />
                        <p class="textFilter-match">bar-chart-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:bar-chart" />
                        <p class="textFilter-match">bar-chart</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:battery-charging" />
                        <p class="textFilter-match">battery-charging</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:battery" />
                        <p class="textFilter-match">battery</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:bell-off" />
                        <p class="textFilter-match">bell-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:bell" />
                        <p class="textFilter-match">bell</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:bluetooth" />
                        <p class="textFilter-match">bluetooth</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:bold" />
                        <p class="textFilter-match">bold</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:book-open" />
                        <p class="textFilter-match">book-open</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:book" />
                        <p class="textFilter-match">book</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:bookmark" />
                        <p class="textFilter-match">bookmark</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:box" />
                        <p class="textFilter-match">box</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:briefcase" />
                        <p class="textFilter-match">briefcase</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:calendar" />
                        <p class="textFilter-match">calendar</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:camera-off" />
                        <p class="textFilter-match">camera-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:camera" />
                        <p class="textFilter-match">camera</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:cast" />
                        <p class="textFilter-match">cast</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:check-circle" />
                        <p class="textFilter-match">check-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:check-square" />
                        <p class="textFilter-match">check-square</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:check" />
                        <p class="textFilter-match">check</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chevron-down" />
                        <p class="textFilter-match">chevron-down</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chevron-left" />
                        <p class="textFilter-match">chevron-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chevron-right" />
                        <p class="textFilter-match">chevron-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chevron-up" />
                        <p class="textFilter-match">chevron-up</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chevrons-down" />
                        <p class="textFilter-match">chevrons-down</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chevrons-left" />
                        <p class="textFilter-match">chevrons-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chevrons-right" />
                        <p class="textFilter-match">chevrons-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chevrons-up" />
                        <p class="textFilter-match">chevrons-up</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:chrome" />
                        <p class="textFilter-match">chrome</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:circle" />
                        <p class="textFilter-match">circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:clipboard" />
                        <p class="textFilter-match">clipboard</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:clock" />
                        <p class="textFilter-match">clock</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:cloud-drizzle" />
                        <p class="textFilter-match">cloud-drizzle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:cloud-lightning" />
                        <p class="textFilter-match">cloud-lightning</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:cloud-off" />
                        <p class="textFilter-match">cloud-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:cloud-rain" />
                        <p class="textFilter-match">cloud-rain</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:cloud-snow" />
                        <p class="textFilter-match">cloud-snow</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:code" />
                        <p class="textFilter-match">code</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:codepen" />
                        <p class="textFilter-match">codepen</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:codesandbox" />
                        <p class="textFilter-match">codesandbox</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:coffee" />
                        <p class="textFilter-match">coffee</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:columns" />
                        <p class="textFilter-match">columns</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:command" />
                        <p class="textFilter-match">command</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:compass" />
                        <p class="textFilter-match">compass</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:copy" />
                        <p class="textFilter-match">copy</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:corner-down-left" />
                        <p class="textFilter-match">corner-down-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:corner-down-right" />
                        <p class="textFilter-match">corner-down-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:corner-left-down" />
                        <p class="textFilter-match">corner-left-down</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:corner-left-up" />
                        <p class="textFilter-match">corner-left-up</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:corner-right-down" />
                        <p class="textFilter-match">corner-right-down</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:corner-right-up" />
                        <p class="textFilter-match">corner-right-up</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:corner-up-left" />
                        <p class="textFilter-match">corner-up-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:corner-up-right" />
                        <p class="textFilter-match">corner-up-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:cpu" />
                        <p class="textFilter-match">cpu</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:credit-card" />
                        <p class="textFilter-match">credit-card</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:crop" />
                        <p class="textFilter-match">crop</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:crosshair" />
                        <p class="textFilter-match">crosshair</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:database" />
                        <p class="textFilter-match">database</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:delete" />
                        <p class="textFilter-match">delete</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:disc" />
                        <p class="textFilter-match">disc</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:dollar-sign" />
                        <p class="textFilter-match">dollar-sign</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:download-cloud" />
                        <p class="textFilter-match">download-cloud</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:download" />
                        <p class="textFilter-match">download</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:droplet" />
                        <p class="textFilter-match">droplet</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:edit-2" />
                        <p class="textFilter-match">edit-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:edit-3" />
                        <p class="textFilter-match">edit-3</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:edit" />
                        <p class="textFilter-match">edit</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:external-link" />
                        <p class="textFilter-match">external-link</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:eye-off" />
                        <p class="textFilter-match">eye-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:eye" />
                        <p class="textFilter-match">eye</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:facebook" />
                        <p class="textFilter-match">facebook</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:fast-forward" />
                        <p class="textFilter-match">fast-forward</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:feather" />
                        <p class="textFilter-match">feather</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:figma" />
                        <p class="textFilter-match">figma</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:file-minus" />
                        <p class="textFilter-match">file-minus</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:file-plus" />
                        <p class="textFilter-match">file-plus</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:file-text" />
                        <p class="textFilter-match">file-text</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:file" />
                        <p class="textFilter-match">file</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:film" />
                        <p class="textFilter-match">film</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:filter" />
                        <p class="textFilter-match">filter</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:flag" />
                        <p class="textFilter-match">flag</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:folder-minus" />
                        <p class="textFilter-match">folder-minus</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:folder-plus" />
                        <p class="textFilter-match">folder-plus</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:folder" />
                        <p class="textFilter-match">folder</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:framer" />
                        <p class="textFilter-match">framer</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:frown" />
                        <p class="textFilter-match">frown</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:gift" />
                        <p class="textFilter-match">gift</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:git-branch" />
                        <p class="textFilter-match">git=branch</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:git-commit" />
                        <p class="textFilter-match">git-commit</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:git-merge" />
                        <p class="textFilter-match">git-merge</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:git-pull-request" />
                        <p class="textFilter-match">git-pull-request</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:github" />
                        <p class="textFilter-match">github</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:gitlab" />
                        <p class="textFilter-match">gitlab</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:globe" />
                        <p class="textFilter-match">globe</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:grid" />
                        <p class="textFilter-match">grid</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:hard-drive" />
                        <p class="textFilter-match">hard-drive</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:hash" />
                        <p class="textFilter-match">hash</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:headphones" />
                        <p class="textFilter-match">headphones</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:heart" />
                        <p class="textFilter-match">heart</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:help-circle" />
                        <p class="textFilter-match">help-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:hexagon" />
                        <p class="textFilter-match">hexagon</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:home" />
                        <p class="textFilter-match">home</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:image" />
                        <p class="textFilter-match">image</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:inbox" />
                        <p class="textFilter-match">inbox</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:info" />
                        <p class="textFilter-match">info</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:instagram" />
                        <p class="textFilter-match">instagram</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:italic" />
                        <p class="textFilter-match">italic</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:key" />
                        <p class="textFilter-match">key</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:layers" />
                        <p class="textFilter-match">layers</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:layout" />
                        <p class="textFilter-match">layout</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:life-buoy" />
                        <p class="textFilter-match">life-buoy</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:link-2" />
                        <p class="textFilter-match">link-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:link" />
                        <p class="textFilter-match">link</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:linkedin" />
                        <p class="textFilter-match">linkedin</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:list" />
                        <p class="textFilter-match">list</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:loader" />
                        <p class="textFilter-match">loader</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:lock" />
                        <p class="textFilter-match">lock</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:log-in" />
                        <p class="textFilter-match">log-in</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:log-out" />
                        <p class="textFilter-match">log-out</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:mail" />
                        <p class="textFilter-match">mail</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:map-pin" />
                        <p class="textFilter-match">map-pin</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:map" />
                        <p class="textFilter-match">map</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:maximize-2" />
                        <p class="textFilter-match">maximize-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:maximize" />
                        <p class="textFilter-match">maximize</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:meh" />
                        <p class="textFilter-match">meh</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:menu" />
                        <p class="textFilter-match">menu</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:message-circle" />
                        <p class="textFilter-match">message-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:message-square" />
                        <p class="textFilter-match">message-square</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:mic-off" />
                        <p class="textFilter-match">mic-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:mic" />
                        <p class="textFilter-match">mic</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:minimize-2" />
                        <p class="textFilter-match">minimize-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:minimize" />
                        <p class="textFilter-match">minimize</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:minus-circle" />
                        <p class="textFilter-match">minus-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:minus-square" />
                        <p class="textFilter-match">minus-square</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:minus" />
                        <p class="textFilter-match">minus</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:monitor" />
                        <p class="textFilter-match">monitor</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:moon" />
                        <p class="textFilter-match">moon</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:more-horizontal" />
                        <p class="textFilter-match">more-horizontal</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:more-vertical" />
                        <p class="textFilter-match">more-vertical</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:mouse-pointer" />
                        <p class="textFilter-match">mouse-pointer</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:move" />
                        <p class="textFilter-match">move</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:music" />
                        <p class="textFilter-match">music</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:navigation-2" />
                        <p class="textFilter-match">navigation-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:navigation" />
                        <p class="textFilter-match">navigation</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:octagon" />
                        <p class="textFilter-match">octagon</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:package" />
                        <p class="textFilter-match">package</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:paperclip" />
                        <p class="textFilter-match">paperclip</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:pause-circle" />
                        <p class="textFilter-match">pause-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:pause" />
                        <p class="textFilter-match">pause</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:pen-tool" />
                        <p class="textFilter-match">pen-tool</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:percent" />
                        <p class="textFilter-match">percent</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:phone-call" />
                        <p class="textFilter-match">phone-call</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:phone-forwarded" />
                        <p class="textFilter-match">phone-forwarded</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:phone-incoming" />
                        <p class="textFilter-match">phone-incoming</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:phone-missed" />
                        <p class="textFilter-match">phone-missed</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:phone-off" />
                        <p class="textFilter-match">phone-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:phone-outgoing" />
                        <p class="textFilter-match">phone-outgoing</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:phone" />
                        <p class="textFilter-match">phone</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:pie-chart" />
                        <p class="textFilter-match">pie-chart</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:play-circle" />
                        <p class="textFilter-match">play-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:play" />
                        <p class="textFilter-match">play</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:plus-circle" />
                        <p class="textFilter-match">plus-circle</p>
                      </li>
                      <li class="textFilter-plus-square">
                        <Icon icon="feather:layers" />
                        <p class="textFilter-match">layers</p>
                      </li>
                      <li class="textFilter-plus-square">
                        <Icon icon="feather:plus" />
                        <p class="textFilter-match">plus</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:pocket" />
                        <p class="textFilter-match">pocket</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:power" />
                        <p class="textFilter-match">power</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:printer" />
                        <p class="textFilter-match">printer</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:radio" />
                        <p class="textFilter-match">radio</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:refresh-cw" />
                        <p class="textFilter-match">refresh-cw</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:refresh-ccw" />
                        <p class="textFilter-match">refresh-ccw</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:repeat" />
                        <p class="textFilter-match">repeat</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:rewind" />
                        <p class="textFilter-match">rewind</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:rotate-ccw" />
                        <p class="textFilter-match">rotate-ccw</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:rotate-cw" />
                        <p class="textFilter-match">rotate-cw</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:rss" />
                        <p class="textFilter-match">rss</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:save" />
                        <p class="textFilter-match">save</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:scissors" />
                        <p class="textFilter-match">scissors</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:search" />
                        <p class="textFilter-match">search</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:send" />
                        <p class="textFilter-match">send</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:server" />
                        <p class="textFilter-match">server</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:settings" />
                        <p class="textFilter-match">settings</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:share-2" />
                        <p class="textFilter-match">share-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:share" />
                        <p class="textFilter-match">share</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:shield-off" />
                        <p class="textFilter-match">shield-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:shield" />
                        <p class="textFilter-match">shield</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:shopping-bag" />
                        <p class="textFilter-match">shopping-bag</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:shopping-cart" />
                        <p class="textFilter-match">shopping-cart</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:shuffle" />
                        <p class="textFilter-match">shuffle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:sidebar" />
                        <p class="textFilter-match">sidebar</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:skip-back" />
                        <p class="textFilter-match">skip-back</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:skip-forward" />
                        <p class="textFilter-match">skip-forward</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:slack" />
                        <p class="textFilter-match">slack</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:slash" />
                        <p class="textFilter-match">slash</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:sliders" />
                        <p class="textFilter-match">sliders</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:smartphone" />
                        <p class="textFilter-match">smartphone</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:smile" />
                        <p class="textFilter-match">smile</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:speaker" />
                        <p class="textFilter-match">speaker</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:square" />
                        <p class="textFilter-match">square</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:star" />
                        <p class="textFilter-match">star</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:stop-circle" />
                        <p class="textFilter-match">stop-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:sun" />
                        <p class="textFilter-match">sun</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:sunrise" />
                        <p class="textFilter-match">sunrise</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:sunset" />
                        <p class="textFilter-match">sunset</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:tablet" />
                        <p class="textFilter-match">tablet</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:tag" />
                        <p class="textFilter-match">tag</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:target" />
                        <p class="textFilter-match">target</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:terminal" />
                        <p class="textFilter-match">terminal</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:thermometer" />
                        <p class="textFilter-match">thermometer</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:thumbs-down" />
                        <p class="textFilter-match">thumbs-down</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:thumbs-up" />
                        <p class="textFilter-match">thumbs-up</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:toggle-left" />
                        <p class="textFilter-match">toggle-left</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:toggle-right" />
                        <p class="textFilter-match">toggle-right</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:tool" />
                        <p class="textFilter-match">tool</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:trash-2" />
                        <p class="textFilter-match">trash-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:trash" />
                        <p class="textFilter-match">trash</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:trello" />
                        <p class="textFilter-match">trello</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:trending-up" />
                        <p class="textFilter-match">trending-up</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:trending-down" />
                        <p class="textFilter-match">trending-down</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:triangle" />
                        <p class="textFilter-match">triangle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:truck" />
                        <p class="textFilter-match">truck</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:tv" />
                        <p class="textFilter-match">tv</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:twitter" />
                        <p class="textFilter-match">twitter</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:twitch" />
                        <p class="textFilter-match">twitch</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:type" />
                        <p class="textFilter-match">type</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:umbrella" />
                        <p class="textFilter-match">umbrella</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:underline" />
                        <p class="textFilter-match">underline</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:unlock" />
                        <p class="textFilter-match">unlock</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:upload-cloud" />
                        <p class="textFilter-match">upload-cloud</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:upload" />
                        <p class="textFilter-match">upload</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:user-check" />
                        <p class="textFilter-match">user-check</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:user-plus" />
                        <p class="textFilter-match">user-plus</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:user-minus" />
                        <p class="textFilter-match">user-minus</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:user-x" />
                        <p class="textFilter-match">user-x</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:user" />
                        <p class="textFilter-match">user</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:users" />
                        <p class="textFilter-match">users</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:video-off" />
                        <p class="textFilter-match">video-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:video" />
                        <p class="textFilter-match">video</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:voicemail" />
                        <p class="textFilter-match">voicemail</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:volume-1" />
                        <p class="textFilter-match">volume-1</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:volume-2" />
                        <p class="textFilter-match">volume-2</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:volume-x" />
                        <p class="textFilter-match">volume-x</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:volume" />
                        <p class="textFilter-match">volume</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:watch" />
                        <p class="textFilter-match">watch</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:wifi-off" />
                        <p class="textFilter-match">wifi-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:wifi" />
                        <p class="textFilter-match">wifi</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:wind" />
                        <p class="textFilter-match">wind</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:x-circle" />
                        <p class="textFilter-match">x-circle</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:x-octagon" />
                        <p class="textFilter-match">x-octagon</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:x-square" />
                        <p class="textFilter-match">x-square</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:x" />
                        <p class="textFilter-match">x</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:youtube" />
                        <p class="textFilter-match">youtube</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:zap-off" />
                        <p class="textFilter-match">zap-off</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:zap" />
                        <p class="textFilter-match">zap</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:zoom-in" />
                        <p class="textFilter-match">zoom-in</p>
                      </li>
                      <li class="textFilter-target">
                        <Icon icon="feather:zoom-out" />
                        <p class="textFilter-match">zoom-out</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
