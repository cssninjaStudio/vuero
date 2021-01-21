<script setup lang="ts">
import {
  webappLayoutId,
  setLayout,
} from '/@src/composition/state/ui/webappLayoutState'
</script>

<template>
  <BaseDropdown dots right>
    <template #button="{ open }">
      <button class="is-trigger" @click="open">
        <i class="iconify" data-icon="feather:help-circle"></i>
      </button>
    </template>
    <template #content>
      <a
        href="#"
        :class="[webappLayoutId === 'webapp-v1' && 'is-active']"
        class="dropdown-item"
        @click="setLayout('webapp-v1')"
        >Webapp V1</a
      >
      <a
        href="#"
        :class="[webappLayoutId === 'webapp-v2' && 'is-active']"
        class="dropdown-item"
        @click="setLayout('webapp-v2')"
        >Webapp V2</a
      >
      <a
        href="#"
        :class="[webappLayoutId === 'webapp-v3' && 'is-active']"
        class="dropdown-item"
        @click="setLayout('webapp-v3')"
        >Webapp V3</a
      >
      <a
        href="#"
        :class="[webappLayoutId === 'webapp-v4' && 'is-active']"
        class="dropdown-item"
        @click="setLayout('webapp-v4')"
        >Webapp V4</a
      >
      <a
        href="#"
        :class="[webappLayoutId === 'webapp-v5' && 'is-active']"
        class="dropdown-item"
        @click="setLayout('webapp-v5')"
        >Webapp V5</a
      >
    </template>
  </BaseDropdown>
</template>
