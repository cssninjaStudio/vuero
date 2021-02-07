<template>
  <!--Form-->
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header">
      <div class="form-head-inner">
        <div class="left">
          <h3>Skills and Tools</h3>
          <p>Edit your skills and tools</p>
        </div>
        <div class="right">
          <div class="buttons">
            <a
              :to="{ name: 'admin-layouts-profile-view' }"
              class="button v-button is-light is-dark-outlined"
            >
              <span class="icon">
                <i class="lnir lnir-arrow-left rem-100"></i>
              </span>
              <span>Go Back</span>
            </a>
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
          <h4>Languages</h4>
          <p>How many languages do you speak?</p>
          <a class="action-link is-hidden">Cancel</a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <div class="setting-form is-hidden">
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <div class="field">
                    <div class="control is-combo">
                      <div class="image-combo-box has-rounded-images">
                        <div class="box-inner">
                          <div class="combo-item">
                            <img
                              src="/images/icons/flags/united-states-of-america.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <span class="selected-item">Select a language</span>
                          </div>
                        </div>
                        <div class="box-chevron">
                          <i
                            class="iconify"
                            data-icon="feather:chevron-down"
                          ></i>
                        </div>
                        <div class="box-dropdown">
                          <div class="dropdown-inner has-slimscroll">
                            <ul>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/flags/united-states-of-america.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">English</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/flags/france.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">French</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/flags/germany.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">German</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/flags/spain.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">Spanish</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <div class="control">
                      <div class="h-select">
                        <div class="select-box">
                          <span>Select a Level</span>
                        </div>
                        <div class="select-icon">
                          <i
                            class="iconify"
                            data-icon="feather:chevron-down"
                          ></i>
                        </div>
                        <div class="select-drop has-slimscroll-sm">
                          <div class="drop-inner">
                            <div class="option-row">
                              <input
                                type="radio"
                                name="language_level_select"
                              />
                              <div class="option-meta">
                                <span>Level 1</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input
                                type="radio"
                                name="language_level_select"
                              />
                              <div class="option-meta">
                                <span>Level 2</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input
                                type="radio"
                                name="language_level_select"
                              />
                              <div class="option-meta">
                                <span>Level 3</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input
                                type="radio"
                                name="language_level_select"
                              />
                              <div class="option-meta">
                                <span>Level 4</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input
                                type="radio"
                                name="language_level_select"
                              />
                              <div class="option-meta">
                                <span>Level 5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-12">
                  <div class="field">
                    <div class="control has-icon">
                      <input
                        type="text"
                        class="input"
                        placeholder="Write a quick comment..."
                      />
                      <div class="form-icon">
                        <i
                          class="iconify"
                          data-icon="feather:message-circle"
                        ></i>
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
                        Add Language
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/icons/flags/united-states-of-america.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">English</span>
              <span>Native Speaker, fluent</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/icons/flags/france.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">French</span>
              <span>Fluent, written and spoken</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/icons/flags/germany.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">German</span>
              <span>Beginner level</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Experience Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/icons/flags/spain.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">Spanish</span>
              <span>Beginner level</span>
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
              <span>Add a new language item</span>
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

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Skills</h4>
          <p>Add your best skills</p>
          <a class="action-link is-hidden">Cancel</a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <div class="setting-form is-hidden">
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <div class="field">
                    <div class="control is-combo">
                      <div class="image-combo-box has-rounded-images">
                        <div class="box-inner">
                          <div class="combo-item">
                            <img
                              src="/images/icons/stacks/html5.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <span class="selected-item">Select a Skill</span>
                          </div>
                        </div>
                        <div class="box-chevron">
                          <i
                            class="iconify"
                            data-icon="feather:chevron-down"
                          ></i>
                        </div>
                        <div class="box-dropdown">
                          <div class="dropdown-inner has-slimscroll">
                            <ul>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/html5.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">Html5</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/css3.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">CSS3</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/js.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">Javascript</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/reactjs.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">ReactJs</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/angular.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">Angular</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/vuejs.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">VueJs</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/nodejs.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">NodeJs</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/csharp.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">C#</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <div class="control">
                      <div class="h-select">
                        <div class="select-box">
                          <span>Years of Exp.</span>
                        </div>
                        <div class="select-icon">
                          <i
                            class="iconify"
                            data-icon="feather:chevron-down"
                          ></i>
                        </div>
                        <div class="select-drop has-slimscroll-sm">
                          <div class="drop-inner">
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>1 Year of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>2 Years of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>3 Years of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>4 Years of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>5 Years of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>6 Years of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>7 Years of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>8 Years of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>9 Years of exp.</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="skills_years_exp" />
                              <div class="option-meta">
                                <span>10+ Years of exp.</span>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <span class="icon">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span>Add Skill</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Skill Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/icons/stacks/js.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">Javascript</span>
              <span>7 years of experience</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Skill Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/icons/stacks/html5.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">Html5</span>
              <span>10+ years of experience</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Skill Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/icons/stacks/css3.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">CSS3</span>
              <span>10+ years of experience</span>
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
              <span>Add a new skill item</span>
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

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Tools</h4>
          <p>Add the tools you work with</p>
          <a class="action-link is-hidden">Cancel</a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <div class="setting-form is-hidden">
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <div class="field">
                    <div class="control is-combo">
                      <div class="image-combo-box has-rounded-images">
                        <div class="box-inner">
                          <div class="combo-item">
                            <img
                              src="/images/icons/stacks/illustrator.svg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <span class="selected-item">Select a Tool</span>
                          </div>
                        </div>
                        <div class="box-chevron">
                          <i
                            class="iconify"
                            data-icon="feather:chevron-down"
                          ></i>
                        </div>
                        <div class="box-dropdown">
                          <div class="dropdown-inner has-slimscroll">
                            <ul>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/illustrator.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">Illustrator</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/icons/stacks/photoshop.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">Photoshop</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/photo/demo/brands/jira.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">Jira Software</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                              <li>
                                <span class="item-icon">
                                  <img
                                    src="/images/photo/demo/brands/office.svg"
                                    alt=""
                                  />
                                </span>
                                <span class="item-name">MS Office</span>
                                <span class="checkmark">
                                  <i
                                    class="iconify"
                                    data-icon="feather:check"
                                  ></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <div class="control">
                      <div class="h-select">
                        <div class="select-box">
                          <span>Select Level</span>
                        </div>
                        <div class="select-icon">
                          <i
                            class="iconify"
                            data-icon="feather:chevron-down"
                          ></i>
                        </div>
                        <div class="select-drop has-slimscroll-sm">
                          <div class="drop-inner">
                            <div class="option-row">
                              <input type="radio" name="tool_level_select" />
                              <div class="option-meta">
                                <span>Level 1</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="tool_level_select" />
                              <div class="option-meta">
                                <span>Level 2</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="tool_level_select" />
                              <div class="option-meta">
                                <span>Level 3</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="tool_level_select" />
                              <div class="option-meta">
                                <span>Level 4</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="tool_level_select" />
                              <div class="option-meta">
                                <span>Level 5</span>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <span class="icon">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span>Add Tool</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Skill Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/icons/stacks/illustrator.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">Illustrator</span>
              <span>Advanced level</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Skill Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/photo/demo/brands/jira.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">Jira Software</span>
              <span>Intermediate level</span>
            </div>
            <div class="end">
              <EditSettingItemDropdown />
            </div>
          </div>

          <!--Skill Item-->
          <div class="setting-item">
            <div class="icon-wrap has-img">
              <img
                src="/images/photo/demo/brands/office.svg"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="meta">
              <span class="dark-inverted">MS Office</span>
              <span>Expert level</span>
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
              <span>Add a new tool item</span>
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
