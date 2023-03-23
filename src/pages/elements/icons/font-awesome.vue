<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fontAwesome } from '/@src/data/icons/fontAwesome'

const { text, copy, copied } = useClipboard()
const { y } = useWindowScroll()
const filter = ref('')

const isScrolling = computed(() => {
  return y.value > 30
})
const filteredIcons = computed(() => {
  if (filter.value === '') {
    return fontAwesome
  }

  return fontAwesome.filter((icon) => {
    return icon.name.match(new RegExp(filter.value, 'i'))
  })
})

function getSnippet(icon: any) {
  return `<i class="fas fa-${icon.name}" aria-hidden="true"></i>`
}

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Font Awesome Icons')
useHead({
  title: 'Font Awesome Icons - Elements - Vuero',
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
          label: 'Font Awesome',
          to: '/elements/icons/font-awesome',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Font Awesome-->
        <IconsFaDocumentation />

        <DocumentationDemoCard>
          <div class="card-inner" :class="{ 'is-scrolling': isScrolling }">
            <VFlex justify-content="flex-end" class="demo-icon-search py-4 px-6">
              <VField>
                <VControl icon="feather:search">
                  <input
                    v-model="filter"
                    type="search"
                    class="input is-rounded"
                    placeholder="Search font awesome icons ..."
                  />
                </VControl>
              </VField>
            </VFlex>

            <ul class="demo-icon-list">
              <li
                v-for="icon in filteredIcons"
                :id="icon.name"
                :key="icon.name"
                role="button"
                class="icon w-grid-2 textFilter-target w-grid-4-l w-grid-6-xl w-grid-8-2x pr4 pb2 pt2 bb bw1 b--gray1 hover-black bw0-pr db fl-pr is-copy-trigger"
                tabindex="0"
                @keydown.space.prevent="copy(getSnippet(icon))"
                @click="copy(getSnippet(icon))"
              >
                <dl class="dt clpse w-100 ma0 pa0">
                  <dt class="dtc v-top tl w2">
                    <span class="fa-fw select-all fas">{{ icon.char }}</span>
                  </dt>
                  <dd
                    class="ma0 pa0 pr2 select-all word-wrap dtc v-top tl f2 icon-name textFilter-match"
                  >
                    {{ icon.name }}
                  </dd>
                  <dd class="ma0 pa0 select-all gray5 dtc v-top tr f2 icon-unicode">
                    {{ icon.charCode }}
                  </dd>
                </dl>

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
