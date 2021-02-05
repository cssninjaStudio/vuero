<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import useNotyf from '/@src/composition/use/useNotyf'
import useMakrdownToc from '/@src/composition/use/useMarkdownToc'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

const notyf = useNotyf()

onMounted(() => {
  activeSidebar.value = 'components'
  notyf.successToast()
})

useHead({
  title: 'Components - Plugins Notyf - Vuero',
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
        <h1 class="title is-4">Notyf</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <V-Breadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: { name: 'index' },
          },
          {
            label: 'Components',
            to: { name: 'components' },
          },
          {
            label: 'Plugins',
          },
          {
            label: 'Notif',
            to: { name: 'components-plugins-notif' },
          },
        ]"
      />

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column"
        >
          <!--Success Toast-->
          <NotyfSuccessDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.successToast">Success Toast</V-Button>
          </div>

          <!--Error Toast-->
          <NotyfErrorDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.errorToast">Error Toast</V-Button>
          </div>

          <!--Info Toast-->
          <NotyfInfoDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.infoToast">Info Toast</V-Button>
          </div>

          <!--Warning Toast-->
          <NotyfWarningDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.warningToast">Warning Toast</V-Button>
          </div>

          <!--Primary Toast-->
          <NotyfPrimaryDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.primaryToast">Primary Toast</V-Button>
          </div>

          <!--Purple Toast-->
          <NotyfPurpleDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.purpleToast">Purple Toast</V-Button>
          </div>

          <!--Blue Toast-->
          <NotyfBlueDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.blueToast">Blue Toast</V-Button>
          </div>

          <!--Green Toast-->
          <NotyfGreenDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.greenToast">Green Toast</V-Button>
          </div>

          <!--Orange Toast-->
          <NotyfOrangeDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="notyf.orangeToast">Orange Toast</V-Button>
          </div>
        </div>
        <div v-if="toc.length" class="column is-3">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
