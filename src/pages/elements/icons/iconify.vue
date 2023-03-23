<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { iconifyFeather } from '/@src/data/icons/iconifyFeather'

const { text, copy, copied } = useClipboard()
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

function getSnippet(icon: any) {
  return `<i class="iconify" data-icon="feather:${icon.name}" aria-hidden="true"></i>`
}

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Iconify Icons')
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
          to: '/',
        },
        {
          label: 'Elements',
          to: '/elements/',
        },
        {
          label: 'Icons',
        },
        {
          label: 'Iconify',
          to: '/elements/icons/iconify',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Iconify Icons-->
        <IconsIconifyDocumentation />

        <DocumentationDemoCard>
          <div class="card-inner" :class="{ 'is-scrolling': isScrolling }">
            <VFlex justify-content="flex-end" class="demo-icon-search py-4 px-6">
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
                class="textFilter-target is-copy-trigger"
                tabindex="0"
                role="button"
                @keydown.space.prevent="copy(getSnippet(icon))"
                @click="copy(getSnippet(icon))"
              >
                <i aria-hidden="true" class="iconify" :data-icon="icon.dataIcon"></i>
                <p class="textFilter-match">{{ icon.name }}</p>

                <Transition name="fade-fast">
                  <span v-if="copied && text === getSnippet(icon)" class="is-copied">
                    copied!
                  </span>
                </Transition>
              </li>
            </ul>
          </div>
        </DocumentationDemoCard>
      </div>
    </div>
  </div>
</template>
