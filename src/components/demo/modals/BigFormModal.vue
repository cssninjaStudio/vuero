<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmit(['close'])
</script>

<template>
  <div
    id="demo-big-form-modal"
    :class="[open && 'is-active']"
    class="modal h-modal is-big"
  >
    <div class="modal-background h-modal-close" @click="emit('close')"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <h3>Create Project</h3>
          <button
            class="h-modal-close ml-auto"
            aria-label="close"
            @click="emit('close')"
          >
            <i class="iconify" data-icon="feather:x"></i>
          </button>
        </header>
        <div class="modal-card-body">
          <div class="inner-content">
            <div class="modal-form">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="field">
                    <label>Project Name *</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Ex: A cool project"
                      />
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <label>Project Members</label>
                    <div class="control is-combo">
                      <div class="stacked-combo-box has-rounded-images">
                        <div class="box-inner">
                          <div class="combo-item">
                            <img
                              src="/@images/avatars/placeholder.jpg"
                              alt=""
                              @error="
                                $event.target.src =
                                  'https://via.placeholder.com/150x150'
                              "
                            />
                            <span class="selected-item">Add people</span>
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
                                    src="/@images/avatars/photos/22.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </span>
                                <span class="item-name">Jimmy H.</span>
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
                                    src="/@images/avatars/photos/8.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </span>
                                <span class="item-name">Erik K.</span>
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
                                    src="/@images/avatars/photos/7.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </span>
                                <span class="item-name">Alice C.</span>
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
                                    src="/@images/avatars/photos/25.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </span>
                                <span class="item-name">Melany W.</span>
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
                                    src="/@images/avatars/photos/12.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                </span>
                                <span class="item-name">Joshua S.</span>
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
                    <label>Project Type *</label>
                    <div class="control">
                      <div class="h-select">
                        <div class="select-box">
                          <span>Select a type</span>
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
                              <input type="radio" name="project_type" />
                              <div class="option-meta">
                                <span>Web development</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="project_type" />
                              <div class="option-meta">
                                <span>Design</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="project_type" />
                              <div class="option-meta">
                                <span>Marketing</span>
                              </div>
                            </div>
                            <div class="option-row">
                              <input type="radio" name="project_type" />
                              <div class="option-meta">
                                <span>Software</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <label>Project Budget *</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Ex: $3,500"
                      />
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <label>Project URL *</label>
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Ex: https://project.com"
                      />
                    </div>
                  </div>
                </div>
                <div class="column is-12">
                  <div class="field">
                    <label>Description *</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        rows="3"
                        placeholder="Details about the project..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-card-foot is-end">
          <a
            class="button h-button is-rounded h-modal-close"
            @click="emit('close')"
            >Cancel</a
          >
          <a class="button h-button is-primary is-raised is-rounded">Create</a>
        </div>
      </div>
    </div>
  </div>
</template>
