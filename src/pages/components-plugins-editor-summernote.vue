<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Components - Plugins Editor Summernote - Vuero')
</script>

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
              <h1 class="title is-4">Summernote</h1>
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
                    <span>Summernote</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Summernote Editor-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Summernote Editor</h3>
                    <p>
                      Vuero ships with Summernote Editor, a nice and easily
                      customizable jQuery rich text editor
                      <a
                        href="https://summernote.org/getting-started/#without-bootstrap"
                        >here</a
                      >. If you need a vanilla js editor, please consider
                      looking at our other integrated editor, sun editor.
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
$('#summernote').summernote({
    placeholder: 'Hello stand alone ui',
    tabsize: 2,
    height: 250,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true, 
    toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['codeview', 'help']]
    ]
});

//MARKUP
&#x3C;div id=&#x22;summernote&#x22;&#x3E;&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <div class="p-t-20 p-b-20">
                  <div class="demo-editor-container">
                    <div id="summernote"></div>
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
