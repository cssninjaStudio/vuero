<script lang="ts">
import { defineComponent } from 'vue'

const ElementsMobileSubsidebar = defineComponent({
  name: 'ElementsMobileSubsidebar',
  components: {},
  setup() {
    // ElementsMobileSubsidebar - Composition API

    return {}
  },
})

export default ElementsMobileSubsidebar
</script>

<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Elements</h3>
      </div>

      <ul class="submenu">
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
                ><i data-feather="circle"></i>Line Icons Light</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-icons-lnir.html"
                ><i data-feather="circle"></i>Line Icons Regular</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-icons-fa.html"
                ><i data-feather="circle"></i>Font Awesome 5</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-icons-feather.html"
                ><i data-feather="circle"></i>Feather Icons</a
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
                ><i data-feather="circle"></i>Basic Cards</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-cards-advanced.html"
                ><i data-feather="circle"></i>Advanced Cards</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-cards-bulma.html"
                ><i data-feather="circle"></i>Bulma Cards</a
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
                ><i data-feather="circle"></i>Inputs</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-addons.html"
                ><i data-feather="circle"></i>Input Addons</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-textarea.html"
                ><i data-feather="circle"></i>Textarea</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-selects.html"
                ><i data-feather="circle"></i>Selects</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-custom.html"
                ><i data-feather="circle"></i>Custom</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-file.html"
                ><i data-feather="circle"></i>File Input</a
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
                ><i data-feather="circle"></i>Checkboxes</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-radios.html"
                ><i data-feather="circle"></i>Radios</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/elements-forms-switch.html"
                ><i data-feather="circle"></i>Switches</a
              >
            </li>
          </ul>
        </li>
      </ul>

      <div class="bottom-action"></div>
    </div>
  </div>
</template>