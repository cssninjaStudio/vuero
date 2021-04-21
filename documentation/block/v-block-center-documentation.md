### Centered align

You can adjust the `<V-Block />` component flex alignment
using the `center` prop. This will apply the `flex` property
`align-items: center;` to the component.

<!--code-->

```vue
<template>
  <V-Block title="Anna B." subtitle="UX Designer" center>
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
      <V-Block title="Anna B." subtitle="UX Designer" center>
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
