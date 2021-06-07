<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'
import { userStack2 } from '/@src/data/users/userStacks'

pageTitle.value = 'V-CardAdvanced'
useHead({
  title: 'V-CardAdvanced - Components - Vuero',
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
          label: 'V-CardAdvanced',
          to: { name: 'components-card-advanced' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--V-Card Advanced-->
        <VCardAdvancedDocumentation />
      </div>

      <div class="column is-4">
        <V-CardAdvanced>
          <template #header-left>
            <V-Block title="Anna B." subtitle="UX Designer" center>
              <template #icon>
                <V-Avatar
                  picture="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                />
              </template>
            </V-Block>
          </template>
          <template #header-right>
            <V-AvatarStack :avatars="userStack2" :limit="1" size="small" />
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab
              Epicuro loqui discimus. Et ille ridens.
            </p>
          </template>
          <template #footer-left>
            <div class="tags">
              <V-Tag label="Business" color="solid" rounded />
            </div>
          </template>
          <template #footer-right>
            <V-Button color="primary" raised>Action</V-Button>
          </template>
        </V-CardAdvanced>
      </div>

      <div class="column is-4">
        <V-CardAdvanced radius="smooth">
          <template #header-left>
            <div class="tags">
              <V-Tag label="Business" color="solid" rounded />
            </div>
          </template>
          <template #header-right>
            <V-Button color="primary" raised>Action</V-Button>
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab
              Epicuro loqui discimus. Et ille ridens.
            </p>
          </template>
          <template #footer-left>
            <V-Block title="Anna B." subtitle="UX Designer" center>
              <template #icon>
                <V-Avatar
                  picture="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                />
              </template>
            </V-Block>
          </template>
          <template #footer-right>
            <V-AvatarStack :avatars="userStack2" :limit="1" size="small" />
          </template>
        </V-CardAdvanced>
      </div>

      <div class="column is-4">
        <V-CardAdvanced radius="rounded">
          <template #header-left>
            <h3 class="title is-6">A Card Title</h3>
          </template>
          <template #header-right>
            <WidgetDropdown />
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab
              Epicuro loqui discimus. Et ille ridens.
            </p>
          </template>
          <template #footer-left>
            <V-Block title="Anna B." subtitle="UX Designer" center>
              <template #icon>
                <V-Avatar
                  picture="/demo/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                />
              </template>
            </V-Block>
          </template>
          <template #footer-right>
            <V-AvatarStack :avatars="userStack2" :limit="1" size="small" />
          </template>
        </V-CardAdvanced>
      </div>

      <div class="column is-12 mt-5">
        <VCardAdvancedPropsDocumentation />
        <VCardAdvancedSlotsDocumentation />
      </div>
    </div>
  </div>
</template>
