<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-header has-text-centered">
      <VAvatar
        size="xl"
        picture="/images/avatars/svg/vuero-1.svg"
        badge="/images/icons/flags/united-states-of-america.svg"
      />

      <h3 class="title is-4 is-narrow is-thin">Erik Kovalsky</h3>
      <p class="light-text">
        Hey everyone, Iam a product manager from New York and Iam looking for new
        opportunities in the software business.
      </p>
      <div class="profile-stats">
        <div class="profile-stat">
          <i aria-hidden="true" class="lnil lnil-users-alt"></i>
          <span>500+ Relations</span>
        </div>
        <div class="separator"></div>
        <div class="profile-stat">
          <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
          <span>78 Projects</span>
        </div>
        <div class="separator"></div>
        <div class="socials">
          <a><i aria-hidden="true" class="fab fa-facebook-f"></i></a>
          <a><i aria-hidden="true" class="fab fa-twitter"></i></a>
          <a><i aria-hidden="true" class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div class="profile-body">
      <div class="columns">
        <div class="column is-8">
          <div class="profile-card">
            <div class="profile-card-section">
              <div class="section-title">
                <h4>About Me</h4>
                <RouterLink to="/sidebar/layouts/profile-edit">
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
              </div>
              <div class="section-content">
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Falli igitur
                  possumus. Praeteritis, inquit, gaudeo. Duo Reges: constructio interrete.
                  Idemne, quod iucunde? Quis enim redargueret? Non semper, inquam; Quid
                  nunc honeste dicit? Eam tum adesse, cum dolor omnis absit; Negat enim
                  summo bono afferre incrementum diem.
                </p>
              </div>
            </div>
            <div class="profile-card-section">
              <div class="section-title">
                <h4>Experience</h4>
                <RouterLink to="/sidebar/layouts/profile-edit-experience">
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
              </div>
              <div class="section-content">
                <div class="experience-wrapper">
                  <div class="experience-item">
                    <img
                      src="/demo/photos/brands/airbnb.svg"
                      alt=""
                      @error.once="onceImageErrored(150)"
                    />
                    <div class="meta">
                      <span class="dark-inverted">Airbnb HQ</span>
                      <span>
                        <span>January 2018</span>
                        <i aria-hidden="true" class="fas fa-circle"></i>
                        <span>October 2020</span>
                      </span>
                      <span>Product Manager</span>
                    </div>
                  </div>
                  <div class="experience-item">
                    <img
                      src="/demo/photos/brands/facebook.svg"
                      alt=""
                      @error.once="onceImageErrored(150)"
                    />
                    <div class="meta">
                      <span class="dark-inverted">Facebook</span>
                      <span>
                        <span>January 2018</span>
                        <i aria-hidden="true" class="fas fa-circle"></i>
                        <span>October 2020</span>
                      </span>
                      <span>Product Manager</span>
                    </div>
                  </div>
                  <div class="experience-item">
                    <img
                      src="/demo/photos/brands/atlassian.svg"
                      alt=""
                      @error.once="onceImageErrored(150)"
                    />
                    <div class="meta">
                      <span class="dark-inverted">Atlassian</span>
                      <span>
                        <span>January 2018</span>
                        <i aria-hidden="true" class="fas fa-circle"></i>
                        <span>October 2020</span>
                      </span>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div class="experience-item">
                    <img
                      src="/demo/photos/brands/github.svg"
                      alt=""
                      @error.once="onceImageErrored(150)"
                    />
                    <div class="meta">
                      <span class="dark-inverted">Github</span>
                      <span>
                        <span>January 2018</span>
                        <i aria-hidden="true" class="fas fa-circle"></i>
                        <span>October 2020</span>
                      </span>
                      <span>Web Developer</span>
                    </div>
                  </div>
                </div>
                <div class="more-button has-text-centered">
                  <VButton light>View More</VButton>
                </div>
              </div>
            </div>
            <div class="profile-card-section">
              <div class="section-title">
                <h4>Languages</h4>
                <RouterLink to="/sidebar/layouts/profile-edit-skills">
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
              </div>
              <div class="section-content">
                <div class="languages-wrapper">
                  <div class="languages-item">
                    <VIconWrap picture="/images/icons/flags/united-states-of-america.svg">
                      <template #after>
                        <VPeity
                          type="donut"
                          :values="[100, 100]"
                          :fill="['var(--primary)', 'transparent']"
                          :height="50"
                          :inner-radius="22"
                          :radius="8"
                          :width="50"
                        />
                      </template>
                    </VIconWrap>

                    <div class="meta">
                      <span class="dark-inverted">English</span>
                      <span>Native Speaker, fluent</span>
                    </div>
                  </div>
                  <div class="languages-item">
                    <VIconWrap picture="/images/icons/flags/france.svg">
                      <template #after>
                        <VPeity
                          type="donut"
                          :values="[80, 100]"
                          :fill="['var(--primary)', 'transparent']"
                          :height="50"
                          :inner-radius="22"
                          :width="50"
                        />
                      </template>
                    </VIconWrap>

                    <div class="meta">
                      <span class="dark-inverted">French</span>
                      <span>Fluent, written and spoken</span>
                    </div>
                  </div>
                  <div class="languages-item">
                    <VIconWrap picture="/images/icons/flags/germany.svg">
                      <template #after>
                        <VPeity
                          type="donut"
                          :values="[30, 100]"
                          :fill="['var(--primary)', 'transparent']"
                          :height="50"
                          :inner-radius="22"
                          :width="50"
                        />
                      </template>
                    </VIconWrap>

                    <div class="meta">
                      <span class="dark-inverted">German</span>
                      <span>Beginner level</span>
                    </div>
                  </div>
                  <div class="languages-item">
                    <VIconWrap picture="/images/icons/flags/spain.svg">
                      <template #after>
                        <VPeity
                          type="donut"
                          :values="[40, 100]"
                          :fill="['var(--primary)', 'transparent']"
                          :height="50"
                          :inner-radius="22"
                          :width="50"
                        />
                      </template>
                    </VIconWrap>

                    <div class="meta">
                      <span class="dark-inverted">Spanish</span>
                      <span>Beginner level</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Skills-->
            <div class="profile-card-section">
              <div class="section-title">
                <h4>Skills</h4>
                <RouterLink to="/sidebar/layouts/profile-edit-skills">
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
              </div>
              <div class="section-content">
                <div class="skills-wrapper">
                  <!--Skill-->
                  <div class="skills-item">
                    <VIconWrap picture="/images/icons/stacks/js.svg" />

                    <div class="skill-info">
                      <span class="dark-inverted">Javascript</span>
                      <span>7 years of experience</span>
                    </div>
                    <div class="people">
                      <VAvatar size="small" initials="BT" color="warning" />
                      <VAvatar size="small" picture="/demo/avatars/18.jpg" />
                      <VAvatar size="small" initials="JD" color="info" />
                      <VAvatar size="small" picture="/demo/avatars/7.jpg" />
                      <VAvatar size="small" initials="38" />
                    </div>
                  </div>

                  <!--Skill-->
                  <div class="skills-item">
                    <VIconWrap icon="lnil lnil-burger-alt" placeholder />

                    <div class="skill-info">
                      <span class="dark-inverted">Product Management</span>
                      <span>4 years of experience</span>
                    </div>
                    <div class="people">
                      <VAvatar size="small" picture="/demo/avatars/21.jpg" />
                      <VAvatar size="small" initials="AT" color="success" />
                      <VAvatar size="small" picture="/demo/avatars/39.jpg" />
                      <VAvatar size="small" picture="/demo/avatars/23.jpg" />
                      <VAvatar size="small" initials="27" />
                    </div>
                  </div>

                  <!--Skill-->
                  <div class="skills-item">
                    <VIconWrap picture="/images/icons/stacks/html5.svg" />

                    <div class="skill-info">
                      <span class="dark-inverted">Html 5</span>
                      <span>10+ years of experience</span>
                    </div>
                    <div class="people">
                      <VAvatar size="small" picture="/demo/avatars/38.jpg" />
                      <VAvatar size="small" picture="/demo/avatars/11.jpg" />
                      <VAvatar size="small" initials="SC" color="h-purple" />
                      <VAvatar size="small" picture="/demo/avatars/13.jpg" />
                      <VAvatar size="small" initials="19" />
                    </div>
                  </div>

                  <!--Skill-->
                  <div class="skills-item">
                    <VIconWrap picture="/images/icons/stacks/css3.svg" />

                    <div class="skill-info">
                      <span class="dark-inverted">CSS 3</span>
                      <span>10+ years of experience</span>
                    </div>
                    <div class="people">
                      <VAvatar size="small" picture="/demo/avatars/21.jpg" />
                      <VAvatar size="small" initials="SC" color="h-purple" />
                      <VAvatar size="small" picture="/demo/avatars/5.jpg" />
                      <VAvatar size="small" picture="/demo/avatars/7.jpg" />
                      <VAvatar size="small" initials="31" />
                    </div>
                  </div>
                </div>

                <div class="more-button has-text-centered">
                  <VButton light>View More</VButton>
                </div>
              </div>
            </div>
          </div>

          <!--Recommendations-->
          <div class="profile-card">
            <div class="profile-card-section no-padding">
              <div class="section-title">
                <h4>Recommendations</h4>
                <a><i aria-hidden="true" class="lnil lnil-pencil"></i></a>
                <a class="action-link" tabindex="0">View All</a>
              </div>
              <div class="section-content">
                <div class="recommendations-wrapper">
                  <!--Recommendation-->
                  <div class="recommendations-item">
                    <VAvatar
                      size="large"
                      picture="/demo/avatars/5.jpg"
                      badge="/images/icons/flags/united-states-of-america.svg"
                    />
                    <h3 class="dark-inverted">Project Manager</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis
                      malis affectus. Certe, nisi voluptatem tanti aestimaretis.
                    </p>
                    <div class="meta">
                      <span>Mary L.</span>
                      <span>September 3, 2020</span>
                    </div>
                  </div>

                  <!--Recommendation-->
                  <div class="recommendations-item">
                    <VAvatar
                      size="large"
                      picture="/demo/avatars/18.jpg"
                      badge="/images/icons/flags/united-states-of-america.svg"
                    />

                    <h3 class="dark-inverted">UI/UX Designer</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis
                      malis affectus. Certe, nisi voluptatem tanti aestimaretis.
                    </p>
                    <div class="meta">
                      <span>Esteban C.</span>
                      <span>September 9, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <!--Notifications-->
          <div class="profile-card">
            <div class="profile-card-section no-padding">
              <div class="section-title">
                <h4>Notifications</h4>
                <VControl>
                  <VSwitchBlock color="success" checked />
                </VControl>
              </div>
              <div class="section-content">
                <div class="network-notifications">
                  <h3 class="dark-inverted">Notify Your Network?</h3>
                  <p>
                    Enable or disable this setting to manage if your network should be
                    notified when you make changes to your profile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--Tools-->
          <div class="profile-card">
            <div class="profile-card-section no-padding">
              <div class="section-title">
                <h4>Tools</h4>
                <RouterLink to="/sidebar/layouts/profile-edit-skills">
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
                <a class="action-link" tabindex="0">View All</a>
              </div>
              <div class="section-content">
                <div class="tools-wrapper">
                  <!--Tool-->
                  <div class="tools-item">
                    <VIconWrap picture="/images/icons/stacks/illustrator.svg">
                      <template #after>
                        <VPeity
                          type="pie"
                          :values="[80, 100]"
                          :fill="['var(--primary)', 'transparent']"
                          :height="50"
                          :inner-radius="22"
                          :width="50"
                        />
                      </template>
                    </VIconWrap>

                    <div class="meta">
                      <span class="dark-inverted">Adobe Illustrator</span>
                      <span>Advanced level</span>
                    </div>
                  </div>

                  <!--Tool-->
                  <div class="tools-item">
                    <VIconWrap picture="/demo/photos/brands/jira.svg">
                      <template #after>
                        <VPeity
                          type="pie"
                          :values="[60, 100]"
                          :fill="['var(--primary)', 'transparent']"
                          :height="50"
                          :inner-radius="22"
                          :width="50"
                        />
                      </template>
                    </VIconWrap>

                    <div class="meta">
                      <span class="dark-inverted">Jira Software</span>
                      <span>Intermediate level</span>
                    </div>
                  </div>

                  <!--Tool-->
                  <div class="tools-item">
                    <VIconWrap picture="/demo/photos/brands/office.svg">
                      <template #after>
                        <VPeity
                          type="pie"
                          :values="[95, 100]"
                          :fill="['var(--primary)', 'transparent']"
                          :height="50"
                          :inner-radius="22"
                          :width="50"
                        />
                      </template>
                    </VIconWrap>

                    <div class="meta">
                      <span class="dark-inverted">MS Office</span>
                      <span>Expert level</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Recent Views-->
          <div class="profile-card">
            <div class="profile-card-section no-padding">
              <div class="section-title">
                <h4>Recent Views</h4>
                <a class="action-link" tabindex="0">View All</a>
              </div>
              <div class="section-content">
                <div class="people-wrapper">
                  <!--People-->
                  <a href="#" class="people-item">
                    <VAvatar
                      picture="/demo/avatars/25.jpg"
                      badge="/images/icons/stacks/js.svg"
                    />

                    <div class="meta">
                      <span class="dark-inverted">Melany W.</span>
                      <span>Web Developer</span>
                    </div>
                  </a>

                  <!--People-->
                  <a href="#" class="people-item">
                    <VAvatar
                      picture="/demo/avatars/29.jpg"
                      badge="/images/icons/stacks/python.svg"
                    />

                    <div class="meta">
                      <span class="dark-inverted">Hakeem C.</span>
                      <span>Web Developer</span>
                    </div>
                  </a>

                  <!--People-->
                  <a href="#" class="people-item">
                    <VAvatar
                      picture="/demo/avatars/38.jpg"
                      badge="/images/icons/stacks/vuejs.svg"
                    />

                    <div class="meta">
                      <span class="dark-inverted">Christie D.</span>
                      <span>Web Developer</span>
                    </div>
                  </a>

                  <!--People-->
                  <a href="#" class="people-item">
                    <VAvatar
                      picture="/demo/avatars/28.jpg"
                      badge="/images/icons/stacks/angular.svg"
                    />

                    <div class="meta">
                      <span class="dark-inverted">Edouard F.</span>
                      <span>Software Engineer</span>
                    </div>
                  </a>

                  <!--People-->
                  <a href="#" class="people-item">
                    <VAvatar
                      picture="/demo/avatars/19.jpg"
                      badge="/images/icons/stacks/cplus.svg"
                    />

                    <div class="meta">
                      <span class="dark-inverted">Greta K.</span>
                      <span>Sales Manager</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/components/profile-stats';

.is-navbar {
  .profile-wrapper {
    margin-top: 30px;
  }
}

.profile-wrapper {
  max-width: 1040px;
  margin: 0 auto;

  .profile-header {
    text-align: center;

    > img {
      display: block;
      margin: 0 auto;
      max-width: 300px;
    }

    .v-avatar {
      margin: 0 auto 12px;
    }

    .anim-icon {
      margin-bottom: 12px;
    }

    .title {
      margin-bottom: 6px;
    }

    p {
      font-size: 1rem;
      max-width: 540px;
      margin: 0 auto;
      line-height: 1.3;
    }
  }

  .profile-body {
    padding: 10px 0 20px;

    .profile-card {
      @include vuero-s-card;

      padding: 30px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      .profile-card-section {
        padding-bottom: 20px;

        &:not(:last-child) {
          margin-bottom: 20px;
          border-bottom: 1px solid var(--fade-grey-dark-4);
        }

        &.no-padding {
          padding-bottom: 0;
        }

        .section-title {
          display: flex;
          align-items: center;
          margin-bottom: 12px;

          h4 {
            font-family: var(--font-alt);
            font-weight: 600;
            font-size: 0.8rem;
            text-transform: uppercase;
            color: var(--dark-text);
            margin-inline-end: 6px;
          }

          i {
            color: var(--primary);
          }

          .action-link {
            position: relative;
            top: -2px;
            margin-inline-start: auto;
            text-transform: uppercase;
            font-size: 0.8rem;
          }

          .control {
            margin-inline-start: auto;

            .form-switch {
              transform: scale(0.8);
            }
          }
        }

        .section-content {
          .description {
            font-size: 0.95rem;
          }

          .experience-wrapper {
            display: flex;
            flex-wrap: wrap;
            margin-inline-start: -8px;
            margin-inline-end: -8px;

            .experience-item {
              display: flex;
              align-items: center;
              width: calc(50% - 16px);
              margin: 8px;

              img {
                display: block;
                width: 50px;
                min-width: 50px;
                height: 50px;
                border-radius: var(--radius-rounded);
                border: 1px solid var(--fade-grey-dark-4);
              }

              .meta {
                margin-inline-start: 10px;

                > span {
                  font-family: var(--font);
                  display: block;

                  &:first-child {
                    font-family: var(--font-alt);
                    font-weight: 600;
                    color: var(--dark-text);
                    font-size: 0.85rem;
                  }

                  &:nth-child(2),
                  &:nth-child(3) {
                    font-size: 0.85rem;
                    color: var(--light-text);

                    i {
                      position: relative;
                      top: -2px;
                      font-size: 4px;
                      margin: 0 6px;
                    }
                  }

                  &:nth-child(3) {
                    color: var(--primary);
                  }

                  span {
                    display: inline-block;
                  }
                }
              }
            }
          }

          .languages-wrapper {
            display: flex;
            flex-wrap: wrap;
            margin-inline-start: -8px;
            margin-inline-end: -8px;

            .languages-item {
              display: flex;
              align-items: center;
              width: calc(50% - 16px);
              margin: 8px;

              .icon-wrap {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                min-width: 50px;
                height: 50px;

                img {
                  position: absolute;
                  top: 50%;
                  inset-inline-start: 50%;
                  transform: translate(-50%, -50%);
                  display: block;
                  width: 32px;
                  min-width: 32px;
                  height: 32px;
                  border-radius: var(--radius-rounded);
                  border: 1px solid var(--fade-grey-dark-4);
                }
              }

              .meta {
                margin-inline-start: 10px;

                > span {
                  display: block;
                  font-family: var(--font);

                  &:first-child {
                    font-family: var(--font-alt);
                    font-weight: 600;
                    color: var(--dark-text);
                    font-size: 0.9rem;
                  }

                  &:nth-child(2) {
                    font-size: 0.85rem;
                    color: var(--light-text);
                  }

                  span {
                    display: inline-block;
                  }
                }
              }
            }
          }

          .skills-wrapper {
            .skills-item {
              display: flex;
              align-items: center;

              &:not(:last-child) {
                margin-bottom: 16px;
              }

              .icon-wrap {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 42px;
                min-width: 42px;
                height: 42px;
                border-radius: var(--radius-rounded);
                border: 1px solid var(--primary);

                &.has-icon {
                  background: var(--fade-grey-light-2);
                  border: 1px solid var(--fade-grey-dark-3);
                  color: var(--light-text);

                  i {
                    font-size: 1.4rem;
                  }
                }

                img {
                  display: block;
                  width: 34px;
                  min-width: 34px;
                  height: 34px;
                  border-radius: var(--radius-rounded);
                  border: 1px solid var(--fade-grey-dark-4);
                }

                .count {
                  position: absolute;
                  bottom: 0;
                  inset-inline-end: -4px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 22px;
                  height: 22px;
                  border-radius: var(--radius-rounded);
                  background: var(--white);
                  border: 1px solid var(--primary);

                  span {
                    font-family: var(--font);
                    font-weight: 500;
                    font-size: 0.75rem;
                  }
                }
              }

              .skill-info {
                font-family: var(--font);
                margin-inline-start: 12px;
                line-height: 1.3;

                span {
                  display: block;

                  &:first-child {
                    font-family: var(--font-alt);
                    font-weight: 600;
                    color: var(--dark-text);
                    font-size: 0.9rem;
                  }

                  &:nth-child(2) {
                    font-size: 0.9rem;
                    color: var(--light-text);
                  }
                }
              }

              .people {
                margin-inline-start: auto;
                display: flex;
                justify-content: flex-end;

                .v-avatar {
                  margin: 0 4px;
                }
              }
            }
          }

          .recommendations-wrapper {
            display: flex;
            flex-wrap: wrap;
            margin-inline-start: -8px;
            margin-inline-end: -8px;

            .recommendations-item {
              width: calc(50% - 16px);
              margin: 8px;
              background: var(--fade-grey-light-3);
              text-align: center;
              padding: 30px 20px;
              border-radius: var(--radius);

              > .v-avatar {
                display: block;
                margin: 0 auto 8px;
              }

              h3 {
                font-size: 1rem;
                font-family: var(--font-alt);
                font-weight: 600;
                color: var(--dark-text);
                margin-bottom: 8px;
              }

              p {
                font-size: 0.85rem;
                margin-bottom: 16px;
              }

              .meta {
                span {
                  display: block;

                  &:first-child {
                    font-weight: 600;
                    font-family: var(--font-alt);
                    font-size: 0.95rem;
                    color: var(--primary);
                  }

                  &:nth-child(2) {
                    font-size: 0.9rem;
                    color: var(--light-text);
                  }
                }
              }
            }
          }

          .network-notifications {
            h3 {
              font-family: var(--font-alt);
              font-size: 0.9rem;
              margin-bottom: 6px;
            }

            p {
              font-size: 0.9rem;
              max-width: 480px;
            }
          }

          .tools-wrapper {
            padding-top: 12px;

            .tools-item {
              display: flex;
              align-items: center;
              margin-bottom: 16px;

              &:last-child {
                margin-bottom: 0;
              }

              .icon-wrap {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                min-width: 50px;
                height: 50px;

                img {
                  position: absolute;
                  top: 50%;
                  inset-inline-start: 50%;
                  transform: translate(calc(var(--transform-direction) * -50%), -50%);
                  display: block;
                  width: 32px;
                  min-width: 32px;
                  height: 32px;
                  border-radius: var(--radius-rounded);
                  border: 1px solid transparent;
                }
              }

              .meta {
                margin-inline-start: 10px;

                > span {
                  display: block;
                  font-family: var(--font);

                  &:first-child {
                    font-family: var(--font-alt);
                    font-weight: 600;
                    color: var(--dark-text);
                    font-size: 0.9rem;
                  }

                  &:nth-child(2) {
                    font-size: 0.85rem;
                    color: var(--light-text);
                  }

                  span {
                    display: inline-block;
                  }
                }
              }
            }
          }

          .people-wrapper {
            padding-top: 12px;

            .people-item {
              display: flex;
              align-items: center;
              margin-bottom: 16px;

              &:last-child {
                margin-bottom: 0;
              }

              .meta {
                margin-inline-start: 10px;

                > span {
                  display: block;
                  font-family: var(--font);

                  &:first-child {
                    font-family: var(--font-alt);
                    font-weight: 600;
                    color: var(--dark-text);
                    font-size: 0.9rem;
                  }

                  &:nth-child(2) {
                    font-size: 0.85rem;
                    color: var(--light-text);
                  }

                  span {
                    display: inline-block;
                  }
                }
              }
            }
          }

          .more-button {
            padding-top: 16px;

            .button {
              min-width: 180px;
              font-family: var(--font);
              text-transform: uppercase;
              font-size: 0.8rem;
              font-weight: 500;
              margin: 0 auto;
              color: var(--light-text);
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .profile-wrapper {
    .profile-header {
      .v-avatar {
        .badge {
          border-color: var(--dark-sidebar-light-6);
        }
      }
    }

    .profile-body {
      .profile-card {
        @include vuero-card--dark;

        .profile-card-section {
          border-color: var(--dark-sidebar-light-12);

          .section-title {
            h4 {
              color: var(--dark-dark-text);
            }

            i {
              color: var(--primary);
            }
          }

          .section-content {
            .icon-wrap {
              > img {
                border-color: var(--dark-sidebar-light-12) !important;
              }
            }

            .experience-wrapper {
              .experience-item {
                > img {
                  border-color: var(--dark-sidebar-light-12);
                }

                .meta {
                  > span {
                    &:nth-child(3) {
                      color: var(--primary);
                    }
                  }
                }
              }
            }

            .skills-wrapper {
              .skills-item {
                .icon-wrap {
                  border-color: var(--primary) !important;

                  &.has-icon,
                  &.has-img {
                    background: var(--dark-sidebar-light-2) !important;
                    border-color: var(--dark-sidebar-light-12) !important;
                  }
                }

                .people {
                  .v-avatar {
                    &:last-child {
                      .is-fake {
                        background: var(--dark-sidebar-light-2);
                        border: 1px solid var(--dark-sidebar-light-12);
                      }
                    }
                  }
                }
              }
            }

            .recommendations-wrapper {
              .recommendations-item {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-12);

                .meta {
                  span {
                    &:first-child {
                      color: var(--primary);
                    }
                  }
                }
              }
            }

            .more-button {
              .button {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-12);
              }
            }
          }
        }
      }
    }
  }

  .icon-wrap,
  .icon-wrap.is-placeholder {
    background: var(--dark-sidebar-light-2) !important;
    border-color: var(--dark-sidebar-light-12) !important;
  }
}

@media only screen and (width <= 767px) {
  .profile-wrapper {
    .profile-body {
      .profile-card {
        padding: 20px;

        .profile-card-section {
          .section-content {
            .experience-wrapper,
            .languages-wrapper,
            .recommendations-wrapper {
              .experience-item,
              .languages-item,
              .recommendations-item {
                width: calc(100% - 16px);
              }
            }

            .skills-wrapper {
              .skills-item {
                .people {
                  .v-avatar {
                    &:not(:last-child) {
                      display: none !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
