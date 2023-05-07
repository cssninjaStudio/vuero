<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useWizard } from '/@src/composable/useWizard'

const wizard = useWizard()

useHead({
  title: computed(() => `${wizard.stepTitle} - Wizard V1 - Vuero`),
})
</script>

<template>
  <MinimalLayout>
    <!--Wizard Navbar-->
    <WizardV1Navigation v-model:step="wizard.step" :title="wizard.stepTitle" />

    <!--Wizard Progress Bar-->
    <VProgress
      id="wizard-progress"
      class="wizard-progress"
      color="primary"
      size="smaller"
      :value="(wizard.step / 8) * 100"
      :max="100"
    />

    <!--Main Wrapper-->
    <form class="wizard-v1-wrapper" @submit.prevent="() => wizard?.validateStepFn?.()">
      <RouterView />

      <!--Wizard Navigation Buttons-->
      <div class="wizard-buttons" :class="[wizard.canNavigate && 'is-active']">
        <div class="wizard-buttons-inner">
          <VButton
            class="wizard-button-previous"
            :disabled="wizard.previousStepFn === null"
            :color="wizard.previousStepFn === null ? 'light' : 'primary'"
            bold
            elevated
            @click="() => wizard?.previousStepFn?.()"
          >
            Previous
          </VButton>
          <VButton
            type="submit"
            class="wizard-button-previous"
            :disabled="wizard.validateStepFn === null"
            :color="wizard.validateStepFn === null ? 'light' : 'primary'"
            bold
            elevated
          >
            Validate
          </VButton>
        </div>
      </div>
    </form>
  </MinimalLayout>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

/* ==========================================================================
1. Wizard V1 Navigation
========================================================================== */

.wizard-progress {
  position: fixed;
  top: 60px;
  inset-inline-start: 0;
  z-index: 19;
  width: 100%;
  height: 0.5rem;

  &::-webkit-progress-value {
    border-start-end-radius: 50px;
    border-end-end-radius: 50px;
    transition: width 0.5s ease;
  }

  &::-moz-progress-bar {
    border-start-end-radius: 50px;
    border-end-end-radius: 50px;
    transition: width 0.5s ease;
  }

  &::-ms-fill {
    border-start-end-radius: 50px;
    border-end-end-radius: 50px;
    transition: width 0.5s ease;
  }
}

.wizard-buttons {
  position: fixed;
  bottom: 20px;
  inset-inline-start: 0;
  inset-inline-end: 0;
  margin: 0 auto;
  max-width: 306px;
  background: var(--white);
  border: 1px solid var(--fade-grey-dark-3);
  border-radius: 14px;
  transform: translateY(120px);
  transition: all 0.3s; // transition-all test
  z-index: 5;

  &.is-active {
    transform: translateY(0);
  }

  .wizard-buttons-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    .button {
      min-width: 130px;
      margin: 0 4px;
      border-radius: 8px;
    }
  }
}

/* ==========================================================================
2. Wizard V1
========================================================================== */
.wizard-v1-wrapper {
  padding-top: 60px;
  padding-bottom: 60px;

  .inner-wrapper {
    display: none;
    animation: fadeInLeft 0.5s;
    padding: 40px 20px;

    &.is-active {
      display: block;
    }

    .step-title {
      margin-bottom: 30px;
      text-align: center;

      h2 {
        font-family: var(--font-alt);
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--dark-text);
        text-align: center;
      }

      p {
        font-family: var(--font);
        font-size: 1.2rem;
      }
    }
  }

  .step-content {
    .project-preview-wrapper {
      position: relative;

      .project-preview-loader {
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background: #f2f2f2;
        opacity: 0;
        pointer-events: none;
        z-index: 2;
        transition: all 0.3s; // transition-all test

        &.is-active {
          opacity: 1;
          pointer-events: all;
        }

        .loader {
          position: relative;
          top: 60px;
          height: 5rem;
          width: 5rem;
        }
      }

      .project-preview-header {
        text-align: center;
        max-width: 320px;
        margin: 0 auto;

        > img {
          display: block;
          margin: 0 auto;
          max-width: 300px;
        }

        .v-avatar {
          position: relative;
          margin: 0 auto 12px;

          .edit-icon {
            position: absolute;
            bottom: 2px;
            inset-inline-end: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;
            border-radius: var(--radius-rounded);
            background: var(--white);
            border: 1px solid var(--fade-grey-dark-3);
            z-index: 1;
            transition: all 0.3s; // transition-all test

            i {
              color: var(--light-text);
              font-size: 0.9rem;
            }
          }
        }

        h3 {
          &:hover {
            .edit-icon {
              opacity: 1;
              pointer-events: all;
            }
          }

          .edit-icon {
            pointer-events: none;
            opacity: 0;
            font-size: 16px;
            color: var(--light-text);
            transition: all 0.3s; // transition-all test
          }
        }

        p {
          font-size: 1rem;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.3;
        }
      }

      .project-preview-body {
        max-width: 640px;
        margin: 20px auto;

        .edit-box {
          position: relative;

          @include vuero-l-card;

          &:hover,
          &:focus {
            border-color: var(--primary);
            box-shadow: var(--light-box-shadow);

            .edit-icon {
              opacity: 1;
              pointer-events: all;
            }
          }

          .edit-box-placeholder {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: var(--font);
            color: var(--light-text);

            &.is-media {
              padding: 14px 0;
            }

            &.is-list {
              padding: 20px 0;
            }
          }

          .edit-icon {
            position: absolute;
            top: 10px;
            inset-inline-end: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 24px;
            width: 24px;
            border-radius: var(--radius-rounded);
            background: var(--fade-grey-light-3);
            opacity: 0;
            pointer-events: none;
            cursor: pointer;
            transition: all 0.3s; // transition-all test

            i {
              font-size: 0.8rem;
            }
          }

          h4 {
            text-transform: uppercase;
            font-size: 0.8rem;
            font-family: var(--font);
            font-weight: 600;
            color: var(--dark-text);
            margin-bottom: 12px;
          }

          > .media-flex-center {
            margin-bottom: 0;
          }

          .estimated-budget,
          .estimated-due-date,
          .attachments-count {
            height: 130px;
            display: flex;
            align-items: center;
            justify-content: center;

            .inner-block {
              text-align: center;

              .budget,
              .attachments {
                color: var(--primary);
                font-family: var(--font);
                font-size: 2rem;
                font-weight: 600;
                line-height: 1.4;
              }

              .date {
                color: var(--primary);
                font-family: var(--font);
                font-size: 1.3rem;
                font-weight: 500;
                line-height: 1.4;
              }

              p {
                text-transform: uppercase;
                font-weight: 500;
                font-size: 0.8rem;
              }
            }
          }

          .media-list {
            padding-top: 10px;

            .media-list-item {
              margin-bottom: 12px;

              .media-flex-center {
                .flex-meta {
                  span {
                    &:first-child {
                      font-weight: 500;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .end-placeholder {
      padding: 12px 0;

      .button {
        min-width: 160px;
      }
    }

    .tools-wrapper {
      max-width: 840px;
      margin: 0 auto;

      .tool-card {
        position: relative;

        input {
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          cursor: pointer;

          &:checked + .tool-card-inner {
            border-color: var(--primary);

            .flex-end {
              .checkmark {
                opacity: 1;
              }
            }
          }
        }

        .tool-card-inner {
          padding: 12px;
          background: var(--white);
          border: 1px solid var(--fade-grey-dark-3);
          border-radius: 10px;

          .media-flex-center {
            .flex-end {
              .checkmark {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 28px;
                width: 28px;
                border: 1px solid var(--fade-grey-dark-3);
                border-radius: var(--radius-rounded);
                box-shadow: var(--light-box-shadow);
                opacity: 0;
                color: var(--primary);
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;

                svg {
                  height: 14px;
                  width: 14px;
                  stroke-width: 3px;
                }
              }
            }
          }
        }
      }
    }

    .project-team-wrapper {
      .project-team-header {
        text-align: center;
        max-width: 320px;
        margin: 0 auto;

        .field {
          text-align: left;

          .control {
            .input {
              border-radius: 10px;
            }
          }
        }

        > img {
          display: block;
          margin: 0 auto;
          max-width: 300px;
        }

        .v-avatar {
          margin: 0 auto 12px;
        }

        p {
          font-size: 1rem;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.3;
        }
      }

      .project-team-body {
        max-width: 540px;
        margin: 20px auto;

        .members-list {
          .empty-wrap {
            height: 110px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              font-family: var(--font);
              color: var(--light-text);
            }
          }

          .invited-member {
            position: relative;
            display: flex;
            align-items: center;
            background: var(--white);
            padding: 12px;
            border: 1px solid var(--fade-grey-dark-3);
            border-radius: 12px;
            margin-bottom: 12px;
            text-align: inset-inline-start;

            > img {
              display: block;
              width: 80px;
              height: 80px;
              border-radius: var(--radius-rounded);
              margin: 0 auto;
            }

            .meta {
              margin-inline-start: 12px;
              line-height: 1.1;

              > span {
                display: block;
                font-family: var(--font);
                font-size: 0.8rem;
                text-transform: uppercase;
                color: var(--light-text);
                padding: 8px 0 0;
              }

              > p {
                font-family: var(--font);
                margin-bottom: 0;
                font-weight: 500;
                color: var(--dark-text);
              }
            }

            .actions {
              margin-inline-start: auto;
              display: flex;
              align-items: center;

              .permissions {
                margin-inline-end: 30px;
                width: 180px;

                .permission-levels {
                  position: relative;
                  display: flex;
                  justify-content: space-between;

                  .permission-level {
                    position: relative;
                    cursor: pointer;
                    z-index: 1;

                    .permission-level-inner {
                      height: 11px;
                      width: 11px;
                      border-radius: var(--radius-rounded);
                      background: var(--placeholder);
                      transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                        height 0.3s, width 0.3s;

                      &.is-active {
                        background: var(--primary);
                        transform: scale(1.1);
                      }
                    }
                  }

                  .permissions-progress {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    margin-bottom: 0;
                    z-index: 0;

                    &::-webkit-progress-value {
                      transition: width 0.5s ease;
                    }

                    &::-moz-progress-bar {
                      transition: width 0.5s ease;
                    }

                    &::-ms-fill {
                      transition: width 0.5s ease;
                    }
                  }
                }
              }

              .cancel-button {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 34px;
                width: 34px;
                border: 1px solid var(--fade-grey-dark-3);
                box-shadow: var(--light-box-shadow);
                background: var(--white);
                padding: 0;
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;

                i {
                  font-size: 12px;
                  color: var(--light-text);
                }
              }
            }
          }
        }
      }
    }

    .page-placeholder {
      align-items: flex-start;

      img {
        max-width: 210px;

        &.is-rounded {
          border-radius: var(--radius-rounded);
        }
      }
    }

    .uploader {
      max-width: 640px;
      margin: 0 auto;

      progress {
        vertical-align: baseline;
      }

      .progress {
        display: flex;
        height: 0.5rem;
        overflow: hidden;
        font-size: 0.75rem;
        background-color: #e9ecef;
        border-radius: 0.25rem;

        .progress-bar {
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          color: var(--white);
          text-align: center;
          background-color: var(--secondary);
          transition: width 0.6s ease;
        }

        .progress-bar-striped {
          background-image: linear-gradient(
            45deg,
            rgb(255 255 255 / 15%) 25%,
            transparent 25%,
            transparent 50%,
            rgb(255 255 255 / 15%) 50%,
            rgb(255 255 255 / 15%) 75%,
            transparent 75%,
            transparent
          );
          background-size: 1rem 1rem;
        }

        .progress-bar-animated {
          animation: progress-bar-stripes 1s linear infinite;
        }

        @keyframes progress-bar-stripes {
          from {
            background-position: 1rem 0;
          }

          to {
            background-position: 0 0;
          }
        }
      }

      .uploader-toolbar {
        display: flex;
        justify-content: space-between;
        margin: 0 0 20px;

        .left {
          .uploader-actions {
            @include vuero-l-card;

            display: flex;
            padding: 10px 16px;
            min-width: 180px;

            .uploader-action {
              display: flex;
              justify-content: center;
              align-items: center;
              flex: 1 1 0;

              .inner-action {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 32px;
                width: 32px;
                min-width: 32px;
                border-radius: var(--radius-rounded);
                color: var(--light-text-light-12);
                border: none;
                background: none;
                cursor: pointer;
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;

                &:hover,
                &:focus:not(.is-active) {
                  background: var(--fade-grey-light-3);
                  color: var(--light-text);
                }

                svg {
                  height: 18px;
                  width: 18px;
                  transition: stroke 0.3s;
                }
              }
            }
          }
        }

        .right {
          .fileupload-process {
            #total-progress {
              opacity: 0;
              transition: opacity 0.3s linear;
            }
          }
        }
      }

      .uploader-container {
        margin-bottom: 20px;

        .upload-wrapper {
          position: relative;

          .upload-box {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--white);
            height: 120px;
            border-radius: 3px;
            padding: 8px;
            border: 2px dashed var(--fade-grey-dark-4);
            cursor: pointer;
            transition: all 0.3s; // transition-all test

            &:hover {
              border-color: var(--primary);

              .uploader-label {
                .lnil {
                  color: var(--primary);
                }
              }
            }

            .uploader-label {
              margin: 0 auto;
              text-align: center;

              h3 {
                font-family: var(--font);
                color: var(--light-text);
              }

              .lnil {
                font-size: 2.4rem;
                color: var(--placeholder);
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;
              }
            }
          }
        }
      }

      .template-list {
        .template-list-item {
          /* Hide the progress bar when finished */
          &.dz-success {
            .preview-box {
              .list-item-progress {
                .progress {
                  // opacity: 0;
                  transition: opacity 0.3s linear;
                }
              }

              .list-item-actions {
                /* Hide the start and cancel buttons and show the delete button */
                .start,
                .cancel {
                  display: none;
                }

                .delete {
                  display: block;
                }
              }
            }
          }

          .preview-box {
            display: flex;
            align-items: center;
            background: var(--white);
            width: 100%;
            border-radius: 12px;
            padding: 12px;
            border: 1px solid var(--fade-grey);
            margin-bottom: 16px;

            .preview {
              img {
                height: 50px;
                max-width: 50px;
                min-width: 50px;
                border-radius: var(--radius-rounded);
                object-fit: cover;
              }

              .icon {
                height: 50px;
                width: 50px;
                min-width: 50px;
                max-width: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;

                svg {
                  width: 28px;
                  height: 28px;
                }
              }
            }

            .list-item-meta {
              margin-inline-start: 12px;

              p {
                font-family: var(--font);

                &:first-child {
                  font-weight: 500;
                  font-size: 1.1rem;
                  color: var(--dark-text);
                }
              }
            }

            .list-item-progress {
              margin-inline-start: auto;
              margin-inline-end: 30px;
              min-width: 120px;

              .progress {
                .progress-bar {
                  width: 0%;
                }
              }
            }

            .list-item-actions {
              display: flex;

              .list-item-action {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 32px;
                min-height: 32px;
                width: 32px;
                min-width: 32px;
                border-radius: var(--radius-rounded);
                color: var(--light-text-light-12);
                border: none;
                background: none;
                cursor: pointer;
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;

                &:hover,
                &:focus:not(.is-active) {
                  background: var(--fade-grey-light-3);
                  color: var(--light-text);
                }

                svg {
                  height: 18px;
                  width: 18px;
                  transition: stroke 0.3s;
                }
              }

              /* Hide the delete button initially */
              .delete {
                display: none;

                &::before,
                &::after {
                  display: none !important;
                }
              }
            }
          }
        }
      }
    }

    .project-info {
      .project-info-head {
        .project-avatar-upload {
          text-align: center;

          .filepond-profile-wrap {
            display: block;
            margin: 0 auto 4px;

            /* stylelint-disable-next-line selector-class-pattern */
            .filepond--drop-label {
              background: var(--white);
              cursor: pointer;
            }
          }

          p {
            span {
              display: block;

              &:nth-child(2) {
                font-size: 0.9rem;
              }
            }
          }
        }

        .project-info {
          max-width: 480px;
          margin: 10px auto;

          .project-name {
            margin-bottom: 10px;

            .field {
              .control {
                .input {
                  font-family: var(--font);
                  text-align: center;
                  font-size: 1.2rem;
                  height: 50px;
                  padding: 0;
                  border-radius: 10px;
                }
              }
            }
          }

          .project-description {
            .field {
              .control {
                .textarea {
                  border-radius: 10px;
                  resize: none;
                }
              }
            }
          }
        }
      }
    }

    .project-dates {
      background: var(--white);
      padding: 16px;
      border: 1px solid var(--fade-grey-dark-3);
      border-radius: 14px;
      max-width: 380px;
      margin: 20px auto;

      > h4 {
        font-family: var(--font);
        font-size: 0.8rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 8px;
        color: var(--light-text);
      }

      .project-dates-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .separator {
          height: 25px;
          width: 2px;
          border-inline-end: 1px solid var(--fade-grey-dark-3);
          margin: 0 12px;
        }

        .project-date {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 2;

          .date-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 28px;
            width: 28px;
            color: var(--light-text);

            svg {
              height: 18px;
              width: 18px;
            }
          }

          .control {
            max-width: 100px;

            .input {
              border: none;
              background: none;
              box-shadow: none;
              padding-inline-start: 4px;
              font-family: var(--font);
            }
          }
        }
      }
    }

    .project-budget {
      background: var(--white);
      padding: 16px;
      border: 1px solid var(--fade-grey-dark-3);
      border-radius: 14px;
      max-width: 380px;
      margin: 20px auto;

      > h4 {
        font-family: var(--font);
        font-size: 0.8rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 16px;
        color: var(--light-text);
      }

      .project-budget-inner {
        display: flex;

        .budget-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 1 0;

          .budget-item-inner {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            width: 65px;
            min-width: 50px;
            border: 1px solid var(--fade-grey-dark-3);
            border-radius: 12px;
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text-light-12);
            margin: 0 8px;
            transition: all 0.3s; // transition-all test

            &:hover:not(.is-active) {
              // background: var(--fade-grey-light-3);
              color: var(--light-text);
            }

            &.is-active {
              background: var(--primary);
              border-color: var(--primary);
              color: var(--smoke-white);
              box-shadow: var(--primary-box-shadow);
            }
          }
        }
      }
    }

    .project-customer {
      background: var(--white);
      padding: 16px;
      border: 1px solid var(--fade-grey-dark-3);
      border-radius: 14px;
      max-width: 380px;
      margin: 20px auto;

      > h4 {
        font-family: var(--font);
        font-size: 0.8rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 16px;
        color: var(--light-text);
      }

      .field {
        .control {
          width: 100%;

          .input {
            width: 100%;
            border: none;
            background: none;
            box-shadow: none;
          }
        }
      }

      .media-flex,
      .media-flex-center {
        .v-avatar {
          .avatar {
            border: 1px solid var(--fade-grey-dark-3);
          }
        }
      }
    }

    .wizard-types {
      max-width: 1100px;
      margin: 0 auto;

      .wizard-card {
        @include vuero-l-card;

        text-align: center;
        background: none;
        border: 1px solid transparent;
        padding: 30px;
        transition: all 0.3s; // transition-all test

        &:hover {
          background: var(--white);
          border-color: var(--fade-grey-light-3);
          box-shadow: var(--light-box-shadow);

          .learn-more-link {
            a {
              opacity: 1;
              pointer-events: all;
            }
          }
        }

        img {
          display: block;
          max-width: 100%;
          margin: 0 auto;
          border-radius: 14px;
        }

        h3 {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--dark-text);
          text-align: center;
          margin: 16px 0 0;
        }

        p {
          font-size: 1.1rem;
          font-family: var(--font);
          color: var(--light-text);
          text-align: center;
          max-width: 240px;
          margin: 0 auto 20px;
        }

        .button-wrap {
          text-align: center;

          .button {
            margin: 0 auto;
            min-width: 140px;
          }
        }

        .learn-more-link {
          text-align: center;
          padding: 16px 0;

          a {
            text-transform: uppercase;
            font-size: 0.8rem;
            font-weight: 500;
            font-family: var(--font);
            color: var(--light-text);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s; // transition-all test

            &:hover {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
3. Wizard V1 Dark mode
========================================================================== */

.is-dark {
  .wizard-navigation {
    background: var(--dark-sidebar-dark-2);
    border-color: var(--dark-sidebar-light-12);

    .navbar-item {
      &.is-wizard-title {
        border-color: var(--dark-sidebar-light-12);

        .title-wrap {
          color: var(--dark-dark-text);
        }
      }

      &.is-dark-mode {
        .navbar-icon {
          background: var(--dark-sidebar-light-6);
          border-color: var(--dark-sidebar-light-12);
        }
      }
    }

    .wizard-dropdown,
    .user-dropdown {
      .dropdown-menu {
        border-color: var(--dark-sidebar-light-12);
      }
    }
  }

  .wizard-buttons {
    background: var(--dark-sidebar-light-1);
    border-color: var(--dark-sidebar-light-10);

    .button {
      &.is-light {
        background: var(--dark-sidebar-light-4);
        border-color: var(--dark-sidebar-light-12);
        color: var(--dark-dark-text);

        &:hover,
        &:focus {
          color: var(--primary);
          border-color: var(--primary);
        }
      }
    }
  }

  .wizard-v1-wrapper {
    .step-content {
      .project-preview-wrapper {
        .project-preview-loader {
          background: var(--dark-sidebar-light-10);
        }

        .project-preview-header {
          .v-avatar {
            .edit-icon {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-light-6);
            }
          }
        }

        .project-preview-body {
          .edit-box {
            @include vuero-card--dark;

            > h4 {
              color: var(--dark-dark-text);
            }

            .edit-icon {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-light-2);

              i {
                color: var(--light-text);
              }
            }

            .estimated-budget,
            .estimated-due-date,
            .attachments {
              > span,
              .date,
              .budget {
                color: var(--primary);
              }
            }
          }
        }
      }

      .tools-wrapper {
        .tool-card {
          input:checked + .tool-card-inner {
            border-color: var(--primary) !important;
          }

          .tool-card-inner {
            border-color: var(--dark-sidebar-light-12);
            background: var(--dark-sidebar-light-6);

            .media-flex-center {
              .flex-end {
                .checkmark {
                  border-color: var(--dark-sidebar-light-12);
                  background: var(--dark-sidebar-light-2);
                  color: var(--primary);
                }
              }
            }
          }
        }
      }

      .project-team-wrapper {
        .project-team-body {
          .members-list {
            .invited-member {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-light-6);

              .actions {
                .permissions {
                  .permission-levels {
                    .permission-level {
                      .permission-level-inner {
                        background: var(--dark-sidebar-light-18);

                        &.is-active {
                          background: var(--primary);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      .uploader {
        .uploader-toolbar {
          .left {
            .uploader-actions {
              .uploader-action {
                .inner-action {
                  &:hover {
                    background: var(--dark-sidebar-light-14);
                  }
                }
              }
            }
          }
        }

        .uploader-container {
          .upload-wrapper {
            .upload-box {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-light-2);

              &:hover,
              &:focus {
                border-color: var(--primary);

                .uploader-label {
                  i {
                    color: var(--primary);
                  }
                }
              }
            }
          }
        }

        .template-list {
          .template-list-item {
            .preview-box {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-light-6);

              .list-item-meta {
                .name {
                  color: var(--dark-dark-text);
                }
              }

              .list-item-progress {
                .size strong {
                  color: var(--dark-dark-text);
                }

                .progress {
                  background: var(--dark-sidebar-light-2);
                }
              }

              .list-item-actions {
                .list-item-action {
                  &:hover {
                    background: var(--dark-sidebar-light-12);
                  }
                }
              }
            }
          }
        }
      }

      .input {
        &.is-dark-focus:focus {
          border-color: var(--primary) !important;
        }
      }

      .wizard-types {
        .wizard-card {
          background: none;
          border-color: transparent;

          &:hover,
          &:focus {
            background: var(--dark-sidebar-light-6);
            border-color: var(--dark-sidebar-light-12);
          }
        }
      }

      .project-info {
        .project-info-head {
          .project-avatar-upload {
            .filepond-profile-wrap {
              /* stylelint-disable-next-line selector-class-pattern */
              .filepond--drop-label {
                background: var(--dark-sidebar-light-2);
              }
            }
          }
        }
      }

      .project-customer {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);

        .media-flex-center {
          .v-avatar {
            .avatar {
              border-color: var(--dark-sidebar-light-12);
            }
          }
        }
      }

      .project-dates {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);

        .project-dates-inner {
          .separator {
            border-color: var(--dark-sidebar-light-20);
          }
        }
      }

      .project-budget {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);

        .project-budget-inner {
          .budget-item {
            .budget-item-inner {
              background: var(--dark-sidebar-light-4);
              border-color: var(--dark-sidebar-light-12);

              &.is-active {
                border-color: var(--primary);
                background: var(--primary);
                box-shadow: var(--primary-box-shadow);
              }
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
4. Media Queries
========================================================================== */

@media only screen and (width <= 767px) {
  .wizard-navigation {
    .navbar-item {
      &.is-wizard-title {
        .title-wrap {
          span {
            display: none;
          }
        }
      }
    }
  }

  .wizard-v1-wrapper {
    .step-content {
      .project-budget {
        .project-budget-inner {
          .budget-item {
            .budget-item-inner {
              width: 58px;
            }
          }
        }
      }

      .uploader {
        .template-list {
          .template-list-item {
            .preview-box {
              .list-item-progress {
                min-width: 80px;
                max-width: 80px;
                margin-inline-end: 20px;
              }
            }
          }
        }
      }

      .project-team-wrapper {
        .project-team-body {
          .members-list {
            .invited-member {
              position: relative;
              flex-direction: column;
              padding: 30px;

              .meta {
                margin-bottom: 10px;

                p {
                  font-size: 1.2rem;
                }
              }

              .actions {
                margin: 10px auto;

                .permissions {
                  margin: 0;
                }

                .button {
                  &.is-circle {
                    position: absolute;
                    top: 10px;
                    inset-inline-end: 10px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .wizard-v1-wrapper {
    .step-content {
      .wizard-types {
        .columns {
          display: flex;
        }
      }

      .tools-wrapper {
        .columns {
          display: flex;

          .column.is-4 {
            min-width: 50% !important;
          }
        }
      }

      .project-preview-wrapper {
        .project-preview-body {
          .columns {
            display: flex;

            .column {
              &.is-tablet-33 {
                min-width: 33.3% !important;
              }

              &.is-tablet-50 {
                min-width: 50% !important;
              }

              &.is-tablet-100 {
                min-width: 100% !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
