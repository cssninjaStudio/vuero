<script setup lang="ts">
import { isDark } from '/@src/composition/state/ui/darkModeState.ts'
</script>

<template>
  <div id="circular-menu" class="circular-menu">
    <a class="floating-btn">
      <Icon icon="fa-bars" />
      <Icon icon="fa-times" />
    </a>

    <div class="items-wrapper">
      <div class="menu-item is-flex">
        <label class="dark-mode">
          <input
            type="checkbox"
            :checked="!isDark"
            @change="
              (event) => {
                isDark = !event.target.checked
              }
            "
          />
          <span></span>
        </label>
      </div>
      <a
        class="menu-item is-flex right-panel-trigger"
        data-panel="languages-panel"
      >
        <img src="/@images/icons/flags/united-states-of-america.svg" alt="" />
      </a>
      <a class="menu-item is-flex">
        <Icon icon="feather:bell" />
      </a>
      <a class="menu-item is-flex">
        <Icon icon="feather:grid" />
      </a>
    </div>
  </div>
</template>
