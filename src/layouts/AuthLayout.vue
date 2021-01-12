<script lang="ts">
import { defineComponent } from 'vue'

const AuthLayout = defineComponent({
  name: 'AuthLayout',
  inheritAttrs: false,
  setup() {
    // AuthLayout - Composition API

    return {}
  },
})

export default AuthLayout
</script>

<template>
  <div class="auth-wrapper">
    <slot></slot>
  </div>

  <AuthScripts />
</template>
