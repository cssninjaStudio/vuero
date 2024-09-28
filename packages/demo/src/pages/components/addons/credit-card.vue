<script setup lang="ts">
import { VCreditCardMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VCreditCard'
})

useHead({
  title: 'VCreditCard - Addons - Vuero',
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
          label: 'Addons',
        },
        {
          label: 'VCreditCard',
          to: '/components/addons/credit-card',
        },
      ]"
    />

    <DocumentationTocContainer class="is-multiline">
      <VCreditCardDocumentation />

      <DocumentationMeta
        name="VCreditCard"
        :meta="VCreditCardMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
