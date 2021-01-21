<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

import { isDark } from '/@src/composition/state/ui/darkModeState.ts'

const activeTab = ref<'elements' | 'components' | 'forms' | 'plugins'>(
  'elements'
)

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
              src="/@images/shapes/cut-circle.svg"
              alt=""
            />
            <img
              class="cut-circle dark-image-l"
              src="/@images/shapes/cut-circle-dark.svg"
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
              v-if="!isDark"
              class="light-image-l hero-mockup"
              src="/@images/illustrations/landing/app-1.png"
              alt=""
            />
            <img
              v-else
              class="dark-image-l hero-mockup"
              src="/@images/illustrations/landing/app-1-dark.png"
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
            <div class="stack">
              <img src="/@images/icons/stacks/html5.svg" alt="" />
            </div>
            <div class="stack">
              <img src="/@images/icons/stacks/js.svg" alt="" />
            </div>
            <div class="stack">
              <img src="/@images/icons/stacks/bulma.svg" alt="" />
            </div>
            <div class="stack">
              <img src="/@images/icons/stacks/sass.svg" alt="" />
            </div>
            <div class="stack">
              <img src="/@images/icons/stacks/gulp.svg" alt="" />
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
                <i class="lnil lnil-toolbox"></i>
                <h3>1000+ Components</h3>
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
                  href="https://themeforest.net/item/huro-multipurpose-admin-and-webapp-ui-kit/28933249"
                  class="button h-button is-primary is-rounded is-elevated action-button"
                  >Buy Now</a
                >
                <a href="https://cssninja.io" class="button chat-button"
                  >Chat with us</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="huro-demos-list" class="section section-focus">
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
                src="/@images/illustrations/landing/feature-1.png"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@images/illustrations/landing/feature-1-dark.png"
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
                src="/@images/illustrations/landing/feature-2.svg"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@images/illustrations/landing/feature-2-dark.svg"
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
                src="/@images/illustrations/landing/feature-2.svg"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@images/illustrations/landing/feature-2-dark.svg"
                alt=""
              />
            </div>
          </div>
          <!-- Feature -->
          <div class="columns is-vcentered side-feature">
            <div class="column is-6 has-text-centered">
              <img
                class="light-image-l featured-image"
                src="/@images/illustrations/landing/feature-3.svg"
                alt=""
              />
              <img
                class="dark-image-l featured-image"
                src="/@images/illustrations/landing/feature-3-dark.svg"
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
                  class="button h-button is-primary is-rounded is-elevated action-button"
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

      <div id="huro-demo-elements" class="section section-focus">
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
              href="https://themeforest.net/item/huro-multipurpose-admin-and-webapp-ui-kit/28933249"
              class="button h-button is-rounded is-primary is-elevated is-bold is-huge"
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
                  src="/@images/illustrations/landing/feature-4.svg"
                  alt=""
                />
                <img
                  class="dark-image-l featured-image"
                  src="/@images/illustrations/landing/feature-4-dark.svg"
                  alt=""
                />
              </div>
              <div class="column is-5">
                <h2 class="title m-b-10 is-centered-tablet-portrait">
                  Focused on UI and CSS
                </h2>
                <p
                  class="section-feature-description is-centered-tablet-portrait"
                >
                  Vuero is a template that mainly focuses on UI. Of course
                  you'll find some jQuery inside, but only for presentation
                  purpose. We've reduced the javascript to it's minimum so you
                  can focus on importing UI in your project.
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
                  src="/@images/illustrations/landing/feature-5.svg"
                  alt=""
                />
                <img
                  class="dark-image-l featured-image"
                  src="/@images/illustrations/landing/feature-5-dark.svg"
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
                  Vuero ships with a nodejs development server that will assist
                  you when customizing the template. Panini handles HTML
                  compilation while Gulp recompiles your SCSS and Javascript
                  code, and Browser Sync refreshes the page each time you hit
                  the save trigger in your favorite editor.
                </p>
              </div>
              <div class="column is-5 has-text-centered h-hidden-mobile">
                <img
                  class="light-image-l featured-image"
                  src="/@images/illustrations/landing/feature-5.svg"
                  alt=""
                />
                <img
                  class="dark-image-l featured-image"
                  src="/@images/illustrations/landing/feature-5-dark.svg"
                  alt=""
                />
              </div>
            </div>

            <!-- Feature -->
            <div class="columns is-vcentered side-feature">
              <div class="column is-5 is-offset-1 has-text-centered">
                <img
                  class="light-image-l featured-image"
                  src="/@images/illustrations/landing/feature-6.svg"
                  alt=""
                />
                <img
                  class="dark-image-l featured-image"
                  src="/@images/illustrations/landing/feature-6-dark.svg"
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
                href="https://themeforest.net/item/huro-multipurpose-admin-and-webapp-ui-kit/28933249"
                class="custom-button"
              >
                <img src="/@images/icons/logos/envato.svg" alt="" />
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
@import '../assets/scss/pages/demo/_landing.scss';
</style>
