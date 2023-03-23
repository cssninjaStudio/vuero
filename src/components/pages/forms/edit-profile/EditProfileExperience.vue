<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const isUploading = ref(false)
const isLoading = ref(false)
const range = ref()

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
              to="/sidebar/layouts/profile-view"
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
              tabindex="0"
              @keydown.space.prevent="onSave"
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
          <a
            class="action-link"
            role="button"
            tabindex="0"
            @keydown.space.prevent="isUploading = false"
            @click="isUploading = false"
          >
            Cancel
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form v-if="isUploading" class="setting-form" @submit.prevent="addExperience">
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
                  <ClientOnly>
                    <VDatePicker v-model="range" is-range color="green" trim-weeks>
                      <template #default="{ inputValue, inputEvents }">
                        <VField addons class="has-addons-fullwidth">
                          <VControl>
                            <input
                              class="input v-input"
                              type="text"
                              :value="inputValue.start"
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
                          <VControl subcontrol>
                            <input
                              class="input v-input"
                              type="text"
                              :value="inputValue.end"
                              v-on="inputEvents.end"
                            />
                          </VControl>
                        </VField>
                      </template>
                    </VDatePicker>
                  </ClientOnly>
                </div>
                <div class="column is-6">
                  <VField>
                    <VControl icon="feather:box">
                      <VInput
                        type="text"
                        placeholder="Company Name"
                        autocomplete="organization"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField>
                    <VControl icon="feather:briefcase">
                      <VInput
                        type="text"
                        placeholder="Job Title"
                        autocomplete="organization-title"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VButton type="submit" color="primary" raised fullwidth>
                    Add Work Experience
                  </VButton>
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
                @error.once="onceImageErrored(50)"
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
                @error.once="onceImageErrored(50)"
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
                @error.once="onceImageErrored(50)"
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
                @error.once="onceImageErrored(50)"
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
                @error.once="onceImageErrored(50)"
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
                @error.once="onceImageErrored(50)"
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
                  tabindex="0"
                  @keydown.space.prevent="isUploading = true"
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
