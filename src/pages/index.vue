<script setup lang="ts">
import { useHead } from '@vueuse/head'

import packageJson from '../../package.json'

type TabId = 'elements' | 'components' | 'forms' | 'plugins'
const activeTab = ref<TabId>('elements')

useHead({
  title: 'Vuero - A complete Vue 3 design system',
})
</script>

<template>
  <MinimalLayout theme="light">
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div id="vuero-landing" class="hero is-fullheight is-active">
        <!-- Navbar partial -->
        <LandingNavigation />
        <div class="grids gridlines"></div>
        <div class="hero-body has-text-centered">
          <div class="container">
            <h1 class="title is-1 is-bold dark-white is-leading">
              Build fast & beautiful web apps with <span>Vuero</span>
            </h1>
            <h3 class="subtitle is-4">
              Premium Vue Dashboard & Webapp UI Kit
              <span class="tag is-primary is-rounded">{{ packageJson.version }}</span>
            </h3>

            <div class="buttons mb-2">
              <VButton to="https://go.cssninja.io/buy-vuero" color="primary" rounded
                >Buy Vuero Today</VButton
              >
            </div>

            <div class="trusted-by mb-4">
              <span>Trusted by <span>2000+ customers</span></span>
              <div class="rating">
                <i class="iconify" data-icon="uiw:star-on"></i>
                <i class="iconify" data-icon="uiw:star-on"></i>
                <i class="iconify" data-icon="uiw:star-on"></i>
                <i class="iconify" data-icon="uiw:star-on"></i>
                <i class="iconify" data-icon="uiw:star-on"></i>
              </div>
            </div>

            <div class="hero-mockup-wrap">
              <div class="hero-mockup">
                <img
                  class="light-image-block-l"
                  src="/@src/assets/illustrations/landing/app-1.png"
                  alt=""
                />
                <img
                  class="dark-image-block-l"
                  src="/@src/assets/illustrations/landing/app-1-dark.png"
                  alt=""
                />
              </div>
              <div class="hero-mockup-gradient"></div>
            </div>
          </div>
        </div>

        <canvas id="demo-canvas"></canvas>
      </div>

      <!--Stacks Section-->
      <div id="stacks-section" class="section">
        <div class="container">
          <!--Stacks-->
          <div class="stacks">
            <div>
              <Tippy class="has-help-cursor" interactive placement="top">
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
              </Tippy>
            </div>

            <div>
              <Tippy class="has-help-cursor" interactive placement="top">
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
              </Tippy>
            </div>

            <div>
              <Tippy class="has-help-cursor" interactive placement="top">
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
              </Tippy>
            </div>

            <div>
              <Tippy class="has-help-cursor" interactive placement="top">
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
              </Tippy>
            </div>

            <div>
              <Tippy class="has-help-cursor" interactive placement="top">
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
              </Tippy>
            </div>
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
                <i aria-hidden="true" class="lnil lnil-toolbox"></i>
                <h3>500+ Vue Components</h3>
                <p>An incredible set of building blocks with dark mode support.</p>
              </div>
              <div class="flex-cell is-bordered">
                <i aria-hidden="true" class="lnil lnil-display-alt"></i>
                <h3>220+ Demos</h3>
                <p>Vuero ships with a huge number of demos to kickstart your project.</p>
              </div>
              <div class="flex-cell is-bordered">
                <i aria-hidden="true" class="lnil lnil-moon"></i>
                <h3>Native Dark Mode</h3>
                <p>Every single piece of UI is natively dark mode ready.</p>
              </div>
              <div class="flex-cell is-bordered no-border-edge">
                <i aria-hidden="true" class="lnil lnil-rocket"></i>
                <h3>Active Support</h3>
                <p>Our support helps you solve any issues you have</p>
              </div>
              <div class="flex-cell">
                <i aria-hidden="true" class="lnil lnil-code"></i>
                <h3>Clean Code</h3>
                <p>Vuero's codebase is huge, but structured and easy to understand</p>
              </div>
              <div class="flex-cell">
                <i aria-hidden="true" class="lnil lnil-plug"></i>
                <h3>Premium Icons</h3>
                <p>Vuero ships with the premium Line Icons set ($30 value).</p>
              </div>
              <div class="flex-cell">
                <i class="lnil lnil-switch" aria-hidden="true"></i>
                <h3>RTL Support</h3>
                <p>Vuero supports RTL layouts. Configure it in less than a minute.</p>
              </div>
              <div class="flex-cell no-border-edge">
                <i aria-hidden="true" class="lnil lnil-file-name"></i>
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
                  href="http://go.cssninja.io/buy-vuero"
                  class="button v-button is-primary is-rounded is-elevated action-button"
                >
                  Buy Now
                </a>
                <a
                  target="_blank"
                  href="https://go.cssninja.io/discord"
                  class="button chat-button"
                >
                  Chat with us
                </a>
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
                <div class="icon-holder">
                  <i class="iconify" data-icon="mdi:vuejs"></i>
                </div>
                <h3>Vue 3</h3>
                <p>
                  Vue 3 and its powerful composition API makes your experience pleasant.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify" data-icon="bxl:typescript"></i>
                </div>
                <h3>Typescript</h3>
                <p>Typescript makes things much more simpler but remains optional.</p>
              </div>
              <div class="flex-cell is-bordered">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="simple-icons:vite"></i>
                </div>
                <h3>Vite JS</h3>
                <p>
                  Vite 4 is blazing fast, does HOT reloading and parses all your
                  components.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="akar-icons:vscode-fill"></i>
                </div>
                <h3>VS Code Integration</h3>
                <p>
                  Vuero is fully integrated with VS Code to help you produce quality
                  checked code.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="file-icons:eslint"></i>
                </div>
                <h3>ES Lint</h3>
                <p>
                  ES Lint watches your javascript code and makes sure it matches the best
                  standards.
                </p>
              </div>
              <div class="flex-cell is-bordered">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="file-icons:prettier"></i>
                </div>
                <h3>Prettier</h3>
                <p>
                  Prettier tidies your code and makes it look much more cleaner and easier
                  to read.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="file-icons:stylelint"></i>
                </div>
                <h3>Stylelint</h3>
                <p>
                  Stylelint looks for poorly formatted styles and fixes everything for
                  you.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="simple-icons:iconify"></i>
                </div>
                <h3>Iconify</h3>
                <p>
                  Iconify displays icons inside your code editor so you always know what
                  you're doing.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="simple-icons:cypress"></i>
                </div>
                <h3>Cypress</h3>
                <p>
                  Cypress handles end to end testing to make sure everything works as
                  expected.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="file-icons:pnpm"></i>
                </div>
                <h3>Pnpm + Yarn</h3>
                <p>
                  Vuero works very well with Pnpm or Yarn for efficient dependency
                  management.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="simple-icons:docker"></i>
                </div>
                <h3>Docker</h3>
                <p>
                  Vuero ships with a Docker file to make your test deployments faster and
                  easier.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="mdi:robot"></i>
                </div>
                <h3>Robot Friendly</h3>
                <p>
                  Fully featured with structured data. Help your site display in richer
                  features in search results.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="ic:twotone-check-circle"></i>
                </div>
                <h3>Props Validation</h3>
                <p>
                  Vuero base components ship with props validation to prevent unexpected
                  errors.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="solar:folder-error-bold"></i>
                </div>
                <h3>Error Handling</h3>
                <p>
                  While developping Vuero, we focused on providing an up to standards
                  error handling.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i
                    class="iconify smaller"
                    data-icon="solar:sidebar-minimalistic-bold"
                  ></i>
                </div>
                <h3>Project Structure</h3>
                <p>
                  A clean and organized project structure lets you find any file or
                  content quickly.
                </p>
              </div>
              <div class="flex-cell">
                <div class="icon-holder">
                  <i class="iconify smaller" data-icon="ic:round-menu-book"></i>
                </div>
                <h3>Component Guide</h3>
                <p>
                  A full component / plugin documentation with a lot of code examples
                  lives inside Vuero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="vuero-demos" class="section">
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
            <div class="column is-6 has-text-centered gridlines">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-1.webp"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-1-dark.webp"
                alt=""
              />
            </div>
            <div class="column is-5 is-offset-1">
              <h2 class="title m-b-10 is-centered-tablet-portrait">Incredible UI</h2>
              <p class="section-feature-description is-centered-tablet-portrait">
                Vuero's UI has been carefully thought and designed, and is simply one of
                the best you'll find on the market. It's visual power and its modularity
                will let you build great apps seamlessly.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div class="column is-6 has-text-centered h-hidden-desktop h-hidden-tablet-p">
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
              <h2 class="title m-b-10 is-centered-tablet-portrait">Playful Vectors</h2>
              <p class="section-feature-description is-centered-tablet-portrait">
                Vuero ships with a lot of svg illustrations representing various elements
                that can be used in a website, following very high quality standards.
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
            <div class="column is-6 has-text-centered gridlines">
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
            <div class="column is-5 is-offset-1">
              <h2 class="title m-b-10 is-centered-tablet-portrait">Handcrafted UI</h2>
              <p class="section-feature-description is-centered-tablet-portrait">
                Vuero ships with it's own component library based on the Bulma.io CSS
                framework. Each component has been carefully handcrafted and natively
                supports dark mode.
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
                  href="https://docs.cssninja.io/vuero"
                  class="button v-button is-primary is-rounded is-elevated action-button"
                >
                  Read the Docs
                </a>
                <a
                  target="_blank"
                  href="https://go.cssninja.io/discord"
                  class="button chat-button is-secondary"
                >
                  <span>Join us on Discord</span>
                  <i class="iconify ml-1" data-icon="feather:external-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="vuero-components" class="section">
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
                  <i aria-hidden="true" class="lnil lnil-construction"></i>
                </div>
                <div class="flex-meta">
                  <h4>Modular</h4>
                  <p>
                    Vuero uses a modular CSS structure leveraging the power of Sass. Each
                    component family has it's own files and encapsulated styles.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <!-- Side icon box -->
              <div class="media-flex">
                <div class="left-icon">
                  <i aria-hidden="true" class="lnil lnil-code"></i>
                </div>
                <div class="flex-meta">
                  <h4>Code Blocks</h4>
                  <p>
                    A lot of code examples are provided out of the box with syntax
                    highlighting. Building your app layout is a simple as copying and
                    pasting.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <!-- Side icon box -->
              <div class="media-flex">
                <div class="left-icon">
                  <i aria-hidden="true" class="lnil lnil-color-palette"></i>
                </div>
                <div class="flex-meta">
                  <h4>Easy Theming</h4>
                  <p>
                    Vuero's components provide easy to use class based color variations
                    and modifiers to help you write less CSS. Theming is also very easy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--CTA-->
          <p class="p-t-40 p-b-40 has-text-centered">
            <a
              href="http://go.cssninja.io/buy-vuero"
              class="button v-button is-rounded is-primary is-elevated is-bold is-huge"
            >
              Buy Now
            </a>
          </p>

          <!--Components-->
          <div class="vuero-components p-t-40 p-b-60">
            <div class="vertical-tabs-wrapper">
              <div class="tabs">
                <ul>
                  <li :class="[activeTab === 'elements' && 'is-active']">
                    <a
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'elements'"
                      @click="activeTab = 'elements'"
                    >
                      Elements
                    </a>
                  </li>
                  <li :class="[activeTab === 'components' && 'is-active']">
                    <a
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'components'"
                      @click="activeTab = 'components'"
                    >
                      Components
                    </a>
                  </li>
                  <li :class="[activeTab === 'forms' && 'is-active']">
                    <a
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'forms'"
                      @click="activeTab = 'forms'"
                    >
                      Forms
                    </a>
                  </li>
                  <li :class="[activeTab === 'plugins' && 'is-active']">
                    <a
                      tabindex="0"
                      role="button"
                      @keydown.space.prevent="activeTab = 'plugins'"
                      @click="activeTab = 'plugins'"
                    >
                      Plugins
                    </a>
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
                <h2 class="title m-b-10 is-centered-tablet-portrait">Professional</h2>
                <p class="section-feature-description is-centered-tablet-portrait">
                  Vuero is a professional product to build professional applications.
                  You'll find everything you need to build a project that is up to the
                  highest standards of web development.
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
                <h2 class="title m-b-10 is-centered-tablet-portrait">Fast Development</h2>
                <p class="section-feature-description is-centered-tablet-portrait">
                  Vuero ships with a Vitejs development server that will assist you when
                  customizing the template. It handles .vue files compilation as well as
                  SCSS and Typescript code. The page is refreshed each time you hit the
                  save trigger in your favorite editor.
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
                <p class="section-feature-description is-centered-tablet-portrait">
                  Vuero's documentation will be a precious ally, as the template has a
                  large codebase, and a lot of files. Read carefully the docs, all you
                  need to know for an optimal development experience is there, even if you
                  still are a beginner.
                </p>
              </div>
            </div>
          </div>

          <div class="cta-wrapper">
            <div class="cta-title">
              <h3>Exclusively on Envato Market</h3>
              <a href="http://go.cssninja.io/buy-vuero" class="custom-button">
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
        <a href="#" aria-label="back to top">
          <i aria-hidden="true" class="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/_demo/landing';
</style>
