### Help Text

You can easily add a help text to guide users when they
interact with your forms. Use the `help` prop of the `<V-Field />`
component to inject your help text string. See the code example
for more details about usage.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control>
      <input type="text" class="input" placeholder="Username" />
      <p class="help">Choose a nice username</p>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <input
      type="text"
      class="input"
      placeholder="Username"
    />
    <p class="help">Choose a nice username</p>
  </V-Control>
</V-Field>

<!--/example-->
