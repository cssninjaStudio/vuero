<template>
  <div class="profile-wrapper">
    <div class="profile-header has-text-centered">
      <V-Avatar
        size="xl"
        picture="/demo/avatars/8.jpg"
        badge="/images/icons/flags/united-states-of-america.svg"
      />

      <h3 class="title is-4 is-narrow is-thin">Erik Kovalsky</h3>
      <p class="light-text">
        Hey everyone, Iam a product manager from New York and Iam looking for
        new opportunities in the software business.
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
                <RouterLink :to="{ name: 'sidebar-layouts-profile-edit' }">
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
              </div>
              <div class="section-content">
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Falli
                  igitur possumus. Praeteritis, inquit, gaudeo. Duo Reges:
                  constructio interrete. Idemne, quod iucunde? Quis enim
                  redargueret? Non semper, inquam; Quid nunc honeste dicit? Eam
                  tum adesse, cum dolor omnis absit; Negat enim summo bono
                  afferre incrementum diem.
                </p>
              </div>
            </div>
            <div class="profile-card-section">
              <div class="section-title">
                <h4>Experience</h4>
                <RouterLink
                  :to="{ name: 'sidebar-layouts-profile-edit-experience' }"
                >
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
              </div>
              <div class="section-content">
                <div class="experience-wrapper">
                  <div class="experience-item">
                    <img
                      src="/demo/photos/brands/airbnb.svg"
                      alt=""
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
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
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
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
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
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
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
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
                  <V-Button light>View More</V-Button>
                </div>
              </div>
            </div>
            <div class="profile-card-section">
              <div class="section-title">
                <h4>Languages</h4>
                <RouterLink
                  :to="{ name: 'sidebar-layouts-profile-edit-skills' }"
                >
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
              </div>
              <div class="section-content">
                <div class="languages-wrapper">
                  <div class="languages-item">
                    <V-IconWrap
                      picture="/images/icons/flags/united-states-of-america.svg"
                    />

                    <div class="meta">
                      <span class="dark-inverted">English</span>
                      <span>Native Speaker, fluent</span>
                    </div>
                  </div>
                  <div class="languages-item">
                    <V-IconWrap picture="/images/icons/flags/france.svg" />

                    <div class="meta">
                      <span class="dark-inverted">French</span>
                      <span>Fluent, written and spoken</span>
                    </div>
                  </div>
                  <div class="languages-item">
                    <V-IconWrap picture="/images/icons/flags/germany.svg" />

                    <div class="meta">
                      <span class="dark-inverted">German</span>
                      <span>Beginner level</span>
                    </div>
                  </div>
                  <div class="languages-item">
                    <V-IconWrap picture="/images/icons/flags/spain.svg" />

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
                <RouterLink
                  :to="{ name: 'sidebar-layouts-profile-edit-skills' }"
                >
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
              </div>
              <div class="section-content">
                <div class="skills-wrapper">
                  <!--Skill-->
                  <div class="skills-item">
                    <V-IconWrap picture="/images/icons/stacks/js.svg" />

                    <div class="skill-info">
                      <span class="dark-inverted">Javascript</span>
                      <span>7 years of experience</span>
                    </div>
                    <div class="people">
                      <V-Avatar size="small" initials="BT" color="warning" />
                      <V-Avatar size="small" picture="/demo/avatars/18.jpg" />
                      <V-Avatar size="small" initials="JD" color="info" />
                      <V-Avatar size="small" picture="/demo/avatars/7.jpg" />
                      <V-Avatar size="small" initials="38" />
                    </div>
                  </div>

                  <!--Skill-->
                  <div class="skills-item">
                    <V-IconWrap icon="lnil lnil-burger-alt" placeholder />

                    <div class="skill-info">
                      <span class="dark-inverted">Product Management</span>
                      <span>4 years of experience</span>
                    </div>
                    <div class="people">
                      <V-Avatar size="small" picture="/demo/avatars/21.jpg" />
                      <V-Avatar size="small" initials="AT" color="success" />
                      <V-Avatar size="small" picture="/demo/avatars/39.jpg" />
                      <V-Avatar size="small" picture="/demo/avatars/23.jpg" />
                      <V-Avatar size="small" initials="27" />
                    </div>
                  </div>

                  <!--Skill-->
                  <div class="skills-item">
                    <V-IconWrap picture="/images/icons/stacks/html5.svg" />

                    <div class="skill-info">
                      <span class="dark-inverted">Html 5</span>
                      <span>10+ years of experience</span>
                    </div>
                    <div class="people">
                      <V-Avatar size="small" picture="/demo/avatars/38.jpg" />
                      <V-Avatar size="small" picture="/demo/avatars/11.jpg" />
                      <V-Avatar size="small" initials="SC" color="h-purple" />
                      <V-Avatar size="small" picture="/demo/avatars/13.jpg" />
                      <V-Avatar size="small" initials="19" />
                    </div>
                  </div>

                  <!--Skill-->
                  <div class="skills-item">
                    <V-IconWrap picture="/images/icons/stacks/css3.svg" />

                    <div class="skill-info">
                      <span class="dark-inverted">CSS 3</span>
                      <span>10+ years of experience</span>
                    </div>
                    <div class="people">
                      <V-Avatar size="small" picture="/demo/avatars/21.jpg" />
                      <V-Avatar size="small" initials="SC" color="h-purple" />
                      <V-Avatar size="small" picture="/demo/avatars/5.jpg" />
                      <V-Avatar size="small" picture="/demo/avatars/7.jpg" />
                      <V-Avatar size="small" initials="31" />
                    </div>
                  </div>
                </div>

                <div class="more-button has-text-centered">
                  <V-Button light>View More</V-Button>
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
                <a class="action-link">View All</a>
              </div>
              <div class="section-content">
                <div class="recommendations-wrapper">
                  <!--Recommendation-->
                  <div class="recommendations-item">
                    <V-Avatar
                      size="large"
                      picture="/demo/avatars/5.jpg"
                      badge="/images/icons/flags/united-states-of-america.svg"
                    />
                    <h3 class="dark-inverted">Project Manager</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At multis malis affectus. Certe, nisi voluptatem tanti
                      aestimaretis.
                    </p>
                    <div class="meta">
                      <span>Mary L.</span>
                      <span>September 3, 2020</span>
                    </div>
                  </div>

                  <!--Recommendation-->
                  <div class="recommendations-item">
                    <V-Avatar
                      size="large"
                      picture="/demo/avatars/18.jpg"
                      badge="/images/icons/flags/united-states-of-america.svg"
                    />

                    <h3 class="dark-inverted">UI/UX Designer</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At multis malis affectus. Certe, nisi voluptatem tanti
                      aestimaretis.
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
                <V-Control>
                  <label class="form-switch is-success">
                    <input type="checkbox" class="is-switch" checked />
                    <i aria-hidden="true"></i>
                  </label>
                </V-Control>
              </div>
              <div class="section-content">
                <div class="network-notifications">
                  <h3 class="dark-inverted">Notify Your Network?</h3>
                  <p>
                    Enable or disable this setting to manage if your network
                    should be notified when you make changes to your profile.
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
                <RouterLink
                  :to="{ name: 'sidebar-layouts-profile-edit-skills' }"
                >
                  <i aria-hidden="true" class="lnil lnil-pencil"></i>
                </RouterLink>
                <a class="action-link">View All</a>
              </div>
              <div class="section-content">
                <div class="tools-wrapper">
                  <!--Tool-->
                  <div class="tools-item">
                    <V-IconWrap
                      picture="/images/icons/stacks/illustrator.svg"
                    />

                    <div class="meta">
                      <span class="dark-inverted">Adobe Illustrator</span>
                      <span>Advanced level</span>
                    </div>
                  </div>

                  <!--Tool-->
                  <div class="tools-item">
                    <V-IconWrap picture="/demo/photos/brands/jira.svg" />

                    <div class="meta">
                      <span class="dark-inverted">Jira Software</span>
                      <span>Intermediate level</span>
                    </div>
                  </div>

                  <!--Tool-->
                  <div class="tools-item">
                    <V-IconWrap picture="/demo/photos/brands/office.svg" />

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
                <a class="action-link">View All</a>
              </div>
              <div class="section-content">
                <div class="people-wrapper">
                  <!--People-->
                  <a href="#" class="people-item">
                    <V-Avatar
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
                    <V-Avatar
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
                    <V-Avatar
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
                    <V-Avatar
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
                    <V-Avatar
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
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/profile/_user-profile.scss';

.is-dark {
  .icon-wrap,
  .icon-wrap.is-placeholder {
    background: lighten($dark-sidebar, 2%) !important;
    border-color: lighten($dark-sidebar, 12%) !important;
  }
}
</style>
