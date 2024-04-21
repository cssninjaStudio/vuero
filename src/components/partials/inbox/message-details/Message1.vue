<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:mobileMessageOpen', value: boolean): void
}>()
const props = defineProps<{
  selected?: boolean
  mobileMessageOpen?: boolean
}>()

const { onceImageErrored } = useImageError()
const { isMediumScreen } = useScreenSize()

const dropdownElement1 = ref<HTMLElement>()
const dropdown1 = useDropdown(dropdownElement1)

const dropdownElement2 = ref<HTMLElement>()
const dropdown2 = useDropdown(dropdownElement2)
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
        src="/demo/avatars/25.jpg"
        alt=""
        @error.once="onceImageErrored(150)"
      >
      <div class="message-meta">
        <span class="message-title"> Important project review next thursday </span>
        <span class="sender-email">&lt;melany@vuero.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <iconify-icon
          aria-hidden="true"
          class="iconify"
          icon="lucide:paperclip"
        />
        <span>2</span>
      </div>
      <div
        ref="dropdownElement1"
        class="dropdown inbox-dropdown dropdown-trigger is-right"
      >
        <div>
          <button
            class="button"
            tabindex="0"
            @keydown.space.prevent="dropdown1.toggle"
            @click="dropdown1.toggle"
          >
            <span class="icon is-small">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:more-vertical"
              />
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:bookmark"
              />
              <span>Bookmark</span>
            </a>
            <a class="dropdown-item">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:share-2"
              />
              <span>Share message</span>
            </a>
            <hr class="dropdown-divider">
            <a class="dropdown-item">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:thumbs-down"
              />
              <span>Mark as spam</span>
            </a>
          </div>
        </div>
      </div>
      <a
        class="inbox-action inbox-close-details-mobile"
        role="button"
        tabindex="0"
        @keydown.space.prevent="emit('update:mobileMessageOpen', false)"
        @click="emit('update:mobileMessageOpen', false)"
      >
        <iconify-icon
          aria-hidden="true"
          class="iconify"
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
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:corner-up-left"
              />
            </a>
            <a class="inbox-action">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:file-text"
              />
            </a>
            <a class="inbox-action">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:tag"
              />
            </a>
            <a class="inbox-action">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:message-circle"
              />
            </a>
            <a class="inbox-action">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
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
              <iconify-icon
                aria-hidden="true"
                class="iconify"
                icon="lucide:arrow-down"
              />
            </div>
          </div>
          <div class="attachment">
            <span>project-notes.docx</span>
            <div class="download-icon">
              <iconify-icon
                aria-hidden="true"
                class="iconify"
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
              @error.once="onceImageErrored(150)"
            >
            <div class="reply-details">
              <span>Reply as</span>
              <span>erik@vuero.io</span>
            </div>
            <div
              ref="dropdownElement2"
              class="dropdown inbox-dropdown dropdown-trigger is-right"
            >
              <div>
                <button
                  class="button"
                  tabindex="0"
                  @keydown.space.prevent="dropdown2.toggle"
                  @click="dropdown2.toggle"
                >
                  <span class="icon is-small">
                    <iconify-icon
                      aria-hidden="true"
                      class="iconify"
                      icon="lucide:more-vertical"
                    />
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <iconify-icon
                      aria-hidden="true"
                      class="iconify"
                      icon="lucide:refresh-cw"
                    />
                    <span>Reset</span>
                  </a>
                  <a class="dropdown-item">
                    <iconify-icon
                      aria-hidden="true"
                      class="iconify"
                      icon="lucide:align-left"
                    />
                    <span>Spelling</span>
                  </a>
                  <a class="dropdown-item">
                    <iconify-icon
                      aria-hidden="true"
                      class="iconify"
                      icon="lucide:at-sign"
                    />
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
