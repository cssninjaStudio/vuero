<script setup lang="ts">
import { VCardActionMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VCardAction'
})

useHead({
  title: 'VCardAction - Components - Vuero',
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
          label: 'VCardAction',
          to: '/components/card/action',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <VCardActionDocumentation />

      <div class="columns is-multiline mb-6">
        <div class="column is-4">
          <VCardAction
            avatar="https://media.cssninja.io/content/avatars/19.jpg"
            badge="/images/icons/flags/germany.svg"
            title="Greta K."
            subtitle="Sales Manager"
          >
            <template #action>
              <VTag
                color="green"
                label="trending"
                rounded
              />
            </template>
          </VCardAction>
        </div>
        <div class="column is-4">
          <VCardAction
            avatar="https://media.cssninja.io/content/avatars/18.jpg"
            badge="/images/icons/flags/united-states-of-america.svg"
            title="George W."
            subtitle="Software Engineer"
          >
            <template #action>
              <VIconButton
                icon="lucide:heart"
                circle
              />
            </template>
          </VCardAction>
        </div>
        <div class="column is-4">
          <VCardAction
            avatar="https://media.cssninja.io/content/avatars/22.jpg"
            badge="/images/icons/flags/france.svg"
            title="Sandrine C."
            subtitle="HR Manager"
            radius="rounded"
          >
            <template #action>
              <WidgetDropdown />
            </template>
          </VCardAction>
        </div>
      </div>

      <VCardActionContentDocumentation />

      <div class="columns is-multiline mb-6">
        <div class="column is-4">
          <VCardAction
            avatar="https://media.cssninja.io/content/avatars/19.jpg"
            badge="/images/icons/flags/germany.svg"
            title="Greta K."
            subtitle="Sales Manager"
          >
            <template #action>
              <VTag
                color="green"
                label="trending"
                rounded
              />
            </template>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
              loqui discimus. Et ille ridens.
            </p>
          </VCardAction>
        </div>
        <div class="column is-4">
          <VCardAction
            avatar="https://media.cssninja.io/content/avatars/18.jpg"
            badge="/images/icons/flags/united-states-of-america.svg"
            title="George W."
            subtitle="Software Engineer"
          >
            <template #action>
              <VAction>View</VAction>
            </template>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
              loqui discimus. Et ille ridens.
            </p>
          </VCardAction>
        </div>
        <div class="column is-4">
          <VCardAction
            avatar="https://media.cssninja.io/content/avatars/22.jpg"
            badge="/images/icons/flags/france.svg"
            title="Sandrine C."
            subtitle="HR Manager"
            radius="rounded"
          >
            <template #action>
              <WidgetDropdown />
            </template>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
              loqui discimus. Et ille ridens.
            </p>
          </VCardAction>
        </div>
      </div>

      <DocumentationMeta
        name="VCardAction"
        :meta="VCardActionMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
