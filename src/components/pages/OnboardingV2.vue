<template>
  <!--Onboarding V2-->
  <div class="onboarding-wrapper onboarding-v2">
    <div class="title-wrap">
      <p>Looks like you're new here</p>
      <h2 class="dark-inverted">
        Welcome to Vuero. What would you like to do?
      </h2>
    </div>

    <div class="onboarding-wrap">
      <div class="onboarding-wrap-inner">
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@images/illustrations/onboarding/set3-1.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@images/illustrations/onboarding/set3-1-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">Plan a Trip</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
              dicis; Ita enim vivunt.
            </p>
            <div class="button-wrap">
              <a class="button h-button is-primary is-rounded is-elevated"
                >Explore</a
              >
            </div>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@images/illustrations/onboarding/set3-2.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@images/illustrations/onboarding/set3-2-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">Book a Flight</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
              dicis; Ita enim vivunt.
            </p>
            <div class="button-wrap">
              <a class="button h-button is-primary is-rounded is-elevated"
                >Book Now</a
              >
            </div>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@images/illustrations/onboarding/set3-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@images/illustrations/onboarding/set3-3-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">Browse Destinations</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
              dicis; Ita enim vivunt.
            </p>
            <div class="button-wrap">
              <a class="button h-button is-primary is-rounded is-elevated"
                >Browse</a
              >
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
@import '../../assets/scss/pages/generic/_onboarding.scss';
</style>
