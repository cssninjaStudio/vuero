# Composables

The Composition API allows to create reusable logic that can be shared across components. We call composables functions that combines [Reactive API](https://vuejs.org/api/reactivity-core), [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle) and [Dependencies Injection](https://vuejs.org/api/composition-api-dependency-injection). _If you are not using one of these features, you should consider using a regular `function` instead._


## Example 1: Compute result from props with Reactive API

This example show basic usage of the Composition API to create a composable function that use input refs to derive a computed value.

:::code-group
```ts [src/composables/price.ts]
export const useComputedTotal(
  price: Ref<number>,
  quantity: Ref<number>,
) => computed(() => price.value * quantity.value)
```
```vue [src/components/MyComponent.vue]
<script setup lang="ts">
const price = ref(10)
const quantity = ref(2)
const total = useComputedTotal(price, quantity)
</script>

<template>
  <div>
    <p>Unit Price: {{ price }}</p>
    <p>Quantity: <input type="number" v-model.number="quantity" /></p>
    <p>Total: {{ total }}</p>
  </div>
</template>
```
:::

> Useful links:  
> - https://vuejs.org/guide/extras/composition-api-faq.html
> - https://talks.antfu.me/2021/composable-vue/1



## Example 2: Wrap DOM API to a reactive value

This example show how to create a composable function that use `window.matchMedia` to create a reactive value.

:::code-group
```ts [src/composables/media-query.ts]
export function useMediaQuery(query: string) {
  let mediaQuery: MediaQueryList | undefined
  const matches = ref(false)

  const handler = (event: MediaQueryListEvent) => {
    matches.value = event.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    mediaQuery.addEventListener('change', handler)
    matches.value = mediaQuery.matches
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', handler)
  })

  return matches
}
```
```vue [src/components/MyComponent.vue]
<script setup lang="ts">
const isSmallScreen = useMediaQuery('(width <= 767px)')

watch(isSmallScreen, (isSmall) => {
  console.log('isSmallScreen:', isSmall)
})
</script>

<template>
  <div>
    <!-- ... -->
  </div>
</template>
```
:::

::: tip
Take a look at the [VueUse](https://vueuse.org/) library for a collection of composable functions, like [`useLocalStorage`](https://vueuse.org/core/useLocalStorage), [`useMediaQuery`](https://vueuse.org/core/useMediaQuery), [`useDebounceFn`](https://vueuse.org/shared/useDebounceFn/), etc.
:::


## Example 3: Provide global state via vue plugin

This example show how to create a composable function that use `provide` and `inject` to and vuero plugin to provide a global reactive state.

:::code-group
```ts [src/composables/my-app-context.ts]
import type { InjectionKey, Plugin, cart } from 'vue'

interface MyAppContext {
  cart: Ref<Product[]>
  total: ComputedRef<number>
}

const injectionKey = Symbol('my-app-context') as InjectionKey<MyAppContext>

export function useMyAppContext() {
  const context = inject(injectionKey)

  if (!context) {
    throw new Error('useMyAppContext() was called outside of vue app context, did you forget to use the plugin?')
  }

  return context
}

export function createMyAppContext(): Plugin {
  return {
    install(app) {
      // create some reactive values
      const cart = ref<Product[]>([])
      const total = computed(() => cart.value.reduce(
        (acc, product) => acc + product.price, 
        0
      ))

      // provide them to the app
      app.provide(injectionKey, {
        cart,
        total,
      } satisfies MyAppContext)
    }
  }
}

```
```ts [src/plugins/my-app-context.ts]
import { createMyAppContext } from '/@src/composables/my-app-context'
import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(({ app }) => {
  // install the plugin
  app.use(createMyAppContext())
})
```
```vue [src/components/MyComponent.vue]
<script setup lang="ts">
// use the global shared state
const { cart, total } = useMyAppContext()
</script>

<template>
  <div>
    <!-- ... -->
  </div>
</template>
```
:::

::: info
You can use this pattern as an alternative to Pinia store, when you need to share state between components without the need of a store. Pinia will be more suitable when you need to handle hydration, SSR, and other store features.
:::

> Useful links:  
> - https://vuejs.org/guide/components/provide-inject.html
> - https://vuejs.org/guide/reusability/plugins.html
> - https://pinia.vuejs.org/
> - https://pinia-colada.esm.dev/


## Example 4: Load external library and bind to DOM element

This example show how to create a composable function that uses the `onMounted` and `onUnmounted` lifecycle hooks to create and destroy a `TinySlider` instance.

:::code-group
```ts [src/composables/tiny-slider.ts]
import type { MaybeRefOrGetter } from 'vue'
import type {
  TinySliderInstance, 
  TinySliderSettings
} from 'tiny-slider/src/tiny-slider'

export function useTinySlider(
  target: Ref<HTMLElement | null>,
  settings: MaybeRefOrGetter<Omit<TinySliderSettings, 'container'>> = {},
) {
  // shallow ref to avoid deep reactivity in complex objects
  const slider = shallowRef<TinySliderInstance | null>(null)

  // lazy load tiny-slider library on component mount
  onMounted(async () => {
    if (target.value) {
      const { tns } = await import('tiny-slider/src/tiny-slider')

      slider.value = tns({
        container: target.value,
        ...settings,
      })
    }
  })

  // cleanup on component unmount
  onUnmounted(() => {
    if (slider.value) {
      slider.value.destroy()
      slider.value = null
    }
  })

  return {
    slider,
  }
}
```

```vue [src/components/MyComponent.vue]
<script setup lang="ts">
const target = ref<HTMLElement>()
const { slider } = useTinySlider(target, { nav: false })
</script>

<template>
  <div ref="target">
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
  </div>
</template>
```
:::


## Vuero composables

Vuero provides a set of composable functions that can be used in your Vue components. These composables serve different purposes, such as managing the dark mode state, handling the session, etc.

| Composable   | Description      |
| ------------ | -----------------|
| `useDarkmode` | Provide a reactive dark mode state to Vue |
| `useVueroContext` | Shared key-value state |
| `useImageError` | Image loading error handler |
| `useScreenSize` | Reactive screen media query |
| `useUserToken` | Example of a token storage composable (differs between SSR and Client Only) |
| `useDropdown` | Internal composable to handle dropdowns, used in VDropdown |
| `useFieldContext` | Internal composable to handle field validation, used in VField |



