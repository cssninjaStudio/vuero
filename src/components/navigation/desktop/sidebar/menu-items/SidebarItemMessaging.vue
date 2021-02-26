<template>
  <li id="messages-menu">
    <RouterLink
      id="open-messages"
      :to="{ name: 'messaging-v1' }"
      data-content="Messaging"
    >
      <i class="iconify sidebar-svg" data-icon="feather:message-circle"></i>
    </RouterLink>
  </li>
</template>
