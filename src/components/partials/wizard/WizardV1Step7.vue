<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import dayjs from 'dayjs'

import { useWizard } from '/@src/stores/wizard'

const wizard = useWizard()

const capitalize = (string: string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1)
}

const projectInitial = computed(() => {
  return wizard.data.name.slice(0, 1).toUpperCase() || 'P'
})

const formatedDueDate = computed(() => {
  return dayjs(wizard.data.timeFrame.end).format('MMM D, YYYY')
})

const projectPicture = ref('')

watchEffect(async () => {
  try {
    projectPicture.value = await new Promise((resolve, reject) => {
      if (wizard.data.logo) {
        const reader = new FileReader()
        reader.readAsDataURL(wizard.data.logo)
        reader.onload = () => resolve(reader.result?.toString() || '')
        reader.onerror = (error) => reject(error)
      } else {
        projectPicture.value = ''
      }
    })
  } catch (error) {
    projectPicture.value = ''
  }
})
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Make sure everything is good</h2>
      <p>You can go back to previous steps if you need to edit anything.</p>
    </div>

    <VLoader
      size="xl"
      class="project-preview-wrapper"
      :active="wizard.loading"
      grey
    >
      <div class="project-preview-header">
        <VAvatar
          color="h-green"
          size="big"
          :initials="projectInitial"
          :picture="projectPicture"
        />

        <h3 class="title is-4 is-narrow is-thin">
          <span v-if="wizard.data.name">{{ wizard.data.name }}</span>
          <span v-else>Project Title Goes Here</span>

          <a class="edit-icon" @click="wizard.setStep(2)">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </a>
        </h3>
      </div>

      <div class="project-preview-body">
        <div class="columns is-multiline">
          <div class="column is-12 is-tablet-100">
            <div class="edit-box">
              <h4>Description</h4>

              <a class="edit-icon" @click="wizard.setStep(2)">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>

              <p v-if="wizard.data.description">
                {{ wizard.data.description }}
              </p>
              <p v-else>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                negat? Tamen a proposito, inquam, aberramus. Deinde dolorem quem
                maximum? Quae duo sunt, unum facit. Quod vestri non item.
              </p>
            </div>
          </div>
          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <a class="edit-icon" @click="wizard.setStep(1)">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <VBlock
                :title="wizard.data.relatedTo"
                subtitle="Project Type"
                center
              >
                <template #icon>
                  <VIconBox size="medium" color="warning" rounded>
                    <i aria-hidden="true" class="lnil lnil-vector-pen"></i>
                  </VIconBox>
                </template>
              </VBlock>
            </div>
          </div>

          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <a class="edit-icon" @click="wizard.setStep(3)">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <VBlock
                v-if="wizard.data.customer"
                :title="wizard.data.customer.name"
                subtitle="Project Customer"
                center
              >
                <template #icon>
                  <VAvatar size="medium" :picture="wizard.data.customer.logo" />
                </template>
              </VBlock>
              <div v-else class="edit-box-placeholder is-media">
                <span>No selected customer</span>
              </div>
            </div>
          </div>

          <div class="column is-4 is-tablet-33">
            <div class="edit-box">
              <a class="edit-icon" @click="wizard.setStep(3)">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <div class="estimated-budget">
                <div class="inner-block">
                  <div class="budget">
                    <span>{{ wizard.data.budget }}</span>
                  </div>
                  <p>Estimated Budget</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-4 is-tablet-33">
            <div class="edit-box">
              <a class="edit-icon" @click="wizard.setStep(3)">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <div class="estimated-due-date">
                <div class="inner-block">
                  <div class="date">
                    <span>{{ formatedDueDate }}</span>
                  </div>
                  <p>Estimated Due Date</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-4 is-tablet-33">
            <div class="edit-box">
              <a class="edit-icon" @click="wizard.setStep(4)">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <div class="attachments-count">
                <div class="inner-block">
                  <div class="attachments">
                    <span v-if="wizard.data.attachments.length">{{
                      wizard.data.attachments.length
                    }}</span>
                    <span v-else>No</span>
                  </div>
                  <p>Attachments</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <h4>Team</h4>

              <a class="edit-icon" @click="wizard.setStep(5)">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>

              <div
                v-if="wizard.data.teammates.length === 0"
                class="edit-box-placeholder is-media"
              >
                <span>No selected teammate</span>
              </div>

              <div v-else class="media-list">
                <div
                  v-for="teammate in wizard.data.teammates"
                  :key="teammate.name"
                  class="media-list-item"
                >
                  <VBlock
                    :title="teammate.name"
                    :subtitle="capitalize(teammate.role)"
                    center
                  >
                    <template #icon>
                      <VAvatar :picture="teammate.picture" />
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <h4>Tools</h4>

              <a class="edit-icon" @click="wizard.setStep(6)">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>

              <div
                v-if="wizard.data.tools.length === 0"
                class="edit-box-placeholder is-list"
              >
                <span>No selected tools</span>
              </div>

              <div v-else class="media-list">
                <div
                  v-for="tool in wizard.data.tools"
                  :key="tool.name"
                  class="media-list-item"
                >
                  <VBlock
                    :title="tool.name"
                    :subtitle="tool.description"
                    center
                  >
                    <template #icon>
                      <VAvatar :picture="tool.logo" />
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VLoader>
  </div>
</template>
