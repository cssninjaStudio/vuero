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
        src="https://media.cssninja.io/content/avatars/11.jpg"
        alt=""
        @error.once="onceError($event, 150)"
      >
      <div class="message-meta">
        <span class="message-title">Hop in for the next project review</span>
        <span class="sender-email">&lt;kelly@vuero.io&gt;</span>
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
            <span>Oct 16 2020, at 09:31am</span>
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
          <p>Hi Erik,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid adiuvas? Dat
            enim intervalla et relaxat. Et nemo nimium beatus est; Claudii libidini, qui
            tum erat summo ne imperio, dederetur. Duo Reges: constructio interrete.
          </p>
          <p>
            Sedulo, inquam, faciam. Certe, nisi voluptatem tanti aestimaretis.
            <a href="http://loripsum.net/">Recte, inquit, intellegis.</a>
            Ergo, inquit, tibi Q. Recte, inquit, intellegis.
          </p>
          <ul>
            <li>Quid nunc honeste dicit?</li>
            <li>
              Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil
              habemus.
            </li>
            <li>Negabat igitur ullam esse artem, quae ipsa a se proficisceretur;</li>
          </ul>
          <p>
            Satis est ad hoc responsum. Quod iam a me expectare noli. Confecta res esset.
            Bonum integritas corporis: misera debilitas. Illum mallem levares, quo optimum
            atque humanissimum virum, Cn. Utrum igitur tibi litteram videor an totas
            paginas commovere?
          </p>
          <p>Kelly</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>iteration-4.pdf</span>
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
