<script setup lang="ts">
import type { TinySliderInstance } from 'tiny-slider/src/tiny-slider'
import { useHead } from '@vueuse/head'

import { onceImageErrored } from '/@src/utils/via-placeholder'

import sleep from '/@src/utils/sleep'
import { useNotyf } from '/@src/composable/useNotyf'
import { useDarkmode } from '/@src/stores/darkmode'

let slider: TinySliderInstance
const sliderElement = ref<HTMLElement>()
const router = useRouter()
const notyf = useNotyf()
const darkmode = useDarkmode()
const step = ref(0)
const selectedAvatar = ref(2)
const isLoading = ref(false)
const resizeValue = ref(70)
const uploadModalOpen = ref(false)
const avatars = [
  '/images/avatars/svg/vuero-1.svg',
  '/images/avatars/svg/vuero-2.svg',
  '/images/avatars/svg/vuero-3.svg',
  '/images/avatars/svg/vuero-4.svg',
]

const handleSignup = async () => {
  if (!isLoading.value) {
    step.value++
    isLoading.value = true
    sleep(2000)

    notyf.dismissAll()
    notyf.success('Welcome, Erik Kovalsky')
    router.push('/sidebar/dashboards')
    isLoading.value = false
  }
}

const currentAvatar = ref('/images/avatars/svg/vuero-1.svg')

const onAvatarChanged = (info: any) => {
  // direct access to info object
  const indexPrev = info.indexCached
  const indexCurrent = info.index

  // update style based on index
  info.slideItems[indexPrev].classList.remove('active')
  info.slideItems[indexCurrent].classList.add('active')

  if (info.displayIndex) {
    selectedAvatar.value = info.displayIndex - 1
  }
}

useHead({
  title: 'Auth Signup 1 - Vuero',
})

onMounted(() => {
  if (sliderElement.value) {
    import('tiny-slider/src/tiny-slider').then(({ tns }) => {
      slider = tns({
        container: sliderElement.value,
        controls: false,
        nav: false,
        mouseDrag: true,
        startIndex: 2,
        fixedWidth: 100,
        gutter: 40,
        slideBy: 1,
        swipeAngle: false,
        center: false,
        loop: true,
        edgePadding: 325,
      })
      slider.events.on('indexChanged', onAvatarChanged)
      onAvatarChanged(slider.getInfo())
    })
  }
})

onUnmounted(() => {
  if (slider) {
    slider.events.off('indexChanged', onAvatarChanged)
    slider.destroy()
  }
})
</script>

<template>
  <div>
    <div class="signup-nav">
      <div class="signup-nav-inner">
        <RouterLink to="/" class="logo">
          <AnimatedLogo width="36px" height="36px" />
        </RouterLink>
      </div>
    </div>

    <div id="vuero-signup" class="signup-wrapper">
      <div class="signup-steps" :class="[step === 0 && 'is-hidden']">
        <div class="steps-container">
          <div
            class="step-icon is-active"
            :class="[step >= 1 && 'is-active', step < 1 && 'is-inactive']"
          >
            <div class="inner">
              <i aria-hidden="true" class="iconify" data-icon="feather:user"></i>
            </div>
            <span class="step-label">Profile Pic</span>
          </div>
          <div
            class="step-icon"
            :class="[step >= 2 && 'is-active', step < 2 && 'is-inactive']"
          >
            <div class="inner">
              <i aria-hidden="true" class="iconify" data-icon="feather:shield"></i>
            </div>
            <span class="step-label">Account</span>
          </div>
          <div
            class="step-icon"
            :class="[step >= 3 && 'is-active', step < 3 && 'is-inactive']"
          >
            <div class="inner">
              <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
            </div>
            <span class="step-label">Done</span>
          </div>
          <progress class="progress" :value="step - 1" :max="2">25%</progress>
        </div>
      </div>

      <img
        :class="[step > 0 && 'is-hidden']"
        class="card-bg"
        src="/@src/assets/backgrounds/signup/vuero-signup.webp"
        alt=""
      />

      <div class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <!-- Step 1 -->
            <div class="columns signup-columns" :class="[step !== 0 && 'is-hidden']">
              <div class="column is-4 is-offset-1">
                <h1 id="main-signup-title" class="title is-3 signup-title">
                  Become a Vuero
                </h1>
                <h2 id="main-signup-subtitle" class="subtitle signup-subtitle">
                  And simply join an unmatched design experience.
                </h2>
                <div class="signup-card">
                  <form class="signup-form is-mobile-spaced" @submit.prevent>
                    <div class="columns is-multiline">
                      <div class="column is-6">
                        <VField>
                          <VControl>
                            <VInput type="text" autocomplete="given-name" />
                            <VLabel raw class="auth-label">First Name</VLabel>
                          </VControl>
                        </VField>
                      </div>
                      <div class="column is-6">
                        <VField>
                          <VControl>
                            <VInput type="text" autocomplete="family-name" />
                            <VLabel raw class="auth-label">Last Name</VLabel>
                          </VControl>
                        </VField>
                      </div>
                      <div class="column is-12">
                        <VField>
                          <VControl>
                            <VInput type="text" autocomplete="email" />
                            <VLabel raw class="auth-label">Email Address</VLabel>
                          </VControl>
                        </VField>
                      </div>
                      <div class="column is-12">
                        <div class="signup-type">
                          <div class="box-wrap">
                            <input type="radio" name="signup_type" checked />
                            <div class="signup-box">
                              <i aria-hidden="true" class="lnil lnil-coffee-cup"></i>
                              <div class="meta">
                                <span>Free</span>
                                <span>Nice to get started</span>
                              </div>
                            </div>
                          </div>
                          <div class="box-wrap">
                            <input type="radio" name="signup_type" />
                            <div class="signup-box">
                              <i aria-hidden="true" class="lnil lnil-crown-alt-1"></i>
                              <div class="meta">
                                <span>Paid</span>
                                <span>Get a lot more features</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="control is-agree">
                      <span>
                        By continuing you agree to our <a href="#">Terms</a> and
                        <a href="#">Privacy</a>
                      </span>
                    </div>

                    <div class="button-wrap has-help">
                      <VButton
                        color="primary"
                        size="big"
                        bold
                        fullwidth
                        rounded
                        @click="step++"
                      >
                        Continue
                      </VButton>
                      <span>
                        Or
                        <RouterLink to="/auth/login"> Sign In </RouterLink>
                        to your account.
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="columns signup-columns" :class="[step !== 1 && 'is-hidden']">
              <form class="column is-8" @submit.prevent>
                <div class="signup-profile-wrapper">
                  <h1 class="title is-5 signup-title has-text-centered">
                    Add a profile picture
                  </h1>
                  <h2 class="subtitle signup-subtitle has-text-centered">
                    This is your visual identity.
                  </h2>
                  <div class="picture-selector">
                    <div class="image-container">
                      <img :src="currentAvatar" alt="" />
                      <div
                        class="upload-button"
                        role="button"
                        tabindex="0"
                        @keydown.space.prevent="uploadModalOpen = true"
                        @click="uploadModalOpen = true"
                      >
                        <i
                          aria-hidden="true"
                          class="iconify"
                          data-icon="feather:plus"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="divider-container">
                  <div class="divider">
                    <span>Or select an avatar</span>
                  </div>
                </div>

                <div class="avatar-carousel avatar-selector">
                  <div
                    v-for="(avatar, key) in avatars"
                    :key="key"
                    class="carousel-item"
                    :class="currentAvatar === avatar ? 'active' : ''"
                    role="button"
                    tabindex="0"
                    @click="currentAvatar = avatar"
                    @keydown.space.prevent="currentAvatar = avatar"
                  >
                    <div class="image-wrapper">
                      <img :src="avatar" alt="" @error.once="onceImageErrored(150)" />
                    </div>
                  </div>
                </div>
                <div class="button-wrap is-centered has-text-centered">
                  <VButton color="primary" size="big" rounded lower @click="step++">
                    Continue
                  </VButton>
                </div>
              </form>
            </div>

            <!-- Step 3 -->
            <div class="columns signup-columns" :class="[step !== 2 && 'is-hidden']">
              <div class="column is-4 is-offset-4 username-form">
                <h1 class="title is-5 signup-title has-text-centered">Pick a username</h1>
                <h2 class="subtitle signup-subtitle has-text-centered">
                  Your username is how others will find you on Vuero so pick a good one.
                  You can change it later.
                </h2>
                <form class="signup-form" @submit.prevent="handleSignup">
                  <div class="columns is-multiline">
                    <div class="column is-12">
                      <VField>
                        <VControl>
                          <VInput type="text" autocomplete="username" />
                          <VLabel raw class="auth-label">Username</VLabel>
                        </VControl>
                      </VField>
                    </div>
                    <div class="column is-12">
                      <VField>
                        <VControl>
                          <VInput type="password" autocomplete="new-password" />
                          <VLabel raw class="auth-label">Password</VLabel>
                        </VControl>
                      </VField>
                    </div>
                    <div class="column is-12">
                      <VField>
                        <VControl>
                          <VInput type="password" autocomplete="new-password" />
                          <VLabel raw class="auth-label">Confirm Password</VLabel>
                        </VControl>
                      </VField>
                    </div>
                    <div class="column is-12">
                      <VField>
                        <VControl class="has-switch">
                          <VLabel>Send me marketing and transaction emails</VLabel>
                          <VSwitchBlock color="success" checked />
                        </VControl>
                      </VField>
                    </div>
                  </div>

                  <div class="button-wrap is-centered has-text-centered">
                    <VButton
                      size="big"
                      color="primary"
                      type="submit"
                      rounded
                      primary
                      lower
                      :loading="isLoading"
                    >
                      Done
                    </VButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="signup-footer">
      <div class="container">
        <div class="footer-inner">
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
      </div>
    </div>

    <!-- upload modal -->
    <VModal
      :open="uploadModalOpen"
      title="Upload and crop your picture"
      actions="center"
      size="small"
      @close="uploadModalOpen = false"
    >
      <template #content>
        <div class="has-text-centered">
          <div class="upload-demo-wrap"><VAvatar size="big" /></div>

          <small class="help-text">Use the slider to resize the image</small>

          <VField class="resize-handler">
            <VControl>
              <Slider v-model="resizeValue" :tooltips="false" />
            </VControl>
          </VField>
        </div>
      </template>
      <template #cancel><wbr /></template>
      <template #action>
        <VField grouped>
          <VControl>
            <div class="file">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i aria-hidden="true" class="fas fa-cloud-upload-alt"></i>
                  </span>
                  <span class="file-label"> Choose a file… </span>
                </span>
              </label>
            </div>
          </VControl>
          <VControl>
            <VButton class="upload-result" size="big" outlined disabled>
              Confirm
            </VButton>
          </VControl>
        </VField>
      </template>
    </VModal>
  </div>
</template>

<style lang="scss">
.signup-nav {
  position: fixed;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 65px;
  z-index: 99;

  .signup-nav-inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      img {
        display: block;
        min-width: 48px;
        max-width: 48px;
      }
    }
  }
}

.signup-footer {
  position: absolute;
  bottom: 10px;
  inset-inline-start: 0;
  inset-inline-end: 0;

  .footer-inner {
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }

  .dark-mode input + span {
    transform: scale(0.4);
  }
}

.signup-steps {
  position: absolute;
  top: 60px;
  inset-inline-start: 0;
  inset-inline-end: 0;
  margin: 0 auto;
  max-width: 380px;

  .steps-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .progress {
      position: absolute;
      top: 50%;
      inset-inline-start: 0;
      inset-inline-end: 0;
      transform: translateY(-50%);
      width: calc(100% - 80px);
      margin: 0 auto;
      height: 0.35rem !important;
      background-color: var(--white);
      z-index: 0;

      &::-webkit-progress-value {
        background-color: var(--primary);
        transition: width 0.5s ease;
      }

      &::-moz-progress-bar {
        background-color: var(--primary);
        transition: width 0.5s ease;
      }

      &::-ms-fill {
        background-color: var(--primary);
        transition: width 0.5s ease;
      }
    }

    .step-icon {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 46px;
      width: 46px;
      border-radius: var(--radius-rounded);
      background: var(--fade-grey);
      cursor: pointer;
      z-index: 1;

      &.is-active {
        .inner {
          background: var(--white);
          border-color: var(--primary);

          svg {
            color: var(--primary);
          }
        }
      }

      &.is-done {
        .inner {
          background: var(--primary);
          border-color: var(--primary);

          svg {
            color: var(--smoke-white);
          }
        }
      }

      &.is-inactive {
        pointer-events: none;
      }

      .inner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border-radius: var(--radius-rounded);
        border: 2px solid var(--primary-grey);
        background: var(--primary-grey);
      }

      .step-label {
        position: absolute;
        top: 45px;
        inset-inline-start: 0;
        inset-inline-end: 0;
        margin: 0 auto;
        text-align: center;
        min-width: 100px;
        transform: translateX(calc(var(--transform-direction) * -25%));
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--dark-text);
      }

      svg {
        height: 16px;
        width: 16px;
        color: var(--muted-grey);
      }
    }
  }
}

.signup-columns {
  animation: fadeInLeft 0.5s;

  .column.is-8 {
    margin: 0 auto;
  }
}

.signup-wrapper {
  position: relative;
  min-height: 100vh;
  background: var(--fade-grey);

  .card-bg {
    position: absolute;
    inset-inline-end: 0;
    bottom: 0;
    transform: scaleX(calc(var(--transform-direction) * 1));
    display: block;
    width: 90%;
    transition: all 0.3s; // transition-all test

    &.faded {
      opacity: 0;
    }
  }

  .signup-title {
    font-family: var(--font-alt);
    color: var(--dark-text);
  }

  .signup-subtitle {
    font-family: var(--font);
    color: var(--muted-grey);
    font-size: 1rem;
  }

  .hero {
    .hero-body {
      overflow-x: hidden;
    }

    .signup-form {
      .control {
        position: relative;
        width: 100%;

        &.has-switch {
          display: flex;
          align-items: center;

          span {
            display: block;
            color: var(--muted-grey);
          }

          > div {
            margin-inline-start: auto;
            transform: scale(0.8);
          }
        }

        &.is-agree {
          span {
            color: var(--placeholder-dark-8);

            a {
              color: var(--muted-grey);
              font-weight: 500;
              transition: color 0.3s;

              &:hover,
              &:focus {
                color: var(--primary);
              }
            }
          }
        }

        .input {
          padding-top: 10px;
          height: 60px;
          padding-inline-start: 10px;
          border-radius: 8px;
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
          inset-inline-start: 10px;
          font-size: 0.8rem;
          color: var(--dark-text);
          font-weight: 500;
          z-index: 2;
          transition: all 0.3s; // transition-all test
        }

        .autv-icon {
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          height: 60px;
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            font-size: 24px;
            color: var(--placeholder);
            transition: all 0.3s; // transition-all test
          }
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
                color: var(--white) !important;
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
    }

    .button-wrap {
      margin: 20px 0 0;

      &.has-help {
        display: flex;
        align-items: center;

        > span {
          margin-inline-start: 12px;
          font-family: var(--font);

          a {
            color: var(--primary);
            font-weight: 500;
            padding: 0 3px;
          }
        }
      }

      &.is-centered {
        margin-top: 40px;
        text-align: center;

        .button {
          min-width: 180px;
          margin-inline-start: 0 !important;
        }
      }

      .button {
        height: 46px;
        width: 190px;
        margin-inline-start: 6px;

        &:first-child {
          &:hover {
            opacity: 0.95;
            box-shadow: var(--primary-box-shadow);
          }
        }

        &:nth-child(2) {
          color: var(--dark-text);
          border-color: var(--placeholder);
        }
      }
    }

    .signup-type {
      display: flex;
      align-items: center;

      // margin-top: 16px;

      .box-wrap {
        width: 100%;
        position: relative;

        input {
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;

          &:checked + .signup-box {
            border-color: var(--primary);

            i {
              color: var(--primary);
            }

            .meta {
              span:first-child {
                color: var(--primary);
              }
            }
          }
        }

        .signup-box {
          display: flex;
          align-items: center;
          padding: 12px;
          background: var(--white);
          border: 1px solid var(--fade-grey-dark-3);
          border-radius: var(--radius-large);
          transition: all 0.3s; // transition-all test

          i {
            font-size: 2rem;
            color: var(--muted-grey);
          }

          .meta {
            margin-inline-start: 10px;

            span {
              display: block;

              &:first-child {
                font-size: 0.85rem;
                font-weight: 500;
                color: var(--dark-text);
              }

              &:nth-child(2) {
                font-size: 0.8rem;
                color: var(--muted-grey);
              }
            }
          }
        }

        &:first-child {
          margin-inline-end: 6px;
        }

        &:nth-child(2) {
          margin-inline-start: 6px;
        }
      }
    }
  }
}

.signup-profile-wrapper {
  padding: 80px 60px 10px;

  .title,
  .subtitle {
    text-align: center;
  }

  .title {
    font-family: var(--font-alt);
    font-size: 1.4rem;
  }

  .subtitle {
    font-family: var(--font);
    font-size: 1rem;
  }

  .picture-selector,
  .skill-picture-selector {
    width: 100%;
    text-align: center;

    .image-container {
      position: relative;
      width: 140px;
      height: 140px;
      margin: 10px auto;
      border-radius: var(--radius-rounded);

      img {
        width: 140px;
        height: 140px;
        border-radius: var(--radius-rounded);
        display: block;
        border: 4px solid #e8e8e8;
        margin-inline-start: -1px;
      }

      .upload-button {
        position: absolute;
        bottom: 18px;
        inset-inline-end: 0;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--white);
        border-radius: var(--radius-rounded);
        border: 1px solid var(--fade-grey-dark-4);
        z-index: 5;
        transition: all 0.3s; // transition-all test
        cursor: pointer;

        &:hover,
        &:focus {
          box-shadow: var(--light-box-shadow);
        }

        svg {
          height: 16px;
          width: 16px;
          color: var(--dark-text);
        }
      }
    }
  }
}

.avatar-carousel,
.avatar-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  .carousel-item {
    position: relative;
    flex-shrink: 0;
    cursor: pointer;
    margin: 2rem 0;
    width: 25%;

    &:hover {
      img {
        opacity: 0.9;
      }
    }

    &.active {
      img {
        transform: scale(1);
        border: 3px solid var(--primary);
        opacity: 1;
        filter: grayscale(0);
      }
    }
  }

  .image-wrapper {
    position: relative;
    height: 80px;
    width: 80px;
    margin: 0 auto;

    &.is-smaller img {
      height: 80px;
      width: 80px;
    }

    img {
      height: 80px;
      width: 80px;
      border-radius: var(--radius-rounded);
      margin: 0 auto;
      filter: grayscale(1);
      opacity: 0.6;
      transition: all 0.3s; // transition-all test
    }
  }

  .tns-item {
    max-width: 120px;
    text-align: center;
    cursor: pointer;

    img {
      opacity: 0.6;
      border: 4px solid transparent;
      transform: scale(0.75);
    }

    &.active {
      img {
        opacity: 1;
        transform: scale(1);
        border: 2px solid var(--primary);
      }
    }
  }

  .slick-dots {
    bottom: -60px !important;
  }

  .slick-prev::before,
  .slick-next::before {
    color: var(--muted-grey);
  }

  .slick-custom {
    position: absolute;
    top: calc(50% - 15px);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--fade-grey);
    width: 30px;
    height: 30px;
    background: var(--white);
    border-radius: 100px;
    cursor: pointer;
    color: var(--dark-text);
    transition: all 0.3s; // transition-all test
    z-index: 25;
    opacity: 0;

    svg {
      height: 16px;
      width: 16px;
      color: var(--primary);
      transition: all 0.3s; // transition-all test
    }

    &:hover {
      border-color: var(--fade-grey-dark-4);
      color: var(--white);
      box-shadow: var(--light-box-shadow);
    }

    &.is-prev {
      inset-inline-start: -6px;
    }

    &.is-next {
      inset-inline-end: -6px;
    }
  }
}

.resize-handler {
  max-width: 200px;
  margin: 7px auto 10px;
}

.username-form {
  padding-top: 80px;
}

.is-dark {
  .signup-wrapper {
    background: var(--dark-sidebar-light-10);
  }

  .signup-steps {
    .steps-container {
      .progress {
        &::-webkit-progress-value {
          background: var(--primary);
        }

        &::-moz-progress-bar {
          background: var(--primary);
        }

        &::-ms-fill {
          background: var(--primary);
        }
      }

      .step-icon {
        background: var(--dark-sidebar-light-7);

        &.is-active {
          background: var(--dark-sidebar-light-16);

          .inner {
            background: var(--primary);

            svg {
              color: var(--white);
              stroke: var(--white);
            }
          }

          .step-label {
            color: var(--primary);
            opacity: 1;
          }
        }

        .inner {
          background: var(--dark-sidebar-light-9);
          border-color: var(--dark-sidebar-light-9);
        }

        .step-label {
          color: var(--dark-dark-text);
          opacity: 0.6;
        }
      }
    }
  }

  .hero {
    .signup-form {
      .control {
        .auth-label {
          color: var(--light-text);
        }

        .input {
          &:focus {
            background: var(--dark-sidebar-dark-4);
            border-color: var(--dark-sidebar-light-12);

            ~ .auth-label,
            ~ .auth-icon i {
              color: var(--primary);
            }
          }
        }
      }

      .signup-type {
        .box-wrap {
          input {
            &:checked + .signup-box {
              border-color: var(--primary);

              i {
                color: var(--primary);
              }

              .meta {
                span:first-child {
                  color: var(--primary);
                }
              }
            }
          }

          .signup-box {
            background-color: var(--dark-sidebar-light-2);
            border-color: var(--dark-sidebar-light-4);

            .meta {
              span:first-child {
                color: var(--dark-dark-text);
              }
            }
          }
        }
      }

      .button-wrap {
        &.has-help {
          > span {
            color: var(--light-text);

            a {
              color: var(--primary);
            }
          }
        }
      }
    }
  }

  .signup-profile-wrapper {
    .picture-selector {
      .image-container {
        img {
          border-color: var(--dark-sidebar-light-10);
        }

        .upload-button {
          background-color: var(--dark-sidebar-light-2);
          border-color: var(--dark-sidebar-light-10);

          svg {
            color: var(--light-text);
            stroke: var(--light-text);
          }
        }
      }
    }
  }

  .divider-container {
    .divider {
      span {
        &::before,
        &::after {
          border-color: var(--dark-sidebar-light-18);
        }
      }
    }
  }

  .avatar-carousel {
    .slick-slide {
      &.slick-current {
        img {
          border-color: var(--primary);
        }
      }
    }

    .slick-custom {
      background-color: var(--dark-sidebar-light-2);
      border-color: var(--dark-sidebar-light-10);

      &::before,
      &::after {
        color: var(--light-text);
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .signup-steps {
    .steps-container {
      padding: 0 1rem;

      .step-icon {
        .step-label {
          display: none;
        }
      }
    }
  }

  .signup-wrapper {
    .card-bg {
      bottom: -75px;
    }

    .columns {
      padding: 0;
      text-align: center;
    }

    .signup-columns {
      max-width: 100vw;
    }

    .signup-subtitle {
      max-width: 330px;
      margin-inline-start: auto;
      margin-inline-end: auto;
    }

    .avatar-selector {
      .carousel-item {
        width: 50%;
      }
    }

    .button-wrap {
      margin-top: 10px !important;

      &.has-help {
        justify-content: center;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .signup-wrapper {
    .card-bg {
      bottom: -75px;
    }

    .columns {
      padding: 0 80px;
      text-align: center;
    }

    .signup-columns {
      max-width: 100vw;
    }

    .signup-subtitle {
      max-width: 330px;
      margin-inline-start: auto;
      margin-inline-end: auto;
    }

    .button-wrap {
      &.has-help {
        justify-content: center;
      }
    }
  }
}
</style>
