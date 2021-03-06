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
        src="/images/avatars/photos/21.jpg"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
      <div class="message-meta">
        <span class="message-title"
          >Meeting with the new customer on Monday</span
        >
        <span class="sender-email">&lt;elizabeth@huro.io&gt;</span>
      </div>
      <div class="attachments is-vhidden inbox-hidden-mobile">
        <i class="iconify" data-icon="feather:paperclip"></i>
        <span>0</span>
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
            <span>Oct 19 2020, at 04:27pm</span>
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
          <p>Hi Mr. Kovalsky,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos
            commodius agimus. Si longus, levis;
            <a href="#">Summum ením bonum exposuit vacuitatem doloris;</a>
            Eadem fortitudinis ratio reperietur. Duo Reges: constructio
            interrete. Facile est hoc cernere in primis puerorum aetatulis.
          </p>
          <ul>
            <li>Sed residamus, inquit, si placet.</li>
            <li>
              Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint.
            </li>
            <li>Beatus autem esse in maximarum rerum timore nemo potest.</li>
            <li>
              Illa argumenta propria videamus, cur omnia sint paria peccata.
            </li>
          </ul>

          <p>Elizabeth</p>
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
                    <i class="sl sl-icon-options"></i>
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
