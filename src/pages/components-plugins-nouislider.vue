<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      data-sidebar-open
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
              data-sidebar="components-sidebar"
            >
              <span class="menu-toggle has-chevron">
                <span class="icon-box-toggle">
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">NoUI Slider</h1>
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
                    <span>NoUI Slider</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Horizontal Slider-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Horizontal Slider</h3>
                    <p>
                      Vuero feature NoUI Slider, a powerful and versatile
                      vanilla js range slider library, with orientation and
                      multiple handle support. NoUI sliders can have 3 sizes,
                      the default and 2 smaller ones. Check the code example for
                      more details about usage.You can check the plugin
                      documentation
                      <a href="https://refreshless.com/nouislider/">here</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/popover.js</code> file.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider is-tiny"></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider is-small"></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider"></div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//Markup
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-tiny&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-small&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

//Javascript
var sliders = document.getElementsByClassName('noui-base-slider');

for (var i = 0; i &lt; sliders.length; i++) {

    noUiSlider.create(sliders[i], {
        start: [10, 90],
        connect: true,
        orientation: "horizontal",
        range: {
            'min': 0,
            'max': 100
        },
    });
}
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Vertical Slider-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Vertical Slider</h3>
                    <p>
                      NoUI Sliders can be vertically oriented if you need them
                      to. Simply use the
                      <code>orientation: "vertical"</code> option when
                      initializing your slider. Vertical sliders have the same
                      sizing options as horizontal sliders.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field is-grouped">
                      <div class="control">
                        <div class="noui-vertical-slider is-tiny"></div>
                      </div>

                      <div class="control p-t-30 p-r-30"></div>

                      <div class="control">
                        <div class="noui-vertical-slider is-small"></div>
                      </div>

                      <div class="control p-t-30 p-r-30"></div>

                      <div class="control">
                        <div class="noui-vertical-slider"></div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//Markup
&#x3C;div class=&#x22;field is-grouped&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-vertical-slider is-tiny&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control p-t-30 p-r-30&#x22;&#x3E;&#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-vertical-slider is-small&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control p-t-30 p-r-30&#x22;&#x3E;&#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-vertical-slider&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

//Javascript
var sliders = document.getElementsByClassName('noui-vertical-slider');

for (var i = 0; i &lt; sliders.length; i++) {

    noUiSlider.create(sliders[i], {
        start: [10, 90],
        connect: true,
        orientation: "vertical",
        range: {
            'min': 0,
            'max': 100
        },
    });
}
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Single Range-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Single Range</h3>
                    <p>
                      NoUI Slider can be used to create single handle range
                      inputs. Check out the code example to learn more about the
                      required markup and Javascript.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div id="noui-range-slider" class="is-small"></div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//Markup
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div id=&#x22;noui-range-slider&#x22; class=&#x22;is-small&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

//Javascript
var sliderRange = document.getElementById('noui-range-slider');

noUiSlider.create(sliderRange, {
    start: [20],
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
});
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Fill Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Fill Colors</h3>
                    <p>
                      NoUI Sliders can have different fill colors. To use
                      different fill colors, simply add the corresponding class
                      to the main parent element. Available color classes are
                      <code>is-info</code>, <code>is-success</code>,
                      <code>is-warning</code> and <code>is-danger</code>. Check
                      out the code example to learn more about the required
                      markup and Javascript.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider is-small"></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider is-info is-small"></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider is-success is-small"></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider is-warning is-small"></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider is-danger is-small"></div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//Markup
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-small&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-info is-small&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-success is-small&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-warning is-small&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-danger is-small&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

//Javascript
var sliders = document.getElementsByClassName('noui-base-slider');

for (var i = 0; i &lt; sliders.length; i++) {

    noUiSlider.create(sliders[i], {
        start: [10, 90],
        connect: true,
        orientation: "horizontal",
        range: {
            'min': 0,
            'max': 100
        },
    });
}
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded Handles-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Handles</h3>
                    <p>
                      NoUI Sliders can have rounded handles. To use rounded
                      handles, simply added the <code>is-rounded</code> class to
                      the main parent element. Check out the code example to
                      learn more about the required markup and Javascript.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div class="noui-base-slider is-small is-rounded"></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div
                          class="noui-base-slider is-info is-small is-rounded"
                        ></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div
                          class="noui-base-slider is-success is-small is-rounded"
                        ></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div
                          class="noui-base-slider is-warning is-small is-rounded"
                        ></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div
                          class="noui-base-slider is-danger is-small is-rounded"
                        ></div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//Markup
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-info is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-success is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-warning is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-danger is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

//Javascript
var sliders = document.getElementsByClassName('noui-base-slider');

for (var i = 0; i &lt; sliders.length; i++) {

    noUiSlider.create(sliders[i], {
        start: [10, 90],
        connect: true,
        orientation: "horizontal",
        range: {
            'min': 0,
            'max': 100
        },
    });
}
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Slider Tooltips-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Slider Tooltips</h3>
                    <p>
                      NoUI Sliders can have tooltips to display the currently
                      selected value. If you want your tooltip to be shown
                      permanently instead of on slide, simply add the
                      <code>has-fixed-tooltip</code> to the main parent element.
                      Check out the code example to learn more about the
                      required markup and Javascript.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <div
                          class="noui-tooltip-slider is-small has-fixed-tooltip"
                        ></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div class="noui-tooltip-slider is-small is-info"></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div
                          class="noui-tooltip-slider is-small is-success"
                        ></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div
                          class="noui-tooltip-slider is-small is-warning"
                        ></div>
                      </div>
                    </div>

                    <!--Spacer-->
                    <div class="p-t-10 p-b-10"></div>

                    <div class="field">
                      <div class="control">
                        <div
                          class="noui-tooltip-slider is-small is-danger"
                        ></div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//Markup
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-tooltip-slider is-small has-fixed-tooltip&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-info is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-success is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-warning is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;noui-base-slider is-danger is-small is-rounded&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

//Javascript
var tooltipSliders = document.getElementsByClassName('noui-tooltip-slider');

for (var i = 0; i &lt; tooltipSliders.length; i++) {

    var randomStart = (Math.floor(Math.random() * 101));

    noUiSlider.create(tooltipSliders[i], {
        start: [randomStart],
        connect: [true, false],
        tooltips: [true],
        range: {
            'min': 0,
            'max': 100
        }
    });
}
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
