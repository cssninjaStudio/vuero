---
tagsSlotOptions:
  - value: alice
    name: Alice C.
    image: /images/avatars/photos/7.jpg
  - value: erik
    name: Erik K.
    image: /images/avatars/photos/8.jpg
  - value: melany
    name: Melany W.
    image: /images/avatars/photos/25.jpg
  - value: tara
    name: Tara S.
    image: /images/avatars/photos/13.jpg
  - value: mary
    name: Mary L.
    image: /images/avatars/photos/5.jpg
  - value: irina
    name: Irina V.
    image: /images/avatars/photos/23.jpg
  - value: jonathan
    name: Jonathan K.
    image: /images/avatars/photos/32.jpg
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
    image: '/images/avatars/photos/7.jpg',
  },
  {
    value: 'erik',
    name: 'Erik Kovalsky',
    image: '/images/avatars/photos/8.jpg',
  },
  {
    value: 'melany',
    name: 'melany Wallace',
    image: '/images/avatars/photos/25.jpg',
  },
  {
    value: 'tara',
    name: 'Tara Svenson',
    image: '/images/avatars/photos/13.jpg',
  },
  {
    value: 'mary',
    name: 'Mary Lebowski',
    image: '/images/avatars/photos/5.jpg',
  },
  {
    value: 'irina',
    name: 'Irina Vierbovsky',
    image: '/images/avatars/photos/23.jpg',
  },
  {
    value: 'jonathan',
    name: 'Jonathan Krugger',
    image: '/images/avatars/photos/32.jpg',
  },
]
</script>

<template>
  <V-Field class="is-image-tags">
    <V-Control>
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
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <V-Field class="is-image-tags">
      <V-Control>
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
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-image-tags is-curved-select">
      <V-Control>
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
      </V-Control>
    </V-Field>
  </div>
  <div class="column is-4">
    <V-Field class="is-image-tags is-rounded-select">
      <V-Control>
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
      </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
