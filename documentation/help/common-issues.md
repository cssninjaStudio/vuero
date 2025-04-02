---
outline: deep
description: "Find the solutions of common issues encouterd when using Vuero"

head:
  - - meta
    - property: og:image
      content: "https://media.cssninja.io/embed/hub/vuero/wide.png?title=Find%20the%20solutions%20of%20common%20issues%20encouterd%20when%20using%20Vuero"
---

# Common Issues

### [unplugin-vue-components] no components found

::: info SOLUTION
This occurs when you have special characters (like `C:\Users\dev\folder with (special chars)\quickstarter-vuero`) in the path of your project. You can fix this by renaming your project folder to a simple name without special characters.
:::
::: tip
For windows users, we recommend using [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)
:::


### FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
::: info SOLUTION
This occurs when you run out of memory. You can fix this by increasing the memory limit. You can do this by running the following command:
```bash
NODE_OPTIONS=--max_old_space_size=4096 pnpm build
```
:::

### [WARNING] Unexpected "\"\\n\"" [css-syntax-error]

::: info SOLUTION
This occurs when building the demo (mapbox styles), it is a warning and does not affect the build process. You can ignore it.
:::

<div style="padding-bottom:40px">&nbsp;</div>
