<template>
  <div id="circular-menu" class="circular-menu">
    <a class="floating-btn">
      <i class="fas fa-bars"></i>
      <i class="fas fa-times"></i>
    </a>

    <div class="items-wrapper">
      <div class="menu-item is-flex">
        <label class="dark-mode">
          <input type="checkbox" checked />
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
