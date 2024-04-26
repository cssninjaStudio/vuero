<script setup lang="ts">
const { t } = useI18n()

useVueroContext({
  pageTitle: () => t('pages.dashboard-personnal-1.page-title'),
})

useHead(() => ({
  title: `${t('pages.dashboard-personnal-1.page-title')} - Sidebar - Vuero`,
}))
</script>

<template>
  <PersonalDashboardV1 />
</template>
