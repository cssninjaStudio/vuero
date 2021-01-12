<template>
  <!-- Message details -->
  <div id="message-3" class="inbox-message-details is-hidden">
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://via.placeholder.com/150x150"
        data-demo-src="/@images/avatars/photos/19.jpg"
        alt=""
      />
      <div class="message-meta">
        <span class="message-title"
          >Don't forget to send me those budget notes</span
        >
        <span class="sender-email">&lt;greta@huro.io&gt;</span>
      </div>
      <div class="attachments is-vhidden inbox-hidden-mobile">
        <Icon icon="feather:paperclip" />
        <span>2</span>
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
            <span>Oct 20 2020, at 08:43am</span>
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
            <mark
              >Deinde disputat, quod cuiusque generis animantium statui deceat
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
              src="https://via.placeholder.com/150x150"
              data-demo-src="/@images/avatars/photos/8.jpg"
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
                    <i class="sl sl-icon-options"></i>
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
