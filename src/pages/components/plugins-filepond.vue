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

useTitle('Components - Plugins Filepond - Vuero')
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
              <h1 class="title is-4">Filepond</h1>
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
                      <i class="iconify" data-icon="feather:home"></i>
                    </span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'elements' }">
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
                    <span>Filepond</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Filepond-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Filepond</h3>
                    <p>
                      Vuero is integrated with Filepond, a performant vanilla
                      javascript uploader library. You can check the plugin
                      documentation on
                      <a href="https://github.com/pqina/filepond">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The following
                      example accepts a maximum of 3 files shown in a single
                      item row.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="filepond-uploader">
                      <div class="control">
                        <input
                          type="file"
                          class="filepond"
                          name="filepond"
                          multiple
                          data-allow-reorder="true"
                          data-max-file-size="3MB"
                          data-max-files="3"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;filepond-uploader&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input type=&#x22;file&#x22; class=&#x22;filepond&#x22; name=&#x22;filepond&#x22; multiple
            data-allow-reorder=&#x22;true&#x22; data-max-file-size=&#x22;3MB&#x22; data-max-files=&#x22;3&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

//Register Filepond plugin (once)
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize,
    FilePondPluginImageEdit
);

//Instanciate element
FilePond.create(
    document.querySelector('.filepond'),
);
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Filepond-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Filepond Two Grid</h3>
                    <p>
                      Vuero is integrated with Filepond, a performant vanilla
                      javascript uploader library. You can check the plugin
                      documentation on
                      <a href="https://github.com/pqina/filepond">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The following
                      example accepts a maximum of 3 files shown in a 2 items
                      row.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="filepond-uploader is-two-grid">
                      <div class="control">
                        <input
                          type="file"
                          class="filepond-2-grid"
                          name="filepond_2_grid"
                          multiple
                          data-allow-reorder="true"
                          data-max-file-size="3MB"
                          data-max-files="8"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;filepond-uploader is-two-grid&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input type=&#x22;file&#x22; class=&#x22;filepond&#x22; name=&#x22;filepond&#x22; multiple
            data-allow-reorder=&#x22;true&#x22; data-max-file-size=&#x22;3MB&#x22; data-max-files=&#x22;8&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;


//Instanciate element
FilePond.create(
    document.querySelector('.filepond-2-grid'),
);
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Filepond-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Filepond Three Grid</h3>
                    <p>
                      Vuero is integrated with Filepond, a performant vanilla
                      javascript uploader library. You can check the plugin
                      documentation on
                      <a href="https://github.com/pqina/filepond">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The following
                      example accepts a maximum of 3 files shown in a 3 items
                      row.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="filepond-uploader is-three-grid">
                      <div class="control">
                        <input
                          type="file"
                          class="filepond-3-grid"
                          name="filepond_3_grid"
                          multiple
                          data-allow-reorder="true"
                          data-max-file-size="3MB"
                          data-max-files="9"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;filepond-uploader is-three-grid&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input type=&#x22;file&#x22; class=&#x22;filepond&#x22; name=&#x22;filepond&#x22; multiple
            data-allow-reorder=&#x22;true&#x22; data-max-file-size=&#x22;3MB&#x22; data-max-files=&#x22;8&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;


//Instanciate element
FilePond.create(
    document.querySelector('.filepond-3-grid'),
);
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Filepond-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Profile Filepond</h3>
                    <p>
                      Vuero is integrated with Filepond, a performant vanilla
                      javascript uploader library. You can check the plugin
                      documentation on
                      <a href="https://github.com/pqina/filepond">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The following
                      example is fit for profile image upload (1:1 ratio).
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="filepond-profile-wrap is-tiny">
                      <input
                        type="file"
                        class="profile-filepond-tiny"
                        name="profile_filepond_tiny"
                        accept="image/png, image/jpeg, image/gif"
                      />
                    </div>

                    <div class="filepond-profile-wrap is-small">
                      <input
                        type="file"
                        class="profile-filepond-small"
                        name="profile_filepond_small"
                        accept="image/png, image/jpeg, image/gif"
                      />
                    </div>

                    <div class="filepond-profile-wrap">
                      <input
                        type="file"
                        class="profile-filepond"
                        name="profile_filepond"
                        accept="image/png, image/jpeg, image/gif"
                      />
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;filepond-profile-wrap is-tiny&#x22;&#x3E;
    &#x3C;input type=&#x22;file&#x22; class=&#x22;profile-filepond-tiny&#x22; name=&#x22;profile_filepond_tiny&#x22;
    accept=&#x22;image/png, image/jpeg, image/gif&#x22;&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;filepond-profile-wrap is-small&#x22;&#x3E;
    &#x3C;input type=&#x22;file&#x22; class=&#x22;profile-filepond-small&#x22; name=&#x22;profile_filepond_small&#x22;
    accept=&#x22;image/png, image/jpeg, image/gif&#x22;&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;filepond-profile-wrap&#x22;&#x3E;
    &#x3C;input type=&#x22;file&#x22; class=&#x22;profile-filepond&#x22; name=&#x22;profile_filepond&#x22;
    accept=&#x22;image/png, image/jpeg, image/gif&#x22;&#x3E;
&#x3C;/div&#x3E;


//Example for the bigger one (Refer to assets/js/components.js for the others)
FilePond.create(
    document.querySelector('.profile-filepond'),
    {
        labelIdle: `&#x3C;i class=&#x22;lnil lnil-cloud-upload&#x22;&#x3E;&#x3C;/&#x3E;`,
        imagePreviewHeight: 140,
        imageCropAspectRatio: '1:1',
        imageResizeTargetWidth: 140,
        imageResizeTargetHeight: 140,
        stylePanelLayout: 'compact circle',
        styleLoadIndicatorPosition: 'center bottom',
        styleProgressIndicatorPosition: 'right bottom',
        styleButtonRemoveItemPosition: 'left bottom',
        styleButtonProcessItemPosition: 'right bottom',
    }
);
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Filepond-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Square Filepond</h3>
                    <p>
                      Vuero is integrated with Notyf, a dead simple vanilla
                      javascript toasting library. You can check the plugin
                      documentation on
                      <a href="https://github.com/caroso1222/notyf">Github</a>.
                      You can also access the javascript code by visiting the
                      <code>assets/js/components.js</code> file. The success
                      toast is one the 2 notyf default toasts.
                    </p>
                    <a class="code-trigger">
                      <i class="iconify open" data-icon="feather:code"></i>
                      <i class="iconify close" data-icon="feather:x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="filepond-square-wrap is-tiny">
                      <input
                        type="file"
                        class="square-filepond-tiny"
                        name="square_filepond_tiny"
                        accept="image/png, image/jpeg, image/gif"
                      />
                    </div>

                    <div class="filepond-square-wrap is-small">
                      <input
                        type="file"
                        class="square-filepond-small"
                        name="square_filepond_small"
                        accept="image/png, image/jpeg, image/gif"
                      />
                    </div>

                    <div class="filepond-square-wrap">
                      <input
                        type="file"
                        class="square-filepond"
                        name="square_filepond"
                        accept="image/png, image/jpeg, image/gif"
                      />
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;filepond-square-wrap is-tiny&#x22;&#x3E;
    &#x3C;input type=&#x22;file&#x22; class=&#x22;square-filepond-tiny&#x22; name=&#x22;square_filepond_tiny&#x22;
    accept=&#x22;image/png, image/jpeg, image/gif&#x22;&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;filepond-square-wrap is-small&#x22;&#x3E;
    &#x3C;input type=&#x22;file&#x22; class=&#x22;square-filepond-small&#x22; name=&#x22;square_filepond_small&#x22;
    accept=&#x22;image/png, image/jpeg, image/gif&#x22;&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;filepond-square-wrap&#x22;&#x3E;
    &#x3C;input type=&#x22;file&#x22; class=&#x22;square-filepond&#x22; name=&#x22;square_filepond&#x22;
    accept=&#x22;image/png, image/jpeg, image/gif&#x22;&#x3E;
&#x3C;/div&#x3E;


//Example for the bigger one (Refer to assets/js/components.js for the others)
FilePond.create(
    document.querySelector('.square-filepond'),
    {
        labelIdle: `&#x3C;i class=&#x22;lnil lnil-plus&#x22;&#x3E;&#x3C;/&#x3E;`,
        imagePreviewHeight: 140,
        imageCropAspectRatio: '1:1',
        imageResizeTargetWidth: 140,
        imageResizeTargetHeight: 140,
        stylePanelLayout: 'compact circle',
        styleLoadIndicatorPosition: 'center bottom',
        styleProgressIndicatorPosition: 'right bottom',
        styleButtonRemoveItemPosition: 'left bottom',
        styleButtonProcessItemPosition: 'right bottom',
    }
);
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
