### Small stack

Vuero avatars can be stacked in an slighlty overlaping line.
Use the `<VAvatarStack />` component. The component takes 2 props:
`avatars` and `size`. Available sizes are normal, `small` and `medium`.

<!--code-->

```vue
<script setup lang="ts">
const users = [
  {
    id: 0,
    picture: '/demo/avatars/7.jpg',
    initials: 'AC',
    color: 'info',
  },
  {
    id: 1,
    picture: null,
    initials: 'JP',
    color: 'info',
  },
  // etc...
]
</script>

<template>
  <VAvatarStack :avatars="users" size="small" />
</template>
```

<!--/code-->

<!--example-->
<div class="avatar-stack">
    <VAvatar picture="/demo/avatars/7.jpg" size="small" />
    <VAvatar initials="JO" color="info" size="small" />
    <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="small" />
    <VAvatar picture="/demo/avatars/5.jpg" size="small" />
    <VAvatar initials="CP" color="success" size="small" />
    <VAvatar picture="/demo/avatars/5.jpg" size="small" />
    <div class="v-avatar is-small">
        <span class="avatar is-more">
            <span class="inner">
                <span>+2</span>
            </span>
        </span>
    </div>
</div>

<!--/example-->
