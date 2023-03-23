<script setup lang="ts">
import type { WizardTeammate, WizardTeammateRole } from '/@src/models/wizard'
import { users } from '/@src/data/wizard'

import { useWizard } from '/@src/composable/useWizard'

const search = ref('')
const isAddingMembers = ref(false)
const filteredUsers = ref<Omit<WizardTeammate, 'role'>[]>([])

const wizard = useWizard()
const router = useRouter()
wizard.setStep({
  number: 5,
  canNavigate: true,
  previousStepFn: async () => {
    router.push('/wizard-v1/project-files')
  },
  validateStepFn: async () => {
    if (search.value) return

    router.push('/wizard-v1/project-tools')
  },
})

const addTeammate = (teammate: Omit<WizardTeammate, 'role'>) => {
  wizard.data.teammates.push({
    ...teammate,
    role: 'reader',
  })
  search.value = ''
}

const setTeammateRole = (
  teammate: Omit<WizardTeammate, 'role'>,
  role: WizardTeammateRole
) => {
  const index = wizard.data.teammates.findIndex((item) => {
    return item.name === teammate.name
  })

  if (index > -1) {
    wizard.data.teammates[index].role = role
  }
}

const removeTeammate = (teammate: Omit<WizardTeammate, 'role'>) => {
  const index = wizard.data.teammates.findIndex((item) => {
    return item.name === teammate.name
  })
  if (index > -1) {
    wizard.data.teammates.splice(index, 1)
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
      return !wizard.data.teammates.find((_item) => {
        return item.name === _item.name
      })
    })
    .filter((item) => item.name.match(new RegExp(search.value, 'i')))
})
</script>

<template>
  <div id="wizard-step-4" class="inner-wrapper is-active">
    <div class="step-content">
      <div class="step-title">
        <h2 class="dark-inverted">Who will be working on this project?</h2>
        <p>Start by adding members to your team</p>
      </div>

      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        v-if="!isAddingMembers"
        class="is-people"
        title="Invite People"
        subtitle="You can already start adding files to your project if you have them handy. But
            don't worry, you'll be able to add and manage files later."
        larger
      >
        <template #image>
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
        </template>
        <template #action>
          <a
            role="button"
            class="action-link toggle-members-link"
            tabindex="0"
            @keydown.space.prevent="isAddingMembers = true"
            @click="isAddingMembers = true"
          >
            Add Members
          </a>
        </template>
      </VPlaceholderPage>

      <div v-if="isAddingMembers" class="project-team-wrapper">
        <div class="project-team-header">
          <VAvatar
            size="big"
            picture="/images/avatars/svg/vuero-1.svg"
            badge="/images/icons/flags/united-states-of-america.svg"
          />
          <h3 class="title is-4 is-narrow is-thin">Erik Kovalsky</h3>
          <p class="light-text">You are the project owner</p>

          <VField class="mt-4">
            <VControl icon="feather:search">
              <VInput v-model="search" type="search" placeholder="Search teammates..." />
            </VControl>
          </VField>
        </div>

        <div class="project-team-body">
          <div class="members-list">
            <template v-if="filteredUsers.length > 0">
              <TransitionGroup name="list" tag="div">
                <VBlock
                  v-for="teammate in filteredUsers"
                  :key="teammate.name"
                  class="invited-member"
                  title="Invite"
                  :subtitle="teammate.name"
                >
                  <template #icon>
                    <VAvatar size="medium" :picture="teammate.picture" />
                  </template>
                  <template #action>
                    <div class="actions">
                      <VIconButton
                        icon="fas fa-plus"
                        class="cancel-button hint--top hint--bubble hint--primary"
                        :aria-label="`Invite ${teammate.name}`"
                        circle
                        @click="addTeammate(teammate)"
                      />
                    </div>
                  </template>
                </VBlock>
              </TransitionGroup>
            </template>
            <template v-if="wizard.data.teammates.length > 0">
              <TransitionGroup name="list-complete" tag="div">
                <VBlock
                  v-for="teammate in wizard.data.teammates"
                  :key="teammate.name"
                  class="invited-member"
                  title="Invited"
                  :subtitle="teammate.name"
                >
                  <template #icon>
                    <VAvatar size="medium" :picture="teammate.picture" />
                  </template>
                  <template #action>
                    <div class="actions">
                      <div class="permissions">
                        <div class="permission-levels">
                          <div
                            class="permission-level hint--bubble hint--primary hint--top"
                            aria-label="Reader"
                            role="button"
                            tabindex="0"
                            @keydown.space.prevent="setTeammateRole(teammate, 'reader')"
                            @click="setTeammateRole(teammate, 'reader')"
                          >
                            <div
                              class="permission-level-inner"
                              :class="[getRoleLevel(teammate) >= 0 && 'is-active']"
                            ></div>
                          </div>
                          <div
                            class="permission-level hint--bubble hint--primary hint--top"
                            aria-label="Collaborator"
                            role="button"
                            tabindex="0"
                            @keydown.space.prevent="
                              setTeammateRole(teammate, 'collaborator')
                            "
                            @click="setTeammateRole(teammate, 'collaborator')"
                          >
                            <div
                              class="permission-level-inner"
                              :class="[getRoleLevel(teammate) >= 1 && 'is-active']"
                            ></div>
                          </div>
                          <div
                            class="permission-level hint--bubble hint--primary hint--top"
                            aria-label="Manager"
                            role="button"
                            tabindex="0"
                            @keydown.space.prevent="setTeammateRole(teammate, 'manager')"
                            @click="setTeammateRole(teammate, 'manager')"
                          >
                            <div
                              class="permission-level-inner"
                              :class="[getRoleLevel(teammate) >= 2 && 'is-active']"
                            ></div>
                          </div>
                          <div
                            class="permission-level hint--bubble hint--primary hint--top"
                            aria-label="Owner"
                            role="button"
                            tabindex="0"
                            @keydown.space.prevent="setTeammateRole(teammate, 'owner')"
                            @click="setTeammateRole(teammate, 'owner')"
                          >
                            <div
                              class="permission-level-inner"
                              :class="[getRoleLevel(teammate) >= 3 && 'is-active']"
                            ></div>
                          </div>
                          <progress
                            class="progress permissions-progress is-primary is-tiny"
                            :value="getRoleLevel(teammate)"
                            :max="3"
                          >
                            0%
                          </progress>
                        </div>
                      </div>
                      <VIconButton
                        icon="fas fa-times"
                        class="cancel-button hint--top hint--bubble hint--primary"
                        aria-label="Cancel Invite"
                        circle
                        @click="removeTeammate(teammate)"
                      />
                    </div>
                  </template>
                </VBlock>
              </TransitionGroup>
            </template>
            <div v-else class="empty-wrap has-text-centered">
              <span>No team members yet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
