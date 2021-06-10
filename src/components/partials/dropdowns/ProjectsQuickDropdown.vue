<script setup lang="ts">
import { ref } from 'vue'
import useDropdown from '/@src/composable/useDropdown'
const dropdownElement = ref<HTMLElement | null>(null)
const dropdown = useDropdown(dropdownElement)
</script>

<template>
  <div
    ref="dropdownElement"
    class="dropdown project-dropdown dropdown-trigger is-spaced"
  >
    <V-Avatar
      size="small"
      color="h-green"
      initials="H"
      @click="dropdown.toggle"
    />

    <span class="status-indicator"></span>

    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-block">
          <V-Avatar size="small" color="warning" initials="D" />

          <div class="meta">
            <span class="dark-inverted">Delivery App Project</span>
            <span>Food For Good</span>
          </div>
        </div>
        <div class="dropdown-block">
          <V-Avatar size="small" color="h-green" initials="H" />

          <div class="meta">
            <span class="dark-inverted">Health and Fitness Dashboard</span>
            <span>Fit'n'Dance</span>
          </div>
        </div>
        <div class="dropdown-block">
          <V-Avatar size="small" color="info" initials="L" />

          <div class="meta">
            <span class="dark-inverted">Learning Tracker Dashboard</span>
            <span>Fit'n'Dance</span>
          </div>
        </div>
        <div class="dropdown-block">
          <V-Avatar size="small" color="h-purple" initials="B" />

          <div class="meta">
            <span class="dark-inverted">Banking and Finance Dashboard</span>
            <span>H Bank</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
