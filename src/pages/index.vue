<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

import { isDark } from '/@src/state/darkModeState'

type TabId = 'elements' | 'components' | 'forms' | 'plugins'
const activeTab = ref<TabId>('elements')

useHead({
  title: 'Vuero - A complete Vue 3 design system',
})
</script>

<template>
  <MinimalLightLayout>
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div id="huro-landing" class="hero is-fullheight rounded-hero is-active">
        <!-- Navbar partial -->
        <LandingNavigation />

        <div class="absolute-header">
          <div class="header-inner">
            <img
              class="cut-circle light-image-l"
              src="/@src/assets/shapes/cut-circle.svg"
              alt=""
            />
            <img
              class="cut-circle dark-image-l"
              src="/@src/assets/shapes/cut-circle-dark.svg"
              alt=""
            />
          </div>
        </div>

        <div class="hero-body has-text-centered">
          <div class="container">
            <div class="switch-wrapper">
              <div class="night-toggle night-toggle--daynight">
                <input
                  id="night-toggle--daynight"
                  type="checkbox"
                  class="night-toggle--checkbox"
                  :checked="!isDark"
                  @change="
                    (event) => {
                      isDark = !event.target.checked
                    }
                  "
                />
                <label class="night-toggle--btn" for="night-toggle--daynight"
                  ><span class="night-toggle--feature"></span
                ></label>
              </div>
            </div>
            <h1 class="title is-1 is-bold is-light is-bold">
              The World Needs a <span>Vuero</span>.
            </h1>
            <h3 class="subtitle is-4 is-light">
              Premium Webapp UI Kit.
              <span class="tag is-primary is-rounded">1.0</span>
            </h3>

            <img
              class="light-image-l hero-mockup"
              src="/@src/assets/illustrations/landing/app-1.png?size=740x490&format=webp"
              alt=""
            />
            <img
              class="dark-image-l hero-mockup"
              src="/@src/assets/illustrations/landing/app-1-dark.png?size=740x490&format=webp"
              alt=""
            />
          </div>
        </div>

        <canvas id="demo-canvas"></canvas>
      </div>

      <!--Stacks Section-->
      <div id="stacks-section" class="section">
        <div class="container">
          <!--Stacks-->
          <div class="stacks">
            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/images/icons/stacks/vuejs.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Vue 3',
                    subtitle: 'Composition API',
                    logo: '/images/icons/stacks/vuejs.svg',
                    description:
                      'The Progressive JavaScript Framework for building user interfaces.',
                    homepage: 'https://v3.vuejs.org/',
                    github: 'https://github.com/vuejs/vue-next',
                  }"
                />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/images/icons/stacks/vite.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Vite',
                    subtitle: 'Next Generation Frontend Tooling',
                    logo: '/images/icons/stacks/vite.svg',
                    description:
                      'Vite is a new breed of frontend build tool that significantly improves the frontend development experience.',
                    homepage: 'https://vitejs.dev/',
                    github: 'https://github.com/vitejs/vite',
                  }"
                />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/images/icons/stacks/bulma.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Bulma',
                    subtitle: 'The modern CSS framework',
                    logo: '/images/icons/stacks/bulma.svg',
                    description:
                      'Bulma is a free, open source framework that provides ready-to-use frontend components.',
                    homepage: 'https://bulma.io/',
                    github: 'https://github.com/jgthms/bulma',
                  }"
                />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/images/icons/stacks/sass.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Sass',
                    subtitle: 'Makes CSS fun again',
                    logo: '/images/icons/stacks/sass.svg',
                    description:
                      'Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.',
                    homepage: 'https://sass-lang.com/',
                    github: 'https://github.com/sass/sass',
                  }"
                />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/images/icons/stacks/typescript.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Typescript',
                    subtitle: 'Javascript enhanced',
                    logo: '/images/icons/stacks/typescript.svg',
                    description:
                      'TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications.',
                    homepage: 'https://www.typescriptlang.org/',
                    github: 'https://github.com/microsoft/TypeScript',
                  }"
                />
              </template>
            </tippy>
          </div>

          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">Amazing Features</h2>
            <h4>All you need to build your project is there.</h4>
          </div>

          <!--Boxed Features-->
          <div class="boxed-features">
            <div class="flex-card light-bordered hover-inset">
              <div class="flex-cell is-bordered">
                <i class="lnil lnil-toolbox"></i>
                <h3>500+ Vue Components</h3>
                <p>
                  An incredible set of building blocks with dark mode support.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <i class="lnil lnil-display-alt"></i>
                <h3>220+ Demos</h3>
                <p>
                  Vuero ships with a huge number of demos to kickstart your
                  project.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <i class="lnil lnil-moon"></i>
                <h3>Native Dark Mode</h3>
                <p>Every single piece of UI is natively dark mode ready.</p>
              </div>
              <div class="flex-cell is-bordered no-border-edge">
                <i class="lnil lnil-rocket"></i>
                <h3>Active Support</h3>
                <p>Our support helps you solve any issues you have</p>
              </div>
              <div class="flex-cell">
                <i class="lnil lnil-code"></i>
                <h3>Clean Code</h3>
                <p>
                  Vuero's codebase is huge, but structured and easy to
                  understand
                </p>
              </div>
              <div class="flex-cell">
                <i class="lnil lnil-plug"></i>
                <h3>Premium Icons</h3>
                <p>Vuero ships with the premium Line Icons set ($30 value).</p>
              </div>
              <div class="flex-cell">
                <i class="lnil lnil-mobile-alt-2"></i>
                <h3>Fully Responsive</h3>
                <p>Vuero is built with Bulma 0.9, a mobile first framework</p>
              </div>
              <div class="flex-cell no-border-edge">
                <i class="lnil lnil-file-name"></i>
                <h3>Extensive Docs</h3>
                <p>A nice documentation to help you get started fast</p>
              </div>
            </div>
          </div>

          <!--CTA-->
          <div class="cta-block">
            <div class="head-text">
              <h3>Buy Vuero</h3>
              <p>Available on Envato Market</p>
            </div>
            <div class="head-action">
              <div class="buttons">
                <a
                  href="https://themeforest.net/item/vuero-vuejs-3-admin-and-webapp-ui-kit/31053035"
                  class="button v-button is-primary is-rounded is-elevated action-button"
                  >Buy Now</a
                >
                <a href="https://cssninja.io" class="button chat-button"
                  >Chat with us</a
                >
              </div>
            </div>
          </div>

          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">Developer Experience</h2>
            <h4>A set of professional tools to build professional apps.</h4>
          </div>

          <!--Boxed Features-->
          <div class="boxed-features is-flat pb-6">
            <div class="flex-card light-bordered hover-inset">
              <div class="flex-cell is-bordered">
                <img src="/images/icons/stacks/vuejs-solo.svg" alt="" />
                <h3>Vue 3</h3>
                <p>
                  Vue 3 and its powerful composition API makes your experience
                  pleasant.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/stacks/typescript-square.svg" alt="" />
                <h3>Typescript</h3>
                <p>
                  Typescript makes things much more simpler but remains
                  optional.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <img src="/images/icons/stacks/vite.svg" alt="" />
                <h3>Vite JS</h3>
                <p>
                  Vite 2 is blazing fast, does HOT reloading and parses all your
                  components.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/stacks/vscode.svg" alt="" />
                <h3>VS Code Integration</h3>
                <p>
                  Vuero is fully integrated with VS Code to help you produce
                  quality checked code.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <img src="/images/icons/stacks/eslint.svg" alt="" />
                <h3>ES Lint</h3>
                <p>
                  ES Lint watches your javascript code and makes sure it matches
                  the best standards.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <img src="/images/icons/stacks/prettier.svg" alt="" />
                <h3>Prettier</h3>
                <p>
                  Prettier tidies your code and makes it look much more cleaner
                  and easier to read.
                </p>
              </div>
              <div class="flex-cell">
                <img
                  class="light-image-block-l"
                  src="/images/icons/stacks/stylelint.svg"
                  alt=""
                />
                <img
                  class="dark-image-block-l"
                  src="/images/icons/stacks/stylelint-reverse.svg"
                  alt=""
                />
                <h3>Stylelint</h3>
                <p>
                  Stylelint looks for poorly formatted styles and fixes
                  everything for you.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/stacks/iconify.svg" alt="" />
                <h3>Iconify</h3>
                <p>
                  Iconify displays icons inside your code editor so you always
                  know what you're doing.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/stacks/cypress.svg" alt="" />
                <h3>Cypress</h3>
                <p>
                  Cypress handles end to end testing to make sure everything
                  works as expected.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/stacks/pnpm-yarn.svg" alt="" />
                <h3>Pnpm + Yarn</h3>
                <p>
                  Vuero works very well with Pnpm or Yarn for efficient
                  dependency management.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/stacks/docker-whale.svg" alt="" />
                <h3>Docker</h3>
                <p>
                  Vuero ships with a Docker file to make your test deployments
                  faster and easier.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/stacks/robot.svg" alt="" />
                <h3>Robot Friendly</h3>
                <p>
                  Fully featured with structured data. Help your site display in
                  richer features in search results.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/misc/success.svg" alt="" />
                <h3>Props Validation</h3>
                <p>
                  Vuero base components ship with props validation to prevent
                  unexpected errors.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/misc/error.svg" alt="" />
                <h3>Error Handling</h3>
                <p>
                  While developping Vuero, we focused on providing an up to
                  standards error handling.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/misc/folder.svg" alt="" />
                <h3>Project Structure</h3>
                <p>
                  A clean and organized project structure lets you find any file
                  or content quickly.
                </p>
              </div>
              <div class="flex-cell">
                <img src="/images/icons/misc/documentation.svg" alt="" />
                <h3>Component Guide</h3>
                <p>
                  A full component / plugin documentation with a lot of code
                  examples lives inside Vuero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="vuero-demos" class="section section-focus">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">Outstanding Demos</h2>
            <h4>Check out a wide variety of demo pages.</h4>
          </div>

          <!--Demos partial-->
          <LandingDemos />
        </div>
      </div>

      <!--Side Features Section-->
      <div class="section">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">Top Tier Product</h2>
            <h4>Vuero has been carefully handcrafted.</h4>
          </div>

          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div class="column is-6 has-text-centered">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-1.png?size=560x406&format=webp"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-1-dark.png?size=560x406&format=webp"
                alt=""
              />
            </div>
            <div class="column is-5">
              <h2 class="title m-b-10 is-centered-tablet-portrait">
                Incredible UI
              </h2>
              <p
                class="section-feature-description is-centered-tablet-portrait"
              >
                Vuero's UI has been carefully thought and designed, and is
                simply one of the best you'll find on the market. It's visual
                power and its modularity will let you build great apps
                seamlessly.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div
              class="column is-6 has-text-centered h-hidden-desktop h-hidden-tablet-p"
            >
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-2.svg"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-2-dark.svg"
                alt=""
              />
            </div>
            <div class="column is-5 is-offset-1">
              <h2 class="title m-b-10 is-centered-tablet-portrait">
                Playful Vectors
              </h2>
              <p
                class="section-feature-description is-centered-tablet-portrait"
              >
                Vuero ships with a lot of svg illustrations representing various
                elements that can be used in a website, following very high
                quality standards.
              </p>
            </div>
            <div class="column is-6 has-text-centered h-hidden-mobile">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-2.svg"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-2-dark.svg"
                alt=""
              />
            </div>
          </div>
          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div class="column is-6 has-text-centered">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-3.svg"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-3-dark.svg"
                alt=""
              />
            </div>
            <div class="column is-5">
              <h2 class="title m-b-10 is-centered-tablet-portrait">
                Handcrafted UI
              </h2>
              <p
                class="section-feature-description is-centered-tablet-portrait"
              >
                Vuero ships with it's own component library based on the
                Bulma.io CSS framework. Each component has been carefully
                handcrafted and natively supports dark mode.
              </p>
            </div>
          </div>

          <!--CTA-->
          <div class="cta-block no-border">
            <div class="head-text">
              <h3>Want to learn more?</h3>
              <p>Check out the Vuero documentation</p>
            </div>
            <div class="head-action">
              <div class="buttons">
                <a
                  href="https://docs.huro.cssninja.io"
                  class="button v-button is-primary is-rounded is-elevated action-button"
                  >Read the Docs</a
                >
                <a
                  href="https://cssninja.io"
                  class="button chat-button is-secondary"
                  >Chat with us</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="vuero-components" class="section section-focus">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6 is-offset-3 has-text-centered">
              <!--Title-->
              <div class="section-title has-text-centered p-b-40">
                <h2 class="title is-3">Reusable components</h2>
                <h4>Vuero ships with a full component library.</h4>
              </div>
            </div>
          </div>
          <div class="columns is-vcentered component-features is-flex-tablet-p">
            <div class="column is-4">
              <!-- Side icon box -->
              <div class="media-flex">
                <div class="left-icon">
                  <i class="lnil lnil-construction"></i>
                </div>
                <div class="flex-meta">
                  <h4>Modular</h4>
                  <p>
                    Vuero uses a modular CSS structure leveraging the power of
                    Sass. Each component family has it's own files and
                    encapsulated styles.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <!-- Side icon box -->
              <div class="media-flex">
                <div class="left-icon">
                  <i class="lnil lnil-code"></i>
                </div>
                <div class="flex-meta">
                  <h4>Code Blocks</h4>
                  <p>
                    A lot of code examples are provided out of the box with
                    syntax highlighting. Building your app layout is a simple as
                    copying and pasting.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <!-- Side icon box -->
              <div class="media-flex">
                <div class="left-icon">
                  <i class="lnil lnil-color-palette"></i>
                </div>
                <div class="flex-meta">
                  <h4>Easy Theming</h4>
                  <p>
                    Vuero's components provide easy to use class based color
                    variations and modifiers to help you write less CSS. Theming
                    is also very easy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--CTA-->
          <p class="p-t-40 p-b-40 has-text-centered">
            <a
              href="https://themeforest.net/item/vuero-vuejs-3-admin-and-webapp-ui-kit/31053035"
              class="button v-button is-rounded is-primary is-elevated is-bold is-huge"
            >
              Buy Now
            </a>
          </p>

          <!--Components-->
          <div class="huro-components p-t-40 p-b-60">
            <div class="vertical-tabs-wrapper">
              <div class="tabs">
                <ul>
                  <li :class="[activeTab === 'elements' && 'is-active']">
                    <a @click="activeTab = 'elements'">Elements</a>
                  </li>
                  <li :class="[activeTab === 'components' && 'is-active']">
                    <a @click="activeTab = 'components'">Components</a>
                  </li>
                  <li :class="[activeTab === 'forms' && 'is-active']">
                    <a @click="activeTab = 'forms'">Forms</a>
                  </li>
                  <li :class="[activeTab === 'plugins' && 'is-active']">
                    <a @click="activeTab = 'plugins'">Plugins</a>
                  </li>
                </ul>
              </div>
              <div class="content-wrap">
                <LandingComponents :active-tab="activeTab" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered pt-40">
            <h2 class="title is-3">3 More Reasons To Choose Vuero</h2>
            <h4>If you're not convinced yet, here's some more.</h4>
          </div>

          <div class="customers-choice p-t-40 p-b-40">
            <!-- Feature -->
            <div class="columns is-vcentered side-feature">
              <div class="column is-5 is-offset-1 has-text-centered">
                <img
                  class="light-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-4.svg"
                  alt=""
                />
                <img
                  class="dark-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-4-dark.svg"
                  alt=""
                />
              </div>
              <div class="column is-5">
                <h2 class="title m-b-10 is-centered-tablet-portrait">
                  Professional
                </h2>
                <p
                  class="section-feature-description is-centered-tablet-portrait"
                >
                  Vuero is a professional product to build professional
                  applications. You'll find everything you need to build a
                  project that is up to the highest standards of web
                  development.
                </p>
              </div>
            </div>

            <!-- Feature -->
            <div class="columns is-vcentered side-feature">
              <div
                class="column is-5 has-text-centered h-hidden-desktop h-hidden-tablet-p"
              >
                <img
                  class="light-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-5.svg"
                  alt=""
                />
                <img
                  class="dark-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-5-dark.svg"
                  alt=""
                />
              </div>
              <div class="column is-5 is-offset-1">
                <h2 class="title m-b-10 is-centered-tablet-portrait">
                  Fast Development
                </h2>
                <p
                  class="section-feature-description is-centered-tablet-portrait"
                >
                  Vuero ships with a Vitejs development server that will assist
                  you when customizing the template. It handles .vue files
                  compilation as well as SCSS and Typescript code. The page is
                  refreshed each time you hit the save trigger in your favorite
                  editor.
                </p>
              </div>
              <div class="column is-5 has-text-centered h-hidden-mobile">
                <img
                  class="light-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-5.svg"
                  alt=""
                />
                <img
                  class="dark-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-5-dark.svg"
                  alt=""
                />
              </div>
            </div>

            <!-- Feature -->
            <div class="columns is-vcentered side-feature">
              <div class="column is-5 is-offset-1 has-text-centered">
                <img
                  class="light-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-6.svg"
                  alt=""
                />
                <img
                  class="dark-image-l featured-image"
                  src="/@src/assets/illustrations/landing/feature-6-dark.svg"
                  alt=""
                />
              </div>
              <div class="column is-5">
                <h2 class="title m-b-10 is-centered-tablet-portrait">
                  Extensive Documentation
                </h2>
                <p
                  class="section-feature-description is-centered-tablet-portrait"
                >
                  Vuero's documentation will be a precious ally, as the template
                  has a large codebase, and a lot of files. Read carefully the
                  docs, all you need to know for an optimal development
                  experience is there, even if you still are a beginner.
                </p>
              </div>
            </div>
          </div>

          <div class="cta-wrapper">
            <div class="cta-title">
              <h3>Exclusively on Envato Market</h3>
              <a
                href="https://themeforest.net/item/vuero-vuejs-3-admin-and-webapp-ui-kit/31053035"
                class="custom-button"
              >
                <img src="/images/icons/logos/envato.svg" alt="" />
                <span>Get It Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <LandingFooter />

      <!-- Back To Top Button -->
      <div id="backtotop">
        <a href="#">
          <i class="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  </MinimalLightLayout>
</template>

<style lang="scss">
@import '../assets/scss/abstracts/_variables.scss';
@import '../assets/scss/abstracts/_mixins.scss';

/* ==========================================================================
1. Defaults
========================================================================== */

.landing-page-wrapper {
  .container {
    max-width: 1140px;
  }

  .light-image-l {
    display: inline-block !important;
  }

  .dark-image-l {
    display: none !important;
  }

  .light-image-block-l {
    display: block !important;
  }

  .dark-image-block-l {
    display: none !important;
  }
}

.is-dark {
  .landing-page-wrapper {
    background: $landing-dark-1;

    .light-image-l {
      display: none !important;
    }

    .dark-image-l {
      display: inline-block !important;
    }

    .light-image-block-l {
      display: none !important;
    }

    .dark-image-block-l {
      display: block !important;
    }

    #backtotop {
      &.visible {
        a {
          background: $accent !important;
          color: $smoke-white !important;
        }
      }
    }
  }
}

/* ==========================================================================
2. Navigation
========================================================================== */

.landing-page-wrapper {
  .hero {
    .navbar {
      top: 15px;
      height: 65px;
      max-width: 1140px;
      margin: 0 auto;
      background-color: $white;
      box-shadow: $light-box-shadow;
      border: 1px solid $fade-grey;
      border-radius: 500px;
      font-family: $font;
      z-index: 99;
      transition: all 0.3s;

      &.is-docked {
        &:not(.is-solid) {
          top: 0;
          border-color: transparent;
          height: 110px;
          box-shadow: none;
          background: transparent;

          .navbar-brand {
            .brand-icon {
              height: 64px;
              width: 64px;
              background: $white;
              border-color: darken($fade-grey, 3%);
            }
          }

          .navbar-menu {
            .navbar-item {
              &.is-theme-toggle {
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s;
              }
            }
          }
        }

        &.is-solid {
          height: 65px !important;
        }
      }

      &.is-solid {
        background: $white !important;
        border-radius: 10px 10px 0 0;
      }

      .navbar-brand {
        img {
          position: relative;
          display: block;
          width: 100%;
          max-width: 34px;
          max-height: 34px;
          margin-left: 10px;
        }

        .brand-icon {
          height: 50px;
          width: 50px;
          border-radius: $radius-rounded;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid transparent;
          transition: all 0.3s;

          img {
            position: relative;
            top: -2px;
            margin-left: 0;
          }
        }
      }

      .navbar-burger {
        span {
          height: 2px;
        }
      }

      .navbar-menu {
        .navbar-item {
          &.is-theme-toggle {
            opacity: 1;
            pointer-events: all;
          }

          .nav-link {
            position: relative;
            font-family: $font-alt;
            font-size: 0.9rem;
            color: $light-text;
            text-transform: capitalize;

            &::before {
              content: '';
              position: absolute;
              top: -4px;
              left: 2px;
              width: 50%;
              -webkit-transform-origin: right center;
              -ms-transform-origin: right center;
              transform-origin: right center;
              height: 3px;
              border-radius: 50px;
              background: $primary;
              -webkit-transform: scale(0, 1);
              -ms-transform: scale(0, 1);
              transform: scale(0, 1);
              -webkit-transition: -webkit-transform 0.4s
                cubic-bezier(0.4, 0, 0.2, 1);
              transition: -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                -webkit-transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }

            //Hover state
            &:hover,
            &.is-active {
              color: $dark-text;

              &::before {
                -webkit-transform-origin: left center;
                -ms-transform-origin: left center;
                transform-origin: left center;
                -webkit-transform: scale(1, 1);
                -ms-transform: scale(1, 1);
                transform: scale(1, 1);
              }
            }

            &.active {
              &::before {
                background: $primary;
              }
            }
          }

          .theme-toggle {
            width: 54px;
            display: block;
            position: relative;
            cursor: pointer;
            font-size: 22px;
            user-select: none;
            transform: scale(0.9);

            input {
              position: absolute;
              opacity: 0;
              cursor: pointer;

              &:checked ~ .toggler {
                border-color: $accent;

                .dark,
                .light {
                  transform: translateX(100%) rotate(360deg);
                }

                .dark {
                  opacity: 1 !important;
                }

                .light {
                  opacity: 0 !important;
                }
              }
            }

            .toggler {
              position: relative;
              display: block;
              height: 31px;
              width: 53px;
              border: 2px solid $primary;
              border-radius: 100px;
              transition: all 0.3s;

              .dark,
              .light {
                position: absolute;
                top: 2px;
                left: 2px;
                height: 22px;
                width: 22px;
                border-radius: $radius-rounded;
                background: black;
                display: flex;
                justify-content: center;
                align-items: center;
                transform: translateX(0) rotate(0);
                transition: all 0.3s ease;

                svg {
                  color: $white !important;
                  height: 14px !important;
                  width: 14px !important;
                  opacity: 1 !important;
                }
              }

              .light {
                background: $primary;
                border-color: $primary;
                opacity: 1;
                z-index: 1;
              }

              .dark {
                background: $accent;
                border-color: $accent;
                opacity: 0;
                z-index: 0;

                svg {
                  color: $white !important;
                }
              }
            }
          }

          .button {
            height: 44px;
            min-width: 110px;
          }
        }
      }
    }
  }
}

/* ==========================================================================
3. Navigation Dark mode
========================================================================== */

.is-dark {
  .landing-page-wrapper {
    .navbar {
      &:not(.is-docked) {
        background: lighten($landing-dark-1, 8%);
        border-color: lighten($landing-dark-1, 14%);
      }

      &.is-docked {
        .navbar-brand {
          .brand-icon {
            background: lighten($landing-dark-2, 8%);
            border-color: lighten($landing-dark-2, 18%);
          }
        }
      }

      &.is-solid {
        background: lighten($landing-dark-1, 8%) !important;
        border-color: lighten($landing-dark-1, 14%) !important;

        .navbar-brand {
          .brand-icon {
            border-color: transparent;
            background-color: transparent;
          }
        }

        .navbar-menu {
          &.is-active {
            background: lighten($landing-dark-1, 12%);
            border-color: lighten($landing-dark-1, 14%);
          }
        }
      }

      .navbar-burger {
        span {
          background: $smoke-white;
        }
      }

      .navbar-item {
        .nav-link {
          &:hover,
          &.is-active {
            color: $white !important;
          }

          &::before {
            background: $accent;
          }
        }

        .button {
          &.is-primary {
            background: $accent;
            border-color: $accent;

            &.is-raised:hover {
              box-shadow: $accent-box-shadow;
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
4. Hero
========================================================================== */

.landing-page-wrapper {
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  //Canvas
  #demo-canvas {
    position: absolute;
    bottom: 20%;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .hero {
    &.rounded-hero {
      position: relative;
      z-index: 10;

      &.is-active {
        .absolute-header {
          transform: translateY(0);

          .header-inner {
            .states {
              opacity: 1;
              transform: translateY(-50%) scale(1);
            }
          }
        }

        .hero-body {
          .hero-mockup {
            transform: translateY(0);
            // opacity: 1;
            pointer-events: all;
          }
        }
      }

      .hero-body {
        position: relative;
        z-index: 1;

        .switch-wrapper {
          margin: 80px auto 0 auto;
        }

        .title {
          color: $dark-text;

          span {
            color: $primary;
          }
        }

        .subtitle {
          color: $light-text;
          margin-bottom: 2rem;
        }

        .tag {
          position: relative;
          top: -2px;
          left: 2px;
          line-height: 2;
          font-weight: 500;
          max-height: 20px;
        }

        .hero-mockup {
          display: block;
          max-width: 740px;
          margin: 0 auto;
          transform: translateY(10px);
          // opacity: 0;
          border-radius: 12px;
          box-shadow: $light-box-shadow;
          pointer-events: none;
          transition: all 0.4s;
          transition-delay: 0.3s;
        }

        .buttons {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .is-hero-title {
    z-index: 2;

    h1,
    h2 {
      color: $white;
    }
  }

  .absolute-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 580px;
    background: darken($widget-grey, 4%);
    transform: translateY(-100%);
    transition: all 0.3s;

    .header-inner {
      position: relative;
      height: 100%;
      width: 100%;

      .cut-circle {
        display: block;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: auto;
      }
    }
  }
}

/* ==========================================================================
5. Hero Dark mode
========================================================================== */

.is-dark {
  .landing-page-wrapper {
    .hero {
      .absolute-header {
        background-color: $landing-dark-2;
      }

      .hero-body {
        .title {
          color: $smoke-white;

          span {
            color: $accent;
          }
        }

        .tag {
          background: $accent !important;
        }
      }
    }
  }
}

/* ==========================================================================
6. Stacks
========================================================================== */

.stacks {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 540px;
  margin: 0 auto;
  padding: 20px 0 20px 0;

  .stack {
    height: 54px;
    width: 54px;
    min-width: 54px;
    border-radius: $radius-rounded;
    background: $white;
    border: 1px solid $fade-grey;
    box-shadow: $light-box-shadow;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 6px;

    img {
      display: block;
      height: 40px;
      width: 40px;
      border-radius: $radius-rounded;
    }
  }
}

/* ==========================================================================
7. Boxed Features
========================================================================== */

.boxed-features {
  &.is-flat {
    .flex-card {
      border: none !important;
      background: none !important;

      .flex-cell {
        border: none !important;
      }
    }
  }

  .flex-card {
    @include vuero-l-card();

    padding: 30px;
    display: flex;
    flex-wrap: wrap;

    .flex-cell {
      width: 25%;
      border-right: 1px solid darken($fade-grey, 3%);
      text-align: center;
      padding: 24px 16px;

      &.is-bordered {
        border-bottom: 1px solid darken($fade-grey, 3%);
      }

      &.no-border-edge {
        border-right: none;
      }

      i {
        font-size: 2.2rem;
        color: $primary;
        margin-bottom: 6px;
      }

      img {
        display: block;
        width: 100%;
        max-width: 64px;
        margin: 0 auto 6px auto;
      }

      h3 {
        font-family: $font-alt;
        font-weight: 600;
        font-size: 0.95rem;
        color: $dark-text;
      }

      p {
        font-size: 0.95rem;
        color: $light-text;
        max-width: 200px;
        margin: 0 auto;
      }
    }
  }
}

.is-dark {
  .boxed-features {
    .flex-card {
      @include vuero-card--dark();
    }
  }
}

/* ==========================================================================
8. Boxed Features Dark mode
========================================================================== */

.is-dark {
  .landing-page-wrapper {
    .stacks {
      .stack {
        background: lighten($landing-dark-2, 8%);
        border-color: lighten($landing-dark-2, 18%);
      }
    }

    .boxed-features {
      .flex-card {
        background: darken($landing-dark-2, 2%);
        border-color: lighten($landing-dark-2, 2%);

        .flex-cell {
          border-color: lighten($landing-dark-2, 4%);

          i {
            color: $accent;
          }

          h3 {
            color: $dark-dark-text;
          }
        }
      }
    }
  }
}

/* ==========================================================================
9. Sections
========================================================================== */

.section {
  position: relative;

  &.section-focus {
    background: darken($widget-grey, 1%);
  }

  .section-title {
    padding: 40px 0;

    h2 {
      font-family: $font-alt;
      margin-bottom: 6px;
      font-weight: 300;
    }

    h4 {
      font-family: $font;
      color: $light-text;
      font-size: 1.4rem;
      font-weight: 300;
    }
  }

  .section-feature-description {
    font-size: 1.2rem;
  }

  .side-feature {
    h2 {
      font-family: $font;
      font-weight: 300;
    }
  }
}

/* ==========================================================================
10. Sections Dark mode
========================================================================== */

.is-dark {
  .landing-page-wrapper {
    .section {
      &.section-focus {
        background: lighten($landing-dark-1, 2%);
      }

      .section-title {
        h2 {
          color: $dark-dark-text;
        }
      }

      .side-feature {
        h2,
        h3 {
          color: $dark-dark-text;
        }
      }
    }
  }
}

/* ==========================================================================
11. CTA block
========================================================================== */

.cta-block {
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid darken($fade-grey, 4%);
  margin: 40px 0;

  &.no-border {
    padding-bottom: 2rem;
    border-bottom: none;
  }

  &.is-box {
    padding: 3rem 2rem;
    background: $white;
    border-radius: 8px;
    box-shadow: $light-box-shadow;
    border: 1px solid $fade-grey;
    justify-content: space-between;
  }

  .head-text {
    h3 {
      font-family: $font-alt;
      font-size: 1.8rem;
      color: $dark-text;
    }

    p {
      font-family: $font;
      font-size: 1.1rem;
      color: $light-text;
    }
  }

  .head-action {
    .buttons {
      .button {
        &.action-button {
          height: 36px;
          min-width: 140px;
        }

        &.chat-button {
          background: transparent;
          border: none;
          outline: none;
          box-shadow: none;
          color: $primary;
          font-weight: 500;
        }
      }
    }
  }
}

/* ==========================================================================
12. CTA block Dark mode
========================================================================== */

.is-dark {
  .landing-page-wrapper {
    .cta-block {
      border-color: lighten($landing-dark-2, 4%);

      .head-text {
        h3 {
          color: $dark-dark-text;
        }
      }

      .head-action {
        .buttons {
          .button {
            &.action-button {
              background: $accent;
              border-color: $accent;
            }

            &.chat-button {
              color: $accent;
              background: none !important;
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
13. Demos
========================================================================== */

.huro-demos {
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
        margin-left: 12px;
        line-height: 1.2;

        h3 {
          font-family: $font-alt;
          font-weight: 500;
          font-size: 1.3rem;
          color: $dark-text;
        }

        p {
          font-family: $font;
          font-size: 1.1rem;
          color: $light-text;
        }
      }
    }
  }
}

.vuero-demo-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid darken($fade-grey, 5%);
  min-height: 205px;

  &:hover {
    .circle-overlay {
      transform: scale(35);
    }

    .demo-title {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0 !important;
    }

    .demo-link {
      color: $white;
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0 !important;
    }
  }

  &::after {
    // @extend %loader;

    position: absolute !important;
    top: 40%;
    left: 42%;
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
    right: 10px;
    background: red;
    color: $white;
    font-family: $font;
    padding: 6px 16px;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 0.8rem;
    z-index: 3;
  }

  .circle-overlay {
    position: absolute;
    top: -60px;
    left: -60px;
    width: 60px;
    height: 60px;
    border-radius: $radius-rounded;
    background: $primary;
    transform: scale(1);
    transition: all 0.5s;
    z-index: 1;
  }

  .demo-info {
    position: absolute;
    margin: 0 auto;
    top: 26%;
    left: 0;
    right: 0;
    z-index: 2;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .demo-title {
    color: $white;
    font-family: $font;
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid lighten($primary, 20%);
    transform: translateY(20px);
    transition: all 0.3s;
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
    transition: all 0.3s;
    transition-delay: 0.2s;

    a {
      font-family: $font;
      color: $white;
      font-size: 1rem;
      margin-left: 8px;

      i {
        position: relative;
        top: 1px;
        opacity: 0;
        transform: translateX(0);
        transition: all 0.3s ease-out;
      }

      &:hover i {
        opacity: 1;
        transform: translateX(5px);
      }
    }
  }
}

.component-features {
  .media-flex {
    .left-icon {
      margin-right: 10px;

      i {
        color: $primary;
        font-size: 2.6rem;
      }
    }

    .flex-meta {
      h4 {
        font-family: $font-alt;
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 4px;
      }

      p {
        font-family: $font;
        line-height: 1.4;
      }
    }
  }
}

.component-box {
  display: block;
  text-align: center;
  background: $white;
  border: 1px solid darken($fade-grey, 3%);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 0;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $light-box-shadow;
    border-color: $primary;

    .component {
      img {
        filter: grayscale(0);
        opacity: 1;
      }
    }

    .component-title {
      color: $dark-text;
    }
  }

  .component {
    img {
      display: block;
      filter: grayscale(1);
      opacity: 0.6;
      max-height: 80px;
      transition: all 0.3s;
    }
  }

  .component-title {
    font-family: $font-alt;
    font-size: 1rem;
    padding-top: 6px;
    color: $light-text;
    transition: color 0.3s;
  }
}

/* ==========================================================================
14. Demos Dark mode
========================================================================== */

.is-dark {
  .landing-page-wrapper {
    .huro-demos {
      .demo-section {
        .demo-section-title {
          .title-meta {
            h3 {
              color: $dark-dark-text;
            }
          }
        }
      }

      .vuero-demo-wrapper {
        border-color: lighten($dark-sidebar, 12%);

        .circle-overlay {
          background: $accent;
        }

        .demo-title {
          border-color: lighten($accent, 10%);
        }
      }
    }

    .component-features {
      .media-flex {
        .left-icon {
          i {
            color: $accent;
          }
        }

        .flex-meta {
          h4 {
            color: $dark-dark-text;
          }
        }
      }
    }

    .button {
      &.is-huge {
        background: $accent;
        border-color: $accent;
      }
    }

    .vertical-tabs-wrapper {
      .tabs {
        ul {
          li {
            &.is-active {
              a {
                color: $accent;
                border-color: $accent;
              }
            }

            a {
              border-color: lighten($landing-dark-1, 18%);
            }
          }
        }
      }
    }

    .component-box {
      background: darken($landing-dark-2, 2%);
      border-color: lighten($landing-dark-2, 2%);

      &:hover {
        border-color: $accent;

        .component-title {
          color: $accent;
        }
      }
    }
  }
}

/* ==========================================================================
15. footer
========================================================================== */

.huro-footer {
  padding-bottom: 0 !important;
  padding-top: 4rem !important;
  background: $light-white;

  .footer-head {
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid darken($fade-grey, 4%);

    .head-text {
      h3 {
        font-family: $font;
        font-size: 1.8rem;
        color: $dark-text;
      }

      p {
        font-size: 1.1rem;
        color: $light-text;
      }
    }

    .head-action {
      .buttons {
        .button {
          &.action-button {
            height: 36px;
            min-width: 140px;
          }

          &.chat-button {
            background: transparent;
            border: none;
            outline: none;
            box-shadow: none;
            color: $primary;
            font-weight: 500;
          }
        }
      }
    }
  }

  .footer-body {
    padding-top: 3rem;

    .footer-column {
      padding-top: 20px;

      .column-header {
        font-family: $font-alt;
        text-transform: uppercase;
        color: $dark-text;
        font-size: 1rem;
        font-weight: 700;
        margin: 10px 0;
      }

      .column-item {
        padding-bottom: 10px;

        a {
          font-family: $font;
          color: $light-text;

          &:hover {
            color: $primary;
          }
        }
      }
    }

    .social-links {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        color: $light-text;
        margin: 0 5px;

        &:hover {
          color: $primary;
        }
      }
    }

    .footer-description {
      color: $light-text;
    }

    .moto {
      color: $light-text;
    }

    .small-footer-logo {
      height: 36px;
    }
  }

  .footer-copyright {
    font-family: $font;
    color: $light-text;
    padding: 4rem 0 2rem 0;

    a {
      color: $light-text;

      &:hover {
        color: $primary;
      }
    }
  }
}

/* ==========================================================================
16. Footer Dark mode
========================================================================== */

.is-dark {
  .landing-page-wrapper {
    .huro-footer {
      background: lighten($landing-dark-1, 8%);

      .footer-head {
        border-color: lighten($landing-dark-1, 18%);

        .head-text {
          h3 {
            color: $dark-dark-text;
          }

          p {
            font-size: 1.1rem;
            color: $light-text;
          }
        }

        .head-action {
          .buttons {
            .button {
              &.action-button {
                background: $accent;
                border-color: $accent;
              }

              &.chat-button {
                color: $accent;
                background: none !important;
              }
            }
          }
        }
      }

      .footer-body {
        .footer-column {
          .column-header {
            color: $dark-dark-text;
          }

          .column-item {
            a:hover {
              color: $accent;
            }
          }
        }

        .social-links {
          a:hover {
            color: $accent;
          }
        }
      }

      .footer-copyright {
        a {
          &:hover {
            color: $accent;
          }
        }
      }
    }
  }
}

/* ==========================================================================
17. Night Switch
========================================================================== */

.switch-wrapper {
  position: relative;
  width: 130px;

  .night-toggle {
    display: block;
    text-align: center;
    user-select: none;
    transform: scale(0.6);
  }

  .night-toggle--checkbox {
    display: none;
  }

  .night-toggle--btn {
    display: block;
    margin: 0 auto;
    font-size: 1.4em;
    transition: all 350ms ease-in;

    &:hover {
      cursor: pointer;
    }
  }

  .night-toggle--btn,
  .night-toggle--checkbox,
  .night-toggle--feature {
    &,
    &::before,
    &::after {
      transition: all 250ms ease-in;
    }

    &::before,
    &::after {
      content: '';
      display: block;
    }
  }

  $toggleHeight: 70px;
  $toggleWidth: 125px;
  $borderWidth: 5px;
  $toggleBtnRadius: $toggleHeight - 14px;

  $bgColor--night: #3c4145;
  $borderColor--night: #1c1c1c;
  $toggleBtn-bgColor--night: #fff;
  $toggleBtn-borderColor--night: #e3e3c7;

  $bgColor--day: lighten(#797bf2, 18%);
  $borderColor--day: lighten(#797bf2, 14%);
  $toggleBtn-bgColor--day: #ffdf6d;
  $toggleBtn-borderColor--day: #e1c348;

  $cloud-borderColor: #d3d3d3;
  $cloud-bgColor: #fff;

  .night-toggle--daynight,
  .night-toggle--like {
    .night-toggle--btn {
      position: relative;
      height: $toggleHeight;
      width: $toggleWidth;
      border-radius: $toggleHeight;

      //toggle button
      &::before {
        position: absolute;
        top: 2px;
        left: 4px;
        width: $toggleBtnRadius;
        height: $toggleBtnRadius;
        border-radius: $radius-rounded;
      }
    }
  }

  .night-toggle--daynight {
    .night-toggle--btn {
      border: $borderWidth solid $borderColor--night;
      background-color: $bgColor--night;

      //toggle button
      &::before {
        background-color: $toggleBtn-bgColor--night;
        border: $borderWidth solid $toggleBtn-borderColor--night;
      }

      &::after {
        position: absolute;
        top: 62%;
        left: $toggleWidth - $toggleBtnRadius - $borderWidth * 2 - 20px;
        z-index: 10;
        width: $toggleBtnRadius / 5;
        height: $toggleBtnRadius / 5;
        opacity: 0;
        background-color: $cloud-bgColor;
        border-radius: $radius-rounded;

        //crazy ass box-shadow to make the cloud
        box-shadow: $cloud-bgColor 0 0, $cloud-bgColor 3px 0,
          $cloud-bgColor 6px 0, $cloud-bgColor 9px 0, $cloud-bgColor 11px 0,
          $cloud-bgColor 14px 0, $cloud-bgColor 16px 0,
          $cloud-bgColor 21px -1px 0 1px, $cloud-bgColor 16px -7px 0 -2px,
          $cloud-bgColor 7px -7px 0 1px, $cloud-borderColor 0 0 0 4px,
          $cloud-borderColor 6px 0 0 4px, $cloud-borderColor 11px 0 0 4px,
          $cloud-borderColor 16px 0 0 4px, $cloud-borderColor 21px -1px 0 5px,
          $cloud-borderColor 16px -7px 0 1px, $cloud-borderColor 7px -7px 0 5px;
        transition: opacity 100ms ease-in;
      }
    }

    @keyframes starry_star {
      50% {
        background-color: rgba(255, 255, 255, 0.1);
        box-shadow: #fff 30px -3px 0 0, #fff 12px 10px 0 -1px,
          rgba(255, 255, 255, 0.1) 38px 18px 0 1px, #fff 32px 34px 0 0,
          rgba(255, 255, 255, 0.1) 20px 24px 0 -1.5px, #fff 5px 38px 0 1px;
      }
    }

    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }

      50% {
        opacity: 100;
        transform: scale(1.1);
      }

      55% {
        transform: scale(1.1);
      }

      75% {
        transform: scale(0.9);
      }

      100% {
        opacity: 100;
        transform: scale(1);
      }
    }

    //stars
    .night-toggle--feature {
      display: block;
      position: absolute;
      top: 9px;
      left: 52.5%;
      z-index: 20;
      width: 4px;
      height: 4px;
      border-radius: $radius-rounded;
      background-color: #fff;
      box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 0,
        rgba(255, 255, 255, 0.1) 12px 10px 0 -1px, #fff 38px 18px 0 1px,
        rgba(255, 255, 255, 0.1) 32px 34px 0 0, #fff 20px 24px 0 -1.5px,
        rgba(255, 255, 255, 0.1) 5px 38px 0 1px;
      animation: starry_star 5s ease-in-out infinite;

      &::before {
        position: absolute;
        top: -2px;
        left: -25px;
        width: 18px;
        height: 18px;
        background-color: $toggleBtn-bgColor--night;
        border-radius: $radius-rounded;
        border: 5px solid $toggleBtn-borderColor--night;
        box-shadow: $toggleBtn-borderColor--night -28px 0 0 -3px,
          $toggleBtn-borderColor--night -8px 24px 0 -2px;
        transform-origin: -6px 130%;
      }
    }

    //what happens once checkbox is checked
    .night-toggle--checkbox:checked {
      & + .night-toggle--btn {
        background-color: $bgColor--day;
        border: $borderWidth solid $borderColor--day;

        &::before {
          left: $toggleWidth - $toggleBtnRadius - $borderWidth * 2 - 4px;
          background-color: $toggleBtn-bgColor--day;
          border: $borderWidth solid $toggleBtn-borderColor--day;
        }

        &::after {
          opacity: 100;
          animation-name: bounceIn;
          animation-duration: 0.6s;
          animation-delay: 0.1s;
          animation-fill-mode: backwards;
          animation-timing-function: ease-in-out;
        }

        > .night-toggle--feature {
          opacity: 0;
          box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 -4px,
            rgba(255, 255, 255, 0.1) 12px 10px 0 -5px, #fff 38px 18px 0 -3px,
            rgba(255, 255, 255, 0.1) 32px 34px 0 -4px, #fff 20px 24px 0 -5.5px,
            rgba(255, 255, 255, 0.1) 5px 38px 0 -3px;
          animation: none;

          &::before {
            left: 25px;
            transform: rotate(70deg);
          }
        }
      }
    }
  }
}

/* ==========================================================================
18. CTA Section
========================================================================== */

.cta-wrapper {
  .cta-title {
    text-align: center;

    h3 {
      font-family: $font-alt;
      font-weight: 300;
      font-size: 1.5rem;
      color: $light-text;
      margin-bottom: 20px;
    }

    .custom-button {
      display: flex;
      align-items: center;
      margin: 10px auto;
      max-width: 200px;
      font-family: $font;
      border: 2px solid #d3f4ed;
      border-radius: 100px;
      background: #d3f4ed;
      box-shadow: $light-box-shadow;
      transition: all 0.3s;

      img {
        display: block;
        height: 50px;
        width: 50px;
      }

      span {
        display: block;
        font-family: $font;
        font-weight: 600;
        font-size: 1rem;
        color: darken(#8edfcf, 18%);
        margin-left: 22px;
        transition: color 0.3s;
      }
    }
  }
}

/* ==========================================================================
19. Media Queries
========================================================================== */

@media (max-width: 767px) {
  .landing-page-wrapper {
    .navbar {
      display: flex;
      align-items: center;
      width: calc(100% - 32px);
      margin: 0 16px;

      &.is-docked {
        height: 80px;

        .navbar-menu {
          .navbar-item {
            &.is-theme-toggle {
              display: none !important;
            }
          }
        }
      }

      &.is-solid {
        .navbar-menu {
          top: 73px !important;
        }
        .navbar-menu {
          .navbar-item {
            &.is-theme-toggle {
              display: block;
            }
          }
        }
      }

      &.is-solid {
        top: 10px;
        box-shadow: $light-box-shadow !important;

        .navbar-brand {
          .brand-icon {
            border-color: transparent;
          }
        }

        .navbar-menu {
          box-shadow: $light-box-shadow !important;
        }
      }

      .navbar-brand {
        width: 100%;

        .navbar-burger {
          border-radius: $radius-rounded;
          margin-right: 12px;
        }
      }

      .navbar-menu {
        width: calc(100% - 32px);
        position: fixed;
        top: 78px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 0 0 10px 10px;
        padding: 30px;
        text-align: center;
        border: 1px solid $fade-grey;
        box-shadow: none;

        .navbar-item {
          &.is-theme-toggle {
            .theme-toggle {
              margin: 0 auto;
            }
          }

          .button {
            width: 100%;
          }
        }
      }
    }

    .rounded-hero {
      min-height: 75vh !important;
      max-height: 75vh;

      .absolute-header {
        height: 500px;
      }

      .hero-body {
        .hero-mockup {
          max-width: 340px !important;
        }

        h1 {
          font-size: 3.2rem !important;
        }
      }
    }

    .boxed-features {
      .flex-card {
        .flex-cell {
          width: 100%;
          border-right: none;
          border-bottom: 1px solid darken($fade-grey, 3%);

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }

    .cta-block {
      flex-direction: column;
      text-align: center;

      .head-text {
        padding-bottom: 20px;
      }
    }
  }

  .vuero-demo-wrapper {
    min-height: 184px;
  }

  .side-feature {
    margin-bottom: 60px !important;
  }

  .huro-footer {
    .footer-head {
      flex-direction: column;
      text-align: center;

      .head-text {
        padding-bottom: 20px;
      }
    }

    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .landing-page-wrapper {
    .navbar {
      display: flex;
      align-items: center;
      width: calc(100% - 32px);
      margin: 0 16px;

      &.is-docked {
        height: 80px;

        .navbar-menu {
          .navbar-item {
            &.is-theme-toggle {
              display: none !important;
            }
          }
        }
      }

      &:not(.is-docked) {
        &.is-solid {
          .navbar-menu {
            top: 73px !important;
          }
        }

        .navbar-menu {
          .navbar-item {
            &.is-theme-toggle {
              display: block;
            }
          }
        }
      }

      &.is-solid {
        top: 10px;
        box-shadow: $light-box-shadow !important;

        .navbar-brand {
          .brand-icon {
            border-color: transparent;
          }
        }

        .navbar-menu {
          box-shadow: $light-box-shadow !important;
        }
      }

      .navbar-brand {
        width: 100%;

        .navbar-burger {
          height: 40px;
          width: 40px;
          border-radius: $radius-rounded;
          margin-right: 12px;
        }
      }

      .navbar-menu {
        width: calc(100% - 32px);
        position: fixed;
        top: 78px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 0 0 10px 10px;
        padding: 30px;
        text-align: center;
        border: 1px solid $fade-grey;
        box-shadow: none;

        .navbar-item {
          &.is-theme-toggle {
            .theme-toggle {
              margin: 0 auto;
            }
          }

          .button {
            width: 100%;
          }
        }
      }
    }

    .main-hero {
      .is-hero-title {
        text-align: center !important;

        .buttons {
          justify-content: center;
        }
      }
    }

    .rounded-hero {
      min-height: 75vh !important;

      .hero-body {
        .hero-mockup {
          max-width: 610px !important;
        }
      }
    }

    .huro-demos {
      .demo-section {
        .columns {
          display: flex;

          .column.is-4 {
            min-width: 50% !important;
          }
        }
      }
    }

    .side-feature {
      display: flex;
    }

    .component-features {
      .media-flex {
        flex-direction: column;
        text-align: center;

        .left-icon,
        .flex-meta {
          margin: 0;
        }

        .left-icon {
          margin-bottom: 10px;
        }
      }
    }

    .huro-components {
      .tab-content {
        .columns {
          display: flex;

          .column.is-3 {
            min-width: 33.3% !important;
          }
        }
      }
    }
  }

  .huro-footer {
    .footer-head,
    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }

    .footer-description {
      max-width: 400px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .landing-page-wrapper {
    .navbar {
      width: calc(100% - 40px);
      margin: 0 20px;
    }
  }

  .vuero-demo-wrapper {
    min-height: 174px;
  }

  .huro-footer {
    .footer-head,
    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
