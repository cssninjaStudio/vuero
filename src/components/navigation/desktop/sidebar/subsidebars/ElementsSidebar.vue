<script lang="ts">
import { defineComponent } from 'vue'

const ElementsSidebar = defineComponent({
  name: 'ElementsSidebar',
  components: {},
  setup() {
    // ElementsSidebar - Composition API

    return {}
  },
})

export default ElementsSidebar
</script>

<template>
  <div id="elements-sidebar" class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">Elements</h3>
      <div class="panel-close">
        <Icon icon="feather:x" />
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li>
          <a href="/elements-hub.html">Elements Hub</a>
        </li>
        <li>
          <a href="/elements-colors.html">Colors</a>
        </li>
        <li>
          <a href="/elements-helpers.html">Helpers</a>
        </li>
        <li>
          <a href="/elements-buttons.html">Buttons</a>
        </li>
        <li>
          <a href="/elements-blocks.html">Blocks</a>
        </li>
        <li>
          <a href="/elements-content.html">Content</a>
        </li>
        <li>
          <a href="/elements-tags.html">Tags & Badges</a>
        </li>

        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Icons <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/elements-icons-lnil.html"
                ><Icon icon="feather:circle" />Line Icons Light</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-icons-lnir.html"
                ><Icon icon="feather:circle" />Line Icons Regular</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-icons-fa.html"
                ><Icon icon="feather:circle" />Font Awesome 5</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-icons-feather.html"
                ><Icon icon="feather:circle" />Feather Icons</a
              >
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Cards <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/elements-cards-basic.html"
                ><Icon icon="feather:circle" />Basic Cards</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-cards-advanced.html"
                ><Icon icon="feather:circle" />Advanced Cards</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-cards-bulma.html"
                ><Icon icon="feather:circle" />Bulma Cards</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="/elements-table.html">Table</a>
        </li>
        <li>
          <a href="/elements-tooltips.html">Tooltips</a>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Forms <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/elements-forms-inputs.html"
                ><Icon icon="feather:circle" />Inputs</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-addons.html"
                ><Icon icon="feather:circle" />Input Addons</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-textarea.html"
                ><Icon icon="feather:circle" />Textarea</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-selects.html"
                ><Icon icon="feather:circle" />Selects</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-custom.html"
                ><Icon icon="feather:circle" />Custom</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-file.html"
                ><Icon icon="feather:circle" />File Input</a
              >
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Toggles <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/elements-forms-checkboxes.html"
                ><Icon icon="feather:circle" />Checkboxes</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-radios.html"
                ><Icon icon="feather:circle" />Radios</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-switch.html"
                ><Icon icon="feather:circle" />Switches</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>