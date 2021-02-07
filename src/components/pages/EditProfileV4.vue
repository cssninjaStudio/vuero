<template>
  <!--Form-->
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header">
      <div class="form-head-inner">
        <div class="left">
          <h3>Settings</h3>
          <p>Edit your account prefs and settings</p>
        </div>
        <div class="right">
          <div class="buttons">
            <RouterLink
              :to="{ name: 'admin-layouts-profile-view' }"
              class="button v-button is-light is-dark-outlined"
            >
              <span class="icon">
                <i class="lnir lnir-arrow-left rem-100"></i>
              </span>
              <span>Go Back</span>
            </RouterLink>
            <button
              id="save-button"
              class="button v-button is-primary is-raised"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Change Password</h4>
          <p>For an improved account security</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <div class="field">
              <div class="control has-icon">
                <input
                  type="password"
                  class="input"
                  placeholder="Old Password"
                />
                <div class="form-icon">
                  <i class="iconify" data-icon="feather:unlock"></i>
                </div>
              </div>
            </div>
          </div>
          <!--Field-->
          <div class="column is-12">
            <div class="field">
              <div class="control has-icon">
                <input
                  type="password"
                  class="input"
                  placeholder="New Password"
                />
                <div class="form-icon">
                  <i class="iconify" data-icon="feather:lock"></i>
                </div>
              </div>
            </div>
          </div>
          <!--Field-->
          <div class="column is-12">
            <div class="field">
              <div class="control has-icon">
                <input
                  type="password"
                  class="input"
                  placeholder="Repeat New Password"
                />
                <div class="form-icon">
                  <i class="iconify" data-icon="feather:lock"></i>
                </div>
              </div>
            </div>
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
            <div class="field">
              <div class="control has-icon">
                <div class="switch-block no-padding-all">
                  <label class="form-switch is-primary">
                    <input type="checkbox" class="is-switch" checked />
                    <i></i>
                  </label>
                  <div class="text">
                    <span>Enable / disable 2 factor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Field-->
          <div class="column is-12">
            <div class="field">
              <div class="control has-icon">
                <input type="text" class="input" placeholder="Phone Number" />
                <div class="form-icon">
                  <i class="iconify" data-icon="feather:smartphone"></i>
                </div>
              </div>
            </div>
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
            <div class="field">
              <div class="control has-icon">
                <div class="switch-block no-padding-all">
                  <label class="form-switch is-primary">
                    <input type="checkbox" class="is-switch" />
                    <i></i>
                  </label>
                  <div class="text">
                    <span>Disable all notifications</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control has-icon">
                <div class="switch-block no-padding-all">
                  <label class="form-switch is-primary">
                    <input type="checkbox" class="is-switch" />
                    <i></i>
                  </label>
                  <div class="text">
                    <span>Disable low priority notifications</span>
                  </div>
                </div>
              </div>
            </div>
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
            <div class="field">
              <div class="control has-icon">
                <div class="switch-block no-padding-all">
                  <label class="form-switch is-primary">
                    <input type="checkbox" class="is-switch" />
                    <i></i>
                  </label>
                  <div class="text">
                    <span>Enable marketing emails</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control has-icon">
                <div class="switch-block no-padding-all">
                  <label class="form-switch is-primary">
                    <input type="checkbox" class="is-switch" />
                    <i></i>
                  </label>
                  <div class="text">
                    <span>Enable partner emails</span>
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
