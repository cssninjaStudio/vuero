<script setup lang="ts">
import packageJson from '../../package.json'
import Layout from '/@src/layouts/landing.vue'

const activeTab = ref<'components' | 'forms' | 'plugins'>('components')

useHead({
  title: 'Vuero - A complete Vue 3 design system',
})
</script>

<template>
  <Layout>
    <div class="hero is-fullheight is-active">
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
            <VButton
              href="https://go.cssninja.io/buy-vuero"
              color="primary"
              rounded
            >
              Buy Vuero Today
            </VButton>
          </div>

          <div class="trusted-by mb-4">
            <span>Trusted by <span>2000+ customers</span></span>
            <div class="rating">
              <VIcon icon="uiw:star-on" />
              <VIcon icon="uiw:star-on" />
              <VIcon icon="uiw:star-on" />
              <VIcon icon="uiw:star-on" />
              <VIcon icon="uiw:star-on" />
            </div>
          </div>

          <div class="hero-mockup-wrap">
            <div class="hero-mockup">
              <img
                class="light-image-block"
                src="/images/illustrations/landing/app-1.webp"
                alt=""
              >
              <img
                class="dark-image-block"
                src="/images/illustrations/landing/app-1-dark.webp"
                alt=""
              >
            </div>
            <div class="hero-mockup-gradient" />
          </div>
        </div>
      </div>
    </div>

    <!-- Stacks Section -->
    <div
      id="stacks-section"
      class="section"
    >
      <div class="container">
        <!-- Stacks -->
        <div class="stacks">
          <div>
            <Tippy
              class="has-help-cursor"
              interactive
              placement="top"
            >
              <div class="stack">
                <img
                  src="/images/icons/stacks/vuejs.svg"
                  alt=""
                >
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
            <Tippy
              class="has-help-cursor"
              interactive
              placement="top"
            >
              <div class="stack">
                <img
                  src="/images/icons/stacks/vite.svg"
                  alt=""
                >
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
            <Tippy
              class="has-help-cursor"
              interactive
              placement="top"
            >
              <div class="stack">
                <img
                  src="/images/icons/stacks/bulma.svg"
                  alt=""
                >
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
            <Tippy
              class="has-help-cursor"
              interactive
              placement="top"
            >
              <div class="stack">
                <img
                  src="/images/icons/stacks/sass.svg"
                  alt=""
                >
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
            <Tippy
              class="has-help-cursor"
              interactive
              placement="top"
            >
              <div class="stack">
                <img
                  src="/images/icons/stacks/typescript.svg"
                  alt=""
                >
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

        <!-- Title -->
        <div class="section-title has-text-centered">
          <h2 class="title is-2">
            Amazing Features
          </h2>
          <h4>All you need to build your project is there.</h4>
        </div>

        <!-- Boxed Features -->
        <div class="boxed-features">
          <div class="flex-card light-bordered hover-inset">
            <div class="flex-cell is-bordered">
              <i
                aria-hidden="true"
                class="lnil lnil-toolbox"
              />
              <h3>500+ Vue Components</h3>
              <p>An incredible set of building blocks with dark mode support.</p>
            </div>
            <div class="flex-cell is-bordered">
              <i
                aria-hidden="true"
                class="lnil lnil-display-alt"
              />
              <h3>220+ Demos</h3>
              <p>Vuero ships with a huge number of demos to kickstart your project.</p>
            </div>
            <div class="flex-cell is-bordered">
              <i
                aria-hidden="true"
                class="lnil lnil-moon"
              />
              <h3>Native Dark Mode</h3>
              <p>Every single piece of UI is natively dark mode ready.</p>
            </div>
            <div class="flex-cell is-bordered no-border-edge">
              <i
                aria-hidden="true"
                class="lnil lnil-rocket"
              />
              <h3>Active Support</h3>
              <p>Our support helps you solve any issues you have</p>
            </div>
            <div class="flex-cell">
              <i
                aria-hidden="true"
                class="lnil lnil-code"
              />
              <h3>Clean Code</h3>
              <p>Vuero's codebase is huge, but structured and easy to understand</p>
            </div>
            <div class="flex-cell">
              <i
                aria-hidden="true"
                class="lnil lnil-plug"
              />
              <h3>Premium Icons</h3>
              <p>Vuero ships with the premium Line Icons set ($30 value).</p>
            </div>
            <div class="flex-cell">
              <i
                class="lnil lnil-switch"
                aria-hidden="true"
              />
              <h3>RTL Support</h3>
              <p>Vuero supports RTL layouts. Configure it in less than a minute.</p>
            </div>
            <div class="flex-cell no-border-edge">
              <i
                aria-hidden="true"
                class="lnil lnil-file-name"
              />
              <h3>Extensive Docs</h3>
              <p>A nice documentation to help you get started fast</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
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

        <!-- Title -->
        <div class="section-title has-text-centered">
          <h2 class="title is-2">
            Developer Experience
          </h2>
          <h4>A set of professional tools to build professional apps.</h4>
        </div>

        <!-- Boxed Features -->
        <div class="boxed-features is-flat pb-6">
          <div class="flex-card light-bordered hover-inset">
            <div class="flex-cell is-bordered">
              <div class="icon-holder">
                <VIcon
                  icon="mdi:vuejs"
                />
              </div>
              <h3>Vue 3</h3>
              <p>
                Vue 3 and its powerful composition API makes your experience pleasant.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  icon="bxl:typescript"
                />
              </div>
              <h3>Typescript</h3>
              <p>Typescript makes things much more simpler but remains optional.</p>
            </div>
            <div class="flex-cell is-bordered">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="simple-icons:vite"
                />
              </div>
              <h3>Vite JS</h3>
              <p>
                Vite 4 is blazing fast, does HOT reloading and parses all your
                components.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="akar-icons:vscode-fill"
                />
              </div>
              <h3>VS Code Integration</h3>
              <p>
                Vuero is fully integrated with VS Code to help you produce quality
                checked code.
              </p>
            </div>
            <div class="flex-cell is-bordered">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="file-icons:eslint"
                />
              </div>
              <h3>ES Lint</h3>
              <p>
                ES Lint watches your javascript code and makes sure it matches the best
                standards.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="file-icons:stylelint"
                />
              </div>
              <h3>Stylelint</h3>
              <p>
                Stylelint looks for poorly formatted styles and fixes everything for
                you.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="simple-icons:iconify"
                />
              </div>
              <h3>Iconify</h3>
              <p>
                Iconify displays icons inside your code editor so you always know what
                you're doing.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="simple-icons:bun"
                />
              </div>
              <h3>Bun</h3>
              <p>
                Support Bun as alternative to Nodejs for a faster and more efficient
                development.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="simple-icons:docker"
                />
              </div>
              <h3>Docker</h3>
              <p>
                Vuero ships with a Docker file to make your test deployments faster and
                easier.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="ic:twotone-check-circle"
                />
              </div>
              <h3>Props Validation</h3>
              <p>
                Vuero base components ship with props validation to prevent unexpected
                errors.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="solar:sidebar-minimalistic-bold"
                />
              </div>
              <h3>Project Structure</h3>
              <p>
                A clean and organized project structure lets you find any file or
                content quickly.
              </p>
            </div>
            <div class="flex-cell">
              <div class="icon-holder">
                <VIcon
                  class="smaller"
                  icon="ic:round-menu-book"
                />
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

    <div
      id="vuero-demos"
      class="section"
    >
      <div class="container">
        <!-- Title -->
        <div class="section-title has-text-centered">
          <h2 class="title is-2">
            Outstanding Demos
          </h2>
          <h4>Check out a wide variety of demo pages.</h4>
        </div>

        <!-- Demos partial -->
        <LandingDemos />
      </div>
    </div>

    <!-- Side Features Section -->
    <MarketingSideFeatures
      title="Top Tier Product"
      subtitle="Vuero has been carefully handcrafted."
      :features="[
        {
          title: 'Incredible UI',
          content: `Vuero's UI has been carefully thought and designed, and is simply one of the best you'll find on the market. It's visual power and its modularity will let you build great apps seamlessly.`,
          image: '/images/illustrations/landing/feature-1.webp',
          darkImage: '/images/illustrations/landing/feature-1-dark.webp',
        },
        {
          title: 'Playful Vectors',
          content: `Vuero ships with a lot of svg illustrations representing various elements that can be used in a website, following very high quality standards.`,
          image: '/images/illustrations/landing/feature-2.svg',
          darkImage: '/images/illustrations/landing/feature-2-dark.svg',
        },
        {
          title: 'Handcrafted UI',
          content: `Vuero ships with it's own component library based on the Bulma.io CSS framework. Each component has been carefully handcrafted and natively supports dark mode.`,
          image: '/images/illustrations/landing/feature-3.svg',
          darkImage: '/images/illustrations/landing/feature-3-dark.svg',
        },
      ]"
    >
      <div class="cta-block no-border">
        <div class="head-text">
          <h3>Want to learn more?</h3>
          <p>Check out the Vuero documentation</p>
        </div>
        <div class="head-action">
          <div class="buttons">
            <VButton
              class="action-button"
              color="primary"
              rounded
              elevated
              href="https://docs.cssninja.io/vuero"
            >
              Read the Docs
            </VButton>
            <a
              href="https://cssninja.io"
              target="_blank"
              rel="noopener"
              class="button chat-button is-secondary"
            >
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </MarketingSideFeatures>

    <div
      id="vuero-components"
      class="section"
    >
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6 is-offset-3 has-text-centered">
            <!-- Title -->
            <div class="section-title has-text-centered p-b-40">
              <h2 class="title is-3">
                Reusable components
              </h2>
              <h4>Vuero ships with a full component library.</h4>
            </div>
          </div>
        </div>
        <div class="columns is-vcentered component-features is-flex-tablet-p">
          <div class="column is-4">
            <!-- Side icon box -->
            <div class="media-flex">
              <div class="left-icon">
                <i
                  aria-hidden="true"
                  class="lnil lnil-construction"
                />
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
                <i
                  aria-hidden="true"
                  class="lnil lnil-code"
                />
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
                <i
                  aria-hidden="true"
                  class="lnil lnil-color-palette"
                />
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

        <!-- CTA -->
        <p class="p-t-40 p-b-40 has-text-centered">
          <a
            href="http://go.cssninja.io/buy-vuero"
            class="button v-button is-rounded is-primary is-elevated is-bold is-huge"
          >
            Buy Now
          </a>
        </p>

        <!-- Components -->
        <div class="vuero-components p-t-40 p-b-60">
          <div class="vertical-tabs-wrapper">
            <VTabs
              v-model:selected="activeTab"
              :tabs="[
                {
                  label: 'Components',
                  value: 'components',
                },
                {
                  label: 'Forms',
                  value: 'forms',
                },
                {
                  label: 'Plugins',
                  value: 'plugins',
                },
              ]"
            >
              <template #tab>
                <div class="content-wrap">
                  <LandingComponents :active-tab="activeTab" />
                </div>
              </template>
            </VTabs>
          </div>
        </div>
      </div>
    </div>

    <MarketingSideFeatures
      title="3 More Reasons To Choose Vuero"
      subtitle="If you're not convinced yet, here's some more."
      :features="[
        {
          title: 'Professional',
          content: `Vuero is a professional product to build professional applications. You'll find everything you need to build a project that is up to the highest standards of web development.`,
          image: '/images/illustrations/landing/feature-4.svg',
          darkImage: '/images/illustrations/landing/feature-4-dark.svg',
        },
        {
          title: 'Fast Development',
          content: `Vuero ships with a Vitejs development server that will assist you when customizing the template. It handles .vue files compilation as well as SCSS and Typescript code. The page is refreshed each time you hit the save trigger in your favorite editor.`,
          image: '/images/illustrations/landing/feature-5.svg',
          darkImage: '/images/illustrations/landing/feature-5-dark.svg',
        },
        {
          title: 'Extensive Documentation',
          content: `Vuero's documentation will be a precious ally, as the template has a large codebase, and a lot of files. Read carefully the docs, all you need to know for an optimal development experience is there, even if you still are a beginner.`,
          image: '/images/illustrations/landing/feature-6.svg',
          darkImage: '/images/illustrations/landing/feature-6-dark.svg',
        },
      ]"
    >
      <div class="cta-wrapper">
        <div class="cta-title">
          <h3>Exclusively on Envato Market</h3>
          <a
            href="http://go.cssninja.io/buy-vuero"
            class="custom-button"
          >
            <img
              src="/images/icons/logos/envato.svg"
              alt=""
            >
            <span>Get It Now</span>
          </a>
        </div>
      </div>
    </MarketingSideFeatures>
  </Layout>
</template>

<style scoped lang="scss">
#vuero-demos,
#vuero-components {
  scroll-margin-top: 50px;
}
</style>
