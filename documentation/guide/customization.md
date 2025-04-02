---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

# Customization


## Bulma

::: info
Vuero use 0.9.4 version of Bulma CSS: https://versions.bulma.io/0.9.4/documentation
:::

### CSS Variables

The main Bulma framework is built with traditional Sass variables and does not support css variables. We decided to enhance our existing Bulma package with this Bulma plugin: https://github.com/wtho/bulma-css-vars. This plugin fully supports css variables and patches the initial Bulma code base, making possible this implementation.

### RTL Support

In addition, we added RTL support to Bulma _(see related [Pull Request](https://github.com/jgthms/bulma/pull/3643))_ and use this version in Vuero. This means that you can use Bulma in RTL languages like Arabic, Hebrew, Persian, Urdu, etc. by simply adding the `dir="rtl"` attribute to the `<html>` tag.


## Native Dark Mode

Vuero comes with a native Dark mode. This means that all components are pre-styled for dark mode. You don't have to worry about it, when you turn it on, the colors change seamlessly. Dark mode styling is made through a global `.is-dark` class added to the page `<html>` root element. Dark mode is toggled on the body with javascript. In another type of implementation, the body would have to be rendered by the server with the proper class before being served to the client, based on the user selection.

::: info
`.is-dark` class is not restricted to `<html>` element, you can add this class to any element, so all childrens will be in dark mode!
:::


## SCSS files


Partial SCSS file names always start with an underscore like this: `_button.scss` . They act as chunks of code that you can import only if you need them. Of course some of them are mandatory for the project to work. 

```text
src/
└─ scss/
   ├── abstracts/
   ├── bulma-generated/
   ├── components/
   ├── css-variables/
   ├── layout/
   └── main.scss
```

| Directory            | Description                                                  |
|----------------------|--------------------------------------------------------------|
| **abstracts/**       | Mixins and Bulma variables overrides.                        |
| _bulma-generated/_ | Generated Bulma CSS variables and classes.                   |
| **css-variables/**   | Custom CSS variables for colors, fonts, etc.                 |
| **components/**      | Partial styles that are reusable and can be imported in any component or layout. |
| **layout/**          | Holds all basic and shared layout files.                     |
| **main.scss**        | Entry point for common styles.                               |


## Import stylesheets

In order to load stylesheets into our application (e.g if you need to add additional styles from a `node_modules` plugin), we simply need to import `css`, `sass` or `scss` files in the `src/styles.ts` file or in any component.

:::code-group
```ts [src/styles.ts]
// import from node_modules
import "notyf/notyf.min.css";

// import from local files
import "/@src/scss/main.scss";
```
```vue [src/components/MyComponent.vue]
<template>
  <!-- ... -->
</template>

<style lang="scss">
/* files imported in components will be loaded only once they are needed */
@import "/@src/scss/my-styles.scss";
</style>
```
:::

> All imported files here are to be converted in `css`, and injected automatically in `index.html` at build and run time. The injected styles are available globally.


## Changing colors

Vuero use native CSS variables to define colors. You can use any color format you want, including new CSS4 color formats like HSL, HSLA, HWB, etc. We also use [`color-mix`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix) function to derive colors shades from a given color.


All colors are defined in `src/scss/css-variables/_colors.scss` file, which looks like this:

```scss
:root {
  // bulma colors
  --primary: oklch(66.67% 0.146 173.07); // display-p3 color space
  --primary--color-invert: color-mix(in oklab, var(--primary), white 90%);
  --primary--dark-color: color-mix(in oklab, var(--primary), black 5%);
  --primary--light-color: color-mix(in oklab, var(--primary), white 90%);

  // ...


  // Layout colors
  --body-color: #f4f4f5;
  --dark-text: #283252;
  --dark-sidebar: #222225;
  // ...
}

// override dark mode colors
.is-dark {
  --primary: oklch(59.02% 0.146 172.62); // display-p3 color space
  --primary--color-invert: color-mix(in oklab, var(--primary), white 80%);

  --dark-text: #fcfcfc;
}
```

::: info
You can use live preview on demo page to generate and copy color snippets: https://vuero.cssninja.io/components/colors
:::

::: details Migrating from v2.x

In previous versions, we used HSL colors format to define colors with `colorHsl` scss mixin you need to replace with native CSS variables. 

_You can still use `hsl` format to define colors in the new version but we recommend using the new color format `oklch` which is more accurate and allows to define colors in the display-p3 color space or use hex colors directly._

```scss [src/scss/css-variables/_colors.scss]
:root {
  @include colorHsl('primary', 264, 73%, 47%); // [!code --]
  --primary: hsl(264 73% 47%); // [!code ++]
}
```

Color scheme usage has changed, instead having predefined css variables generated by scss (eg `--primary-dark-2`) we now use `color-mix` function to derive shades from a given color.

```vue [src/components/MyComponent.vue]
<!-- ... -->

<style lang="scss">
  .my-component {
    color: var(--primary-dark-2); // [!code --]
    color: color-mix(in oklab, var(--primary), dark 2%); // [!code ++]
  }
</style>
```
:::


> Useful links:  
> - https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
> - https://developer.mozilla.org/en-US/docs/Glossary/Color_space
> - https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl
> - https://oklch.com/



## Changing fonts

Vuero uses [Fontsource](https://fontsource.org/) modules in order to render variable fonts within the application to reduce CLS (Cumulative Layout Shift) and improve rendering performance. 

To change primary font to Inter, install the module `@fontsource-variable/inter`, then we need to import it and define the main font css variable:

:::code-group
```ts [src/styles.ts]
import '@fontsource-variable/inter'
```
```scss [src/scss/css-variables/_fonts.scss]
:root {
  --font: 'Inter Variable', sans-serif;
}
```
:::

> Useful links:  
> - https://fontsource.org/
