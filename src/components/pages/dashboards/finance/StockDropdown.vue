<script lang="ts">
import { defineComponent } from 'vue'

const StockDropdown = defineComponent({
  name: 'StockDropdown',
  components: {},
  setup() {
    // StockDropdown - Composition API

    return {}
  },
})

export default StockDropdown
</script>

<template>
  <div class="dropdown is-spaced is-dots is-right dropdown-trigger">
    <div class="is-trigger" aria-haspopup="true">
      <Icon icon="feather:more-vertical" />
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-coins"></i>
          </div>
          <div class="meta">
            <span>Invest</span>
            <span>Buy more stocks</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-bank"></i>
          </div>
          <div class="meta">
            <span>Trade</span>
            <span>View opportunities</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-reload"></i>
          </div>
          <div class="meta">
            <span>Refresh</span>
            <span>Refresh data</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>