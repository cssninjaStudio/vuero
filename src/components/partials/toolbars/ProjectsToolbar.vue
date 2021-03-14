<template>
  <div class="projects-toolbar">
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
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
      <div class="v-avatar is-small">
        <img
          class="avatar"
          src="/images/avatars/photos/9.jpg"
          alt=""
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
      <div class="v-avatar is-small">
        <img
          class="avatar"
          src="/images/avatars/photos/12.jpg"
          alt=""
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
      <div class="v-avatar is-small">
        <img
          class="avatar"
          src="/images/avatars/photos/8.jpg"
          alt=""
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
      <div class="v-avatar is-small">
        <img
          class="avatar"
          src="/images/avatars/photos/25.jpg"
          alt=""
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
      <div class="v-avatar is-small">
        <img
          class="avatar"
          src="/images/avatars/photos/22.jpg"
          alt=""
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
    </div>

    <a class="button v-button is-primary is-raised is-bold">
      <span>New Project</span>
    </a>
  </div>
</template>

<style lang="scss">
@import '../../../assets/scss/abstracts/_variables.scss';
@import '../../../assets/scss/abstracts/_mixins.scss';

/* ==========================================================================
1. Projects Toolbar
========================================================================== */

.projects-toolbar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .avatar-stack {
    margin-left: 16px;
  }

  .button {
    margin-left: auto;
    min-width: 140px;
  }
}

.is-dark {
  .projects-toolbar {
    .avatar-stack {
      .avatar {
        border-color: lighten($dark-sidebar, 3%);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .projects-toolbar {
    .avatar-stack {
      display: none;
    }

    .v-button {
      min-width: 110px;
    }
  }
}
</style>
