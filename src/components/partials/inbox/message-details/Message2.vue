<script setup lang="ts">
import { defineEmit, defineProps, ref } from 'vue'

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

const emit = defineEmit(['update:mobileMessageOpen'])

const dropdownElement1 = ref<HTMLElement | null>(null)
const dropdown1 = useDropdown(dropdownElement1)

const dropdownElement2 = ref<HTMLElement | null>(null)
const dropdown2 = useDropdown(dropdownElement2)
</script>

<template>
  <div
    :class="[
      mobileMessageOpen && selected && 'mobile-active tablet-active',
      isMediumScreen && !selected && 'is-hidden',
    ]"
    class="inbox-message-details"
  >
    <div class="header-area">
      <img
        class="sender-pic"
        src="/demo/avatars/32.jpg"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
      <div class="message-meta">
        <span class="message-title">
          I couldn't catch up on last time's dinner</span
        >
        <span class="sender-email">&lt;jonathan@vuero.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i>
        <span>4</span>
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
            <span>Oct 22 2020, at 09:17am</span>
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
          <p>Hello dude,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare
            conare, quaeso. Prave, nequiter, turpiter cenabat;
            <em>Quid igitur, inquit, eos responsuros putas?</em> Erit enim
            mecum, si tecum erit.
          </p>
          <p>
            Ratio enim nostra consentit, pugnat oratio. Age sane, inquam. Duo
            Reges: constructio interrete. Beatus sibi videtur esse moriens. Sed
            ego in hoc resisto; <em>Idemne, quod iucunde?</em>
          </p>
          <p>
            <strong>Tamen a proposito, inquam, aberramus.</strong> Quid de
            Pythagora?
          </p>
          <p>
            Cur deinde Metrodori liberos commendas? Non dolere, inquam, istud
            quam vim habeat postea videro; Pauca mutat vel plura sane; Quamquam
            ab iis philosophiam et omnes ingenuas disciplinas habemus;
          </p>

          <p>Elie Daniels</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>presentation.ppt</span>
            <div class="download-icon">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:arrow-down"
              ></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-1.jpg</span>
            <div class="download-icon">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:arrow-down"
              ></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-2.jpg</span>
            <div class="download-icon">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:arrow-down"
              ></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-3.jpg</span>
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
