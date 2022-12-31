<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCardSocial')

useHead({
  title: 'VCardSocial - Components - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'Cards',
        },
        {
          label: 'VCardSocial',
          to: '/components/card/social',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--VCard Social-->
        <VCardSocialDocumentation />
      </div>

      <div class="column is-4">
        <VCardSocial
          title="Featured Tweet"
          network="twitter"
          avatar="/demo/avatars/19.jpg"
          username="@gretak"
          :hashtags="['#bulmaio', '#css', '#responsive']"
          share-label="Retweet"
          like-label="Save"
        >
          <span class="dark-inverted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
            mauris.
          </span>
        </VCardSocial>
      </div>

      <div class="column is-4">
        <VCardSocial
          title="Featured Story"
          network="instagram"
          avatar="/demo/avatars/5.jpg"
          username="Mary L."
          :hashtags="['#bulmaio', '#css', '#responsive']"
        >
          <span class="dark-inverted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
            mauris.
          </span>
        </VCardSocial>
      </div>

      <div class="column is-4">
        <VCardSocial
          title="Featured Post"
          network="facebook"
          avatar="/demo/avatars/36.jpg"
          username="Benoit L."
          :hashtags="['#bulmaio', '#css', '#responsive']"
        >
          <template #default>
            <span class="dark-inverted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris.
            </span>
          </template>
        </VCardSocial>
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
