<script setup lang="ts">
import useDropdown from '/@src/composition/use/useDropdown'

const {
  dropdownElement: dropdownElement1,
  open: open1,
  isOpen: isOpen1,
} = useDropdown()

const {
  dropdownElement: dropdownElement2,
  open: open2,
  isOpen: isOpen2,
} = useDropdown()
</script>

<template>
  <!-- Message details -->
  <div id="message-10" class="inbox-message-details is-hidden">
    <div class="header-area">
      <img
        class="sender-pic"
        src="/@images/avatars/photos/11.jpg"
        alt=""
        @error="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
      <div class="message-meta">
        <span class="message-title">Hop in for the next project review</span>
        <span class="sender-email">&lt;kelly@huro.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <Icon icon="feather:paperclip" />
        <span>1</span>
      </div>
      <div
        ref="dropdownElement1"
        :class="[isOpen1 && 'is-active']"
        class="dropdown inbox-dropdown dropdown-trigger is-right"
      >
        <div>
          <button class="button" @click="open1">
            <span class="icon is-small">
              <Icon icon="feather:more-vertical" />
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <Icon icon="feather:bookmark" />
              <span>Bookmark</span>
            </a>
            <a class="dropdown-item">
              <Icon icon="feather:share-2" />
              <span>Share message</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <Icon icon="feather:thumbs-down" />
              <span>Mark as spam</span>
            </a>
          </div>
        </div>
      </div>
      <a class="inbox-action inbox-close-details-mobile">
        <Icon icon="feather:x" />
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
              <Icon icon="feather:corner-up-left" />
            </a>
            <a class="inbox-action">
              <Icon icon="feather:file-text" />
            </a>
            <a class="inbox-action">
              <Icon icon="feather:tag" />
            </a>
            <a class="inbox-action">
              <Icon icon="feather:message-circle" />
            </a>
            <a class="inbox-action">
              <Icon icon="feather:lock" />
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>Hi Erik,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
            adiuvas? Dat enim intervalla et relaxat. Et nemo nimium beatus est;
            Claudii libidini, qui tum erat summo ne imperio, dederetur. Duo
            Reges: constructio interrete.
          </p>
          <p>
            Sedulo, inquam, faciam. Certe, nisi voluptatem tanti aestimaretis.
            <a href="http://loripsum.net/">Recte, inquit, intellegis.</a>
            Ergo, inquit, tibi Q. Recte, inquit, intellegis.
          </p>
          <ul>
            <li>Quid nunc honeste dicit?</li>
            <li>
              Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud
              negotii nihil habemus.
            </li>
            <li>
              Negabat igitur ullam esse artem, quae ipsa a se proficisceretur;
            </li>
          </ul>
          <p>
            Satis est ad hoc responsum. Quod iam a me expectare noli. Confecta
            res esset. Bonum integritas corporis: misera debilitas. Illum mallem
            levares, quo optimum atque humanissimum virum, Cn. Utrum igitur tibi
            litteram videor an totas paginas commovere?
          </p>
          <p>Kelly</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>iteration-4.pdf</span>
            <div class="download-icon">
              <Icon icon="feather:arrow-down" />
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="/@images/avatars/photos/8.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
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
                <button class="button" @click="open2">
                  <span class="icon is-small">
                    <Icon icon="feather:more-vertical" />
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <Icon icon="feather:refresh-cw" />
                    <span>Reset</span>
                  </a>
                  <a class="dropdown-item">
                    <Icon icon="feather:align-left" />
                    <span>Spelling</span>
                  </a>
                  <a class="dropdown-item">
                    <Icon icon="feather:at-sign" />
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
