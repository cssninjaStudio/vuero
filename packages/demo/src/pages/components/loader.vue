<script setup lang="ts">
import { VLoaderMeta } from '/@src/data/documentation/components-meta'

const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VLoader'
})

useHead({
  title: 'VLoader - Components - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'VLoader',
          to: '/components/loader',
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Loader-->
        <VLoaderDocumentation />

        <div class="mb-4">
          <VButton
            color="primary"
            elevated
            @click="toggleLoaders"
          >
            <span v-if="!isLoaderActive">Show Loaders</span>
            <span v-else>Hide Loaders</span>
          </VButton>
        </div>

        <div class="columns is-multiline">
          <div class="column is-4">
            <VLoader
              size="small"
              :active="isLoaderActive"
              grey
            >
              <VCardAction
                avatar="https://media.cssninja.io/content/avatars/19.jpg"
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
            <VLoader
              card="regular"
              size="small"
              :active="isLoaderActive"
            >
              <VCardAction
                avatar="https://media.cssninja.io/content/avatars/19.jpg"
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
            <VLoader
              card="regular"
              size="small"
              :active="isLoaderActive"
              translucent
            >
              <VCardAction
                avatar="https://media.cssninja.io/content/avatars/19.jpg"
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
            <VLoader
              card="smooth"
              :active="isLoaderActive"
            >
              <VCardAction
                avatar="https://media.cssninja.io/content/avatars/19.jpg"
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
            <VLoader
              card="rounded"
              size="large"
              :active="isLoaderActive"
            >
              <VCardAction
                avatar="https://media.cssninja.io/content/avatars/19.jpg"
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
            <VLoader
              card="rounded"
              size="xl"
              :active="isLoaderActive"
            >
              <VCardAction
                avatar="https://media.cssninja.io/content/avatars/19.jpg"
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

        <DocumentationMeta
          name="VLoader"
          :meta="VLoaderMeta"
        />
      </div>
    </div>
  </div>
</template>
