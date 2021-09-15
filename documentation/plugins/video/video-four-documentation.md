### Video Player 4:3

We wrote a custom vue wrapper for the `Plyr` video player vanilla js library. It
is really easy to setup. Change the video ratio using the `ratio` prop.
Available ratios are `square`, `4by3` and `16by9`.

<!--code-->

```vue
<template>
  <VPlyr ratio="4by3" source="/video/hands.mp4" poster="/video/poster-3.jpg" />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VPlyr class="ml-1"
    ratio="4by3"
    source="/video/hands.mp4"
    poster="/video/poster-3.jpg"
  />
</div>

<!--/example-->
