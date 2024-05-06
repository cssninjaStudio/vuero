<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})

definePageMeta({
  layout: 'landing',
})

useHead({
  title: 'App Landing Page',
})
</script>

<template>
  <div>
    <div class="hero marketing-hero is-centered is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered has-text-centered">
            <div class="column">
              <h1 class="title is-1 is-bold">
                Easier development. Beautiful projects
              </h1>
              <h3 class="subtitle is-4 pt-2 light-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Isto modo ne
                improbos quidem.
              </h3>
              <div class="buttons is-centered">
                <VButton
                  color="primary"
                  bold
                  rounded
                  raised
                >
                  Get Started
                </VButton>
                <VButton
                  color="primary"
                  outlined
                  bold
                  rounded
                  raised
                >
                  14-day Trial
                </VButton>
              </div>
              <div class="hero-mockup">
                <img
                  class="light-image-block"
                  src="https://media.cssninja.io/content/products/screenshots/vuero/11.png"
                  alt=""
                >
                <img
                  class="dark-image-block"
                  src="https://media.cssninja.io/content/products/screenshots/vuero/12.png"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- -->
  </div>
</template>

<style lang="scss">
.marketing-hero {
  position: relative;

  &.is-centered {
    .hero-body {
      .columns {
        padding-top: 6rem;
      }

      .title {
        margin-top: 0;
      }

      .title,
      .subtitle {
        margin-inline-start: auto;
        margin-inline-end: auto;
      }

      h1 {
        max-width: 880px;
      }

      h3 {
        max-width: 520px;
      }

      .hero-mockup {
        max-width: 640px;
        margin: 0 auto;
      }
    }
  }

  .hero-body {
    .buttons {
      .button {
        min-height: 44px;
        min-width: 140px;
      }
    }

    .hero-mockup {
      box-shadow: var(--light-box-shadow);
      border: 1px solid var(--border);
      border-radius: 0.75rem;
      width: 100%;
      max-width: 840px !important;
    }
  }
}

.is-dark {
  .marketing-hero {
    &.is-left,
    &.is-right,
    &.is-centered {
      background: color-mix(in oklab, var(--landing-xxx), black 2%);

      .hero-body {
        .hero-mockup {
          border-color: color-mix(in oklab, var(--landing-xxx), white 8%);
        }

        .buttons {
          .button {
            &:not(.is-outlined) {
              background: var(--primary) !important;
              border-color: var(--primary) !important;

              &:hover,
              &:focus {
                box-shadow: var(--primary-box-shadow) !important;
              }
            }

            &.is-outlined {
              color: var(--primary) !important;
              border-color: var(--primary) !important;

              &:hover,
              &:focus {
                background: var(--primary) !important;
                color: var(--white) !important;
                box-shadow: var(--primary-box-shadow) !important;
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {

  .video-section {
    .title {
      color: var(--white) !important;
    }

    .video-player-container {
      &.reversed-play {
        .plyr--full-ui.plyr--video .plyr__control--overlaid {
          border-color: var(--primary) !important;
          color: var(--primary) !important;

          &:hover,
          &:focus {
            background: var(--primary) !important;

            .iconify {
              stroke: var(--white) !important;
              fill: var(--white) !important;
            }
          }

          .iconify {
            stroke: var(--primary) !important;
          }
        }
      }
    }
  }
}

.pricing-wrapper {
  font-family: var(--font);
  font-weight: 400;
  color: #9f9f9f;
  font-size: 15px;
  display: flex;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;

  .pricing-plan {
    width: calc(33.3% - 1.5rem);
    height: auto;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 0.65rem;
    display: inline-block;
    padding: 24px;
    text-align: center;
    position: relative;
    margin: 0 0.75rem;
    overflow: hidden;
    transition: box-shadow 0.3s;

    &:hover,
    &:focus {
      box-shadow: var(--light-box-shadow);
    }

    &.is-featured {
      border-color: var(--primary);

      &::before {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 64px 64px 0 0;
        border-color: var(--primary) transparent transparent transparent;
        position: absolute;
        inset-inline-start: 0;
        top: 0;
        content: '';
      }

      &::after {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f00c';
        color: var(--white);
        position: absolute;
        inset-inline-start: 11px;
        top: 11px;
        text-shadow: 0 0 2px var(--primary);
        font-size: 1rem;
      }
    }

    .name {
      color: var(--dark-text);
      font-weight: 300;
      font-size: 2rem;
      margin-top: -5px;
    }

    img {
      max-width: 55px;
      margin: 0 auto;
    }

    .price {
      font-size: 1.8rem;
      margin: 0.75rem 0 1.5rem;
      font-weight: bold;

      &::after {
        content: ' /per month';
        font-size: 1rem;
        font-weight: normal;
        color: var(--light-text);
      }
    }

    hr {
      background-color: var(--border);
      border: none;
      height: 1px;
    }

    .trial {
      font-size: 0.9rem;
      font-weight: 600;
      padding: 2px 21px;
      color: var(--primary);
      border: 1px solid var(--border);
      display: inline-block;
      border-radius: 15px;
      background-color: var(--white);
    }

    ul {
      list-style: none;
      padding: 0;
      text-align: inset-inline-start;
      margin-top: 29px;
    }

    li {
      margin-bottom: 15px;

      &::before {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f00c';
        font-size: 0.9rem;
        color: var(--success);
        margin-inline-end: 6px;
      }
    }
  }
}

.is-dark {
  .pricing-wrapper {
    .pricing-plan {
      border-color: color-mix(in oklab, var(--landing-xxx), white 12%);
      background: color-mix(in oklab, var(--landing-xxx), white 6%);

      &.is-featured {
        border-color: var(--primary);

        &::before {
          border-color: var(--primary) transparent transparent transparent;
        }
      }

      .name {
        color: var(--dark-dark-text);
      }

      .price {
        color: var(--white);
      }

      .trial {
        color: var(--primary);
        border-color: color-mix(in oklab, var(--landing-xxx), white 12%);
        background: color-mix(in oklab, var(--landing-xxx), white 2%);
      }

      hr {
        background: color-mix(in oklab, var(--landing-xxx), white 12%);
      }

      li {
        color: var(--light-text);

        strong {
          color: var(--white);
        }
      }
    }
  }
}

.card-icon-box {
  border: 1px solid var(--border);
  border-radius: 0.65rem;
  box-shadow: none;
  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    box-shadow: var(--light-box-shadow);
  }

  .v-icon {
    margin-bottom: 0.75rem;
  }
}

.is-dark {
  .card-icon-box {
    border-color: color-mix(in oklab, var(--landing-xxx), white 12%);
    background: color-mix(in oklab, var(--landing-xxx), white 4%);

    .v-icon {
      background: transparent;
      border: 2px solid color-mix(in oklab, var(--landing-xxx), white 12%);
    }

    .title {
      color: var(--white);
    }
  }
}

.has-bg-dots {
  background-image: radial-gradient(circle, #f0f4ff 10%, transparent 15%),
    radial-gradient(circle, #f0f4ff 10%, transparent 15%);
  background-size: 50px 50px;
  background-position:
    0 0,
    0 0;
}

.is-dark {
  .has-bg-dots {
    background-image: radial-gradient(
        circle,
        color-mix(in oklab, var(--landing-xxx), white 4%) 10%,
        transparent 15%
      ),
      radial-gradient(circle, color-mix(in oklab, var(--landing-xxx), white 4%) 10%, transparent 15%);
    background-size: 50px 50px;
    background-position:
      0 0,
      0 0;
  }
}

.boxed-cta {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 430px;
  max-width: 1040px;
  margin: 0 auto;
  background: var(--primary);
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: var(--primary-box-shadow);
  overflow: hidden;
  margin-bottom: 5rem;

  .v-avatar {
    position: absolute;

    &.v-avatar-1 {
      top: -7%;
      inset-inline-start: 4%;
    }

    &.v-avatar-2 {
      top: 5%;
      inset-inline-end: 5%;
    }

    &.v-avatar-3 {
      bottom: -9%;
      inset-inline-start: 5%;
    }

    &.v-avatar-4 {
      bottom: -9%;
      inset-inline-end: 5%;
    }

    &.v-avatar-5 {
      top: -7%;
      inset-inline-start: 50%;
    }

    &.v-avatar-6 {
      top: 40%;
      inset-inline-end: -3%;
    }

    &.v-avatar-7 {
      top: 30%;
      inset-inline-end: 12%;
    }

    &.v-avatar-8 {
      bottom: 30%;
      inset-inline-end: 16%;
    }

    &.v-avatar-9 {
      top: 9%;
      inset-inline-end: 21%;
    }

    &.v-avatar-10 {
      top: 40%;
      inset-inline-start: -3%;
    }

    &.v-avatar-11 {
      top: 30%;
      inset-inline-start: 12%;
    }

    &.v-avatar-12 {
      bottom: 17%;
      inset-inline-start: 16%;
    }

    &.v-avatar-13 {
      top: 9%;
      inset-inline-start: 21%;
    }

    &.v-avatar-14 {
      bottom: 20%;
      inset-inline-start: 1%;
    }

    &.v-avatar-15 {
      bottom: -7%;
      inset-inline-start: 39%;
    }

    &.v-avatar-16 {
      bottom: 12%;
      inset-inline-end: 30%;
    }

    .avatar {
      border: 4px solid color-mix(in oklab, var(--primary), white 8%);
    }
  }

  .boxed-cta-content {
    max-width: 440px;

    .title,
    .subtitle {
      color: var(--white) !important;
    }

    .subtitle {
      opacity: 0.8;
    }

    .v-button {
      min-height: 44px;
      min-width: 190px;
      font-weight: 600;
      color: var(--primary) !important;
      background-color: var(--white) !important;
      border-color: var(--primary) !important;
    }
  }
}

.is-dark {
  .boxed-cta {
    background: var(--primary);
    box-shadow: var(--primary-box-shadow);

    .v-avatar {
      .avatar {
        border-color: color-mix(in oklab, var(--primary), white 8%);
      }
    }

    .boxed-cta-content {
      .v-button {
        color: var(--primary);
      }
    }
  }
}

@media (width <= 767px) {
  .marketing-hero {
    &.is-left,
    &.is-right,
    &.is-centered {
      text-align: center;
    }

    .hero-body {
      .title,
      .subtitle {
        margin-inline-start: auto;
        margin-inline-end: auto;
      }

      .title {
        font-size: 2.5rem;
      }

      .buttons {
        justify-content: center;
        margin-bottom: 2rem;
      }

      .switch-wrapper {
        margin: 0 auto;
      }

      .hero-mockup {
        max-width: 100% !important;
        margin: 0 auto;
      }
    }
  }

  .pricing-wrapper {
    flex-wrap: wrap;

    .pricing-plan {
      width: calc(100% - 1.5rem);

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
  }

  .boxed-cta {
    .v-avatar {
      &.v-avatar-12,
      &.v-avatar-9,
      &.v-avatar-8,
      &.v-avatar-11,
      &.v-avatar-4,
      &.v-avatar-6,
      &.v-avatar-1 {
        display: none;
      }

      &.v-avatar-7 {
        inset-inline-end: -6%;
      }

      &.v-avatar-13 {
        top: 3%;
        inset-inline-start: -4%;
      }

      &.v-avatar-14 {
        inset-inline-start: -13%;
      }

      &.v-avatar-15 {
        bottom: -4%;
        inset-inline-start: 48%;
      }

      &.v-avatar-16 {
        inset-inline-end: -7%;
      }
    }

    .boxed-cta-content {
      .title {
        font-size: 2.5rem;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .marketing-hero {
    &.is-centered {
      text-align: center;
    }

    &.is-left {
      text-align: center;
    }

    &.is-right {
      text-align: center;
    }

    .hero-body {
      .title,
      .subtitle {
        margin-inline-start: auto;
        margin-inline-end: auto;
      }

      .buttons {
        justify-content: center;
        margin-bottom: 2rem;
      }

      .switch-wrapper {
        margin: 0 auto;
      }

      .hero-mockup {
        max-width: 640px;
        margin: 0 auto;
      }
    }
  }

  .card-icon-boxes {
    display: flex;

    .column {
      min-width: 50%;
      width: 50%;
    }
  }

  .video-section {
    .columns .columns {
      display: flex;
      flex-wrap: wrap;
      max-width: 480px;
      margin: 0 auto;

      .column {
        min-width: 50%;
        width: 50%;
      }
    }
  }

  .boxed-cta {
    .v-avatar {
      &.v-avatar-12,
      &.v-avatar-9,
      &.v-avatar-8,
      &.v-avatar-11 {
        display: none;
      }
    }
  }
}
</style>
