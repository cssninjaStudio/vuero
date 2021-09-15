<template>
  <div class="standard-onboarding">
    <div class="title-wrap">
      <p>Looks like you're new here</p>
      <h2>Welcome to Vuero. What would you like to do?</h2>
    </div>

    <div class="onboarding-wrap">
      <div class="onboarding-wrap-inner">
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set6-1.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set6-1-dark.svg"
            alt=""
          />
          <h3>Configure Shop</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
            dicis; Ita enim vivunt quidam, ut eorum vita refellatur oratio. Sed
            tament.
          </p>
          <div class="button-wrap">
            <VButton color="primary" elevated> Configure </VButton>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set6-2.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set6-2-dark.svg"
            alt=""
          />
          <h3>Configure Warehouse</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
            dicis; Ita enim vivunt quidam, ut eorum vita refellatur oratio. Sed
            tament.
          </p>
          <div class="button-wrap">
            <VButton color="primary" elevated> Configure </VButton>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set6-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set6-3-dark.svg"
            alt=""
          />
          <h3>Manage Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recte
            dicis; Ita enim vivunt quidam, ut eorum vita refellatur oratio. Sed
            tament.
          </p>
          <div class="button-wrap">
            <VButton color="primary" elevated> Manage </VButton>
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
