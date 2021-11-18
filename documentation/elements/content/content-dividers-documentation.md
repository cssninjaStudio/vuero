### Horizontal dividers

Vuero provides dividers for your textual content.
You can use horizontal and vertical dividers by passing
the divider text as a `data-content` html attribute.
See the code example for more details about usage.

<!--code-->

```vue
<template>
  <div class="columns">
    <div class="column is-5">
      <div class="content">
        <p>
          Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit
          ipsum, ut blandit est tellus sit amet turpis.
        </p>
        <div class="is-divider" data-content="OR"></div>
        <p>
          Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit
          ipsum, ut blandit est tellus sit amet turpis.
        </p>
      </div>
    </div>

    <div class="column is-5 is-offset-1">
      <div class="columns">
        <div class="column">
          <p>
            Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit
            ipsum, ut blandit est tellus sit amet turpis.
          </p>
        </div>
        <div class="is-divider-vertical" data-content="OR"></div>
        <div class="column">
          <p>
            Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit
            ipsum, ut blandit est tellus sit amet turpis.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-5">
    <div class="content">
      <p>
        Ut venenatis, nisl scelerisque sollicitudin fermentum,
        quam libero hendrerit ipsum, ut blandit est tellus sit
        amet turpis.
      </p>
      <div class="is-divider" data-content="OR"></div>
      <p>
        Ut venenatis, nisl scelerisque sollicitudin fermentum,
        quam libero hendrerit ipsum, ut blandit est tellus sit
        amet turpis.
      </p>
    </div>
  </div>
  <div class="column is-5 is-offset-1">
    <div class="columns">
      <div class="column">
        <p>
          Ut venenatis, nisl scelerisque sollicitudin fermentum,
          quam libero hendrerit ipsum, ut blandit est tellus sit
          amet turpis.
        </p>
      </div>
      <div class="is-divider-vertical" data-content="OR"></div>
      <div class="column">
        <p>
          Ut venenatis, nisl scelerisque sollicitudin fermentum,
          quam libero hendrerit ipsum, ut blandit est tellus sit
          amet turpis.
        </p>
      </div>
    </div>
  </div>
</div>

<!--/example-->
