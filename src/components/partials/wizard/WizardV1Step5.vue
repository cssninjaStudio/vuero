<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import type { WizardTeammate, WizardTeammateRole } from '/@src/models/wizard'
import { users } from '/@src/data/wizard'
import { wizardData } from '/@src/state/wizardState'

const search = ref('')
const isAddingMembers = ref(false)
const filteredUsers = ref<Omit<WizardTeammate, 'role'>[]>([])

const addTeammate = (teammate: Omit<WizardTeammate, 'role'>) => {
  wizardData.teammates.push({
    ...teammate,
    role: 'reader',
  })
  search.value = ''
}

const setTeammateRole = (
  teammate: Omit<WizardTeammate, 'role'>,
  role: WizardTeammateRole
) => {
  const index = wizardData.teammates.findIndex((item) => {
    return item.name === teammate.name
  })

  if (index > -1) {
    wizardData.teammates[index].role = role
  }
}

const removeTeammate = (teammate: Omit<WizardTeammate, 'role'>) => {
  const index = wizardData.teammates.findIndex((item) => {
    return item.name === teammate.name
  })
  if (index > -1) {
    wizardData.teammates.splice(index, 1)
  }
}

const getRoleLevel = (teammate: WizardTeammate) => {
  switch (teammate.role) {
    case 'collaborator':
      return 1
    case 'manager':
      return 2
    case 'owner':
      return 3
    case 'reader':
    default:
      return 0
  }
}

watchEffect(() => {
  if (!search.value) {
    filteredUsers.value = []
    return
  }

  filteredUsers.value = users
    .filter((item) => {
      return !wizardData.teammates.find((_item) => {
        return item.name === _item.name
      })
    })
    .filter((item) => item.name.match(new RegExp(search.value, 'i')))
})
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Who will be working on this project?</h2>
      <p>Start by adding members to your team</p>
    </div>

    <!--List Empty Search Placeholder -->
    <div v-if="!isAddingMembers" class="page-placeholder is-people">
      <div class="placeholder-content">
        <img
          class="light-image is-rounded"
          src="/@src/assets/illustrations/wizard/team-placeholder.svg"
          alt=""
        />
        <img
          class="dark-image is-rounded"
          src="/@src/assets/illustrations/wizard/team-placeholder.svg"
          alt=""
        />
        <h3>Invite People</h3>
        <p class="is-larger">
          You can already start adding files to your project if you have them
          handy. But don't worry, you'll be able to add and manage files later.
        </p>
        <a
          class="action-link toggle-members-link"
          @click="isAddingMembers = true"
        >
          Add Members
        </a>
      </div>
    </div>

    <div v-if="isAddingMembers" class="project-team-wrapper">
      <div class="project-team-header">
        <V-Avatar
          size="big"
          picture="/demo/avatars/8.jpg"
          badge="/images/icons/flags/united-states-of-america.svg"
        />
        <h3 class="title is-4 is-narrow is-thin">Erik Kovalsky</h3>
        <p class="light-text">You are the project owner</p>

        <V-Field class="mt-4">
          <V-Control icon="feather:search">
            <input
              v-model="search"
              class="input"
              placeholder="Search teammates..."
            />
          </V-Control>
        </V-Field>
      </div>

      <div class="project-team-body">
        <div class="members-list">
          <template v-if="filteredUsers.length > 0">
            <transition-group name="list" tag="div">
              <V-Block
                v-for="teammate in filteredUsers"
                :key="teammate.name"
                class="invited-member"
                title="Invite"
                :subtitle="teammate.name"
              >
                <template #icon>
                  <V-Avatar size="medium" :picture="teammate.picture" />
                </template>
                <template #action>
                  <div class="actions">
                    <V-IconButton
                      icon="fas fa-plus"
                      class="cancel-button hint--top hint--bubble hint--primary"
                      :aria-label="`Invite ${teammate.name}`"
                      circle
                      @click="addTeammate(teammate)"
                    />
                  </div>
                </template>
              </V-Block>
            </transition-group>
          </template>
          <template v-if="wizardData.teammates.length > 0">
            <transition-group name="list-complete" tag="div">
              <V-Block
                v-for="teammate in wizardData.teammates"
                :key="teammate.name"
                class="invited-member"
                title="Invited"
                :subtitle="teammate.name"
              >
                <template #icon>
                  <V-Avatar size="medium" :picture="teammate.picture" />
                </template>
                <template #action>
                  <div class="actions">
                    <div class="permissions">
                      <div class="permission-levels">
                        <div
                          class="
                            permission-level
                            hint--bubble hint--primary hint--top
                          "
                          aria-label="Reader"
                          @click="setTeammateRole(teammate, 'reader')"
                        >
                          <div
                            class="permission-level-inner"
                            :class="[
                              getRoleLevel(teammate) >= 0 && 'is-active',
                            ]"
                          ></div>
                        </div>
                        <div
                          class="
                            permission-level
                            hint--bubble hint--primary hint--top
                          "
                          aria-label="Collaborator"
                          @click="setTeammateRole(teammate, 'collaborator')"
                        >
                          <div
                            class="permission-level-inner"
                            :class="[
                              getRoleLevel(teammate) >= 1 && 'is-active',
                            ]"
                          ></div>
                        </div>
                        <div
                          class="
                            permission-level
                            hint--bubble hint--primary hint--top
                          "
                          aria-label="Manager"
                          @click="setTeammateRole(teammate, 'manager')"
                        >
                          <div
                            class="permission-level-inner"
                            :class="[
                              getRoleLevel(teammate) >= 2 && 'is-active',
                            ]"
                          ></div>
                        </div>
                        <div
                          class="
                            permission-level
                            hint--bubble hint--primary hint--top
                          "
                          aria-label="Owner"
                          @click="setTeammateRole(teammate, 'owner')"
                        >
                          <div
                            class="permission-level-inner"
                            :class="[
                              getRoleLevel(teammate) >= 3 && 'is-active',
                            ]"
                          ></div>
                        </div>
                        <progress
                          class="
                            progress
                            permissions-progress
                            is-primary is-tiny
                          "
                          :value="getRoleLevel(teammate)"
                          :max="3"
                        >
                          0%
                        </progress>
                      </div>
                    </div>
                    <V-IconButton
                      icon="fas fa-times"
                      class="cancel-button hint--top hint--bubble hint--primary"
                      aria-label="Cancel Invite"
                      circle
                      @click="removeTeammate(teammate)"
                    />
                  </div>
                </template>
              </V-Block>
            </transition-group>
          </template>
          <div v-else class="empty-wrap has-text-centered">
            <span>No team members yet</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
