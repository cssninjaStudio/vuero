### Menu with Images

`<V-Dropdown />` menus items can have images and more original layout.
Use the `spaced` prop with the provided markup in the code example.
The inner images can be be made rounded by adding
the `is-rounded` class to the image element.

<!--code-->

```vue
<template>
  <V-Dropdown title="Dropdown with image" spaced>
    <template #content>
      <a href="#" class="dropdown-item is-media">
        <img class="item-img" src="/demo/avatars/8.jpg" alt="" />
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
  </V-Dropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <V-Dropdown title="Dropdown with image" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img"
            src="/demo/avatars/8.jpg"
            alt=""
            @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
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
            @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
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
            @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
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
            @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
          <div class="meta">
            <span>Anna B</span>
            <span>San Francisco, CA</span>
          </div>
        </a>
      </template>
    </V-Dropdown>
  </div>

  <div class="control">
    <V-Dropdown title="Dropdown with rounded image" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <img
            class="item-img is-rounded"
            src="/demo/avatars/8.jpg"
            alt=""
            @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
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
            @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
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
            @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
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
            @error.once="$event.target.src = 'https://via.placeholder.com/150x150'"
          />
          <div class="meta">
            <span>Anna B</span>
            <span>San Francisco, CA</span>
          </div>
        </a>
      </template>
    </V-Dropdown>
  </div>
</div>

<!--/example-->
