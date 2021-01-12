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
              <h1 class="title is-4">Sun Editor</h1>
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
                    <span>Sun Editor</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Standard Editor-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Standard Editor</h3>
                    <p>
                      Vuero ships with Sun Editor, a solid vanilla js rich text
                      editor alternative. You can read more on sun editor and
                      all the vailable customization options
                      <a href="https://github.com/JiHong88/SunEditor">here</a>.
                      The example below shows a standard sun editor instance.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner no-padding">
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
const editor = SUNEDITOR.create((document.getElementById(&#x27;sun-editor&#x27;) || &#x27;sun-editor&#x27;), {
    width: &#x27;100%&#x27;,
    height: 250,
    placeholder: &#x27;Write your text here...&#x27;
});

//MARKUP
&#x3C;textarea id=&#x22;sun-editor&#x22; placeholder=&#x22;Write your text here...&#x22;&#x3E;&#x3C;/textarea&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <div class="p-t-20 p-b-80">
                  <div class="demo-editor-container">
                    <textarea
                      id="sun-editor"
                      placeholder="Write your text here..."
                    ></textarea>
                  </div>
                </div>

                <!--Balloon Editor-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Balloon Editor</h3>
                    <p>
                      Sun Editor can be used with a more minimal UI
                      configuration where the toolbar appears only when you
                      focus the textarea. It can be very useful to keep your
                      layouts clean. In order to do this simply use the
                      <code>mode:'balloon-always'</code> in your JS
                      configuration. Check the code exqmple for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner no-padding">
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
//JS CODE
const editor = SUNEDITOR.create((document.getElementById('sun-editor-balloon') || 'sun-editor-balloon'), {
    width: '100%',
    height: 250,
    placeholder: 'Write your text here...',
    mode: 'balloon-always'
});

//MARKUP
&#x3C;textarea id=&#x22;sun-editor-balloon&#x22; placeholder=&#x22;Write your text here...&#x22;&#x3E;&#x3C;/textarea&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <div class="p-t-20 p-b-80">
                  <div class="demo-editor-container">
                    <textarea
                      id="sun-editor-balloon"
                      placeholder="Write your text here..."
                    ></textarea>
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
