<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'
import { radar } from 'billboard.js'

import useMakrdownToc from '/@src/composable/useMarkdownToc'
import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'
import { splineSimpleOptions } from '/@src/data/dashboards/billboardjs-demo/splineSimple'
import { themeColors } from '/@src/utils/themeColors'

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-BillboardJS - Plugins - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
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
        <h1 class="title is-4">V-BillboardJS</h1>
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
            label: 'V-BillboardJS',
            to: { name: 'components-plugins-billboard-js' },
          },
        ]"
      />

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <VBillboardJsDocumentation />

          <div class="columns is-mutliline">
            <div class="column is-6">
              <V-Card>
                <V-BillboardJS
                  :options="{
                    data: {
                      x: 'x',
                      columns: [
                        ['x', 'Data A', 'Data B', 'Data C', 'Data D', 'Data E'],
                        ['data1', 330, 350, 200, 380, 150],
                        ['data2', 130, 100, 30, 200, 80],
                        ['data3', 230, 153, 85, 300, 250],
                      ],
                      colors: {
                        data1: themeColors.accent,
                        data2: themeColors.primary,
                        data3: themeColors.info,
                        data4: themeColors.purple,
                      },
                      type: radar(),
                      labels: true,
                    },
                    radar: {
                      axis: {
                        max: 400,
                      },
                      level: {
                        depth: 4,
                      },
                      direction: {
                        clockwise: true,
                      },
                    },
                    size: {
                      height: 280,
                    },
                    padding: {
                      bottom: 20,
                    },
                    title: {
                      text: 'Radar Chart',
                      position: 'top-left',
                      padding: {
                        bottom: 20,
                        right: 20,
                        top: 0,
                        left: 20,
                      },
                    },
                    legend: {
                      position: 'inset',
                    },
                  }"
                />
              </V-Card>
            </div>
            <div class="column is-6">
              <V-Card type="smooth">
                <V-BillboardJS :options="splineSimpleOptions" />
              </V-Card>
            </div>
          </div>

          <VBillboardJsPropsDocumentation />
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
