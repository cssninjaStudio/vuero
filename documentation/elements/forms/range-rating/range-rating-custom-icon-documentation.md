---
state:
  hears: 2
  water: 3
  electric: 1
  kitty: 4
---

### Custom Icon

You can use default slot to customize the icon.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const hears = ref(2)
const water = ref(3)
const electric = ref(1)
const kitty = ref(4)
</script>

<template>
  <div
    class="is-flex is-justify-content-space-between is-flex-wrap-wrap"
    :style="{ gap: '2rem' }"
  >
    <VField>
      <VControl>
        <VRangeRating v-slot="{ isSelected }" v-model="hears">
          <VIcon
            v-if="isSelected"
            icon="ic:baseline-favorite"
            class="is-size-3 mr-1 has-text-warning"
            :class="{
              'has-text-danger': isSelected,
            }"
          />
          <VIcon v-else icon="ic:baseline-favorite-border" class="is-size-3 mr-1" />
        </VRangeRating>
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-slot="{ isSelected }" v-model="water">
          <VIcon
            icon="ic:twotone-water-drop"
            class="is-size-3 mr-1"
            :class="{
              'has-text-info': isSelected,
            }"
          />
        </VRangeRating>
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-slot="{ isSelected }" v-model="electric">
          <VIcon
            :icon="isSelected ? 'material-symbols:bolt' : 'material-symbols:bolt-outline'"
            class="is-size-3 mr-1"
            :class="{
              'has-text-warning': isSelected,
            }"
          />
        </VRangeRating>
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-slot="{ isSelected }" v-model="kitty">
          <VIcon
            :icon="
              isSelected
                ? 'streamline-emojis:smiling-cat-face-with-heart-eyes'
                : 'streamline-emojis:cat-face'
            "
            class="is-size-3 mr-1"
            :style="{
              filter: isSelected ? undefined : 'grayscale(1)',
              opacity: isSelected ? undefined : 0.5,
            }"
          />
        </VRangeRating>
      </VControl>
    </VField>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div>
  <div
    class="is-flex is-justify-content-space-between is-flex-wrap-wrap"
    :style="{ gap: '2rem' }"
  >
    <VField>
      <VControl>
        <VRangeRating v-slot="{ isSelected }" v-model="frontmatter.state.hears">
          <VIcon
            v-if="isSelected"
            icon="ic:baseline-favorite"
            class="is-size-3 mr-1 has-text-warning"
            :class="{
              'has-text-danger': isSelected,
            }"
          />
          <VIcon v-else icon="ic:baseline-favorite-border" class="is-size-3 mr-1" />
        </VRangeRating>
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-slot="{ isSelected }" v-model="frontmatter.state.water">
          <VIcon
            icon="ic:twotone-water-drop"
            class="is-size-3 mr-1"
            :class="{
              'has-text-info': isSelected,
            }"
          />
        </VRangeRating>
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-slot="{ isSelected }" v-model="frontmatter.state.electric">
          <VIcon
            :icon="isSelected ? 'material-symbols:bolt' : 'material-symbols:bolt-outline'"
            class="is-size-3 mr-1"
            :class="{
              'has-text-warning': isSelected,
            }"
          />
        </VRangeRating>
      </VControl>
    </VField>
    <VField>
      <VControl>
        <VRangeRating v-slot="{ isSelected }" v-model="frontmatter.state.kitty">
          <VIcon
            :icon="
              isSelected
                ? 'streamline-emojis:smiling-cat-face-with-heart-eyes'
                : 'streamline-emojis:cat-face'
            "
            class="is-size-3 mr-1"
            :style="{
              filter: isSelected ? undefined : 'grayscale(1)',
              opacity: isSelected ? undefined : 0.5,
            }"
          />
        </VRangeRating>
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
