<script setup lang="ts">
import { VPlaceloadAvatarMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VPlaceloadAvatar'
})

useHead({
  title: 'VPlaceloadAvatar - Components - Vuero',
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
          label: 'VPlaceloadAvatar',
          to: '/components/placeload/avatar',
        },
      ]"
    />

    <DocumentationTocContainer>
      <!-- Loader -->
      <PlaceloadAvatarBaseDocumentation />
      <PlaceloadAvatarWrapDocumentation />
      <PlaceloadAvatarSizeDocumentation />
      <PlaceloadAvatarRadiusDocumentation />

      <DocumentationMeta
        name="VPlaceloadAvatar"
        :meta="VPlaceloadAvatarMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
