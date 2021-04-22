# vite-plugin-vuero-doc

This folder hold the custom `vite-plugin-vuero-doc` vite plugin which
is inspired by [vite-plugin-md](https://github.com/antfu/vite-plugin-md/).

We use this plugin to allow loading of markdown files in
[../documentation](../documentation) folder and be loaded as vue components **at build time**.  
Those components are used in [../src/pages/components](../src/pages/components)
and [../src/pages/elements](../src/pages/elements) pages

The plugin will converts `<!--code--> ... <!--/code-->` and  
`<!--example--> ... <!--/example-->` into slot content and inject them in the
[../src/components/partials/documentation/DocumentationItem.vue](../src/components/partials/documentation/DocumentationItem.vue)
component

This is only intended to be an example.
