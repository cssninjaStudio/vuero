<template>
  <MinimalLayout>
    <div class="error-container">
      <div class="error-wrapper">
        <div class="error-inner has-text-centered">
          <img src="/@images/illustrations/placeholders/error-4.svg" alt="" />
          <h3>We couldn't find that page</h3>
          <p>
            Looks like we couldn't find that page. Please try again or contact
            an administrator if the problem persists.
          </p>
          <div class="button-wrap">
            <a
              class="button h-button is-primary is-rounded is-elevated"
              onclick="goBack()"
              >Take me Back</a
            >
          </div>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>
