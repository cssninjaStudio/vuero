<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import bb, { line } from 'billboard.js'
import { themeColors } from '/@src/composition/state/themeColors'

const props = defineProps({
  data: {
    type: Object,
    default: {},
    columns: {
        type: Array
    },
  },
  height: {
    type: Number
  },
  spacing: {
    type: Number
  }
})

const billboardElement = ref(null);

onMounted(() => {
  const bbGenericLineChart = bb.generate({
    data: {
        columns: props.data.columns,
        type: line(),
        colors: {
            data1: themeColors.accent,
            data2: themeColors.green,
            data3: themeColors.orange
        }
    },
    bindto: billboardElement.value,
    size: {
        height: props.height
    },
    padding: {
        bottom: props.spacing
    },
    title: {
        text: "Line Chart",
        position: "left",
        padding: {
            bottom: 20,
            right: 20,
            top: 0,
            left: 20
        }
    },
    legend: {
        position: "inset"
    },
  });

  //For demo purpose
  setTimeout(function () {
        bbGenericLineChart.load({
            columns: [
                ["data1", 230, 190, 300, 500, 300, 400]
            ]
        });
    }, 5000);

    setTimeout(function () {
        bbGenericLineChart.load({
            columns: [
                ["data3", 130, 150, 200, 300, 200, 100]
            ]
        });
    }, 6500);

    setTimeout(function () {
        bbGenericLineChart.unload({
            ids: "data1"
        });
    }, 7000);
});
</script>

<template>
  <div ref="billboardElement"></div>
</template>


