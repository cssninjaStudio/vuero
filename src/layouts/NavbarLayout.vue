<script setup lang="ts">
import { PropType } from 'vue'
import { defineProps } from 'vue'

type NavbarTheme = 'default' | 'colored' | 'fade'

const props = defineProps({
  theme: {
    type: String as PropType<NavbarTheme>,
    default: 'default',
  },
})
</script>

<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <Navbar :theme="props.theme" />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
