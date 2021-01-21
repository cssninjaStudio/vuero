<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">What tools will you be using?</h2>
      <p>Choose a set of tools that you'll be using in this project.</p>
    </div>

    <div class="tools-wrapper">
      <div class="columns is-multiline">
        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/illustrator.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Illustrator</span>
                  <span>Design Software</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/photoshop.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Photoshop</span>
                  <span>Design Software</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/xd.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Adobe XD</span>
                  <span>Design Software</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/figma.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Figma</span>
                  <span>Design Software</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/invision.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Invision</span>
                  <span>Design Software</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/jira.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Jira</span>
                  <span>Issue Tracker</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/taiga.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Taiga</span>
                  <span>Scrumboard</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/slack.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Slack</span>
                  <span>Messaging App</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/asana.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Asana</span>
                  <span>Task Manager</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/teamwork.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Teamwork</span>
                  <span>Collaborative App</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/github.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>GitHub</span>
                  <span>Code Repository</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Tool-->
        <div class="column is-4">
          <div class="tool-card">
            <input type="checkbox" />
            <div class="tool-card-inner">
              <div class="media-flex-center">
                <div class="h-avatar">
                  <img
                    class="avatar is-squared"
                    src="/images/photo/demo/tools/gitlab.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span>Gitlab</span>
                  <span>Code Repository</span>
                </div>
                <div class="flex-end">
                  <div class="checkmark">
                    <i class="iconify" data-icon="feather:check"></i>
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
