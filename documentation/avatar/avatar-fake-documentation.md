### Fake avatar

When the provided picture URL is null, the avatar component
falls back to a fake avatar. Same size mofifiers are available.
Use the `initials` prop to pass initials to the component.
See the code examples for more details about usage.

<!--code-->

```vue
<template>
  <V-Avatar initials="CT" size="small" />
  <V-Avatar initials="CT" />
  <V-Avatar initials="CT" size="medium" />
  <V-Avatar initials="CT" size="large" />
  <V-Avatar initials="CT" size="big" />
  <V-Avatar initials="CT" size="xl" />
</template>
```

<!--/code-->

<!--example-->

<V-Avatar initials="CT" size="small" />
<V-Avatar initials="CT" />
<V-Avatar initials="CT" size="medium" />
<V-Avatar initials="CT" size="large" />
<V-Avatar initials="CT" size="big" />
<V-Avatar initials="CT" size="xl" />

<!--/example-->
