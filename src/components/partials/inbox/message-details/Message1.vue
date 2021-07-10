<script setup lang="ts">
import { defineEmit, ref } from 'vue'

import useDropdown from '/@src/composable/useDropdown'
import { isMediumScreen } from '/@src/state/responsiveState'

const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
  mobileMessageOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:mobileMessageOpen'])

const dropdownElement1 = ref<HTMLElement | null>(null)
const dropdown1 = useDropdown(dropdownElement1)

const dropdownElement2 = ref<HTMLElement | null>(null)
const dropdown2 = useDropdown(dropdownElement2)
</script>

<template>
  <div
    class="inbox-message-details"
    :class="[
      mobileMessageOpen && selected && 'mobile-active tablet-active',
      isMediumScreen && !selected && 'is-hidden',
    ]"
  >
    <div class="header-area">
      <img
        class="sender-pic"
        src="/demo/avatars/25.jpg"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
      <div class="message-meta">
        <span class="message-title">
          Important project review next thursday
        </span>
        <span class="sender-email">&lt;melany@vuero.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i>
        <span>2</span>
      </div>
      <div
        ref="dropdownElement1"
        class="dropdown inbox-dropdown dropdown-trigger is-right"
      >
        <div>
          <button class="button" @click="dropdown1.toggle">
            <span class="icon is-small">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:more-vertical"
              ></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:bookmark"
              ></i>
              <span>Bookmark</span>
            </a>
            <a class="dropdown-item">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:share-2"
              ></i>
              <span>Share message</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:thumbs-down"
              ></i>
              <span>Mark as spam</span>
            </a>
          </div>
        </div>
      </div>
      <a
        class="inbox-action inbox-close-details-mobile"
        @click="emit('update:mobileMessageOpen', false)"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </a>
    </div>
    <!--Message-->
    <div class="message-wrapper has-slimscroll">
      <div class="message-inner">
        <div class="message-head">
          <div class="info">
            <span>Sent on</span>
            <span>Oct 21 2020, at 02:33pm</span>
          </div>
          <div class="message-actions">
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:corner-up-left"
              ></i>
            </a>
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:file-text"
              ></i>
            </a>
            <a class="inbox-action">
              <i aria-hidden="true" class="iconify" data-icon="feather:tag"></i>
            </a>
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:message-circle"
              ></i>
            </a>
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:lock"
              ></i>
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>Hey man,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec igitur
            Epicuri non probo, inquam. Nihil sane.
            <strong>Efficiens dici potest.</strong>
            <em>Urgent tamen et nihil remittunt.</em> Ea possunt paria non esse.
            Duo Reges: constructio interrete.
          </p>
          <ul>
            <li>
              Ab his oratores, ab his imperatores ac rerum publicarum principes
              extiterunt.
            </li>
            <li>Eiuro, inquit adridens, iniquum, hac quidem de re;</li>
          </ul>
          <p>
            Tum Triarius: Posthac quidem, inquit, audacius. Quodsi ipsam
            honestatem undique pertectam atque absolutam. Comprehensum, quod
            cognitum non habet?
          </p>
          <p>
            <em>Nonne igitur tibi videntur, inquit, mala?</em> Poterat autem
            inpune; Nunc omni virtuti vitium contrario nomine opponitur.
          </p>
          <p>Sincerely,</p>
          <p>Melany Wallace - Cofounder</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>budget_draft.xlsx</span>
            <div class="download-icon">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:arrow-down"
              ></i>
            </div>
          </div>
          <div class="attachment">
            <span>project-notes.docx</span>
            <div class="download-icon">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:arrow-down"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="/demo/avatars/8.jpg"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/150x150'
              "
            />
            <div class="reply-details">
              <span>Reply as</span>
              <span>erik@vuero.io</span>
            </div>
            <div
              ref="dropdownElement2"
              class="dropdown inbox-dropdown dropdown-trigger is-right"
            >
              <div>
                <button class="button" @click="dropdown2.toggle">
                  <span class="icon is-small">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:more-vertical"
                    ></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:refresh-cw"
                    ></i>
                    <span>Reset</span>
                  </a>
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:align-left"
                    ></i>
                    <span>Spelling</span>
                  </a>
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:at-sign"
                    ></i>
                    <span>Mention</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--textarea-->
          <div class="control">
            <textarea
              class="textarea"
              rows="6"
              placeholder="Type your message..."
            ></textarea>
            <button type="button" class="button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
