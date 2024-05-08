<script setup lang="ts">
import type { NavbarItem } from '/@src/components/layouts/navbar/navbar.types'

const pageTitle = useVueroContext<string>('page-title')

const links = ref<NavbarItem[]>([
  {
    type: 'megamenu',
    label: 'Dashboards',
    id: 'dashboards',
    icon: 'lucide:activity',

    children: [
      {
        id: 'personal',
        label: 'Personal',
        icon: 'lucide:square-user-round',
        children: [
          {
            label: 'Personal V1',
            to: '/navbar/dashboards',
          },
          {
            label: 'Personal V2',
            to: '/navbar/dashboards/personal-2',
          },
          {
            label: 'Personal V3',
            to: '/navbar/dashboards/personal-3',
          },
          {
            label: 'Hobbies',
            to: '/navbar/dashboards/hobbies',
          },
          {
            label: 'Health',
            to: '/navbar/dashboards/health',
          },
          {
            label: 'Writer',
            to: '/navbar/dashboards/writer',
          },
          {
            label: 'Video',
            to: '/navbar/dashboards/video',
          },
          {
            label: 'Soccer',
            to: '/navbar/dashboards/soccer',
          },
        ],
      },
      {
        id: 'finance',
        label: 'Finance',
        icon: 'lucide:pie-chart',
        children: [
          {
            label: 'Analytics',
            to: '/navbar/dashboards/analytics',
          },
          {
            label: 'Stocks',
            to: '/navbar/dashboards/stocks',
          },
          {
            label: 'Sales',
            to: '/navbar/dashboards/sales',
          },
          {
            label: 'Banking V1',
            to: '/navbar/dashboards/banking-1',
          },
          {
            label: 'Banking V2',
            to: '/navbar/dashboards/banking-2',
          },
          {
            label: 'Banking V3',
            to: '/navbar/dashboards/banking-3',
          },
        ],
      },
      {
        id: 'business',
        label: 'Business',
        icon: 'lucide:briefcase-business',
        children: [
          {
            label: 'Influencer',
            to: '/navbar/dashboards/influencer',
          },
          {
            label: 'Flights Booking',
            to: '/navbar/dashboards/flights',
          },
          {
            label: 'Company Board',
            to: '/navbar/dashboards/company',
          },
          {
            label: 'Human Ressources',
            to: '/navbar/dashboards/human-ressources',
          },
          {
            label: 'Course',
            to: '/navbar/dashboards/course',
          },
          {
            label: 'Ecommerce',
            to: '/navbar/dashboards/ecommerce-1',
          },
          {
            label: 'Jobs',
            to: '/navbar/dashboards/jobs',
          },
        ],
      },
      {
        id: 'apps',
        label: 'Apps',
        icon: 'lucide:square-dashed-bottom-code',
        children: [
          {
            label: 'Food Delivery',
            to: '/navbar/dashboards/food-delivery',
          },
          {
            label: 'Maps V1',
            to: '/navbar/maps-1',
            tag: 'v1.2',
          },
          {
            label: 'Maps V2',
            to: '/navbar/maps-2',
            tag: 'v1.2',
          },
          {
            label: 'Inbox',
            to: '/inbox',
          },
          {
            label: 'Messaging V1',
            to: '/messaging-v1',
          },
          {
            label: 'Messaging V2',
            to: '/messaging-v2',
          },
        ],
      },
      {
        id: 'widgets',
        label: 'Widgets',
        icon: 'lucide:square-dashed-mouse-pointer',
        children: [
          {
            label: 'Apex Charts',
            to: '/navbar/dashboards/charts-apex',
          },
          {
            label: 'Billboard JS',
            to: '/navbar/dashboards/charts-billboardsjs',
          },
          {
            label: 'UI Widgets',
            to: '/navbar/dashboards/widgets-sample-ui',
          },
          {
            label: 'Creative Widgets',
            to: '/navbar/dashboards/widgets-sample-creative',
          },
          {
            label: 'List Widgets',
            to: '/navbar/dashboards/widgets-sample-list',
          },
          {
            label: 'Stat Widgets',
            to: '/navbar/dashboards/widgets-sample-stats',
          },
        ],
      },
      {
        id: 'wizards',
        label: 'Wizards',
        icon: 'lucide:square-pen',
        children: [
          {
            label: 'Wizard',
            to: '/wizard-v1',
          },
          {
            label: 'Form Layout V1',
            to: '/navbar/layouts/form-layouts-1',
          },
          {
            label: 'Form Layout V2',
            to: '/navbar/layouts/form-layouts-2',
          },
          {
            label: 'Form Layout V3',
            to: '/navbar/layouts/form-layouts-3',
          },
          {
            label: 'Form Layout V4',
            to: '/navbar/layouts/form-layouts-4',
          },
          {
            label: 'Form Layout V5',
            to: '/navbar/layouts/form-layouts-5',
          },
        ],
      },
      {
        id: 'navbars',
        label: 'Navbars',
        icon: 'lucide:panel-top',
        children: [
          {
            label: 'Regular Navbar',
            to: '/starters/navbar-blank-page-1',
          },
          {
            label: 'Fading Navbar',
            to: '/starters/navbar-blank-page-2',
          },
          {
            label: 'Colored Navbar',
            to: '/starters/navbar-blank-page-3',
          },
          {
            label: 'Dropdown Navbar',
            to: '/starters/navbar-blank-page-4',
          },
          {
            label: 'Colored Dropdown',
            to: '/starters/navbar-blank-page-5',
          },
          {
            label: 'Clean Navbar',
            to: '/starters/navbar-blank-page-6',
          },
          {
            label: 'Clean Center Navbar',
            to: '/starters/navbar-blank-page-7',
          },
          {
            label: 'Clean Fade Navbar',
            to: '/starters/navbar-blank-page-8',
          },
        ],
      },
      {
        id: 'sidebars',
        label: 'Sidebars',
        icon: 'lucide:panel-left',
        children: [
          {
            label: 'Regular Sidebar',
            to: '/starters/sidebar-blank-page-1',
          },
          {
            label: 'Curved Sidebar',
            to: '/starters/sidebar-blank-page-2',
          },
          {
            label: 'Colored Sidebar',
            to: '/starters/sidebar-blank-page-3',
          },
          {
            label: 'Curved Colored Sidebar',
            to: '/starters/sidebar-blank-page-4',
          },
          {
            label: 'Labels Sidebar',
            to: '/starters/sidebar-blank-page-5',
          },
          {
            label: 'Labels Hover Sidebar',
            to: '/starters/sidebar-blank-page-6',
          },
          {
            label: 'Float Sidebar',
            to: '/starters/sidebar-blank-page-7',
          },
          {
            label: 'Regular Sideblock',
            to: '/starters/sideblock-blank-page-1',
            tag: 'v2.2',
          },
          {
            label: 'Curved Sideblock',
            to: '/starters/sideblock-blank-page-2',
            tag: 'v2.2',
          },
          {
            label: 'Colored Sideblock',
            to: '/starters/sideblock-blank-page-3',
            tag: 'v2.2',
          },
          {
            label: 'Curved Colored',
            to: '/starters/sideblock-blank-page-4',
            tag: 'v2.2',
          },
        ],
      },
    ],
  },
  {
    type: 'megamenu',
    label: 'Layouts',
    id: 'layouts',
    icon: 'lucide:grid',

    children: [
      {
        id: 'lists',
        label: 'Lists',
        icon: 'lucide:align-justify',
        children: [
          {
            label: 'List View V1',
            to: '/navbar/layouts',
          },
          {
            label: 'List View V2',
            to: '/navbar/layouts/list-view-2',
          },
          {
            label: 'List View V3',
            to: '/navbar/layouts/list-view-3',
          },
          {
            label: 'List View V4',
            to: '/navbar/layouts/list-view-4',
          },
        ],
      },
      {
        id: 'flex-lists',
        label: 'Flex Lists',
        icon: 'lucide:list-end',
        children: [
          {
            label: 'Flex List V1',
            to: '/navbar/layouts/list-flex-1',
          },
          {
            label: 'Flex List V2',
            to: '/navbar/layouts/list-flex-2',
          },
          {
            label: 'Flex List V3',
            to: '/navbar/layouts/list-flex-3',
          },
        ],
      },
      {
        id: 'datatable',
        label: 'Datatables',
        icon: 'lucide:table-2',
        children: [
          {
            label: 'Datatable V1',
            to: '/navbar/layouts/list-datatable-1',
          },
          {
            label: 'Datatable V2',
            to: '/navbar/layouts/list-datatable-2',
          },
          {
            label: 'Datatable V3',
            to: '/navbar/layouts/list-datatable-3',
          },
        ],
      },
      {
        id: 'cards',
        label: 'Cards',
        icon: 'lucide:layout-dashboard',
        children: [
          {
            label: 'Card Grid V1',
            to: '/navbar/layouts/grid-cards-1',
          },
          {
            label: 'Card Grid V2',
            to: '/navbar/layouts/grid-cards-2',
          },
          {
            label: 'Card Grid V3',
            to: '/navbar/layouts/grid-cards-3',
          },
          {
            label: 'Card Grid V4',
            to: '/navbar/layouts/grid-cards-4',
          },
        ],
      },
      {
        id: 'tiles',
        label: 'Tiles',
        icon: 'lucide:layout-grid',
        children: [
          {
            label: 'Tile Grid V1',
            to: '/navbar/layouts/grid-tiles-1',
          },
          {
            label: 'Tile Grid V2',
            to: '/navbar/layouts/grid-tiles-2',
          },
          {
            label: 'Tile Grid V3',
            to: '/navbar/layouts/grid-tiles-3',
          },
        ],
      },
      {
        id: 'users',
        label: 'Users',
        icon: 'lucide:layout-list',
        children: [
          {
            label: 'User Grid V1',
            to: '/navbar/layouts/grid-users-1',
          },
          {
            label: 'User Grid V2',
            to: '/navbar/layouts/grid-users-2',
          },
          {
            label: 'User Grid V3',
            to: '/navbar/layouts/grid-users-3',
          },
          {
            label: 'User Grid V4',
            to: '/navbar/layouts/grid-users-4',
          },
        ],
      },
      {
        id: 'personal',
        label: 'Personal',
        icon: 'lucide:layout-panel-left',
        children: [
          {
            label: 'Profile',
            to: '/navbar/layouts/profile-view',
          },
          {
            label: 'Edit Profile',
            to: '/navbar/layouts/profile-edit',
          },
          {
            label: 'Notifications',
            to: '/navbar/layouts/profile-notifications',
          },
          {
            label: 'Settings',
            to: '/navbar/layouts/profile-settings',
          },
        ],
      },
      {
        id: 'pages',
        label: 'Pages',
        icon: 'lucide:square-user',
        children: [
          {
            label: 'Login v1',
            to: '/auth/login',
          },
          {
            label: 'Login v2',
            to: '/auth/login-2',
          },
          {
            label: 'Login v3',
            to: '/auth/login-3',
          },
          {
            label: 'Signup v1',
            to: '/auth/signup-2',
          },
          {
            label: 'Signup v2',
            to: '/auth/signup-3',
          },
          {
            label: 'Signup Flow',
            to: '/auth/signup-1',
          },
        ],
      },
      {
        id: 'subpages',
        label: 'Subpages',
        icon: 'lucide:cloud-cog',
        children: [
          {
            label: 'SaaS Billing',
            to: '/navbar/layouts/saas-billing',
          },
          {
            label: 'Action Page V1',
            to: '/navbar/layouts/action-page-1',
          },
          {
            label: 'Action Page V2',
            to: '/navbar/layouts/action-page-2',
          },
          {
            label: 'Search Results',
            to: '/navbar/layouts/search-results',
          },
          {
            label: 'Empty Search',
            to: '/navbar/layouts/search-empty',
          },
        ],
      },
      {
        id: 'projects',
        label: 'Projects',
        icon: 'lucide:square-dashed-bottom-code',
        children: [
          {
            label: 'Projects V1',
            to: '/navbar/layouts/projects-projects-1',
          },
          {
            label: 'Projects V2',
            to: '/navbar/layouts/projects-projects-2',
          },
          {
            label: 'Projects V3',
            to: '/navbar/layouts/projects-projects-3',
          },
          {
            label: 'Project Details',
            to: '/navbar/layouts/projects-details',
          },
          {
            label: 'Kanban Board',
            to: '/navbar/layouts/kanban-board',
          },
        ],
      },
      {
        id: 'utility',
        label: 'Utility',
        icon: 'lucide:bot',
        children: [
          {
            label: 'Confirm Account',
            to: '/navbar/layouts/utility-account-confirm',
          },
          {
            label: 'Promotion Page',
            to: '/navbar/layouts/utility-promotion',
          },
          {
            label: 'Invoice',
            to: '/navbar/layouts/utility-invoice',
          },
          {
            label: 'App Status',
            to: '/status',
          },
          {
            label: 'Roadmap',
            to: '/roadmap',
            tag: 'v2.4',
          },
        ],
      },
      {
        id: 'onboarding',
        label: 'Onboarding',
        icon: 'lucide:hand-helping',
        children: [
          {
            label: 'Onboarding Welcome',
            to: '/navbar/layouts/onboarding-welcome',
          },
          {
            label: 'Onboarding V1',
            to: '/navbar/layouts/onboarding-page-1',
          },
          {
            label: 'Onboarding V2',
            to: '/navbar/layouts/onboarding-page-2',
          },
          {
            label: 'Onboarding V3',
            to: '/navbar/layouts/onboarding-page-3',
          },
          {
            label: 'Onboarding V4',
            to: '/navbar/layouts/onboarding-page-4',
          },
          {
            label: 'Onboarding V5',
            to: '/navbar/layouts/onboarding-page-5',
          },
        ],
      },
      {
        id: 'error-pages',
        label: 'Error Pages',
        icon: 'lucide:alert-triangle',
        children: [
          {
            label: 'Error 404 V1',
            to: '/error/page-1',
          },
          {
            label: 'Error 404 V2',
            to: '/error/page-2',
          },
          {
            label: 'Error 404 V3',
            to: '/error/page-3',
          },
          {
            label: 'Error 404 V4',
            to: '/error/page-4',
          },
          {
            label: 'Error 500 V1',
            to: '/error/page-5',
          },
        ],
      },
      {
        id: 'placeload',
        label: 'Placeload',
        icon: 'lucide:loader',
        children: [
          {
            label: 'Placeload V1',
            to: '/navbar/layouts/placeload-1',
          },
          {
            label: 'Placeload V2',
            to: '/navbar/layouts/placeload-2',
          },
          {
            label: 'Placeload V3',
            to: '/navbar/layouts/placeload-3',
          },
          {
            label: 'Placeload V4',
            to: '/navbar/layouts/placeload-4',
          },
        ],
      },
    ],
  },
  {
    type: 'megamenu',
    label: 'Components',
    id: 'components',
    icon: 'lucide:cpu',

    children: [

      {
        id: 'general',
        label: 'General',
        icon: 'lucide:home',
        children: [
          {
            label: 'Elements Hub',
            to: '/components/',
          },
          {
            label: 'Colors',
            to: '/components/colors',
          },
          {
            label: 'Helpers',
            to: '/components/helpers',
          },
          {
            to: '/components/content',
            label: 'Content',
          },
          {
            to: '/components/table',
            label: 'Table',
          },
        ],
      },
      {
        id: 'loading',
        label: 'Loading',
        icon: 'lucide:loader-circle',
        children: [
          {
            label: 'VLoader',
            to: '/components/loader',
          },
          {
            label: 'VPlaceload',
            to: '/components/placeload/',
          },
          {
            label: 'VPlaceloadText',
            to: '/components/placeload/text',
          },
          {
            label: 'VPlaceloadAvatar',
            to: '/components/placeload/avatar',
          },
        ],
      },
      {
        label: 'Accordions',
        id: 'accordions',
        icon: 'lucide:square-split-vertical',
        children: [
          {
            to: '/components/accordion/',
            label: 'VAccordion',
          },
          {
            to: '/components/collapse',
            label: 'VCollapse',
          },
          {
            to: '/components/accordion/image',
            label: 'VAccordionImage',
          },
        ],
      },
      {
        id: 'buttons',
        label: 'Buttons',
        icon: 'lucide:square-play',
        children: [
          {
            to: '/components/button',
            label: 'VButton',
          },
          {
            to: '/components/action',
            label: 'VAction',
          },
          {
            to: '/components/icon-button',
            label: 'VIconButton',
          },
        ],
      },
      {
        label: 'Placeholders',
        id: 'placeholders',
        icon: 'lucide:square-dashed-kanban',
        children: [
          {
            to: '/components/placeholder-page',
            label: 'VPlaceholderPage',
          },
          {
            to: '/components/placeholder-section',
            label: 'VPlaceholderSection',
          },
        ],
      },
      {
        id: 'switches',
        label: 'Switches',
        icon: 'lucide:square-check-big',
        children: [
          {
            to: '/components/animated-checkbox',
            label: 'VAnimatedCheckbox',
          },
          {
            to: '/components/switch-block',
            label: 'VSwitchBlock',
          },
          {
            to: '/components/switch-segment',
            label: 'VSwitchSegment',
          },
        ],
      },
      {
        id: 'display',
        label: 'Display',
        icon: 'lucide:combine',
        children: [
          {
            to: '/components/avatar/',
            label: 'VAvatar',
          },
          {
            to: '/components/avatar/stack',
            label: 'VAvatarStack',
          },
          {
            to: '/components/block',
            label: 'VBlock',
          },
          {
            to: '/components/icon-box',
            label: 'VIconBox',
          },
          {
            to: '/components/icon-wrap',
            label: 'VIconWrap',
          },
          {
            to: '/components/snack',
            label: 'VSnack',
          },
          {
            to: '/components/tag',
            label: 'VTag',
          },
          {
            to: '/components/icons/iconify',
            label: 'Iconify',
          },
          {
            to: '/components/icons/line-icons-light',
            label: 'Line Icons Light',
          },
          {
            to: '/components/icons/line-icons-regular',
            label: 'Line Icons Regular',
          },
          {
            to: '/components/icons/font-awesome',
            label: 'Font Awesome 5',
          },
        ],
      },
      {
        id: 'layout',
        label: 'Layout',
        icon: 'lucide:layout-template',
        children: [
          {
            to: '/components/flex',
            label: 'VFlex',
          },
          {
            to: '/components/grid',
            label: 'VGrid',
          },
          {
            to: '/components/breadcrumb',
            label: 'VBreadcrumb',
          },
          {
            to: '/components/tabs',
            label: 'VTabs',
          },
          {
            to: '/components/pagination',
            label: 'VFlexPagination',
          },
          {
            to: '/components/markdown-preview',
            label: 'VMarkdownPreview',
          },
          {
            to: '/components/markdown-editor',
            label: 'VMarkdownEditor',
          },
        ],
      },
      {
        id: 'flex-table',
        label: 'Flex Table',
        icon: 'lucide:table-cells-merge',
        children: [
          {
            to: '/components/flextable/',
            label: 'VFlexTable',
          },
          {
            to: '/components/flextable/columns',
            label: 'Customize columns',
          },
          {
            to: '/components/flextable/slots',
            label: 'Slots usage',
          },
          {
            to: '/components/flextable/render',
            label: 'Render functions (advanced)',
          },
          {
            to: '/components/flextable/wrapper/',
            label: 'VFlexTableWrapper',
          },
          {
            to: '/components/flextable/wrapper/async',
            label: 'Async data (advanced)',
          },
        ],
      },
      {
        id: 'interaction',
        label: 'Basic Interaction',
        icon: 'lucide:mouse-pointer-click',
        children: [
          {
            to: '/components/message',
            label: 'VMessage',
          },
          {
            to: '/components/dropdown',
            label: 'VDropdown',
          },
          {
            label: 'VPlaceloadText',
            to: '/components/placeload/text',
          },
          {
            label: 'VPlaceloadAvatar',
            to: '/components/placeload/avatar',
          },
          {
            to: '/components/modal',
            label: 'VModal',
          },
          {
            to: '/components/progress',
            label: 'VProgress',
          },
          {
            to: '/components/tooltip',
            label: 'VTootlip',
          },
        ],
      },
      {
        id: 'forms',
        label: 'Forms',
        icon: 'lucide:text-cursor-input',
        children: [
          {
            to: '/components/forms/field',
            label: 'VField',
          },
          {
            to: '/components/forms/control',
            label: 'VControl',
          },
          {
            to: '/components/forms/inputs',
            label: 'VInput',
          },
          {
            to: '/components/forms/textarea',
            label: 'VTextarea',
          },
          {
            to: '/components/forms/selects',
            label: 'VSelect',
          },
          {
            to: '/components/checkbox',
            label: 'VCheckbox',
          },
          {
            to: '/components/radio',
            label: 'VRadio',
          },
          {
            to: '/components/forms/range-rating',
            label: 'VRangeRating',
          },
          {
            to: '/components/forms/file',
            label: 'File Input',
          },
        ],
      },
      {
        id: 'addons',
        label: 'Addons',
        icon: 'lucide:puzzle',
        children: [
          {
            to: '/components/addons/calendar',
            label: 'VCalendar & VDatePicker',
          },
          {
            to: '/components/addons/imask-input',
            label: 'VIMaskInput',
          },
          {
            to: '/components/addons/filepond',
            label: 'VFilePond',
          },
          {
            to: '/components/addons/credit-card',
            label: 'VCreditCard',
          },
          {
            to: '/components/addons/vueform-multiselect',
            label: '@vueform/multiselect',
          },
          {
            to: '/components/addons/vueform-slider',
            label: '@vueform/slider',
          },
          {
            to: '/components/addons/ckeditor',
            label: 'CKEditor 5',
          },
          {
            to: '/components/plugins/notif',
            label: 'Notyf',
          },
          {
            to: '/components/plugins/tippy',
            label: 'Tippy',
          },
          {
            to: '/components/plugins/billboard-js',
            label: 'VBillboardJS',
          },
          {
            to: '/components/plugins/photos-swipe',
            label: 'VPhotosSwipe',
          },
          {
            to: '/components/plugins/plyr',
            label: 'VPlyr',
          },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'F.A.Q',
    id: 'faq',
    icon: 'lucide:circle-help',

    children: [
      {
        label: 'Buy Vuero on Themeforest',
        to: 'https://go.cssninja.io/buy-vuero',
        icon: 'lucide:shopping-cart',
      },
      {
        label: 'Documentation',
        to: 'https://docs.cssninja.io/vuero',
        icon: 'lucide:book',
      },
      {
        label: 'Join CSS Ninja on Discord',
        to: 'https://go.cssninja.io/discord',
        icon: 'lucide:message-circle',
      },
      {
        label: 'Unlock Github Access',
        to: 'https://cssninja.io/faq/github-access',
        icon: 'lucide:arrow-right',
      },
    ],
  },
])
</script>

<template>
  <NavbarLayout size="large" :links>
    <!-- Propagating the context to the default slot -->
    <template #default="context">
      <slot v-bind="context" />
    </template>

    <template #logo>
      <RouterLink
        to="/"
      >
        <AnimatedLogo
          width="38px"
          height="38px"
        />
      </RouterLink>
    </template>

    <template #navbar-title>
      <ProjectsQuickDropdown />
      <h1 class="title is-6">
        {{ pageTitle }}
      </h1>
    </template>

    <template #title-mobile>
      <div class="is-flex is-align-items-center">
        <ProjectsQuickDropdown />

        <h1 class="title is-4">
          {{ pageTitle }}
        </h1>
      </div>
    </template>

    <template #toolbar>
      <LayoutSwitcher class="is-hidden-mobile" />
      <ToolbarNotification />
      <ToolbarActivity />
      <ToolbarThemeToggle />
      <ToolbarLanguage />
      <ToolbarUserProfile right class="ml-2 is-hidden-mobile" />
    </template>

    <template #toolbar-mobile>
      <ToolbarNotificationMobile />
      <ToolbarUserProfile right />
    </template>

    <template #megamenu-start>
      <SearchHistory />
    </template>
    <template #megamenu-top>
      <NavsearchInput class="mt-4 mb-2" />
    </template>

    <template #extra>
      <PanelLanguages />
      <PanelActivity />
      <PanelSearch />
      <PanelTask />

      <ClientOnly>
        <VReloadPrompt app-name="Vuero" />
      </ClientOnly>
    </template>
  </NavbarLayout>
</template>
