<template>
  <div class="demo-card">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.demo-card {
  @include vuero-s-card;

  position: relative;
  margin-bottom: 1.5rem;

  &.has-more-margin {
    margin-bottom: 3rem;
  }

  &.has-margin-top {
    margin-top: 3rem;
  }

  &.is-narrow {
    margin-bottom: 0;
  }

  .demo-title {
    h3 {
      font-family: var(--font-alt);
      font-size: 1.25rem;
      font-weight: 300;
      margin-bottom: 0.75rem;
      color: var(--dark-text);
      line-height: 1.125;
    }

    p {
      max-width: 540px;

      a {
        font-weight: 500;
        color: var(--primary);
      }
    }
  }

  .code-trigger {
    position: absolute;
    top: 16px;
    right: 20px;
    height: 36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-rounded);
    border: 1px solid var(--fade-grey-dark-3);
    box-shadow: var(--light-box-shadow);
    transition: all 0.3s; // transition-all test

    &:hover {
      svg {
        color: var(--dark-text);
      }
    }

    &.is-active {
      border-color: var(--fade-grey-dark-6);
      transform: rotate(180deg);

      svg {
        color: var(--primary);

        &.open {
          display: none !important;
        }

        &.close {
          display: block !important;
        }
      }
    }

    svg {
      height: 16px;
      width: 16px;
      color: var(--light-text);
      transition: stroke 0.3s;

      &.open {
        display: block !important;
      }

      &.close {
        display: none !important;
        opacity: 1 !important;
      }
    }
  }

  .card-inner {
    padding: 0;

    &.no-padding {
      padding: 0;
    }

    .buttons {
      margin-bottom: 0;
    }

    .is-grouped-multiline,
    .tabs-wrapper,
    .progress,
    .message,
    .snacks,
    .filepond-uploader {
      max-width: 540px;
    }

    .demo-icon-search {
      .input {
        min-width: 260px;

        &:focus {
          min-width: 350px;
        }
      }
    }

    &.is-scrolling {
      .demo-icon-search {
        z-index: 10;
        position: sticky;
        top: 0;
        left: 0;
      }
    }

    .demo-icon-list {
      display: flex;
      flex-wrap: wrap;

      // justify-content: center;

      li {
        width: 20%;
        border-radius: 0.25em;
        transition: background-color 0.2s;
        user-select: none;
        overflow: hidden;
        text-align: center;
        padding: 2rem 1rem;
        cursor: pointer;

        &:hover,
        &:focus {
          background-color: var(--fade-grey-light-5);

          .lnil,
          .lnir,
          .fas,
          .fab {
            transform: scale(1.1);
            color: var(--primary);
          }

          svg {
            transform: scale(1.1);
            color: var(--primary);
          }
        }
      }

      .lnil,
      .lnir,
      .fas,
      .fab {
        color: var(--light-text);
        font-size: 1.6rem;
        transition: all 0.35s;
      }

      svg {
        height: 20px;
        width: 20px;
        stroke-width: 1.8px;
        color: var(--light-text);
        transition: stroke 0.3s;
      }

      input,
      em,
      .icon-unicode {
        display: none;
      }

      .icon.w-grid-2 {
        padding: 4rem 0 !important;
      }

      .icon-name {
        color: var(--light-text);
      }

      .is-copy-trigger {
        position: relative;

        &:focus-visible {
          border-radius: 4px;
          outline-offset: var(--accessibility-focus-outline-offset);
          outline-width: var(--accessibility-focus-outline-width);
          outline-style: var(--accessibility-focus-outline-style);
          outline-color: var(--accessibility-focus-outline-color);
        }

        .is-copied {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 0.8rem;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius);
          background-color: var(--primary);
          color: var(--white);
        }
      }
    }

    .field {
      &.credit-card {
        padding-bottom: 4rem;
      }

      &:not(.credit-card) {
        max-width: 540px;
        flex-wrap: wrap;

        &.is-grouped {
          .control {
            margin-bottom: 0.75rem;
          }
        }

        &.demo-select {
          max-width: 340px;
        }
      }
    }
  }

  .highlight-block {
    margin-top: 20px;
  }

  .content {
    table {
      margin-top: 2rem;

      // background-color: red;

      th {
        font-size: 0.9rem;
        font-weight: 600;
        font-family: var(--font-alt);
        border-bottom: solid 1px var(--border);

        &:first-of-type {
          width: 200px;
        }
      }

      td {
        font-size: 1rem;
        font-weight: 400;
        font-family: var(--font);
        border-bottom: solid 1px var(--border);

        code {
          font-family: var(--font-monospace);

          &:first-child {
            padding-left: 0 !important;
          }
        }

        .is-string {
          code {
            color: var(--red);
          }
        }

        .is-function {
          code {
            color: var(--info);
          }
        }

        .is-number,
        .is-boolean {
          code {
            color: var(--orange);
          }
        }

        .is-null,
        .is-undefined {
          code {
            color: var(--light-blue);
          }
        }

        .is-array {
          code {
            color: var(--dark);
          }
        }
      }
    }
  }
}

.is-dark {
  .demo-card {
    @include vuero-card--dark;

    .demo-title {
      h3 {
        color: var(--dark-dark-text);
      }

      .code-trigger {
        border-color: var(--dark-sidebar-light-14);

        &:hover,
        &:focus {
          svg {
            color: var(--light-text);
          }
        }

        &.is-active {
          border-color: var(--dark-sidebar-light-16);
          background: var(--dark-sidebar-light-12);

          svg {
            color: var(--primary);
          }
        }
      }
    }

    .demo-icon-list {
      li:hover {
        background-color: var(--dark-sidebar-light-10) !important;

        .lnil,
        .lnir,
        .fas,
        .fab {
          color: var(--primary);
        }

        svg {
          color: var(--primary);
        }
      }
    }

    .content {
      table {
        td {
          .is-array {
            code {
              color: var(--primary-grey-light-10);
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .demo-card {
    .demo-title {
      .code-trigger {
        top: 10px;
        right: 12px;
      }
    }

    .field {
      &.is-grouped {
        .control {
          margin-bottom: 0.75rem;
        }
      }
    }
  }
}
</style>
