<script setup lang="ts">
import { ref } from 'vue'
import useDropdown from '/@src/composable/useDropdown'
const dropdownElement = ref<HTMLElement | null>(null)
const dropdown = useDropdown(dropdownElement)
</script>

<template>
  <div
    ref="dropdownElement"
    class="dropdown is-spaced is-dots is-right dropdown-trigger"
  >
    <div class="is-trigger" aria-haspopup="true" @click="dropdown.toggle">
      <i
        aria-hidden="true"
        class="iconify"
        data-icon="feather:more-vertical"
      ></i>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i aria-hidden="true" class="lnil lnil-eye"></i>
          </div>
          <div class="meta">
            <span>View</span>
            <span>View this project</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>
          <div class="meta">
            <span>Edit</span>
            <span>Edit this project</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i aria-hidden="true" class="lnil lnil-archive"></i>
          </div>
          <div class="meta">
            <span>Archive</span>
            <span>Archive this project</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
