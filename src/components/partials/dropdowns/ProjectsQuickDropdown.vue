<script setup lang="ts">
import useDropdown from '/@src/composable/useDropdown'
const { dropdownElement, isOpen, toggle } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown project-dropdown dropdown-trigger is-spaced"
  >
    <div class="v-avatar is-small" @click="toggle">
      <span class="avatar is-fake is-h-green">
        <span>H</span>
      </span>
    </div>
    <span class="status-indicator"></span>

    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-block">
          <div class="v-avatar is-small">
            <span class="avatar is-fake is-warning">
              <span>D</span>
            </span>
          </div>
          <div class="meta">
            <span class="dark-inverted">Delivery App Project</span>
            <span>Food For Good</span>
          </div>
        </div>
        <div class="dropdown-block">
          <div class="v-avatar is-small">
            <span class="avatar is-fake is-h-green">
              <span>H</span>
            </span>
          </div>
          <div class="meta">
            <span class="dark-inverted">Health and Fitness Dashboard</span>
            <span>Fit'n'Dance</span>
          </div>
        </div>
        <div class="dropdown-block">
          <div class="v-avatar is-small">
            <span class="avatar is-fake is-info">
              <span>L</span>
            </span>
          </div>
          <div class="meta">
            <span class="dark-inverted">Learning Tracker Dashboard</span>
            <span>Fit'n'Dance</span>
          </div>
        </div>
        <div class="dropdown-block">
          <div class="v-avatar is-small">
            <span class="avatar is-fake is-h-purple">
              <span>B</span>
            </span>
          </div>
          <div class="meta">
            <span class="dark-inverted">Banking and Finance Dashboard</span>
            <span>H Bank</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
