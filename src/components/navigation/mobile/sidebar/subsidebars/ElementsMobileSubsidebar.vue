<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Elements</h3>
      </div>

      <ul class="submenu">
        <li>
          <RouterLink :to="{ name: 'elements-hub' }">Elements Hub</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-colors' }">Colors</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-helpers' }">Helpers</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-buttons' }">Buttons</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-blocks' }">Blocks</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-content' }">Content</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tags' }"
            >Tags &amp; Badges</RouterLink
          >
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
          <RouterLink :to="{ name: 'elements-table' }">Table</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'elements-tooltips' }">Tooltips</RouterLink>
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

      <div class="bottom-action"></div>
    </div>
  </div>
</template>