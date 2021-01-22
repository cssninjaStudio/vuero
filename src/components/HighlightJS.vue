<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, onMounted, ref, watch } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String as PropType<
      | 'auto'
      | 'typescript'
      | 'javascript'
      | 'scss'
      | 'json'
      | 'bash'
      | 'markdown'
      | 'html'
      | 'xml'
      | 'vue'
    >,
    default: 'auto',
  },
})
</script>

<template>
  <div class="code-block">
    <div class="code-tools">
      <div v-if="language !== 'auto'" class="language-name">
        {{ language }}
      </div>
    </div>
    <pre><code>{{ code }}}</code></pre>
  </div>
</template>

<style lang="scss">
.code-block {
  position: relative;
}
.code-tools {
  position: absolute;
  top: 0;
  right: 0;
}
.language-name {
  padding: 10px 20px;
  color: #727373;

  &::before {
    content: '∗.';
    color: #a9b1b1;
  }
}
</style>
