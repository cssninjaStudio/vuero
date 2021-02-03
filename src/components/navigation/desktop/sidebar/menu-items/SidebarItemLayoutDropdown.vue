<script setup lang="ts">
import {
  adminLayoutId,
  setLayout,
} from '/@src/composition/state/adminLayoutState'
</script>

<template>
  <li>
    <V-Dropdown dots>
      <template #button="{ open }">
        <button class="is-trigger" @click="open">
          <i class="iconify sidebar-svg" data-icon="feather:help-circle"></i>
        </button>
      </template>
      <template #content>
        <a
          href="#"
          :class="[adminLayoutId === 'sidebar-default' && 'is-active']"
          class="dropdown-item"
          @click="setLayout('sidebar-default')"
          >Default Sidebar</a
        >
        <a
          href="#"
          :class="[adminLayoutId === 'sidebar-curved' && 'is-active']"
          class="dropdown-item"
          @click="setLayout('sidebar-curved')"
          >Curved Sidebar</a
        >
        <a
          href="#"
          :class="[adminLayoutId === 'sidebar-color' && 'is-active']"
          class="dropdown-item"
          @click="setLayout('sidebar-color')"
          >Colored Sidebar</a
        >
        <a
          href="#"
          :class="[adminLayoutId === 'sidebar-color-curved' && 'is-active']"
          class="dropdown-item"
          @click="setLayout('sidebar-color-curved')"
          >Colored &amp; Surved Sidebar</a
        >
        <a
          href="#"
          :class="[adminLayoutId === 'sidebar-minimal' && 'is-active']"
          class="dropdown-item"
          @click="setLayout('sidebar-minimal')"
          >Default Minimal</a
        >
      </template>
    </V-Dropdown>
  </li>
</template>
