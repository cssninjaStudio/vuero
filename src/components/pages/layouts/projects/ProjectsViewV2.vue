<template>
  <div class="all-projects">
    <ProjectsToolbar />

    <div class="all-projects-header">
      <div class="header-item">
        <div class="item-inner">
          <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
          <span>147</span>
          <p>Published projects</p>
        </div>
      </div>
      <div class="header-item">
        <div class="item-inner">
          <i aria-hidden="true" class="lnil lnil-target-alt-1"></i>
          <span>1638</span>
          <p>Completed Tasks</p>
        </div>
      </div>
      <div class="header-item">
        <div class="item-inner">
          <i aria-hidden="true" class="lnil lnil-pie-chart-alt"></i>
          <span>88%</span>
          <p>Team Performance</p>
        </div>
      </div>
      <div class="header-item">
        <div class="item-inner">
          <i aria-hidden="true" class="lnil lnil-leaf"></i>
          <span>17</span>
          <p>Team Members</p>
        </div>
      </div>
    </div>

    <div class="columns is-multiline projects-card-grid">
      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#118 Agios Inc. Rebranding</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis; Quae cum
                essent dicta, discessimus. Iam enim adesse poterit. Duo Reges: constructio
                interrete.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" color="primary" initials="FE" />
                <VAvatar size="small" color="success" initials="SD" />
                <VAvatar size="small" color="info" initials="NJ" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#117 Sweet Candy Website Updates</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" picture="/demo/avatars/7.jpg" />
                <VAvatar size="small" picture="/images/avatars/svg/vuero-1.svg" />
                <VAvatar size="small" color="danger" initials="DC" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#116 Update our Design Plugin</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis; Quae cum
                essent dicta, discessimus. Iam enim.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" picture="/demo/avatars/25.jpg" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#115 Refactor Chat App</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" picture="/demo/avatars/7.jpg" />
                <VAvatar size="small" picture="/demo/avatars/23.jpg" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#114 Develop a Marketing Website</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis; Quae cum
                essent dicta, discessimus. Iam enim adesse poterit. Duo Reges: constructio
                interrete.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" picture="/demo/avatars/11.jpg" />
                <VAvatar size="small" color="h-orange" initials="AG" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#113 Develop a Landing Page</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis; Quae cum
                essent dicta, discessimus. Iam enim.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" picture="/demo/avatars/12.jpg" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#112 Build a Social Mobile App</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" picture="/demo/avatars/24.jpg" />
                <VAvatar size="small" picture="/demo/avatars/18.jpg" />
                <VAvatar size="small" picture="/demo/avatars/16.jpg" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#111 Bulma Inc. Rebranding</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis; Quae cum
                essent dicta, discessimus. Iam enim adesse poterit. Duo Reges: constructio
                interrete.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" color="info" initials="ET" />
                <VAvatar size="small" color="warning" initials="BH" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!--Project-->
      <div class="column is-6">
        <div class="grid-item">
          <div class="top-section">
            <div class="head">
              <h3>#110 Develop a Localisation Plugin</h3>
              <!--Dropdown-->
              <ProjectCardDropdown />
            </div>
            <div class="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste,
                inquam, de voluptate quid sentit? Itaque contra est, ac dicitis; Quae cum
                essent dicta, discessimus. Iam enim.
              </p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="foot-block">
              <h4 class="heading">Developers</h4>
              <div class="developers">
                <VAvatar size="small" picture="/demo/avatars/25.jpg" />
                <VAvatar size="small" color="info" initials="ET" />
              </div>
            </div>
            <div class="foot-block">
              <h4 class="heading">Deadline</h4>
              <p>Aug 7 2020</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Budget</h4>
              <p>$15,000</p>
            </div>
            <div class="foot-block">
              <h4 class="heading">Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.all-projects {
  .all-projects-header {
    display: flex;
    padding: 20px;
    background: var(--white);
    border: 1px solid var(--fade-grey-dark-3);
    border-radius: var(--radius-large);
    margin-bottom: 1.5rem;

    .header-item {
      width: 25%;
      border-inline-end: 1px solid var(--fade-grey-dark-3);

      &:last-child {
        border-inline-end: none;
      }

      .item-inner {
        text-align: center;

        .lnil,
        .lnir {
          font-size: 2.2rem;
          margin-bottom: 6px;
          color: var(--primary);
        }

        span {
          display: block;
          font-family: var(--font);
          font-weight: 600;
          font-size: 1.4rem;
          color: var(--dark-text);
        }

        p {
          font-family: var(--font-alt);
        }
      }
    }
  }

  .projects-card-grid {
    .grid-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 220px;
      padding: 20px;
      background: var(--white);
      border: 1px solid var(--fade-grey-dark-3);
      border-radius: var(--radius-large);

      .top-section {
        .head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;

          h3 {
            font-size: 1rem;
            font-family: var(--font-alt);
            color: var(--dark-text);
            font-weight: 600;
          }
        }

        .body {
          p {
            font-family: var(--font);
            color: var(--light-text);
          }
        }
      }

      .bottom-section {
        display: flex;

        .foot-block {
          margin-inline-end: 30px;

          .heading {
            font-family: var(--font-alt);
            font-size: 0.75rem;
            color: var(--light-text-dark-22);
          }

          > p {
            padding-top: 5px;
          }

          .developers {
            display: flex;

            .v-avatar {
              margin-inline-end: 6px;
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .all-projects {
    .all-projects-header {
      background: var(--dark-sidebar-light-6);
      border-color: var(--dark-sidebar-light-12);

      .header-item {
        border-color: var(--dark-sidebar-light-18);

        span {
          color: var(--dark-dark-text);
        }

        i {
          color: var(--primary) !important;
        }
      }
    }

    .projects-card-grid {
      .grid-item {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);

        .top-section {
          .head {
            h3 {
              color: var(--dark-dark-text);
            }
          }
        }

        .bottom-section {
          .foot-block {
            .heading {
              color: var(--light-text-dark-12);
            }
          }
        }
      }
    }
  }
}
</style>
