### VSwitchSegment

Vuero provides nicely styled switch segment when you need to
display such control in your forms. Vuero `VSwitchSegment` component have
several color modififers. Available modifiers are `primary`, `success`,
`info`, `warning` and `danger`.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <VField grouped>
    <VControl>
      <VSwitchSegment />
    </VControl>
    <VControl>
      <VSwitchSegment color="primary" checked />
    </VControl>
    <VControl>
      <VSwitchSegment color="success" checked />
    </VControl>
    <VControl>
      <VSwitchSegment color="info" checked />
    </VControl>
    <VControl>
      <VSwitchSegment color="warning" checked />
    </VControl>
    <VControl>
      <VSwitchSegment color="danger" checked />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped>
  <VControl>
    <VSwitchSegment />
  </VControl>
  <VControl>
    <VSwitchSegment color="primary" checked />
  </VControl>
  <VControl>
    <VSwitchSegment color="success" checked />
  </VControl>
  <VControl>
    <VSwitchSegment color="info" checked />
  </VControl>
  <VControl>
    <VSwitchSegment color="warning" checked />
  </VControl>
  <VControl>
    <VSwitchSegment color="danger" checked />
  </VControl>
</VField>

<!--/example-->
