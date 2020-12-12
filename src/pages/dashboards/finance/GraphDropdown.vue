<script lang="ts">
import { defineComponent } from 'vue'

const GraphDropdown = defineComponent({
  name: 'GraphDropdown',
  components: {},
  setup() {
    // GraphDropdown - Composition API

    return {}
  },
})

export default GraphDropdown
</script>

<template>
  <div class="dropdown is-spaced is-dots is-right dropdown-trigger">
    <div class="is-trigger" aria-haspopup="true">
      <i data-feather="more-vertical"></i>
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
            <i class="lnil lnil-dollar-up"></i>
          </div>
          <div class="meta">
            <span>Compare</span>
            <span>Compare with others</span>
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
            <i class="lnil lnil-wallet-alt-1"></i>
          </div>
          <div class="meta">
            <span>Wallet</span>
            <span>Open stock wallet</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>