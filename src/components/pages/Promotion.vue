<template>
  <!--Pronotion Page-->
  <div class="promotion-page-wrapper">
    <div class="wrapper-outer">
      <div class="wrapper-inner">
        <div class="action-box">
          <div class="box-content">
            <img
              class="light-image is-larger"
              src="/@images/illustrations/placeholders/promotion.svg"
              alt=""
            />
            <img
              class="dark-image is-larger"
              src="/@images/illustrations/placeholders/promotion-dark.svg"
              alt=""
            />
            <h3 class="dark-inverted">
              Empower your team to do greater things collaboratively
            </h3>
            <div class="price">
              <span class="dark-inverted">99</span>
              <span>Per Month</span>
            </div>
            <div class="buttons">
              <button class="button h-button is-dark-outlined">Skip</button>
              <button class="button h-button is-primary is-raised">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="side-wrapper">
        <div class="side-inner">
          <div class="side-title">
            <h3 class="dark-inverted">Features to make it better</h3>
            <p>Take a look at some incredible features</p>
          </div>

          <div class="action-list">
            <div class="media-flex">
              <div
                class="icon-wrap is-dark-primary is-dark-bg-3 is-dark-card-bordered"
              >
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="flex-meta">
                <span>Includes 8 team seats</span>
                <p>
                  Each team member on your account can create projects and
                  tasks.
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
                <span>Integrations</span>
                <p>
                  Add up to 5 addons to your main application to help you
                  manage.
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
                <span>Scale</span>
                <p>
                  Your application grows in parallel of your business, without
                  any effort.
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
@import '../../assets/scss/pages/generic/_utility.scss';
</style>
