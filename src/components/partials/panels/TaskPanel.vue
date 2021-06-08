<script setup lang="ts">
import { activePanel } from '/@src/state/activePanelState'
</script>

<template>
  <div
    id="task-panel"
    :class="[activePanel === 'task' && 'is-active']"
    class="right-panel-wrapper is-task"
  >
    <div class="panel-overlay" @click="activePanel = 'none'"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <h3>Task Details</h3>
        <a class="close-panel" @click="activePanel = 'none'">
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="feather:chevron-right"
          ></i>
        </a>
      </div>
      <div class="right-panel-body has-slimscroll" data-simplebar>
        <div class="task-group task-overview">
          <h3>Overview</h3>

          <div class="task-description">
            <h4>Build a desktop and mobile landing page wireframe</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videmus
              igitur ut conquiescere ne infantes quidem possint. Duo Reges:
              constructio interrete... <a>See More</a>
            </p>
          </div>

          <div class="task-participants">
            <h5>Participants</h5>

            <div class="participants-inner">
              <div class="avatar-stack">
                <V-Avatar picture="/demo/avatars/7.jpg" />
                <V-Avatar picture="/demo/avatars/8.jpg" />
                <V-Avatar picture="/demo/avatars/5.jpg" />
              </div>

              <button>
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:plus"
                ></i>
              </button>
            </div>
          </div>
        </div>

        <div class="task-group">
          <h3>Statistics</h3>
          <div class="task-stats">
            <div class="task-stat">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:clock"
              ></i>
              <span>5 days</span>
            </div>
            <div class="task-stat">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:file"
              ></i>
              <span>3 files</span>
            </div>
            <div class="task-stat">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:message-circle"
              ></i>
              <span>54</span>
            </div>
            <a>
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:plus"
              ></i>
              <span>Add Checklist</span>
            </a>
          </div>
        </div>

        <div class="task-group">
          <h3>Files</h3>
          <div class="task-files">
            <div class="file-box">
              <img src="/images/icons/files/zip-format.svg" alt="" />
              <div class="meta">
                <span>Preliminary Sketches</span>
                <span
                  >3MB <i aria-hidden="true" class="fas fa-circle"></i> 5 days
                  ago</span
                >
              </div>
              <FileCardDropdown />
            </div>
            <div class="file-box">
              <img src="/images/icons/files/sheet.svg" alt="" />
              <div class="meta">
                <span>Project Budget</span>
                <span
                  >0.6MB <i aria-hidden="true" class="fas fa-circle"></i> 8 days
                  ago</span
                >
              </div>
              <FileCardDropdown />
            </div>
            <div class="file-box">
              <img src="/images/icons/files/video.svg" alt="" />
              <div class="meta">
                <span>POC Demo</span>
                <span
                  >8.75MB <i aria-hidden="true" class="fas fa-circle"></i> 8
                  days ago</span
                >
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
              ></textarea>
            </div>
            <div class="control is-textarea-addon">
              <div class="start">
                <div class="avatar-stack">
                  <V-Avatar size="small" picture="/demo/avatars/8.jpg" />
                </div>
              </div>
              <div class="end">
                <a class="message-action">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:smile"
                  ></i>
                </a>
                <a class="message-action">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:at-sign"
                  ></i>
                </a>
                <a class="message-action">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:paperclip"
                  ></i>
                </a>
                <a class="button v-button is-primary is-bold is-raised">Send</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/layout/_right-panel.scss';
</style>
