<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VLoader')

useHead({
  title: 'VLoader - Elements - Vuero',
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
          label: 'Elements',
          to: '/elements/',
        },
        {
          label: 'VLoader',
          to: '/elements/loader',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Loader-->
        <VLoaderDocumentation />

        <div class="mb-4">
          <VButton color="primary" elevated @click="toggleLoaders">
            <span v-if="!isLoaderActive">Show Loaders</span>
            <span v-else>Hide Loaders</span>
          </VButton>
        </div>

        <div class="columns is-multiline">
          <div class="column is-4">
            <VLoader size="small" :active="isLoaderActive" grey>
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
                  praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
                  loqui discimus. Et ille ridens.
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader card="regular" size="small" :active="isLoaderActive">
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
                  praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
                  loqui discimus. Et ille ridens.
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader card="regular" size="small" :active="isLoaderActive" translucent>
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
                  praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
                  loqui discimus. Et ille ridens.
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader card="smooth" :active="isLoaderActive">
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
                radius="smooth"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
                  praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
                  loqui discimus. Et ille ridens.
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader card="rounded" size="large" :active="isLoaderActive">
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
                radius="rounded"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
                  praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
                  loqui discimus. Et ille ridens.
                </p>
              </VCardAction>
            </VLoader>
          </div>
          <div class="column is-4">
            <VLoader card="rounded" size="xl" :active="isLoaderActive">
              <VCardAction
                avatar="/demo/avatars/19.jpg"
                badge="/images/icons/flags/germany.svg"
                title="Greta K."
                subtitle="Sales Manager"
                radius="rounded"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
                  praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
                  loqui discimus. Et ille ridens.
                </p>
              </VCardAction>
            </VLoader>
          </div>
        </div>

        <VLoaderPropsDocumentation />
        <VLoaderSlotsDocumentation />
      </div>
    </div>
  </div>
</template>
