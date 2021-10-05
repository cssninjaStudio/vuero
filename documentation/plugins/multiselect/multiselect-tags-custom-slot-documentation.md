---
tagsSlotOptions:
  - value: alice
    name: Alice C.
    image: /demo/avatars/7.jpg
  - value: erik
    name: Erik K.
    image: /images/avatars/svg/vuero-1.svg
  - value: melany
    name: Melany W.
    image: /demo/avatars/25.jpg
  - value: tara
    name: Tara S.
    image: /demo/avatars/13.jpg
  - value: mary
    name: Mary L.
    image: /demo/avatars/5.jpg
  - value: irina
    name: Irina V.
    image: /demo/avatars/23.jpg
  - value: jonathan
    name: Jonathan K.
    image: /demo/avatars/32.jpg
tagsSlotValue: []
---

### User tags

You can combine the `mode="tags"` with a custom template. This way you can
show custom tag elements with an image inside. The tag shape inherits from
the select class modifier.

<!--code-->

```vue
<script setup lang="ts">
const tagsSlotValue = []
const tagsSlotOptions = [
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
  <VField class="is-image-tags">
    <VControl>
      <Multiselect
        v-model="tagsSlotValue"
        mode="tags"
        placeholder="Select employees"
        track-by="name"
        label="name"
        :search="true"
        :options="tagsSlotOptions"
        :max-height="145"
      >
        <template #tag="{ option, remove, disabled }">
          <div class="multiselect-tag is-user">
            <img :src="option.image" />
            {{ option.name }}
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
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField class="is-image-tags">
      <VControl>
        <Multiselect
          v-model="frontmatter.tagsSlotValue"
          mode="tags"
          placeholder="Select employees"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsSlotOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image">
              {{ option.name }}
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
    <VField class="is-image-tags is-curved-select">
      <VControl>
        <Multiselect
          v-model="frontmatter.tagsSlotValue"
          mode="tags"
          placeholder="Select employees"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsSlotOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image">
              {{ option.name }}
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
    <VField class="is-image-tags is-rounded-select">
      <VControl>
        <Multiselect
          v-model="frontmatter.tagsSlotValue"
          mode="tags"
          placeholder="Select employees"
          trackBy="name"
          label="name"
          :search="true"
          :options="frontmatter.tagsSlotOptions"
          :max-height="145"
        >
          <template v-slot:tag="{ option, remove, disabled }">
            <div class="multiselect-tag is-user">
              <img :src="option.image">
              {{ option.name }}
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
