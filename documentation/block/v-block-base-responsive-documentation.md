### Responsive mobile

`<V-Block />` can be made responsive for the mobile viewport by
adding the `mResponsive` prop to the component.
When set to responsive mode, the flex block elements stack
to fit in the available space. Resize your screen to see it in action.

<!--code-->

```vue
<template>
  <V-Block title="Anna B." subtitle="UX Designer" center m-responsive>
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
      <V-Block title="Anna B." subtitle="UX Designer" center mResponsive>
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
