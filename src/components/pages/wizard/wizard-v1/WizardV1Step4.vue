<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Who will be working on this project?</h2>
      <p>Start by adding members to your team</p>
    </div>

    <!--List Empty Search Placeholder -->
    <div class="page-placeholder is-people">
      <div class="placeholder-content">
        <img
          class="light-image is-rounded"
          src="/@images/illustrations/wizard/team-placeholder.svg"
          alt=""
        />
        <img
          class="dark-image is-rounded"
          src="/@images/illustrations/wizard/team-placeholder.svg"
          alt=""
        />
        <h3>Invite People</h3>
        <p class="is-larger">
          You can already start adding files to your project if you have them
          handy. But don't worry, you'll be able to add and manage files later.
        </p>
        <a class="action-link toggle-members-link">Add Members</a>
      </div>
    </div>

    <div class="project-team-wrapper is-hidden">
      <div class="project-team-header">
        <div class="field is-autocomplete">
          <div class="control has-icon">
            <input
              id="add-member"
              class="input"
              placeholder="Search teammates..."
            />
            <div class="form-icon">
              <Icon icon="feather:search" />
            </div>
          </div>
        </div>
        <div class="h-avatar is-big">
          <img
            class="avatar"
            src="https://via.placeholder.com/150x150"
            data-demo-src="/@images/avatars/photos/8.jpg"
            alt=""
            data-user-popover="3"
          />
          <img
            class="badge"
            src="https://via.placeholder.com/150x150"
            data-demo-src="/@images/icons/flags/united-states-of-america.svg"
            alt=""
          />
        </div>
        <h3 class="title is-4 is-narrow is-thin">Erik Kovalsky</h3>
        <p class="light-text">You are the project owner</p>
      </div>

      <div class="project-team-body">
        <div class="members-list">
          <div class="empty-wrap has-text-centered">
            <span>No team members yet</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
