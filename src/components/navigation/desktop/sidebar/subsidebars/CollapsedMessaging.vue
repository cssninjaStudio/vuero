<template>
  <div class="collapsed-messaging">
    <div class="inner">
      <div class="collapsed-menu">
        <div
          class="huro-hamburger nav-trigger push-resize messages-push"
          data-sidebar="messages-sidebar"
        >
          <span class="menu-toggle has-chevron">
            <span class="icon-box-toggle">
              <span class="rotate">
                <i class="icon-line-top"></i>
                <i class="icon-line-center"></i>
                <i class="icon-line-bottom"></i>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div class="collapsed-add">
        <a class="button collapse-add-button is-primary">
          <Icon icon="feather:plus" />
        </a>
      </div>
      <ul class="collapsed-conversations">
        <li
          id="conversation1-collapsed"
          class="is-active"
          data-conversation-menu="conversation1"
          data-position="Business Analyst"
          data-username="Henry G."
        >
          <div class="user-container">
            <img
              class="is-user"
              src="https://via.placeholder.com/150x150"
              data-demo-src="/src/assets/images/avatars/photos/10.jpg"
              alt=""
            />
          </div>
        </li>
        <li
          id="conversation2-collapsed"
          data-conversation-menu="conversation2"
          data-position="Web Developer"
          data-username="Melany W."
        >
          <div class="user-container">
            <img
              class="is-user"
              src="https://via.placeholder.com/150x150"
              data-demo-src="/src/assets/images/avatars/photos/25.jpg"
              alt=""
            />
          </div>
        </li>
        <li
          id="conversation3-collapsed"
          data-conversation-menu="conversation3"
          data-position="UI/UX Designer"
          data-username="Tara S."
        >
          <div class="user-container">
            <img
              class="is-user"
              src="https://via.placeholder.com/150x150"
              data-demo-src="/src/assets/images/avatars/photos/13.jpg"
              alt=""
            />
          </div>
        </li>
        <li
          id="conversation4-collapsed"
          data-conversation-menu="conversation4"
          data-position="UI/UX Designer"
          data-username="Esteban C."
        >
          <div class="user-container">
            <img
              class="is-user"
              src="https://via.placeholder.com/150x150"
              data-demo-src="/src/assets/images/avatars/photos/18.jpg"
              alt=""
            />
          </div>
        </li>
        <li
          id="conversation5-collapsed"
          data-conversation-menu="conversation5"
          data-position="Software Engineer"
          data-username="Alice C."
        >
          <div class="user-container">
            <img
              class="is-user"
              src="https://via.placeholder.com/150x150"
              data-demo-src="/src/assets/images/avatars/photos/7.jpg"
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>