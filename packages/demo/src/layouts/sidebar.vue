<script setup lang="ts">
import type { SidebarItem } from '/@src/components/layouts/sidebar/sidebar.types'

import LayoutSwitcher from '/@src/components/partials/layout/LayoutSwitcher.vue'
import ToolbarUserProfile from '/@src/components/partials/layout/toolbar/ToolbarUserProfile.vue'

const panels = usePanels()

const links = ref<SidebarItem[]>([
  {
    id: 'dashboard',
    label: 'Dashboards',
    icon: 'lucide:activity',

    type: 'subsidebar',
    subsidebar: {
      label: 'Dashboards',
      items: [
        {
          type: 'collapse',
          id: 'personal',
          label: 'Personal',
          children: [
            {
              label: 'Personal V1',
              to: '/sidebar/dashboards',
              icon: 'lnil lnil-analytics-alt-1',
            },
            {
              label: 'Personal V2',
              to: '/sidebar/dashboards/personal-2',
              icon: 'lnil lnil-pie-chart',
            },
            {
              label: 'Personal V3',
              to: '/sidebar/dashboards/personal-3',
              icon: 'lnil lnil-stats-up',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'finance',
          label: 'Finance',
          children: [
            {
              label: 'Analytics Dashboard',
              to: '/sidebar/dashboards/analytics',
              icon: 'lnil lnil-analytics-alt-1',
            },
            {
              label: 'Stocks Dashboard',
              to: '/sidebar/dashboards/stocks',
              icon: 'lnil lnil-stats-up',
            },
            {
              label: 'Sales Dashboard',
              to: '/sidebar/dashboards/sales',
              icon: 'lnil lnil-credit-card',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'banking',
          label: 'Banking',
          children: [
            {
              label: 'Banking V1',
              to: '/sidebar/dashboards/banking-1',
              icon: 'lnil lnil-bank',
            },
            {
              label: 'Banking V2',
              to: '/sidebar/dashboards/banking-2',
              icon: 'lnil lnil-bank',
            },
            {
              label: 'Banking V3',
              to: '/sidebar/dashboards/banking-3',
              icon: 'lnil lnil-bank',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'business',
          label: 'Business',
          children: [
            {
              label: 'Flights Booking',
              to: '/sidebar/dashboards/flights',
              icon: 'lnil lnil-plane-alt',
            },
            {
              label: 'Company Board',
              to: '/sidebar/dashboards/company',
              icon: 'lnil lnil-apartment',
            },
            {
              label: 'HR Board',
              to: '/sidebar/dashboards/human-ressources',
              icon: 'lnil lnil-users-alt',
            },
            {
              label: 'Course Dashboard',
              to: '/sidebar/dashboards/course',
              icon: 'lnil lnil-graduate',
            },
            {
              label: 'Jobs Dashboard',
              to: '/sidebar/dashboards/jobs',
              icon: 'lnil lnil-briefcase',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'lifestyle',
          label: 'Lifestyle',
          children: [
            {
              label: 'Influencer',
              to: '/sidebar/dashboards/influencer',
              icon: 'lnil lnil-cardiology',
            },
            {
              label: 'Hobbies',
              to: '/sidebar/dashboards/hobbies',
              icon: 'lnil lnil-cloud-sun',
            },
            {
              label: 'Health',
              to: '/sidebar/dashboards/health',
              icon: 'lnil lnil-hospital-alt-3',
            },
            {
              label: 'Writer',
              to: '/sidebar/dashboards/writer',
              icon: 'lnil lnil-books',
            },
            {
              label: 'Video',
              to: '/sidebar/dashboards/video',
              icon: 'lnil lnil-video-alt-1',
            },
            {
              label: 'Soccer Dashboard',
              to: '/sidebar/dashboards/soccer',
              icon: 'lnil lnil-tshirt',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'ecommerce',
          label: 'Ecommerce',
          children: [
            {
              label: 'Ecommerce V1',
              to: '/sidebar/dashboards/ecommerce-1',
              icon: 'lnil lnil-cart',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'apps',
          label: 'Apps',
          children: [
            {
              label: 'Food Delivery',
              to: '/sidebar/dashboards/food-delivery',
              icon: 'lnil lnil-pizza',
            },
            {
              label: 'Maps V1',
              to: '/sidebar/maps-1',
              icon: 'lnil lnil-map',
              tag: 'v1.2',
            },
            {
              label: 'Maps V2',
              to: '/sidebar/maps-2',
              icon: 'lnil lnil-map',
              tag: 'v1.2',
            },
            {
              label: 'Inbox',
              to: '/inbox',
              icon: 'lnil lnil-envelope',
            },
            {
              label: 'Messaging V1',
              to: '/messaging-v1',
              icon: 'lnil lnil-bubble',
            },
            {
              label: 'Messaging V2',
              to: '/messaging-v2',
              icon: 'lnil lnil-bubble',
            },
          ],
        },
        {
          type: 'divider',
        },
        {
          type: 'link',
          label: 'Wizard',
          to: '/wizard-v1',
        },
        {
          type: 'divider',
        },
        {
          type: 'collapse',
          id: 'charts',
          label: 'Charts',
          children: [
            {
              label: 'Apex Charts',
              to: '/sidebar/dashboards/charts-apex',
              icon: 'lnil lnil-pie-chart-alt',
            },
            {
              label: 'Billboard JS',
              to: '/sidebar/dashboards/charts-billboardsjs',
              icon: 'lnil lnil-bar-chart',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'widgets',
          label: 'Widgets',
          children: [
            {
              label: 'UI Widgets',
              to: '/sidebar/dashboards/widgets-sample-ui',
              icon: 'lnil lnil-layout-alt-1',
            },
            {
              label: 'Creative Widgets',
              to: '/sidebar/dashboards/widgets-sample-creative',
              icon: 'lnil lnil-layout-alt-2',
            },
            {
              label: 'List Widgets',
              to: '/sidebar/dashboards/widgets-sample-list',
              icon: 'lnil lnil-layout-alt-1',
            },
            {
              label: 'Stat Widgets',
              to: '/sidebar/dashboards/widgets-sample-stats',
              icon: 'lnil lnil-layout-alt-2',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'starters',
          label: 'Starters',
          children: [
            {
              label: 'Regular Sidebar',
              to: '/starters/sidebar-blank-page-1',
              icon: 'lnil lnil-layout',
            },
            {
              label: 'Curved Sidebar',
              to: '/starters/sidebar-blank-page-2',
              icon: 'lnil lnil-layout',
            },
            {
              label: 'Colored Sidebar',
              to: '/starters/sidebar-blank-page-3',
              icon: 'lnil lnil-layout',
            },
            {
              label: 'Curved Colored Sidebar',
              to: '/starters/sidebar-blank-page-4',
              icon: 'lnil lnil-layout',
            },
            {
              label: 'Labels Sidebar',
              to: '/starters/sidebar-blank-page-5',
              icon: 'lnil lnil-layout',
            },
            {
              label: 'Labels Hover Sidebar',
              to: '/starters/sidebar-blank-page-6',
              icon: 'lnil lnil-layout',
            },
            {
              label: 'Float Sidebar',
              to: '/starters/sidebar-blank-page-7',
              icon: 'lnil lnil-layout',
            },
            {
              label: 'Regular Sideblock',
              to: '/starters/sideblock-blank-page-1',
              icon: 'lnil lnil-layout',
              tag: 'v2.2',
            },
            {
              label: 'Curved Sideblock',
              to: '/starters/sideblock-blank-page-2',
              icon: 'lnil lnil-layout',
              tag: 'v2.2',
            },
            {
              label: 'Colored Sideblock',
              to: '/starters/sideblock-blank-page-3',
              icon: 'lnil lnil-layout',
              tag: 'v2.2',
            },
            {
              label: 'Curved Colored',
              to: '/starters/sideblock-blank-page-4',
              icon: 'lnil lnil-layout',
              tag: 'v2.2',
            },
            {
              label: 'Regular Navbar',
              to: '/starters/navbar-blank-page-1',
              icon: 'lnil lnil-layout-alt-1',
            },
            {
              label: 'Fading Navbar',
              to: '/starters/navbar-blank-page-2',
              icon: 'lnil lnil-layout-alt',
            },
            {
              label: 'Colored Navbar',
              to: '/starters/navbar-blank-page-3',
              icon: 'lnil lnil-layout-alt-1',
            },
            {
              label: 'Dropdown Navbar',
              to: '/starters/navbar-blank-page-4',
              icon: 'lnil lnil-layout-alt-1',
            },
            {
              label: 'Colored Dropdown',
              to: '/starters/navbar-blank-page-5',
              icon: 'lnil lnil-layout-alt-1',
            },
            {
              label: 'Clean Navbar',
              to: '/starters/navbar-blank-page-6',
              icon: 'lnil lnil-layout-alt-1',
            },
            {
              label: 'Clean Center Navbar',
              to: '/starters/navbar-blank-page-7',
              icon: 'lnil lnil-layout-alt-1',
            },
            {
              label: 'Clean Fade Navbar',
              to: '/starters/navbar-blank-page-8',
              icon: 'lnil lnil-layout-alt-1',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'layout',
    label: 'Layouts',
    icon: 'lucide:grid',

    type: 'subsidebar',
    subsidebar: {
      label: 'Layouts',
      items: [
        {
          type: 'collapse',
          id: 'lists',
          label: 'Lists',
          children: [
            {
              label: 'List View V1',
              to: '/sidebar/layouts',
              icon: 'lnil lnil-list-alt',
            },
            {
              label: 'List View V2',
              to: '/sidebar/layouts/list-view-2',
              icon: 'lnil lnil-list-alt',
            },
            {
              label: 'List View V3',
              to: '/sidebar/layouts/list-view-3',
              icon: 'lnil lnil-list-alt',
            },
            {
              label: 'List View V4',
              to: '/sidebar/layouts/list-view-4',
              icon: 'lnil lnil-list-alt',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'flex-lists',
          label: 'Flex Lists',
          children: [
            {
              label: 'Flex List V1',
              to: '/sidebar/layouts/list-flex-1',
              icon: 'lnil lnil-list-alt-1',
            },
            {
              label: 'Flex List V2',
              to: '/sidebar/layouts/list-flex-2',
              icon: 'lnil lnil-list-alt-1',
            },
            {
              label: 'Flex List V3',
              to: '/sidebar/layouts/list-flex-3',
              icon: 'lnil lnil-list-alt-1',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'datatables',
          label: 'Datatables',
          children: [
            {
              label: 'Datatable V1',
              to: '/sidebar/layouts/list-datatable-1',
              icon: 'lnil lnil-layout-alt',
            },
            {
              label: 'Datatable V2',
              to: '/sidebar/layouts/list-datatable-2',
              icon: 'lnil lnil-layout-alt',
            },
            {
              label: 'Datatable V3',
              to: '/sidebar/layouts/list-datatable-3',
              icon: 'lnil lnil-layout-alt',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'form-layouts',
          label: 'Form Layouts',
          children: [
            {
              label: 'Form Layout V1',
              to: '/sidebar/layouts/form-layouts-1',
              icon: 'lnil lnil-passport',
            },
            {
              label: 'Form Layout V2',
              to: '/sidebar/layouts/form-layouts-2',
              icon: 'lnil lnil-passport',
            },
            {
              label: 'Form Layout V3',
              to: '/sidebar/layouts/form-layouts-3',
              icon: 'lnil lnil-passport',
            },
            {
              label: 'Form Layout V4',
              to: '/sidebar/layouts/form-layouts-4',
              icon: 'lnil lnil-passport',
            },
            {
              label: 'Form Layout V5',
              to: '/sidebar/layouts/form-layouts-5',
              icon: 'lnil lnil-passport',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'placeload',
          label: 'Placeload',
          children: [
            {
              label: 'Placeload V1',
              to: '/sidebar/layouts/placeload-1',
              icon: 'lnil lnil-reload',
            },
            {
              label: 'Placeload V2',
              to: '/sidebar/layouts/placeload-2',
              icon: 'lnil lnil-reload',
            },
            {
              label: 'Placeload V3',
              to: '/sidebar/layouts/placeload-3',
              icon: 'lnil lnil-reload',
            },
            {
              label: 'Placeload V4',
              to: '/sidebar/layouts/placeload-4',
              icon: 'lnil lnil-reload',
            },
          ],
        },
        {
          type: 'divider',
        },
        {
          type: 'collapse',
          id: 'card-grid',
          label: 'Card Grid',
          children: [
            {
              label: 'Card Grid V1',
              to: '/sidebar/layouts/grid-cards-1',
              icon: 'lnil lnil-grid-alt',
            },
            {
              label: 'Card Grid V2',
              to: '/sidebar/layouts/grid-cards-2',
              icon: 'lnil lnil-grid-alt',
            },
            {
              label: 'Card Grid V3',
              to: '/sidebar/layouts/grid-cards-3',
              icon: 'lnil lnil-grid-alt',
            },
            {
              label: 'Card Grid V4',
              to: '/sidebar/layouts/grid-cards-4',
              icon: 'lnil lnil-grid-alt',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'tile-grid',
          label: 'Tile Grid',
          children: [
            {
              label: 'Tile Grid V1',
              to: '/sidebar/layouts/grid-tiles-1',
              icon: 'lnil lnil-layout-alt-2',
            },
            {
              label: 'Tile Grid V2',
              to: '/sidebar/layouts/grid-tiles-2',
              icon: 'lnil lnil-layout-alt-2',
            },
            {
              label: 'Tile Grid V3',
              to: '/sidebar/layouts/grid-tiles-3',
              icon: 'lnil lnil-layout-alt-2',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'user-grid',
          label: 'User Grid',
          children: [
            {
              label: 'User Grid V1',
              to: '/sidebar/layouts/grid-users-1',
              icon: 'lnil lnil-users-alt',
            },
            {
              label: 'User Grid V2',
              to: '/sidebar/layouts/grid-users-2',
              icon: 'lnil lnil-users-alt',
            },
            {
              label: 'User Grid V3',
              to: '/sidebar/layouts/grid-users-3',
              icon: 'lnil lnil-users-alt',
            },
            {
              label: 'User Grid V4',
              to: '/sidebar/layouts/grid-users-4',
              icon: 'lnil lnil-users-alt',
            },
          ],
        },
        {
          type: 'divider',
        },
        {
          type: 'collapse',
          id: 'personal',
          label: 'Personal',
          children: [
            {
              label: 'Profile',
              to: '/sidebar/layouts/profile-view',
              icon: 'lnil lnil-user-alt',
            },
            {
              label: 'Edit Profile',
              to: '/sidebar/layouts/profile-edit',
              icon: 'lnil lnil-pencil',
            },
            {
              label: 'Notifications',
              to: '/sidebar/layouts/profile-notifications',
              icon: 'lnil lnil-notification',
            },
            {
              label: 'Settings',
              to: '/sidebar/layouts/profile-settings',
              icon: 'lnil lnil-cog',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'pages',
          label: 'Pages',
          children: [
            {
              label: 'Login v1',
              to: '/auth/login',
              icon: 'lnil lnil-pointer-right',
            },
            {
              label: 'Login v2',
              to: '/auth/login-2',
              icon: 'lnil lnil-pointer-right',
            },
            {
              label: 'Login v3',
              to: '/auth/login-3',
              icon: 'lnil lnil-pointer-right',
            },
            {
              label: 'Signup v1',
              to: '/auth/signup-2',
              icon: 'lnil lnil-crown',
            },
            {
              label: 'Signup v2',
              to: '/auth/signup-3',
              icon: 'lnil lnil-crown',
            },
            {
              label: 'Signup Flow',
              to: '/auth/signup-1',
              icon: 'lnil lnil-crown',
            },
            {
              label: 'Search Results',
              to: '/sidebar/layouts/search-results',
              icon: 'lnil lnil-search-alt',
            },
            {
              label: 'Empty Search',
              to: '/sidebar/layouts/search-empty',
              icon: 'lnil lnil-search-alt',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'subpages',
          label: 'Subpages',
          children: [
            {
              label: 'SaaS Billing',
              to: '/sidebar/layouts/saas-billing',
              icon: 'lnil lnil-credit-card',
            },
            {
              label: 'Action Page V1',
              to: '/sidebar/layouts/action-page-1',
              icon: 'lnil lnil-thunderbolt',
            },
            {
              label: 'Action Page V2',
              to: '/sidebar/layouts/action-page-2',
              icon: 'lnil lnil-thunderbolt',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'projects',
          label: 'Projects',
          children: [
            {
              label: 'Projects V1',
              to: '/sidebar/layouts/projects-projects-1',
              icon: 'lnil lnil-grid-alt',
            },
            {
              label: 'Projects V2',
              to: '/sidebar/layouts/projects-projects-2',
              icon: 'lnil lnil-grid-alt',
            },
            {
              label: 'Projects V3',
              to: '/sidebar/layouts/projects-projects-3',
              icon: 'lnil lnil-grid-alt',
            },
            {
              label: 'Project Details',
              to: '/sidebar/layouts/projects-details',
              icon: 'lnil lnil-layout',
            },
            {
              label: 'Kanban Board',
              to: '/sidebar/layouts/kanban-board',
              icon: 'lnil lnil-layout-alt-1',
            },
          ],
        },
        {
          type: 'divider',
        },
        {
          type: 'collapse',
          id: 'utility',
          label: 'Utility',
          children: [
            {
              label: 'Confirm Account',
              to: '/sidebar/layouts/utility-account-confirm',
              icon: 'lnil lnil-thunderbolt',
            },
            {
              label: 'Promotion Page',
              to: '/sidebar/layouts/utility-promotion',
              icon: 'lnil lnil-magnet',
            },
            {
              label: 'Invoice',
              to: '/sidebar/layouts/utility-invoice',
              icon: 'lnil lnil-calculator-alt',
            },
            {
              label: 'App Status',
              to: '/status',
              icon: 'lnil lnil-checkmark-circle',
            },
            {
              label: 'Roadmap',
              to: '/roadmap',
              icon: 'lnil lnil-pyramids',
              tag: 'v2.4',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'onboarding',
          label: 'Onboarding',
          children: [
            {
              label: 'Onboarding Welcome',
              to: '/sidebar/layouts/onboarding-welcome',
              icon: 'lnil lnil-door-alt',
            },
            {
              label: 'Onboarding V1',
              to: '/sidebar/layouts/onboarding-page-1',
              icon: 'lnil lnil-train',
            },
            {
              label: 'Onboarding V2',
              to: '/sidebar/layouts/onboarding-page-2',
              icon: 'lnil lnil-train-alt',
            },
            {
              label: 'Onboarding V3',
              to: '/sidebar/layouts/onboarding-page-3',
              icon: 'lnil lnil-car',
            },
            {
              label: 'Onboarding V4',
              to: '/sidebar/layouts/onboarding-page-4',
              icon: 'lnil lnil-car-alt',
            },
            {
              label: 'Onboarding V5',
              to: '/sidebar/layouts/onboarding-page-5',
              icon: 'lnil lnil-train',
            },
          ],
        },
        {
          type: 'collapse',
          id: 'error-pages',
          label: 'Error Pages',
          children: [
            {
              label: 'Error 404 V1',
              to: '/error/page-1',
              icon: 'lnil lnil-cross-circle',
            },
            {
              label: 'Error 404 V2',
              to: '/error/page-2',
              icon: 'lnil lnil-cross-circle',
            },
            {
              label: 'Error 404 V3',
              to: '/error/page-3',
              icon: 'lnil lnil-cross-circle',
            },
            {
              label: 'Error 404 V4',
              to: '/error/page-4',
              icon: 'lnil lnil-cross-circle',
            },
            {
              label: 'Error 500 V1',
              to: '/error/page-5',
              icon: 'lnil lnil-cross-circle',
            },
          ],
        },
      ],
    },
  },
  {
    id: 'components',
    label: 'Components',
    icon: 'lucide:cpu',

    type: 'subsidebar',
    subsidebar: {
      label: 'Components',
      items: [
        {
          type: 'link',
          to: '/components/',
          label: 'Components Hub',
        },
        {
          type: 'link',
          to: '/components/colors',
          label: 'Colors',
        },
        {
          type: 'link',
          to: '/components/helpers',
          label: 'Helpers',
        },
        {
          type: 'link',
          to: '/components/content',
          label: 'Content',
        },
        {
          type: 'link',
          to: '/components/table',
          label: 'Table',
        },
        {
          type: 'collapse',
          id: 'icons',
          label: 'Icons',
          children: [
            {
              to: '/components/icons/iconify',
              label: 'Iconify',
              icon: 'lucide:circle',
            },
            {
              to: '/components/icons/line-icons-light',
              label: 'Line Icons Light',
              icon: 'lucide:circle',
            },
            {
              to: '/components/icons/line-icons-regular',
              label: 'Line Icons Regular',
              icon: 'lucide:circle',
            },
            {
              to: '/components/icons/font-awesome',
              label: 'Font Awesome 5',
              icon: 'lucide:circle',
            },
          ],
        },
        {
          type: 'divider',
          label: 'Interaction',
        },
        {
          type: 'link',
          to: '/components/dropdown',
          label: 'VDropdown',
        },
        {
          type: 'link',
          to: '/components/loader',
          label: 'VLoader',
        },
        {
          type: 'link',
          to: '/components/placeload/',
          label: 'VPlaceload',
        },
        {
          type: 'link',
          to: '/components/placeload/text',
          label: 'VPlaceloadText',
        },
        {
          type: 'link',
          to: '/components/placeload/avatar',
          label: 'VPlaceloadAvatar',
        },
        {
          type: 'link',
          to: '/components/message',
          label: 'VMessage',
        },
        {
          type: 'link',
          to: '/components/modal',
          label: 'VModal',
        },
        {
          type: 'link',
          to: '/components/progress',
          label: 'VProgress',
        },
        {
          type: 'link',
          to: '/components/tooltip',
          label: 'VTootlip',
        },
        {
          type: 'collapse',
          id: 'buttons',
          label: 'Buttons',
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
          type: 'collapse',
          id: 'forms',
          label: 'Forms',
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
          type: 'collapse',
          id: 'switches',
          label: 'Switches',
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
          type: 'divider',
          label: 'Display',
        },
        {
          type: 'link',
          to: '/components/avatar/',
          label: 'VAvatar',
        },
        {
          type: 'link',
          to: '/components/avatar/stack',
          label: 'VAvatarStack',
        },
        {
          type: 'link',
          to: '/components/block',
          label: 'VBlock',
        },
        {
          type: 'link',
          to: '/components/icon-box',
          label: 'VIconBox',
        },
        {
          type: 'link',
          to: '/components/icon-wrap',
          label: 'VIconWrap',
        },
        {
          type: 'link',
          to: '/components/snack',
          label: 'VSnack',
        },
        {
          type: 'link',
          to: '/components/tag',
          label: 'VTag',
        },
        {
          type: 'link',
          to: '/components/flex',
          label: 'VFlex',
        },
        {
          type: 'link',
          to: '/components/grid',
          label: 'VGrid',
        },
        {
          type: 'link',
          to: '/components/breadcrumb',
          label: 'VBreadcrumb',
        },
        {
          type: 'link',
          to: '/components/tabs',
          label: 'VTabs',
        },
        {
          type: 'link',
          to: '/components/pagination',
          label: 'VFlexPagination',
        },
        {
          type: 'collapse',
          label: 'VFlexTable',
          id: 'flextable',
          children: [
            {
              to: '/components/flextable/',
              label: 'Basic usage',
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
          type: 'collapse',
          label: 'Accordions',
          id: 'accordions',
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
          type: 'collapse',
          label: 'Cards',
          id: 'cards',
          children: [
            {
              to: '/components/card/',
              label: 'VCard',
            },
            {
              to: '/components/card/action',
              label: 'VCardAction',
            },
            {
              to: '/components/card/advanced',
              label: 'VCardAdvanced',
            },
            {
              to: '/components/card/media',
              label: 'VCardMedia',
            },
            {
              to: '/components/card/social',
              label: 'VCardSocial',
            },
          ],
        },
        {
          type: 'collapse',
          label: 'Placeholders',
          id: 'placeholders',
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
          type: 'divider',
        },
        {
          type: 'collapse',
          id: 'addons',
          label: 'Addons',
          children: [
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
            {
              to: '/components/markdown-preview',
              label: 'VMarkdownPreview',
            },
            {
              to: '/components/markdown-editor',
              label: 'VMarkdownEditor',
            },
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
          ],
        },
      ],
    },
  },
  {
    id: 'open-messages',
    label: 'Inbox',
    icon: 'lucide:message-circle',

    type: 'link',
    to: '/messaging-v1',
  },
])

const linksBottom = ref<SidebarItem[]>([
  {
    id: 'layout-switcher',
    type: 'component',
    label: 'Switch layout',
    hideMobile: true,
    component: markRaw(LayoutSwitcher),
  },
  {
    id: 'search',
    type: 'action',
    label: 'Search',
    icon: 'lucide:search',
    onClick() {
      panels.setActive('search')
    },
  },
  {
    id: 'user-profile-dropdown',
    type: 'component',
    hideMobile: true,
    component: () => h(ToolbarUserProfile, { end: true }),
  },
])
</script>

<template>
  <SidebarLayout
    :links
    :links-bottom="linksBottom"
    default-sidebar="dashboard"
  >
    <!-- Propagating the context to the default slot -->
    <template #default="context">
      <slot v-bind="context" />
    </template>

    <!-- Expose the page-heading slot -->
    <template #page-heading="context">
      <slot name="page-heading" v-bind="context" />
    </template>

    <template #logo>
      <RouterLink to="/">
        <AnimatedLogo width="36px" />
      </RouterLink>
    </template>

    <template #subsidebar-title="{ activeSubsidebar }">
      <ProjectsQuickDropdown v-if="activeSubsidebar?.id === 'dashboard'" />

      <h3>{{ activeSubsidebar?.subsidebar.label }}</h3>
    </template>

    <template #toolbar>
      <ToolbarThemeToggle />
      <ToolbarLanguage />
      <ToolbarNotification />
      <ToolbarActivity />
    </template>

    <template #toolbar-mobile>
      <ToolbarNotificationMobile />
      <ToolbarUserProfile right />
    </template>

    <template #extra>
      <CircularMenu />

      <PanelLanguages />
      <PanelActivity />
      <PanelSearch />
      <PanelTask />

      <ClientOnly>
        <VReloadPrompt app-name="Vuero" />
      </ClientOnly>
    </template>
  </SidebarLayout>
</template>
