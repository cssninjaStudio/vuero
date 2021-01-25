<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import useMakrdownToc from '/@src/composition/use/useMarkdownToc'
import { themeColors } from '/@src/composition/state/themeColors'
import { Notyf } from 'notyf'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'bottom',
  },
  types: [
    {
      type: 'warning',
      background: themeColors.warning,
      icon: {
        className: 'fas fa-hand-paper',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'info',
      background: themeColors.info,
      icon: {
        className: 'fas fa-info-circle',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'primary',
      background: themeColors.primary,
      icon: {
        className: 'fas fa-car-crash',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'accent',
      background: themeColors.accent,
      icon: {
        className: 'fas fa-car-crash',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'purple',
      background: themeColors.purple,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'blue',
      background: themeColors.blue,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'green',
      background: themeColors.green,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'orange',
      background: themeColors.orange,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
  ],
})
const successToast = () => {
  notyf.success('Your changes have been successfully saved!')
}
const errorToast = () => {
  notyf.error('Looks like something went wrong')
}
const infoToast = () => {
  notyf.open({
    type: 'info',
    message: 'This is some useful information that you might need.',
  })
}
const warningToast = () => {
  notyf.open({
    type: 'warning',
    message: 'Please be careful when driving back to home.',
  })
}
const primaryToast = () => {
  notyf.open({
    type: 'primary',
    message: 'Please be careful when driving back to home.',
  })
}
const purpleToast = () => {
  notyf.open({
    type: 'purple',
    message: 'This is a nice looking purple toast notification.',
  })
}
const blueToast = () => {
  notyf.open({
    type: 'blue',
    message: 'This is a nice looking blue toast notification.',
  })
}
const greenToast = () => {
  notyf.open({
    type: 'green',
    message: 'This is a nice looking green toast notification.',
  })
}
const orangeToast = () => {
  notyf.open({
    type: 'orange',
    message: 'This is a nice looking orange toast notification.',
  })
}

onMounted(() => {
  activeSidebar.value = 'components'
  notyf.success('Page component is mounted!')
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
              <span>Notyf</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column"
        >
          <!--Success Toast-->
          <NotyfSuccessDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="successToast">Success Toast</V-Button>
          </div>

          <!--Error Toast-->
          <NotyfErrorDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="errorToast">Error Toast</V-Button>
          </div>

          <!--Info Toast-->
          <NotyfInfoDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="infoToast">Info Toast</V-Button>
          </div>

          <!--Warning Toast-->
          <NotyfWarningDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="warningToast">Warning Toast</V-Button>
          </div>

          <!--Primary Toast-->
          <NotyfPrimaryDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="primaryToast">Primary Toast</V-Button>
          </div>

          <!--Purple Toast-->
          <NotyfPurpleDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="purpleToast">Purple Toast</V-Button>
          </div>

          <!--Blue Toast-->
          <NotyfBlueDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="blueToast">Blue Toast</V-Button>
          </div>

          <!--Green Toast-->
          <NotyfGreenDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="greenToast">Green Toast</V-Button>
          </div>

          <!--Orange Toast-->
          <NotyfOrangeDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="orangeToast">Orange Toast</V-Button>
          </div>
        </div>
        <div v-if="toc.length" class="column is-3">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
