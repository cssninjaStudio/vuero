---
tagsStackedUsersOptions:
  - value: alice
    name: Alice Carasca
    image: /demo/avatars/7.jpg
  - value: erik
    name: Erik Kovalsky
    image: /images/avatars/svg/vuero-1.svg
  - value: melany
    name: Melany Wallace
    image: /demo/avatars/25.jpg
  - value: tara
    name: Tara Svenson
    image: /demo/avatars/13.jpg
  - value: mary
    name: Mary Lebowski
    image: /demo/avatars/5.jpg
  - value: irina
    name: Irina Vierbovsky
    image: /demo/avatars/23.jpg
  - value: jonathan
    name: Jonathan Krugger
    image: /demo/avatars/32.jpg
tagsStackedUsersValue: []
---

### Stacked users

You can combine the `mode="tags"` with a custom template. This way you can
show custom tag elements with an image inside. The tag shape inherits from
the select class modifier. Add the `is-stacked` class to the `is-image-tags`
element to show stacked images.

<!--code-->

```vue
<script setup lang="ts">
const tagsStackedUsersValue = []
const tagsStackedUsersOptions = [
  {
    value: 'alice',
    name: 'Alice Carasca',
    image: '/demo/avatars/7.jpg',
  },
  {
    value: 'erik',
    name: 'Erik Kovalsky',
    image: '/images/avatars/svg/vuero-1.svg',
  },
  {
    value: 'melany',
    name: 'melany Wallace',
    image: '/demo/avatars/25.jpg',
  },
  {
    value: 'tara',
    name: 'Tara Svenson',
    image: '/demo/avatars/13.jpg',
  },
  {
    value: 'mary',
    name: 'Mary Lebowski',
    image: '/demo/avatars/5.jpg',
  },
  {
    value: 'irina',
    name: 'Irina Vierbovsky',
    image: '/demo/avatars/23.jpg',
  },
  {
    value: 'jonathan',
    name: 'Jonathan Krugger',
    image: '/demo/avatars/32.jpg',
  },
]
</script>

<template>
  <VField v-slot="{ id }" class="is-image-tags">
    <VControl>
      <Multiselect
        v-model="tagsStackedUsersValue"
        :attrs="{ id }"
        mode="tags"
        placeholder="Select members"
        track-by="name"
        label="name"
        :search="true"
        :options="tagsStackedUsersOptions"
        :max-height="145"
      >
        <template #tag="{ option, remove, disabled }">
          <div class="multiselect-tag is-user">
            <img :src="option.image" alt="" />
            {{ option.name }}
            <i v-if="!disabled" @click.prevent @mousedown.prevent.stop="remove(option)" />
          </div>
        </template>
      </Multiselect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-tags is-stacked">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsStackedUsersValue"
          mode="tags"
          placeholder="Select members"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsStackedUsersOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" alt="" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-tags is-stacked is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsStackedUsersValue"
          mode="tags"
          placeholder="Select members"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsStackedUsersOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" alt="" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-tags is-stacked is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.tagsStackedUsersValue"
          mode="tags"
          placeholder="Select members"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsStackedUsersOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image" alt="" />
              <i
                v-if="!disabled"
                @click.prevent
                @mousedown.prevent.stop="remove(option)"
              />
            </div>
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
