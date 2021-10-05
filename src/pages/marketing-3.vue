<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Vuero - A complete Vue 3 design system',
})
</script>

<template>
  <MinimalLayout theme="light">
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div
        id="Vuero-marketing"
        class="hero marketing-hero is-centered is-fullheight"
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
            <div class="columns is-vcentered has-text-centered">
              <div class="column">
                <h1 class="title is-1 is-bold">
                  Easier development. Beautiful projects
                </h1>
                <h3 class="subtitle is-4 pt-2 light-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Isto
                  modo ne improbos quidem.
                </h3>
                <div class="buttons is-centered">
                  <VButton color="primary" bold rounded raised>
                    Get Started
                  </VButton>
                  <VButton color="primary" outlined bold rounded raised>
                    14-day Trial
                  </VButton>
                </div>
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
            </div>
          </div>
        </div>
      </div>

      <!--Feature boxes section-->
      <MarketingFeaturesIcons />

      <!--Mockup Section-->
      <MarketingMockup />

      <!--Side Features Section-->
      <MarketingSideFeatures />

      <!--About section-->
      <MarketingAbout />

      <!--Pricing section-->
      <MarketingPricings />

      <!--Boxed CTA-->
      <MarketingCTA />

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
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_landing.scss';
@import '../scss/pages/generic/_marketing.scss';
</style>
