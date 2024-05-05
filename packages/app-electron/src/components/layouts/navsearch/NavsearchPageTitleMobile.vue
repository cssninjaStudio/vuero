<template>
  <div class="page-title has-text-centered">
    <!-- Mobile Page Title -->
    <div class="title-wrap">
      <slot />
    </div>

    <div class="toolbar mobile-toolbar">
      <slot name="toolbar" />
    </div>
  </div>
</template>
