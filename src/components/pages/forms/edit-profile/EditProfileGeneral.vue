<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const isUploading = ref(false)
const isLoading = ref(false)
const experience = ref('')
const firstJob = ref('')
const flexibility = ref('')
const remote = ref('')
const skills = ref(['software', 'saas', 'engineering'])
const skillsOptions = [
  { value: 'software', label: 'Software' },
  { value: 'saas', label: 'SaaS' },
  { value: 'engineering', label: 'Engineering' },
]

const notyf = useNotyf()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

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
const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('Your changes have been successfully saved!')
  isLoading.value = false
}
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>General Info</h3>
          <p>Edit your account's general information</p>
        </div>
        <div class="right">
          <div class="buttons">
            <V-Button
              :to="{ name: 'sidebar-layouts-profile-view' }"
              icon="lnir lnir-arrow-left rem-100"
              light
              dark-outlined
            >
              Go Back
            </V-Button>
            <V-Button
              color="primary"
              raised
              :loading="isLoading"
              @click="onSave"
            >
              Save Changes
            </V-Button>
          </div>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Profile Picture</h4>
          <p>This is how others will recognize you</p>
        </div>

        <V-Avatar size="xl" class="profile-v-avatar">
          <template #avatar>
            <img
              v-if="!isUploading"
              class="avatar"
              src="/demo/avatars/8.jpg"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/150x150'
              "
            />
            <V-FilePond
              v-else
              class="profile-filepond"
              name="profile_filepond"
              :chunk-retry-delays="[500, 1000, 3000]"
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
            <V-IconButton
              v-if="!isUploading"
              icon="feather:edit-2"
              class="edit-button is-edit"
              circle
              @click="isUploading = true"
            />
            <V-IconButton
              v-else
              icon="feather:arrow-left"
              class="edit-button is-back"
              circle
              @click="isUploading = false"
            />
          </template>
        </V-Avatar>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Personal Info</h4>
          <p>Others diserve to know you more</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control icon="feather:user">
                <input
                  type="text"
                  class="input"
                  placeholder="First Name"
                  autocomplete="given-name"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control icon="feather:user">
                <input
                  type="text"
                  class="input"
                  placeholder="Last Name"
                  autocomplete="family-name"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control icon="feather:briefcase">
                <input
                  type="text"
                  class="input"
                  placeholder="Job Title"
                  autocomplete="organization-title"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control icon="feather:map-pin">
                <input
                  type="text"
                  class="input"
                  placeholder="Location"
                  autocomplete="country-name"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control>
                <textarea
                  class="textarea"
                  rows="4"
                  placeholder="About / Bio"
                  autocomplete="off"
                  autocapitalize="off"
                  spellcheck="true"
                ></textarea>
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Professional Info</h4>
          <p>This can help you to win some opportunities</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control>
                <Multiselect
                  v-model="experience"
                  placeholder="Experience"
                  :options="[
                    '0-2 years',
                    '2-5 years',
                    '5-10 years',
                    '10+ years',
                  ]"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control>
                <Multiselect
                  v-model="firstJob"
                  placeholder="Is this your first job?"
                  :options="['Yes', 'No']"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control>
                <Multiselect
                  v-model="flexibility"
                  placeholder="Are you flexible?"
                  :options="['Yes', 'No']"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control>
                <Multiselect
                  v-model="remote"
                  placeholder="Do you work remotely?"
                  :options="['Yes', 'No']"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control>
                <Multiselect
                  v-model="skills"
                  mode="tags"
                  :searchable="true"
                  :create-tag="true"
                  :options="skillsOptions"
                  placeholder="Add tags"
                />
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Social Profiles</h4>
          <p>This can help others finding you on social media</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control icon="fab fa-facebook-f">
                <input
                  type="text"
                  class="input"
                  placeholder="Facebook URL"
                  inputmode="url"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control icon="fab fa-twitter">
                <input
                  type="text"
                  class="input"
                  placeholder="Twitter URL"
                  inputmode="url"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control icon="fab fa-dribbble">
                <input
                  type="text"
                  class="input"
                  placeholder="Dribbble URL"
                  inputmode="url"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control icon="fab fa-instagram">
                <input
                  type="text"
                  class="input"
                  placeholder="Instagram URL"
                  inputmode="url"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control icon="fab fa-github">
                <input
                  type="text"
                  class="input"
                  placeholder="Github URL"
                  inputmode="url"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-6">
            <V-Field>
              <V-Control icon="fab fa-gitlab">
                <input
                  type="text"
                  class="input"
                  placeholder="Gitlab URL"
                  inputmode="url"
                />
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
