<script setup lang="ts">
import type { ChartOptions, Chart } from 'billboard.js'
import { nextTick, ref, watchEffect } from 'vue'
import bb from 'billboard.js'

const emit = defineEmits<{
  (e: 'ready', billboard: Chart): void
}>()
const props = defineProps<{
  options: ChartOptions
}>()

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
@import 'billboard.js/src/scss/billboard.scss';
</style>
