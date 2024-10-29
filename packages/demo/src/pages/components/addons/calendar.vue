<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VCalendar'
})

useHead({
  title: 'VCalendar - Addons - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'Addons',
        },
        {
          label: 'VCalendar',
          to: '/components/addons/calendar',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <!-- Datepicker -->
      <DatepickerBaseDocumentation />

      <!-- DateRangepicker -->
      <DatepickerRangeDocumentation />

      <!-- DateTimepicker -->
      <DatepickerTimeDocumentation />

      <!-- Timepicker -->
      <DatepickerTimeSingleDocumentation />
    </DocumentationTocContainer>
  </div>
</template>
