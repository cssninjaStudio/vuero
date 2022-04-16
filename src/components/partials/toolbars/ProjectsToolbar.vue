<template>
  <div class="projects-toolbar">
    <VField raw>
      <VControl icon="feather:search">
        <VInput placeholder="Search again..." />
      </VControl>
    </VField>

    <VAvatarStack>
      <VAvatar size="small" picture="/demo/avatars/7.jpg" />
      <VAvatar size="small" picture="/demo/avatars/9.jpg" />
      <VAvatar size="small" picture="/demo/avatars/12.jpg" />
      <VAvatar size="small" picture="/images/avatars/svg/vuero-1.svg" />
      <VAvatar size="small" picture="/demo/avatars/25.jpg" />
      <VAvatar size="small" picture="/demo/avatars/22.jpg" />
    </VAvatarStack>

    <a class="button v-button is-primary is-raised is-bold">
      <span>New Project</span>
    </a>
  </div>
</template>

<style lang="scss">
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
        border-color: var(--dark-sidebar-light-3);
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
