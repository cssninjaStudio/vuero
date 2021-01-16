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
          <Icon icon="feather:search" />
        </div>
      </div>

      <div class="avatar-stack">
        <div class="h-avatar is-small">
          <img
            class="avatar"
            src="/@images/avatars/photos/7.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="h-avatar is-small">
          <img
            class="avatar"
            src="/@images/avatars/photos/9.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="h-avatar is-small">
          <img
            class="avatar"
            src="/@images/avatars/photos/12.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="h-avatar is-small">
          <img
            class="avatar"
            src="/@images/avatars/photos/8.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="h-avatar is-small">
          <img
            class="avatar"
            src="/@images/avatars/photos/25.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
        <div class="h-avatar is-small">
          <img
            class="avatar"
            src="/@images/avatars/photos/22.jpg"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
        </div>
      </div>

      <a class="button h-button is-primary is-raised is-bold">
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
              <Icon icon="feather:plus" />
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
            src="/@images/illustrations/projects/board/new.svg"
            data-light="/@images/illustrations/projects/board/new.svg"
            data-dark="/@images/illustrations/projects/board/new-dark.svg"
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
                    src="/@images/avatars/photos/7.jpg"
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
                    src="/@images/avatars/photos/8.jpg"
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
              <Icon icon="feather:plus" />
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
                    <Icon icon="feather:clock" />
                    3 days
                  </span>
                  <div class="avatar-stack">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/12.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/26.jpg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/19.jpg"
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
                    <Icon icon="feather:clock" />
                    1 week
                  </span>
                  <div class="avatar-stack">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/13.jpg"
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
                    <Icon icon="feather:clock" />
                    5 days
                  </span>
                  <div class="avatar-stack">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/16.jpg"
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
              src="/@images/illustrations/projects/board/progress.svg"
              data-light="/@images/illustrations/projects/board/progress.svg"
              data-dark="/@images/illustrations/projects/board/progress-dark.svg"
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
              <Icon icon="feather:plus" />
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
                    <Icon icon="feather:clock" />
                    2 days
                  </span>
                  <div class="avatar-stack">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/8.jpg"
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
              src="/@images/illustrations/projects/board/ready.svg"
              data-light="/@images/illustrations/projects/board/ready.svg"
              data-dark="/@images/illustrations/projects/board/ready-dark.svg"
              alt=""
            />
            <p class="empty-text">
              <span>There are no tasks marked as ready for now.</span>
              <a
                href="#"
                class="button h-button is-outlined is-rounded is-fullwidth"
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
              <Icon icon="feather:plus" />
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
              src="/@images/illustrations/projects/board/test.svg"
              data-light="/@images/illustrations/projects/board/test.svg"
              data-dark="/@images/illustrations/projects/board/test-dark.svg"
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
              <Icon icon="feather:plus" />
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
            src="/@images/illustrations/projects/board/complete.svg"
            data-light="/@images/illustrations/projects/board/complete.svg"
            data-dark="/@images/illustrations/projects/board/complete-dark.svg"
            alt=""
          />
          <p class="empty-text">You have no completed bounties.</p>

          <div class="kanban-card">
            <div class="card-body">
              <h4 class="card-title">Landing page redesign</h4>
              <div class="kanban-card-stats">
                <span>
                  <Icon icon="feather:clock" />
                  On time
                </span>
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/12.jpg"
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
                  <Icon icon="feather:clock" />
                  On time
                </span>
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/18.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/9.jpg"
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
                  <Icon icon="feather:clock" />
                  On time
                </span>
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/13.jpg"
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
                  <Icon icon="feather:clock" />
                  On time
                </span>
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/16.jpg"
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
@import '../../assets/scss/pages/projects/_board.scss';
</style>
