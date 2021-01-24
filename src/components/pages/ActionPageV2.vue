<template>
  <!--Action Page-->
  <div class="action-page-wrapper action-page-v2">
    <div class="wrapper-outer">
      <div class="wrapper-inner">
        <div class="action-box">
          <div class="box-content">
            <div class="v-avatar is-big">
              <img
                class="avatar"
                src="/images/avatars/photos/16.jpg"
                alt=""
                data-user-popover="16"
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <img
                class="badge"
                src="/images/photo/demo/apps/9.png"
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <h3 class="dark-inverted">
              Jason G. has invited you to the
              <span class="is-dark-primary">Banking Solution Website</span>
              project.
            </h3>
            <div class="sender-message is-dark-card-bordered is-dark-bg-4">
              <h4 class="dark-inverted">Message from Jason</h4>
              <p>
                Hey Erik, It would be really cool if you could give us a hand on
                this project. There are a lot of tasks popping out every day and
                I feel the team is getting a bit overwhelmed. We'd love to have
                you board.
              </p>
            </div>
            <div class="people-wrap">
              <div class="people">
                <div class="v-avatar is-small">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/21.jpg"
                    alt=""
                    data-user-popover="19"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
                <div class="v-avatar is-small">
                  <span
                    class="avatar is-fake is-h-purple"
                    data-user-popover="35"
                  >
                    <span>SC</span>
                  </span>
                </div>
                <div class="v-avatar is-small">
                  <img
                    class="avatar"
                    src="/images/avatars/photos/39.jpg"
                    alt=""
                    data-user-popover="33"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                </div>
              </div>
              <div class="people-text">
                <p>And 5 others are already members of this project</p>
              </div>
            </div>
            <div class="buttons">
              <button class="button h-button is-dark-outlined">Decline</button>
              <button class="button h-button is-primary is-raised">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="side-wrapper">
        <div class="side-inner">
          <div class="side-title">
            <h3 class="dark-inverted">Additional Instructions</h3>
            <p>Jason has sent some additional instructions</p>
          </div>

          <div class="action-list">
            <div class="media-flex">
              <div
                class="icon-wrap is-dark-primary is-dark-bg-3 is-dark-card-bordered"
              >
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="flex-meta">
                <span>Project Summary</span>
                <p>
                  Please read the project summary. You'll find it in your inbox
                </p>
              </div>
            </div>
            <div class="media-flex">
              <div
                class="icon-wrap is-dark-primary is-dark-bg-3 is-dark-card-bordered"
              >
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="flex-meta">
                <span>UI Review</span>
                <p>Please review the latest wireframs the team has provided.</p>
              </div>
            </div>
            <div class="media-flex">
              <div
                class="icon-wrap is-dark-primary is-dark-bg-3 is-dark-card-bordered"
              >
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="flex-meta">
                <span>Schedule</span>
                <p>
                  Please schedule a meeting with the team so they can ramp you
                  up.
                </p>
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
@import '../../assets/scss/pages/generic/_subpages.scss';
</style>
