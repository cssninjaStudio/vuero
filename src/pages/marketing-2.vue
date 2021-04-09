<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Vuero - A complete Vue 3 design system',
})
</script>

<template>
  <MinimalLightLayout>
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div
        id="huro-marketing"
        class="hero marketing-hero is-right is-fullheight"
      >
        <!-- Navbar partial -->
        <LandingNavigation />

        <!--Hexagon shapes-->
        <img
          class="hexagon hexagon-1 light-image-l"
          src="/images/icons/hexagons/accent.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-1 dark-image-l"
          src="/images/icons/hexagons/accent-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-2 light-image-l"
          src="/images/icons/hexagons/accent.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-2 dark-image-l"
          src="/images/icons/hexagons/accent-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-3 light-image-l"
          src="/images/icons/hexagons/green.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-3 dark-image-l"
          src="/images/icons/hexagons/green-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-4 light-image-l"
          src="/images/icons/hexagons/purple.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-4 dark-image-l"
          src="/images/icons/hexagons/purple-heavy.svg"
          alt=""
        />

        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-7">
                <img
                  class="light-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/app-2.png"
                  alt=""
                />
                <img
                  class="dark-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/app-2-dark.png"
                  alt=""
                />
              </div>
              <div class="column is-5">
                <h1 class="title is-1 is-bold">
                  Easier development. Beautiful projects
                </h1>
                <h3 class="subtitle is-4 pt-2 light-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Isto
                  modo ne improbos quidem.
                </h3>
                <div class="buttons">
                  <a
                    class="button h-button is-bold is-primary is-rounded is-raised"
                    >Get Started</a
                  >
                  <a
                    class="button h-button is-bold is-primary is-rounded is-raised is-outlined"
                    >14-day Trial</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Feature boxes section-->
      <div class="section has-bg-dots">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered py-6">
            <h2 class="title is-2">Awesome Features</h2>
            <h4>Huro has been carefully handcrafted.</h4>
          </div>

          <!--Content-->
          <div class="py-12">
            <div class="columns is-vcentered is-multiline card-icon-boxes">
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-blue">
                      <i class="lnil lnil-layout-alt-2"></i>
                    </div>

                    <h4 class="title is-5">Nice Vectors</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-warning">
                      <i class="lnil lnil-layers"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-success">
                      <i class="lnil lnil-grid-alt"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-purple">
                      <i class="lnil lnil-bulb"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-green">
                      <i class="lnil lnil-cog"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-yellow">
                      <i class="lnil lnil-plug"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-orange">
                      <i class="lnil lnil-folder-alt"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-info">
                      <i class="lnil lnil-timer"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-blue">
                      <i class="lnil lnil-pie-chart-alt"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-purple">
                      <i class="lnil lnil-licencse"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-green">
                      <i class="lnil lnil-grow"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <!--Box-->
              <div class="column is-3">
                <div class="card card-icon-box">
                  <div class="card-content">
                    <div class="v-icon is-medium is-yellow">
                      <i class="lnil lnil-bank"></i>
                    </div>

                    <h4 class="title is-5">Icon title</h4>
                    <p class="subtitle is-6 light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!--CTA-->
            <div class="cta-block no-border">
              <div class="head-text">
                <h3>Want to learn more?</h3>
                <p>Check out the Huro documentation</p>
              </div>
              <div class="head-action">
                <div class="buttons">
                  <a
                    href="https://docs.huro.cssninja.io"
                    class="button h-button is-primary is-rounded is-elevated action-button"
                    >Read the Docs</a
                  >
                  <a
                    href="https://cssninja.io"
                    target="_blank"
                    class="button chat-button is-secondary"
                    >Chat with us</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Mockup Section-->
      <div class="section has-bg-dots">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">Impecable UI/UX</h2>
            <h4>Huro has been carefully handcrafted.</h4>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Summum ením bonum exposuit vacuitatem.
                </p>
              </div>
              <div class="column is-4">
                <h3 class="title is-4">Clean Code</h3>
                <p class="subtitle is-6 light-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Summum ením bonum exposuit vacuitatem.
                </p>
              </div>
              <div class="column is-4">
                <h3 class="title is-4">Modern UI</h3>
                <p class="subtitle is-6 light-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Summum ením bonum exposuit vacuitatem.
                </p>
              </div>
            </div>
          </div>

          <!--Stacks-->
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

      <!--Side Features Section-->
      <div class="section">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">Top Tier Product</h2>
            <h4>Huro has been carefully handcrafted.</h4>
          </div>

          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div class="column is-6 has-text-centered">
              <img
                class="light-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-1.png"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@src/assets/illustrations/landing/feature-1-dark.png"
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
                Huro's UI has been carefully thought and designed, and is simply
                one of the best you'll find on the market. It's visual power and
                its modularity will let you build great apps seamlessly.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div
              class="column is-6 has-text-centered h-hidden-desktop h-hidden-tablet-p h-hidden-tablet-l"
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
                Huro ships with a lot of svg illustrations representing various
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
                Huro ships with it's own component library based on the Bulma.io
                CSS framework. Each component has been carefully handcrafted and
                natively supports dark mode.
              </p>
            </div>
          </div>

          <!--CTA-->
          <div class="cta-block no-border">
            <div class="head-text">
              <h3>Want to learn more?</h3>
              <p>Check out the Huro documentation</p>
            </div>
            <div class="head-action">
              <div class="buttons">
                <a
                  href="https://docs.huro.cssninja.io"
                  class="button h-button is-primary is-rounded is-elevated action-button"
                  >Read the Docs</a
                >
                <a
                  href="https://cssninja.io"
                  target="_blank"
                  class="button chat-button is-secondary"
                  >Chat with us</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--About section-->
      <div class="section has-bg-dots">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered py-6">
            <h2 class="title is-2">About Us</h2>
            <h4>Let us tell you the hole story.</h4>
          </div>

          <div class="video-section py-12">
            <div class="columns is-vcentered">
              <div class="column is-6 is-relative is-centered-portrait">
                <!--Video PLayer-->
                <V-Plyr
                  ratio="square"
                  source="/video/hands.mp4"
                  poster="/video/poster-1c.jpg"
                  reversed
                />
              </div>
              <div class="column is-6">
                <!--Content-->
                <div class="columns is-multiline b-columns-half-tablet-p">
                  <div class="column is-6">
                    <div class="py-2 medium:py-4">
                      <h4 class="title is-5 is-narrow">How we started</h4>
                      <p class="pt-2 max-w-3 text-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed videbimus.
                      </p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="py-2 medium:py-4">
                      <h4 class="title is-5 is-narrow">Who we are</h4>
                      <p class="pt-2 max-w-3 text-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed videbimus.
                      </p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="py-2 medium:py-4">
                      <h4 class="title is-5 is-narrow">What we do</h4>
                      <p class="pt-2 max-w-3 text-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed videbimus.
                      </p>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="py-2 medium:py-4">
                      <h4 class="title is-5 is-narrow">Our values</h4>
                      <p class="pt-2 max-w-3 text-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed videbimus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Pricing section-->
      <div class="section has-bg-dots">
        <div class="container">
          <!--Title-->
          <div class="section-title has-text-centered">
            <h2 class="title is-2">Comprehensive Pricing</h2>
            <h4>There's a right plan for everyone out there.</h4>
          </div>

          <!--Wrapper-->
          <div class="pricing-wrapper">
            <!--Pricing plan-->
            <div class="pricing-plan">
              <div class="name">Free</div>
              <img src="/images/logos/logo/logo-platinum.svg" alt="" />
              <div class="price">$0</div>
              <div class="trial">Forever free</div>
              <hr />
              <ul>
                <li>
                  <strong>2</strong>
                  team members
                </li>
                <li>
                  <strong>3</strong>
                  team projects
                </li>
                <li>
                  <strong>50GB</strong>
                  of disk storage
                </li>
              </ul>
            </div>
            <!--Pricing plan-->
            <div class="pricing-plan">
              <div class="name">Business</div>
              <img src="/images/logos/logo/logo-accent.svg" alt="" />
              <div class="price">$49</div>
              <div class="trial">Free 14 day trial</div>
              <hr />
              <ul>
                <li>
                  <strong>10</strong>
                  team members
                </li>
                <li>
                  <strong>150</strong>
                  team projects
                </li>
                <li>
                  <strong>500GB</strong>
                  of disk storage
                </li>
              </ul>
            </div>
            <!--Pricing plan-->
            <div class="pricing-plan is-featured">
              <div class="name">Pro</div>
              <img src="/images/logos/logo/logo.svg" alt="" />
              <div class="price">$119</div>
              <div class="trial">Free 14 day trial</div>
              <hr />
              <ul>
                <li>
                  <strong>Unlimited</strong>
                  team members
                </li>
                <li>
                  <strong>Unlimited</strong>
                  team projects
                </li>
                <li>
                  <strong>Unlimited</strong>
                  disk storage
                </li>
                <li>Team analytics</li>
                <li>Custom reports</li>
              </ul>
            </div>
          </div>

          <!--CTA-->
          <div class="cta-block no-border">
            <div class="head-text">
              <h3>Want to learn more?</h3>
              <p>Check out the Huro documentation</p>
            </div>
            <div class="head-action">
              <div class="buttons">
                <a
                  href="https://docs.huro.cssninja.io"
                  class="button h-button is-primary is-rounded is-elevated action-button"
                  >Read the Docs</a
                >
                <a
                  href="https://cssninja.io"
                  target="_blank"
                  class="button chat-button is-secondary"
                  >Chat with us</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Boxed CTA-->
      <div class="section has-bg-dots">
        <div class="container">
          <div class="">
            <div class="boxed-cta">
              <div class="v-avatar v-avatar-1 is-xl">
                <img
                  class="avatar"
                  src="/images/avatars/photos/8.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-2 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/5.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-3 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/7.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-4 is-xl">
                <img
                  class="avatar"
                  src="/images/avatars/photos/13.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-5 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/24.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-6 is-xl">
                <img
                  class="avatar"
                  src="/images/avatars/photos/12.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-7 is-medium">
                <img
                  class="avatar"
                  src="/images/avatars/photos/28.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-8 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/32.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-9 is-xl">
                <img
                  class="avatar"
                  src="/images/avatars/photos/41.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-10 is-medium">
                <img
                  class="avatar"
                  src="/images/avatars/photos/25.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-11 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/33.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-12 is-xl">
                <img
                  class="avatar"
                  src="/images/avatars/photos/21.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-13 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/23.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-14 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/9.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-15 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/15.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="v-avatar v-avatar-16 is-large">
                <img
                  class="avatar"
                  src="/images/avatars/photos/11.jpg"
                  alt=""
                  @error.once="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="boxed-cta-content has-text-centered">
                <h2 class="title is-1">Get Started Now</h2>
                <h3 class="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin
                  te auctoritas commovebat, nobisne omnibus.
                </h3>
                <a class="button h-button is-rounded is-bold"
                  >Start your Free Trial</a
                >
              </div>
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
@import '../assets/scss/pages/generic/_marketing.scss';
</style>
