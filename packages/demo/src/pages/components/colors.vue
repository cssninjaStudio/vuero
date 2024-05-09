<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Colors'
})

useHead({
  title: 'Colors - Components - Vuero',
})

const bulmaColors = [
  'primary',
  'secondary',
  'danger',
  'success',
  'info',
  'warning',
  'dark',
  'link',
]

const additionalColors = [
  'purple',
  'blue',
  'red',
  'orange',
  'yellow',
  'pink',
  'green',
  'lime',
]

const layoutColors = [
  'dark-sidebar',
  'body-color',
  'background-grey',
  // 'medium-grey',
  // 'light-grey',
  // 'primary-grey',
  // 'muted-grey',
  'fade-grey',
  // 'widget-grey',
  // 'smoke-white',
  'white',
  // 'border',
  // 'placeholder',
  'light-text',
]
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
          label: 'Colors',
          to: '/components/colors',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Theme Colors-->
        <ColorsDocumentation />

        <div class="columns is-multiline mb-6">
          <div
            v-for="color in bulmaColors"
            :key="color"
            class="column is-4"
          >
            <DocumentationColor :color />
          </div>
        </div>

        <!-- <ThemeDocumentation /> -->

        <div class="columns is-multiline mb-6">
          <div
            v-for="color in layoutColors"
            :key="color"
            class="column is-4"
          >
            <DocumentationColor :color />
          </div>
        </div>

        <!-- <ThemingDocumentation /> -->
        <div class="columns is-multiline mb-6">
          <div
            v-for="color in additionalColors"
            :key="color"
            class="column is-4"
          >
            <DocumentationColor :color />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
