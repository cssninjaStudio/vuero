<template>
  <li id="messages-menu">
    <RouterLink id="open-messages" :to="{ name: 'messaging-v1' }">
      <Icon class="sidebar-svg" icon="feather:message-circle" />
    </RouterLink>
  </li>
</template>
