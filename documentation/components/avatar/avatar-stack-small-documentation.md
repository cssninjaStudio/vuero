### Small stack

Vuero avatars can be stacked in an slighlty overlaping line.
Use the `<V-AvatarStack />` component. The component takes 2 props:
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
  //etc...
]
</script>

<template>
  <V-AvatarStack :avatars="users" size="small" />
</template>
```

<!--/code-->

<!--example-->
<div class="avatar-stack">
    <V-Avatar picture="/demo/avatars/7.jpg" size="small" />
    <V-Avatar initials="JO" color="info" size="small" />
    <V-Avatar picture="/demo/avatars/8.jpg" size="small" />
    <V-Avatar picture="/demo/avatars/5.jpg" size="small" />
    <V-Avatar initials="CP" color="success" size="small" />
    <V-Avatar picture="/demo/avatars/5.jpg" size="small" />
    <div class="v-avatar is-small">
        <span class="avatar is-more">
            <span class="inner">
                <span>+2</span>
            </span>
        </span>
    </div>
</div>

<!--/example-->
