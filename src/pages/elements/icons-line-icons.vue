<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'
import { lineIcons } from '/@src/data/icons/lineIcons'

const { y } = useWindowScroll()
const filter = ref('')

const isScrolling = computed(() => {
  return y.value > 30
})
const filteredIcons = computed(() => {
  if (filter.value === '') {
    return lineIcons
  }

  return lineIcons.filter((icon) => {
    return icon.className.match(new RegExp(filter.value, 'i'))
  })
})

pageTitle.value = 'Line Icons Icons'
useHead({
  title: 'Line Icons Icons - Elements - Vuero',
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
          label: 'Line Icons',
          to: { name: 'elements-icons-line-icons' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Line Icons-->
        <IconsLineLightDocumentation />

        <div class="demo-card mt-4">
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
                    placeholder="Search line icons ..."
                  />
                </VControl>
              </VField>
            </VFlex>
            <ul class="demo-icon-list">
              <li
                v-for="icon in filteredIcons"
                :key="icon.className"
                class="textFilter-target"
              >
                <i aria-hidden="true" class="lnir" :class="icon.className"></i>
                <p class="textFilter-match">{{ icon.className }}</p>
                <em>{{ icon.className }}</em>
                <input type="text" maxlength="1" readonly :value="icon.char" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
