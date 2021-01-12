<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Profile Edit 2 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="edit-profile"
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="layouts-sidebar"
            >
              <span class="menu-toggle has-chevron">
                <span class="icon-box-toggle">
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Edit Profile</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Edit Profile-->
            <div class="account-wrapper">
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
                        :to="{ name: 'admin-profile-edit-1' }"
                        class="account-menu-item"
                      >
                        <i class="lnil lnil-user-alt"></i>
                        <span>General</span>
                        <span class="end">
                          <Icon icon="fa-arrow-right" />
                        </span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'admin-profile-edit-2' }"
                        class="account-menu-item is-active"
                      >
                        <i class="lnil lnil-crown-alt"></i>
                        <span>Experience</span>
                        <span class="end">
                          <Icon icon="fa-arrow-right" />
                        </span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'admin-profile-edit-3' }"
                        class="account-menu-item"
                      >
                        <i class="lnil lnil-quill"></i>
                        <span>Skills</span>
                        <span class="end">
                          <Icon icon="fa-arrow-right" />
                        </span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'admin-profile-edit-4' }"
                        class="account-menu-item"
                      >
                        <i class="lnil lnil-cog"></i>
                        <span>Settings</span>
                        <span class="end">
                          <Icon icon="fa-arrow-right" />
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
                          <h3>Work Experience</h3>
                          <p>Edit your work experience info</p>
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
                                        <Icon icon="feather:box" />
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
                                        <Icon icon="feather:briefcase" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="column is-12">
                                  <div class="field">
                                    <div class="control">
                                      <button
                                        class="button h-button is-primary is-raised is-fullwidth"
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
                              src="/@images/photo/demo/brands/airbnb.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <div class="meta">
                              <span class="dark-inverted">Airbnb HQ</span>
                              <span>
                                <span>January 2018</span>
                                <Icon icon="fa-circle" />
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
                              src="/@images/photo/demo/brands/facebook.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <div class="meta">
                              <span class="dark-inverted">Facebook</span>
                              <span>
                                <span>January 2018</span>
                                <Icon icon="fa-circle" />
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
                              src="/@images/photo/demo/brands/atlassian.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <div class="meta">
                              <span class="dark-inverted">Atlassian</span>
                              <span>
                                <span>January 2018</span>
                                <Icon icon="fa-circle" />
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
                              src="/@images/photo/demo/brands/github.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <div class="meta">
                              <span class="dark-inverted">Github</span>
                              <span>
                                <span>January 2018</span>
                                <Icon icon="fa-circle" />
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
                              src="/@images/photo/demo/brands/slack.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <div class="meta">
                              <span class="dark-inverted">Slack</span>
                              <span>
                                <span>January 2018</span>
                                <Icon icon="fa-circle" />
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
                              src="/@images/photo/demo/brands/gitlab.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <div class="meta">
                              <span class="dark-inverted">Gitlab</span>
                              <span>
                                <span>January 2018</span>
                                <Icon icon="fa-circle" />
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
                                class="button h-button is-raised add-setting-item is-dark-outlined"
                              >
                                <span class="icon">
                                  <Icon icon="fa-plus" />
                                </span>
                                <span>Add</span>
                              </button>
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
  </DefaultLayout>
</template>
