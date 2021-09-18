<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'

const isUploading = ref(false)
const isLoading = ref(false)
const range = ref()

const notyf = useNotyf()
const { y } = useWindowScroll()

const date = ref({
  start: new Date(),
  end: new Date(),
})

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
const addExperience = async () => {
  isUploading.value = false
  onSave()
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
          <h3>Work Experience</h3>
          <p>Edit your work experience info</p>
        </div>
        <div class="right">
          <div class="buttons">
            <VButton
              :to="{ name: 'sidebar-layouts-profile-view' }"
              icon="lnir lnir-arrow-left rem-100"
              light
              dark-outlined
            >
              Go Back
            </VButton>
            <VButton
              color="primary"
              raised
              :loading="isLoading"
              @click="onSave"
            >
              Save Changes
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div v-if="!isUploading" class="fieldset-heading">
          <h4>Previous Experiences</h4>
          <p>This will help others assess your experience</p>
        </div>
        <div v-else class="fieldset-heading">
          <a class="action-link" @click="isUploading = false">Cancel</a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form
            v-if="isUploading"
            class="setting-form"
            @submit.prevent="addExperience"
          >
            <VFilePond
              size="tiny"
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
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <v-date-picker
                    v-model="range"
                    is-range
                    color="green"
                    trim-weeks
                  >
                    <template #default="{ inputValue, inputEvents }">
                      <VField addons class="has-addons-fullwidth">
                        <VControl>
                          <input
                            :value="inputValue.start"
                            class="input"
                            v-on="inputEvents.start"
                          />
                        </VControl>
                        <VControl nogrow>
                          <div class="button">
                            <i
                              aria-hidden="true"
                              class="iconify"
                              data-icon="feather:arrow-right"
                            ></i>
                          </div>
                        </VControl>
                        <VControl>
                          <input
                            :value="inputValue.end"
                            class="input"
                            v-on="inputEvents.end"
                          />
                        </VControl>
                      </VField>
                    </template>
                  </v-date-picker>
                </div>
                <div class="column is-6">
                  <VField>
                    <VControl icon="feather:box">
                      <input
                        type="text"
                        class="input"
                        placeholder="Company Name"
                        autocomplete="organization"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField>
                    <VControl icon="feather:briefcase">
                      <input
                        type="text"
                        class="input"
                        placeholder="Job Title"
                        autocomplete="organization-title"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VField>
                    <VControl>
                      <VButton color="primary" raised fullwidth>
                        Add Work Experience
                      </VButton>
                    </VControl>
                  </VField>
                </div>
              </div>
            </div>
          </form>

          <template v-else>
            <!--Experience Item-->
            <div class="setting-item">
              <img
                src="/demo/photos/brands/airbnb.svg"
                alt=""
                @error.once="(event) => useViaPlaceholderError(event, '50x50')"
              />
              <div class="meta">
                <span class="dark-inverted">Airbnb HQ</span>
                <span>
                  <span>January 2018</span>
                  <i aria-hidden="true" class="fas fa-circle"></i>
                  <span>October 2020</span>
                </span>
                <span>Product Manager</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <img
                src="/demo/photos/brands/facebook.svg"
                alt=""
                @error.once="(event) => useViaPlaceholderError(event, '50x50')"
              />
              <div class="meta">
                <span class="dark-inverted">Facebook</span>
                <span>
                  <span>January 2018</span>
                  <i aria-hidden="true" class="fas fa-circle"></i>
                  <span>October 2020</span>
                </span>
                <span>Product Manager</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <img
                src="/demo/photos/brands/atlassian.svg"
                alt=""
                @error.once="(event) => useViaPlaceholderError(event, '50x50')"
              />
              <div class="meta">
                <span class="dark-inverted">Atlassian</span>
                <span>
                  <span>January 2018</span>
                  <i aria-hidden="true" class="fas fa-circle"></i>
                  <span>October 2020</span>
                </span>
                <span>Web Developer</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <img
                src="/demo/photos/brands/github.svg"
                alt=""
                @error.once="(event) => useViaPlaceholderError(event, '50x50')"
              />
              <div class="meta">
                <span class="dark-inverted">Github</span>
                <span>
                  <span>January 2018</span>
                  <i aria-hidden="true" class="fas fa-circle"></i>
                  <span>October 2020</span>
                </span>
                <span>Web Developer</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <img
                src="/demo/photos/brands/slack.svg"
                alt=""
                @error.once="(event) => useViaPlaceholderError(event, '50x50')"
              />
              <div class="meta">
                <span class="dark-inverted">Slack</span>
                <span>
                  <span>January 2018</span>
                  <i aria-hidden="true" class="fas fa-circle"></i>
                  <span>October 2020</span>
                </span>
                <span>Web Developer</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <img
                src="/demo/photos/brands/gitlab.svg"
                alt=""
                @error.once="(event) => useViaPlaceholderError(event, '50x50')"
              />
              <div class="meta">
                <span class="dark-inverted">Gitlab</span>
                <span>
                  <span>January 2018</span>
                  <i aria-hidden="true" class="fas fa-circle"></i>
                  <span>October 2020</span>
                </span>
                <span>Web Developer</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Create Item-->
            <div class="setting-item is-create">
              <VIconWrap icon="lnil lnil-circle-plus" />

              <div class="meta">
                <span class="dark-inverted">New Item</span>
                <span>Add a new work experience item</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  @click="isUploading = true"
                >
                  Add
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
