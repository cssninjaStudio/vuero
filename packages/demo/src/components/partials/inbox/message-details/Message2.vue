<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:mobileMessageOpen', value: boolean): void
}>()
const props = defineProps<{
  selected?: boolean
  mobileMessageOpen?: boolean
}>()

const { onceError } = useImageError()
const { isMediumScreen } = useScreenSize()
</script>

<template>
  <div
    :class="[
      props.mobileMessageOpen && props.selected && 'mobile-active tablet-active',
      isMediumScreen && !props.selected && 'is-hidden',
    ]"
    class="inbox-message-details"
  >
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://media.cssninja.io/content/avatars/32.jpg"
        alt=""
        @error.once="onceError($event, 150)"
      >
      <div class="message-meta">
        <span class="message-title"> I couldn't catch up on last time's dinner</span>
        <span class="sender-email">&lt;jonathan@vuero.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <VIcon
          icon="lucide:paperclip"
        />
        <span>4</span>
      </div>
      <InboxHeaderDropdown />
      <a
        class="inbox-action inbox-close-details-mobile"
        role="button"
        tabindex="0"
        @keydown.enter.prevent="emit('update:mobileMessageOpen', false)"
        @click="emit('update:mobileMessageOpen', false)"
      >
        <VIcon
          icon="lucide:x"
        />
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
              <VIcon
                icon="lucide:corner-up-left"
              />
            </a>
            <a class="inbox-action">
              <VIcon
                icon="lucide:file-text"
              />
            </a>
            <a class="inbox-action">
              <VIcon
                icon="lucide:tag"
              />
            </a>
            <a class="inbox-action">
              <VIcon
                icon="lucide:message-circle"
              />
            </a>
            <a class="inbox-action">
              <VIcon
                icon="lucide:lock"
              />
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>Hello dude,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare conare, quaeso.
            Prave, nequiter, turpiter cenabat;
            <em>Quid igitur, inquit, eos responsuros putas?</em> Erit enim mecum, si tecum
            erit.
          </p>
          <p>
            Ratio enim nostra consentit, pugnat oratio. Age sane, inquam. Duo Reges:
            constructio interrete. Beatus sibi videtur esse moriens. Sed ego in hoc
            resisto; <em>Idemne, quod iucunde?</em>
          </p>
          <p><strong>Tamen a proposito, inquam, aberramus.</strong> Quid de Pythagora?</p>
          <p>
            Cur deinde Metrodori liberos commendas? Non dolere, inquam, istud quam vim
            habeat postea videro; Pauca mutat vel plura sane; Quamquam ab iis philosophiam
            et omnes ingenuas disciplinas habemus;
          </p>

          <p>Elie Daniels</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>presentation.ppt</span>
            <div class="download-icon">
              <VIcon
                icon="lucide:arrow-down"
              />
            </div>
          </div>
          <div class="attachment">
            <span>venue-1.jpg</span>
            <div class="download-icon">
              <VIcon
                icon="lucide:arrow-down"
              />
            </div>
          </div>
          <div class="attachment">
            <span>venue-2.jpg</span>
            <div class="download-icon">
              <VIcon
                icon="lucide:arrow-down"
              />
            </div>
          </div>
          <div class="attachment">
            <span>venue-3.jpg</span>
            <div class="download-icon">
              <VIcon
                icon="lucide:arrow-down"
              />
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="/images/avatars/svg/vuero-1.svg"
              alt=""
              @error.once="onceError($event, 150)"
            >
            <div class="reply-details">
              <span>Reply as</span>
              <span>erik@vuero.io</span>
            </div>

            <InboxMessageDropdown />
          </div>
          <!--textarea-->
          <div class="control">
            <textarea
              class="textarea"
              rows="6"
              placeholder="Type your message..."
            />
            <button
              type="button"
              class="button"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
