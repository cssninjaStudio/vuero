<script setup lang="ts">
import type { ChartOptions, Chart } from 'billboard.js'
import { nextTick, ref, watchEffect } from 'vue'
import bb from 'billboard.js'
import 'billboard.js/dist/billboard.min.css'

export interface VBillboardJSEmits {
  (e: 'ready', billboard: Chart): void
}
export interface VBillboardJSProps {
  options: ChartOptions
}

const emit = defineEmits<VBillboardJSEmits>()
const props = defineProps<VBillboardJSProps>()

const element = ref<HTMLElement>()

watchEffect(() => {
  if (element.value) {
    try {
      const billboard = bb.generate({
        ...props.options,
        bindto: element.value,
      })
      emit('ready', billboard)

      nextTick(() => {
        billboard.resize()
      })
    } catch (error) {
      console.error(error)
    }
  }
})
</script>

<template>
  <div ref="element"></div>
</template>

<style lang="scss">
.bb-title {
  font-family: var(--font-alt) !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  color: var(--dark-text);
}

.bb-legend-background,
.bb-chart-arcs-background {
  fill: none;
}

.bb-axis line,
.bb-axis .domain {
  color: var(--fade-grey-dark-4);
  stroke: var(--fade-grey-dark-4);
  fill: none;
}

.tick {
  text tspan {
    fill: var(--light-text-dark-5);
  }
}

.is-dark {
  .bb-title {
    fill: var(--dark-dark-text) !important;
  }

  .bb-axis line,
  .bb-axis .domain {
    color: var(--dark-sidebar-light-20) !important;
    stroke: var(--dark-sidebar-light-20) !important;
  }

  .bb-legend {
    .bb-legend-background rect {
      fill: var(--dark-sidebar-dark-2) !important;
      color: var(--dark-sidebar-light-12) !important;
      stroke: var(--dark-sidebar-light-12) !important;
    }

    .bb-legend-item {
      text {
        fill: var(--dark-dark-text);
      }
    }
  }

  .bb-chart-arc path {
    color: var(--dark-sidebar-light-12) !important;
    stroke: var(--dark-sidebar-light-12) !important;
  }

  .bb-chart-arc .bb-gauge-value {
    fill: var(--light-text) !important;
  }

  .bb-chart-arcs .bb-chart-arcs-background {
    color: var(--dark-sidebar-light-10) !important;
    fill: var(--dark-sidebar-dark-2) !important;
    stroke: var(--dark-sidebar-dark-2) !important;
  }

  .bb-chart-arcs-title,
  .bb-gauge-value,
  .bb-axis text {
    fill: var(--dark-dark-text);
  }

  .bb-tooltip {
    border: 1px solid var(--dark-sidebar-light-10) !important;

    // background-color: var(--white);

    th {
      border-color: var(--dark-sidebar-light-10) !important;
      background-color: var(--dark-sidebar-dark-2) !important;
      color: #fffdfd !important;
      font-family: var(--font) !important;
      font-weight: 400 !important;

      span {
        font-family: var(--font) !important;
        font-weight: 400 !important;
        color: #fffdfd !important;
      }
    }

    tr {
      border-color: var(--dark-sidebar-light-10) !important;
    }

    td {
      background-color: var(--dark-sidebar-dark-2) !important;
      border-color: var(--dark-sidebar-light-10) !important;
      color: var(--light-text) !important;

      > span,
      > svg {
        border-color: var(--dark-sidebar-light-10) !important;
        fill: var(--white) !important;
        color: var(--white) !important;
      }
    }

    .bb-tooltip-title {
      color: #fffdfd !important;
    }

    .bb-tooltip-detail {
      .bb-tooltip-name,
      .bb-tooltip-value {
        color: #fffdfd !important;

        span {
          color: #fffdfd !important;
        }
      }
    }
  }
}
</style>
