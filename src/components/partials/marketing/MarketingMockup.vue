<template>
  <div class="section has-bg-dots">
    <div class="container">
      <!--Title-->
      <div class="section-title has-text-centered">
        <h2 class="title is-2">Impecable UI/UX</h2>
        <h4>Vuero has been carefully handcrafted.</h4>
      </div>

      <div class="centered-mockup-wrapper">
        <div class="mockup-container mb-6">
          <!--Hexagon shapes-->
          <img
            class="hexagon hexagon-1 light-image-l"
            src="/images/icons/hexagons/green.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-1 dark-image-l"
            src="/images/icons/hexagons/green-heavy.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-2 light-image-l"
            src="/images/icons/hexagons/orange.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-2 dark-image-l"
            src="/images/icons/hexagons/orange-heavy.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-3 light-image-l"
            src="/images/icons/hexagons/accent.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-3 dark-image-l"
            src="/images/icons/hexagons/accent-heavy.svg"
            alt=""
          />

          <!--Mockup-->
          <img
            class="light-image-l centered-mockup"
            src="/@src/assets/illustrations/landing/app-1.png"
            alt=""
          />
          <img
            class="dark-image-l centered-mockup"
            src="/@src/assets/illustrations/landing/app-1-dark.png"
            alt=""
          />
        </div>
        <div class="columns">
          <div class="column is-4">
            <h3 class="title is-4">Bulma 0.9.1</h3>
            <p class="subtitle is-6 light-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum
              ením bonum exposuit vacuitatem.
            </p>
          </div>
          <div class="column is-4">
            <h3 class="title is-4">Clean Code</h3>
            <p class="subtitle is-6 light-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum
              ením bonum exposuit vacuitatem.
            </p>
          </div>
          <div class="column is-4">
            <h3 class="title is-4">Modern UI</h3>
            <p class="subtitle is-6 light-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum
              ením bonum exposuit vacuitatem.
            </p>
          </div>
        </div>
      </div>

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
    </div>
  </div>
</template>
