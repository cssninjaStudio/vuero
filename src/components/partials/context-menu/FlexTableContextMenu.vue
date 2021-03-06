<script setup lang="ts">
import useDropdown from '/@src/composable/useDropdown'
const { dropdownElement, isOpen, toggle } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile"
  >
    <div class="is-trigger" aria-haspopup="true" @click="toggle">
      <i class="iconify" data-icon="feather:more-vertical"></i>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-eye"></i>
          </div>
          <div class="meta">
            <span>View</span>
            <span>View company details</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-dollar-up"></i>
          </div>
          <div class="meta">
            <span>Deal</span>
            <span>Start a new deal</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-calendar"></i>
          </div>
          <div class="meta">
            <span>Schedule</span>
            <span>Schedule a call</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-trash-can-alt"></i>
          </div>
          <div class="meta">
            <span>Remove</span>
            <span>Remove from list</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
