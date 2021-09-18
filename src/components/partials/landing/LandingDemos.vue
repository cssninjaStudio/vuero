<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'
import { ref, computed } from 'vue'
import { debouncedWatch } from '@vueuse/core'

import sidebar from '/@src/data/landing/sidebar.json'
import auth from '/@src/data/landing/auth.json'
import minimal from '/@src/data/landing/minimal.json'
import templates from '/@src/data/landing/templates.json'
import navbar from '/@src/data/landing/navbar.json'

export interface DemoItem {
  name: string
  category: string
  displayOrder: number
  new: boolean
  route: {
    name: string
    path: string
  }
  screenshot: {
    light: string
    dark: string
  }
}

// This is a helper function that generate a computed items filtered with the input
function useFilter(
  items: DemoItem[],
  filter: Ref<string>
): ComputedRef<DemoItem[]> {
  return computed(() => {
    if (!filter.value) {
      return items
    }

    if (filter.value === 'new') {
      return items.filter((demo) => demo.new)
    }

    const searchValue = filter.value.replace(/[^A-Za-z0-9]/g, '')
    const filterRe = new RegExp(searchValue, 'i')

    return items.filter((demo) => {
      return demo.name.match(filterRe) || demo.category.match(filterRe)
    })
  })
}

function generateFeatureRequestLink(name: string) {
  return `https://github.com/cssninjaStudio/vuero-public/issues/new?assignees=&labels=feature-request%2Ctriage&template=feature_request.yml&title=%5BFeature%5D%3A+%20${name}`
}

function displayOrder(
  a: { displayOrder: number },
  b: { displayOrder: number }
) {
  if (a.displayOrder < b.displayOrder) {
    return -1
  }
  if (a.displayOrder > b.displayOrder) {
    return 1
  }
  return 0
}

const sidebarDemos = sidebar.sort(displayOrder) as DemoItem[]
const authDemos = auth.sort(displayOrder) as DemoItem[]
const minimalDemos = minimal.sort(displayOrder) as DemoItem[]
const templatesDemos = templates.sort(displayOrder) as DemoItem[]
const navbarDemos = navbar.sort(displayOrder) as DemoItem[]

const totalDemos =
  sidebarDemos.length +
  authDemos.length +
  minimalDemos.length +
  templatesDemos.length +
  navbarDemos.length

const filterInput = ref('')
const sidebarDemosFiltered = useFilter(sidebarDemos, filterInput)
const authDemosFiltered = useFilter(authDemos, filterInput)
const minimalDemosFiltered = useFilter(minimalDemos, filterInput)
const templatesDemosFiltered = useFilter(templatesDemos, filterInput)
const navbarDemosFiltered = useFilter(navbarDemos, filterInput)

const totalResults = computed(() => {
  return (
    sidebarDemosFiltered.value.length +
    authDemosFiltered.value.length +
    minimalDemosFiltered.value.length +
    templatesDemosFiltered.value.length +
    navbarDemosFiltered.value.length
  )
})

const searchLabel = computed(() => {
  if (!filterInput.value) {
    return `Search in the ${totalDemos} demos`
  }

  if (!totalResults.value) {
    return `Oops, no demo available for "${filterInput.value}" yet!`
  }

  return `${totalResults.value} demos over ${totalDemos} match your request!`
})

// We use debouncedWatch to debounce the filter input
debouncedWatch(
  filterInput,
  () => {
    if (filterInput.value.length < 3) {
      return
    }

    // gtag and is injected via vite-plugin-radar
    if (window && window.gtag) {
      window.gtag('event', 'search', {
        search_term: filterInput.value,
      })
      console.log(window.dataLayer)
    }
  },
  { debounce: 300 }
)
</script>

<template>
  <div class="vuero-demos">
    <div class="demo-search-section">
      <VFlex justify-content="center">
        <VField :label="searchLabel">
          <VControl icon="feather:search">
            <input
              v-model="filterInput"
              type="search"
              class="input is-rounded"
              placeholder="Soccer, flights, e-commerce, app ..."
            />
          </VControl>
        </VField>
      </VFlex>
    </div>
    <div v-if="totalResults === 0">
      <VPlaceholderPage
        title="We couldn't find any matching results."
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-4.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
            alt=""
          />
        </template>

        <template #action>
          <VButton
            :href="generateFeatureRequestLink(filterInput)"
            target="_blank"
            icon="feather:github"
          >
            Fill a request feature on github
          </VButton>
        </template>
      </VPlaceholderPage>
    </div>

    <!--ADMIN-->
    <div v-if="sidebarDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-1.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Sidebar Layout</h3>
          <p>With a side navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in sidebarDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--WEBAPP-->
    <div v-if="navbarDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-2.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-2-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Navbar Layout</h3>
          <p>With a top navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in navbarDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--MINIMAL-->
    <div v-if="minimalDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Minimal Layout</h3>
          <p>Without any navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in minimalDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--AUTH-->
    <div v-if="authDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Auth</h3>
          <p>Sign-In &amp; Sign-Up templates</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in authDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--TEMPLATES-->
    <div v-if="templatesDemosFiltered.length > 0" class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Templates</h3>
          <p>Blank templates to start fast</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in templatesDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-search-section {
  margin-bottom: 2rem;

  &:deep(.label) {
    text-align: center !important;
  }
  .input {
    min-width: 300px;
  }
}
</style>
