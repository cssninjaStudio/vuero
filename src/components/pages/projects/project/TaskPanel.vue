<script setup lang="ts">
import { activePanel } from '/@src/composition/state/ui/activePanelState'
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
          <Icon icon="feather:chevron-right" />
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
                <div class="h-avatar">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/7.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/5.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>

              <button>
                <Icon icon="feather:plus" />
              </button>
            </div>
          </div>
        </div>

        <div class="task-group">
          <h3>Statistics</h3>
          <div class="task-stats">
            <div class="task-stat">
              <Icon icon="feather:clock" />
              <span>5 days</span>
            </div>
            <div class="task-stat">
              <Icon icon="feather:file" />
              <span>3 files</span>
            </div>
            <div class="task-stat">
              <Icon icon="feather:message-circle" />
              <span>54</span>
            </div>
            <a>
              <Icon icon="feather:plus" />
              <span>Add Checklist</span>
            </a>
          </div>
        </div>

        <div class="task-group">
          <h3>Files</h3>
          <div class="task-files">
            <div class="file-box">
              <img src="/@images/icons/files/zip-format.svg" alt="" />
              <div class="meta">
                <span>Preliminary Sketches</span>
                <span>3MB <i class="fas fa-circle"></i> 5 days ago</span>
              </div>
              <FileCardDropdown />
            </div>
            <div class="file-box">
              <img src="/@images/icons/files/sheet.svg" alt="" />
              <div class="meta">
                <span>Project Budget</span>
                <span>0.6MB <i class="fas fa-circle"></i> 8 days ago</span>
              </div>
              <FileCardDropdown />
            </div>
            <div class="file-box">
              <img src="/@images/icons/files/video.svg" alt="" />
              <div class="meta">
                <span>POC Demo</span>
                <span>8.75MB <i class="fas fa-circle"></i> 8 days ago</span>
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
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/8.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="end">
                <a class="message-action"><Icon icon="feather:smile" /></a>
                <a class="message-action"><Icon icon="feather:at-sign" /></a>
                <a class="message-action"><Icon icon="feather:paperclip" /></a>
                <a class="button h-button is-primary is-bold is-raised">Send</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
