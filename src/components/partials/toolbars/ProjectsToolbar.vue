<template>
  <div class="projects-toolbar">
    <div class="control has-icon">
      <input class="input" placeholder="Search..." />
      <div class="form-icon">
        <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
      </div>
    </div>

    <div class="avatar-stack">
      <V-Avatar size="small" picture="/demo/avatars/7.jpg" />
      <V-Avatar size="small" picture="/demo/avatars/9.jpg" />
      <V-Avatar size="small" picture="/demo/avatars/12.jpg" />
      <V-Avatar size="small" picture="/demo/avatars/8.jpg" />
      <V-Avatar size="small" picture="/demo/avatars/25.jpg" />
      <V-Avatar size="small" picture="/demo/avatars/22.jpg" />
    </div>

    <a class="button v-button is-primary is-raised is-bold">
      <span>New Project</span>
    </a>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';

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
