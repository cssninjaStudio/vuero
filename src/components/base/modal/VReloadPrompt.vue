<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export interface VReloadPromptProps {
  appName: string
}

const loading = ref(false)
const props = defineProps<VReloadPromptProps>()

const { t } = useI18n()
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()

const close = async () => {
  loading.value = false
  offlineReady.value = false
  needRefresh.value = false
}
const update = async () => {
  loading.value = true
  await updateServiceWorker()
  loading.value = false
}
</script>

<i18n lang="yaml">
de:
  offline-ready: '{appName} ist bereit, offline zu arbeiten'
  need-refresh: 'Eine neue Version von {appName} ist verfügbar, klicken Sie auf die Schaltfläche Neu laden, um sie zu aktualisieren.'
  reload-button: 'Neu laden'
  close-button: 'Schließen'
en:
  offline-ready: '{appName} is ready to work offline'
  need-refresh: 'A new version of {appName} is available, click on reload button to update.'
  reload-button: 'Reload'
  close-button: 'Close'
es-MX:
  offline-ready: '{appName} está listo para trabajar sin conexión'
  need-refresh: 'Una nueva versión de {appName} está disponible, haga clic en el botón Recarga para actualizar.'
  reload-button: 'Recarga'
  close-button: 'Cerrar'
es:
  offline-ready: '{appName} está listo para trabajar sin conexión'
  need-refresh: 'Una nueva versión de {appName} está disponible, haga clic en el botón Recarga para actualizar.'
  reload-button: 'Recarga'
  close-button: 'Cerrar'
fr:
  offline-ready: '{appName} est prêt à être utilisé hors ligne'
  need-refresh: 'Une nouvelle version de {appName} est disponible, cliquez sur le bouton Recharger pour la mettre à jour.'
  reload-button: 'Recharger'
  close-button: 'Fermer'
zh-CN:
  offline-ready: '{appName}已准备好脱机工作'
  need-refresh: '新版本的{appName}已经可用，点击重新加载按钮来更新。'
  reload-button: '重新加载'
  close-button: '关闭'
</i18n>

<template>
  <Transition name="from-bottom">
    <VCard
      v-if="offlineReady || needRefresh"
      class="pwa-toast"
      role="alert"
      radius="smooth"
    >
      <div class="pwa-message">
        <span v-if="offlineReady">
          {{ t('offline-ready', { appName: props.appName }) }}
        </span>
        <span v-else>
          {{ t('need-refresh', { appName: props.appName }) }}
        </span>
      </div>
      <VButtons align="right">
        <VButton
          v-if="needRefresh"
          color="primary"
          icon="ion:reload-outline"
          :loading="loading"
          @click="() => update()"
        >
          {{ t('reload-button') }}
        </VButton>
        <VButton icon="feather:x" @click="close">{{ t('close-button') }}</VButton>
      </VButtons>
    </VCard>
  </Transition>
</template>

<style lang="scss">
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 350px;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 10;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
}

.pwa-message {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
</style>
