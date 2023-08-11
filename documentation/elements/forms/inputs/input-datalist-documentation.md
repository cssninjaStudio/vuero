### Native datalist

You can use the native [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
element with the `VInput` component.
This will help users to select one of the options provided in the datalist.

<!--code-->

```vue
<template>
  <VField label="Choose a browser from this list...">
    <VControl>
      <VInput
        type="text"
        list="browsers"
      />
      <datalist id="browsers">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Opera" />
        <option value="Safari" />
        <option value="Microsoft Edge" />
      </datalist>
    </VControl>
  </VField>
  <VField label="Pick a time...">
    <VControl>
      <VInput
        type="time"
        list="popularHours"
      />
      <datalist id="popularHours">
        <option value="12:00" />
        <option value="13:00" />
        <option value="14:00" />
      </datalist>
    </VControl>
  </VField>
  <VField label="Choose a color...">
    <VControl>
      <VInput
        type="color"
        list="redColors"
      />
      <datalist id="redColors">
        <option value="#2aac8e" />
        <option value="#336aeb" />
        <option value="#283252" />
        <option value="#05d69e" />
        <option value="#faad42" />
        <option value="#e62864" />
        <option value="#8168b1" />
        <option value="#38c3ff" />
        <option value="#77d2f3" />
        <option value="#ff42b4" />
        <option value="#ffa880" />
        <option value="#ffd770" />
        <option value="#ff9eb8" />
        <option value="#94e189" />
      </datalist>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField label="Choose a browser from this list...">
  <VControl>
    <VInput type="text" list="browsers" />
    <datalist id="browsers">
      <option value="Chrome" />
      <option value="Firefox" />
      <option value="Opera" />
      <option value="Safari" />
      <option value="Microsoft Edge" />
    </datalist>
  </VControl>
</VField>
<VField label="Pick a time...">
  <VControl>
    <VInput type="time" list="popularHours" />
    <datalist id="popularHours">
      <option value="12:00" />
      <option value="13:00" />
      <option value="14:00" />
    </datalist>
  </VControl>
</VField>
<VField label="Choose a color...">
  <VControl>
    <VInput type="color" list="redColors" />
    <datalist id="redColors">
      <option value="#2aac8e" />
      <option value="#336aeb" />
      <option value="#283252" />
      <option value="#05d69e" />
      <option value="#faad42" />
      <option value="#e62864" />
      <option value="#8168b1" />
      <option value="#38c3ff" />
      <option value="#77d2f3" />
      <option value="#ff42b4" />
      <option value="#ffa880" />
      <option value="#ffd770" />
      <option value="#ff9eb8" />
      <option value="#94e189" />
    </datalist>
  </VControl>
</VField>

<!--/example-->
