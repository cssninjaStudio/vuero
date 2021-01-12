<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="edit-profile"
      class="view-wrapper is-webapp"
      data-page-title="Edit Profile"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Edit Profile</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner is-webapp">
            <!--Edit Profile-->
            <div class="account-wrapper is-webapp">
              <div class="columns">
                <!--Navigation-->
                <div class="column is-4">
                  <div class="account-box is-navigation">
                    <div class="media-flex-center">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="/@images/avatars/photos/8.jpg"
                          alt=""
                        />
                        <img
                          class="badge"
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                        />
                      </div>
                      <div class="flex-meta">
                        <span>Erik Kovalsky</span>
                        <span>product Manager</span>
                      </div>
                    </div>

                    <div class="account-menu">
                      <RouterLink
                        :to="{ name: 'webapp-profile-edit-1' }"
                        class="account-menu-item"
                      >
                        <i class="lnil lnil-user-alt"></i>
                        <span>General</span>
                        <span class="end">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'webapp-profile-edit-2' }"
                        class="account-menu-item"
                      >
                        <i class="lnil lnil-crown-alt"></i>
                        <span>Experience</span>
                        <span class="end">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'webapp-profile-edit-3' }"
                        class="account-menu-item"
                      >
                        <i class="lnil lnil-quill"></i>
                        <span>Skills</span>
                        <span class="end">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'webapp-profile-edit-4' }"
                        class="account-menu-item is-active"
                      >
                        <i class="lnil lnil-cog"></i>
                        <span>Settings</span>
                        <span class="end">
                          <i class="fas fa-arrow-right"></i>
                        </span>
                      </RouterLink>
                    </div>
                  </div>
                </div>

                <!--Form-->
                <div class="column is-8">
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
                              :to="{ name: 'admin-profile-view' }"
                              class="button h-button is-light is-dark-outlined"
                            >
                              <span class="icon">
                                <i class="lnir lnir-arrow-left rem-100"></i>
                              </span>
                              <span>Go Back</span>
                            </RouterLink>
                            <button
                              id="save-button"
                              class="button h-button is-primary is-raised"
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
                                  <Icon icon="feather:unlock" />
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
                                  <Icon icon="feather:lock" />
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
                                  <Icon icon="feather:lock" />
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
                                    <input
                                      type="checkbox"
                                      class="is-switch"
                                      checked
                                    />
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
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Phone Number"
                                />
                                <div class="form-icon">
                                  <Icon icon="feather:smartphone" />
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
                                    <span
                                      >Disable low priority notifications</span
                                    >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
