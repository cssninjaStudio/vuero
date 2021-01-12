<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Profile Edit 1 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="edit-profile"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
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
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                        <img
                          class="badge"
                          src="/@images/icons/flags/united-states-of-america.svg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
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
                        class="account-menu-item is-active"
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
                        class="account-menu-item"
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
                          <h3>General Info</h3>
                          <p>Edit your account's general information</p>
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
                          <h4>Profile Picture</h4>
                          <p>This is how others will recognize you</p>
                        </div>

                        <div class="h-avatar profile-h-avatar is-xl">
                          <img
                            class="avatar"
                            src="/@images/avatars/photos/8.jpg"
                            alt=""
                            @error="
                              $event.target.src =
                                'https://via.placeholder.com/150x150'
                            "
                          />
                          <div class="filepond-profile-wrap is-hidden">
                            <input
                              type="file"
                              class="profile-filepond"
                              name="profile_filepond"
                              accept="image/png, image/jpeg, image/gif"
                            />
                          </div>
                          <button class="button is-circle edit-button is-edit">
                            <span class="icon is-small">
                              <Icon icon="feather:edit-2" />
                            </span>
                          </button>
                          <button
                            class="button is-circle edit-button is-back is-hidden"
                          >
                            <span class="icon is-small">
                              <Icon icon="feather:arrow-left" />
                            </span>
                          </button>
                        </div>
                      </div>
                      <!--Fieldset-->
                      <div class="fieldset">
                        <div class="fieldset-heading">
                          <h4>Personal Info</h4>
                          <p>Others diserve to know you more</p>
                        </div>

                        <div class="columns is-multiline">
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control has-icon">
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="First Name"
                                />
                                <div class="form-icon">
                                  <Icon icon="feather:user" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control has-icon">
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Last Name"
                                />
                                <div class="form-icon">
                                  <Icon icon="feather:user" />
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
                                  placeholder="Job Title"
                                />
                                <div class="form-icon">
                                  <Icon icon="feather:briefcase" />
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
                                  placeholder="Location"
                                />
                                <div class="form-icon">
                                  <Icon icon="feather:map-pin" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-12">
                            <div class="field">
                              <div class="control">
                                <textarea
                                  class="textarea"
                                  rows="4"
                                  placeholder="About / Bio"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!--Fieldset-->
                      <div class="fieldset">
                        <div class="fieldset-heading">
                          <h4>Professional Info</h4>
                          <p>This can help you to win some opportunities</p>
                        </div>
                        <div class="columns is-multiline">
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control">
                                <div class="h-select">
                                  <div class="select-box">
                                    <span>Experience</span>
                                  </div>
                                  <div class="select-icon">
                                    <Icon icon="feather:chevron-down" />
                                  </div>
                                  <div class="select-drop has-slimscroll-sm">
                                    <div class="drop-inner">
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="experience_select"
                                        />
                                        <div class="option-meta">
                                          <span></span>
                                        </div>
                                      </div>
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="experience_select"
                                        />
                                        <div class="option-meta">
                                          <span>0-2 years</span>
                                        </div>
                                      </div>
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="experience_select"
                                        />
                                        <div class="option-meta">
                                          <span>2-5 years</span>
                                        </div>
                                      </div>
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="experience_select"
                                        />
                                        <div class="option-meta">
                                          <span>5-10 years</span>
                                        </div>
                                      </div>
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="experience_select"
                                        />
                                        <div class="option-meta">
                                          <span>10+ years</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control">
                                <div class="h-select">
                                  <div class="select-box">
                                    <span>Is this your first job?</span>
                                  </div>
                                  <div class="select-icon">
                                    <Icon icon="feather:chevron-down" />
                                  </div>
                                  <div class="select-drop has-slimscroll-sm">
                                    <div class="drop-inner">
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="question_select"
                                        />
                                        <div class="option-meta">
                                          <span>Yes</span>
                                        </div>
                                      </div>
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="question_select"
                                        />
                                        <div class="option-meta">
                                          <span>No</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control">
                                <div class="h-select">
                                  <div class="select-box">
                                    <span>Are you flexible?</span>
                                  </div>
                                  <div class="select-icon">
                                    <Icon icon="feather:chevron-down" />
                                  </div>
                                  <div class="select-drop has-slimscroll-sm">
                                    <div class="drop-inner">
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="flexibility_select"
                                        />
                                        <div class="option-meta">
                                          <span>Yes</span>
                                        </div>
                                      </div>
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="flexibility_select"
                                        />
                                        <div class="option-meta">
                                          <span>No</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control">
                                <div class="h-select">
                                  <div class="select-box">
                                    <span>Do you work remotely?</span>
                                  </div>
                                  <div class="select-icon">
                                    <Icon icon="feather:chevron-down" />
                                  </div>
                                  <div class="select-drop has-slimscroll-sm">
                                    <div class="drop-inner">
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="remote_select"
                                        />
                                        <div class="option-meta">
                                          <span>Yes</span>
                                        </div>
                                      </div>
                                      <div class="option-row">
                                        <input
                                          type="radio"
                                          name="remote_select"
                                        />
                                        <div class="option-meta">
                                          <span>No</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-12">
                            <div class="field">
                              <div class="control">
                                <input
                                  id="choices-text-remove-button"
                                  class="input"
                                  value="Software, Sass, Engineering"
                                  placeholder="Enter something"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!--Fieldset-->
                      <div class="fieldset">
                        <div class="fieldset-heading">
                          <h4>Social Profiles</h4>
                          <p>
                            This can help others finding you on social media
                          </p>
                        </div>
                        <div class="columns is-multiline">
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control has-icon">
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Facebook URL"
                                />
                                <div class="form-icon">
                                  <i class="fab fa-facebook-f"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control has-icon">
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Twitter URL"
                                />
                                <div class="form-icon">
                                  <i class="fab fa-twitter"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control has-icon">
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Dribbble URL"
                                />
                                <div class="form-icon">
                                  <i class="fab fa-dribbble"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control has-icon">
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Instagram URL"
                                />
                                <div class="form-icon">
                                  <i class="fab fa-instagram"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control has-icon">
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Github URL"
                                />
                                <div class="form-icon">
                                  <i class="fab fa-github"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--Field-->
                          <div class="column is-6">
                            <div class="field">
                              <div class="control has-icon">
                                <input
                                  type="text"
                                  class="input"
                                  placeholder="Gitlab URL"
                                />
                                <div class="form-icon">
                                  <i class="fab fa-gitlab"></i>
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
