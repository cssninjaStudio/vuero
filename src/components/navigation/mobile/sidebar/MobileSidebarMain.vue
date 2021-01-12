<template>
  <div class="mobile-main-sidebar">
    <div class="inner">
      <ul class="icon-side-menu">
        <li>
          <RouterLink id="home-sidebar-menu-mobile" :to="{ name: 'admin' }">
            <Icon icon="feather:activity" />
          </RouterLink>
        </li>
        <li>
          <RouterLink id="layouts-sidebar-menu-mobile" :to="{ name: 'webapp' }">
            <Icon icon="feather:grid" />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            id="elements-sidebar-menu-mobile"
            :to="{ name: 'elements' }"
          >
            <Icon icon="feather:box" />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            id="components-sidebar-menu-mobile"
            :to="{ name: 'components' }"
          >
            <Icon icon="feather:cpu" />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            id="open-messages-mobile"
            :to="{ name: 'webapp-messaging-chat' }"
          >
            <Icon icon="feather:message-circle" />
          </RouterLink>
        </li>
      </ul>

      <ul class="bottom-icon-side-menu">
        <li>
          <a href="#">
            <Icon icon="feather:search" />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon icon="feather:settings" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
