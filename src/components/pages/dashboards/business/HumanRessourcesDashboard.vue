<script setup lang="ts">
import { useTodoList } from '/@src/data/widgets/list/todoList'

const { todoList3, todoList4 } = useTodoList()

const data = [
  {
    type: 'messages',
    count: 5,
    status: 'new',
  },
  {
    type: 'tasks',
    count: 3,
    status: 'pending',
  },
]

const columns = {
  type: {
    label: 'Type',
    grow: 'lg',
    media: true,
  },
  count: {
    label: 'Count',
    align: 'center',
  },
  status: 'Status',
  actions: {
    label: 'Actions',
    align: 'end',
  },
} as const
</script>

<template>
  <div class="business-dashboard hr-dashboard">
    <div class="columns">
      <div class="column is-8">
        <div class="columns is-multiline">
          <!--Header-->
          <div class="column is-12">
            <div class="block-header">
              <!--left-->
              <div class="left">
                <div class="current-user">
                  <VAvatar
                    size="medium"
                    picture="/images/avatars/svg/vuero-1.svg"
                    squared
                  />
                  <h3>Welcome back, Erik.</h3>
                </div>
              </div>

              <!--Center-->
              <div class="center">
                <h4 class="block-heading">New Rookies</h4>
                <p class="block-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclarae
                  mortes.
                </p>
                <div class="candidates">
                  <VAvatar picture="/demo/avatars/13.jpg" squared />
                  <VAvatar picture="/demo/avatars/32.jpg" squared />
                  <VAvatar picture="/demo/avatars/9.jpg" squared />
                  <button>
                    <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
                  </button>
                </div>
              </div>

              <!--Right-->
              <div class="right">
                <h4 class="block-heading">Job Feed</h4>
                <p class="block-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclarae
                  mortes.
                </p>

                <VButton bold fullwidth dark-outlined>Manage Jobs</VButton>
              </div>
            </div>
          </div>

          <!--Selector-->
          <div class="column is-12">
            <div class="feed-settings">
              <h3 class="dark-inverted">Manage feed settings</h3>
              <div class="buttons">
                <button class="button is-dark-outlined">All</button>
                <button class="button is-selected is-dark-outlined">Candidates</button>
                <button class="button is-dark-outlined">Companies</button>
              </div>
            </div>
          </div>

          <!--Side Text-->
          <div class="column is-4">
            <div class="side-text">
              <h3 class="dark-inverted">More Details</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perge porro;
                Oratio me istius philosophi non offendit; Duo Reges: constructio
                interrete.
              </p>
              <a class="action-link" tabindex="0">Read More</a>
            </div>
          </div>

          <!--Incoming-->
          <div class="column is-7 is-offset-1">
            <div class="incoming">
              <VFlexTable rounded :data="data" :columns="columns">
                <template #body-cell="{ row, column, value }">
                  <template v-if="column.key === 'type' && row.type === 'messages'">
                    <VIconBox color="green">
                      <i aria-hidden="true" class="lnil lnil-envelope-alt"></i>
                    </VIconBox>
                    <div>
                      <span class="item-name dark-inverted">Messages</span>
                      <span class="item-meta">
                        <span>Inbox messages</span>
                      </span>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'type' && row.type === 'tasks'">
                    <VIconBox color="orange">
                      <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
                    </VIconBox>
                    <div>
                      <span class="item-name dark-inverted">Tasks</span>
                      <span class="item-meta">
                        <span>Pending tasks</span>
                      </span>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'status'">
                    <VTag
                      v-if="row.status === 'new'"
                      rounded
                      color="success"
                      label="New"
                    />
                    <VTag v-else rounded label="Pending" />
                  </template>
                  <template v-else-if="column.key === 'actions'">
                    <a tabindex="0" class="action-link is-pushed-mobile">Open</a>
                  </template>

                  <span v-else class="light-text">{{ value }}</span>
                </template>
              </VFlexTable>
            </div>
          </div>

          <!--Rookies-->
          <div class="column is-12">
            <div class="recent-rookies">
              <div class="recent-rookies-header">
                <h3 class="dark-inverted">Recent Rookies</h3>
                <a class="action-link" tabindex="0">View All</a>
              </div>

              <div class="columns user-grid user-grid-v4 is-flex-tablet-p">
                <!--Rookie-->
                <div class="column is-4">
                  <div class="grid-item">
                    <UserCardDropdown />
                    <VAvatar
                      picture="/demo/avatars/13.jpg"
                      badge="/images/icons/stacks/illustrator.svg"
                      size="large"
                    />
                    <h3 class="dark-inverted">Tara Svenson</h3>
                    <p>UI/UX Designer</p>
                    <div class="button-wrap has-text-centered">
                      <VButton color="primary" raised>Hire</VButton>
                    </div>
                  </div>
                </div>
                <!--Rookie-->
                <div class="column is-4">
                  <div class="grid-item">
                    <UserCardDropdown />
                    <VAvatar
                      picture="/demo/avatars/37.jpg"
                      badge="/images/icons/flags/france.svg"
                      size="large"
                    />
                    <h3 class="dark-inverted">Helmut Fritz</h3>
                    <p>Product Manager</p>
                    <div class="button-wrap has-text-centered">
                      <VButton dark-outlined bold>Assess</VButton>
                    </div>
                  </div>
                </div>
                <!--Rookie-->
                <div class="column is-4">
                  <div class="grid-item">
                    <UserCardDropdown />
                    <VAvatar
                      picture="/demo/avatars/25.jpg"
                      badge="/images/icons/stacks/js.svg"
                      size="large"
                    />
                    <h3 class="dark-inverted">Melany Wallace</h3>
                    <p>Web Developer</p>
                    <div class="button-wrap has-text-centered">
                      <VButton dark-outlined bold>Assess</VButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <!--Widget-->
        <UIWidget class="search-widget">
          <template #body>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="Search..." />
                <button class="searcv-button">
                  <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                </button>
              </div>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <ListWidgetTabbed title="Todo" :labels="['All', 'Mine']">
          <template #tab1>
            <ListWidgetTodoList :todos="todoList3" />
          </template>
          <template #tab2>
            <ListWidgetTodoList :todos="todoList4" />
          </template>
        </ListWidgetTabbed>

        <!--Widget-->
        <UIWidget class="picker-widget">
          <template #header>
            <div class="widget-toolbar">
              <div class="left">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify ltr-hidden"
                    data-icon="feather:chevron-right"
                  />
                  <i
                    aria-hidden="true"
                    class="iconify rtl-hidden"
                    data-icon="feather:chevron-left"
                  />
                </a>
              </div>
              <div class="center">
                <h3>October 2020</h3>
              </div>
              <div class="right">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify rtl-hidden"
                    data-icon="feather:chevron-right"
                  />
                  <i
                    aria-hidden="true"
                    class="iconify ltr-hidden"
                    data-icon="feather:chevron-left"
                  />
                </a>
              </div>
            </div>
          </template>
          <template #body>
            <table class="calendar">
              <thead>
                <tr>
                  <th scope="col">Mon</th>
                  <th scope="col">Tue</th>
                  <th scope="col">Wed</th>
                  <th scope="col">Thu</th>
                  <th scope="col">Fri</th>
                  <th scope="col">Sat</th>
                  <th scope="col">Sun</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="prev-month">29</td>
                  <td class="prev-month">30</td>
                  <td class="prev-month">31</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td class="current-day">18</td>
                </tr>

                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>

                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td class="next-month">1</td>
                </tr>
              </tbody>
            </table>
          </template>
        </UIWidget>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.hr-dashboard {
  .block-header {
    display: flex;
    border-radius: 16px;
    padding: 50px;
    background: var(--primary);
    font-family: var(--font);
    box-shadow: var(--primary-box-shadow);

    .left,
    .right {
      width: 30%;
    }

    .center {
      display: flex;
      flex-direction: column;
      width: 40%;
      padding-inline-end: 30px;
      margin-inline-end: 30px;
      border-inline-end: 1px solid var(--primary-light-10);

      .block-text {
        margin-bottom: 16px;
      }

      .candidates {
        margin-top: auto;

        > .v-avatar {
          margin-inline-end: 10px;
        }

        button {
          height: 40px;
          width: 40px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background: var(--white);
          color: var(--light-text);
          border: none;
          cursor: pointer;
          transition: all 0.3s; // transition-all test

          svg {
            height: 18px;
            width: 18px;
          }
        }
      }
    }

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      .current-user {
        .v-avatar {
          margin-bottom: 1rem;
        }

        h3 {
          font-family: var(--font-alt);
          font-weight: 700;
          font-size: 1.8rem;
          color: var(--white);
          line-height: 1.2;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;

      .button {
        margin-top: auto;
      }
    }

    .block-heading {
      font-family: var(--font-alt);
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--white);
      margin-bottom: 4px;
    }

    .block-text {
      font-family: var(--font);
      font-size: 0.9rem;
      color: var(--white);
      margin-bottom: 16px;
    }

    .header-meta {
      margin-inline-start: 0;
      padding-inline-end: 30px;

      h3 {
        color: var(--smoke-white);
        font-family: var(--font-alt);
        font-weight: 700;
        font-size: 1.3rem;
        max-width: 280px;
      }

      p {
        font-weight: 400;
        color: var(--smoke-white-dark-2);
        margin-bottom: 16px;
        max-width: 320px;
      }

      .action-link {
        span {
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-inline-end: 6px;
        }

        i {
          font-size: 12px;
        }
      }
    }
  }

  .feed-settings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    .button {
      font-size: 0.8rem;
      border-radius: 8px;
      margin-inline-end: 4px;

      &.is-selected {
        background: var(--primary);
        color: var(--white);
        border-color: var(--primary);
        box-shadow: var(--primary-box-shadow);
      }
    }
  }

  .side-text {
    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark-text);
      margin-bottom: 8px;
    }

    p {
      font-size: 0.95rem;
      margin-bottom: 8px;
    }

    .action-link {
      font-size: 0.9rem;
    }
  }

  .recent-rookies {
    .recent-rookies-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }

    .user-grid {
      &.user-grid-v4 {
        .grid-item {
          @include vuero-l-card;
        }
      }
    }
  }
}

.user-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }

  .grid-item {
    position: relative;
    @include vuero-s-card;

    text-align: center;

    &:hover,
    &:focus {
      .button-wrap {
        > div {
          a {
            opacity: 1;
            pointer-events: all;
          }
        }
      }
    }

    .dropdown {
      position: absolute;
      top: 10px;
      inset-inline-end: 10px;
      text-align: left;
    }

    > .v-avatar {
      display: block;
      margin: 0 auto 4px;
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-size: 0.85rem;
    }

    .button-wrap {
      margin: 20px 0 0;

      .v-button {
        width: 100%;
        max-width: 140px;
        margin: 0 auto;
      }

      > div {
        margin: 6px 0 0;

        a {
          opacity: 0;
          pointer-events: none;
          color: var(--light-text);
          font-weight: 500;
          font-size: 0.9rem;
          transition: opacity 0.3s, color 0.3s;

          &:hover,
          &:focus {
            color: var(--primary);
          }
        }
      }
    }
  }
}

.is-dark {
  .user-grid {
    .grid-item {
      @include vuero-card--dark;
    }
  }

  .hr-dashboard {
    .block-header {
      background: var(--dark-sidebar);
      box-shadow: none;

      .center {
        border-color: var(--dark-sidebar-light-10);

        .candidates {
          button {
            background: var(--dark-sidebar-light-10);
            border: 1px solid transparent;
            transition: all 0.3s; // transition-all test

            &:hover {
              border-color: var(--primary);

              svg {
                color: var(--primary);
              }
            }
          }
        }
      }
    }

    .feed-settings {
      .button {
        &.is-selected {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          box-shadow: var(--primary-box-shadow) !important;
          color: var(--white) !important;
        }
      }
    }

    .recent-rookies {
      .user-grid {
        &.user-grid-v4 {
          .grid-item {
            @include vuero-card--dark;
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .hr-dashboard {
    .block-header {
      flex-direction: column;
      padding: 30px;

      .left,
      .center,
      .right {
        width: 100%;
      }

      .left {
        justify-content: flex-start;
        margin-bottom: 20px;
      }

      .center {
        padding-inline-end: 0;
        margin-inline-end: 0;
        border-inline-end: none;
        margin-bottom: 20px;
      }
    }

    .feed-settings {
      flex-direction: column;

      h3 {
        margin-bottom: 16px;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .hr-dashboard {
    .block-header {
      padding: 40px;
    }

    .side-text {
      display: none;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .hr-dashboard {
    .block-header {
      padding: 40px;

      .left {
        .current-user {
          h3 {
            font-size: 1.5rem;
          }
        }
      }

      .center {
        .candidates {
          .v-avatar {
            &:nth-child(3) {
              display: none;
            }
          }
        }
      }
    }

    .column {
      &.is-7 {
        &.is-offset-1 {
          margin-inline-start: 2% !important;
          width: 64.3333% !important;
        }
      }
    }
  }
}
</style>
