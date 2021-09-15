### Thin Switch

Vuero provides nice thin switch checkboxes when you need to display
such control in your forms. Use `thin` modifier on `VSwitchBlock` component.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <VField grouped>
    <VControl>
      <VSwitchBlock thin />
    </VControl>
    <VControl>
      <VSwitchBlock thin color="primary" checked />
    </VControl>
    <VControl>
      <VSwitchBlock thin color="success" checked />
    </VControl>
    <VControl>
      <VSwitchBlock thin color="info" checked />
    </VControl>
    <VControl>
      <VSwitchBlock thin color="warning" checked />
    </VControl>
    <VControl>
      <VSwitchBlock thin color="danger" checked />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped>
  <VControl>
    <VSwitchBlock thin />
  </VControl>
  <VControl>
    <VSwitchBlock thin color="primary" checked />
  </VControl>
  <VControl>
    <VSwitchBlock thin color="success" checked />
  </VControl>
  <VControl>
    <VSwitchBlock thin color="info" checked />
  </VControl>
  <VControl>
    <VSwitchBlock thin color="warning" checked />
  </VControl>
  <VControl>
    <VSwitchBlock thin color="danger" checked />
  </VControl>
</VField>

<!--/example-->
