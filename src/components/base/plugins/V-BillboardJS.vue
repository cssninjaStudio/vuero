<script setup lang="ts">
import type { ChartOptions } from 'billboard.js'
import type { PropType } from 'vue'
import { nextTick, ref, watchEffect } from 'vue'
import bb from 'billboard.js'

const props = defineProps({
  options: {
    type: Object as PropType<ChartOptions>,
    required: true,
  },
})

const emit = defineEmits(['ready'])
const element = ref<HTMLElement | null>(null)

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
@import 'billboard.js/src/scss/billboard.scss';
</style>
