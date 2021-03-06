<script setup lang="ts">
import useDropdown from '/@src/composable/useDropdown'
const { dropdownElement, isOpen, toggle } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-spaced is-dots is-right dropdown-trigger"
  >
    <div class="is-trigger" aria-haspopup="true" @click="toggle">
      <i class="iconify" data-icon="feather:more-vertical"></i>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-reload"></i>
          </div>
          <div class="meta">
            <span>Reload</span>
            <span>Reload chart</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-users-alt"></i>
          </div>
          <div class="meta">
            <span>Customers</span>
            <span>View customer reports</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-gift-alt-1"></i>
          </div>
          <div class="meta">
            <span>Products</span>
            <span>View product reports</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-bank"></i>
          </div>
          <div class="meta">
            <span>Finance</span>
            <span>View financial reports</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
