<template>
  <div class="onboarding-wrapper onboarding-v1">
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
            src="/@src/assets/illustrations/onboarding/set2-1.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set2-1-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">Explore Posts</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
              dicis; Ita enim vivunt.
            </p>
            <div class="button-wrap">
              <VButton color="primary" rounded elevated> Explore </VButton>
            </div>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set2-2.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set2-2-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">Schedule a Meeting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
              dicis; Ita enim vivunt.
            </p>
            <div class="button-wrap">
              <VButton color="primary" rounded elevated> Schedule </VButton>
            </div>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set2-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set2-3-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">Chill Out</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
              dicis; Ita enim vivunt.
            </p>
            <div class="button-wrap">
              <VButton color="primary" rounded elevated> Take a Nap </VButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_onboarding.scss';
</style>
