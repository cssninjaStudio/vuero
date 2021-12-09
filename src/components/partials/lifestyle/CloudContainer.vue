<template>
  <div class="cloud-container">
    <ul>
      <li><a class="size1" href="#">adobe</a></li>
      <li><a class="size2" href="#">animation</a></li>
      <li><a class="size3" href="#">arts</a></li>
      <li><a class="size4" href="#">bizarre</a></li>
      <li><a class="size5" href="#">blogs</a></li>
      <li><a class="size6" href="#">books</a></li>
      <li><a class="size1" href="#">comics</a></li>
      <li><a class="size2" href="#">computer-graphics</a></li>
      <li><a class="size3" href="#">cooking</a></li>
      <li><a class="size4" href="#">cyberculture</a></li>
      <li><a class="size5" href="#">design</a></li>
      <li><a class="size6" href="#">drawing</a></li>
      <li><a class="size1" href="#">fine-arts</a></li>
      <li><a class="size2" href="#">graphic-design</a></li>
      <li><a class="size3" href="#">humor</a></li>
      <li><a class="size4" href="#">illustration</a></li>
      <li><a class="size5" href="#">indesign</a></li>
      <li><a class="size6" href="#">internet</a></li>
      <li><a class="size1" href="#">movies</a></li>
      <li><a class="size2" href="#">mac-os</a></li>
      <li><a class="size3" href="#">multimedia</a></li>
      <li><a class="size4" href="#">online-games</a></li>
      <li><a class="size5" href="#">photography</a></li>
      <li><a class="size6" href="#">web-design</a></li>
      <li><a class="size1" href="#">css</a></li>
    </ul>
  </div>
</template>

<styles lang="scss">
.cloud-container {
  position: relative;
  height: 455px;
  text-align: center;

  ul {
    margin-top: 1.5rem;
    list-style-type: none;

    li {
      display: inline-block;

      a {
        text-decoration: none;
        line-height: 1.8em;
        font-family: var(--font);
        color: var(--dark-text);
        transition: background-color 0.3s, box-shadow 0.3s;

        &.size1 {
          color: var(--light-text);
          padding: 6px;
          border-radius: 0.5rem;

          &:hover,
          &:focus {
            background-color: var(--primary);
            box-shadow: var(--primary-box-shadow);
            color: var(--white);
          }
        }

        &.size2 {
          font-size: 1.25rem;
          padding: 12px;
          border-radius: 0.5rem;

          &:hover,
          &:focus {
            background-color: var(--danger);
            box-shadow: var(--danger-box-shadow);
            color: var(--white);
          }
        }

        &.size3 {
          font-size: 1.5rem;
          padding: 18px;
          border-radius: 0.75rem;
          color: var(--dark-text-light-18);

          &:hover,
          &:focus {
            background-color: var(--yellow);
            box-shadow: var(--yellow-box-shadow);
            color: var(--white);
          }
        }

        &.size4 {
          padding: 10px 16px;
          font-size: 1.75rem;
          border-radius: 0.75rem;

          &:hover,
          &:focus {
            background-color: var(--green);
            box-shadow: var(--green-box-shadow);
            color: var(--white);
          }
        }

        &.size5 {
          padding: 8px 14px;
          font-size: 2rem;
          border-radius: 0.75rem;

          &:hover,
          &:focus {
            background-color: var(--info);
            box-shadow: var(--info-box-shadow);
            color: var(--white);
          }
        }

        &.size6 {
          padding: 24px;
          font-size: 2.5rem;
          border-radius: 0.75rem;

          &:hover,
          &:focus {
            background-color: var(--purple);
            box-shadow: var(--purple-box-shadow);
            color: var(--white);
          }
        }
      }
    }
  }
}
.is-dark {
  .cloud-container {
    ul li a {
      color: var(--white);

      &.size-1 {
        color: var(--light-text) !important;
      }

      &.size-3 {
        color: var(--dark-text-light-25) !important;
      }

      &.size-4 {
        color: var(--dark-dark-text) !important;
      }
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .cloud-container {
    width: 400px !important;
    height: 495px !important;

    .cloud {
      width: 400px !important;
    }

    .cloud-element {
      font-size: 1.5em !important;

      &.size-2 {
        font-size: 2rem !important;
      }

      &.size-3 {
        font-size: 3rem !important;
      }
    }
  }
}
</styles>
