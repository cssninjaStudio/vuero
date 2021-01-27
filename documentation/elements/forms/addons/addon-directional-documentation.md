### Bi-Directional

Inputs can have addons on both sides. You can even attach a select element to your `<V-Control />` component. Please refer to the code example for more details about usage.

<!--code-->

```vue {2,3,10}
<template>
  <V-Field addons>
    <V-Control>
      <span class="select">
        <select>
          <option>$</option>
          <option>£</option>
          <option>€</option>
        </select>
      </span>
    </V-Control>
    <V-Control expanded>
      <input type="text" class="input" placeholder="Amount of money" />
    </V-Control>
    <V-Control>
      <a class="button is-primary">Send Payment</a>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field addons>
    <V-Control>
        <span class="select">
            <select>
                <option>$</option>
                <option>£</option>
                <option>€</option>
            </select>
        </span>
    </V-Control>
    <V-Control expanded>
        <input
            type="text"
            class="input"
            placeholder="Amount of money"
        />
    </V-Control>
    <V-Control>
        <a class="button is-primary">Send Payment</a>
    </V-Control>
</V-Field>

<!--/example-->
