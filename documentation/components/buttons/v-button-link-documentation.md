### V-ButtonLink

Vuero provides a `<V-ButtonLink />` component if you don't want to use the simple Html button. `<V-ButtonLink />` is an alternative to `<V-Button />` that renders a router link. All `<V-Button />` props are available.

<!--code-->

```vue
<template>
  <V-ButtonLink link="index"> Home </V-ButtonLink>
  <V-ButtonLink bold link="index"> Home </V-ButtonLink>
  <V-ButtonLink rounded link="index"> Home </V-ButtonLink>
  <V-ButtonLink bold rounded link="index"> Home </V-ButtonLink>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
    <V-ButtonLink link="index">
        Home
    </V-ButtonLink>
    <V-ButtonLink bold link="index">
        Home
    </V-ButtonLink>
    <V-ButtonLink rounded link="index">
        Home
    </V-ButtonLink>
    <V-ButtonLink bold rounded link="index">
        Home
    </V-ButtonLink>
</div>

<!--/example-->
