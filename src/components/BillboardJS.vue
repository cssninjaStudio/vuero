<script setup lang="ts">
import { onMounted, ref, defineProps, defineEmit } from 'vue'
import bb from 'billboard.js'

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
})
const emit = defineEmit(['ready'])
const element = ref<HTMLElement | null>(null);

onMounted(() => {
  if (element.value) {
    try {
      const billboard = bb.generate({
        ...props.options,
        bindto: element.value,
      });
      emit('ready', billboard)
    } catch (error) {
      console.log(error)
    }
  }
});
</script>

<template>
  <div ref="element"></div>
</template>


<style lang="scss">
@import 'billboard.js/src/scss/billboard.scss';
</style>