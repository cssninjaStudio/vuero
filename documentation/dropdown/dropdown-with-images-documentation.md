### Menu with Images

`<VDropdown />` menus items can have images and more original layout.
Use the `spaced` prop with the provided markup in the code example.
The inner images can be be made rounded by adding
the `is-rounded` class to the image element.

<!--code-->

```vue
<template>
  <VDropdown title="Dropdown with image" spaced>
    <template #content>
      <a href="#" class="dropdown-item is-media">
        <img class="item-img" src="/images/avatars/svg/vuero-1.svg" alt="" />
        <div class="meta">
          <span>Erik K.</span>
          <span>New York, NY</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media is-active">
        <img class="item-img" src="/demo/avatars/7.jpg" alt="" />
        <div class="meta">
          <span>Alice C.</span>
          <span>San Diego, CA</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media">
        <img class="item-img" src="/demo/avatars/25.jpg" alt="" />
        <div class="meta">
          <span>Melany W.</span>
          <span>San Jose, CA</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item is-media">
        <img class="item-img" src="/demo/avatars/9.jpg" alt="" />
        <div class="meta">
          <span>Anna B</span>
          <span>San Francisco, CA</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <VDropdown title="Dropdown with image" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
          />
          <div class="meta">
            <span>Erik K.</span>
            <span>New York, NY</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <img
            class="item-img"
            src="/demo/avatars/7.jpg"
            alt=""
          />
          <div class="meta">
            <span>Alice C.</span>
            <span>San Diego, CA</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img"
            src="/demo/avatars/25.jpg"
            alt=""
          />
          <div class="meta">
            <span>Melany W.</span>
            <span>San Jose, CA</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img"
            src="/demo/avatars/9.jpg"
            alt=""
          />
          <div class="meta">
            <span>Anna B</span>
            <span>San Francisco, CA</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="Dropdown with rounded image" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img is-rounded"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
          />
          <div class="meta">
            <span>Erik K.</span>
            <span>New York, NY</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <img
            class="item-img is-rounded"
            src="/demo/avatars/7.jpg"
            alt=""
          />
          <div class="meta">
            <span>Alice C.</span>
            <span>San Diego, CA</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img is-rounded"
            src="/demo/avatars/25.jpg"
            alt=""
          />
          <div class="meta">
            <span>Melany W.</span>
            <span>San Jose, CA</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img is-rounded"
            src="/demo/avatars/9.jpg"
            alt=""
          />
          <div class="meta">
            <span>Anna B</span>
            <span>San Francisco, CA</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </div>
</div>

<!--/example-->
