### VBlock

Vuero provides a versatile flex block media component named `<VBlock />`.
VBlock has 2 named slots. One for the `icon` element, which can
be whatever you want, and one for the `action`.

<!--code-->

```vue
<template>
  <VBlock title="Anna B." subtitle="UX Designer">
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
      <VBlock title="Anna B." subtitle="UX Designer">
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
