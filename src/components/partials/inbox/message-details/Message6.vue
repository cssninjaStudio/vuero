<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

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

const {
  dropdownElement: dropdownElement1,
  toggle: toggle1,
  isOpen: isOpen1,
} = useDropdown()

const {
  dropdownElement: dropdownElement2,
  toggle: toggle2,
  isOpen: isOpen2,
} = useDropdown()
</script>

<template>
  <!-- Message details -->
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
        src="/images/avatars/photos/23.jpg"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
      <div class="message-meta">
        <span class="message-title">This month's lead generation report</span>
        <span class="sender-email">&lt;irina@huro.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <i class="iconify" data-icon="feather:paperclip"></i>
        <span>1</span>
      </div>
      <div
        ref="dropdownElement1"
        :class="[isOpen1 && 'is-active']"
        class="dropdown inbox-dropdown dropdown-trigger is-right"
      >
        <div>
          <button class="button" @click="toggle1">
            <span class="icon is-small">
              <i class="iconify" data-icon="feather:more-vertical"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <i class="iconify" data-icon="feather:bookmark"></i>
              <span>Bookmark</span>
            </a>
            <a class="dropdown-item">
              <i class="iconify" data-icon="feather:share-2"></i>
              <span>Share message</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <i class="iconify" data-icon="feather:thumbs-down"></i>
              <span>Mark as spam</span>
            </a>
          </div>
        </div>
      </div>
      <a
        class="inbox-action inbox-close-details-mobile"
        @click="emit('update:mobileMessageOpen', false)"
      >
        <i class="iconify" data-icon="feather:x"></i>
      </a>
    </div>
    <!--Message-->
    <div class="message-wrapper has-slimscroll">
      <div class="message-inner">
        <div class="message-head">
          <div class="info">
            <span>Sent on</span>
            <span>Oct 18 2020, at 11:12am</span>
          </div>
          <div class="message-actions">
            <a class="inbox-action">
              <i class="iconify" data-icon="feather:corner-up-left"></i>
            </a>
            <a class="inbox-action">
              <i class="iconify" data-icon="feather:file-text"></i>
            </a>
            <a class="inbox-action">
              <i class="iconify" data-icon="feather:tag"></i>
            </a>
            <a class="inbox-action">
              <i class="iconify" data-icon="feather:message-circle"></i>
            </a>
            <a class="inbox-action">
              <i class="iconify" data-icon="feather:lock"></i>
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>Hi,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <mark>Quam nemo umquam voluptatem appellavit, appellat;</mark>
            <mark>Sequitur disserendi ratio cognitioque naturae;</mark> Ea
            possunt paria non esse. Poterat autem inpune;
          </p>
          <ul>
            <li>Urgent tamen et nihil remittunt.</li>
            <li>
              Miserum hominem! Si dolor summum malum est, dici aliter non
              potest.
            </li>
            <li>
              Quid igitur dubitamus in tota eius natura quaerere quid sit
              effectum?
            </li>
          </ul>
          <p>
            <a href="http://loripsum.net/">Duo Reges: constructio interrete.</a>
            Satis est ad hoc responsum. Primum in nostrane potestate est, quid
            meminerimus?
            <a href="http://loripsum.net/">Nihil sane.</a>
            <a href="http://loripsum.net/">Sit sane ista voluptas.</a>
          </p>

          <p>Let me know when you have time to read it.</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>lead-report_february.pdf</span>
            <div class="download-icon">
              <i class="iconify" data-icon="feather:arrow-down"></i>
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="/images/avatars/photos/8.jpg"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/150x150'
              "
            />
            <div class="reply-details">
              <span>Reply as</span>
              <span>erik@huro.io</span>
            </div>
            <div
              ref="dropdownElement2"
              :class="[isOpen2 && 'is-active']"
              class="dropdown inbox-dropdown dropdown-trigger is-right"
            >
              <div>
                <button class="button" @click="toggle2">
                  <span class="icon is-small">
                    <i class="iconify" data-icon="feather:more-vertical"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <i class="iconify" data-icon="feather:refresh-cw"></i>
                    <span>Reset</span>
                  </a>
                  <a class="dropdown-item">
                    <i class="iconify" data-icon="feather:align-left"></i>
                    <span>Spelling</span>
                  </a>
                  <a class="dropdown-item">
                    <i class="iconify" data-icon="feather:at-sign"></i>
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
