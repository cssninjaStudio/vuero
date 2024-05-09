<script setup lang="ts">
import sidebar from '/@src/data/landing/sidebar.json'
import auth from '/@src/data/landing/auth.json'
import minimal from '/@src/data/landing/minimal.json'
import starters from '/@src/data/landing/starters.json'
import navbar from '/@src/data/landing/navbar.json'
import { type ComputedRef, type Ref } from 'vue'

export interface DemoItem {
  name: string
  category: string
  keywords: string
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
function computedFilter(items: DemoItem[], filter: Ref<string>, showAll: Ref<boolean>): ComputedRef<DemoItem[]> {
  return computed(() => {
    if (!filter.value && showAll.value) {
      return items
    }
    else if (!filter.value) {
      return items.slice(0, 6)
    }

    const searchValue = filter.value.replace(/[^A-Za-z0-9]/g, '')
    const filterRe = new RegExp(searchValue, 'i')

    return items.filter((demo) => {
      return (
        demo.name.match(filterRe)
        || demo.category.match(filterRe)
        || demo.keywords?.match(filterRe)
        || demo.route.name.replace(/-/g, ' ').match(filterRe)
      )
    })
  })
}

function generateFeatureRequestLink(name: string) {
  return `https://github.com/cssninjaStudio/vuero-public/issues/new?assignees=&labels=feature-request%2Ctriage&template=feature_request.yml&title=%5BFeature%5D%3A+%20${name}`
}

function displayOrder(a: { displayOrder: number }, b: { displayOrder: number }) {
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
const templatesDemos = starters.sort(displayOrder) as DemoItem[]
const navbarDemos = navbar.sort(displayOrder) as DemoItem[]

const totalDemos
  = sidebarDemos.length
  + authDemos.length
  + minimalDemos.length
  + templatesDemos.length
  + navbarDemos.length

const filterInput = ref('')

const showMoreSidebar = ref(false)
const showMoreNavbar = ref(false)
const showMoreMinimal = ref(false)
const showMoreTemplates = ref(false)
const showMoreAuth = ref(false)

const sidebarDemosFiltered = computedFilter(sidebarDemos, filterInput, showMoreSidebar)
const authDemosFiltered = computedFilter(authDemos, filterInput, showMoreAuth)
const minimalDemosFiltered = computedFilter(minimalDemos, filterInput, showMoreMinimal)
const templatesDemosFiltered = computedFilter(templatesDemos, filterInput, showMoreTemplates)
const navbarDemosFiltered = computedFilter(navbarDemos, filterInput, showMoreNavbar)

const totalResults = computed(() => {
  return (
    sidebarDemosFiltered.value.length
    + authDemosFiltered.value.length
    + minimalDemosFiltered.value.length
    + templatesDemosFiltered.value.length
    + navbarDemosFiltered.value.length
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
</script>

<template>
  <form
    method="post"
    novalidate
    class="vuero-demos"
    @submit.prevent
  >
    <div class="demo-search-section">
      <VFlex justify-content="center">
        <VField :label="searchLabel">
          <VControl icon="lucide:search">
            <VInput
              v-model.trim="filterInput"
              type="search"
              class="is-rounded"
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
            src="/images/illustrations/placeholders/search-4.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/images/illustrations/placeholders/search-4-dark.svg"
            alt=""
          >
        </template>

        <template #action>
          <VButton
            :href="generateFeatureRequestLink(filterInput)"
            target="_blank"
            icon="lucide:github"
          >
            Fill a request feature on github
          </VButton>
        </template>
      </VPlaceholderPage>
    </div>

    <!--ADMIN-->
    <div
      v-if="sidebarDemosFiltered.length > 0"
      class="demo-section"
    >
      <div class="demo-section-title">
        <img
          class="light-image-block"
          src="/images/icons/components/layout-1.svg"
          alt=""
        >
        <img
          class="dark-image-block"
          src="/images/icons/components/layout-1-dark.svg"
          alt=""
        >
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
          <RouterLink
            :to="item.route.path"
            class="demo-link"
          >
            <figure class="vuero-demo-wrapper loaded">
              <span
                v-if="item.new"
                class="new-tag"
              >New</span>
              <img
                class="light-image-block"
                :src="item.screenshot.light"
                alt=""
                loading="lazy"
              >
              <img
                class="dark-image-block"
                :src="item.screenshot.dark"
                alt=""
                loading="lazy"
              >
              <div class="circle-overlay" />
              <div class="demo-info has-text-centered">
                <div class="wrapper">
                  <div class="demo-title">
                    <span>{{ item.category }}</span>
                    <span>{{ item.name }}</span>
                  </div>
                  <div class="demo-link">
                    <span>
                      Go to demo
                      <VIcon
                        class="rtl-hidden"
                        icon="lucide:arrow-right"
                      />
                      <VIcon
                        class="ltr-hidden"
                        icon="lucide:arrow-left"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </figure>
          </RouterLink>
        </div>
      </div>

      <div class="has-text-centered my-6">
        <VButton
          v-if="!filterInput && sidebarDemos.length > 6 && sidebarDemosFiltered.length > 0"
          :icon="showMoreSidebar ? 'lucide:minus': 'lucide:plus'"
          size="huge"
          rounded
          bold
          raised
          :color="showMoreSidebar ? 'light' : 'primary'"
          @click="showMoreSidebar = !showMoreSidebar"
        >
          {{ showMoreSidebar ? 'Show less' : `Show ${sidebarDemos.length - 6} more` }}
        </VButton>
      </div>
    </div>

    <!--WEBAPP-->
    <div
      v-if="navbarDemosFiltered.length > 0"
      class="demo-section"
    >
      <div class="demo-section-title">
        <img
          class="light-image-block"
          src="/images/icons/components/layout-2.svg"
          alt=""
        >
        <img
          class="dark-image-block"
          src="/images/icons/components/layout-2-dark.svg"
          alt=""
        >
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
          <RouterLink
            :to="item.route.path"
            class="demo-link"
          >
            <figure class="vuero-demo-wrapper loaded">
              <span
                v-if="item.new"
                class="new-tag"
              >New</span>
              <img
                class="light-image-block"
                :src="item.screenshot.light"
                alt=""
                loading="lazy"
              >
              <img
                class="dark-image-block"
                :src="item.screenshot.dark"
                alt=""
                loading="lazy"
              >
              <div class="circle-overlay" />
              <div class="demo-info has-text-centered">
                <div class="wrapper">
                  <div class="demo-title">
                    <span>{{ item.category }}</span>
                    <span>{{ item.name }}</span>
                  </div>
                  <div class="demo-link">
                    <span>
                      Go to demo
                      <VIcon
                        class="rtl-hidden"
                        icon="lucide:arrow-right"
                      />
                      <VIcon
                        class="ltr-hidden"
                        icon="lucide:arrow-left"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </figure>
          </RouterLink>
        </div>
      </div>

      <div class="has-text-centered my-6">
        <VButton
          v-if="!filterInput && navbarDemos.length > 6 && navbarDemosFiltered.length > 0"
          :icon="showMoreNavbar ? 'lucide:minus': 'lucide:plus'"
          size="huge"
          rounded
          bold
          raised
          :color="showMoreNavbar ? 'light' : 'primary'"
          @click="showMoreNavbar = !showMoreNavbar"
        >
          {{ showMoreNavbar ? 'Show less' : `Show ${navbarDemos.length - 6} more` }}
        </VButton>
      </div>
    </div>

    <!--MINIMAL-->
    <div
      v-if="minimalDemosFiltered.length > 0"
      class="demo-section"
    >
      <div class="demo-section-title">
        <img
          class="light-image-block"
          src="/images/icons/components/layout-3.svg"
          alt=""
        >
        <img
          class="dark-image-block"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        >
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
          <RouterLink
            :to="item.route.path"
            class="demo-link"
          >
            <figure class="vuero-demo-wrapper loaded">
              <span
                v-if="item.new"
                class="new-tag"
              >New</span>
              <img
                class="light-image-block"
                :src="item.screenshot.light"
                alt=""
                loading="lazy"
              >
              <img
                class="dark-image-block"
                :src="item.screenshot.dark"
                alt=""
                loading="lazy"
              >
              <div class="circle-overlay" />
              <div class="demo-info has-text-centered">
                <div class="wrapper">
                  <div class="demo-title">
                    <span>{{ item.category }}</span>
                    <span>{{ item.name }}</span>
                  </div>
                  <div class="demo-link">
                    <span>
                      Go to demo
                      <VIcon
                        class="rtl-hidden"
                        icon="lucide:arrow-right"
                      />
                      <VIcon
                        class="ltr-hidden"
                        icon="lucide:arrow-left"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </figure>
          </RouterLink>
        </div>
      </div>

      <div class="has-text-centered my-6">
        <VButton
          v-if="!filterInput && minimalDemos.length > 6 && minimalDemosFiltered.length > 0"
          :icon="showMoreMinimal ? 'lucide:minus': 'lucide:plus'"
          size="huge"
          rounded
          bold
          raised
          :color="showMoreMinimal ? 'light' : 'primary'"
          @click="showMoreMinimal = !showMoreMinimal"
        >
          {{ showMoreMinimal ? 'Show less' : `Show ${minimalDemos.length - 6} more` }}
        </VButton>
      </div>
    </div>

    <!--TEMPLATES-->
    <div
      v-if="templatesDemosFiltered.length > 0"
      class="demo-section"
    >
      <div class="demo-section-title">
        <img
          class="light-image-block"
          src="/images/icons/components/layout-3.svg"
          alt=""
        >
        <img
          class="dark-image-block"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        >
        <div class="title-meta">
          <h3>Templates</h3>
          <p>Blank starters to start fast</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in templatesDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route.path"
            class="demo-link"
          >
            <figure class="vuero-demo-wrapper loaded">
              <span
                v-if="item.new"
                class="new-tag"
              >New</span>
              <img
                class="light-image-block"
                :src="item.screenshot.light"
                alt=""
                loading="lazy"
              >
              <img
                class="dark-image-block"
                :src="item.screenshot.dark"
                alt=""
                loading="lazy"
              >
              <div class="circle-overlay" />
              <div class="demo-info has-text-centered">
                <div class="wrapper">
                  <div class="demo-title">
                    <span>{{ item.category }}</span>
                    <span>{{ item.name }}</span>
                  </div>
                  <div class="demo-link">
                    <span>
                      Go to demo
                      <VIcon
                        class="rtl-hidden"
                        icon="lucide:arrow-right"
                      />
                      <VIcon
                        class="ltr-hidden"
                        icon="lucide:arrow-left"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </figure>
          </RouterLink>
        </div>
      </div>

      <div class="has-text-centered my-6">
        <VButton
          v-if="!filterInput && templatesDemos.length > 6 && templatesDemosFiltered.length > 0"
          :icon="showMoreTemplates ? 'lucide:minus': 'lucide:plus'"
          size="huge"
          rounded
          bold
          raised
          :color="showMoreTemplates ? 'light' : 'primary'"
          @click="showMoreTemplates = !showMoreTemplates"
        >
          {{ showMoreTemplates ? 'Show less' : `Show ${templatesDemos.length - 6} more` }}
        </VButton>
      </div>
    </div>

    <!--AUTH-->
    <div
      v-if="authDemosFiltered.length > 0"
      class="demo-section"
    >
      <div class="demo-section-title">
        <img
          class="light-image-block"
          src="/images/icons/components/layout-3.svg"
          alt=""
        >
        <img
          class="dark-image-block"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        >
        <div class="title-meta">
          <h3>Auth</h3>
          <p>Sign-In &amp; Sign-Up starters</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in authDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route.path"
            class="demo-link"
          >
            <figure class="vuero-demo-wrapper loaded">
              <span
                v-if="item.new"
                class="new-tag"
              >New</span>
              <img
                class="light-image-block"
                :src="item.screenshot.light"
                alt=""
                loading="lazy"
              >
              <img
                class="dark-image-block"
                :src="item.screenshot.dark"
                alt=""
                loading="lazy"
              >
              <div class="circle-overlay" />
              <div class="demo-info has-text-centered">
                <div class="wrapper">
                  <div class="demo-title">
                    <span>{{ item.category }}</span>
                    <span>{{ item.name }}</span>
                  </div>
                  <div class="demo-link">
                    <span>
                      Go to demo
                      <VIcon
                        class="rtl-hidden"
                        icon="lucide:arrow-right"
                      />
                      <VIcon
                        class="ltr-hidden"
                        icon="lucide:arrow-left"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </figure>
          </RouterLink>
        </div>
      </div>

      <div class="has-text-centered my-6">
        <VButton
          v-if="!filterInput && authDemos.length > 6 && authDemosFiltered.length > 0"
          :icon="showMoreAuth ? 'lucide:minus': 'lucide:plus'"
          size="huge"
          rounded
          bold
          raised
          :color="showMoreAuth ? 'light' : 'primary'"
          @click="showMoreAuth = !showMoreAuth"
        >
          {{ showMoreAuth ? 'Show less' : `Show ${authDemos.length - 6} more` }}
        </VButton>
      </div>
    </div>
  </form>
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

.vuero-demos {
  .demo-section {
    margin-bottom: 100px;

    .demo-section-title {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      img {
        display: block;
        width: 100%;
        max-width: 100px;
      }

      .title-meta {
        margin-inline-start: 12px;
        line-height: 1.2;

        h3 {
          font-family: var(--font-alt);
          font-weight: 500;
          font-size: 1.3rem;
          color: var(--dark-text);
        }

        p {
          font-family: var(--font);
          font-size: 1.1rem;
          color: var(--light-text);
        }
      }
    }
  }
}

.vuero-demo-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid color-mix(in oklab, var(--fade-grey), black 5%);
  min-height: 205px;

  &::after {
    // @extend %loader;

    position: absolute !important;
    top: 40%;
    inset-inline-start: 42%;
    height: 3.5rem;
    width: 3.5rem;
    transform: translate(-50%, -50%);
    z-index: 4;
  }

  &.loaded {
    &::after {
      display: none !important;
    }
  }

  img {
    border-radius: 10px;
    max-width: 100%;
    width: 100%;
  }

  .new-tag {
    position: absolute;
    bottom: 10px;
    inset-inline-end: 10px;
    background: red;
    color: var(--white);
    font-family: var(--font);
    padding: 6px 16px;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 0.8rem;
    z-index: 3;
  }

  .circle-overlay {
    position: absolute;
    top: -60px;
    inset-inline-start: -60px;
    width: 60px;
    height: 60px;
    border-radius: var(--radius-rounded);
    background: var(--primary);
    transform: scale(1);
    transition: all 0.5s;
    z-index: 1;
  }

  .demo-info {
    position: absolute;
    margin: 0 auto;
    top: 26%;
    inset-inline-start: 0;
    inset-inline-end: 0;
    z-index: 2;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .demo-title {
    color: var(--white);
    font-family: var(--font);
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid color-mix(in oklab, var(--primary), white 20%);
    transform: translateY(20px);
    transition: all 0.3s; // transition-all test
    transition-delay: 0.1s;

    span {
      display: block;

      &:first-child {
        text-transform: uppercase;
        font-size: 0.75rem;
      }

      &:nth-child(2) {
        font-weight: 300;
      }
    }
  }

  .demo-link {
    opacity: 0;
    transform: translateY(20px);
    transition:
      transform 0.3s,
      opacity 0.3s,
      color 0.3s;
    transition-delay: 0.2s;

    > span {
      display: inline-flex;
      align-items: center;
      font-family: var(--font);
      color: var(--white);
      font-size: 1rem;
      margin-inline-start: 8px;

      .iconify {
        position: relative;
        top: 1px;
        opacity: 0;
        transform: translateX(calc(var(--transform-direction) * 0));
        transition: all 0.3s ease-out;
      }

      &:hover .iconify {
        opacity: 1;
        transform: translateX(calc(var(--transform-direction) * 5px));
      }
    }
  }
}

.demo-link {
  &:focus-visible {
    .vuero-demo-wrapper {
      outline-offset: var(--accessibility-focus-outline-offset);
      outline-width: var(--accessibility-focus-outline-width);
      outline-color: var(--accessibility-focus-outline-color);
      outline-style: var(--accessibility-focus-outline-style);
    }
  }

  &:hover, &:focus {
    .vuero-demo-wrapper {
      .circle-overlay {
        transform: scale(35);
      }

      .demo-title {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0 !important;
      }

      .demo-link {
        color: var(--white);
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0 !important;
      }
    }
  }
}

.is-dark {
  .vuero-demos {
    .demo-section {
      .demo-section-title {
        .title-meta {
          h3 {
            color: var(--dark-dark-text);
          }
        }
      }
    }

    .vuero-demo-wrapper {
      border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

      .circle-overlay {
        background: var(--primary);
      }

      .demo-title {
        border-color: color-mix(in oklab, var(--primary), white 10%);
      }
    }
  }
}

@media (width <= 767px) {
  .landing-page-wrapper {
    .vuero-demo-wrapper {
      min-height: 184px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .landing-page-wrapper {
    .vuero-demos {
      .demo-section {
        .columns {
          display: flex;

          .column.is-4 {
            min-width: 50% !important;
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .landing-page-wrapper {
    .vuero-demo-wrapper {
      min-height: 174px;
    }
  }
}
</style>
