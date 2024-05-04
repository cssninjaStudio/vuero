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
        src="https://media.cssninja.io/content/avatars/39.jpg"
        alt=""
        @error.once="onceError($event, 150)"
      >
      <div class="message-meta">
        <span class="message-title">
          New design ideas from the user experience team
        </span>
        <span class="sender-email">&lt;alejandro@vuero.io&gt;</span>
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
            <span>Oct 18 2020, at 10:16am</span>
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
          <p>Hey Erik,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas?
            Philosophi autem in suis lectulis plerumque moriuntur. Reguli reiciendam; Si
            autem id non concedatur, non continuo vita beata tollitur.
            <mark>Quod quidem nobis non saepe contingit.</mark>
          </p>
          <p>
            <a href="http://loripsum.net/"> Illa tamen simplicia, vestra versuta.</a>
            Ea possunt paria non esse. Quid adiuvas? Praeclarae mortes sunt imperatoriae;
          </p>
          <ul>
            <li>Si enim ita est, vide ne facinus facias, cum mori suadeas.</li>
            <li>In eo enim positum est id, quod dicimus esse expetendum.</li>
            <li>
              Minime id quidem, inquam, alienum, multumque ad ea, quae quaerimus,
              explicatio tua ista profecerit.
            </li>
            <li>
              Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt.
            </li>
          </ul>
          <p>
            Duo Reges: constructio interrete. Qui est in parvis malis. Paria sunt igitur.
          </p>

          <p>Alejandro</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>landing-page.png</span>
            <div class="download-icon">
              <VIcon
                icon="lucide:arrow-down"
              />
            </div>
          </div>
          <div class="attachment">
            <span>dashboard.png</span>
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
