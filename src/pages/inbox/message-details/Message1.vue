<script lang="ts">
import { defineComponent } from 'vue'

const Message1 = defineComponent({
  name: 'Message1',
  components: {},
  setup() {
    // Message1 - Composition API

    return {}
  },
})

export default Message1
</script>

<template>
  <!-- Message details -->
  <div id="message-1" class="inbox-message-details">
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://via.placeholder.com/150x150"
        data-demo-src="assets/img/avatars/photos/25.jpg"
        alt=""
      />
      <div class="message-meta">
        <span class="message-title"
          >Important project review next thursday</span
        >
        <span class="sender-email">&lt;melany@huro.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <i data-feather="paperclip"></i>
        <span>2</span>
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
            <span>Oct 21 2020, at 02:33pm</span>
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
          <p>Hey man,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec igitur
            Epicuri non probo, inquam. Nihil sane.
            <b>Efficiens dici potest.</b>
            <i>Urgent tamen et nihil remittunt.</i> Ea possunt paria non esse.
            Duo Reges: constructio interrete.
          </p>
          <ul>
            <li>
              Ab his oratores, ab his imperatores ac rerum publicarum principes
              extiterunt.
            </li>
            <li>Eiuro, inquit adridens, iniquum, hac quidem de re;</li>
          </ul>
          <p>
            Tum Triarius: Posthac quidem, inquit, audacius. Quodsi ipsam
            honestatem undique pertectam atque absolutam. Comprehensum, quod
            cognitum non habet?
          </p>
          <p>
            <i>Nonne igitur tibi videntur, inquit, mala?</i> Poterat autem
            inpune; Nunc omni virtuti vitium contrario nomine opponitur.
          </p>
          <p>Sincerely,</p>
          <p>Melany Wallace - Cofounder</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>budget_draft.xlsx</span>
            <div class="download-icon">
              <i data-feather="arrow-down"></i>
            </div>
          </div>
          <div class="attachment">
            <span>project-notes.docx</span>
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