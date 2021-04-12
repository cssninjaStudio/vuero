### V-Block

Vuero provides a versatile flex block media component named `<V-Block />`.
V-Block has 2 named slots. One for the `icon` element, which can
be whatever you want, and one for the `action`.

<!--code-->

```vue
<template>
  <V-Block title="Anna B." subtitle="UX Designer">
    <template #icon>
      <V-Avatar
        size="medium"
        picture="/demo/avatars/19.jpg"
        badge="/images/icons/flags/germany.svg"
      />
    </template>
    <template #action>
      <V-Button color="primary" elevated>View</V-Button>
    </template>
  </V-Block>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <div class="l-card">
      <V-Block title="Anna B." subtitle="UX Designer">
        <template #icon>
          <V-Avatar 
            size="medium" 
            picture="/demo/avatars/19.jpg" 
            badge="/images/icons/flags/germany.svg" 
          />
        </template>
        <template #action>
          <V-Button color="primary" elevated>View</V-Button>
        </template>
      </V-Block>
    </div>
  </div>
</div>

<!--/example-->
