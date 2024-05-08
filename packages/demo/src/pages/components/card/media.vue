<script setup lang="ts">
import { VCardMediaMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VCardMedia'
})

useHead({
  title: 'VCardMedia - Components - Vuero',
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
          image="https://media.cssninja.io/content/photos/apps/1.jpg"
          avatar="https://media.cssninja.io/content/avatars/19.jpg"
          badge="/images/icons/flags/germany.svg"
          title="Greta K."
          subtitle="Sales Manager"
        >
          <p class="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero isti,
            inquam, permitto. Id Sextilius factum negabat. Apparet statim, quae sint
            officia, quae actiones. Sed hoc sane concedamus...
          </p>

          <a
            class="action-link"
            tabindex="0"
          >Read More</a>
        </VCardMedia>
      </div>

      <div class="column is-4">
        <VCardMedia
          image="https://media.cssninja.io/content/photos/apps/2.png"
          avatar="https://media.cssninja.io/content/avatars/23.jpg"
          badge="/images/icons/flags/united-states-of-america.svg"
          title="Irina V."
          subtitle="Project Manager"
        >
          <p class="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero isti,
            inquam, permitto. Id Sextilius factum negabat. Apparet statim, quae sint
            officia, quae actiones. Sed hoc sane concedamus...
          </p>

          <a
            class="action-link"
            tabindex="0"
          >Read More</a>
        </VCardMedia>
      </div>

      <div class="column is-4">
        <VCardMedia
          image="https://media.cssninja.io/content/photos/apps/3.png"
          avatar="https://media.cssninja.io/content/avatars/12.jpg"
          badge="/images/icons/flags/united-states-of-america.svg"
          title="Joshua S."
          subtitle="Backend Developer"
        >
          <p class="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero isti,
            inquam, permitto. Id Sextilius factum negabat. Apparet statim, quae sint
            officia, quae actiones. Sed hoc sane concedamus...
          </p>

          <a
            class="action-link"
            tabindex="0"
          >Read More</a>
        </VCardMedia>
      </div>

      <div class="column is-12 mt-5">
        <DocumentationMeta
          name="VCardMedia"
          :meta="VCardMediaMeta"
        />
      </div>
    </div>
  </div>
</template>
