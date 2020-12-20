<script lang="ts">
import { defineComponent } from 'vue'

const WizardV1Step1 = defineComponent({
  name: 'WizardV1Step1',
  components: {},
  setup() {
    // WizardV1Step1 - Composition API

    return {}
  },
})

export default WizardV1Step1
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
            <input
              type="file"
              class="profile-filepond"
              name="profile_filepond"
              accept="image/png, image/jpeg, image/gif"
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