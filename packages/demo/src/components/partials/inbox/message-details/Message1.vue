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
    class="inbox-message-details"
    :class="[
      props.mobileMessageOpen && props.selected && 'mobile-active tablet-active',
      isMediumScreen && !props.selected && 'is-hidden',
    ]"
  >
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://media.cssninja.io/content/avatars/25.jpg"
        alt=""
        @error.once="onceError($event, 150)"
      >
      <div class="message-meta">
        <span class="message-title"> Important project review next thursday </span>
        <span class="sender-email">&lt;melany@vuero.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <VIcon
          icon="lucide:paperclip"
        />
        <span>2</span>
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
            <span>Oct 21 2020, at 02:33pm</span>
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
          <p>Hey man,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec igitur Epicuri
            non probo, inquam. Nihil sane.
            <strong>Efficiens dici potest.</strong>
            <em>Urgent tamen et nihil remittunt.</em> Ea possunt paria non esse. Duo
            Reges: constructio interrete.
          </p>
          <ul>
            <li>
              Ab his oratores, ab his imperatores ac rerum publicarum principes
              extiterunt.
            </li>
            <li>Eiuro, inquit adridens, iniquum, hac quidem de re;</li>
          </ul>
          <p>
            Tum Triarius: Posthac quidem, inquit, audacius. Quodsi ipsam honestatem
            undique pertectam atque absolutam. Comprehensum, quod cognitum non habet?
          </p>
          <p>
            <em>Nonne igitur tibi videntur, inquit, mala?</em> Poterat autem inpune; Nunc
            omni virtuti vitium contrario nomine opponitur.
          </p>
          <p>Sincerely,</p>
          <p>Melany Wallace - Cofounder</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>budget_draft.xlsx</span>
            <div class="download-icon">
              <VIcon
                icon="lucide:arrow-down"
              />
            </div>
          </div>
          <div class="attachment">
            <span>project-notes.docx</span>
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
