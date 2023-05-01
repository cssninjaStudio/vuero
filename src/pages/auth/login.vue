<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useDarkmode } from '/@src/stores/darkmode'
import { useUserSession } from '/@src/stores/userSession'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

type StepId = 'login' | 'forgot-password'
const step = ref<StepId>('login')
const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notyf = useNotyf()
const userSession = useUserSession()
const redirect = route.query.redirect as string

const handleLogin = async () => {
  if (!isLoading.value) {
    isLoading.value = true

    await sleep(2000)
    userSession.setToken('logged-in')

    notyf.dismissAll()
    notyf.success('Welcome back, Erik Kovalsky')

    if (redirect) {
      router.push(redirect)
    } else {
      router.push('/sidebar/dashboards')
    }

    isLoading.value = false
  }
}

useHead({
  title: 'Auth Login 1 - Vuero',
})
</script>

<template>
  <div class="modern-login">
    <div class="underlay h-hidden-mobile h-hidden-tablet-p"></div>

    <div class="columns is-gapless is-vcentered">
      <div class="column is-relative is-8 h-hidden-mobile h-hidden-tablet-p">
        <div class="hero is-fullheight is-image">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <img
                    class="hero-image"
                    src="/@src/assets/illustrations/login/station.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4 is-relative">
        <div class="top-tools">
          <RouterLink to="/" class="top-logo">
            <AnimatedLogo width="38px" height="38px" />
          </RouterLink>

          <label
            class="dark-mode"
            tabindex="0"
            role="button"
            @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
          >
            <input
              data-cy="dark-mode-toggle"
              type="checkbox"
              :checked="!darkmode.isDark"
              @change="darkmode.onChange"
            />
            <span></span>
          </label>
        </div>
        <div class="is-form">
          <div class="is-form-inner">
            <div class="form-text" :class="[step !== 'login' && 'is-hidden']">
              <h2>Sign In</h2>
              <p>Welcome back to your account.</p>
            </div>
            <div class="form-text" :class="[step === 'login' && 'is-hidden']">
              <h2>Recover Account</h2>
              <p>Reset your account password.</p>
            </div>
            <form
              data-cy="login-form"
              :class="[step !== 'login' && 'is-hidden']"
              class="login-wrapper"
              @submit.prevent="handleLogin"
            >
              <VMessage color="primary">
                <div>
                  <strong class="pr-1">email:</strong>
                  <span>john.doe@cssninja.io</span>
                </div>
                <div>
                  <strong class="pr-1">password:</strong>
                  <span>ada.lovelace</span>
                </div>
              </VMessage>

              <VField>
                <VControl icon="lnil lnil-envelope autv-icon">
                  <VLabel class="auth-label">Email Address</VLabel>
                  <VInput
                    data-cy="email-input"
                    type="email"
                    autocomplete="current-password"
                  />
                </VControl>
              </VField>
              <VField>
                <VControl icon="lnil lnil-lock-alt autv-icon">
                  <VLabel class="auth-label">Password</VLabel>
                  <VInput
                    data-cy="password-input"
                    type="password"
                    autocomplete="current-password"
                  />
                </VControl>
              </VField>

              <VField>
                <VControl class="is-flex">
                  <VLabel raw class="remember-toggle">
                    <VInput raw type="checkbox" />

                    <span class="toggler">
                      <span class="active">
                        <i
                          aria-hidden="true"
                          class="iconify"
                          data-icon="feather:check"
                        ></i>
                      </span>
                      <span class="inactive">
                        <i
                          aria-hidden="true"
                          class="iconify"
                          data-icon="feather:circle"
                        ></i>
                      </span>
                    </span>
                  </VLabel>
                  <VLabel raw class="remember-me">Remember Me</VLabel>
                  <a
                    tabindex="0"
                    role="button"
                    @keydown.space.prevent="step = 'forgot-password'"
                    @click="step = 'forgot-password'"
                  >
                    Forgot Password?
                  </a>
                </VControl>
              </VField>

              <div class="button-wrap has-help">
                <VButton
                  id="login-button"
                  :loading="isLoading"
                  color="primary"
                  type="submit"
                  size="big"
                  rounded
                  raised
                  bold
                >
                  Confirm
                </VButton>
                <span>
                  Or
                  <RouterLink to="/auth/signup-1">Create</RouterLink>
                  an account.
                </span>
              </div>
            </form>

            <form
              :class="[step !== 'forgot-password' && 'is-hidden']"
              class="login-wrapper"
              @submit.prevent
            >
              <p class="recover-text">
                Enter your email and click on the confirm button to reset your password.
                We'll send you an email detailing the steps to complete the procedure.
              </p>

              <VField>
                <VControl icon="lnil lnil-envelope autv-icon">
                  <VLabel class="auth-label">Email Address</VLabel>
                  <VInput type="email" autocomplete="current-password" />
                </VControl>
              </VField>
              <div class="button-wrap">
                <VButton color="white" size="big" lower rounded @click="step = 'login'">
                  Cancel
                </VButton>
                <VButton
                  color="primary"
                  size="big"
                  type="submit"
                  lower
                  rounded
                  solid
                  @click="step = 'login'"
                >
                  Confirm
                </VButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modern-login {
  position: relative;
  background: var(--white);
  min-height: 100vh;

  .column {
    &.is-relative {
      position: relative;
    }
  }

  .hero {
    &.has-background-image {
      position: relative;

      .hero-overlay {
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        background: #5d4298 !important;
        opacity: 0.6;
      }
    }
  }

  .underlay {
    display: block;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 66.6%;
    height: 100%;
    background: #fdfdfd;
    z-index: 0;
  }

  .top-tools {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 400px;
    margin: 0 auto;
    padding: 0 1.25rem;
    margin-bottom: 5rem;

    .dark-mode {
      transform: scale(0.6);
      z-index: 2;
    }

    .top-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      img {
        display: block;
        width: 100%;
        max-width: 50px;
        margin: 0 auto;
      }

      svg {
        height: 50px;
        width: 50px;
      }
    }
  }

  .is-image {
    position: relative;
    border-inline-end: 1px solid var(--fade-grey);

    .hero-image {
      position: relative;
      z-index: 2;
      display: block;
      margin: -80px auto 0;
      max-width: 60%;
      width: 60%;
    }
  }

  .is-form {
    position: relative;
    max-width: 400px;
    margin: 0 auto;

    form {
      animation: fadeInLeft 0.5s;
    }

    .form-text {
      padding: 0 20px;
      animation: fadeInLeft 0.5s;

      h2 {
        font-family: var(--font-alt);
        font-weight: 400;
        font-size: 2rem;
        color: var(--primary);
      }

      p {
        color: var(--muted-grey);
        margin-top: 10px;
      }
    }

    .recover-text {
      font-size: 0.9rem;
      color: var(--dark-text);
    }

    .login-wrapper {
      padding: 30px 20px;

      .control {
        position: relative;
        width: 100%;
        margin-top: 16px;

        .input {
          padding-top: 14px;
          height: 60px;
          border-radius: 10px;
          padding-inline-start: 55px;
          transition: all 0.3s; // transition-all test

          &:focus {
            background: var(--fade-grey-light-6);
            border-color: var(--placeholder);

            ~ .auth-label,
            ~ .autv-icon i {
              color: var(--muted-grey);
            }
          }
        }

        .error-text {
          color: var(--danger);
          font-size: 0.8rem;
          display: none;
          padding: 2px 6px;
        }

        .auth-label {
          position: absolute;
          top: 6px;
          inset-inline-start: 55px;
          font-size: 0.8rem;
          color: var(--dark-text);
          font-weight: 500;
          z-index: 2;
          transition: all 0.3s; // transition-all test
        }

        .autv-icon,
        :deep(.autv-icon) {
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          height: 60px;
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          color: var(--placeholder);
          transition: all 0.3s;
        }

        &.has-validation {
          .validation-icon {
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            height: 60px;
            width: 60px;
            display: none;
            justify-content: center;
            align-items: center;

            .icon-wrapper {
              height: 20px;
              width: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: var(--radius-rounded);

              svg {
                height: 10px;
                width: 10px;
                stroke-width: 3px;
                color: var(--white);
              }
            }

            &.is-success {
              .icon-wrapper {
                background: var(--success);
              }
            }

            &.is-error {
              .icon-wrapper {
                background: var(--danger);
              }
            }
          }

          &.has-success {
            .validation-icon {
              &.is-success {
                display: flex;
              }

              &.is-error {
                display: none;
              }
            }
          }

          &.has-error {
            .input {
              border-color: var(--danger);
            }

            .error-text {
              display: block;
            }

            .validation-icon {
              &.is-error {
                display: flex;
              }

              &.is-success {
                display: none;
              }
            }
          }
        }

        &.is-flex {
          display: flex;
          align-items: center;

          a {
            display: block;
            margin-inline-start: auto;
            color: var(--muted-grey);
            font-weight: 500;
            font-size: 0.9rem;
            transition: color 0.3s;

            &:hover,
            &:focus {
              color: var(--primary);
            }
          }

          .remember-me {
            font-size: 0.9rem;
            color: var(--muted-grey);
            font-weight: 500;
          }
        }
      }

      .button-wrap {
        margin: 40px 0;

        &.has-help {
          display: flex;
          align-items: center;

          > span {
            margin-inline-start: 12px;
            font-family: var(--font);

            a {
              color: var(--primary);
              font-weight: 500;
              padding: 0 2px;
            }
          }
        }

        .button {
          height: 46px;
          width: 140px;
          margin-inline-start: 6px;

          &:first-child {
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}

.remember-toggle {
  width: 65px;
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  transform: scale(0.9);

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .toggler {
      border-color: var(--primary);

      .active,
      .inactive {
        transform: translateX(calc(var(--transform-direction) * 100%)) rotate(360deg);
      }

      .active {
        opacity: 1;
      }

      .inactive {
        opacity: 0;
      }
    }
  }

  .toggler {
    position: relative;
    display: block;
    height: 34px;
    width: 61px;
    border: 2px solid var(--placeholder);
    border-radius: 100px;
    transition: all 0.3s; // transition-all test

    .active,
    .inactive {
      position: absolute;
      top: 2px;
      inset-inline-start: 2px;
      height: 26px;
      width: 26px;
      border-radius: var(--radius-rounded);
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(calc(var(--transform-direction) * 0))
        rotate(calc(var(--transform-direction) * 0));
      transition: all 0.3s ease;

      svg {
        color: var(--white);
        height: 14px;
        width: 14px;
        stroke-width: 3px;
      }
    }

    .inactive {
      background: var(--placeholder);
      border-color: var(--placeholder);
      opacity: 1;
      z-index: 1;
    }

    .active {
      background: var(--primary);
      border-color: var(--primary);
      opacity: 0;
      z-index: 0;
    }
  }
}

@media only screen and (width <= 767px) {
  .modern-login {
    .top-logo {
      top: 30px;
    }

    .dark-mode {
      top: 36px;
      inset-inline-end: 44px;
    }

    .is-form {
      padding-top: 100px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .modern-login {
    .top-logo {
      svg {
        height: 60px;
        width: 60px;
      }
    }

    .dark-mode {
      top: -58px;
      inset-inline-end: 30%;
    }

    .columns {
      display: flex;
      height: 100vh;
    }
  }
}

/* ==========================================================================
Dark mode
========================================================================== */

.is-dark {
  .modern-login {
    background: var(--dark-sidebar);

    .underlay {
      background: var(--dark-sidebar-light-10);
    }

    .is-image {
      border-color: var(--dark-sidebar-light-10);
    }

    .is-form {
      .form-text {
        h2 {
          color: var(--primary);
        }
      }

      .login-wrapper {
        .control {
          &.is-flex {
            a:hover {
              color: var(--primary);
            }
          }

          .input {
            background: var(--dark-sidebar-light-4);

            &:focus {
              border-color: var(--primary);

              ~ .autv-icon {
                i {
                  color: var(--primary);
                }
              }
            }
          }

          .auth-label {
            color: var(--light-text);
          }
        }

        .button-wrap {
          &.has-help {
            span {
              color: var(--light-text);

              a {
                color: var(--primary);
              }
            }
          }
        }
      }
    }
  }

  .remember-toggle {
    input {
      &:checked + .toggler {
        border-color: var(--primary);

        > span {
          background: var(--primary);
        }
      }
    }

    .toggler {
      border-color: var(--dark-sidebar-light-12);

      > span {
        background: var(--dark-sidebar-light-12);
      }
    }
  }
}
</style>
