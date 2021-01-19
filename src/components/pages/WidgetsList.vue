<script setup lang="ts">
import { todoList1, todoList2, todoList3, todoList4 } from '/@src/composition/state/widgets/list/todoList'
import { fileList1, fileList2 } from '/@src/composition/state/widgets/list/fileList'
import { userList } from '/@src/composition/state/widgets/list/userList'

</script>

<template>
  <!--List Widgets-->
  <div class="columns is-multiline">
    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="User Progress" straight>
        <listWidgetUserList :users="userList" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1b-->
    <div class="column is-4">
      <ListWidgetSingle title="User Progress" straight>
        <listWidgetUserList :users="userList" squared />
      </ListWidgetSingle>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <ListWidgetTabbed title="Files" straight>
        <template #tab1>
          <listWidgetFileList :files="fileList1" />
        </template>
        <template #tab2>
          <listWidgetFileList :files="fileList2" />
        </template>
      </ListWidgetTabbed>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="Todo" straight>
        <listWidgetTodoList :todos="todoList1" color="warning" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="Todo" straight>
        <listWidgetTodoList :todos="todoList2" color="info" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <ListWidgetTabbed title="Todo" straight :labels="['All', 'Mine']">
        <template #tab1>
          <listWidgetTodoList :todos="todoList3" />
        </template>
        <template #tab2>
          <listWidgetTodoList :todos="todoList4" />
        </template>
      </ListWidgetTabbed>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <div class="list-widget list-widget-v1 is-straight">
        <div class="widget-head">
          <h3 class="dark-inverted">Topics</h3>
          <WidgetDropdown />
        </div>

        <div class="inner-list">
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-info is-rounded">
              <i class="iconify" data-icon="feather:chrome"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Browsers</a>
              <span>Technology</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/12.jpg"
                    alt=""
                    data-user-popover="2"
                    data-target="webuiPopover7"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/22.jpg"
                    alt=""
                    data-user-popover="5"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/40.jpg"
                    alt=""
                    data-user-popover="11"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+5</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-green is-rounded">
              <i class="iconify" data-icon="feather:wind"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Natural Ecosystems</a>
              <span>Environment</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/9.jpg"
                    alt=""
                    data-user-popover="1"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    data-target="webuiPopover5"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-orange is-rounded">
              <i class="iconify" data-icon="feather:cpu"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Computer chips</a>
              <span>Technology</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/7.jpg"
                    alt=""
                    data-user-popover="0"
                    data-target="webuiPopover32"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/23.jpg"
                    alt=""
                    data-user-popover="21"
                    data-target="webuiPopover0"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-purple is-rounded">
              <i class="iconify" data-icon="feather:music"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Modal Improvisation</a>
              <span>Music</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/18.jpg"
                    alt=""
                    data-user-popover="7"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/13.jpg"
                    alt=""
                    data-user-popover="6"
                    data-target="webuiPopover31"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    data-target="webuiPopover32"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+5</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-yellow is-rounded">
              <i class="iconify" data-icon="feather:monitor"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Old Movies</a>
              <span>Entertainment</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/32.jpg"
                    alt=""
                    data-user-popover="28"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/22.jpg"
                    alt=""
                    data-user-popover="20"
                    data-target="webuiPopover8"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-purple is-rounded">
              <i class="iconify" data-icon="feather:github"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Git Management</a>
              <span>Technology</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/27.jpg"
                    alt=""
                    data-user-popover="10"
                    data-target="webuiPopover3"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/16.jpg"
                    alt=""
                    data-user-popover="16"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/29.jpg"
                    alt=""
                    data-user-popover="25"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+7</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <div class="list-widget list-widget-v1 is-straight">
        <div class="widget-head">
          <h3 class="dark-inverted">Topics</h3>
          <WidgetDropdown />
        </div>

        <div class="inner-list">
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-info">
              <i class="iconify" data-icon="feather:chrome"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Browsers</a>
              <span>Technology</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/12.jpg"
                    alt=""
                    data-user-popover="2"
                    data-target="webuiPopover7"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/22.jpg"
                    alt=""
                    data-user-popover="5"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/40.jpg"
                    alt=""
                    data-user-popover="11"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+5</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-green">
              <i class="iconify" data-icon="feather:wind"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Natural Ecosystems</a>
              <span>Environment</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/9.jpg"
                    alt=""
                    data-user-popover="1"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    data-target="webuiPopover5"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-orange">
              <i class="iconify" data-icon="feather:cpu"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Computer chips</a>
              <span>Technology</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/7.jpg"
                    alt=""
                    data-user-popover="0"
                    data-target="webuiPopover32"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/23.jpg"
                    alt=""
                    data-user-popover="21"
                    data-target="webuiPopover0"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-purple">
              <i class="iconify" data-icon="feather:music"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Modal Improvisation</a>
              <span>Music</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/18.jpg"
                    alt=""
                    data-user-popover="7"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/13.jpg"
                    alt=""
                    data-user-popover="6"
                    data-target="webuiPopover31"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    data-target="webuiPopover32"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+5</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-yellow">
              <i class="iconify" data-icon="feather:monitor"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Old Movies</a>
              <span>Entertainment</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/32.jpg"
                    alt=""
                    data-user-popover="28"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/22.jpg"
                    alt=""
                    data-user-popover="20"
                    data-target="webuiPopover8"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <!--List Item-->
          <div class="inner-list-item media-flex-center">
            <div class="h-icon is-purple">
              <i class="iconify" data-icon="feather:github"></i>
            </div>
            <div class="flex-meta is-light">
              <a href="#">Git Management</a>
              <span>Technology</span>
            </div>
            <div class="flex-end">
              <div class="avatar-stack">
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/27.jpg"
                    alt=""
                    data-user-popover="10"
                    data-target="webuiPopover3"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/16.jpg"
                    alt=""
                    data-user-popover="16"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <img
                    class="avatar"
                    src="/@images/avatars/photos/29.jpg"
                    alt=""
                    data-user-popover="25"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="h-avatar is-small">
                  <span class="avatar is-more">
                    <span class="inner">
                      <span>+7</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <div class="list-widget list-widget-v2 tabbed-widget is-straight">
        <div class="widget-head">
          <h3 class="dark-inverted">Topics</h3>
          <div class="tabbed-controls">
            <a class="tabbed-control is-active">
              <span>Recent</span>
            </a>
            <a class="tabbed-control">
              <span>Popular</span>
            </a>
            <div class="tabbed-naver"></div>
          </div>
        </div>

        <div class="inner-list-wrapper is-active">
          <div class="inner-list">
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-info is-rounded">
                <i class="iconify" data-icon="feather:chrome"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Browsers</a>
                <span>Technology</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/12.jpg"
                      alt=""
                      data-user-popover="2"
                      data-target="webuiPopover7"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/22.jpg"
                      alt=""
                      data-user-popover="5"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/40.jpg"
                      alt=""
                      data-user-popover="11"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+5</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-green is-rounded">
                <i class="iconify" data-icon="feather:wind"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Natural Ecosystems</a>
                <span>Environment</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/9.jpg"
                      alt=""
                      data-user-popover="1"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/8.jpg"
                      alt=""
                      data-user-popover="3"
                      data-target="webuiPopover5"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-orange is-rounded">
                <i class="iconify" data-icon="feather:cpu"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Computer chips</a>
                <span>Technology</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/7.jpg"
                      alt=""
                      data-user-popover="0"
                      data-target="webuiPopover32"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/23.jpg"
                      alt=""
                      data-user-popover="21"
                      data-target="webuiPopover0"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-purple is-rounded">
                <i class="iconify" data-icon="feather:music"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Modal Improvisation</a>
                <span>Music</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/18.jpg"
                      alt=""
                      data-user-popover="7"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/13.jpg"
                      alt=""
                      data-user-popover="6"
                      data-target="webuiPopover31"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/8.jpg"
                      alt=""
                      data-user-popover="3"
                      data-target="webuiPopover32"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+5</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-yellow is-rounded">
                <i class="iconify" data-icon="feather:monitor"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Old Movies</a>
                <span>Entertainment</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
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
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/22.jpg"
                      alt=""
                      data-user-popover="20"
                      data-target="webuiPopover8"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-purple is-rounded">
                <i class="iconify" data-icon="feather:github"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Git Management</a>
                <span>Technology</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/27.jpg"
                      alt=""
                      data-user-popover="10"
                      data-target="webuiPopover3"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/16.jpg"
                      alt=""
                      data-user-popover="16"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/29.jpg"
                      alt=""
                      data-user-popover="25"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+7</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inner-list-wrapper">
          <div class="inner-list">
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-info">
                <i class="iconify" data-icon="feather:chrome"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Browsers</a>
                <span>Technology</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/12.jpg"
                      alt=""
                      data-user-popover="2"
                      data-target="webuiPopover7"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/22.jpg"
                      alt=""
                      data-user-popover="5"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/40.jpg"
                      alt=""
                      data-user-popover="11"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+5</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-green">
                <i class="iconify" data-icon="feather:wind"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Natural Ecosystems</a>
                <span>Environment</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/9.jpg"
                      alt=""
                      data-user-popover="1"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/8.jpg"
                      alt=""
                      data-user-popover="3"
                      data-target="webuiPopover5"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-orange">
                <i class="iconify" data-icon="feather:cpu"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Computer chips</a>
                <span>Technology</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/7.jpg"
                      alt=""
                      data-user-popover="0"
                      data-target="webuiPopover32"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/23.jpg"
                      alt=""
                      data-user-popover="21"
                      data-target="webuiPopover0"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-purple">
                <i class="iconify" data-icon="feather:music"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Modal Improvisation</a>
                <span>Music</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/18.jpg"
                      alt=""
                      data-user-popover="7"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/13.jpg"
                      alt=""
                      data-user-popover="6"
                      data-target="webuiPopover31"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/8.jpg"
                      alt=""
                      data-user-popover="3"
                      data-target="webuiPopover32"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+5</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-yellow">
                <i class="iconify" data-icon="feather:monitor"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Old Movies</a>
                <span>Entertainment</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
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
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/22.jpg"
                      alt=""
                      data-user-popover="20"
                      data-target="webuiPopover8"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--List Item-->
            <div class="inner-list-item media-flex-center">
              <div class="h-icon is-purple">
                <i class="iconify" data-icon="feather:github"></i>
              </div>
              <div class="flex-meta is-light">
                <a href="#">Git Management</a>
                <span>Technology</span>
              </div>
              <div class="flex-end">
                <div class="avatar-stack">
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/27.jpg"
                      alt=""
                      data-user-popover="10"
                      data-target="webuiPopover3"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/16.jpg"
                      alt=""
                      data-user-popover="16"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <img
                      class="avatar"
                      src="/@images/avatars/photos/29.jpg"
                      alt=""
                      data-user-popover="25"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <div class="h-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+7</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <div class="list-widget list-widget-v3 is-straight">
        <div class="widget-head">
          <h3 class="dark-inverted">Timeline</h3>
          <WidgetDropdown />
        </div>

        <div class="inner-list">
          <div class="icon-timeline">
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="iconify" data-icon="feather:phone-call"></i>
              </div>
              <div class="timeline-content">
                <p>Call Danny at Colby's</p>
                <span>Today - 11:30am</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon">
                <img
                  class="avatar"
                  src="/@images/avatars/photos/7.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="timeline-content">
                <p>Meeting with Alice</p>
                <span>Today - 01:00pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="iconify" data-icon="feather:message-circle"></i>
              </div>
              <div class="timeline-content">
                <p>Answer Annie's message</p>
                <span>Today - 01:45pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="iconify" data-icon="feather:mail"></i>
              </div>
              <div class="timeline-content">
                <p>Send new campaign</p>
                <span>Today - 02:30pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="iconify" data-icon="feather:smile"></i>
              </div>
              <div class="timeline-content">
                <p>Project review</p>
                <span>Today - 03:30pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="iconify" data-icon="feather:phone-call"></i>
              </div>
              <div class="timeline-content">
                <p>Call Trisha Jackson</p>
                <span>Today - 05:00pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon">
                <i class="iconify" data-icon="feather:feather"></i>
              </div>
              <div class="timeline-content">
                <p>Write proposal for Don</p>
                <span>Today - 06:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <div class="list-widget list-widget-v3 is-straight">
        <div class="widget-head">
          <h3 class="dark-inverted">Timeline</h3>
          <WidgetDropdown />
        </div>

        <div class="inner-list">
          <div class="icon-timeline">
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared">
                <i class="iconify" data-icon="feather:phone-call"></i>
              </div>
              <div class="timeline-content">
                <p>Call Danny at Colby's</p>
                <span>Today - 11:30am</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared">
                <img
                  class="avatar"
                  src="/@images/avatars/photos/7.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="timeline-content">
                <p>Meeting with Alice</p>
                <span>Today - 01:00pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared">
                <i class="iconify" data-icon="feather:message-circle"></i>
              </div>
              <div class="timeline-content">
                <p>Answer Annie's message</p>
                <span>Today - 01:45pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared">
                <i class="iconify" data-icon="feather:mail"></i>
              </div>
              <div class="timeline-content">
                <p>Send new campaign</p>
                <span>Today - 02:30pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared">
                <i class="iconify" data-icon="feather:smile"></i>
              </div>
              <div class="timeline-content">
                <p>Project review</p>
                <span>Today - 03:30pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared">
                <i class="iconify" data-icon="feather:phone-call"></i>
              </div>
              <div class="timeline-content">
                <p>Call Trisha Jackson</p>
                <span>Today - 05:00pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared">
                <i class="iconify" data-icon="feather:feather"></i>
              </div>
              <div class="timeline-content">
                <p>Write proposal for Don</p>
                <span>Today - 06:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <div class="list-widget list-widget-v3 is-straight">
        <div class="widget-head">
          <h3 class="dark-inverted">Timeline</h3>
          <WidgetDropdown />
        </div>

        <div class="inner-list">
          <div class="icon-timeline">
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared is-primary">
                <i class="iconify" data-icon="feather:phone-call"></i>
              </div>
              <div class="timeline-content">
                <p>Call Danny at Colby's</p>
                <span>Today - 11:30am</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared">
                <img
                  class="avatar"
                  src="/@images/avatars/photos/7.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="timeline-content">
                <p>Meeting with Alice</p>
                <span>Today - 01:00pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared is-info">
                <i class="iconify" data-icon="feather:message-circle"></i>
              </div>
              <div class="timeline-content">
                <p>Answer Annie's message</p>
                <span>Today - 01:45pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared is-success">
                <i class="iconify" data-icon="feather:mail"></i>
              </div>
              <div class="timeline-content">
                <p>Send new campaign</p>
                <span>Today - 02:30pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared is-purple">
                <i class="iconify" data-icon="feather:smile"></i>
              </div>
              <div class="timeline-content">
                <p>Project review</p>
                <span>Today - 03:30pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared is-orange">
                <i class="iconify" data-icon="feather:phone-call"></i>
              </div>
              <div class="timeline-content">
                <p>Call Trisha Jackson</p>
                <span>Today - 05:00pm</span>
              </div>
            </div>
            <!--Timeline item-->
            <div class="timeline-item">
              <div class="timeline-icon is-squared is-yellow">
                <i class="iconify" data-icon="feather:feather"></i>
              </div>
              <div class="timeline-content">
                <p>Write proposal for Don</p>
                <span>Today - 06:00pm</span>
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
@import '../../assets/scss/pages/generic/_widgets-lists.scss';
</style>
