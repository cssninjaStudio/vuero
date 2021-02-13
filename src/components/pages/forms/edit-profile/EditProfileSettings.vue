<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import useNotyf from '/@src/composition/use/useNotyf'
import sleep from '/@src/utils/sleep'

const notyf = useNotyf()
const { y } = useWindowScroll()

const isLoading = ref(false)
const twoFactor = ref(true)
const notifications = ref(false)
const notificationsLow = ref(false)
const marketing = ref(false)
const partners = ref(false)

const isScrolling = computed(() => {
  return y.value > 30
})
const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('Your changes have been successfully saved!')
  isLoading.value = false
}
</script>

<template>
  <!--Form-->
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>Settings</h3>
          <p>Edit your account prefs and settings</p>
        </div>
        <div class="right">
          <div class="buttons">
            <V-Button
              :to="{ name: 'admin-layouts-profile-view' }"
              fa="lnir lnir-arrow-left rem-100"
              color="light"
              dark-outlined
            >
              Go Back
            </V-Button>
            <V-Button
              color="primary"
              raised
              :loading="isLoading"
              @click="onSave"
            >
              Save Changes
            </V-Button>
          </div>
        </div>
      </div>
    </div>
    <form class="form-body" @submit.prevent="onSave">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Change Password</h4>
          <p>For an improved account security</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control iconify="feather:unlock">
                <input
                  type="password"
                  class="input"
                  placeholder="Old Password"
                  autocomplete="current-password"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control iconify="feather:lock">
                <input
                  type="password"
                  class="input"
                  placeholder="New Password"
                  autocomplete="new-password"
                />
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control iconify="feather:lock">
                <input
                  type="password"
                  class="input"
                  placeholder="Repeat New Password"
                  autocomplete="new-password"
                />
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>2 Factor Auth</h4>
          <p>Enable or disable 2 factor auth</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control>
                <div class="switch-block">
                  <label class="form-switch is-primary">
                    <input
                      id="two-factor-switch-input"
                      v-model="twoFactor"
                      type="checkbox"
                      class="is-switch"
                    />
                    <i></i>
                  </label>
                  <div class="text">
                    <label for="two-factor-switch-input">
                      <span>Enable / disable 2 factor</span>
                    </label>
                  </div>
                </div>
              </V-Control>
            </V-Field>
          </div>
          <!--Field-->
          <div v-if="twoFactor" class="column is-12">
            <V-Field>
              <V-Control iconify="feather:smartphone">
                <input
                  type="text"
                  class="input"
                  placeholder="Phone Number"
                  autocomplete="tel"
                  inputmode="tel"
                />
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Notifications</h4>
          <p>Configure how you receive notifications</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control>
                <div class="switch-block">
                  <label class="form-switch is-primary">
                    <input
                      id="notifications-switch-input"
                      v-model="notifications"
                      type="checkbox"
                      class="is-switch"
                    />
                    <i></i>
                  </label>
                  <div class="text">
                    <label for="notifications-switch-input">
                      <span>Disable all notifications</span>
                    </label>
                  </div>
                </div>
              </V-Control>
            </V-Field>

            <V-Field>
              <V-Control>
                <div class="switch-block">
                  <label class="form-switch is-primary">
                    <input
                      id="notifications-low-switch-input"
                      v-model="notificationsLow"
                      type="checkbox"
                      class="is-switch"
                    />
                    <i></i>
                  </label>
                  <div class="text">
                    <label for="notifications-low-switch-input">
                      <span>Disable low priority notifications</span>
                    </label>
                  </div>
                </div>
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Marketing</h4>
          <p>Configure how you receive promotions</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <V-Field>
              <V-Control>
                <div class="switch-block">
                  <label class="form-switch is-primary">
                    <input
                      id="marketing-low-switch-input"
                      v-model="marketing"
                      type="checkbox"
                      class="is-switch"
                    />
                    <i></i>
                  </label>
                  <div class="text">
                    <label for="marketing-low-switch-input">
                      <span>Enable marketing emails</span>
                    </label>
                  </div>
                </div>
              </V-Control>
            </V-Field>
            <V-Field>
              <V-Control>
                <div class="switch-block">
                  <label class="form-switch is-primary">
                    <input
                      id="partners-low-switch-input"
                      v-model="partners"
                      type="checkbox"
                      class="is-switch"
                    />
                    <i></i>
                  </label>
                  <div class="text">
                    <label for="partners-low-switch-input">
                      <span>Enable partners emails</span>
                    </label>
                  </div>
                </div>
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
