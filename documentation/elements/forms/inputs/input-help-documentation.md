### Help Text

You can easily add a help text to guide users when they
interact with your forms. Use the `help` prop of the `<VField />`
component to inject your help text string. See the code example
for more details about usage.

<!--code-->

```vue
<template>
  <VField>
    <VControl>
      <input type="text" class="input" placeholder="Username" />
      <p class="help">Choose a nice username</p>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
  <VControl>
    <input
      type="text"
      class="input"
      placeholder="Username"
    />
    <p class="help">Choose a nice username</p>
  </VControl>
</VField>

<!--/example-->
