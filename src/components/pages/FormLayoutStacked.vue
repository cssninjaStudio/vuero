<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll()

const isStuck = computed(() => {
  return y.value > 30
})
</script>

<template>
  <!--Form Layout 4-->
  <div class="form-layout is-stacked">
    <div class="form-outer">
      <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
        <div class="form-header-inner">
          <div class="left">
            <h3>Schedule a meeting</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <a href="#" class="button h-button is-light is-dark-outlined">
                <span class="icon">
                  <i class="lnir lnir-arrow-left rem-100"></i>
                </span>
                <span>Cancel</span>
              </a>
              <button
                id="save-button"
                class="button h-button is-primary is-raised"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <div class="form-section">
          <div class="columns is-multiline">
            <div class="column is-12">
              <div class="field">
                <div class="control has-icon">
                  <input
                    type="text"
                    class="input"
                    placeholder="What is this meeting about?"
                  />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:slack"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="field">
                <label>Meeting date</label>
                <div class="control has-icon">
                  <input
                    id="start-date"
                    class="input form-datepicker"
                    placeholder="Start Date"
                  />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:calendar"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="field">
                <label class="is-vhidden">Meeting date</label>
                <div class="control has-icon">
                  <input
                    id="end-date"
                    class="input form-datepicker"
                    placeholder="End Date"
                  />
                  <div class="form-icon">
                    <i class="iconify" data-icon="feather:calendar"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="field is-clock-timepicker">
                <label>Meeting time</label>
                <div class="control">
                  <input
                    id="start-time"
                    type="time"
                    name="start_time"
                    class="input form-timepicker"
                  />
                  <div class="chevron">
                    <i class="iconify" data-icon="feather:chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="field is-clock-timepicker">
                <label class="is-vhidden">Meeting time</label>
                <div class="control">
                  <input
                    id="end-time"
                    type="time"
                    name="end_time"
                    class="input form-timepicker"
                  />
                  <div class="chevron">
                    <i class="iconify" data-icon="feather:chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12">
              <div class="field">
                <div class="control">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-section is-grey">
          <div class="form-section-header">
            <div class="left">
              <h3>Meeting details</h3>
            </div>
            <div class="right">
              <button class="button is-dark-outlined">Add People</button>
            </div>
          </div>

          <div class="form-section-inner is-horizontal">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Participants</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="participants">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          data-target="webuiPopover0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="h-avatar">
                        <span
                          class="avatar is-fake is-warning"
                          data-user-popover="36"
                        >
                          <span>BT</span>
                        </span>
                      </div>
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/18.jpg"
                          alt=""
                          data-user-popover="7"
                          data-target="webuiPopover2"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="h-avatar">
                        <span
                          class="avatar is-fake is-info"
                          data-user-popover="34"
                        >
                          <span>JD</span>
                        </span>
                      </div>
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/7.jpg"
                          alt=""
                          data-user-popover="0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <button class="add-participant">
                        <i class="iconify" data-icon="feather:plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Where</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control has-icon">
                    <input
                      class="input"
                      type="text"
                      placeholder="e.g. Conference room"
                    />
                    <div class="form-icon">
                      <i class="iconify" data-icon="feather:map-pin"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Meeting URL</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control has-icon">
                    <input
                      class="input"
                      type="text"
                      placeholder="https://zoom.com/m/156546"
                    />
                    <div class="form-icon">
                      <i class="iconify" data-icon="feather:video"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Calendar</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="h-select">
                      <div class="select-box">
                        <span>Pick a calendar</span>
                      </div>
                      <div class="select-icon">
                        <i class="iconify" data-icon="feather:chevron-down"></i>
                      </div>
                      <div class="select-drop has-slimscroll-sm">
                        <div class="drop-inner">
                          <div class="option-row">
                            <input type="radio" name="calendar_select" />
                            <div class="option-meta">
                              <span>My Calendar</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="calendar_select" />
                            <div class="option-meta">
                              <span>Team Calendar</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="calendar_select" />
                            <div class="option-meta">
                              <span>Company Calendar</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Description</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea"
                      rows="4"
                      placeholder="Tell us about any details you'd like us to know..."
                    ></textarea>
                  </div>
                  <a class="add-link">Add Attachments</a>
                </div>
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
                <div class="field">
                  <div class="control">
                    <div class="color-codes">
                      <div class="color-code is-primary"></div>
                      <div class="color-code is-secondary"></div>
                      <div class="color-code is-info"></div>
                      <div class="color-code is-success"></div>
                      <div class="color-code is-purple"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Notifications</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="h-select is-dropup">
                      <div class="select-box">
                        <span>Select a channel</span>
                      </div>
                      <div class="select-icon">
                        <i class="iconify" data-icon="feather:chevron-down"></i>
                      </div>
                      <div class="select-drop has-slimscroll-sm">
                        <div class="drop-inner">
                          <div class="option-row">
                            <input type="radio" name="channel_select" />
                            <div class="option-meta">
                              <span>Email</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="channel_select" />
                            <div class="option-meta">
                              <span>SMS</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="channel_select" />
                            <div class="option-meta">
                              <span>Slack</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="channel_select" />
                            <div class="option-meta">
                              <span>Project Board</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a class="add-link">Add Notification</a>
                </div>
                <div class="field">
                  <div class="control">
                    <div class="h-select has-media is-dropup">
                      <div class="select-box">
                        <span>All</span>
                      </div>
                      <div class="select-icon">
                        <i class="iconify" data-icon="feather:chevron-down"></i>
                      </div>
                      <div class="select-drop has-slimscroll-sm">
                        <div class="drop-inner">
                          <div class="option-row">
                            <input
                              type="radio"
                              name="notification_select_1"
                              checked
                            />
                            <div class="option-meta">
                              <img
                                src="/@images/avatars/placeholder.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span>All</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="notification_select_1" />
                            <div class="option-meta">
                              <img
                                src="/@images/avatars/photos/8.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span>Erik K.</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="notification_select_1" />
                            <div class="option-meta">
                              <img
                                src="/@images/avatars/photos/12.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span>Joshua S.</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="notification_select_1" />
                            <div class="option-meta">
                              <img
                                src="/@images/avatars/photos/25.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span>Melany W.</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="notification_select_1" />
                            <div class="option-meta">
                              <img
                                src="/@images/avatars/photos/7.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span>Alice C.</span>
                            </div>
                          </div>
                          <div class="option-row">
                            <input type="radio" name="notification_select_1" />
                            <div class="option-meta">
                              <img
                                src="/@images/avatars/photos/18.jpg"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span>Esteban C.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_forms.scss';
</style>
