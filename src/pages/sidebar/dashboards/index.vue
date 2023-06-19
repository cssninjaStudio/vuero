<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(() => t('pages.dashboard-personnal-1.page-title'))

useHead(() => ({
  title: `${t('pages.dashboard-personnal-1.page-title')} - Sidebar - Vuero`,
}))
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV1 />
  </div>
</template>
