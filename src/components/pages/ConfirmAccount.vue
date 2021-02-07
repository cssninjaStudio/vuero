<template>
  <!--Confirm Account-->
  <div class="confirm-account-wrapper">
    <div class="wrapper-inner">
      <div class="action-box">
        <div class="box-content">
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/launch.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/launch-dark.svg"
            alt=""
          />
          <h3 class="dark-inverted">Please confirm your account</h3>
          <p>
            Hey Erik, It would be really cool if you could give us a hand on
            this project. There are a lot of tasks popping out every day and I
            feel the team is getting a bit overwhelmed. We'd love to have you
            board.
          </p>
          <div class="buttons">
            <button class="button v-button is-primary is-raised">
              Confirm Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';

/* ==========================================================================
1. Confirm Account
========================================================================== */

.confirm-account-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 540px;
  min-height: 560px;
  margin: 0 auto;

  .wrapper-inner {
    .action-box {
      @include vuero-s-card();

      padding: 40px;

      .box-content {
        text-align: center;
        font-family: $font;

        img {
          display: block;
          width: 100%;
          max-width: 220px;
          margin: 0 auto 8px auto;

          &.is-larger {
            max-width: 300px;
          }
        }

        h3 {
          font-size: 1.1rem;
          font-family: $font-alt;
          font-weight: 600;
          max-width: 320px;
          margin: 0 auto 8px auto;

          span {
            color: $primary;
          }
        }

        p {
          font-size: 0.9rem;
        }

        .buttons {
          margin: 0 auto;
          display: flex;
          justify-content: center;
          padding-top: 30px;

          .button {
            margin: 0 4px;
            min-width: 180px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .confirm-account-wrapper {
    .wrapper-inner {
      .action-box {
        padding: 20px;

        .box-content {
          .buttons {
            .button {
              min-width: 130px;
            }
          }
        }
      }
    }
  }
}
</style>
