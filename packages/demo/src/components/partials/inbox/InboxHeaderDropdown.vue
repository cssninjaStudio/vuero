<template>
  <VDropdown right class="inbox-dropdown">
    <template #button="{ toggle }">
      <button
        class="button"
        tabindex="0"
        @keydown.enter.prevent="toggle"
        @click="toggle"
      >
        <span class="icon is-small">
          <VIcon
            icon="lucide:more-vertical"
          />
        </span>
      </button>
    </template>

    <template #content>
      <a class="dropdown-item">
        <VIcon
          icon="lucide:bookmark"
        />
        <span>Bookmark</span>
      </a>
      <a class="dropdown-item">
        <VIcon
          icon="lucide:share-2"
        />
        <span>Share message</span>
      </a>
      <hr class="dropdown-divider">
      <a class="dropdown-item">
        <VIcon
          icon="lucide:thumbs-down"
        />
        <span>Mark as spam</span>
      </a>
    </template>
  </VDropdown>
</template>
