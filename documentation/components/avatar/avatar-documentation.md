### Theme Avatar

Vuero Avatars are rounded images used for media and personal pages. Avatar sizes can be controled with css classes.  
Available modifier classes are `is-small`, `is-medium`, `is-large`, `is-big` and `is-xl`. See code for more details about usage.

<!--code-->

```vue {2-4}
<template>
  <div class="h-avatar is-small">
    <img class="avatar" src="/images/avatars/photos/7.jpg" alt="" />
  </div>
  <div class="h-avatar">
    <img class="avatar" src="/images/avatars/photos/8.jpg" alt="" />
  </div>
  <div class="h-avatar is-medium">
    <img class="avatar" src="/images/avatars/photos/11.jpg" alt="" />
  </div>
  <div class="h-avatar is-large">
    <img class="avatar" src="/images/avatars/photos/21.jpg" alt="" />
  </div>
  <div class="h-avatar is-big">
    <img class="avatar" src="/images/avatars/photos/13.jpg" alt="" />
  </div>
  <div class="h-avatar is-xl">
    <img class="avatar" src="/images/avatars/photos/5.jpg" alt="" />
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="h-avatar is-small">
  <img
    class="avatar"
    src="/images/avatars/photos/7.jpg"
    alt=""
    @error="
      $event.target.src =
        'https://via.placeholder.com/32x32'
    "
  />
</div>
<div class="h-avatar">
  <img
    class="avatar"
    src="/images/avatars/photos/8.jpg"
    alt=""
    @error="
      $event.target.src =
        'https://via.placeholder.com/40x40'
    "
  />
</div>
<div class="h-avatar is-medium">
  <img
    class="avatar"
    src="/images/avatars/photos/11.jpg"
    alt=""
    @error="
      $event.target.src =
        'https://via.placeholder.com/50x50'
    "
  />
</div>
<div class="h-avatar is-large">
  <img
    class="avatar"
    src="/images/avatars/photos/21.jpg"
    alt=""
    @error="
      $event.target.src =
        'https://via.placeholder.com/68x68'
    "
  />
</div>
<div class="h-avatar is-big">
  <img
    class="avatar"
    src="/images/avatars/photos/13.jpg"
    alt=""
    @error="
      $event.target.src =
        'https://via.placeholder.com/80x80'
    "
  />
</div>
<div class="h-avatar is-xl">
  <img
    class="avatar"
    src="/images/avatars/photos/5.jpg"
    alt=""
    @error="
      $event.target.src =
        'https://via.placeholder.com/100x100'
    "
  />
</div>

<!--/example-->
