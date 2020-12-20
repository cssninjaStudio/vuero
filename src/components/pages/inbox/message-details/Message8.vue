<script lang="ts">
import { defineComponent } from 'vue'

const Message8 = defineComponent({
  name: 'Message8',
  components: {},
  setup() {
    // Message8 - Composition API

    return {}
  },
})

export default Message8
</script>

<template>
  <!-- Message details -->
  <div id="message-8" class="inbox-message-details is-hidden">
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://via.placeholder.com/150x150"
        data-demo-src="/src/assets/images/avatars/photos/28.jpg"
        alt=""
      />
      <div class="message-meta">
        <span class="message-title"
          >Customer dashboard february bug report</span
        >
        <span class="sender-email">&lt;edouard@huro.io&gt;</span>
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
            <span>Oct 17 2020, at 02:29pm</span>
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
            <a href="#" target="_blank"
              >Nunc haec primum fortasse audientis servire debemus.</a
            >
            At iste non dolendi status non vocatur voluptas. Quae duo sunt, unum
            facit. Etiam beatissimum? Haec quo modo conveniant, non sane
            intellego. Duo Reges: constructio interrete.
          </p>
          <ul>
            <li>Nam Pyrrho, Aristo, Erillus iam diu abiecti.</li>
            <li>
              Maximas vero virtutes iacere omnis necesse est voluptate
              dominante.
            </li>
          </ul>

          <p>Nick</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>report.pdf</span>
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