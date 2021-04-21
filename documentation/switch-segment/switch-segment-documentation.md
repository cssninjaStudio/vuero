### V-SwitchSegment

Vuero provides nicely styled switch segment when you need to
display such control in your forms. Vuero `V-SwitchSegment` component have
several color modififers. Available modifiers are `primary`, `success`,
`info`, `warning` and `danger`.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Field grouped>
    <V-Control>
      <V-SwitchSegment />
    </V-Control>
    <V-Control>
      <V-SwitchSegment color="primary" checked />
    </V-Control>
    <V-Control>
      <V-SwitchSegment color="success" checked />
    </V-Control>
    <V-Control>
      <V-SwitchSegment color="info" checked />
    </V-Control>
    <V-Control>
      <V-SwitchSegment color="warning" checked />
    </V-Control>
    <V-Control>
      <V-SwitchSegment color="danger" checked />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
  <V-Control>
    <V-SwitchSegment />
  </V-Control>
  <V-Control>
    <V-SwitchSegment color="primary" checked />
  </V-Control>
  <V-Control>
    <V-SwitchSegment color="success" checked />
  </V-Control>
  <V-Control>
    <V-SwitchSegment color="info" checked />
  </V-Control>
  <V-Control>
    <V-SwitchSegment color="warning" checked />
  </V-Control>
  <V-Control>
    <V-SwitchSegment color="danger" checked />
  </V-Control>
</V-Field>

<!--/example-->
