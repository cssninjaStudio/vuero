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
        src="https://media.cssninja.io/content/avatars/28.jpg"
        alt=""
        @error.once="onceError($event, 150)"
      >
      <div class="message-meta">
        <span class="message-title"> Customer dashboard february bug report </span>
        <span class="sender-email">&lt;edouard@vuero.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <VIcon
          icon="lucide:paperclip"
        />
        <span>1</span>
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
            <span>Oct 17 2020, at 02:29pm</span>
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
          <p>Hi,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <a href="#">Nunc haec primum fortasse audientis servire debemus.</a>
            At iste non dolendi status non vocatur voluptas. Quae duo sunt, unum facit.
            Etiam beatissimum? Haec quo modo conveniant, non sane intellego. Duo Reges:
            constructio interrete.
          </p>
          <ul>
            <li>Nam Pyrrho, Aristo, Erillus iam diu abiecti.</li>
            <li>Maximas vero virtutes iacere omnis necesse est voluptate dominante.</li>
          </ul>

          <p>Nick</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>report.pdf</span>
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
