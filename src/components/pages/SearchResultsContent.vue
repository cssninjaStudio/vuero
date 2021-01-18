<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'all' | 'people' | 'records'>('all')
</script>

<template>
  <!--Search Results-->
  <div class="search-results-wrapper">
    <div class="search-results-header">
      <div class="control has-icon">
        <input class="input" placeholder="Search again..." />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="search-info">
        <span>54 results found</span>
      </div>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a @click="activeTab = 'all'"><span>All</span></a>
            </li>
            <li :class="[activeTab === 'people' && 'is-active']">
              <a @click="activeTab = 'people'"><span>People</span></a>
            </li>
            <li :class="[activeTab === 'records' && 'is-active']">
              <a @click="activeTab = 'records'"><span>Records</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="search-results-body">
      <div class="columns">
        <!--Filters-->
        <div class="column is-4">
          <div class="filter-box">
            <h4 class="dark-inverted">Publication</h4>

            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Newest
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">23</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Recently updated
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">31</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Upvoted
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">12</span>
                </div>
              </div>
            </div>
          </div>

          <div class="filter-box">
            <h4 class="dark-inverted">Type</h4>

            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  User Profile
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">19</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Project
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">174</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Blog Post
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">71</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Wireframes
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">54</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Files
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">8</span>
                </div>
              </div>
            </div>
          </div>

          <div class="filter-box">
            <h4 class="dark-inverted">Topics</h4>

            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Engineering
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">45</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Management
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">12</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Software
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">36</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Human Ressources
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">3</span>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Finance
                </label>
                <div class="control-end">
                  <span class="tag is-rounded">7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Results-->
        <div class="column is-8">
          <div
            id="all-items-tab"
            class="tab-content"
            :class="[activeTab === 'all' && 'is-active']"
          >
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="group-header">
                <div class="icon-wrap">
                  <i class="iconify" data-icon="feather:user"></i>
                </div>
                <h4>People</h4>
              </div>

              <div class="search-results-list">
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
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
                      <span>Alice Carasca</span>
                      <span>Software Engineer</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        data-user-popover="9"
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
                      <span>Mary Lebowski</span>
                      <span>Project Manager</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/14.jpg"
                        alt=""
                        data-user-popover="14"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/england.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Ryan Brentman</span>
                      <span>Web Developer</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/23.jpg"
                        alt=""
                        data-user-popover="21"
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
                      <span>Irina Vierbovsky</span>
                      <span>Project Manager</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/32.jpg"
                        alt=""
                        data-user-popover="28"
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
                      <span>Jonathan Krugger</span>
                      <span>Product Manager</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/39.jpg"
                        alt=""
                        data-user-popover="33"
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
                      <span>Alejandro Badajoz</span>
                      <span>Business Analyst</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/19.jpg"
                        alt=""
                        data-user-popover="17"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/germany.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Greta Kroppfer</span>
                      <span>Sales Manager</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="group-header">
                <div class="icon-wrap">
                  <i class="iconify" data-icon="feather:file-text"></i>
                </div>
                <h4>Records</h4>
              </div>

              <div class="search-results-list">
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/1.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Delivery App Project</span>
                      <span>August 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/2.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Health and Fitness Dashboard</span>
                      <span>October 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/icons/files/sheet.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Tech Summit Expenses</span>
                      <span>XLS file</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/3.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Learning Tracker Dashboard</span>
                      <span>September 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/4.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Banking and Finance Dashboard</span>
                      <span>October 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/icons/files/doc-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Project Outline</span>
                      <span>DOCX file</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/icons/files/pdf.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>2020 Projects Digest</span>
                      <span>PDF file</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/5.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Resume Management Mobile App</span>
                      <span>October 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/icons/files/ai.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Website Homepage Redesign</span>
                      <span>AI file</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="people-items-tab"
            class="tab-content"
            :class="[activeTab === 'people' && 'is-active']"
          >
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="search-results-list">
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
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
                      <span>Alice Carasca</span>
                      <span>Software Engineer</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/5.jpg"
                        alt=""
                        data-user-popover="9"
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
                      <span>Mary Lebowski</span>
                      <span>Project Manager</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/14.jpg"
                        alt=""
                        data-user-popover="14"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/england.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Ryan Brentman</span>
                      <span>Web Developer</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/23.jpg"
                        alt=""
                        data-user-popover="21"
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
                      <span>Irina Vierbovsky</span>
                      <span>Project Manager</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/32.jpg"
                        alt=""
                        data-user-popover="28"
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
                      <span>Jonathan Krugger</span>
                      <span>Product Manager</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/39.jpg"
                        alt=""
                        data-user-popover="33"
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
                      <span>Alejandro Badajoz</span>
                      <span>Business Analyst</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/19.jpg"
                        alt=""
                        data-user-popover="17"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                      <img
                        class="badge"
                        src="/@images/icons/flags/germany.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Greta Kroppfer</span>
                      <span>Sales Manager</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="records-items-tab"
            class="tab-content"
            :class="[activeTab === 'records' && 'is-active']"
          >
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="search-results-list">
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/1.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Delivery App Project</span>
                      <span>August 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/2.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Health and Fitness Dashboard</span>
                      <span>October 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/icons/files/sheet.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Tech Summit Expenses</span>
                      <span>XLS file</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/3.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Learning Tracker Dashboard</span>
                      <span>September 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/4.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Banking and Finance Dashboard</span>
                      <span>October 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/icons/files/doc-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Project Outline</span>
                      <span>DOCX file</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/icons/files/pdf.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>2020 Projects Digest</span>
                      <span>PDF file</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/apps/5.png"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Resume Management Mobile App</span>
                      <span>October 2020</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
                <!--Item-->
                <div class="search-results-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-medium">
                      <img
                        class="avatar is-squared"
                        src="/@images/icons/files/ai.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Website Homepage Redesign</span>
                      <span>AI file</span>
                    </div>
                    <div class="flex-end">
                      <button class="button h-button is-dark-outlined">
                        Details
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
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_search.scss';
</style>
