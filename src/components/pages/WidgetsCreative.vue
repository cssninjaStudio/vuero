<script setup lang="ts">
import {
  avatarList,
  avatarListCreative,
} from '/@src/composition/state/widgets/UI/avatarList'
import {
  socialButtonList1,
  socialButtonList2,
} from '/@src/composition/state/widgets/UI/socialButtonList'
import { followersStats } from '/@src/composition/state/widgets/UI/followers'
import { products } from '/@src/composition/state/widgets/UI/productList'
</script>

<template>
  <!--Data Widgets-->
  <div class="columns is-multiline">
    <div class="column is-3">
      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v1"
        title="You unlocked 2 new Achievements"
        text="Congrats, your efforts have been rewarded. Keep up like this!"
        picture="/images/illustrations/widgets/1.svg"
        badge-left="/images/illustrations/widgets/2.svg"
        badge-right="/images/illustrations/widgets/3.svg"
      />

      <!--Widget-->
      <ContactWidget
        picture="/images/avatars/photos/8.jpg"
        username="Erik K."
        email="erikkovalsky@vuero.io"
        company="Vuero Ltd."
        position="Product Manager"
        location="Los Angeles, CA"
        phone="+1 444-5156"
      />

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="You unlocked 2 new Achievements"
        text="Congrats, your efforts have been rewarded. Keep up like this!"
        picture="/images/illustrations/widgets/7.svg"
      />

      <!--Widget-->
      <AvatarListWidget :avatars="avatarList" squared />
    </div>

    <div class="column is-3">
      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="You unlocked 2 new Achievements"
        text="Congrats, your efforts have been rewarded. Keep up like this!"
        picture="/images/illustrations/widgets/4.svg"
      />

      <!--Widget-->
      <SocialButtonsWidget :buttons="socialButtonList1" />

      <!--Widget-->
      <AvatarListWidget :avatars="avatarList" />

      <!--Widget-->
      <UIWidget class="followers-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="Followers" />
        </template>
        <template #body>
          <UIWidgetFollowerStats :channels="followersStats" />
        </template>
      </UIWidget>

      <!--Widget-->
      <CartWidget :products="products" />
    </div>

    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="text-widget">
        <template #header>
          <UIWidgetToolbarIcon title="@cssninjaStudio" icon="feather:twitter" />
        </template>
        <template #body>
          <div class="widget-content">
            <p>
              Vuero will be released very soon, probably around the end of the
              year of the Christmas holidays.
            </p>
            <p class="hashtags">
              <a>#uikit</a>
              <a>#dashboards</a>
              <a>#bulma</a>
            </p>
          </div>
        </template>
      </UIWidget>

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v3"
        title="You unlocked 2 new Achievements"
        text="Congrats, your efforts have been rewarded. Keep up like this!"
        picture="/images/illustrations/widgets/5.svg"
      />

      <!--Widget-->
      <ContactWidget
        picture="/images/avatars/photos/8.jpg"
        username="Erik K."
        email="erikkovalsky@vuero.io"
        company="Vuero Ltd."
        position="Product Manager"
        location="Los Angeles, CA"
        phone="+1 444-5156"
        squared
        reversed
      />

      <!--Widget-->
      <SocialButtonsWidget :buttons="socialButtonList2" rounded />

      <!--Widget-->
      <UIWidget class="creative-list-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="Designers" />
        </template>
        <template #body>
          <UIWidgetCreativeList :list="avatarListCreative" squared />
        </template>
      </UIWidget>
    </div>

    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="creative-list-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="Designers" />
        </template>
        <template #body>
          <UIWidgetCreativeList :list="avatarListCreative" />
        </template>
      </UIWidget>

      <!--Widget-->
      <CallWidget
        picture="/images/illustrations/widgets/6.svg"
        badge="/images/avatars/photos/7.jpg"
        username="Alice"
      />

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="You unlocked 2 new Achievements"
        text="Congrats, your efforts have been rewarded. Keep up like this!"
        picture="/images/illustrations/widgets/8.svg"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_widgets-lists.scss';
</style>
