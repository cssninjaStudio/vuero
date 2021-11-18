### Blockquotes

Vuero provides `blockquote` html element styling.
Wrap your `blockquote` element inside a `div` with the `content` class.
Blockquotes can have different colors.
Available color modifier classes are `is-primary`, `is-success`,
`is-info`, `is-warning` and `is-danger`.

<!--code-->

```vue
<template>
  <div class="content">
    <blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, inquit, tibi Q. Est
        enim effectrix multarum et magnarum voluptatum. Equidem, sed audistine modo de
        Carneade? Dici enim nihil potest verius. Praeteritis, inquit, gaudeo. Aliter autem
        vobis placet.
      </p>
    </blockquote>

    <blockquote class="is-primary">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, inquit, tibi Q. Est
        enim effectrix multarum et magnarum voluptatum. Equidem, sed audistine modo de
        Carneade? Dici enim nihil potest verius. Praeteritis, inquit, gaudeo. Aliter autem
        vobis placet.
      </p>
    </blockquote>

    <blockquote class="is-success">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, inquit, tibi Q. Est
        enim effectrix multarum et magnarum voluptatum. Equidem, sed audistine modo de
        Carneade? Dici enim nihil potest verius. Praeteritis, inquit, gaudeo. Aliter autem
        vobis placet.
      </p>
    </blockquote>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="content">
  <blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ergo, inquit, tibi Q. Est enim effectrix multarum et
      magnarum voluptatum. Equidem, sed audistine modo de
      Carneade? Dici enim nihil potest verius. Praeteritis,
      inquit, gaudeo. Aliter autem vobis placet.
    </p>
  </blockquote>
  <blockquote class="is-primary">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ergo, inquit, tibi Q. Est enim effectrix multarum et
      magnarum voluptatum. Equidem, sed audistine modo de
      Carneade? Dici enim nihil potest verius. Praeteritis,
      inquit, gaudeo. Aliter autem vobis placet.
    </p>
  </blockquote>
  <blockquote class="is-success">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ergo, inquit, tibi Q. Est enim effectrix multarum et
      magnarum voluptatum. Equidem, sed audistine modo de
      Carneade? Dici enim nihil potest verius. Praeteritis,
      inquit, gaudeo. Aliter autem vobis placet.
    </p>
  </blockquote>
</div>

<!--/example-->
