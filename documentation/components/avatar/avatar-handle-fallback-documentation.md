### Fallback avatar

Vuero Avatars automatically fall back to a placeholder when no valid URL is provided for the `picture` prop.

<!--code-->

```vue {7-9}
<template>
  <Avatar picture="no-file.jpg" size="small" />
  <Avatar picture="no-file.jpg" />
  <Avatar picture="no-file.jpg" size="medium" />
  <Avatar picture="no-file.jpg" size="large" />
  <Avatar picture="no-file.jpg" size="big" />
  <Avatar picture="no-file.jpg" size="xl" />
</template>
```

<!--/code-->


<!--example-->

<Avatar picture="no-file.jpg" size="small" />
<Avatar picture="no-file.jpg" />
<Avatar picture="no-file.jpg" size="medium" />
<Avatar picture="no-file.jpg" size="large" />
<Avatar picture="no-file.jpg" size="big" />
<Avatar picture="no-file.jpg" size="xl" />


<!--/example-->