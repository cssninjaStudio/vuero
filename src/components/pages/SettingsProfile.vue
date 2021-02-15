<template>
  <!--Profile Settings-->
  <div class="profile-wrapper">
    <div class="profile-header has-text-centered">
      <div class="v-avatar is-xl">
        <img
          class="avatar"
          src="/images/avatars/photos/8.jpg"
          alt=""
          data-user-popover="3"
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
        <img
          class="badge"
          src="/images/icons/flags/united-states-of-america.svg"
          alt=""
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
      </div>
      <h3 class="title is-4 is-narrow">Erik Kovalsky</h3>
      <p class="light-text">
        Hey everyone, Iam a product manager from New York and Iam looking for
        new opportunities in the software business.
      </p>
      <div class="profile-stats">
        <div class="profile-stat">
          <i class="lnil lnil-users-alt"></i>
          <span>500+ Relations</span>
        </div>
        <div class="separator"></div>
        <div class="profile-stat">
          <i class="lnil lnil-checkmark-circle"></i>
          <span>78 Projects</span>
        </div>
        <div class="separator"></div>
        <div class="socials">
          <a><i class="fab fa-facebook-f"></i></a>
          <a><i class="fab fa-twitter"></i></a>
          <a><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div class="profile-body">
      <div class="settings-section">
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-apartment"></i>
          </div>
          <span>Company</span>
          <h3>Manage Company</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-users"></i>
          </div>
          <span>Team</span>
          <h3>Manage Team</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-briefcase-alt"></i>
          </div>
          <span>Projects</span>
          <h3>Project Settings</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-lock-alt-1"></i>
          </div>
          <span>Permissions</span>
          <h3>Manage Permissions</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-file-name"></i>
          </div>
          <span>Document</span>
          <h3>Document Policies</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-file-upload"></i>
          </div>
          <span>Upload</span>
          <h3>Upload Policies</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-credit-card"></i>
          </div>
          <span>Billing</span>
          <h3>Billing and Plans</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-bubble"></i>
          </div>
          <span>Messaging</span>
          <h3>Messaging Settings</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-shield"></i>
          </div>
          <span>Security</span>
          <h3>Security Settings</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="icon-wrap">
            <i class="lnil lnil-cogs"></i>
          </div>
          <span>Preferences</span>
          <h3>General Settings</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/profile/_user-profile.scss';
</style>
