<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { lineIconsRegular } from '/@src/data/icons/lineIconsRegular'

const { text, copy, copied } = useClipboard()
const { y } = useWindowScroll()
const filter = ref('')

const isScrolling = computed(() => {
  return y.value > 30
})
const filteredIcons = computed(() => {
  if (filter.value === '') {
    return lineIconsRegular
  }

  const filterRe = new RegExp(filter.value, 'i')

  return lineIconsRegular.filter((icon) => {
    return icon.className.match(filterRe)
  })
})

function getSnippet(icon: any) {
  return ` <i class="lnir ${icon.className}" aria-hidden="true"></i>`
}

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Line Icons Regular Icons')
useHead({
  title: 'Line Icons Regular Icons - Elements - Vuero',
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
          label: 'Line Icons Regular',
          to: '/elements/icons/line-icons-regular',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Line Icons-->
        <IconsLineRegularDocumentation />

        <DocumentationDemoCard class="mt-4">
          <div class="card-inner" :class="{ 'is-scrolling': isScrolling }">
            <VFlex justify-content="flex-end" class="demo-icon-search py-4 px-6">
              <VField>
                <VControl icon="feather:search">
                  <input
                    v-model="filter"
                    type="search"
                    class="input is-rounded"
                    placeholder="Search regular line icons ..."
                  />
                </VControl>
              </VField>
            </VFlex>

            <ul class="demo-icon-list">
              <li
                v-for="icon in filteredIcons"
                :key="icon.className"
                class="textFilter-target is-copy-trigger"
                tabindex="0"
                role="button"
                @keydown.space.prevent="copy(getSnippet(icon))"
                @click="copy(getSnippet(icon))"
              >
                <i aria-hidden="true" class="lnir" :class="icon.className"></i>
                <p class="textFilter-match">{{ icon.className }}</p>
                <em>{{ icon.className }}</em>
                <input type="text" maxlength="1" readonly :value="icon.char" />

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
