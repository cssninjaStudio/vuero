<template>
  <div id="demo-large-modal" class="modal h-modal is-large">
    <div class="modal-background h-modal-close"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <h3>Invitation</h3>
          <button class="h-modal-close ml-auto" aria-label="close">
            <Icon icon="feather:x" />
          </button>
        </header>
        <div class="modal-card-body">
          <div class="inner-content">
            <div class="section-placeholder">
              <div class="placeholder-content">
                <div class="h-avatar is-xl">
                  <img
                    class="avatar"
                    src="https://via.placeholder.com/150x150"
                    data-demo-src="/src/assets/images/avatars/photos/22.jpg"
                    alt=""
                  />
                  <img
                    class="badge"
                    src="https://via.placeholder.com/150x150"
                    data-demo-src="/src/assets/images/icons/flags/united-states-of-america.svg"
                    alt=""
                  />
                </div>
                <h3 class="dark-inverted">You were invited</h3>
                <p>Jimmy H. invited you to join the Heartman & Sons project.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-card-foot is-centered">
          <a class="button h-button is-rounded h-modal-close">Decline</a>
          <a class="button h-button is-primary is-raised is-rounded">Accept</a>
        </div>
      </div>
    </div>
  </div>
</template>