<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'
import useMakrdownToc from '/@src/composition/use/useMarkdownToc'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab1 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab2 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab3 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab4 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab5 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab6 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab7 = ref<'team' | 'projects' | 'tasks'>('team')
const activeTab8 = ref<'team' | 'projects' | 'tasks'>('team')

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Elements - Tabs Regular - Vuero',
})
</script>

<template>
  <div>
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
        <h1 class="title is-4">Regular Tabs</h1>
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
              <span>Elements</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>RegularTabs</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-10' : 'is-12']"
          class="column"
        >
          <!--Regular Tabs-->
          <TabsRegularBaseDocumentation />

          <!--Centered Tabs-->
          <TabsRegularCenteredDocumentation />

          <!--Right Tabs-->
          <TabsRegularRightDocumentation />

          <!--Iconify Tabs-->
          <TabsRegularIconifyDocumentation />

          <!--Font Awesome Tabs-->
          <TabsRegularFawesomeDocumentation />

          <!--Line Icons Tabs-->
          <TabsRegularLiconsDocumentation />

          <!--Boxed Tabs-->
          <TabsRegularBoxedDocumentation />

          <!--Toggle Tabs-->
          <TabsRegularToggleDocumentation />

          <!--Rounded Toggle Tabs-->
          <TabsRegularRoundedDocumentation />
        </div>
        <div v-if="toc.length" class="column is-2">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
