### Placeload

`<V-Button />` components can have a placeloading status.
Use the `placeload` prop on the component to change its state.

<!--code-->

```vue
<template>
  <V-Buttons>
    <V-Button placeload="40px"> Button </V-Button>
    <V-Button placeload="40px" color="primary"> Button </V-Button>
    <V-Button placeload="40px" color="info"> Button </V-Button>
    <V-Button placeload="40px" color="success"> Button </V-Button>
    <V-Button placeload="40px" color="warning"> Button </V-Button>
    <V-Button placeload="40px" color="danger"> Button </V-Button>
    <V-Button placeload="40px" color="white"> Button </V-Button>
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons class="placeload-wrap">
    <V-Button placeload="40px"> Button </V-Button>
    <V-Button placeload="40px" color="primary"> Button </V-Button>
    <V-Button placeload="40px" color="info"> Button </V-Button>
    <V-Button placeload="40px" color="success"> Button </V-Button>
    <V-Button placeload="40px" color="warning"> Button </V-Button>
    <V-Button placeload="40px" color="danger"> Button </V-Button>
    <V-Button placeload="40px" color="white"> Button </V-Button>
</V-Buttons>

<!--/example-->
