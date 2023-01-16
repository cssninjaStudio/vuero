### Id Tracking

The main purpose of the `VField` component is to keep track of an unique input.
It can then be used to be used to set `for` and `aria-describedby` attributes.
You can create new field context using the `subcontrol` propery
on `VControl` and `VField` components.

<!--code-->

```vue
<template>
  <VField v-slot="{ id }" grouped>
    <VLabel class="has-fullwidth">Focus {{ id }} field</VLabel>
    <VControl v-slot="{ id }" subcontrol>
      <VInput type="text" placeholder="will not receive focus" />
      <p class="help">field id: {{ id }}</p>
    </VControl>
    <VControl v-slot="{ id }" subcontrol>
      <VInput type="text" placeholder="will receive focus" />
      <p class="help">field id: {{ id }}</p>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped v-slot="{ id }">
  <VLabel class="has-fullwidth">Focus {{ id }} field</VLabel>
  <VControl subcontrol v-slot="{ id }">
    <VInput type="text" placeholder="will not receive focus" />
    <p class="help">field id: {{ id }}</p>
  </VControl>
  <VControl v-slot="{ id }" subcontrol>
    <VInput type="text" placeholder="will receive focus" />
    <p class="help">field id: {{ id }}</p>
  </VControl>
</VField>

<!--/example-->
