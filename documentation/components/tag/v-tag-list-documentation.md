### Addon List

`<V-Tag />` components with addons can be organized in a
list with optimal spacing. Wrap your components inside a
`field is-grouped is-grouped-multiline` Html element.
See markup for more details about usage.

<!--code-->

```vue
<template>
  <div class="field is-grouped is-grouped-multiline">
    <div class="control">
      <div class="tags has-addons">
        <V-Tag label="Bulma CSS" color="primary" />
        <V-Tag remove />
      </div>
    </div>
    <div class="control">
      <div class="tags has-addons">
        <V-Tag label="React JS" color="info" />
        <V-Tag remove />
      </div>
    </div>
    <div class="control">
      <div class="tags has-addons">
        <V-Tag label="Javascript" color="warning" />
        <V-Tag remove />
      </div>
    </div>
    <div class="control">
      <div class="tags has-addons">
        <V-Tag label="Vue JS" color="primary" />
        <V-Tag remove />
      </div>
    </div>
    <div class="control">
      <div class="tags has-addons">
        <V-Tag label="Angular" color="danger" />
        <V-Tag remove />
      </div>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <div class="field is-grouped is-grouped-multiline">
            <div class="control">
                <div class="tags has-addons">
                    <V-Tag label="Bulma CSS" color="primary" />
                    <V-Tag remove />
                </div>
            </div>
            <div class="control">
                <div class="tags has-addons">
                    <V-Tag label="React JS" color="info" />
                    <V-Tag remove />
                </div>
            </div>
            <div class="control">
                <div class="tags has-addons">
                    <V-Tag label="Javascript" color="warning" />
                    <V-Tag remove />
                </div>
            </div>
            <div class="control">
                <div class="tags has-addons">
                    <V-Tag label="Vue JS" color="primary" />
                    <V-Tag remove />
                </div>
            </div>
            <div class="control">
                <div class="tags has-addons">
                    <V-Tag label="Angular" color="danger" />
                    <V-Tag remove />
                </div>
            </div>
        </div>
    </div>
</div>

<!--/example-->
