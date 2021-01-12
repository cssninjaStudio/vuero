<template>
  <li id="messages-menu">
    <RouterLink id="open-messages" :to="{ name: 'admin-messaging-chat' }">
      <Icon class="sidebar-svg" icon="feather:message-circle" />
    </RouterLink>
  </li>
</template>
