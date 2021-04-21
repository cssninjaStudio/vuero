### Addon List

`<V-Tag />` components with addons can be organized in a
list with optimal spacing. Wrap your components inside a
`<V-Field grouped multiline />` element.
See markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Field grouped multiline>
    <V-Control>
      <V-Tags addons>
        <V-Tag label="Bulma CSS" color="primary" />
        <V-Tag remove />
      </V-Tags>
    </V-Control>
    <V-Control>
      <V-Tags addons>
        <V-Tag label="React JS" color="info" />
        <V-Tag remove />
      </V-Tags>
    </V-Control>
    <V-Control>
      <V-Tags addons>
        <V-Tag label="Javascript" color="warning" />
        <V-Tag remove />
      </V-Tags>
    </V-Control>
    <V-Control>
      <V-Tags addons>
        <V-Tag label="Vue JS" color="primary" />
        <V-Tag remove />
      </V-Tags>
    </V-Control>
    <V-Control>
      <V-Tags addons>
        <V-Tag label="Angular" color="danger" />
        <V-Tag remove />
      </V-Tags>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->
<V-Field grouped multiline>
  <V-Control>
    <V-Tags addons>
      <V-Tag label="Bulma CSS" color="primary" />
      <V-Tag remove />
    </V-Tags>
  </V-Control>
  <V-Control>
    <V-Tags addons>
      <V-Tag label="React JS" color="info" />
      <V-Tag remove />
    </V-Tags>
  </V-Control>
  <V-Control>
    <V-Tags addons>
      <V-Tag label="Javascript" color="warning" />
      <V-Tag remove />
    </V-Tags>
  </V-Control>
  <V-Control>
    <V-Tags addons>
      <V-Tag label="Vue JS" color="primary" />
      <V-Tag remove />
    </V-Tags>
  </V-Control>
  <V-Control>
    <V-Tags addons>
      <V-Tag label="Angular" color="danger" />
      <V-Tag remove />
    </V-Tags>
  </V-Control>
</V-Field>

<!--/example-->
