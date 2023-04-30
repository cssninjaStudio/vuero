<script setup lang="ts">
import 'dragula/dist/dragula.css'

import { useKanban } from '/@src/data/apps/kanban'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const {
  tasks,
  participants,
  newTasks,
  progressTasks,
  readyTasks,
  reviewTasks,
  completedTasks,
  search,
} = useKanban()

const newContainer = ref<HTMLElement>()
const progressContainer = ref<HTMLElement>()
const readyContainer = ref<HTMLElement>()
const reviewContainer = ref<HTMLElement>()
const completedContainer = ref<HTMLElement>()

const isColumnNewCollapsed = ref(false)
const isColumnProgressCollapsed = ref(false)
const isColumnReadyCollapsed = ref(false)
const isColumnReviewCollapsed = ref(false)
const isColumnCompletedCollapsed = ref(false)

function onDragInvalid(el?: Element): boolean {
  if (el) {
    if (el.classList.contains('kanban-card')) {
      const id = (el as HTMLElement).dataset.id

      if (id) {
        const task = tasks.find((task) => {
          return task.id === id
        })

        if (task) {
          return task.state === 'completed' || task.state === 'new'
        }
      }
    }

    return el.classList.contains('kanban-empty')
  }

  return true
}
function onDrop(el: Element, target: Element) {
  if (el && target) {
    const id = (el as HTMLElement).dataset.id
    const state = (el as HTMLElement).dataset.state

    if (id && state) {
      const task = tasks.find((task) => {
        return task.id === id
      })

      if (task) {
        task.state = state
      }
    }
  }
}

onMounted(() => {
  // this is a hack for dragula
  ;(window as any).global = window

  import('dragula').then((module) => {
    if (
      newContainer.value &&
      progressContainer.value &&
      readyContainer.value &&
      reviewContainer.value &&
      completedContainer.value
    ) {
      const dragula = module.default
      const containers: Element[] = [
        newContainer.value,
        progressContainer.value,
        readyContainer.value,
        reviewContainer.value,
        completedContainer.value,
      ]
      const drake = dragula(containers, {
        invalid: onDragInvalid,
      })

      drake.on('drop', onDrop)
    }
  })
})
</script>

<template>
  <VPageContent class="kanban-content">
    <div class="kanban-toolbar">
      <VField raw>
        <VControl icon="feather:search">
          <VInput v-model="search" placeholder="Search..." />
        </VControl>
      </VField>

      <VAvatarStack :avatars="participants" size="small" />

      <VButton color="primary" raised bold> New Task </VButton>
    </div>

    <div class="columns is-kanban-wrapper">
      <!-- Column container -->
      <div
        class="column"
        :class="[
          isColumnNewCollapsed && 'is-1 is-mini',
          !isColumnNewCollapsed && 'is-one-fifth',
        ]"
      >
        <!-- Kanban column -->
        <div
          class="kanban-column"
          :class="[
            isColumnNewCollapsed && 'is-collapsed',
            newTasks.length === 0 && 'is-empty',
          ]"
        >
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div
              class="expand-button"
              tabindex="0"
              role="button"
              @keydown.space.prevent="isColumnNewCollapsed = false"
              @click="isColumnNewCollapsed = false"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
            </div>
            <div>
              <span class="task-count">{{ newTasks.length }}</span>
            </div>
            <div class="collapsed-text">New</div>
          </div>
          <!-- Expanded content -->
          <div class="expanded-content">
            <div class="column-title">
              <input type="text" class="input is-small rename-input is-hidden" />
              <h3>
                <span class="column-name">New</span>
                <span class="task-count">{{ newTasks.length }}</span>
              </h3>
              <KanbanDropdown @collapse="isColumnNewCollapsed = true" />
            </div>

            <div ref="newContainer" data-state="new">
              <!-- Empty state image / text -->
              <div v-if="newTasks.length === 0" class="kanban-empty">
                <img
                  class="empty-state theme-image light-image"
                  src="/@src/assets/illustrations/projects/board/new.svg"
                  alt=""
                />
                <img
                  class="empty-state theme-image dark-image"
                  src="/@src/assets/illustrations/projects/board/new-dark.svg"
                  alt=""
                />
                <p class="empty-text">There are no new tasks to approve for now.</p>
              </div>

              <div
                v-for="task in newTasks"
                :key="task.id"
                :data-id="task.id"
                class="kanban-card is-new"
              >
                <div class="card-body">
                  <h4 class="card-title">
                    {{ task.title }}
                  </h4>
                  <div class="new-avatar">
                    <div
                      class="avatar-wrapper"
                      :class="[
                        task.participants[0].color && `is-${task.participants[0].color}`,
                      ]"
                    >
                      <img
                        class="task-owner"
                        :src="task.participants[0].picture"
                        alt=""
                        @error.once="onceImageErrored(62)"
                      />
                    </div>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">View</a>
                  <a
                    class="card-footer-item"
                    tabindex="0"
                    role="button"
                    @keydown.space.prevent="task.state = 'progress'"
                    @click="task.state = 'progress'"
                  >
                    Approve
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="column"
        :class="[
          isColumnProgressCollapsed && 'is-1 is-mini',
          !isColumnProgressCollapsed && 'is-one-fifth',
        ]"
      >
        <div
          class="kanban-column can-drag"
          :class="[
            isColumnProgressCollapsed && 'is-collapsed',
            progressTasks.length === 0 && 'is-empty',
          ]"
        >
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div
              class="expand-button"
              tabindex="0"
              role="button"
              @keydown.space.prevent="isColumnProgressCollapsed = false"
              @click="isColumnProgressCollapsed = false"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
            </div>
            <div>
              <span class="task-count">{{ progressTasks.length }}</span>
            </div>
            <div class="collapsed-text">In Progress</div>
          </div>
          <!-- Expanded content -->
          <div class="expanded-content">
            <div class="column-title">
              <input type="text" class="input is-small rename-input is-hidden" />
              <h3>
                <span class="column-name">In Progress</span>
                <span class="task-count">{{ progressTasks.length }}</span>
              </h3>
              <KanbanDropdown @collapse="isColumnProgressCollapsed = true" />
            </div>

            <div ref="progressContainer" data-state="progress">
              <!-- Empty state image / text -->
              <div v-if="progressTasks.length === 0" class="kanban-empty">
                <img
                  class="empty-state theme-image light-image-block"
                  src="/@src/assets/illustrations/projects/board/progress.svg"
                  alt=""
                />
                <img
                  class="empty-state theme-image dark-image-block"
                  src="/@src/assets/illustrations/projects/board/progress-dark.svg"
                  alt=""
                />
                <p class="empty-text">There are no tasks in progress at the moment.</p>
              </div>

              <div
                v-for="task in progressTasks"
                :key="task.id"
                class="kanban-card gelatine"
                :data-id="task.id"
              >
                <div class="card-body">
                  <h4 class="card-title">{{ task.title }}</h4>
                  <div class="kanban-card-stats">
                    <span>
                      <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                      {{ task.dueDate }}
                    </span>

                    <VAvatarStack size="small" :avatars="task.participants" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="column"
        :class="[
          isColumnReadyCollapsed && 'is-1 is-mini',
          !isColumnReadyCollapsed && 'is-one-fifth',
        ]"
      >
        <div
          class="kanban-column can-drag"
          :class="[
            isColumnReadyCollapsed && 'is-collapsed',
            readyTasks.length === 0 && 'is-empty',
          ]"
        >
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div
              class="expand-button"
              tabindex="0"
              role="button"
              @keydown.space.prevent="isColumnReadyCollapsed = false"
              @click="isColumnReadyCollapsed = false"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
            </div>
            <div>
              <span class="task-count">{{ readyTasks.length }}</span>
            </div>
            <div class="collapsed-text">Ready</div>
          </div>
          <!-- Expanded content -->
          <div class="expanded-content">
            <div class="column-title">
              <input type="text" class="input is-small rename-input is-hidden" />
              <h3>
                <span class="column-name">Ready</span>
                <span class="task-count">{{ readyTasks.length }}</span>
              </h3>
              <KanbanDropdown @collapse="isColumnReadyCollapsed = true" />
            </div>

            <div ref="readyContainer" data-state="ready">
              <div v-if="readyTasks.length === 0" class="kanban-empty">
                <!-- Empty state image / text -->
                <img
                  class="empty-state theme-image light-image-block"
                  src="/@src/assets/illustrations/projects/board/ready.svg"
                  alt=""
                />
                <img
                  class="empty-state theme-image dark-image-block"
                  src="/@src/assets/illustrations/projects/board/ready-dark.svg"
                  alt=""
                />
                <p class="empty-text">
                  <span>There are no tasks marked as ready for now.</span>
                  <a href="#" class="button v-button is-outlined is-rounded is-fullwidth">
                    Create Task
                  </a>
                </p>
              </div>

              <div
                v-for="task in readyTasks"
                :key="task.id"
                :data-id="task.id"
                class="kanban-card gelatine"
              >
                <div class="card-body">
                  <h4 class="card-title">{{ task.title }}</h4>
                  <div class="kanban-card-stats">
                    <span>
                      <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                      {{ task.dueDate }}
                    </span>

                    <VAvatarStack size="small" :avatars="task.participants" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="column"
        :class="[
          isColumnReviewCollapsed && 'is-1 is-mini',
          !isColumnReviewCollapsed && 'is-one-fifth',
        ]"
      >
        <div
          class="kanban-column can-drag"
          :class="[
            isColumnReviewCollapsed && 'is-collapsed',
            reviewTasks.length === 0 && 'is-empty',
          ]"
        >
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div
              class="expand-button"
              tabindex="0"
              role="button"
              @keydown.space.prevent="isColumnReviewCollapsed = false"
              @click="isColumnReviewCollapsed = false"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
            </div>
            <div>
              <span class="task-count"> {{ reviewTasks.length }}</span>
            </div>
            <div class="collapsed-text">In Review</div>
          </div>
          <!-- Expanded content -->
          <div class="expanded-content">
            <div class="column-title">
              <input type="text" class="input is-small rename-input is-hidden" />
              <h3>
                <span class="column-name">In Review</span>
                <span class="task-count">{{ reviewTasks.length }}</span>
              </h3>
              <KanbanDropdown @collapse="isColumnReviewCollapsed = true" />
            </div>

            <div ref="reviewContainer" data-state="review">
              <div v-if="reviewTasks.length === 0" class="kanban-empty">
                <!-- Empty state image / text -->
                <img
                  class="empty-state theme-image light-image-block"
                  src="/@src/assets/illustrations/projects/board/test.svg"
                  alt=""
                />
                <img
                  class="empty-state theme-image dark-image-block"
                  src="/@src/assets/illustrations/projects/board/test-dark.svg"
                  alt=""
                />
                <p class="empty-text">No tasks are being reviewed at the moment.</p>
              </div>

              <div
                v-for="task in reviewTasks"
                :key="task.id"
                :data-id="task.id"
                class="kanban-card gelatine"
              >
                <div class="card-body">
                  <h4 class="card-title">{{ task.title }}</h4>
                  <div class="kanban-card-stats">
                    <span>
                      <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                      {{ task.dueDate }}
                    </span>

                    <VAvatarStack size="small" :avatars="task.participants" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="column"
        :class="[
          isColumnCompletedCollapsed && 'is-1 is-mini',
          !isColumnCompletedCollapsed && 'is-one-fifth',
        ]"
      >
        <div
          class="kanban-column"
          :class="[
            isColumnCompletedCollapsed && 'is-collapsed',
            completedTasks.length === 0 && 'is-empty',
          ]"
        >
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div
              class="expand-button"
              tabindex="0"
              role="button"
              @keydown.space.prevent="isColumnCompletedCollapsed = false"
              @click="isColumnCompletedCollapsed = false"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
            </div>
            <div>
              <span class="task-count">{{ completedTasks.length }}</span>
            </div>
            <div class="collapsed-text">Completed</div>
          </div>
          <!-- Expanded content -->
          <div class="expanded-content">
            <div class="column-title">
              <input type="text" class="input is-small rename-input is-hidden" />
              <h3>
                <span class="column-name">Completed</span>
                <span class="task-count">{{ completedTasks.length }}</span>
              </h3>
              <KanbanDropdown @collapse="isColumnCompletedCollapsed = true" />
            </div>

            <div ref="completedContainer" data-state="completed">
              <!-- Empty state image / text -->
              <div v-if="completedTasks.length === 0" class="kanban-empty">
                <img
                  class="empty-state theme-image light-image-block"
                  src="/@src/assets/illustrations/projects/board/complete.svg"
                  alt=""
                />
                <img
                  class="empty-state theme-image dark-image-block"
                  src="/@src/assets/illustrations/projects/board/complete-dark.svg"
                  alt=""
                />
                <p class="empty-text">You have no completed bounties.</p>
              </div>

              <div
                v-for="task in completedTasks"
                :key="task.id"
                :data-id="task.id"
                class="kanban-card gelatine"
              >
                <div class="card-body">
                  <h4 class="card-title">{{ task.title }}</h4>
                  <div class="kanban-card-stats">
                    <span>
                      <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                      {{ task.dueDate }}
                    </span>

                    <VAvatarStack size="small" :avatars="task.participants" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </VPageContent>
</template>

<style lang="scss">
.kanban-toolbar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &.is-navbar {
    padding-top: 30px;
  }

  .avatar-stack {
    margin-inline-start: 16px;
  }

  .button {
    margin-inline-start: auto;
  }
}

.is-kanban-wrapper {
  .column {
    padding: 0.35rem !important;
  }

  .kanban-column {
    padding: 6px;
    background: #e3e4e5;
    border-radius: 8px;
    border: 1px solid var(--medium-grey);

    .column-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        margin-bottom: 0;
        font-family: var(--font);
        font-size: 0.85rem;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--light-text-dark-8);
      }

      .input {
        margin-inline-end: 20px;
      }

      svg {
        height: 18px;
        width: 18px;
        color: var(--dark-text);
      }

      .task-count {
        padding-inline-start: 4px;

        &::before {
          content: '(';
        }

        &::after {
          content: ')';
        }
      }

      .dropdown {
        .is-trigger {
          height: 18px;
          width: 18px;
          cursor: pointer;

          svg {
            height: 18px;
            width: 18px;
            color: var(--light-text-dark-8);
          }
        }
      }
    }

    .empty-state {
      margin: 30px auto 10px;
      width: 150px;
      height: auto;
    }

    .empty-text {
      text-align: center;
      padding: 10px 10px 20px;
      font-size: 0.95rem;
      color: var(--dark-text);

      span {
        display: block;
      }

      a {
        line-height: 0.9;
        margin-top: 10px;
      }
    }

    .collapsed-content {
      display: none;
    }

    &.is-empty {
      .empty-state,
      .empty-text {
        display: block;
      }
    }

    &.is-collapsed {
      width: 100%;
      height: 500px;
      position: relative;

      .expanded-content {
        display: none;
      }

      .column-title,
      .kanban-card,
      .empty-state,
      .empty-text {
        display: none;
      }

      .collapsed-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .expand-button {
          margin-top: 20px;
          height: 46px;
          width: 46px;
          background: var(--white);
          border-radius: var(--radius-rounded);
          border: 1.4px solid var(--fade-grey);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s; // transition-all test
          cursor: pointer;

          svg {
            height: 18px;
            width: 18px;
            transition: all 0.3s; // transition-all test
            color: var(--muted-grey);
          }

          &:hover {
            border-color: var(--primary);

            svg {
              color: var(--primary);
            }
          }
        }

        .task-count {
          margin-top: 20px;
          height: 38px;
          width: 38px;
          background: var(--primary);
          border-radius: var(--radius-rounded);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--smoke-white);
        }

        .collapsed-text {
          position: absolute;
          bottom: 160px;
          min-width: 250px;
          font-size: 1rem;
          color: var(--dark-text);
          font-weight: 600;
          margin-inline-start: -3px;
          transform: rotate(calc(var(--transform-direction) * -90deg));
        }
      }
    }
  }
}

.kanban-card {
  width: 100%;
  background: var(--white);
  border-radius: var(--radius-large);
  margin-top: 10px;
  border: 1px solid var(--medium-grey);
  transition: all 0.4s;

  &:hover,
  &:focus {
    box-shadow: 0 5px 43px rgb(0 0 0 / 18%) !important;
  }

  &.is-new {
    .new-avatar {
      margin: 20px 0 10px;
      width: 100%;

      .avatar-wrapper {
        position: relative;
        width: 74px;
        height: 74px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        border-radius: var(--radius-rounded);

        &::after {
          content: '';
          position: absolute;
          top: calc(50% - 12px);
          inset-inline-start: calc(50% - 12px);
          height: 24px;
          width: 24px;
          border-radius: var(--radius-rounded);
          background: var(--white);
          animation: wave 1.6s infinite;
          animation-duration: 2s;
          transform-origin: center center;
          z-index: 0;
        }

        .task-owner {
          position: relative;
          display: block;
          width: 62px;
          height: 62px;
          border-radius: var(--radius-rounded);
          z-index: 2;
        }

        &.is-warning {
          border: 2px solid var(--warning);

          &::after {
            background: var(--warning);
          }
        }

        &.is-primary {
          border: 2px solid var(--primary);

          &::after {
            background: var(--primary);
          }
        }

        &.is-success {
          border: 2px solid var(--success);

          &::after {
            background: var(--success);
          }
        }

        &.is-danger {
          border: 2px solid var(--danger);

          &::after {
            background: var(--danger);
          }
        }

        &.is-info {
          border: 2px solid var(--info);

          &::after {
            background: var(--info);
          }
        }
      }
    }

    .card-footer {
      a {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--light-text);
      }
    }
  }

  .card-body {
    padding: 10px;

    .kanban-card-stats {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 16px;

      > span {
        font-size: 0.9rem;
        color: var(--light-text);

        svg {
          position: relative;
          top: 2px;
          height: 14px;
          width: 14px;
          stroke-width: 1.6px;
        }
      }
    }
  }

  .card-title {
    font-size: 0.9rem;
    font-family: var(--font-alt);
    font-weight: 600;
    color: var(--dark-text);
  }

  .spaced-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}

.can-drag {
  .kanban-card {
    // fallback if grab cursor is unsupported
    cursor: move;
    cursor: grab;
    cursor: grab;
    cursor: grab;

    // (Optional) Apply a "closed-hand" cursor during drag operation.
    &:active {
      cursor: grabbing;
    }
  }
}

.gu-transit {
  cursor: grabbing !important;
}

.gu-mirror {
  position: fixed;
}

.is-dark {
  .kanban-column {
    background: var(--dark-sidebar-light-15);
    border-color: var(--dark-sidebar-light-15);

    .collapsed-content {
      .expand-button {
        background: var(--dark-sidebar-light-6) !important;
        border-color: var(--dark-sidebar-light-12) !important;

        &:hover,
        &:focus {
          svg {
            color: var(--primary) !important;
          }
        }
      }

      .task-count {
        background: var(--primary) !important;
        border-color: var(--primary) !important;

        svg {
          color: var(--white) !important;
        }
      }

      .collapsed-text {
        color: var(--dark-dark-text) !important;
      }
    }

    .column-title {
      h3 {
        color: var(--body-color);
      }

      .is-trigger svg {
        color: var(--body-color) !important;
      }
    }

    .dropdown-content {
      background: var(--dark-sidebar);

      .dropdown-item {
        color: var(--white);
      }

      .dropdown-divider {
        background: var(--dark-sidebar-light-5);
      }

      a:hover,
      div:hover {
        background: var(--dark-sidebar-light-5) !important;
      }
    }

    .empty-text {
      color: var(--primary-grey);
    }

    .kanban-card,
    .gu-transit {
      background: var(--dark-sidebar-light-6) !important;
      border-color: var(--dark-sidebar-light-6) !important;

      &.is-new {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-6);

        .card-title {
          color: var(--primary-grey-light-2);
        }

        .card-footer,
        .card-footer-item {
          border-color: var(--dark-sidebar-light-20);
          color: var(--body-color);
        }
      }

      .card-title {
        color: var(--primary-grey-light-2);
      }
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .kanban-column {
    padding: 20px !important;

    .kanban-card {
      .card-body {
        padding: 20px 40px;
      }
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .kanban-content {
    padding: 0 10px !important;
  }

  .is-kanban-wrapper {
    .column {
      padding: 0.15rem !important;
    }
  }

  .kanban-column {
    .empty-state {
      width: 130px !important;
    }

    .empty-text {
      font-size: 0.7rem !important;
    }

    .kanban-card {
      .card-title {
        max-width: 152px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .bounty-meta {
        .due-date {
          display: none;
        }
      }

      .progress-block {
        margin-top: 8px;

        .spec-count {
          font-size: 0.5rem;
        }
      }

      .avatar-group img {
        height: 28px;
        width: 28px;
      }

      .done-icon {
        height: 18px;
        width: 18px;

        svg {
          height: 12px;
          width: 12px;
        }
      }

      &.is-invitation {
        .invitation-avatar {
          .avatar-wrapper {
            width: 58px;
            height: 58px;

            .bounty-owner {
              width: 44px;
              height: 44px;
            }

            .skill-badge {
              width: 20px;
              height: 20px;
            }
          }
        }

        .card-footer-item {
          padding: 0.5rem;
          font-size: 0.7rem;
        }

        .time-left {
          .time-value {
            font-size: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
