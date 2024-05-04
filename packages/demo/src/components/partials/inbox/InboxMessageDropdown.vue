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
          icon="lucide:refresh-cw"
        />
        <span>Reset</span>
      </a>
      <a class="dropdown-item">
        <VIcon
          icon="lucide:align-left"
        />
        <span>Spelling</span>
      </a>
      <a class="dropdown-item">
        <VIcon
          icon="lucide:at-sign"
        />
        <span>Mention</span>
      </a>
    </template>
  </VDropdown>
</template>
