<script lang="ts">
import { defineComponent } from 'vue'

const Message6 = defineComponent({
  name: 'Message6',
  components: {},
  setup() {
    // Message6 - Composition API

    return {}
  },
})

export default Message6
</script>

<template>
  <!-- Message details -->
  <div id="message-6" class="inbox-message-details is-hidden">
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://via.placeholder.com/150x150"
        data-demo-src="/src/assets/images/avatars/photos/23.jpg"
        alt=""
      />
      <div class="message-meta">
        <span class="message-title">This month's lead generation report</span>
        <span class="sender-email">&lt;irina@huro.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <Icon icon="feather:paperclip" />
        <span>1</span>
      </div>
      <div class="dropdown inbox-dropdown dropdown-trigger is-right">
        <div>
          <button class="button">
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
            <span>Oct 18 2020, at 11:12am</span>
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
          <p>Hi,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <mark>Quam nemo umquam voluptatem appellavit, appellat;</mark>
            <mark>Sequitur disserendi ratio cognitioque naturae;</mark> Ea
            possunt paria non esse. Poterat autem inpune;
          </p>
          <ul>
            <li>Urgent tamen et nihil remittunt.</li>
            <li>
              Miserum hominem! Si dolor summum malum est, dici aliter non
              potest.
            </li>
            <li>
              Quid igitur dubitamus in tota eius natura quaerere quid sit
              effectum?
            </li>
          </ul>
          <p>
            <a href="http://loripsum.net/" target="_blank"
              >Duo Reges: constructio interrete.</a
            >
            Satis est ad hoc responsum. Primum in nostrane potestate est, quid
            meminerimus?
            <a href="http://loripsum.net/" target="_blank">Nihil sane.</a>
            <a href="http://loripsum.net/" target="_blank"
              >Sit sane ista voluptas.</a
            >
          </p>

          <p>Let me know when you have time to read it.</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>lead-report_february.pdf</span>
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
              src="https://via.placeholder.com/150x150"
              data-demo-src="/src/assets/images/avatars/photos/8.jpg"
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