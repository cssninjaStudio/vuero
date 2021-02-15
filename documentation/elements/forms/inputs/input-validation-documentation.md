### Validation

Vuero offers input validation styles to go with any type of
form validation library you could use in your project.
It's CSS based only and gives you a lot of freedom.
Use the props shown in the code examples to handle validation.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control icon="feather:user" is-valid>
      <input
        type="text"
        class="input"
        placeholder="Username"
        value="Superman"
      />
      <p class="help is-success">This username is available</p>
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control icon="feather:lock" has-error>
      <input
        type="password"
        class="input"
        placeholder="Password"
        value="passwd"
      />
      <p class="help text-danger">The password must contains 8 characters</p>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control icon="feather:user" is-valid>
    <input
      type="text"
      class="input"
      placeholder="Username"
      value="Superman"
    />
    <p class="help text-success">This username is available</p>
  </V-Control>
</V-Field>
<V-Field>
  <V-Control icon="feather:lock" has-error>
    <input
      type="password"
      class="input"
      placeholder="Password"
      value="passwd"
    />
    <p class="help text-danger">The password must contains 8 characters</p>
  </V-Control>
</V-Field>

<!--/example-->
