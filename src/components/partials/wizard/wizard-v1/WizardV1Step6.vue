<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Make sure everything is good</h2>
      <p>You can go back to previous steps if you need to edit anything.</p>
    </div>

    <div class="project-preview-wrapper">
      <div class="project-preview-loader is-active">
        <div class="loader is-loading"></div>
      </div>

      <div class="project-preview-header">
        <div class="h-avatar is-big">
          <div id="project-preview-fake-logo" class="avatar is-fake is-h-green">
            <span>P</span>
          </div>
          <img
            id="project-preview-logo"
            class="avatar is-hidden"
            alt=""
            @error="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
          <a class="edit-icon" data-step-edit="1">
            <i class="lnil lnil-pencil"></i>
          </a>
        </div>
        <h3 id="project-preview-title" class="title is-4 is-narrow is-thin">
          <span>Project Title Goes Here</span>
          <a class="edit-icon">
            <i class="lnil lnil-pencil" data-step-edit="1"></i>
          </a>
        </h3>
      </div>

      <div class="project-preview-body">
        <div class="columns is-multiline">
          <div class="column is-12 is-tablet-100">
            <div class="edit-box">
              <h4>Description</h4>

              <div class="edit-icon" data-step-edit="1">
                <i class="lnil lnil-pencil"></i>
              </div>

              <p id="project-preview-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                negat? Tamen a proposito, inquam, aberramus. Deinde dolorem quem
                maximum? Quae duo sunt, unum facit. Quod vestri non item.
              </p>
            </div>
          </div>
          <div class="column is-6 is-tablet-50">
            <div id="project-preview-type" class="edit-box">
              <div class="edit-icon" data-step-edit="0">
                <i class="lnil lnil-pencil"></i>
              </div>
              <div class="media-flex-center">
                <div class="h-icon is-medium is-warning is-rounded">
                  <i class="lnil lnil-vector-pen"></i>
                </div>
                <div class="flex-meta">
                  <span>UI/UX Design</span>
                  <span>Project Type</span>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <div class="edit-icon" data-step-edit="2">
                <i class="lnil lnil-pencil"></i>
              </div>
              <div
                id="project-preview-customer-block"
                class="media-flex-center"
              >
                <div class="h-avatar is-medium">
                  <img
                    id="project-preview-customer-logo"
                    class="avatar"
                    src="/images/photo/demo/brands/airbnb.svg"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="flex-meta">
                  <span id="project-preview-customer-name">Airbnb</span>
                  <span>Project Customer</span>
                </div>
              </div>
              <div
                id="project-preview-customer-placeholder"
                class="edit-box-placeholder is-media is-hidden"
              >
                <span>No selected customer</span>
              </div>
            </div>
          </div>

          <div class="column is-4 is-tablet-33">
            <div class="edit-box">
              <div class="edit-icon" data-step-edit="2">
                <i class="lnil lnil-pencil"></i>
              </div>
              <div class="estimated-budget">
                <div class="inner-block">
                  <div id="project-preview-budget" class="budget">
                    <span>&lt; 30K</span>
                  </div>
                  <p>Estimated Budget</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-4 is-tablet-33">
            <div class="edit-box">
              <div class="edit-icon" data-step-edit="2">
                <i class="lnil lnil-pencil"></i>
              </div>
              <div class="estimated-due-date">
                <div class="inner-block">
                  <div id="project-preview-date" class="date">
                    <span>Oct 20, 2020</span>
                  </div>
                  <p>Estimated Due Date</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-4 is-tablet-33">
            <div class="edit-box">
              <div class="edit-icon" data-step-edit="3">
                <i class="lnil lnil-pencil"></i>
              </div>
              <div class="attachments-count">
                <div class="inner-block">
                  <div id="project-preview-attachments" class="attachments">
                    <span>3</span>
                  </div>
                  <p>Attachments</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <h4>Team</h4>

              <div class="edit-icon" data-step-edit="4">
                <i class="lnil lnil-pencil"></i>
              </div>

              <div id="project-preview-team" class="media-list">
                <div class="media-list-item is-owner">
                  <div class="media-flex-center">
                    <div class="h-avatar">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/8.jpg"
                        alt=""
                        data-user-popover="3"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Erik K.</span>
                      <span>Owner</span>
                    </div>
                  </div>
                </div>
                <div class="media-list-item">
                  <div class="media-flex-center">
                    <div class="h-avatar">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/7.jpg"
                        alt=""
                        data-user-popover="0"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Alice C.</span>
                      <span>Member</span>
                    </div>
                  </div>
                </div>
                <div class="media-list-item">
                  <div class="media-flex-center">
                    <div class="h-avatar">
                      <img
                        class="avatar"
                        src="/images/avatars/photos/25.jpg"
                        alt=""
                        data-user-popover="4"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Melany W.</span>
                      <span>Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6 is-tablet-50">
            <div class="edit-box">
              <h4>Tools</h4>

              <div class="edit-icon" data-step-edit="5">
                <i class="lnil lnil-pencil"></i>
              </div>

              <div
                id="project-preview-tools-placeholder"
                class="edit-box-placeholder is-list is-hidden"
              >
                <span>No selected tools</span>
              </div>

              <div id="project-preview-tools" class="media-list">
                <div class="media-list-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/photo/demo/tools/illustrator.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Illustrator</span>
                      <span>Design Software</span>
                    </div>
                  </div>
                </div>
                <div class="media-list-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/photo/demo/tools/figma.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Figma</span>
                      <span>Design Software</span>
                    </div>
                  </div>
                </div>
                <div class="media-list-item">
                  <div class="media-flex-center">
                    <div class="h-avatar is-small">
                      <img
                        class="avatar"
                        src="/images/photo/demo/tools/taiga.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="flex-meta">
                      <span>Taiga</span>
                      <span>Scrumboard</span>
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
