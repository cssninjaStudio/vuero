<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import { popovers } from '/@src/data/users/userPopovers'

const selectedColor = ref('')
const calendarTarget = ref('')
const notificationMedium = ref('')
const notificationTarget = ref('')
const date = ref({
  start: new Date(),
  end: new Date(),
})

const { y } = useWindowScroll()
const isStuck = computed(() => {
  return y.value > 30
})

const options = ref(['All day'])
</script>

<template>
  <div class="form-layout is-stacked">
    <div class="form-outer">
      <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
        <div class="form-header-inner">
          <div class="left">
            <h3>Schedule a meeting</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <VButton
                icon="lnir lnir-arrow-left rem-100"
                :to="{ name: 'sidebar-layouts-profile-view' }"
                light
                dark-outlined
              >
                Cancel
              </VButton>
              <VButton color="primary" raised> Schedule </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <div class="form-section">
          <div class="columns is-multiline">
            <div class="column is-12">
              <VField>
                <VControl icon="feather:slack">
                  <input
                    type="text"
                    class="input"
                    placeholder="What is this meeting about?"
                  />
                </VControl>
              </VField>
            </div>

            <VDatePicker
              v-model="date"
              is-range
              color="green"
              trim-weeks
              class="column is-6"
            >
              <template #default="{ inputValue, inputEvents }">
                <div class="columns v-calendar-combo">
                  <div class="column is-6">
                    <VField>
                      <label>Meeting date</label>

                      <VControl icon="feather:calendar">
                        <input
                          placeholder="Start Date"
                          :value="inputValue.start"
                          class="input form-datepicker"
                          v-on="inputEvents.start"
                        />
                      </VControl>
                    </VField>
                  </div>
                  <div class="column is-6">
                    <VField>
                      <label class="is-vhidden">Meeting date</label>

                      <VControl icon="feather:calendar">
                        <input
                          placeholder="End Date"
                          :value="inputValue.end"
                          class="input form-datepicker"
                          v-on="inputEvents.end"
                        />
                      </VControl>
                    </VField>
                  </div>
                </div>
              </template>
            </VDatePicker>

            <VDatePicker
              v-model="date.start"
              class="column is-3"
              color="green"
              mode="time"
              is24hr
            >
              <template #default="{ inputValue, inputEvents }">
                <VField>
                  <label>Meeting time</label>
                  <VControl>
                    <input
                      class="input form-timepicker"
                      :value="inputValue"
                      v-on="inputEvents"
                    />
                  </VControl>
                </VField>
              </template>
            </VDatePicker>

            <VDatePicker
              v-model="date.end"
              class="column is-3"
              color="green"
              mode="time"
              is24hr
            >
              <template #default="{ inputValue, inputEvents }">
                <VField>
                  <label class="is-vhidden">Meeting time</label>
                  <VControl>
                    <input
                      class="input form-timepicker"
                      :value="inputValue"
                      v-on="inputEvents"
                    />
                  </VControl>
                </VField>
              </template>
            </VDatePicker>

            <div class="column is-12">
              <VField>
                <VControl>
                  <VCheckbox
                    v-model="options"
                    value="All day"
                    label="All day"
                    color="primary"
                    circle
                  />
                  <VCheckbox
                    v-model="options"
                    value="Repeat every week"
                    label="Repeat every week"
                    color="primary"
                    circle
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>

        <div class="form-section is-grey">
          <div class="form-section-header">
            <div class="left">
              <h3>Meeting details</h3>
            </div>
            <div class="right">
              <VButton dark-outlined> Add People </VButton>
            </div>
          </div>

          <div class="form-section-inner is-horizontal">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Participants</label>
              </div>
              <div class="field-body">
                <VField>
                  <VControl>
                    <div class="participants">
                      <Tippy class="has-help-cursor" interactive placement="top-start">
                        <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user8" />
                        </template>
                      </Tippy>

                      <Tippy class="has-help-cursor" interactive placement="top-start">
                        <VAvatar color="warning" initials="BT" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user122" />
                        </template>
                      </Tippy>

                      <Tippy class="has-help-cursor" interactive placement="top-start">
                        <VAvatar picture="/demo/avatars/18.jpg" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user18" />
                        </template>
                      </Tippy>

                      <Tippy class="has-help-cursor" interactive placement="top-start">
                        <VAvatar color="info" initials="JD" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user123" />
                        </template>
                      </Tippy>

                      <Tippy class="has-help-cursor" interactive placement="top-start">
                        <VAvatar picture="/demo/avatars/7.jpg" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user7" />
                        </template>
                      </Tippy>

                      <button class="add-participant">
                        <i
                          aria-hidden="true"
                          class="iconify"
                          data-icon="feather:plus"
                        ></i>
                      </button>
                    </div>
                  </VControl>
                </VField>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Where</label>
              </div>
              <div class="field-body">
                <VField>
                  <VControl icon="feather:map-pin">
                    <input class="input" type="text" placeholder="e.g. Conference room" />
                  </VControl>
                </VField>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Meeting URL</label>
              </div>
              <div class="field-body">
                <VField>
                  <VControl icon="feather:map-pin">
                    <input
                      class="input"
                      type="url"
                      placeholder="https://zoom.com/m/156546"
                      inputmode="url"
                    />
                  </VControl>
                </VField>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Calendar</label>
              </div>
              <div class="field-body">
                <VField>
                  <VControl>
                    <Multiselect
                      v-model="calendarTarget"
                      placeholder="Pick a calendar"
                      :options="['My Calendar', 'Team Calendar', 'Company Calendar']"
                    />
                  </VControl>
                </VField>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Description</label>
              </div>
              <div class="field-body">
                <VField>
                  <VControl>
                    <textarea
                      class="textarea"
                      rows="4"
                      placeholder="Tell us about any details you'd like us to know..."
                      autocomplete="off"
                      autocapitalize="off"
                      spellcheck="true"
                    ></textarea>
                    <a class="add-link">Add Attachments</a>
                  </VControl>
                </VField>
              </div>
            </div>
          </div>
        </div>

        <div class="form-section is-grey">
          <div class="form-section-inner is-horizontal">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Color Code</label>
              </div>
              <div class="field-body">
                <VField>
                  <VControl>
                    <div class="color-codes">
                      <div
                        :class="[selectedColor === 'primary' && 'is-active']"
                        tabindex="0"
                        class="color-code is-primary"
                        @click="selectedColor = 'primary'"
                        @keydown.space.prevent="selectedColor = 'primary'"
                      ></div>
                      <div
                        :class="[selectedColor === 'secondary' && 'is-active']"
                        tabindex="0"
                        class="color-code is-secondary"
                        @click="selectedColor = 'secondary'"
                        @keydown.space.prevent="selectedColor = 'secondary'"
                      ></div>
                      <div
                        :class="[selectedColor === 'info' && 'is-active']"
                        tabindex="0"
                        class="color-code is-info"
                        @click="selectedColor = 'info'"
                        @keydown.space.prevent="selectedColor = 'info'"
                      ></div>
                      <div
                        :class="[selectedColor === 'success' && 'is-active']"
                        tabindex="0"
                        class="color-code is-success"
                        @click="selectedColor = 'success'"
                        @keydown.space.prevent="selectedColor = 'success'"
                      ></div>
                      <div
                        :class="[selectedColor === 'purple' && 'is-active']"
                        tabindex="0"
                        class="color-code is-purple"
                        @click="selectedColor = 'purple'"
                        @keydown.space.prevent="selectedColor = 'purple'"
                      ></div>
                    </div>
                  </VControl>
                </VField>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Notifications</label>
              </div>
              <div class="field-body">
                <VField>
                  <VControl>
                    <Multiselect
                      v-model="notificationMedium"
                      placeholder="Select a channel"
                      :options="['Email', 'SMS', 'Slack', 'Project Board']"
                    />
                    <a class="add-link">Add Notification</a>
                  </VControl>
                </VField>

                <VField class="is-image-select">
                  <VControl>
                    <Multiselect
                      v-model="notificationTarget"
                      placeholder="Select a target"
                      label="name"
                      value="name"
                      :options="[
                        {
                          name: 'All',
                          value: '',
                          icon: '/images/avatars/placeholder.jpg',
                        },
                        {
                          name: 'Erik K.',
                          value: 'eric',
                          icon: '/images/avatars/svg/vuero-1.svg',
                        },
                        {
                          name: 'Joshua S.',
                          value: 'joshua',
                          icon: '/demo/avatars/12.jpg',
                        },
                        {
                          name: 'Melany W.',
                          value: 'melany',
                          icon: '/demo/avatars/25.jpg',
                        },
                        {
                          name: 'Alice C.',
                          value: 'alice',
                          icon: '/demo/avatars/7.jpg',
                        },
                        {
                          name: 'Esteban C.',
                          value: 'esteban',
                          icon: '/demo/avatars/18.jpg',
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.is-navbar {
  .form-layout {
    margin-top: 30px;
  }
}

.form-layout {
  max-width: 740px;
  margin: 0 auto;

  &.is-stacked {
    .form-outer {
      .form-body {
        padding: 0;

        .form-section {
          padding: 40px;
          border-bottom: 1px solid var(--fade-grey-dark-4);

          &.is-grey {
            background: #fafafa;
          }

          .form-section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--fade-grey-dark-4);
            padding-bottom: 20px;
            margin-bottom: 30px;

            .left {
              h3 {
                font-family: var(--font-alt);
                font-weight: 600;
                color: var(--dark-text);
              }
            }
          }

          .form-section-inner {
            &.is-horizontal {
              max-width: 540px;
            }

            .field {
              &.is-horizontal {
                .field-label {
                  padding-top: 0.75em;
                }
              }
            }
          }

          .columns {
            .column {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
          }

          .field {
            .control {
              .checkbox {
                padding: 0;
                padding-right: 10px;
                font-size: 0.9rem;
              }
            }
          }

          .participants {
            display: flex;
            padding-bottom: 10px;

            .v-avatar {
              margin-right: 8px;
            }

            .add-participant {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
              width: 40px;
              min-width: 40px;
              border-radius: var(--radius-rounded);
              border: 1.6px dashed var(--light-text);
              color: var(--light-text);
              padding: 0;
              background: none;
              margin-left: 4px;
              cursor: pointer;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;

              &:hover,
              &:focus {
                border: 1.6px solid var(--primary);
                color: var(--primary);
              }

              &:focus-visible {
                outline-offset: var(--accessibility-focus-outline-offset);
                outline-width: var(--accessibility-focus-outline-width);
                outline-style: var(--accessibility-focus-outline-style);
                outline-color: var(--accessibility-focus-outline-color);
              }

              svg {
                height: 16px;
                width: 16px;
              }
            }
          }

          .color-codes {
            display: flex;
            align-items: center;
            height: 38px;

            .color-code {
              height: 14px;
              width: 14px;
              border-radius: var(--radius-rounded);
              background: var(--white);
              margin-right: 10px;
              border: 3px solid var(--light-text);
              cursor: pointer;
              opacity: 0.6;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;

              &:hover,
              &:focus {
                opacity: 1;
              }

              &:focus-visible {
                outline-offset: var(--accessibility-focus-outline-offset);
                outline-width: var(--accessibility-focus-outline-width);
                outline-style: var(--accessibility-focus-outline-style);
                outline-color: var(--accessibility-focus-outline-color);
              }

              &.is-primary {
                border-color: var(--primary);

                &.is-active {
                  background: var(--primary);
                }
              }

              &.is-secondary {
                border-color: var(--secondary);

                &.is-active {
                  background: var(--secondary);
                }
              }

              &.is-info {
                border-color: var(--info);

                &.is-active {
                  background: var(--info);
                }
              }

              &.is-success {
                border-color: var(--success);

                &.is-active {
                  background: var(--success);
                }
              }

              &.is-purple {
                border-color: var(--purple);

                &.is-active {
                  background: var(--purple);
                }
              }
            }
          }

          .add-link {
            display: inline-block;
            padding: 4px 0;
            font-family: var(--font);
            font-weight: 500;
            font-size: 0.9rem;
            color: var(--primary);
          }
        }
      }
    }
  }

  .form-outer {
    @include vuero-s-card;

    padding: 0;

    .form-header {
      padding: 12px 20px;
      border-bottom: 1px solid var(--fade-grey-dark-3);
      transition: all 0.3s; // transition-all test

      &.is-stuck {
        background: var(--white);
        padding-right: 80px;
        border-left: 1px solid var(--fade-grey-dark-3);
      }

      .form-header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .left {
        h3 {
          font-family: var(--font-alt);
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.3;
        }

        p {
          font-size: 0.95rem;
        }
      }
    }

    .form-body {
      padding: 20px 40px 40px;
    }
  }
}

.is-dark {
  .form-layout {
    &.is-stacked {
      .form-outer {
        .form-body {
          .form-section {
            border-color: var(--dark-sidebar-light-12);

            &.is-grey {
              background: var(--dark-sidebar-light-4);
            }

            .form-section-header {
              border-color: var(--dark-sidebar-light-12);

              .left {
                h3 {
                  color: var(--dark-dark-text);
                }
              }
            }

            .form-section-inner {
              .add-link {
                color: var(--primary);
              }

              .color-codes {
                .color-code {
                  background: var(--dark-sidebar-light-6);

                  &.is-primary {
                    border-color: var(--primary);
                  }
                }
              }

              .participants {
                .add-participant {
                  &:hover {
                    border: 1.6px solid var(--primary);
                    color: var(--primary);
                  }
                }
              }
            }
          }
        }
      }
    }

    .form-outer {
      @include vuero-card--dark;

      .form-header {
        border-color: var(--dark-sidebar-light-12);

        &.is-stuck {
          background: var(--dark-sidebar);
          border-color: var(--dark-sidebar-light-6);
        }

        .left {
          h3 {
            color: var(--dark-dark-text);
          }
        }
      }

      .form-body {
        .field {
          .control {
            .input,
            .textarea {
              &:focus {
                border-color: var(--primary);
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .form-layout {
    &.is-stacked {
      .form-outer {
        .form-body {
          .is-vhidden {
            display: none !important;
          }
        }
      }

      .v-calendar-combo {
        margin: 0 !important;

        .column {
          padding-top: 0 !important;
          padding-bottom: 0 !important;

          &:first-child {
            padding-left: 0 !important;
          }

          &:last-child {
            padding-right: 0 !important;
          }
        }
      }
    }

    .form-outer {
      .form-header {
        .form-header-inner {
          flex-direction: column;

          .left {
            text-align: center;
            margin-bottom: 12px;
          }

          .right {
            width: 100%;

            .buttons {
              display: flex;
              justify-content: space-between;
              margin: 0;

              .button {
                margin: 0;
                width: 49%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
