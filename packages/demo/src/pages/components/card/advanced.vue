<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/VAvatar.vue'

import * as userStacks from '/@src/data/users/userStacks'
import { VCardAdvancedMeta } from '/@src/data/documentation/components-meta'

const userStack2 = userStacks.userStack2 as VAvatarProps[]
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VCardAdvanced'
})

useHead({
  title: 'VCardAdvanced - Components - Vuero',
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
          label: 'VCardAdvanced',
          to: '/components/card/advanced',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--VCard Advanced-->
        <VCardAdvancedDocumentation />
      </div>

      <div class="column is-4">
        <VCardAdvanced>
          <template #header-left>
            <VBlock
              title="Anna B."
              subtitle="UX Designer"
              center
            >
              <template #icon>
                <VAvatar
                  picture="https://media.cssninja.io/content/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                />
              </template>
            </VBlock>
          </template>
          <template #header-right>
            <VAvatarStack
              :avatars="userStack2"
              :limit="1"
              size="small"
            />
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui
              discimus. Et ille ridens.
            </p>
          </template>
          <template #footer-left>
            <div class="tags">
              <VTag
                label="Business"
                color="solid"
                rounded
              />
            </div>
          </template>
          <template #footer-right>
            <VButton
              color="primary"
              raised
            >
              Action
            </VButton>
          </template>
        </VCardAdvanced>
      </div>

      <div class="column is-4">
        <VCardAdvanced radius="smooth">
          <template #header-left>
            <div class="tags">
              <VTag
                label="Business"
                color="solid"
                rounded
              />
            </div>
          </template>
          <template #header-right>
            <VButton
              color="primary"
              raised
            >
              Action
            </VButton>
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui
              discimus. Et ille ridens.
            </p>
          </template>
          <template #footer-left>
            <VBlock
              title="Anna B."
              subtitle="UX Designer"
              center
            >
              <template #icon>
                <VAvatar
                  picture="https://media.cssninja.io/content/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                />
              </template>
            </VBlock>
          </template>
          <template #footer-right>
            <VAvatarStack
              :avatars="userStack2"
              :limit="1"
              size="small"
            />
          </template>
        </VCardAdvanced>
      </div>

      <div class="column is-4">
        <VCardAdvanced radius="rounded">
          <template #header-left>
            <h3 class="title is-6">
              A Card Title
            </h3>
          </template>
          <template #header-right>
            <WidgetDropdown />
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
              praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui
              discimus. Et ille ridens.
            </p>
          </template>
          <template #footer-left>
            <VBlock
              title="Anna B."
              subtitle="UX Designer"
              center
            >
              <template #icon>
                <VAvatar
                  picture="https://media.cssninja.io/content/avatars/19.jpg"
                  badge="/images/icons/flags/germany.svg"
                />
              </template>
            </VBlock>
          </template>
          <template #footer-right>
            <VAvatarStack
              :avatars="userStack2"
              :limit="1"
              size="small"
            />
          </template>
        </VCardAdvanced>
      </div>

      <div class="column is-12 mt-5">
        <DocumentationMeta
          name="VCardAdvanced"
          :meta="VCardAdvancedMeta"
        />
      </div>
    </div>
  </div>
</template>
