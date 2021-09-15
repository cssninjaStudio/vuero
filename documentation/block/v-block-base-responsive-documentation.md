### Responsive mobile

`<VBlock />` can be made responsive for the mobile viewport by
adding the `mResponsive` prop to the component.
When set to responsive mode, the flex block elements stack
to fit in the available space. Resize your screen to see it in action.

<!--code-->

```vue
<template>
  <VBlock title="Anna B." subtitle="UX Designer" center m-responsive>
    <template #icon>
      <VAvatar
        size="medium"
        picture="/demo/avatars/19.jpg"
        badge="/images/icons/flags/germany.svg"
      />
    </template>
    <template #action>
      <VButton color="primary" elevated>View</VButton>
    </template>
  </VBlock>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <div class="l-card">
      <VBlock title="Anna B." subtitle="UX Designer" center mResponsive>
        <template #icon>
          <VAvatar
            size="medium"
            picture="/demo/avatars/19.jpg"
            badge="/images/icons/flags/germany.svg"
          />
        </template>
        <template #action>
          <VButton color="primary" elevated>View</VButton>
        </template>
      </VBlock>
    </div>
  </div>
</div>

<!--/example-->
