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
        src="https://media.cssninja.io/content/avatars/19.jpg"
        alt=""
        @error.once="onceError($event, 150)"
      >
      <div class="message-meta">
        <span class="message-title"> Don't forget to send me those budget notes</span>
        <span class="sender-email">&lt;greta@vuero.io&gt;</span>
      </div>
      <div class="attachments is-vhidden inbox-hidden-mobile">
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
            <span>Oct 20 2020, at 08:43am</span>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suo genere perveniant
            ad extremum; Non potes, nisi retexueris illa.
          </p>
          <ul>
            <li>Si id dicis, vicimus.</li>
            <li>
              Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae,
              valitudo;
            </li>
            <li>Sed ille, ut dixi, vitiose.</li>
            <li>
              Nam, ut paulo ante docui, augendae voluptatis finis est doloris omnis
              amotio.
            </li>
            <li>
              Nam, ut saepe iam dixi, in infirma aetate inbecillaque mente vis naturae
              quasi per caliginem cernitur;
            </li>
          </ul>
          <p>
            <mark>
              Deinde disputat, quod cuiusque generis animantium statui deceat
              extremum.</mark>
            Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Qui est in
            parvis malis. Sit enim idem caecus, debilis. Hic nihil fuit, quod quaereremus.
          </p>
          <p>
            Negat esse eam, inquit, propter se expetendam. Collatio igitur ista te nihil
            iuvat. Rationis enim perfectio est virtus; At certe gravius. Laboro autem non
            sine causa; Nam Pyrrho, Aristo, Erillus iam diu abiecti.
          </p>
          <p>
            Nam quid possumus facere melius? Primum divisit ineleganter; Duo Reges:
            constructio interrete. Erat enim Polemonis. Equidem e Cn.
          </p>

          <p>Greta Kroppfer</p>
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
