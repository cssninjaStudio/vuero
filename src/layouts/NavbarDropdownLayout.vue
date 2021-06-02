<script setup lang="ts">
import { PropType } from 'vue'
import { defineProps } from 'vue'

type NavbarDropdownTheme = 'default' | 'colored'

const props = defineProps({
  theme: {
    type: String as PropType<NavbarDropdownTheme>,
    default: 'default',
  },
})
</script>

<template>
  <div class="navbar-layout">
    <div class="app-overlay"></div>

    <MobileNavbar />
    <MobileSidebarMain />

    <NavbarDropdown :theme="props.theme" />
    <LanguagesPanel />
    <ActivityPanel />

    <slot></slot>
  </div>
</template>
