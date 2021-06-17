<script setup lang="ts">
import { ref } from 'vue'
import useDropdown from '/@src/composable/useDropdown'
const dropdownElement = ref<HTMLElement | null>(null)
const dropdown = useDropdown(dropdownElement)
</script>

<template>
  <div class="compose-panel">
    <!-- Header -->
    <div class="header-area">
      <h2 class="panel-title">New Message</h2>
      <div
        ref="dropdownElement"
        class="dropdown inbox-dropdown dropdown-trigger is-right"
      >
        <div>
          <button class="button" @click="dropdown.toggle">
            <span class="icon is-small">
              <i aria-hidden="true" class="material-icons">
                keyboard_arrow_down</i
              >
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <i aria-hidden="true" class="sl sl-icon-doc"></i>
              <span>Load template</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <i aria-hidden="true" class="sl sl-icon-eyeglass"></i>
              <span>Spelling</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <i aria-hidden="true" class="sl sl-icon-pencil"></i>
              <span>Signature</span>
            </a>
          </div>
        </div>
      </div>
      <a class="inbox-action compose-panel-close">
        <i aria-hidden="true" class="material-icons">close</i>
      </a>
    </div>
    <!--Panel body-->
    <div class="panel-inner has-slimscroll">
      <!--Field-->
      <div class="field-wrap">
        <div class="field">
          <label>To:</label>
          <div class="control">
            <input
              type="text"
              class="input compose-input"
              placeholder="ex: jenny@gmail.com"
            />
          </div>
        </div>
      </div>
      <!--Field-->
      <div class="field-wrap">
        <div class="field">
          <label>Cc:</label>
          <div class="control">
            <input type="text" class="input compose-input" />
          </div>
        </div>
      </div>
      <!--Field-->
      <div class="field-wrap">
        <div class="field">
          <label>Subject:</label>
          <div class="control">
            <input
              type="text"
              class="input compose-input"
              placeholder="ex: Business meeting"
            />
          </div>
        </div>
      </div>
      <!--Field-->
      <div class="field-wrap">
        <div class="field">
          <label class="is-vhidden">Message:</label>
          <div class="control">
            <textarea
              class="textarea"
              rows="9"
              placeholder="Write your message..."
            ></textarea>
            <button type="button" class="button send-button">
              Send Message
            </button>
            <a class="attacv-button">
              <i aria-hidden="true" class="sl sl-icon-paper-clip"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
