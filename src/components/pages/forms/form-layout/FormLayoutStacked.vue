<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import { popovers } from '/@src/data/users/userPopovers'

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

            <v-date-picker
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
            </v-date-picker>

            <v-date-picker
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
            </v-date-picker>

            <v-date-picker
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
            </v-date-picker>

            <div class="column is-12">
              <VField>
                <VControl>
                  <label class="checkbox">
                    <input type="checkbox" checked />
                    <span></span>
                    All day
                  </label>

                  <label class="checkbox is-outlined is-primary">
                    <input type="checkbox" />
                    <span></span>
                    Repeat every week
                  </label>
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
                      <tippy
                        class="has-help-cursor"
                        interactive
                        placement="top-start"
                      >
                        <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user8" />
                        </template>
                      </tippy>

                      <tippy
                        class="has-help-cursor"
                        interactive
                        placement="top-start"
                      >
                        <VAvatar color="warning" initials="BT" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user122" />
                        </template>
                      </tippy>

                      <tippy
                        class="has-help-cursor"
                        interactive
                        placement="top-start"
                      >
                        <VAvatar picture="/demo/avatars/18.jpg" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user18" />
                        </template>
                      </tippy>

                      <tippy
                        class="has-help-cursor"
                        interactive
                        placement="top-start"
                      >
                        <VAvatar color="info" initials="JD" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user123" />
                        </template>
                      </tippy>

                      <tippy
                        class="has-help-cursor"
                        interactive
                        placement="top-start"
                      >
                        <VAvatar picture="/demo/avatars/7.jpg" />
                        <template #content>
                          <UserPopoverContent :user="popovers.user7" />
                        </template>
                      </tippy>

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
                    <input
                      class="input"
                      type="text"
                      placeholder="e.g. Conference room"
                    />
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
                      :options="[
                        'My Calendar',
                        'Team Calendar',
                        'Company Calendar',
                      ]"
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
                      <div class="color-code is-primary"></div>
                      <div class="color-code is-secondary"></div>
                      <div class="color-code is-info"></div>
                      <div class="color-code is-success"></div>
                      <div class="color-code is-purple"></div>
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
                          <img
                            class="select-label-icon"
                            :src="value.icon"
                            alt=""
                          />
                          <span class="select-label-text">
                            {{ value.name }}
                          </span>
                        </div>
                      </template>
                      <template #option="{ option }">
                        <img
                          class="select-option-icon"
                          :src="option.icon"
                          alt=""
                        />
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
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_forms.scss';

@media only screen and (min-width: 767px) {
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
</style>
