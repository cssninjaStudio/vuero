<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import bb, { gauge } from 'billboard.js'
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
  const bbGaugeChart = bb.generate({
    data: {
        columns: props.data.columns,
        type: gauge(),
        onclick: function (d, i) {
            console.log("onclick", d, i);
        },
        onover: function (d, i) {
            console.log("onover", d, i);
        },
        onout: function (d, i) {
            console.log("onout", d, i);
        }
    },
    bindto: billboardElement.value,
    gauge: {},
    color: {
        pattern: [
            themeColors.accent,
            themeColors.info,
            themeColors.orange,
            themeColors.green,
        ],
        threshold: {
            values: [
                30,
                60,
                90,
                100
            ]
        }
    },
    size: {
        height: props.height
    },
    padding: {
        bottom: props.spacing
    },
    legend: {
        show: false,
        position: "inset"
    }
  });

  //For demo purpose
  setTimeout(function () {
        bbGaugeChart.load({
            columns: [["data", 10]]
        });
    }, 1000);

    setTimeout(function () {
        bbGaugeChart.load({
            columns: [["data", 50]]
        });
    }, 2000);

    setTimeout(function () {
        bbGaugeChart.load({
            columns: [["data", 70]]
        });
    }, 3000);

    setTimeout(function () {
        bbGaugeChart.load({
            columns: [["data", 0]]
        });
    }, 4000);

    setTimeout(function () {
        bbGaugeChart.load({
            columns: [["data", 100]]
        });
    }, 5000);
});
</script>

<template>
  <div ref="billboardElement"></div>
</template>


