<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/sidebarLayoutState'

const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}

pageTitle.value = 'V-Loader'
useHead({
  title: 'V-Loader - Elements - Vuero',
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
          label: 'Elements',
          to: { name: 'elements' },
        },
        {
          label: 'V-Loader',
          to: { name: 'elements-loader' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Loader-->
        <VLoaderDocumentation />

        <div class="mb-4">
          <V-Button color="primary" elevated @click="toggleLoaders">
            <span v-if="!isLoaderActive">Show Loaders</span>
            <span v-else>Hide Loaders</span>
          </V-Button>
        </div>

        <div class="columns is-multiline">
          <div class="column is-4">
            <V-Loader size="small" :active="isLoaderActive" grey>
              <V-CardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </V-Loader>
          </div>
          <div class="column is-4">
            <V-Loader card="regular" size="small" :active="isLoaderActive">
              <V-CardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </V-Loader>
          </div>
          <div class="column is-4">
            <V-Loader
              card="regular"
              size="small"
              :active="isLoaderActive"
              translucent
            >
              <V-CardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </V-Loader>
          </div>
          <div class="column is-4">
            <V-Loader card="smooth" :active="isLoaderActive">
              <V-CardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
                radius="smooth"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </V-Loader>
          </div>
          <div class="column is-4">
            <V-Loader card="rounded" size="large" :active="isLoaderActive">
              <V-CardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
                radius="rounded"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </V-Loader>
          </div>
          <div class="column is-4">
            <V-Loader card="rounded" size="xl" :active="isLoaderActive">
              <V-CardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
                radius="rounded"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quibusnam praeteritis? At multis se probavit. Quoniam, si dis
                  placet, ab Epicuro loqui discimus. Et ille ridens.
                </p>
              </V-CardAction>
            </V-Loader>
          </div>
        </div>

        <VLoaderPropsDocumentation />
        <VLoaderSlotsDocumentation />
      </div>
    </div>
  </div>
</template>
