<template>
  <div class="profile-wrapper">
    <div class="profile-header has-text-centered">
      <V-Avatar
        size="xl"
        picture="/demo/avatars/8.jpg"
        badge="/images/icons/flags/united-states-of-america.svg"
      />

      <h3 class="title is-4 is-narrow">Erik Kovalsky</h3>
      <p class="light-text">
        Hey everyone, Iam a product manager from New York and Iam looking for
        new opportunities in the software business.
      </p>
      <div class="profile-stats">
        <div class="profile-stat">
          <i aria-hidden="true" class="lnil lnil-users-alt"></i>
          <span>500+ Relations</span>
        </div>
        <div class="separator"></div>
        <div class="profile-stat">
          <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
          <span>78 Projects</span>
        </div>
        <div class="separator"></div>
        <div class="socials">
          <a><i aria-hidden="true" class="fab fa-facebook-f"></i></a>
          <a><i aria-hidden="true" class="fab fa-twitter"></i></a>
          <a><i aria-hidden="true" class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div class="profile-body">
      <div class="settings-section">
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-apartment" />

          <span>Company</span>
          <h3>Manage Company</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-users" />

          <span>Team</span>
          <h3>Manage Team</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-briefcase-alt" />

          <span>Projects</span>
          <h3>Project Settings</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-lock-alt-1" />

          <span>Permissions</span>
          <h3>Manage Permissions</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-file-name" />

          <span>Document</span>
          <h3>Document Policies</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-file-upload" />

          <span>Upload</span>
          <h3>Upload Policies</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-credit-card" />

          <span>Billing</span>
          <h3>Billing and Plans</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-bubble" />

          <span>Messaging</span>
          <h3>Messaging Settings</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-shield" />

          <span>Security</span>
          <h3>Security Settings</h3>
        </a>
        <a class="settings-box">
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap icon="lnil lnil-cogs" />

          <span>Preferences</span>
          <h3>General Settings</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/profile/_user-profile.scss';
</style>
