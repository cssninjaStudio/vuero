<template>
  <!--Form-->
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header">
      <div class="form-head-inner">
        <div class="left">
          <h3>Work Experience</h3>
          <p>Edit your work experience info</p>
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
          <h4>Previous Experiences</h4>
          <p>This will help others assess your experience</p>
          <a class="action-link is-hidden">Cancel</a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <div class="setting-form is-hidden">
            <div class="filepond-profile-wrap is-tiny">
              <input
                type="file"
                class="profile-filepond"
                name="profile_filepond"
                accept="image/png, image/jpeg, image/gif"
              />
            </div>
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="field">
                    <div class="control">
                      <input
                        id="bulma-datepicker-4"
                        class="input"
                        type="date"
                        data-is-range="true"
                      />
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <div class="control has-icon">
                      <input
                        type="text"
                        class="input"
                        placeholder="Company Name"
                      />
                      <div class="form-icon">
                        <i class="iconify" data-icon="feather:box"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <div class="control has-icon">
                      <input
                        type="text"
                        class="input"
                        placeholder="Job Title"
                      />
                      <div class="form-icon">
                        <i class="iconify" data-icon="feather:briefcase"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-12">
                  <div class="field">
                    <div class="control">
                      <button
                        class="button v-button is-primary is-raised is-fullwidth"
                      >
                        Add Work Experience
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <img
              src="/images/photo/demo/brands/airbnb.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta">
              <span class="dark-inverted">Airbnb HQ</span>
              <span>
                <span>January 2018</span>
                <i class="fas fa-circle"></i>
                <span>October 2020</span>
              </span>
              <span>Product Manager</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <img
              src="/images/photo/demo/brands/facebook.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta">
              <span class="dark-inverted">Facebook</span>
              <span>
                <span>January 2018</span>
                <i class="fas fa-circle"></i>
                <span>October 2020</span>
              </span>
              <span>Product Manager</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <img
              src="/images/photo/demo/brands/atlassian.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta">
              <span class="dark-inverted">Atlassian</span>
              <span>
                <span>January 2018</span>
                <i class="fas fa-circle"></i>
                <span>October 2020</span>
              </span>
              <span>Web Developer</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <img
              src="/images/photo/demo/brands/github.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta">
              <span class="dark-inverted">Github</span>
              <span>
                <span>January 2018</span>
                <i class="fas fa-circle"></i>
                <span>October 2020</span>
              </span>
              <span>Web Developer</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <img
              src="/images/photo/demo/brands/slack.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta">
              <span class="dark-inverted">Slack</span>
              <span>
                <span>January 2018</span>
                <i class="fas fa-circle"></i>
                <span>October 2020</span>
              </span>
              <span>Web Developer</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <img
              src="/images/photo/demo/brands/gitlab.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="meta">
              <span class="dark-inverted">Gitlab</span>
              <span>
                <span>January 2018</span>
                <i class="fas fa-circle"></i>
                <span>October 2020</span>
              </span>
              <span>Web Developer</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Create Item-->
          <div class="setting-item is-create">
            <div class="icon-wrap">
              <i class="lnil lnil-circle-plus"></i>
            </div>
            <div class="meta">
              <span class="dark-inverted">New Item</span>
              <span>Add a new work experience item</span>
            </div>
            <div class="end">
              <button
                class="button v-button is-raised add-setting-item is-dark-outlined"
              >
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
