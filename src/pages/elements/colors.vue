<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Colors')

useHead({
  title: 'Colors - Elements - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'Elements',
          to: '/elements/',
        },
        {
          label: 'Colors',
          to: '/elements/colors',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Theme Colors-->
        <ColorsDocumentation />

        <div class="columns is-multiline">
          <div class="column is-4">
            <DocumentationColor color="primary" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="secondary" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="dark" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="success" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="warning" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="danger" />
          </div>
        </div>

        <ThemeDocumentation />
        <div class="columns is-multiline">
          <div class="column is-4">
            <DocumentationColor color="purple" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="blue" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="light-blue" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="red" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="orange" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="yellow" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="pink" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="green" />
          </div>
        </div>
        <ThemingDocumentation />
        <div class="columns is-multiline">
          <div class="column is-4">
            <DocumentationColor color="primary-grey" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="placeholder" />
          </div>
          <div class="column is-4">
            <DocumentationColor color="smoke-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
