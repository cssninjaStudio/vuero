<script setup lang="ts">
import { avatarList, avatarListCreative } from '/@src/data/widgets/ui/avatarList'
import {
  socialButtonList1,
  socialButtonList2,
} from '/@src/data/widgets/ui/socialButtonList'
import { followersStats } from '/@src/data/widgets/ui/followers'
import { products } from '/@src/data/widgets/ui/productList'

import Widget1 from '/@src/assets/illustrations/widgets/1.svg'
import Widget2 from '/@src/assets/illustrations/widgets/2.svg'
import Widget3 from '/@src/assets/illustrations/widgets/3.svg'
import Widget4 from '/@src/assets/illustrations/widgets/4.svg'
import Widget5 from '/@src/assets/illustrations/widgets/5.svg'
import Widget7 from '/@src/assets/illustrations/widgets/7.svg'
import Widget8 from '/@src/assets/illustrations/widgets/8.svg'
</script>

<template>
  <div class="columns is-multiline widget-demo-columns">
    <div class="column is-3">
      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v1"
        title="You unlocked 2 new Achievements"
        text="Congrats, your efforts have been rewarded. Keep up like this!"
        :picture="Widget1"
        :badge-left="Widget2"
        :badge-right="Widget3"
      />

      <!--Widget-->
      <ContactWidget
        picture="/images/avatars/svg/vuero-1.svg"
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
        :picture="Widget7"
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
        :picture="Widget4"
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
              Vuero will be released very soon, probably around the end of the year of the
              Christmas holidays.
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
        :picture="Widget5"
      />

      <!--Widget-->
      <ContactWidget
        picture="/images/avatars/svg/vuero-1.svg"
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
        picture="/@src/assets/illustrations/widgets/6.svg"
        badge="/demo/avatars/7.jpg"
        username="Alice"
      />

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="You unlocked 2 new Achievements"
        text="Congrats, your efforts have been rewarded. Keep up like this!"
        :picture="Widget8"
      />
    </div>
  </div>
</template>
