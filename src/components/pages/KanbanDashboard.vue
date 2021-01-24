<template>
  <div class="page-content kanban-content is-relative">
    <div class="page-title">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('layouts')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">Kanban Board</h1>
      </div>

      <Toolbar />
    </div>

    <div class="kanban-toolbar">
      <div class="control has-icon">
        <input class="input" placeholder="Search..." />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="avatar-stack">
        <div class="v-avatar is-small">
          <img
            class="avatar"
            src="/images/avatars/photos/7.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="v-avatar is-small">
          <img
            class="avatar"
            src="/images/avatars/photos/9.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="v-avatar is-small">
          <img
            class="avatar"
            src="/images/avatars/photos/12.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="v-avatar is-small">
          <img
            class="avatar"
            src="/images/avatars/photos/8.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="v-avatar is-small">
          <img
            class="avatar"
            src="/images/avatars/photos/25.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="v-avatar is-small">
          <img
            class="avatar"
            src="/images/avatars/photos/22.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
      </div>

      <a class="button v-button is-primary is-raised is-bold">
        <span>New Task</span>
      </a>
    </div>

    <div class="columns is-kanban-wrapper">
      <!-- Column container -->
      <div class="column is-one-fifth">
        <!-- Kanban column -->
        <div class="kanban-column">
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div class="expand-button">
              <i class="iconify" data-icon="feather:plus"></i>
            </div>
            <div class="task-count">
              <span>2</span>
            </div>
            <div class="collapsed-text">New</div>
          </div>
          <!-- Expanded content -->
          <div class="column-title">
            <input type="text" class="input is-small rename-input is-hidden" />
            <h3>
              <span class="column-name">New</span>
              <span>2</span>
            </h3>
            <KanbanDropdown />
          </div>

          <!-- Empty state image / text -->
          <img
            class="empty-state theme-image"
            src="/images/illustrations/projects/board/new.svg"
            data-light="/images/illustrations/projects/board/new.svg"
            data-dark="/images/illustrations/projects/board/new-dark.svg"
            alt=""
          />
          <p class="empty-text">There are no new tasks to approve for now.</p>

          <div id="demo-invite" class="kanban-card is-new">
            <div class="card-body">
              <h4 class="card-title">
                Create prototype with JWT authentication
              </h4>
              <div class="new-avatar">
                <div class="avatar-wrapper is-warning">
                  <img
                    class="task-owner"
                    src="/images/avatars/photos/7.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">View</a>
              <a class="card-footer-item">Approve</a>
            </footer>
          </div>

          <div class="kanban-card is-new">
            <div class="card-body">
              <h4 class="card-title">
                Design a todo list component using React
              </h4>
              <div class="new-avatar">
                <div class="avatar-wrapper is-info">
                  <img
                    class="task-owner"
                    src="/images/avatars/photos/8.jpg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">View</a>
              <a class="card-footer-item">Approve</a>
            </footer>
          </div>
        </div>
      </div>

      <div class="column is-one-fifth">
        <div class="kanban-column">
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div class="expand-button">
              <i class="iconify" data-icon="feather:plus"></i>
            </div>
            <div class="task-count">
              <span>3</span>
            </div>
            <div class="collapsed-text">In Progress</div>
          </div>
          <!-- Expanded content -->
          <div class="column-title">
            <input type="text" class="input is-small rename-input is-hidden" />
            <h3>
              <span class="column-name">In Progress</span>
              <span>3</span>
            </h3>
            <KanbanDropdown />
          </div>

          <div id="kanban-1">
            <div class="kanban-card">
              <div class="card-body">
                <h4 class="card-title">Implement the users REST API</h4>
                <div class="kanban-card-stats">
                  <span>
                    <i class="iconify" data-icon="feather:clock"></i>
                    3 days
                  </span>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/12.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/26.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/19.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="kanban-card">
              <div class="card-body">
                <h4 class="card-title">Review project wireframes</h4>
                <div class="kanban-card-stats">
                  <span>
                    <i class="iconify" data-icon="feather:clock"></i>
                    1 week
                  </span>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/13.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="kanban-card">
              <div class="card-body">
                <h4 class="card-title">Implement new footer in all pages</h4>
                <div class="kanban-card-stats">
                  <span>
                    <i class="iconify" data-icon="feather:clock"></i>
                    5 days
                  </span>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/16.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty state image / text -->
            <img
              class="empty-state theme-image"
              src="/images/illustrations/projects/board/progress.svg"
              data-light="/images/illustrations/projects/board/progress.svg"
              data-dark="/images/illustrations/projects/board/progress-dark.svg"
              alt=""
            />
            <p class="empty-text">
              There are no tasks in progress at the moment.
            </p>
          </div>
        </div>
      </div>

      <div class="column is-one-fifth">
        <div class="kanban-column">
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div class="expand-button">
              <i class="iconify" data-icon="feather:plus"></i>
            </div>
            <div class="task-count">
              <span>1</span>
            </div>
            <div class="collapsed-text">In Test</div>
          </div>
          <!-- Expanded content -->
          <div class="column-title">
            <input type="text" class="input is-small rename-input is-hidden" />
            <h3>
              <span class="column-name">Ready</span>
              <span>1</span>
            </h3>
            <KanbanDropdown />
          </div>

          <div id="kanban-2">
            <div class="kanban-card">
              <div class="card-body">
                <h4 class="card-title">Implement the projects REST API</h4>
                <div class="kanban-card-stats">
                  <span>
                    <i class="iconify" data-icon="feather:clock"></i>
                    2 days
                  </span>
                  <div class="avatar-stack">
                    <div class="v-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/8.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty state image / text -->
            <img
              class="empty-state theme-image"
              src="/images/illustrations/projects/board/ready.svg"
              data-light="/images/illustrations/projects/board/ready.svg"
              data-dark="/images/illustrations/projects/board/ready-dark.svg"
              alt=""
            />
            <p class="empty-text">
              <span>There are no tasks marked as ready for now.</span>
              <a
                href="#"
                class="button v-button is-outlined is-rounded is-fullwidth"
                >Create Task</a
              >
            </p>
          </div>
        </div>
      </div>

      <div class="column is-one-fifth">
        <div class="kanban-column is-empty">
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div class="expand-button">
              <i class="iconify" data-icon="feather:plus"></i>
            </div>
            <div class="task-count">
              <span>0</span>
            </div>
            <div class="collapsed-text">In Review</div>
          </div>
          <!-- Expanded content -->
          <div class="column-title">
            <input type="text" class="input is-small rename-input is-hidden" />
            <h3>
              <span class="column-name">In Review</span>
              <span>0</span>
            </h3>
            <KanbanDropdown />
          </div>
          <div id="kanban-3">
            <!-- Empty state image / text -->
            <img
              class="empty-state theme-image"
              src="/images/illustrations/projects/board/test.svg"
              data-light="/images/illustrations/projects/board/test.svg"
              data-dark="/images/illustrations/projects/board/test-dark.svg"
              alt=""
            />
            <p class="empty-text">No tasks are being reviewed at the moment.</p>
          </div>
        </div>
      </div>

      <div class="column is-one-fifth">
        <div class="kanban-column">
          <!-- Collapsed content -->
          <div class="collapsed-content">
            <div class="expand-button">
              <i class="iconify" data-icon="feather:plus"></i>
            </div>
            <div class="task-count">
              <span>4</span>
            </div>
            <div class="collapsed-text">Completed</div>
          </div>
          <!-- Expanded content -->
          <div class="column-title">
            <input type="text" class="input is-small rename-input is-hidden" />
            <h3>
              <span class="column-name">Completed</span>
              <span>4</span>
            </h3>
            <KanbanDropdown />
          </div>

          <!-- Empty state image / text -->
          <img
            class="empty-state theme-image"
            src="/images/illustrations/projects/board/complete.svg"
            data-light="/images/illustrations/projects/board/complete.svg"
            data-dark="/images/illustrations/projects/board/complete-dark.svg"
            alt=""
          />
          <p class="empty-text">You have no completed bounties.</p>

          <div class="kanban-card">
            <div class="card-body">
              <h4 class="card-title">Landing page redesign</h4>
              <div class="kanban-card-stats">
                <span>
                  <i class="iconify" data-icon="feather:clock"></i>
                  On time
                </span>
                <div class="avatar-stack">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/12.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="kanban-card">
            <div class="card-body">
              <h4 class="card-title">Projects REST API Implementation</h4>
              <div class="kanban-card-stats">
                <span>
                  <i class="iconify" data-icon="feather:clock"></i>
                  On time
                </span>
                <div class="avatar-stack">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/18.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/9.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="kanban-card">
            <div class="card-body">
              <h4 class="card-title">Database replication setup</h4>
              <div class="kanban-card-stats">
                <span>
                  <i class="iconify" data-icon="feather:clock"></i>
                  On time
                </span>
                <div class="avatar-stack">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/13.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="kanban-card">
            <div class="card-body">
              <h4 class="card-title">Firebase demo application setup</h4>
              <div class="kanban-card-stats">
                <span>
                  <i class="iconify" data-icon="feather:clock"></i>
                  On time
                </span>
                <div class="avatar-stack">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/photos/16.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
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

/*! _board.scss | Vuero | Css ninja 2020-2021 */

/*
    1. Kanban Toolbar
    2. Kanban Layout
    3. Kanban Card
    4. Dragula
    5. Kanban Board Dark mode
    6. Media Queries
*/

/* ==========================================================================
1. Kanban Toolbar
========================================================================== */

.kanban-toolbar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &.is-webapp {
    padding-top: 30px;
  }

  .avatar-stack {
    margin-left: 16px;
  }

  .button {
    margin-left: auto;
  }
}

/* ==========================================================================
2. Kanban Layout
========================================================================== */

.is-kanban-wrapper {
  .column {
    padding: 0.35rem !important;
  }

  .kanban-column {
    padding: 6px;
    background: #e3e4e5;
    border-radius: 8px;
    border: 1px solid #ddd;

    .column-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        margin-bottom: 0;
        font-family: $font;
        font-size: 0.85rem;
        font-weight: 500;
        text-transform: uppercase;
        color: darken($light-text, 8%);
      }

      .input {
        margin-right: 20px;
      }

      svg {
        height: 18px;
        width: 18px;
        color: $dark-text;
      }

      .dropdown {
        .is-trigger {
          height: 18px;
          width: 18px;
          cursor: pointer;

          svg {
            height: 18px;
            width: 18px;
            color: darken($light-text, 8%);
          }
        }
      }
    }

    .empty-state {
      display: none;
      margin: 30px auto 10px auto;
      width: 150px;
      height: auto;
    }

    .empty-text {
      display: none;
      text-align: center;
      padding: 10px 10px 20px 10px;
      font-size: 0.95rem;
      color: $dark-text;

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
        display: block !important;
      }
    }

    &.is-collapsed {
      width: 100%;
      height: 500px;

      .column-title,
      .kanban-card,
      .empty-state,
      .empty-text {
        display: none !important;
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
          background: $white;
          border-radius: 50%;
          border: 1.4px solid $fade-grey;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s;
          cursor: pointer;

          svg {
            height: 18px;
            width: 18px;
            transition: all 0.3s;
            color: $muted-grey;
          }

          &:hover {
            border-color: $primary;

            svg {
              color: $primary;
            }
          }
        }

        .task-count {
          margin-top: 20px;
          height: 38px;
          width: 38px;
          background: $primary;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            display: block;
            font-size: 0.9rem;
            font-weight: 700;
            color: $smoke-white;
          }
        }

        .collapsed-text {
          position: absolute;
          bottom: 160px;
          min-width: 250px;
          font-size: 1rem;
          color: $dark-text;
          font-weight: 600;
          margin-left: -3px;
          transform: rotate(-90deg);
        }
      }
    }
  }
}

/* ==========================================================================
3. Kanban Card
========================================================================== */

.kanban-card {
  width: 100%;
  background: $white;
  border-radius: 6px;
  margin-top: 10px;
  border: 1px solid #ddd;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 5px 43px rgba(0, 0, 0, 0.18) !important;
  }

  &.is-new {
    .new-avatar {
      margin: 20px 0 10px 0;
      width: 100%;

      .avatar-wrapper {
        position: relative;
        width: 74px;
        height: 74px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        border-radius: 50%;

        &::after {
          content: '';
          position: absolute;
          top: calc(50% - 12px);
          left: calc(50% - 12px);
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: $white;
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
          border-radius: 50%;
          z-index: 2;
        }

        &.is-warning {
          border: 2px solid $warning;

          &::after {
            background: $warning;
          }
        }

        &.is-info {
          border: 2px solid $info;

          &::after {
            background: $info;
          }
        }
      }
    }

    .card-footer {
      a {
        font-size: 0.85rem;
        font-weight: 500;
        color: $light-text;
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
        color: $light-text;

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
    font-family: $font-alt;
    font-weight: 600;
    color: $dark-text;
  }

  .spaced-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}

/* ==========================================================================
4. Dragula
========================================================================== */

#kanban-1,
#kanban-2,
#kanban-3 {
  .kanban-card {
    //fallback if grab cursor is unsupported
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    //(Optional) Apply a "closed-hand" cursor during drag operation.
    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
  }
}

.gu-transit {
  cursor: grabbing !important;
  cursor: -moz-grabbing !important;
  cursor: -webkit-grabbing !important;
}

.gu-mirror {
  position: fixed;
}

/* ==========================================================================
5. Kanban Board Dark mode
========================================================================== */

.is-dark {
  .kanban-column {
    background: lighten($dark-sidebar, 15%);
    border-color: lighten($dark-sidebar, 15%);

    .collapsed-content {
      .expand-button {
        background: lighten($dark-sidebar, 6%) !important;
        border-color: lighten($dark-sidebar, 12%) !important;

        &:hover {
          svg {
            color: $accent !important;
          }
        }
      }

      .task-count {
        background: $accent !important;
        border-color: $accent !important;

        svg {
          color: $white !important;
        }
      }

      .collapsed-text {
        color: $dark-dark-text !important;
      }
    }

    .column-title {
      h3 {
        color: $light-white;
      }

      .is-trigger svg {
        color: $light-white !important;
      }
    }

    .dropdown-content {
      background: $dark-sidebar;

      .dropdown-item {
        color: $white;
      }

      .dropdown-divider {
        background: lighten($dark-sidebar, 5%);
      }

      a:hover,
      div:hover {
        background: lighten($dark-sidebar, 5%) !important;
      }
    }

    .empty-text {
      color: $accent-grey;
    }

    .kanban-card,
    .gu-transit {
      background: lighten($dark-sidebar, 6%) !important;
      border-color: lighten($dark-sidebar, 6%) !important;

      &.is-new {
        background: lighten($dark-sidebar, 6%);
        border-color: lighten($dark-sidebar, 6%);

        .card-title {
          color: lighten($accent-grey, 2%);
        }

        .card-footer,
        .card-footer-item {
          border-color: lighten($dark-sidebar, 20%);
          color: $light-white;
        }
      }

      .card-title {
        color: lighten($accent-grey, 2%);
      }
    }
  }
}

/* ==========================================================================
6. Media Queries
========================================================================== */

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
