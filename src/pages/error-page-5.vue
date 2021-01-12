<template>
  <MinimalLayout>
    <div class="error-container">
      <div class="error-wrapper">
        <div class="error-inner has-text-centered">
          <div class="bg-number">500</div>
          <img src="/@images/illustrations/placeholders/error-5.svg" alt="" />
          <h3>Internal Server Error</h3>
          <p>
            Looks like an unexpacted problem occured. Please try again or
            contact the website administrator.
          </p>
          <div class="button-wrap">
            <a class="button h-button is-primary is-elevated" onclick="goBack()"
              >Take me Back</a
            >
          </div>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>
