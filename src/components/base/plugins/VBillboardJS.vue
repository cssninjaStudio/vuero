<script setup lang="ts">
import type { ChartOptions, Chart } from 'billboard.js'
import { nextTick, ref, watchEffect } from 'vue'
import bb from 'billboard.js'

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
@import 'billboard.js/src/scss/billboard.scss';
</style>
