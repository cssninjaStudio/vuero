<script setup lang="ts">
const onAddFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file added', file)
}
const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file removed', file)
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">What is this project about?</h2>
      <p>Manage better by adding all relevant project information</p>
    </div>

    <div class="project-info">
      <div class="project-info-head">
        <div class="project-avatar-upload">
          <div class="filepond-profile-wrap is-small">
            <V-FilePond
              class="profile-filepond"
              name="profile_filepond"
              chunk-retry-delays="500,1000,3000"
              label-idle="<i class='lnil lnil-cloud-upload'></i>"
              :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
              :image-preview-height="140"
              :image-resize-target-width="140"
              :image-resize-target-height="140"
              image-crop-aspect-ratio="1:1"
              style-panel-layout="compact circle"
              style-load-indicator-position="center bottom"
              style-progress-indicator-position="right bottom"
              style-button-remove-item-position="left bottom"
              style-button-process-item-position="right bottom"
              @addfile="onAddFile"
              @removefile="onRemoveFile"
            />
          </div>
          <p>
            <span>Upload a project logo</span>
            <span>File size cannot exceed 2MB</span>
          </p>
        </div>
        <div class="project-info">
          <div class="project-name">
            <div class="field">
              <div class="control">
                <input
                  id="project-name"
                  class="input"
                  placeholder="Project Name"
                />
              </div>
            </div>
          </div>
          <div class="project-description p-t-10">
            <div class="field">
              <div class="control">
                <textarea
                  id="project-description"
                  class="textarea"
                  rows="4"
                  placeholder="Describe your project..."
                ></textarea>
              </div>
              <p class="help">Minimum of 50 characters</p>
            </div>
            <div class="field">
              <label>Related Industries</label>
              <div class="control">
                <input
                  id="choices-text-remove-button"
                  class="input"
                  value="UI/UX Design"
                  placeholder="Enter something"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
