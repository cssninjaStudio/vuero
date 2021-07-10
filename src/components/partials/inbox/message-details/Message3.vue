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
    :class="[
      mobileMessageOpen && selected && 'mobile-active tablet-active',
      isMediumScreen && !selected && 'is-hidden',
    ]"
    class="inbox-message-details"
  >
    <div class="header-area">
      <img
        class="sender-pic"
        src="/demo/avatars/19.jpg"
        alt=""
        @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
      <div class="message-meta">
        <span class="message-title">
          Don't forget to send me those budget notes</span
        >
        <span class="sender-email">&lt;greta@vuero.io&gt;</span>
      </div>
      <div class="attachments is-vhidden inbox-hidden-mobile">
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
            <span>Oct 20 2020, at 08:43am</span>
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
          <p>Hi Erik,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suo genere
            perveniant ad extremum; Non potes, nisi retexueris illa.
          </p>
          <ul>
            <li>Si id dicis, vicimus.</li>
            <li>
              Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris,
              divitiae, valitudo;
            </li>
            <li>Sed ille, ut dixi, vitiose.</li>
            <li>
              Nam, ut paulo ante docui, augendae voluptatis finis est doloris
              omnis amotio.
            </li>
            <li>
              Nam, ut saepe iam dixi, in infirma aetate inbecillaque mente vis
              naturae quasi per caliginem cernitur;
            </li>
          </ul>
          <p>
            <mark>
              Deinde disputat, quod cuiusque generis animantium statui deceat
              extremum.</mark
            >
            Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Qui
            est in parvis malis. Sit enim idem caecus, debilis. Hic nihil fuit,
            quod quaereremus.
          </p>
          <p>
            Negat esse eam, inquit, propter se expetendam. Collatio igitur ista
            te nihil iuvat. Rationis enim perfectio est virtus; At certe
            gravius. Laboro autem non sine causa; Nam Pyrrho, Aristo, Erillus
            iam diu abiecti.
          </p>
          <p>
            Nam quid possumus facere melius? Primum divisit ineleganter; Duo
            Reges: constructio interrete. Erat enim Polemonis. Equidem e Cn.
          </p>

          <p>Greta Kroppfer</p>
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
                    <i aria-hidden="true" class="sl sl-icon-options"></i>
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
