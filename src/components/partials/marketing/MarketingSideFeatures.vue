<template>
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
          <h2 class="title m-b-10 is-centered-tablet-portrait">Incredible UI</h2>
          <p class="section-feature-description is-centered-tablet-portrait">
            Vuero's UI has been carefully thought and designed, and is simply one of the
            best you'll find on the market. It's visual power and its modularity will let
            you build great apps seamlessly.
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
          <h2 class="title m-b-10 is-centered-tablet-portrait">Playful Vectors</h2>
          <p class="section-feature-description is-centered-tablet-portrait">
            Vuero ships with a lot of svg illustrations representing various elements that
            can be used in a website, following very high quality standards.
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
          <h2 class="title m-b-10 is-centered-tablet-portrait">Handcrafted UI</h2>
          <p class="section-feature-description is-centered-tablet-portrait">
            Vuero ships with it's own component library based on the Bulma.io CSS
            framework. Each component has been carefully handcrafted and natively supports
            dark mode.
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
    </div>
  </div>
</template>
