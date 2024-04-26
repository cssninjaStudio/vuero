### Video Player 16:9

We wrote a custom vue wrapper for the `Plyr` video player vanilla js library. It
is really easy to setup. Change the video ratio using the `ratio` prop.
Available ratios are `square`, `4by3` and `16by9`.

<!--code-->

```vue
<template>
  <VPlyr
    ratio="16by9"
    source="https://www.youtube.com/embed/lE5VNpP8JqA?modestbranding=1&rel=0&showinfo=0"
    poster="/video/poster-2c.jpg"
    embed
  />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VPlyr class="ml-1"
    ratio="16by9"
    source="https://www.youtube.com/embed/lE5VNpP8JqA?modestbranding=1&rel=0&showinfo=0"
    poster="/video/poster-2c.jpg"
    embed
  />
</div>

<!--/example-->
