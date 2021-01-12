<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

useTitle('Components - Plugins Datepicker - Vuero')
</script>

<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="342"
      data-menu-item="#components-sidebar-menu"
      data-mobile-item="#components-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="toggleSidebar('components')"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[activeSidebar !== 'none' && 'active']"
                  class="icon-box-toggle"
                >
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Datepicker</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <nav
              class="breadcrumb has-bullet-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <RouterLink :to="{ name: 'index' }">
                    <span class="icon is-small is-solo">
                      <Icon icon="feather:home" />
                    </span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'elements-hub' }">
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Plugins</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Datepicker</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Bulma Datetimepicker-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bulma Datetimepicker</h3>
                    <p>
                      This Bulma vanilla js extension offers a full set of time
                      and date pickers that you can mix in many different ways.
                      This example shows a date and time picker. Use the
                      <code>type="datetime"</code> attribute on the input.
                      Please reference the plugin
                      <a href="https://creativebulma.net/product/calendar/demo"
                        >documentation</a
                      >
                      for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input id="bulma-datepicker-7" class="input" />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
bulmaCalendar.attach('#bulma-datepicker-7', {
    color: themeColors.primary,
    lang: 'en'
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input id=&#x22;bulma-datepicker-7&#x22; class=&#x22;input&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Bulma Datepicker-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bulma Datepicker</h3>
                    <p>
                      This Bulma vanilla js extension offers a full set of time
                      and date pickers that you can mix in many different ways.
                      This example shows a date picker. Use the
                      <code>type="date"</code> attribute on the input. Please
                      reference the plugin
                      <a href="https://creativebulma.net/product/calendar/demo"
                        >documentation</a
                      >
                      for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          id="bulma-datepicker-1"
                          class="input"
                          type="date"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
bulmaCalendar.attach('#bulma-datepicker-1', {
    color: themeColors.primary,
    lang: 'en'
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input id=&#x22;bulma-datepicker-1&#x22; class=&#x22;input&#x22; type=&#x22;date&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Bulma Datepicker Modal-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bulma Datepicker Modal</h3>
                    <p>
                      This Bulma vanilla js extension offers a full set of time
                      and date pickers that you can mix in many different ways.
                      This example shows a modal date picker. Use the
                      <code>type="date"</code> attribute on the input. Also use
                      the <code>displayMode: 'dialog'</code> option in the
                      javascript code for it to display as a modal. Please
                      reference the plugin
                      <a href="https://creativebulma.net/product/calendar/demo"
                        >documentation</a
                      >
                      for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          id="bulma-datepicker-2"
                          class="input"
                          type="date"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
bulmaCalendar.attach('#bulma-datepicker-2', {
    displayMode: 'dialog',
    startDate: new Date('02/11/2018'),
    minDate: '01/01/2018',
    maxDate: '12/31/2018',
    color: themeColors.primary,
    lang: 'en'
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input id=&#x22;bulma-datepicker-2&#x22; class=&#x22;input&#x22; type=&#x22;date&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Bulma Datepicker Inline-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bulma Datepicker Inline</h3>
                    <p>
                      This Bulma vanilla js extension offers a full set of time
                      and date pickers that you can mix in many different ways.
                      This example shows an inline date picker. Use the
                      <code>type="date"</code> attribute on the input. Also use
                      the <code>displayMode: 'inline'</code> option in the
                      javascript code for it to display inline. Please reference
                      the plugin
                      <a href="https://creativebulma.net/product/calendar/demo"
                        >documentation</a
                      >
                      for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          id="bulma-datepicker-3"
                          class="input"
                          type="date"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
bulmaCalendar.attach('#bulma-datepicker-3', {
    displayMode: 'inline',
    startDate: new Date('02/11/2018'),
    minDate: '01/01/2018',
    maxDate: '12/31/2018',
    color: themeColors.primary,
    lang: 'en'
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input id=&#x22;bulma-datepicker-3&#x22; class=&#x22;input&#x22; type=&#x22;date&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Bulma Daterange Picker-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bulma Daterange Picker</h3>
                    <p>
                      This Bulma vanilla js extension offers a full set of time
                      and date pickers that you can mix in many different ways.
                      This example shows a range picker. Use the
                      <code>type="date"</code> and the
                      <code>data-is-range="true"</code> attributes on the input.
                      Please reference the plugin
                      <a href="https://creativebulma.net/product/calendar/demo"
                        >documentation</a
                      >
                      for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          id="bulma-datepicker-4"
                          class="input"
                          type="date"
                          data-is-range="true"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
bulmaCalendar.attach('#bulma-datepicker-4', {
    color: themeColors.primary,
    lang: 'en'
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input id=&#x22;bulma-datepicker-4&#x22; class=&#x22;input&#x22; type=&#x22;date&#x22; data-is-range=&#x22;true&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Bulma Timepicker-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bulma Timepicker</h3>
                    <p>
                      This Bulma vanilla js extension offers a full set of time
                      and date pickers that you can mix in many different ways.
                      This example shows a time picker. Use the
                      <code>type="time"</code> attribute on the input. Please
                      reference the plugin
                      <a href="https://creativebulma.net/product/calendar/demo"
                        >documentation</a
                      >
                      for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-bulma-timepicker">
                      <div class="control">
                        <input
                          id="bulma-datepicker-5"
                          class="input"
                          type="time"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
bulmaCalendar.attach('#bulma-datepicker-5', {
    color: themeColors.primary,
    lang: 'en'
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input id=&#x22;bulma-datepicker-5&#x22; class=&#x22;input&#x22; type=&#x22;time&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Bulma Timerange picker-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bulma Timerange picker</h3>
                    <p>
                      This Bulma vanilla js extension offers a full set of time
                      and date pickers that you can mix in many different ways.
                      This example shows a time range picker. Use the
                      <code>type="date"</code> and the
                      <code>data-is-range="true"</code> attributes on the input.
                      Please reference the plugin
                      <a href="https://creativebulma.net/product/calendar/demo"
                        >documentation</a
                      >
                      for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-bulma-timepicker">
                      <div class="control">
                        <input
                          id="bulma-datepicker-6"
                          class="input"
                          type="time"
                          data-is-range="true"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
bulmaCalendar.attach('#bulma-datepicker-6', {
    color: themeColors.primary,
    lang: 'en'
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input id=&#x22;bulma-datepicker-6&#x22; class=&#x22;input&#x22; type=&#x22;time&#x22;&#x3E; data-is-range=&#x22;true&#x22;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Pickaday-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Pickaday Datepicker</h3>
                    <p>
                      Vuero is integrated with Pikaday, a performant vanilla
                      javascript datepicker library. You can check the plugin
                      documentation on
                      <a href="https://github.com/Pikaday/Pikaday">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The following
                      example shows you how to use it.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icon">
                        <input
                          id="pickaday-datepicker"
                          class="input"
                          placeholder="select a date"
                        />
                        <div class="form-icon">
                          <Icon icon="feather:calendar" />
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
var picker = new Pikaday({
    field: document.getElementById('pickaday-datepicker'),
    format: 'D MMM YYYY',
    onSelect: function() {
        //Do your stuff
    }
});

//MARKUP
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon&#x22;&#x3E;
        &#x3C;input id=&#x22;pickaday-datepicker&#x22; class=&#x22;input&#x22; placeholder=&#x22;select a date&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;calendar&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
