<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const leftActionsOpen = ref(false)
const centeredActionsOpen = ref(false)
const rightActionsOpen = ref(false)
const customLabelActionsOpen = ref(false)

const smallOpen = ref(false)
const standardOpen = ref(false)
const mediumOpen = ref(false)
const largeOpen = ref(false)
const bigOpen = ref(false)

const smallFormOpen = ref(false)
const standardFormOpen = ref(false)
const mediumFormOpen = ref(false)

const largeFormOpen = ref(false)
const bigFormOpen = ref(false)
const noscrollOpen = ref(false)
const nocloseOpen = ref(false)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VModal')

useHead({
  title: 'VModal - Elements - Vuero',
})
</script>

<template>
  <div>
    <div class="page-content-inner">
      <VBreadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: '/',
          },
          {
            label: 'Elements',
            to: '/elements/',
          },
          {
            label: 'VModal',
            to: '/elements/modal',
          },
        ]"
      />

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column stay-focus-container"
        >
          <!--VModal-->
          <VModalBaseDocumentation />

          <div class="buttons mb-6">
            <VButton bold @click="leftActionsOpen = true"> Left Actions </VButton>
            <VButton bold @click="centeredActionsOpen = true"> Center Actions </VButton>
            <VButton bold @click="rightActionsOpen = true"> Right Actions </VButton>
            <VButton bold @click="customLabelActionsOpen = true"> Custom label </VButton>
          </div>

          <!--VModal sizes-->
          <VModalSizesDocumentation />

          <div class="buttons mb-6">
            <VButton bold @click="smallOpen = true">Small Modal</VButton>
            <VButton bold @click="standardOpen = true"> Standard Modal </VButton>
            <VButton bold @click="mediumOpen = true">Medium Modal</VButton>
            <VButton bold @click="largeOpen = true">Large Modal</VButton>
            <VButton bold @click="bigOpen = true">Big Modal</VButton>
          </div>

          <!--VModal forms-->
          <VModalFormsDocumentation />

          <div class="buttons mb-6">
            <VButton bold @click="smallFormOpen = true">Small Modal</VButton>
            <VButton bold @click="standardFormOpen = true"> Standard Modal </VButton>
            <VButton bold @click="mediumFormOpen = true"> Medium Modal </VButton>
            <VButton bold @click="largeFormOpen = true">Large Modal</VButton>
            <VButton bold @click="bigFormOpen = true">Big Modal</VButton>
          </div>

          <!--VModal options-->
          <VModalOptionsDocumentation />

          <div class="buttons mb-6">
            <VButton bold @click="noscrollOpen = true"> Scroll disabled </VButton>
            <VButton bold @click="nocloseOpen = true">
              No background close handler
            </VButton>
          </div>

          <!--Props-->
          <VModalPropsDocumentation />

          <!--Slots-->
          <VModalSlotsDocumentation />

          <!--Events-->
          <VModalEventsDocumentation />
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>

    <VModal
      title="Standard actions"
      :open="leftActionsOpen"
      @close="leftActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      title="Centered actions"
      :open="centeredActionsOpen"
      actions="center"
      @close="centeredActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      title="Right actions"
      :open="rightActionsOpen"
      actions="right"
      @close="rightActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      title="Custom Label"
      :open="customLabelActionsOpen"
      actions="right"
      cancel-label="Return"
      @close="customLabelActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
    </VModal>

    <VModal
      :open="smallOpen"
      title="Invitation"
      size="small"
      actions="center"
      rounded
      @close="smallOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton color="primary" rounded raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      :open="standardOpen"
      title="Invitation"
      actions="center"
      rounded
      @close="standardOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton color="primary" rounded raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      :open="mediumOpen"
      title="Invitation"
      size="medium"
      actions="center"
      rounded
      @close="mediumOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton color="primary" rounded raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      :open="largeOpen"
      title="Invitation"
      size="large"
      actions="center"
      rounded
      @close="largeOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton color="primary" rounded raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      :open="bigOpen"
      title="Invitation"
      size="big"
      actions="center"
      rounded
      @close="bigOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <VAvatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </VPlaceholderSection>
      </template>
      <template #action="{ close }">
        <VButton color="primary" rounded raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      :open="smallFormOpen"
      title="Leave a Comment"
      size="small"
      actions="right"
      @close="smallFormOpen = false"
    >
      <template #content>
        <form class="modal-form">
          <VField label="Username *">
            <VControl>
              <VInput type="text" placeholder="Username" />
            </VControl>
          </VField>
          <VField label="Email *">
            <VControl>
              <VInput type="text" placeholder="Email Address" />
            </VControl>
          </VField>
          <VField label="Comment *">
            <VControl>
              <VTextarea rows="4" placeholder="Your message..." />
            </VControl>
          </VField>
        </form>
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Publish</VButton>
      </template>
    </VModal>

    <VModal
      :open="standardFormOpen"
      title="Leave a Comment"
      actions="right"
      @close="standardFormOpen = false"
    >
      <template #content>
        <form class="modal-form">
          <VField label="Username *">
            <VControl>
              <VInput type="text" placeholder="Username" />
            </VControl>
          </VField>
          <VField label="Email *">
            <VControl>
              <VInput type="text" placeholder="Email Address" />
            </VControl>
          </VField>
          <VField label="Comment *">
            <VControl>
              <VTextarea rows="4" placeholder="Your message..." />
            </VControl>
          </VField>
        </form>
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Publish</VButton>
      </template>
    </VModal>

    <VModal
      :open="mediumFormOpen"
      size="medium"
      title="Horizontal Form"
      actions="right"
      @close="mediumFormOpen = false"
    >
      <template #content>
        <form class="modal-form">
          <VField label="Username *" horizontal>
            <VControl expanded>
              <VInput type="text" placeholder="Username" />
            </VControl>
          </VField>
          <VField label="Email *" horizontal>
            <VControl expanded>
              <VInput type="text" placeholder="Username" />
            </VControl>
          </VField>
          <VField label="Comment *" horizontal>
            <VControl expanded>
              <VTextarea rows="4" placeholder="Your message..." />
            </VControl>
          </VField>
        </form>
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Publish</VButton>
      </template>
    </VModal>

    <VModal
      :open="largeFormOpen"
      size="large"
      title="Create Project"
      actions="right"
      @close="largeFormOpen = false"
    >
      <template #content>
        <div class="modal-form">
          <div class="columns is-multiline">
            <div class="column is-12">
              <VField label="Project Name *">
                <VControl>
                  <VInput type="text" placeholder="Ex: A cool project" />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField label="Project Budget *">
                <VControl>
                  <VInput type="text" placeholder="Ex: $3,500" />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField label="Project URL *">
                <VControl>
                  <VInput
                    type="text"
                    class="VInput"
                    placeholder="Ex: https://project.com"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField label="Description *">
                <VControl>
                  <VTextarea rows="3" placeholder="Details about the project..." />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Save Changes</VButton>
      </template>
    </VModal>

    <VModal
      :open="bigFormOpen"
      size="large"
      title="Create Project"
      actions="right"
      @close="bigFormOpen = false"
    >
      <template #content>
        <div class="modal-form">
          <div class="columns is-multiline">
            <div class="column is-12">
              <VField label="Project Name *">
                <VControl>
                  <VInput type="text" placeholder="Ex: A cool project" />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField class="is-image-select" label="Project Member">
                <VControl>
                  <Multiselect
                    placeholder="Select employees"
                    track-by="name"
                    label="name"
                    :search="true"
                    :options="[
                      {
                        value: 'alice',
                        name: 'Alice Carasca',
                        image: '/demo/avatars/7.jpg',
                      },
                      {
                        value: 'erik',
                        name: 'Erik Kovalsky',
                        image: '/images/avatars/svg/vuero-1.svg',
                      },
                      {
                        value: 'melany',
                        name: 'melany Wallace',
                        image: '/demo/avatars/25.jpg',
                      },
                      {
                        value: 'tara',
                        name: 'Tara Svenson',
                        image: '/demo/avatars/13.jpg',
                      },
                      {
                        value: 'mary',
                        name: 'Mary Lebowski',
                        image: '/demo/avatars/5.jpg',
                      },
                      {
                        value: 'irina',
                        name: 'Irina Vierbovsky',
                        image: '/demo/avatars/23.jpg',
                      },
                      {
                        value: 'jonathan',
                        name: 'Jonathan Krugger',
                        image: '/demo/avatars/32.jpg',
                      },
                    ]"
                    :max-height="145"
                  >
                    <template #singlelabel="{ value }">
                      <div class="multiselect-single-label">
                        <img class="select-label-icon" :src="value.image" alt="" />
                        {{ value.name }}
                      </div>
                    </template>
                    <template #option="{ option }">
                      <img class="select-option-icon" :src="option.image" alt="" />
                      {{ option.name }}
                    </template>
                  </Multiselect>
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField class="is-image-select" label="Project Type *">
                <VControl>
                  <Multiselect
                    placeholder="Select language"
                    track-by="name"
                    label="name"
                    :search="true"
                    :options="[
                      {
                        value: 'javascript',
                        name: 'Javascript',
                        image: '/images/icons/stacks/js.svg',
                      },
                      {
                        value: 'reactjs',
                        name: 'ReactJS',
                        image: '/images/icons/stacks/reactjs.svg',
                      },
                      {
                        value: 'vuejs',
                        name: 'VueJS',
                        image: '/images/icons/stacks/vuejs.svg',
                      },
                    ]"
                    :max-height="145"
                  >
                    <template #singlelabel="{ value }">
                      <div class="multiselect-single-label">
                        <img class="select-label-icon" :src="value.image" alt="" />
                        {{ value.name }}
                      </div>
                    </template>
                    <template #option="{ option }">
                      <img class="select-option-icon" :src="option.image" alt="" />
                      {{ option.name }}
                    </template>
                  </Multiselect>
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField label="Project Budget *">
                <VControl>
                  <VInput type="text" placeholder="Ex: $3,500" />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField label="Project URL *">
                <VControl>
                  <VInput
                    type="text"
                    class="VInput"
                    placeholder="Ex: https://project.com"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField label="Description *">
                <VControl>
                  <VTextarea rows="3" placeholder="Details about the project..." />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Save Changes</VButton>
      </template>
    </VModal>

    <VModal
      :open="noscrollOpen"
      title="Invitation"
      size="small"
      actions="center"
      noscroll
      @close="noscrollOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Confirm</VButton>
      </template>
    </VModal>

    <VModal
      :open="nocloseOpen"
      title="Invitation"
      size="small"
      actions="center"
      noclose
      @close="nocloseOpen = false"
    >
      <template #content>
        <VPlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action="{ close }">
        <VButton color="primary" raised @click="close()">Confirm</VButton>
      </template>
    </VModal>
  </div>
</template>
