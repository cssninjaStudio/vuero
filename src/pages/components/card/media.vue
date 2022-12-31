<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VCardMedia')

useHead({
  title: 'VCardMedia - Components - Vuero',
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
          label: 'VCardMedia',
          to: '/components/card/media',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--VCardMedia-->
        <VCardMediaDocumentation />
      </div>

      <div class="column is-4">
        <VCardMedia
          image="/demo/photos/apps/1.jpg"
          avatar="/demo/avatars/19.jpg"
          badge="/images/icons/flags/germany.svg"
          title="Greta K."
          subtitle="Sales Manager"
        >
          <p class="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero isti,
            inquam, permitto. Id Sextilius factum negabat. Apparet statim, quae sint
            officia, quae actiones. Sed hoc sane concedamus...
          </p>

          <a class="action-link" tabindex="0">Read More</a>
        </VCardMedia>
      </div>

      <div class="column is-4">
        <VCardMedia
          image="/demo/photos/apps/2.png"
          avatar="/demo/avatars/23.jpg"
          badge="/images/icons/flags/united-states-of-america.svg"
          title="Irina V."
          subtitle="Project Manager"
        >
          <p class="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero isti,
            inquam, permitto. Id Sextilius factum negabat. Apparet statim, quae sint
            officia, quae actiones. Sed hoc sane concedamus...
          </p>

          <a class="action-link" tabindex="0">Read More</a>
        </VCardMedia>
      </div>

      <div class="column is-4">
        <VCardMedia
          image="/demo/photos/apps/3.png"
          avatar="/demo/avatars/12.jpg"
          badge="/images/icons/flags/united-states-of-america.svg"
          title="Joshua S."
          subtitle="Backend Developer"
        >
          <p class="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero isti,
            inquam, permitto. Id Sextilius factum negabat. Apparet statim, quae sint
            officia, quae actiones. Sed hoc sane concedamus...
          </p>

          <a class="action-link" tabindex="0">Read More</a>
        </VCardMedia>
      </div>

      <div class="column is-12 mt-5">
        <!--Props-->
        <VCardMediaPropsDocumentation />

        <!--Slots-->
        <VCardMediaSlotsDocumentation />
      </div>
    </div>
  </div>
</template>
