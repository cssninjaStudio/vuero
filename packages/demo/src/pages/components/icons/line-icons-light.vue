<script setup lang="ts">
import { lineIcons } from '/@src/data/icons/lineIcons'

const { text, copy, copied } = useClipboard()
const { y } = useWindowScroll()
const filter = ref('')

const isScrolling = computed(() => {
  return y.value > 30
})
const filteredIcons = computed(() => {
  if (filter.value === '') {
    return lineIcons
  }

  const filterRe = new RegExp(filter.value, 'i')

  return lineIcons.filter((icon) => {
    return icon.className.match(filterRe)
  })
})

function getSnippet(icon: any) {
  return ` <i class="lnil ${icon.className}" aria-hidden="true"></i>`
}

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Line Icons Icons'
})
useHead({
  title: 'Line Icons Icons - Components - Vuero',
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
          label: 'Icons',
        },
        {
          label: 'Line Icons',
          to: '/components/icons/line-icons-light',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Line Icons-->
        <IconsLineLightDocumentation />

        <DocumentationDemoCard class="mt-4">
          <div
            class="card-inner"
            :class="{ 'is-scrolling': isScrolling }"
          >
            <VFlex
              justify-content="flex-end"
              class="demo-icon-search py-4 px-6"
            >
              <VField>
                <VControl icon="lucide:search">
                  <input
                    v-model="filter"
                    type="search"
                    class="input is-rounded"
                    placeholder="Search line icons ..."
                  >
                </VControl>
              </VField>
            </VFlex>
            <ul class="demo-icon-list">
              <li
                v-for="icon in filteredIcons"
                :key="icon.className"
                role="button"
                class="textFilter-target is-copy-trigger"
                tabindex="0"
                @keydown.enter.prevent="copy(getSnippet(icon))"
                @click="copy(getSnippet(icon))"
              >
                <i
                  aria-hidden="true"
                  class="lnil"
                  :class="icon.className"
                />
                <p class="textFilter-match">
                  {{ icon.className }}
                </p>
                <em>{{ icon.className }}</em>
                <input
                  type="text"
                  maxlength="1"
                  readonly
                  :value="icon.char"
                >

                <Transition name="fade-fast">
                  <span
                    v-if="copied && text === getSnippet(icon)"
                    class="is-copied"
                  >
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
