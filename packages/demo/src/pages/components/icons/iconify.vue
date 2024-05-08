<script setup lang="ts">
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
  return `<VIcon icon="lucide:${icon.name}" />`
}

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Iconify Icons'
})
useHead({
  title: 'Iconify Icons - Components - Vuero',
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
          label: 'Iconify',
          to: '/components/icons/iconify',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Iconify Icons-->
        <IconsIconifyDocumentation />

        <DocumentationDemoCard>
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
                    placeholder="Search Lucide Icons ..."
                  >
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
                @keydown.enter.prevent="copy(getSnippet(icon))"
                @click="copy(getSnippet(icon))"
              >
                <VIcon
                  :icon="icon.dataicon"
                />
                <p class="textFilter-match">
                  {{ icon.name }}
                </p>

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
