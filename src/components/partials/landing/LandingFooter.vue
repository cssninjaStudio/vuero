<template>
  <footer class="vuero-footer">
    <div class="container">
      <div class="footer-head">
        <div class="head-text">
          <h3>Ready to get started?</h3>
          <p>Get your Vuero copy now</p>
        </div>
        <div class="head-action">
          <div class="buttons">
            <a
              href="https://themeforest.net/item/vuero-vuejs-3-admin-and-webapp-ui-kit/31053035"
              class="button v-button is-primary is-rounded raised action-button"
            >
              Buy Vuero
            </a>
            <a href="https://cssninja.io" class="button chat-button"> Chat with us </a>
          </div>
        </div>
      </div>
      <div class="columns footer-body">
        <!-- Column -->
        <div class="column is-4">
          <div class="p-t-10 p-b-10">
            <AnimatedLogo width="36px" height="36px" />

            <div class="footer-description p-t-10 p-b-10">
              Vuero is built for developers and designers. It's modular approach lets you
              create awesome navbars with incredible layouts and elements.
            </div>
          </div>
          <div>
            <span class="moto">
              Designed and coded with
              <i aria-hidden="true" class="fas fa-heart text-danger"></i> by CSS
              Ninja.</span
            >
            <div class="social-links p-t-10 p-b-10">
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-facebook"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-twitter"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-linkedin"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-dribbble"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="column is-6 is-offset-2">
          <div class="columns is-flex-tablet-p">
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Vuero</li>
                <li class="column-item"><a href="#">Home</a></li>
                <li class="column-item"><a href="#">Pricing</a></li>
                <li class="column-item"><a href="#">Get started</a></li>
                <li class="column-item"><a href="#">Help</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Resources</li>
                <li class="column-item"><a href="#">Learning</a></li>
                <li class="column-item"><a href="#">Support center</a></li>
                <li class="column-item"><a href="#">Frequent questions</a></li>
                <li class="column-item"><a href="#">Schedule a demo</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Terms</li>
                <li class="column-item"><a href="#">Terms of Service</a></li>
                <li class="column-item"><a href="#">Privacy policy</a></li>
                <li class="column-item"><a href="#">SaaS services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright has-text-centered">
        <p>
          <span role="img" aria-label="copyright">&copy;</span> 2020-2021 |
          <a href="https://cssninja.io">cssninjaStudio</a> | All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  <!-- /Simple light footer -->
</template>

<style lang="scss">
.vuero-footer {
  padding-bottom: 0 !important;
  padding-top: 4rem !important;
  background: var(--body-color);

  .footer-head {
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--fade-grey-dark-4);

    .head-text {
      h3 {
        font-family: var(--font);
        font-size: 1.8rem;
        color: var(--dark-text);
      }

      p {
        font-size: 1.1rem;
        color: var(--light-text);
      }
    }

    .head-action {
      .buttons {
        .button {
          &.action-button {
            height: 36px;
            min-width: 140px;
          }

          &.chat-button {
            background: transparent;
            border: none;
            box-shadow: none;
            color: var(--primary);
            font-weight: 500;
          }
        }
      }
    }
  }

  .footer-body {
    padding-top: 3rem;

    .footer-column {
      padding-top: 20px;

      .column-header {
        font-family: var(--font-alt);
        text-transform: uppercase;
        color: var(--dark-text);
        font-size: 1rem;
        font-weight: 700;
        margin: 10px 0;
      }

      .column-item {
        padding-bottom: 10px;

        a {
          font-family: var(--font);
          color: var(--light-text);

          &:hover,
          &:focus {
            color: var(--primary);
          }
        }
      }
    }

    .social-links {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        color: var(--light-text);
        margin: 0 5px;

        &:hover,
        &:focus {
          color: var(--primary);
        }
      }
    }

    .footer-description {
      color: var(--light-text);
    }

    .moto {
      color: var(--light-text);
    }

    .small-footer-logo {
      height: 36px;
    }
  }

  .footer-copyright {
    font-family: var(--font);
    color: var(--light-text);
    padding: 4rem 0 2rem;

    a {
      color: var(--light-text);

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }
  }
}

.is-dark {
  .landing-page-wrapper {
    .vuero-footer {
      background: var(--landing-xxx-light-8);

      .footer-head {
        border-color: var(--landing-xxx-light-18);

        .head-text {
          h3 {
            color: var(--dark-dark-text);
          }

          p {
            font-size: 1.1rem;
            color: var(--light-text);
          }
        }

        .head-action {
          .buttons {
            .button {
              &.action-button {
                background: var(--primary);
                border-color: var(--primary);
              }

              &.chat-button {
                color: var(--primary);
                background: none !important;
              }
            }
          }
        }
      }

      .footer-body {
        .footer-column {
          .column-header {
            color: var(--dark-dark-text);
          }

          .column-item {
            a:hover {
              color: var(--primary);
            }
          }
        }

        .social-links {
          a:hover {
            color: var(--primary);
          }
        }
      }

      .footer-copyright {
        a {
          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .vuero-footer {
    .footer-head {
      flex-direction: column;
      text-align: center;

      .head-text {
        padding-bottom: 20px;
      }
    }

    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }

    .footer-description {
      max-width: 400px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
