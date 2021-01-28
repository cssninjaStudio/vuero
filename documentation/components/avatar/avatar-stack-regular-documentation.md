### Regular stack

Huro avatars can be stacked in an slighlty overlaping line.
Use the `<V-AvatarStack />` component. The component takes 2 props:
`avatars` and `size`. Available sizes are normal, `small` and `medium`.

<!--code-->

```vue
<script setup lang="ts">
const users = [
  {
    id: 0,
    picture: '/images/avatars/photos/7.jpg',
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
  <V-AvatarStack :avatars="users" />
</template>
```

<!--/code-->

<!--example-->
<div class="avatar-stack">
    <V-Avatar picture="/images/avatars/photos/7.jpg" />
    <V-Avatar initials="JO" color="info" />
    <V-Avatar picture="/images/avatars/photos/8.jpg" />
    <V-Avatar picture="/images/avatars/photos/5.jpg" />
    <V-Avatar initials="CP" color="success" />
    <V-Avatar picture="/images/avatars/photos/5.jpg" />
    <div class="v-avatar">
        <span class="avatar is-more">
            <span class="inner">
                <span>+2</span>
            </span>
        </span>
    </div>
</div>

<!--/example-->
