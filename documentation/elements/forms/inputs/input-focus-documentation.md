### Focus Colors

An `VInput` can have different border colors when focused.
Simply add the appropriate color modifier class.
Available classes are `is-primary-focus`, `is-success-focus`,
`is-info-focus`, `is-warning-focus`, `is-danger-focus`.

<!--code-->

```vue
<template>
  <VField>
    <VControl>
      <VInput type="text" class="is-primary-focus" placeholder="Primary" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VInput type="text" class="is-info-focus" placeholder="Info" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VInput type="text" class="is-success-focus" placeholder="Success" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VInput type="text" class="is-warning-focus" placeholder="Warning" />
    </VControl>
  </VField>
  <VField>
    <VControl>
      <VInput type="text" class="is-danger-focus" placeholder="Danger" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <VInput
      type="text"
      class="is-primary-focus"
      placeholder="Primary"
    />
  </VControl>
</VField>
<VField>
  <VControl>
    <VInput
      type="text"
      class="is-info-focus"
      placeholder="Info"
    />
  </VControl>
</VField>
<VField>
  <VControl>
    <VInput
      type="text"
      class="is-success-focus"
      placeholder="Success"
    />
  </VControl>
</VField>
<VField>
  <VControl>
    <VInput
      type="text"
      class="is-warning-focus"
      placeholder="Warning"
    />
  </VControl>
</VField>
<VField>
  <VControl>
    <VInput
      type="text"
      class="is-danger-focus"
      placeholder="Danger"
    />
  </VControl>
</VField>

<!--/example-->
