<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

const leftActionsOpen = ref(false)
const centeredActionsOpen = ref(false)
const rightActionsOpen = ref(false)
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

pageTitle.value = 'V-Modal'
useHead({
  title: 'V-Modal - Elements - Vuero',
})
</script>

<template>
  <div>
    <div class="page-content-inner">
      <V-Breadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: { name: 'index' },
          },
          {
            label: 'Elements',
            to: { name: 'elements' },
          },
          {
            label: 'V-Modal',
            to: { name: 'elements-modal' },
          },
        ]"
      />

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <!--V-Modal-->
          <VModalBaseDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="leftActionsOpen = true">
              Left Actions
            </V-Button>
            <V-Button bold @click="centeredActionsOpen = true">
              Center Actions
            </V-Button>
            <V-Button bold @click="rightActionsOpen = true">
              Right Actions
            </V-Button>
          </div>

          <!--V-Modal sizes-->
          <VModalSizesDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="smallOpen = true">Small Modal</V-Button>
            <V-Button bold @click="standardOpen = true">
              Standard Modal
            </V-Button>
            <V-Button bold @click="mediumOpen = true">Medium Modal</V-Button>
            <V-Button bold @click="largeOpen = true">Large Modal</V-Button>
            <V-Button bold @click="bigOpen = true">Big Modal</V-Button>
          </div>

          <!--V-Modal forms-->
          <VModalFormsDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="smallFormOpen = true">Small Modal</V-Button>
            <V-Button bold @click="standardFormOpen = true">
              Standard Modal
            </V-Button>
            <V-Button bold @click="mediumFormOpen = true">
              Medium Modal
            </V-Button>
            <V-Button bold @click="largeFormOpen = true">Large Modal</V-Button>
            <V-Button bold @click="bigFormOpen = true">Big Modal</V-Button>
          </div>

          <!--V-Modal options-->
          <VModalOptionsDocumentation />

          <div class="buttons mb-6">
            <V-Button bold @click="noscrollOpen = true">
              Scroll disabled
            </V-Button>
            <V-Button bold @click="nocloseOpen = true">
              No background close handler
            </V-Button>
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

    <V-Modal
      title="Standard actions"
      :open="leftActionsOpen"
      @close="leftActionsOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action>
        <V-Button color="primary" raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      title="Centered actions"
      :open="centeredActionsOpen"
      actions="center"
      @close="centeredActionsOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action>
        <V-Button color="primary" raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      title="Right actions"
      :open="rightActionsOpen"
      actions="right"
      @close="rightActionsOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action>
        <V-Button color="primary" raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="smallOpen"
      title="Invitation"
      size="small"
      actions="center"
      rounded
      @close="smallOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <V-Avatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </V-PlaceholderSection>
      </template>
      <template #action>
        <V-Button color="primary" rounded raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="standardOpen"
      title="Invitation"
      actions="center"
      rounded
      @close="standardOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <V-Avatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </V-PlaceholderSection>
      </template>
      <template #action>
        <V-Button color="primary" rounded raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="mediumOpen"
      title="Invitation"
      size="medium"
      actions="center"
      rounded
      @close="mediumOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <V-Avatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </V-PlaceholderSection>
      </template>
      <template #action>
        <V-Button color="primary" rounded raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="largeOpen"
      title="Invitation"
      size="large"
      actions="center"
      rounded
      @close="largeOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <V-Avatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </V-PlaceholderSection>
      </template>
      <template #action>
        <V-Button color="primary" rounded raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="bigOpen"
      title="Invitation"
      size="big"
      actions="center"
      rounded
      @close="bigOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="You were invited"
          subtitle="Jimmy H. invited you to join the Heartman &amp; Sons project."
        >
          <template #image>
            <V-Avatar
              picture="/demo/avatars/22.jpg"
              badge="/images/icons/flags/united-states-of-america.svg"
            />
          </template>
        </V-PlaceholderSection>
      </template>
      <template #action>
        <V-Button color="primary" rounded raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="smallFormOpen"
      title="Leave a Comment"
      size="small"
      actions="right"
      @close="smallFormOpen = false"
    >
      <template #content>
        <form class="modal-form">
          <div class="field">
            <label>Username *</label>
            <div class="control">
              <input type="text" class="input" placeholder="Username" />
            </div>
          </div>
          <div class="field">
            <label>Email *</label>
            <div class="control">
              <input type="text" class="input" placeholder="Email Address" />
            </div>
          </div>
          <div class="field">
            <label>Comment *</label>
            <div class="control">
              <textarea
                class="textarea"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>
        </form>
      </template>
      <template #action>
        <V-Button color="primary" raised>Publish</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="standardFormOpen"
      title="Leave a Comment"
      actions="right"
      @close="standardFormOpen = false"
    >
      <template #content>
        <form class="modal-form">
          <div class="field">
            <label>Username *</label>
            <div class="control">
              <input type="text" class="input" placeholder="Username" />
            </div>
          </div>
          <div class="field">
            <label>Email *</label>
            <div class="control">
              <input type="text" class="input" placeholder="Email Address" />
            </div>
          </div>
          <div class="field">
            <label>Comment *</label>
            <div class="control">
              <textarea
                class="textarea"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>
        </form>
      </template>
      <template #action>
        <V-Button color="primary" raised>Publish</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="mediumFormOpen"
      size="medium"
      title="Horizontal Form"
      actions="right"
      @close="mediumFormOpen = false"
    >
      <template #content>
        <form class="modal-form">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Username *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Username" />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Email *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Username" />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Comment *</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="Your message..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </form>
      </template>
      <template #action>
        <V-Button color="primary" raised>Publish</V-Button>
      </template>
    </V-Modal>

    <V-Modal
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
              <div class="field">
                <label>Project Name *</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Ex: A cool project"
                  />
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Project Members</label>
                <div class="control is-combo">
                  <div class="stacked-combo-box has-rounded-images">
                    <div class="box-inner">
                      <div class="combo-item">
                        <img
                          src="/images/avatars/placeholder.jpg"
                          alt=""
                          @error.once="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <span class="selected-item">Add people</span>
                      </div>
                    </div>
                    <div class="box-chevron">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:chevron-down"
                      ></i>
                    </div>
                    <div class="box-dropdown">
                      <div class="dropdown-inner has-slimscroll">
                        <ul>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/22.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Jimmy H.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/8.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Erik K.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/7.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Alice C.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/25.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Melany W.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/12.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Joshua S.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Project Type *</label>
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Select a type</span>
                    </div>
                    <div class="select-icon">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:chevron-down"
                      ></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="project_type" />
                          <div class="option-meta">
                            <span>Web development</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="project_type" />
                          <div class="option-meta">
                            <span>Design</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="project_type" />
                          <div class="option-meta">
                            <span>Marketing</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="project_type" />
                          <div class="option-meta">
                            <span>Software</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Project Budget *</label>
                <div class="control">
                  <input type="text" class="input" placeholder="Ex: $3,500" />
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Project URL *</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Ex: https://project.com"
                  />
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="field">
                <label>Description *</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="3"
                    placeholder="Details about the project..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #action>
        <V-Button color="primary" raised>Save Changes</V-Button>
      </template>
    </V-Modal>

    <V-Modal
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
              <div class="field">
                <label>Project Name *</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Ex: A cool project"
                  />
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Project Members</label>
                <div class="control is-combo">
                  <div class="stacked-combo-box has-rounded-images">
                    <div class="box-inner">
                      <div class="combo-item">
                        <img
                          src="/images/avatars/placeholder.jpg"
                          alt=""
                          @error.once="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <span class="selected-item">Add people</span>
                      </div>
                    </div>
                    <div class="box-chevron">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:chevron-down"
                      ></i>
                    </div>
                    <div class="box-dropdown">
                      <div class="dropdown-inner has-slimscroll">
                        <ul>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/22.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Jimmy H.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/8.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Erik K.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/7.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Alice C.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/25.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Melany W.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                          <li>
                            <span class="item-icon">
                              <img
                                src="/demo/avatars/12.jpg"
                                alt=""
                                @error.once="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                            </span>
                            <span class="item-name">Joshua S.</span>
                            <span class="checkmark">
                              <i
                                aria-hidden="true"
                                class="iconify"
                                data-icon="feather:check"
                              ></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Project Type *</label>
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Select a type</span>
                    </div>
                    <div class="select-icon">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:chevron-down"
                      ></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="project_type" />
                          <div class="option-meta">
                            <span>Web development</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="project_type" />
                          <div class="option-meta">
                            <span>Design</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="project_type" />
                          <div class="option-meta">
                            <span>Marketing</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="project_type" />
                          <div class="option-meta">
                            <span>Software</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Project Budget *</label>
                <div class="control">
                  <input type="text" class="input" placeholder="Ex: $3,500" />
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label>Project URL *</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="Ex: https://project.com"
                  />
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="field">
                <label>Description *</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="3"
                    placeholder="Details about the project..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #action>
        <V-Button color="primary" raised>Save Changes</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="noscrollOpen"
      title="Invitation"
      size="small"
      actions="center"
      noscroll
      @close="noscrollOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action>
        <V-Button color="primary" raised>Confirm</V-Button>
      </template>
    </V-Modal>

    <V-Modal
      :open="nocloseOpen"
      title="Invitation"
      size="small"
      actions="center"
      noclose
      @close="nocloseOpen = false"
    >
      <template #content>
        <V-PlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action>
        <V-Button color="primary" raised>Confirm</V-Button>
      </template>
    </V-Modal>
  </div>
</template>
