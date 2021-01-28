### Rounded input

You can easily change the shape of the input inside the field.
Simply add the `is-rounded` class to the Html `input` element.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control>
      <input type="text" class="input is-rounded" placeholder="Username" />
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
        class="input is-rounded"
        placeholder="Username"
      />
  </V-Control>
</V-Field>

<!--/example-->
