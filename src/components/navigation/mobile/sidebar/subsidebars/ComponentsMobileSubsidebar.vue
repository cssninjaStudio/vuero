<template>
  <div class="mobile-subsidebar is-activity">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Components</h3>
      </div>

      <ul class="submenu">
        <li>
          <RouterLink :to="{ name: 'components-hub' }"
            >Components Hub</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-avatars' }">Avatars</RouterLink>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Accordions <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/components-accordion-basic.html"
                ><Icon icon="feather:circle" />Accordion</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-accordion-collapse.html"
                ><Icon icon="feather:circle" />Collapse</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-accordion-images.html"
                ><Icon icon="feather:circle" />Image Accordion</a
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-breadcrumb' }"
            >Breadcrumb</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-dropdown' }"
            >Dropdown</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-icon-box' }"
            >Icon Box</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'components-loader' }">Loader</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-messages' }">Message</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-modal' }">Modal</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-progress' }"
            >Progress</RouterLink
          >
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Tabs <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/components-tabs-regular.html"
                ><Icon icon="feather:circle" />Regular Tabs</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-tabs-slider.html"
                ><Icon icon="feather:circle" />Slider Tabs</a
              >
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Flex Table <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/components-table-flex.html"
                ><Icon icon="feather:circle" />Base Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-compact.html"
                ><Icon icon="feather:circle" />Compact Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-media.html"
                ><Icon icon="feather:circle" />Media Table</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-table-flex-advanced.html"
                ><Icon icon="feather:circle" />Advanced Table</a
              >
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'components-snacks' }">Snacks</RouterLink>
        </li>
        <li class="divider"></li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Plugins <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a class="is-submenu" href="/components-plugins-alertify.html"
                ><Icon icon="feather:circle" />Alertify</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-autocomplete.html"
                ><Icon icon="feather:circle" />Autocomplete</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-pickaday.html"
                ><Icon icon="feather:circle" />Datepicker</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-choices.html"
                ><Icon icon="feather:circle" />ChoicesJs</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-nouislider.html"
                ><Icon icon="feather:circle" />NoUI Slider</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-filepond.html"
                ><Icon icon="feather:circle" />Filepond</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-lightgallery.html"
                ><Icon icon="feather:circle" />Light Gallery</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-videogallery.html"
                ><Icon icon="feather:circle" />Video Gallery</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-video-player.html"
                ><Icon icon="feather:circle" />Video Player</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-toasts.html"
                ><Icon icon="feather:circle" />Toasts</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-webuipopover.html"
                ><Icon icon="feather:circle" />WebUI Popover</a
              >
            </li>
          </ul>
        </li>
        <li class="has-children">
          <div class="collapse-wrap">
            <a href="javascript:void(0);" class="parent-link"
              >Rich Text <i data-feather="chevron-right"></i
            ></a>
          </div>
          <ul>
            <li>
              <a
                class="is-submenu"
                href="/components-plugins-editor-summernote.html"
                ><Icon icon="feather:circle" />Summernote</a
              >
            </li>
            <li>
              <a class="is-submenu" href="/components-plugins-editor-sun.html"
                ><Icon icon="feather:circle" />Sun Editor</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>