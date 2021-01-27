### Validation rounded

Vuero offers input validation styles to go with any type of form validation library you could use in your project. It's CSS based only and gives you a lot of freedom. Use the props shown in the code examples to handle validation.

<!--code-->

```vue {3}
<template>
  <V-Field validation success>
    <V-Control iconed iconify="feather:user" validation success>
      <input
        type="text"
        class="input is-rounded"
        placeholder="Username"
        value="Superman"
      />
    </V-Control>
  </V-Field>
  <V-Field validation error>
    <V-Control iconed iconify="feather:lock" validation error>
      <input
        type="password"
        class="input is-rounded"
        placeholder="Password"
        value="fefete6ht"
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field validation success>
    <V-Control iconed iconify="feather:user" validation success>
        <input
            type="text"
            class="input is-rounded"
            placeholder="Username"
            value="Superman"
        />
    </V-Control>
</V-Field>
<V-Field validation error>
    <V-Control iconed iconify="feather:lock" validation error>
        <input
            type="password"
            class="input is-rounded"
            placeholder="Password"
            value="fefete6ht"
        />
    </V-Control>
</V-Field>

<!--/example-->
