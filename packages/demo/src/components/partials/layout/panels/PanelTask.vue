<script setup lang="ts">
import { FocusTrap } from 'focus-trap-vue'

const panels = usePanels()
</script>

<template>
  <Teleport v-if="panels.active === 'task'" to="body">
    <FocusTrap :initial-focus="() => ($refs.closeButton as any)">
      <div class="right-panel-wrapper is-task is-active">
        <div
          class="panel-overlay"
          tabindex="-1"
          role="button"
          @keydown.enter.prevent="panels.close()"
          @click="panels.close()"
        />

        <div class="right-panel">
          <div class="right-panel-head">
            <h3>Task Details</h3>
            <a
              ref="closeButton"
              class="close-panel"
              tabindex="0"
              role="button"
              @keydown.enter.prevent="panels.close()"
              @click="panels.close()"
            >
              <VIcon
                icon="lucide:chevron-right"
              />
            </a>
          </div>
          <div
            class="right-panel-body has-slimscroll"
          >
            <div class="task-group task-overview">
              <h3>Overview</h3>

              <div class="task-description">
                <h4>Build a desktop and mobile landing page wireframe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videmus igitur ut
                  conquiescere ne infantes quidem possint. Duo Reges: constructio interrete...
                  <a>See More</a>
                </p>
              </div>

              <div class="task-participants">
                <h5>Participants</h5>

                <div class="participants-inner">
                  <div class="avatar-stack">
                    <VAvatar picture="https://media.cssninja.io/content/avatars/7.jpg" />
                    <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
                    <VAvatar picture="https://media.cssninja.io/content/avatars/5.jpg" />
                  </div>

                  <button>
                    <VIcon
                      icon="lucide:plus"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div class="task-group">
              <h3>Statistics</h3>
              <div class="task-stats">
                <div class="task-stat">
                  <VIcon
                    icon="lucide:clock"
                  />
                  <span>5 days</span>
                </div>
                <div class="task-stat">
                  <VIcon
                    icon="lucide:file"
                  />
                  <span>3 files</span>
                </div>
                <div class="task-stat">
                  <VIcon
                    icon="lucide:message-circle"
                  />
                  <span>54</span>
                </div>
                <a>
                  <VIcon
                    icon="lucide:plus"
                  />
                  <span>Add Checklist</span>
                </a>
              </div>
            </div>

            <div class="task-group">
              <h3>Files</h3>
              <div class="task-files">
                <div class="file-box">
                  <img
                    src="/images/icons/files/zip-format.svg"
                    alt=""
                  >
                  <div class="meta">
                    <span>Preliminary Sketches</span>
                    <span>3MB <i
                      aria-hidden="true"
                      class="fas fa-circle"
                    /> 5 days ago</span>
                  </div>
                  <FileCardDropdown />
                </div>
                <div class="file-box">
                  <img
                    src="/images/icons/files/sheet.svg"
                    alt=""
                  >
                  <div class="meta">
                    <span>Project Budget</span>
                    <span>0.6MB <i
                      aria-hidden="true"
                      class="fas fa-circle"
                    /> 8 days ago</span>
                  </div>
                  <FileCardDropdown />
                </div>
                <div class="file-box">
                  <img
                    src="/images/icons/files/video.svg"
                    alt=""
                  >
                  <div class="meta">
                    <span>POC Demo</span>
                    <span>8.75MB <i
                      aria-hidden="true"
                      class="fas fa-circle"
                    /> 8 days ago</span>
                  </div>
                  <FileCardDropdown />
                </div>
              </div>
            </div>

            <div class="task-group">
              <h3>Messages</h3>
              <div class="field has-textarea-addon">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="3"
                    placeholder="Send a quick message..."
                  />
                </div>
                <div class="control is-textarea-addon">
                  <div class="start">
                    <div class="avatar-stack">
                      <VAvatar
                        size="small"
                        picture="/images/avatars/svg/vuero-1.svg"
                      />
                    </div>
                  </div>
                  <div class="end">
                    <a class="message-action">
                      <VIcon
                        icon="lucide:smile"
                      />
                    </a>
                    <a class="message-action">
                      <VIcon
                        icon="lucide:at-sign"
                      />
                    </a>
                    <a class="message-action">
                      <VIcon
                        icon="lucide:paperclip"
                      />
                    </a>
                    <a class="button v-button is-primary is-bold is-raised">Send</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  </Teleport>
</template>

<style lang="scss">
.right-panel-wrapper {
  &.is-task {
    .right-panel {
      width: 420px;

      .right-panel-head {
        padding: 0 30px;
      }

      .right-panel-body {
        padding: 0 30px;

        .task-group {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1.6px dashed color-mix(in oklab, var(--fade-grey), black 3%) h3 {
            text-transform: uppercase;
            font-family: var(--font-alt);
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 10px;
          }

          h4 {
            font-family: var(--font-alt);
            font-size: 1rem;
            font-weight: 600;
            color: var(--dark-text);
            margin-bottom: 5px;
          }

          h5 {
            text-transform: uppercase;
            font-family: var(--font);
            font-size: 0.8rem;
            color: var(--light-text);
          }

          .task-description {
            margin-bottom: 20px;

            p {
              margin-bottom: 10px;
              font-size: 0.95rem;

              a {
                text-transform: uppercase;
                font-family: var(--font);
                font-weight: 600;
                font-size: 0.75rem;
                color: var(--light-text);
              }
            }
          }

          .task-participants {
            .participants-inner {
              display: flex;
              align-items: center;
              justify-content: space-between;

              button {
                height: 40px;
                width: 40px;
                border-inline-end: 50%;
                background: none;
                border: 1.8px dashed var(--light-text);
                border-radius: var(--radius-rounded);
                color: var(--light-text);
                cursor: pointer;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition:
                  color 0.3s,
                  background-color 0.3s,
                  border-color 0.3s,
                  height 0.3s,
                  width 0.3s;

                &:hover,
                &:focus {
                  border: 1.8px solid var(--primary);
                  color: var(--primary);
                }

                .iconify {
                  height: 18px;
                  width: 18px;
                }
              }
            }
          }

          .task-stats {
            display: flex;

            *:last-child {
              margin-inline-start: auto;
            }

            .task-stat,
            a {
              display: flex;
              align-items: center;
              color: var(--light-text);

              span {
                margin-inline-start: 3px;
              }

              .iconify {
                height: 18px;
                width: 18px;
              }
            }

            .task-stat {
              margin-inline-end: 15px;
            }

            a {
              text-transform: uppercase;
              font-family: var(--font);
              font-weight: 600;
              font-size: 0.75rem;
              color: var(--primary);

              span {
                margin-inline-start: 5px;
              }

              .iconify {
                height: 14px;
                width: 14px;
                stroke-width: 3px;
              }
            }
          }

          .task-files {
            .file-box {
              display: flex;
              align-items: center;
              padding: 8px;
              background: var(--white);
              border: 1px solid transparent;
              border-radius: 12px;
              cursor: pointer;
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;

              &:hover,
              &:focus {
                border-color: color-mix(in oklab, var(--fade-grey), black 3%);
                box-shadow: var(--light-box-shadow);
              }

              img {
                display: block;
                width: 38px;
                min-width: 38px;
                height: 38px;
              }

              .meta {
                margin-inline-start: 12px;
                line-height: 1.3;

                span {
                  display: block;

                  &:first-child {
                    font-family: var(--font-alt);
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--dark-text);
                  }

                  &:nth-child(2) {
                    font-size: 0.9rem;
                    color: var(--light-text);

                    .iconify {
                      position: relative;
                      top: -3px;
                      font-size: 0.3rem;
                      color: var(--light-text);
                      margin: 0 4px;
                    }
                  }
                }
              }

              .dropdown {
                margin-inline-start: auto;
              }
            }
          }

          .has-textarea-addon {
            .control {
              .end {
                display: flex;
                align-items: center;

                .message-action {
                  height: 32px;
                  width: 32px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: var(--light-text);
                  border-radius: var(--radius-rounded);
                  border: 1px solid transparent;
                  transition:
                    color 0.3s,
                    background-color 0.3s,
                    border-color 0.3s,
                    height 0.3s,
                    width 0.3s;

                  &:hover,
                  &:focus {
                    border-color: color-mix(in oklab, var(--fade-grey), black 4%);
                    box-shadow: var(--light-box-shadow);
                    color: var(--primary);
                  }

                  .iconify {
                    height: 16px;
                    width: 16px;
                  }
                }

                .button {
                  margin-inline-start: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .right-panel-wrapper {
    &.is-task {
      .right-panel {
        .right-panel-body {
          .task-group {
            border-color: color-mix(in oklab, var(--dark-sidebar), white 12%) !important;

            h3 {
              color: var(--primary);
            }

            h4 {
              color: var(--dark-dark-text);
            }

            .task-participants {
              .participants-inner {
                .avatar-stack {
                  .v-avatar {
                    img {
                      border-color: var(--dark-sidebar);
                    }
                  }
                }

                button {
                  &:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                  }
                }
              }
            }

            .task-stats {
              > a {
                color: var(--primary);
              }
            }

            .task-files {
              .file-box {
                background: var(--dark-sidebar) !important;
                border-color: var(--dark-sidebar) !important;

                .meta {
                  span {
                    &:first-child {
                      color: var(--dark-dark-text);
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
}
</style>
