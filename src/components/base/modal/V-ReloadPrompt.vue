<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <transition name="from-bottom">
    <V-Card
      v-if="offlineReady || needRefresh"
      class="pwa-toast"
      role="alert"
      radius="smooth"
    >
      <div class="pwa-message">
        <span v-if="offlineReady"> App ready to work offline </span>
        <span v-else>
          New version available, click on reload button to update.
        </span>
      </div>
      <V-Buttons align="right">
        <V-Button
          v-if="needRefresh"
          color="primary"
          icon="ion:reload-outline"
          @click="updateServiceWorker()"
        >
          Reload
        </V-Button>
        <V-Button icon="feather:x" @click="close">Close</V-Button>
      </V-Buttons>
    </V-Card>
  </transition>
</template>

<style scoped>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 350px;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
}

.pwa-message {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
</style>
