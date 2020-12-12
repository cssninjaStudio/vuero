<script lang="ts">
import { defineComponent } from 'vue'

const Message2 = defineComponent({
  name: 'Message2',
  components: {},
  setup() {
    // Message2 - Composition API

    return {}
  },
})

export default Message2
</script>

<template>
  <!-- Message details -->
  <div id="message-2" class="inbox-message-details is-hidden">
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://via.placeholder.com/150x150"
        data-demo-src="assets/img/avatars/photos/32.jpg"
        alt=""
      />
      <div class="message-meta">
        <span class="message-title"
          >I couldn't catch up on last time's dinner</span
        >
        <span class="sender-email">&lt;jonathan@huro.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <i data-feather="paperclip"></i>
        <span>4</span>
      </div>
      <div class="dropdown inbox-dropdown dropdown-trigger is-right">
        <div>
          <button class="button">
            <span class="icon is-small">
              <i data-feather="more-vertical"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <i data-feather="bookmark"></i>
              <span>Bookmark</span>
            </a>
            <a class="dropdown-item">
              <i data-feather="share-2"></i>
              <span>Share message</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <i data-feather="thumbs-down"></i>
              <span>Mark as spam</span>
            </a>
          </div>
        </div>
      </div>
      <a class="inbox-action inbox-close-details-mobile">
        <i data-feather="x"></i>
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
              <i data-feather="corner-up-left"></i>
            </a>
            <a class="inbox-action">
              <i data-feather="file-text"></i>
            </a>
            <a class="inbox-action">
              <i data-feather="tag"></i>
            </a>
            <a class="inbox-action">
              <i data-feather="message-circle"></i>
            </a>
            <a class="inbox-action">
              <i data-feather="lock"></i>
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>Hello dude,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quare
            conare, quaeso. Prave, nequiter, turpiter cenabat;
            <i>Quid igitur, inquit, eos responsuros putas?</i> Erit enim mecum,
            si tecum erit.
          </p>
          <p>
            Ratio enim nostra consentit, pugnat oratio. Age sane, inquam. Duo
            Reges: constructio interrete. Beatus sibi videtur esse moriens. Sed
            ego in hoc resisto; <i>Idemne, quod iucunde?</i>
          </p>
          <p><b>Tamen a proposito, inquam, aberramus.</b> Quid de Pythagora?</p>
          <p>
            Cur deinde Metrodori liberos commendas? Non dolere, inquam, istud
            quam vim habeat postea videro; Pauca mutat vel plura sane; Quamquam
            ab iis philosophiam et omnes ingenuas disciplinas habemus;
          </p>

          <p>Elie Daniels</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>presentation.ppt</span>
            <div class="download-icon">
              <i data-feather="arrow-down"></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-1.jpg</span>
            <div class="download-icon">
              <i data-feather="arrow-down"></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-2.jpg</span>
            <div class="download-icon">
              <i data-feather="arrow-down"></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-3.jpg</span>
            <div class="download-icon">
              <i data-feather="arrow-down"></i>
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="https://via.placeholder.com/150x150"
              data-demo-src="assets/img/avatars/photos/8.jpg"
              alt=""
            />
            <div class="reply-details">
              <span>Reply as</span>
              <span>erik@huro.io</span>
            </div>
            <div class="dropdown inbox-dropdown dropdown-trigger is-right">
              <div>
                <button class="button">
                  <span class="icon is-small">
                    <i data-feather="more-vertical"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <i data-feather="refresh-cw"></i>
                    <span>Reset</span>
                  </a>
                  <a class="dropdown-item">
                    <i data-feather="align-left"></i>
                    <span>Spelling</span>
                  </a>
                  <a class="dropdown-item">
                    <i data-feather="at-sign"></i>
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