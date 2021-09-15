<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'
import { iconifyFeather } from '/@src/data/icons/iconifyFeather'

const { y } = useWindowScroll()
const filter = ref('')

const isScrolling = computed(() => {
  return y.value > 30
})
const filteredIcons = computed(() => {
  if (filter.value === '') {
    return iconifyFeather
  }

  return iconifyFeather.filter((icon) => {
    return icon.name.match(new RegExp(filter.value, 'i'))
  })
})

pageTitle.value = 'Iconify Icons'
useHead({
  title: 'Iconify Icons - Elements - Vuero',
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
          to: { name: 'index' },
        },
        {
          label: 'Elements',
          to: { name: 'elements' },
        },
        {
          label: 'Icons',
        },
        {
          label: 'Iconify',
          to: { name: 'elements-icons-iconify' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Iconify Icons-->
        <IconsIconifyDocumentation />

        <div class="demo-card">
          <div class="card-inner" :class="{ 'is-scrolling': isScrolling }">
            <VFlex
              justify-content="flex-end"
              class="demo-icon-search py-4 px-6"
            >
              <VField>
                <VControl icon="feather:search">
                  <input
                    v-model="filter"
                    type="search"
                    class="input is-rounded"
                    placeholder="Search feather icons ..."
                  />
                </VControl>
              </VField>
            </VFlex>

            <ul class="demo-icon-list">
              <li
                v-for="icon in filteredIcons"
                :key="icon.name"
                class="textFilter-target"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  :data-icon="icon.dataIcon"
                ></i>
                <p class="textFilter-match">{{ icon.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
