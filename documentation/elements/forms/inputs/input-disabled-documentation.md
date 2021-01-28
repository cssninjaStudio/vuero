### Disabled input

An input can be shown in a disabled state. To apply that style,
simply add the `disabled` atribute to the target input element.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control>
      <input type="text" class="input" placeholder="Username" disabled />
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
        disabled
      />
  </V-Control>
</V-Field>

<!--/example-->
