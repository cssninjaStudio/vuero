<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { userStack2 } from '/@src/data/users/userStacks'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'V-CardSocial'
useHead({
  title: 'V-CardSocial - Components - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <V-Breadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: { name: 'index' },
        },
        {
          label: 'Components',
          to: { name: 'components' },
        },
        {
          label: 'Cards',
        },
        {
          label: 'V-CardSocial',
          to: { name: 'components-card-social' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--V-Card Social-->
        <VCardSocialDocumentation />
      </div>

      <div class="column is-4">
        <V-CardSocial
          title="Featured Tweet"
          network="twitter"
          avatar="/demo/avatars/19.jpg"
          username="@gretak"
          :hashtags="['#bulmaio', '#css', '#responsive']"
          share-label="Retweet"
          like-label="Save"
        >
          <span class="dark-inverted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </span>
        </V-CardSocial>
      </div>

      <div class="column is-4">
        <V-CardSocial
          title="Featured Story"
          network="instagram"
          avatar="/demo/avatars/5.jpg"
          username="Mary L."
          :hashtags="['#bulmaio', '#css', '#responsive']"
        >
          <span class="dark-inverted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </span>
        </V-CardSocial>
      </div>

      <div class="column is-4">
        <V-CardSocial
          title="Featured Post"
          network="facebook"
          avatar="/demo/avatars/36.jpg"
          username="Benoit L."
          :hashtags="['#bulmaio', '#css', '#responsive']"
        >
          <template #default>
            <span class="dark-inverted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </span>
          </template>
        </V-CardSocial>
      </div>

      <div class="column is-12 mt-5">
        <!--Props-->
        <VCardSocialPropsDocumentation />

        <!--Slots-->
        <VCardSocialSlotsDocumentation />

        <!--Events-->
        <VCardSocialEventsDocumentation />
      </div>
    </div>
  </div>
</template>
