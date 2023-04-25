<template>
  <div class="standard-onboarding">
    <div class="title-wrap">
      <p>Looks like you're new here</p>
      <h2>Welcome to Vuero. What would you like to do?</h2>
    </div>

    <div class="onboarding-wrap">
      <div class="onboarding-wrap-inner">
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-1.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set1-1-dark.svg"
            alt=""
          />
          <h3>Configure Shop</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte dicis; Ita enim
            vivunt quidam, ut eorum vita refellatur oratio. Sed tament.
          </p>
          <div class="button-wrap">
            <VButton color="primary" outlined rounded raised> Configure Shop </VButton>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-2.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set1-2-dark.svg"
            alt=""
          />
          <h3>Manage Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte dicis; Ita enim
            vivunt quidam, ut eorum vita refellatur oratio. Sed tament.
          </p>
          <div class="button-wrap">
            <VButton color="primary" outlined rounded raised> Manage Products </VButton>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set1-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set1-3-dark.svg"
            alt=""
          />
          <h3>Setup Payments</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte dicis; Ita enim
            vivunt quidam, ut eorum vita refellatur oratio. Sed tament.
          </p>
          <div class="button-wrap">
            <VButton color="primary" outlined rounded raised> Setup Payments </VButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .standard-onboarding {
    margin-top: 20px;
  }
}

.standard-onboarding {
  padding: 20px 0;

  .title-wrap {
    text-align: center;

    h2 {
      font-family: var(--font-alt);
      font-weight: 600;
      font-size: 1.4rem;
      color: var(--dark-text);
    }

    p {
      text-transform: uppercase;
      font-family: var(--font);
      font-size: 0.85rem;
    }
  }

  .onboarding-wrap {
    padding: 30px 0;

    .onboarding-wrap-inner {
      display: flex;
      max-width: 880px;
      margin: 0 auto;

      .onboarding-card {
        @include vuero-r-card;

        margin: 8px;
        width: calc(33.3% - 16px);
        text-align: center;

        > img {
          display: block;
          width: 100%;
          max-width: 140px;
          margin: 0 auto;
        }

        h3 {
          font-family: var(--font-alt);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--dark-text);
          margin-bottom: 12px;
        }

        p {
          font-family: var(--font);
          font-size: 0.95rem;
        }

        .button-wrap {
          text-align: center;
          padding: 30px 0 20px;

          .button {
            min-width: 140px;
          }
        }
      }
    }
  }
}

.is-dark {
  .standard-onboarding {
    .title-wrap {
      h2 {
        color: var(--dark-dark-text);
      }
    }

    .onboarding-wrap {
      .onboarding-wrap-inner {
        .onboarding-card {
          @include vuero-card--dark;

          h3 {
            color: var(--dark-dark-text);
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .onboarding-wrapper {
    .standard-onboarding {
      padding: 20px 0;
    }

    .title-wrap {
      h2 {
        max-width: 280px;
        margin: 0 auto;
      }
    }

    .onboarding-wrap {
      .onboarding-wrap-inner {
        flex-wrap: wrap;

        .onboarding-card {
          min-width: calc(100% - 16px) !important;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .standard-onboarding {
    padding: 20px 0;

    .title-wrap {
      h2 {
        max-width: 280px;
        margin: 0 auto;
      }
    }
  }
}
</style>
