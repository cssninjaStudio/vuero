<template>
  <div class="section">
    <div class="container">
      <!--Title-->
      <div class="section-title has-text-centered">
        <h2 class="title is-2">
          Impecable UI/UX
        </h2>
        <h4>Vuero has been carefully handcrafted.</h4>
      </div>

      <div class="centered-mockup-wrapper">
        <div class="mockup-container mb-6">
          <!--Hexagon shapes-->
          <img
            class="hexagon hexagon-1 light-image"
            src="/images/icons/hexagons/green.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-1 dark-image"
            src="/images/icons/hexagons/green-heavy.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-2 light-image"
            src="/images/icons/hexagons/orange.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-2 dark-image"
            src="/images/icons/hexagons/orange-heavy.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-3 light-image"
            src="/images/icons/hexagons/accent.svg"
            alt=""
          >
          <img
            class="hexagon hexagon-3 dark-image"
            src="/images/icons/hexagons/accent-heavy.svg"
            alt=""
          >

          <!--Mockup-->
          <img
            class="light-image centered-mockup"
            src="/images/illustrations/landing/app-1.webp"
            alt=""
          >
          <img
            class="dark-image centered-mockup"
            src="/images/illustrations/landing/app-1-dark.webp"
            alt=""
          >
        </div>
        <div class="columns">
          <div class="column is-4">
            <h3 class="title is-4">
              Bulma 0.9.1
            </h3>
            <p class="subtitle is-6 light-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum
              exposuit vacuitatem.
            </p>
          </div>
          <div class="column is-4">
            <h3 class="title is-4">
              Clean Code
            </h3>
            <p class="subtitle is-6 light-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum
              exposuit vacuitatem.
            </p>
          </div>
          <div class="column is-4">
            <h3 class="title is-4">
              Modern UI
            </h3>
            <p class="subtitle is-6 light-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum ením bonum
              exposuit vacuitatem.
            </p>
          </div>
        </div>
      </div>

      <!--Stacks-->
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-mockup-wrapper {
  margin: 2rem auto;
  max-width: 740px;

  .mockup-container {
    position: relative;

    .hexagon {
      position: absolute;
      animation: rotating 15s infinite;

      &.hexagon-1 {
        top: -110px;
        inset-inline-start: -110px;
        height: 230px;
        width: 230px;
        transform: rotate(calc(var(--transform-direction) * 39deg));
        animation-delay: 2s;
      }

      &.hexagon-2 {
        bottom: 160px;
        inset-inline-end: -80px;
        height: 160px;
        width: 160px;
        transform: rotate(calc(var(--transform-direction) * 75deg));
        z-index: 2;
        animation-delay: 0.5s;
      }

      &.hexagon-3 {
        bottom: 60px;
        inset-inline-start: -180px;
        height: 100px;
        width: 100px;
        transform: rotate(calc(var(--transform-direction) * 125deg));
        z-index: 2;
        animation-delay: 1s;
      }
    }
  }

  img:not(.hexagon) {
    position: relative;
    border-radius: 0.75rem;
    z-index: 1;

    &.light-image {
      box-shadow: var(--light-box-shadow);
      border: 1px solid var(--border);
    }

    &.dark-image {
      box-shadow: var(--light-box-shadow);
      border: 1px solid color-mix(in oklab, var(--dark-sidebar), white 12%);
    }
  }
}

.is-dark {
  .centered-mockup-wrapper {
    .title {
      color: var(--white) !important;
    }
  }
}

@media (width <= 767px) {
  .centered-mockup-wrapper {
    .hexagon {
      &.hexagon-2 {
        bottom: 120px !important;
        inset-inline-end: -40px !important;
        height: 80px !important;
        width: 80px !important;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .centered-mockup-wrapper {
    max-width: 640px;

    .columns {
      display: flex;
    }
  }
}
</style>
