### V-SwitchBlock

Vuero provides nicely styled switch checkboxes when you need to
display such control in yoour forms. Vuero `V-SwitchBlock` component have
several color modififers. Available modifiers are `primary`, `success`,
`info`, `warning` and `danger`.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Field grouped>
    <V-Control>
      <V-SwitchBlock />
    </V-Control>
    <V-Control>
      <V-SwitchBlock color="primary" checked />
    </V-Control>
    <V-Control>
      <V-SwitchBlock color="success" checked />
    </V-Control>
    <V-Control>
      <V-SwitchBlock color="info" checked />
    </V-Control>
    <V-Control>
      <V-SwitchBlock color="warning" checked />
    </V-Control>
    <V-Control>
      <V-SwitchBlock color="danger" checked />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
  <V-Control>
    <V-SwitchBlock />
  </V-Control>
  <V-Control>
    <V-SwitchBlock color="primary" checked />
  </V-Control>
  <V-Control>
    <V-SwitchBlock color="success" checked />
  </V-Control>
  <V-Control>
    <V-SwitchBlock color="info" checked />
  </V-Control>
  <V-Control>
    <V-SwitchBlock color="warning" checked />
  </V-Control>
  <V-Control>
    <V-SwitchBlock color="danger" checked />
  </V-Control>
</V-Field>

<!--/example-->
