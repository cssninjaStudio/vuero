---
disable_code: true
disable_example: true
---

### Theme Colors

While Vuero was previously using predefined SCSS color variables that could be
used for customization before the Sass compilation. With Vuero 2.0, this is now
over. We completely switched to a new native `CSS Variables` setup. First it
means that you can dynamically change any color at runtime. It also means that
you can scope those changes to one or several components. However each change
has a cost. We had to switch to a new Bulma setup called `Bulma CSS Vars`,
which completely rewrites Bulma variables to CSS variables.
