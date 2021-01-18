### Fallback Avatar

Vuero Avatars are rounded images used for media and personal pages. Avatar sizes can be controled with css classes.  
Available modifier classes are `is-small`, `is-medium`, `is-large`, `is-big` and `is-xl`. See code for more details about usage.

<!--code-->

```vue {7-9}
<template>
  <div class="h-avatar">
    <img
      class="avatar"
      src="/non-existing-image.png"
      alt="avatar"
      @error.once="
        $event.target.src = 'https://via.placeholder.com/150x150'
      "
    />
  </div>
</template>
```

<!--/code-->


<!--example-->

<div class="h-avatar is-large">
  <div class="h-avatar">
    <img
      class="avatar"
      src="/non-existing-image.png"
      alt="avatar"
      @error.once="$event.target.src = 'https://via.placeholder.com/68x68'"
    />
  </div>
</div>


<!--/example-->