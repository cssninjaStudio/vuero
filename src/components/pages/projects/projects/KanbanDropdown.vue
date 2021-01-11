<template>
  <div class="dropdown is-right dropdown-trigger">
    <div class="is-trigger" aria-haspopup="true">
      <Icon icon="feather:more-vertical" />
    </div>

    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item kanban-rename kill-drop"> Rename </a>
        <a class="dropdown-item kanban-collapse kill-drop"> Collapse </a>
        <hr class="dropdown-divider" />
        <div class="dropdown-item has-child">
          Settings
          <Icon icon="feather:chevron-right" />
          <div class="child-dropdown">
            <div class="inner">
              <ul>
                <li>
                  <div class="column-setting">
                    <label class="form-switch">
                      <input type="checkbox" class="is-switch" />
                      <i></i>
                    </label>
                    <div class="text">
                      <span>Lock</span>
                      <span>Locks the column</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="column-setting">
                    <label class="form-switch">
                      <input type="checkbox" class="is-switch" checked />
                      <i></i>
                    </label>
                    <div class="text">
                      <span>Notifications</span>
                      <span>Enables or disables notifications</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="column-setting">
                    <label class="form-switch">
                      <input type="checkbox" class="is-switch" />
                      <i></i>
                    </label>
                    <div class="text">
                      <span>Sorting</span>
                      <span>Enables or disables sorting</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>