<template>
  <div class="soccer-dashboard">
    <div class="soccer-dashboard-inner">
      <div class="columns">
        <div class="column is-4">
          <!--Live match card-->
          <div class="live-match">
            <div class="head">
              <h3 class="title is-5">UEFA Champions League</h3>
              <div class="league">
                <div class="left">
                  <span>Group C</span>
                  <span>Match 3 of 6</span>
                </div>
                <div class="right">
                  <div class="live-block">
                    <i class="iconify" data-icon="feather:video"></i>
                    <span>Live Now</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="match">
              <div class="left">
                <img
                  class="team-logo"
                  src="/images/icons/soccer/teams/barcelona.svg"
                  alt=""
                />
                <span class="team-name">Barcelona</span>
              </div>
              <div class="center">
                <span class="score">4</span>
                <span class="separator">:</span>
                <span class="score">0</span>
              </div>
              <div class="right">
                <img class="team-logo" src="/images/icons/soccer/teams/psg.svg" alt="" />
                <span class="team-name">PSG</span>
              </div>
            </div>
            <div class="action">
              <VButton color="primary" fullwidth raised>Watch Now</VButton>
            </div>
          </div>

          <!--Leagues-->
          <div class="leagues">
            <div class="head">
              <h3 class="title is-5">Available leagues</h3>
            </div>
            <div class="leagues-list">
              <RouterLink to="/sidebar/dashboards/soccer" class="league-item">
                <img
                  class="league-logo"
                  src="/images/icons/soccer/leagues/ligue-1.svg"
                  alt=""
                />
                <div class="meta">
                  <span class="league-name">Ligue 1</span>
                  <span class="league-country">France</span>
                </div>
                <div class="end">
                  <span>8 matches</span>
                </div>
              </RouterLink>
              <RouterLink to="/sidebar/dashboards/soccer" class="league-item">
                <img
                  class="league-logo"
                  src="/images/icons/soccer/leagues/laliga.svg"
                  alt=""
                />
                <div class="meta">
                  <span class="league-name">La Liga</span>
                  <span class="league-country">Spain</span>
                </div>
                <div class="end">
                  <span>8 matches</span>
                </div>
              </RouterLink>
              <RouterLink to="/sidebar/dashboards/soccer" class="league-item">
                <img
                  class="league-logo"
                  src="/images/icons/soccer/leagues/liga.svg"
                  alt=""
                />
                <div class="meta">
                  <span class="league-name">Liga</span>
                  <span class="league-country">Portugal</span>
                </div>
                <div class="end">
                  <span>8 matches</span>
                </div>
              </RouterLink>
              <RouterLink to="/sidebar/dashboards/soccer" class="league-item">
                <img
                  class="league-logo"
                  src="/images/icons/soccer/leagues/bundesliga.svg"
                  alt=""
                />
                <div class="meta">
                  <span class="league-name">Bundesliga</span>
                  <span class="league-country">Germany</span>
                </div>
                <div class="end">
                  <span>8 matches</span>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>

        <!--Right side-->
        <div class="column is-8">
          <!--Colored CTA-->
          <div class="dashboard-cta">
            <div class="dashboard-cta-img">
              <img alt="" src="/demo/photos/soccer/player.png" />
            </div>
            <h2 class="dashboard-cta-title">Win awesome prizes in our contest</h2>
            <p class="dashboard-cta-text">
              Predict who will win and how a match will end and get a chance to win
              incredible cash prizes.
            </p>
            <VButton color="light" bold raised>Learn More</VButton>
          </div>

          <!--Matches table-->
          <div class="matches-card">
            <!--Header-->
            <div class="matches-card-header">
              <!--Tabs-->
              <ul class="header-nav">
                <li class="nav-item">
                  <a class="nav-link is-active">All</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Live</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Finished</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Scheduled</a>
                </li>
              </ul>
            </div>

            <!--Table-->
            <div class="matches-card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th class="has-text-centered">Match</th>
                    <th>Stadium</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">-- : --</span>
                        <span class="tag is-live">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          Live
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>Barcelona</span
                          ><img alt="" src="/images/icons/soccer/teams/barcelona.svg" />
                        </div>
                        <p class="score-result score-result-vertical">
                          <span class="score-goals">4</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">0</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img alt="" src="/images/icons/soccer/teams/psg.svg" /><span
                            >PSG</span
                          >
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">Camp Nou</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">10:30</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          Scheduled
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>Real Madrid</span
                          ><img alt="" src="/images/icons/soccer/teams/madrid.svg" />
                        </div>
                        <p class="score-result score-result-vertical">
                          <span class="score-goals">1</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">0</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img
                            alt=""
                            src="/images/icons/soccer/teams/liverpool.svg"
                          /><span>Liverpool</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">Bernabeu</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">12:00</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          Scheduled
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>Arsenal</span
                          ><img alt="" src="/images/icons/soccer/teams/arsenal.svg" />
                        </div>
                        <p
                          class="score__result score__result--vertical score__result--not-started"
                        >
                          <span class="score-goals">-</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">-</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img alt="" src="/images/icons/soccer/teams/chelsea.svg" /><span
                            >Chelsea</span
                          >
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">Arsenal</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">14:00</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          Scheduled
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>Everton</span
                          ><img alt="" src="/images/icons/soccer/teams/everton.svg" />
                        </div>
                        <p
                          class="score__result score__result--vertical score__result--not-started"
                        >
                          <span class="score-goals">-</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">-</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img
                            alt=""
                            src="/images/icons/soccer/teams/liverpool.svg"
                          /><span>Liverpool</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">Goodison Park</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">16:00</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          Scheduled
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>Valladolid</span
                          ><img alt="" src="/images/icons/soccer/teams/valladolid.svg" />
                        </div>
                        <p
                          class="score__result score__result--vertical score__result--not-started"
                        >
                          <span class="score-goals">-</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">-</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img alt="" src="/images/icons/soccer/teams/zagreb.svg" /><span
                            >Zagreb</span
                          >
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">José-Zorrilla</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">18:00</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          Scheduled
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>PSG</span
                          ><img alt="" src="/images/icons/soccer/teams/psg.svg" />
                        </div>
                        <p
                          class="score__result score__result--vertical score__result--not-started"
                        >
                          <span class="score-goals">-</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">-</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img alt="" src="/images/icons/soccer/teams/chelsea.svg" /><span
                            >Chelsea</span
                          >
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">Parc des Princes</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.soccer-dashboard {
  .soccer-dashboard-inner {
    .live-match {
      @include vuero-l-card;

      padding: 2rem;
      margin-bottom: 1.5rem;

      .head {
        margin-bottom: 1.5rem;

        .league {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left {
            span {
              display: block;
              font-family: var(--font);

              &:first-child {
                color: var(--dark-text);
              }

              &:nth-child(2) {
                color: var(--light-text);
                font-size: 0.9rem;
              }
            }
          }

          .right {
            .live-block {
              display: inline-flex;
              align-items: center;
              padding: 0.25rem 0.75rem;
              border-radius: 50rem;
              background: var(--danger);
              color: var(--white);
              box-shadow: var(--danger-box-shadow);

              span {
                display: inline-block;
                font-family: var(--font);
                font-size: 0.85rem;
                margin-inline-start: 0.25rem;
              }
            }
          }
        }
      }

      .match {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;

        .left,
        .right {
          text-align: center;

          .team-logo {
            display: block;
            min-width: 50px;
            max-width: 50px;
            text-align: center;
            margin-bottom: 0.25rem;
          }

          .team-name {
            display: block;
            font-family: var(--font);
            font-weight: 500;
          }
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;

          .score {
            display: block;
            font-family: var(--font);
            font-weight: 700;
            font-size: 2.25rem;
          }

          .separator {
            position: relative;
            top: -2px;
            display: block;
            padding: 0 0.5rem;
            font-family: var(--font);
            font-weight: 700;
            font-size: 1.75rem;
          }
        }
      }

      .action {
        .v-button {
          border-radius: 0.65rem;
          height: 44px;
        }
      }
    }

    .leagues {
      @include vuero-l-card;

      padding: 2rem;

      .head {
        margin-bottom: 1.5rem;
      }

      .leagues-list {
        .league-item {
          display: flex;
          align-items: center;

          &:not(:last-child) {
            margin-bottom: 1rem;
          }

          .league-logo {
            display: block;
            min-width: 38px;
            max-width: 38px;
          }

          .meta {
            margin-inline-start: 0.5rem;
            line-height: 1.2;

            .league-name {
              display: block;
              font-family: var(--font-alt);
              font-size: 1rem;
              font-weight: 600;
              color: var(--dark-text);
            }

            .league-country {
              display: block;
              font-family: var(--font);
              font-size: 0.9rem;
              color: var(--light-text);
            }
          }

          .end {
            margin-inline-start: auto;
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
          }
        }
      }
    }

    .dashboard-cta {
      background-color: var(--primary);
      padding: 2rem;
      border-radius: 1rem;
      position: relative;
      margin-bottom: 1.5rem;

      .dashboard-cta-title {
        font-family: var(--font-alt);
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--white);
        margin: 0 0 0.25rem;
      }

      .dashboard-cta-text {
        color: var(--white);
        opacity: 0.9;
        font-family: var(--font);
        line-height: 1.7;
        margin-top: 0;
        max-width: 58%;
        margin-bottom: 1rem;
      }

      .dashboard-cta-img {
        width: 40%;
        max-width: 350px;
        position: absolute;
        overflow: hidden;
        height: calc(110%);
        top: -10%;
        inset-inline-end: 2rem;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .matches-card {
      @include vuero-l-card;

      padding: 0;
      overflow: hidden;

      .matches-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3rem;
        padding: 2rem 2rem 0;

        .header-nav {
          display: flex;

          .nav-item {
            .nav-link {
              font-family: var(--font);
              margin-inline-end: 1rem;
              border-bottom: 3px solid transparent;
              padding-bottom: 1rem;
              color: var(--light-text);

              &.is-active {
                color: var(--dark-text);
                border-bottom-color: var(--primary);
              }
            }
          }
        }
      }

      .matches-card-body {
        overflow-x: auto;

        .table {
          width: 100%;

          thead th {
            border: none;
            font-family: var(--font);
            font-size: 0.8rem;
            text-transform: uppercase;
            text-align: inset-inline-start;
          }

          tr {
            th:first-child,
            td:first-child {
              padding-inline-start: 2rem;
            }

            th:last-child,
            td:last-child {
              padding-inline-end: 2rem;
            }

            td {
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;

              &.score-cell {
                min-width: 300px;
              }

              .match-time-row {
                display: flex;
                align-items: center;

                .match-time {
                  font-family: var(--font);
                  color: var(--light-text);
                  margin-inline-end: 0.75rem;
                }

                .tag {
                  font-family: var(--font);

                  svg {
                    color: var(--warning);
                  }

                  &.is-live {
                    svg {
                      color: var(--danger);
                    }
                  }
                }
              }

              .table-action {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 36px;
                width: 36px;
                border-radius: 50%;
                color: var(--light-text);
                transition: background-color 0.3s;

                &:hover,
                &:focus {
                  background: var(--widget-grey);
                }
              }
            }
          }

          .score {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            .score-vertical {
              justify-content: flex-start;
            }

            .score-team {
              text-align: center;

              span {
                display: block;
                font-weight: 500;
                padding-top: 0.25rem;
              }

              img {
                width: 40px;
              }

              &.score-team-vertical {
                display: flex;
                align-items: center;
                flex: 1;

                &:first-child {
                  justify-content: flex-end;
                }

                span {
                  white-space: nowrap;
                  font-size: inherit;
                }

                img {
                  width: 32px;
                  margin: 0 0.5rem;
                }
              }
            }

            .score-result {
              text-align: center;
              width: 100%;
              font-weight: 900;
              font-size: 1.75rem;
              margin: 0;
              letter-spacing: 0.4em;

              &.score-result-not-started {
                color: gray;
              }

              &.score-result-vertical {
                letter-spacing: 0.2em;
                font-size: inherit;
                flex: 0 0 auto;
                width: auto;
              }
            }
          }
        }
      }
    }

    .matches {
      .nav-item {
        &:first-child {
          .nav-link {
            padding-inline-start: 0;
          }
        }

        .nav-link {
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
}

.is-dark {
  .soccer-dashboard {
    .soccer-dashboard-inner {
      .live-match,
      .leagues {
        @include vuero-card--dark;

        .head {
          .title {
            color: var(--white) !important;
          }
        }

        .match {
          .left,
          .right {
            .team-name {
              color: var(--white) !important;
            }
          }
        }

        .leagues-list {
          .league-item {
            .meta {
              span:first-child {
                color: var(--white) !important;
              }
            }
          }
        }
      }

      .matches-card {
        @include vuero-card--dark;

        .matches-card-header {
          .header-nav {
            .nav-item {
              .nav-link {
                &.is-active {
                  color: var(--white) !important;
                }
              }
            }
          }
        }
      }

      .matches-card-body {
        .table {
          .score {
            .score-team {
              &.score-team-vertical {
                > span {
                  color: var(--white) !important;
                }
              }
            }
          }

          tr td {
            .table-action {
              &:hover {
                background: var(--dark-sidebar-light-2) !important;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .soccer-dashboard {
    .soccer-dashboard-inner {
      .dashboard-cta {
        .dashboard-cta-title {
          max-width: 170px;
        }

        .dashboard-cta-img {
          inset-inline-end: -0.25rem;
          width: 36%;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .soccer-dashboard {
    .soccer-dashboard-inner {
      .dashboard-cta {
        .dashboard-cta-title {
          max-width: 170px;
        }

        .dashboard-cta-img {
          inset-inline-end: 1rem;
          width: 36%;
        }
      }
    }
  }
}
</style>
