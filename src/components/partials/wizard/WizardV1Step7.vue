<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import dayjs from 'dayjs'

import { wizardData, currentStep, isLoading } from '/@src/state/wizardState'

const capitalize = (string: string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1)
}

const projectInitial = computed(() => {
  return wizardData.name.slice(0, 1).toUpperCase() || 'P'
})

const formatedDueDate = computed(() => {
  return dayjs(wizardData.timeFrame.end).format('MMM D, YYYY')
})

const projectPicture = ref('')

watchEffect(async () => {
  try {
    projectPicture.value = await new Promise((resolve, reject) => {
      if (wizardData.logo) {
        const reader = new FileReader()
        reader.readAsDataURL(wizardData.logo)
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

    <V-Loader
      size="xl"
      class="project-preview-wrapper"
      :active="isLoading"
      grey
    >
      <div class="project-preview-header">
        <V-Avatar
          color="h-green"
          size="big"
          :initials="projectInitial"
          :picture="projectPicture"
        />

        <h3 class="title is-4 is-narrow is-thin">
          <span v-if="wizardData.name">{{ wizardData.name }}</span>
          <span v-else>Project Title Goes Here</span>

          <a class="edit-icon" @click="currentStep = 2">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </a>
        </h3>
      </div>

      <div class="project-preview-body">
        <div class="columns is-multiline">
          <div class="column is-12 is-tablet-100">
            <div class="edit-box">
              <h4>Description</h4>

              <a class="edit-icon" @click="currentStep = 2">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>

              <p v-if="wizardData.description">
                {{ wizardData.description }}
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
              <a class="edit-icon" @click="currentStep = 1">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <V-Block
                :title="wizardData.relatedTo"
                subtitle="Project Type"
                center
              >
                <template #icon>
                  <V-IconBox size="medium" color="warning" rounded>
                    <i aria-hidden="true" class="lnil lnil-vector-pen"></i>
                  </V-IconBox>
                </template>
              </V-Block>
            </div>
          </div>

          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <a class="edit-icon" @click="currentStep = 3">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <V-Block
                v-if="wizardData.customer"
                :title="wizardData.customer.name"
                subtitle="Project Customer"
                center
              >
                <template #icon>
                  <V-Avatar size="medium" :picture="wizardData.customer.logo" />
                </template>
              </V-Block>
              <div v-else class="edit-box-placeholder is-media">
                <span>No selected customer</span>
              </div>
            </div>
          </div>

          <div class="column is-4 is-tablet-33">
            <div class="edit-box">
              <a class="edit-icon" @click="currentStep = 3">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <div class="estimated-budget">
                <div class="inner-block">
                  <div class="budget">
                    <span>{{ wizardData.budget }}</span>
                  </div>
                  <p>Estimated Budget</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-4 is-tablet-33">
            <div class="edit-box">
              <a class="edit-icon" @click="currentStep = 3">
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
              <a class="edit-icon" @click="currentStep = 4">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>
              <div class="attachments-count">
                <div class="inner-block">
                  <div class="attachments">
                    <span v-if="wizardData.attachments.length">{{
                      wizardData.attachments.length
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

              <a class="edit-icon" @click="currentStep = 5">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>

              <div
                v-if="wizardData.teammates.length === 0"
                class="edit-box-placeholder is-media"
              >
                <span>No selected teammate</span>
              </div>

              <div v-else class="media-list">
                <div
                  v-for="teammate in wizardData.teammates"
                  :key="teammate.name"
                  class="media-list-item"
                >
                  <V-Block
                    :title="teammate.name"
                    :subtitle="capitalize(teammate.role)"
                    center
                  >
                    <template #icon>
                      <V-Avatar :picture="teammate.picture" />
                    </template>
                  </V-Block>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <h4>Tools</h4>

              <a class="edit-icon" @click="currentStep = 6">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
              </a>

              <div
                v-if="wizardData.tools.length === 0"
                class="edit-box-placeholder is-list"
              >
                <span>No selected tools</span>
              </div>

              <div v-else class="media-list">
                <div
                  v-for="tool in wizardData.tools"
                  :key="tool.name"
                  class="media-list-item"
                >
                  <V-Block
                    :title="tool.name"
                    :subtitle="tool.description"
                    center
                  >
                    <template #icon>
                      <V-Avatar :picture="tool.logo" />
                    </template>
                  </V-Block>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </V-Loader>
  </div>
</template>
