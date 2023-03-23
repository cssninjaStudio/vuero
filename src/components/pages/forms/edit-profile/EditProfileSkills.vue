<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const notyf = useNotyf()
const { y } = useWindowScroll()

const isLoading = ref(false)
const isEditingLanguages = ref(false)
const isEditingSkills = ref(false)
const isEditingTools = ref(false)

const selectedLanguage = ref('')
const selectedLanguageLevel = ref('')

const selectedSkill = ref('')
const selectedSkillLevel = ref('')

const selectedTool = ref('')
const selectedToolLevel = ref('')

const isScrolling = computed(() => {
  return y.value > 30
})
const addLanguage = async () => {
  isEditingLanguages.value = false
  await onSave()
  selectedLanguage.value = ''
  selectedLanguageLevel.value = ''
}
const addSkill = async () => {
  isEditingSkills.value = false
  await onSave()
  selectedSkill.value = ''
  selectedSkillLevel.value = ''
}
const addTool = async () => {
  isEditingTools.value = false
  await onSave()
  selectedTool.value = ''
  selectedToolLevel.value = ''
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
          <h3>Skills and Tools</h3>
          <p>Edit your skills and tools</p>
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
        <div v-if="!isEditingLanguages" class="fieldset-heading">
          <h4>Languages</h4>
          <p>How many languages do you speak?</p>
        </div>
        <div v-else class="fieldset-heading">
          <a
            class="action-link"
            tabindex="0"
            role="button"
            @keydown.space.prevent="isEditingLanguages = false"
            @click="isEditingLanguages = false"
          >
            Cancel
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form
            v-if="isEditingLanguages"
            class="setting-form"
            @submit.prevent="addLanguage"
          >
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField v-slot="{ id }" class="is-image-select">
                    <VControl>
                      <Multiselect
                        v-model="selectedLanguage"
                        :attrs="{ id }"
                        placeholder="Select a language"
                        label="name"
                        :options="[
                          {
                            value: 'english',
                            name: 'English',
                            icon: '/images/icons/flags/united-states-of-america.svg',
                          },
                          {
                            value: 'french',
                            name: 'French',
                            icon: '/images/icons/flags/france.svg',
                          },
                          {
                            value: 'german',
                            name: 'German',
                            icon: '/images/icons/flags/germany.svg',
                          },
                          {
                            value: 'spanish',
                            name: 'Spanish',
                            icon: '/images/icons/flags/spain.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img class="select-label-icon" :src="value.icon" alt="" />
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img class="select-option-icon" :src="option.icon" alt="" />
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField v-slot="{ id }">
                    <VControl>
                      <Multiselect
                        v-model="selectedLanguageLevel"
                        :attrs="{ id }"
                        placeholder="Select your level"
                        :options="[
                          {
                            value: '1',
                            label: 'Level 1',
                          },
                          {
                            value: '2',
                            label: 'Level 2',
                          },
                          {
                            value: '3',
                            label: 'Level 3',
                          },
                          {
                            value: '4',
                            label: 'Level 4',
                          },
                        ]"
                      >
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VField>
                    <VControl icon="feather:message-circle">
                      <VInput
                        type="text"
                        placeholder="Write a quick comment..."
                        autocomplete="off"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VButton
                    type="submit"
                    color="primary"
                    icon="fas fa-plus"
                    raised
                    fullwidth
                  >
                    Add Language
                  </VButton>
                </div>
              </div>
            </div>
          </form>

          <template v-else>
            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/united-states-of-america.svg" />

              <div class="meta">
                <span class="dark-inverted">English</span>
                <span>Native Speaker, fluent</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/france.svg" />

              <div class="meta">
                <span class="dark-inverted">French</span>
                <span>Fluent, written and spoken</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/germany.svg" />

              <div class="meta">
                <span class="dark-inverted">German</span>
                <span>Beginner level</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/spain.svg" />

              <div class="meta">
                <span class="dark-inverted">Spanish</span>
                <span>Beginner level</span>
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
                <span>Add a new language item</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingLanguages = true"
                  @click="isEditingLanguages = true"
                >
                  Add
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div v-if="!isEditingSkills" class="fieldset-heading">
          <h4>Skills</h4>
          <p>Add your best skills</p>
        </div>
        <div v-else class="fieldset-heading">
          <a
            class="action-link"
            tabindex="0"
            role="button"
            @keydown.space.prevent="isEditingSkills = false"
            @click="isEditingSkills = false"
          >
            Cancel
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form v-if="isEditingSkills" class="setting-form" @submit.prevent="addSkill">
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField v-slot="{ id }" class="is-image-select">
                    <VControl>
                      <Multiselect
                        v-model="selectedSkill"
                        :attrs="{ id }"
                        placeholder="Select a Skill"
                        label="name"
                        :options="[
                          {
                            value: 'html',
                            name: 'Html5',
                            icon: '/images/icons/stacks/html5.svg',
                          },
                          {
                            value: 'css',
                            name: 'CSS3',
                            icon: '/images/icons/stacks/css3.svg',
                          },
                          {
                            value: 'javascript',
                            name: 'Javascript',
                            icon: '/images/icons/stacks/js.svg',
                          },
                          {
                            value: 'react',
                            name: 'React',
                            icon: '/images/icons/stacks/reactjs.svg',
                          },
                          {
                            value: 'angular',
                            name: 'Angular',
                            icon: '/images/icons/stacks/angular.svg',
                          },
                          {
                            value: 'vueJs',
                            name: 'VueJs',
                            icon: '/images/icons/stacks/vuejs.svg',
                          },
                          {
                            value: 'nodejs',
                            name: 'NodeJS',
                            icon: '/images/icons/stacks/nodejs.svg',
                          },
                          {
                            value: 'csharp',
                            name: 'C#',
                            icon: '/images/icons/stacks/csharp.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img class="select-label-icon" :src="value.icon" alt="" />
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img class="select-option-icon" :src="option.icon" alt="" />
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField v-slot="{ id }">
                    <VControl>
                      <Multiselect
                        v-model="selectedSkillLevel"
                        :attrs="{ id }"
                        placeholder="Years of Exp."
                        :options="[
                          {
                            value: '1',
                            label: '1 Year of exp.',
                          },
                          {
                            value: '2',
                            label: '2 Year of exp.',
                          },
                          {
                            value: '3',
                            label: '3 Year of exp.',
                          },
                          {
                            value: '4',
                            label: '4 Year of exp.',
                          },
                          {
                            value: '5',
                            label: '5 Year of exp.',
                          },
                          {
                            value: '6',
                            label: '6 Year of exp.',
                          },
                          {
                            value: '7',
                            label: '7 Year of exp.',
                          },
                          {
                            value: '8',
                            label: '8 Year of exp.',
                          },
                          {
                            value: '9',
                            label: '9 Year of exp.',
                          },
                          {
                            value: '+10',
                            label: '+10 Year of exp.',
                          },
                        ]"
                      >
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VButton
                    type="submit"
                    color="primary"
                    icon="fas fa-plus"
                    raised
                    fullwidth
                  >
                    Add Skill
                  </VButton>
                </div>
              </div>
            </div>
          </form>
          <template v-else>
            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/js.svg" />

              <div class="meta">
                <span class="dark-inverted">Javascript</span>
                <span>7 years of experience</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/html5.svg" />

              <div class="meta">
                <span class="dark-inverted">Html5</span>
                <span>10+ years of experience</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/css3.svg" />

              <div class="meta">
                <span class="dark-inverted">CSS3</span>
                <span>10+ years of experience</span>
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
                <span>Add a new skill item</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingSkills = true"
                  @click="isEditingSkills = true"
                >
                  Add
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div v-if="!isEditingTools" class="fieldset-heading">
          <h4>Tools</h4>
          <p>Add the tools you work with</p>
        </div>
        <div v-else class="fieldset-heading">
          <a
            class="action-link"
            tabindex="0"
            role="button"
            @keydown.space.prevent="isEditingTools = false"
            @click="isEditingTools = false"
          >
            Cancel
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form v-if="isEditingTools" class="setting-form" @submit.prevent="addTool">
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField v-slot="{ id }" class="is-image-select">
                    <VControl>
                      <Multiselect
                        v-model="selectedTool"
                        :attrs="{ id }"
                        placeholder="Select a Tool"
                        label="name"
                        :options="[
                          {
                            value: 'illustrator',
                            name: 'Illustrator',
                            icon: '/images/icons/stacks/illustrator.svg',
                          },
                          {
                            value: 'photoshop',
                            name: 'Photoshop',
                            icon: '/images/icons/stacks/photoshop.svg',
                          },
                          {
                            value: 'jira',
                            name: 'Jira Software',
                            icon: '/demo/photos/tools/jira.svg',
                          },
                          {
                            value: 'office',
                            name: 'MS Office',
                            icon: '/demo/photos/tools/office.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img class="select-label-icon" :src="value.icon" alt="" />
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img class="select-option-icon" :src="option.icon" alt="" />
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField v-slot="{ id }">
                    <VControl>
                      <Multiselect
                        v-model="selectedToolLevel"
                        :attrs="{ id }"
                        placeholder="Select your level"
                        :options="[
                          {
                            value: '1',
                            label: 'Level 1',
                          },
                          {
                            value: '2',
                            label: 'Level 2',
                          },
                          {
                            value: '3',
                            label: 'Level 3',
                          },
                          {
                            value: '4',
                            label: 'Level 4',
                          },
                          {
                            value: '5',
                            label: 'Level 5',
                          },
                        ]"
                      >
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VButton
                    type="submit"
                    color="primary"
                    icon="fas fa-plus"
                    raised
                    fullwidth
                  >
                    Add Tool
                  </VButton>
                </div>
              </div>
            </div>
          </form>

          <template v-else>
            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/illustrator.svg" />

              <div class="meta">
                <span class="dark-inverted">Illustrator</span>
                <span>Advanced level</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/demo/photos/tools/jira.svg" />

              <div class="meta">
                <span class="dark-inverted">Jira Software</span>
                <span>Intermediate level</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/demo/photos/tools/office.svg" />

              <div class="meta">
                <span class="dark-inverted">MS Office</span>
                <span>Expert level</span>
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
                <span>Add a new tool item</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingTools = true"
                  @click="isEditingTools = true"
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
