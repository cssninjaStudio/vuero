<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { radar } from 'billboard.js'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useSplineSimple } from '/@src/data/dashboards/billboardjs-demo/splineSimple'
import { useThemeColors } from '/@src/composable/useThemeColors'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)
const themeColors = useThemeColors()
const { options } = useSplineSimple()

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VBillboardJS')

useHead({
  title: 'VBillboardJS - Plugins - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'Plugins',
        },
        {
          label: 'VBillboardJS',
          to: '/components/plugins/billboard-js',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <VBillboardJsDocumentation />

        <div class="columns is-mutliline">
          <div class="column is-6">
            <VCard>
              <VBillboardJS
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
                    position: 'left',
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
            </VCard>
          </div>
          <div class="column is-6">
            <VCard type="smooth">
              <VBillboardJS :options="options" />
            </VCard>
          </div>
        </div>

        <VBillboardJsPropsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
