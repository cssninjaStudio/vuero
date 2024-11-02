<script setup lang="ts">
import { useSplineSimple } from '/@src/data/dashboards/billboardjs-demo/splineSimple'

import { VBillboardJSMeta } from '/@src/data/documentation/components-meta'

const themeColors = useThemeColors()
const { options } = useSplineSimple()

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VBillboardJS'
})

useHead({
  title: 'VBillboardJS - Plugins - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
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

    <DocumentationTocContainer class="is-multiline">
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
                    data1: themeColors.purple || '',
                    data2: themeColors.lime || '',
                    data3: themeColors.info || '',
                    data4: themeColors.purple || '',
                  },
                  type: 'radar',
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

      <DocumentationMeta
        name="VBillboardJS"
        :meta="VBillboardJSMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
