<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    buttons?: any[]
    activeTab?: number
    rounded?: boolean
    straight?: boolean
  }>(),
  {
    buttons: () => [],
    activeTab: 0,
  }
)
const tab = ref(props.activeTab)
</script>

<template>
  <div class="widget social-buttons-widget" :class="[props.straight && 'is-straight']">
    <div class="social-buttons">
      <div
        v-for="(button, index) in props.buttons"
        :key="button.id"
        class="social-button"
      >
        <a
          class="inner-button is-facebook"
          :class="[
            tab === index && 'is-active',
            'is-' + button.network,
            props.rounded && 'is-rounded',
          ]"
          tabindex="0"
          role="button"
          @keydown.space.prevent="tab = index"
          @click="tab = index"
        >
          <i aria-hidden="true" :class="button.icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>
