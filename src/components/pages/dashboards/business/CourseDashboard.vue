<script setup lang="ts">
import { courses, files, students } from '/@src/data/dashboards/course'
</script>

<template>
  <div class="business-dashboard course-dashboard">
    <div class="dashboard-title is-main">
      <div class="left">
        <h2 class="dark-inverted">Week 6 Classes</h2>
        <p class="h-hidden-mobile">Classes from January 6 to 10</p>
      </div>
      <div class="right">
        <VButton color="primary" elevated>Open Schedule</VButton>
      </div>
    </div>

    <div class="course-grid">
      <div class="columns is-multiline">
        <!--Course card-->
        <div v-for="course in courses" :key="course.id" class="column is-4">
          <div class="course-card">
            <span
              class="tag is-elevated"
              :class="[
                course.category === 'Anatomy' && 'is-green',
                course.category === 'Immunology' && 'is-purple',
                course.category === 'Cardiology' && 'is-danger',
              ]"
              >{{ course.category }}</span
            >
            <h3 class="dark-inverted">{{ course.title }}</h3>
            <p>{{ course.summary }}</p>
            <div class="students">
              <VAvatar
                v-for="student in course.students"
                :key="student.id"
                :picture="student.picture"
                size="small"
              />
              <VAvatar size="small" :initials="`+${course.participants - 3}`" />
              <a class="link is-dark-primary">Class discussion</a>
            </div>
            <div class="attached-block">
              <a class="is-dark-primary">Week 6 lecture recording</a>
              <div class="block-stats">
                <span>
                  <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                  <small>{{ course.duration }}</small>
                </span>
                <span>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:message-circle"
                  ></i>
                  <small>{{ course.comments }}</small>
                </span>
              </div>
            </div>
            <div class="attached-block">
              <a class="is-dark-primary">{{ course.actionLabel }}</a>
              <div class="block-stats">
                <span>
                  <i aria-hidden="true" class="iconify" data-icon="feather:calendar"></i>
                  <small>{{ course.actionText }}</small>
                </span>
              </div>
            </div>
            <div class="action-block">
              <button class="button h-button is-primary is-raised is-fullwidth">
                View Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Tile Grid v1-->
    <div class="columns is-multiline tile-grid tile-grid-v2">
      <!--Grid item-->
      <div class="column is-4">
        <div class="dashboard-title">
          <div class="left">
            <h2 class="dark-inverted">Week 6 Files</h2>
            <p class="h-hidden-mobile">Files you will need for this week</p>
          </div>
        </div>

        <div v-for="file in files" :key="file.id" class="tile-grid-item">
          <div class="tile-grid-item-inner">
            <img :src="file.icon" alt="" />
            <div class="meta">
              <span class="dark-inverted">{{ file.name }}</span>
              <span>
                <span>{{ file.size }}</span>
                <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                <span>Uploaded {{ file.uploaded }}</span>
              </span>
            </div>
            <FileTileDropdown />
          </div>
        </div>
      </div>

      <!--Grid item-->
      <div class="column is-8">
        <div class="dashboard-title">
          <div class="left">
            <h2 class="dark-inverted">Students</h2>
            <p class="h-hidden-mobile">Summary of attending students</p>
          </div>
          <div class="right">
            <div class="field">
              <div class="control has-icon">
                <input
                  type="text"
                  class="input is-rounded"
                  placeholder="Search students..."
                />
                <div class="form-icon">
                  <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <VFlexTable
          rounded
          :data="students"
          :columns="{
            picture: {
              label: 'Picture',
              media: true,
              grow: true,
            },
            location: 'Location',
            status: 'Status',
            attendance: 'Schedule',
            actions: {
              label: 'Actions',
              align: 'end',
            },
          }"
        >
          <template #header><div /></template>

          <template #body-cell="{ row, column, value }">
            <template v-if="column.key === 'picture'">
              <VAvatar :picture="row.picture" size="medium" />
              <div>
                <span class="item-name dark-inverted">{{ row.username }}</span>
                <span class="item-meta">
                  <span>{{ row.progress }}% completed</span>
                </span>
              </div>
            </template>
            <template v-else-if="column.key === 'status'">
              <VTag
                class="tag is-rounded"
                :color="
                  row.status === 'Online'
                    ? 'green'
                    : row.status === 'Busy'
                    ? 'orange'
                    : undefined
                "
              >
                {{ row.status }}
              </VTag>
            </template>
            <template v-else-if="column.key === 'actions'">
              <VAction class="action-button is-dark-outlined is-pushed-mobile"
                >Chat</VAction
              >
            </template>

            <span v-else class="light-text">{{ value }}</span>
          </template>
        </VFlexTable>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.course-dashboard {
  .dashboard-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: var(--font);

    &.is-main {
      margin-bottom: 30px;

      h2 {
        font-size: 1.8rem;
      }
    }

    h2 {
      font-family: var(--font-alt);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--dark-text);
    }
  }

  .course-grid {
    margin-bottom: 2rem;

    .course-card {
      @include vuero-l-card;

      .tag {
        height: 2.75em;
        padding-inline-start: 1rem;
        padding-inline-end: 1rem;
        border-radius: 0.5rem;
        line-height: 2.7;
        margin-bottom: 2rem;
      }

      h3 {
        font-family: var(--font-alt);
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 1rem;
      }

      .students {
        display: flex;
        align-items: center;
        padding: 2rem 0;

        .v-avatar {
          margin: 0 0.25rem;

          .avatar {
            &.is-fake {
              span {
                position: relative;
                inset-inline-start: -2px;
              }
            }
          }
        }

        .link {
          font-family: var(--font);
          font-weight: 500;
          color: var(--primary);
          margin-inline-start: 1rem;
        }
      }

      .attached-block {
        + .attached-block {
          margin-top: 1.5rem;
        }

        > a {
          font-family: var(--font);
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .block-stats {
          display: flex;
          color: var(--light-text);

          + .block-stats {
            margin-top: 0.25rem;
          }

          span {
            font-family: var(--font);
            display: flex;
            align-items: center;
            margin-inline-end: 0.75rem;

            svg {
              height: 15px;
              width: 15px;
              stroke-width: 1px;
              margin-inline-end: 0.25rem;
            }
          }
        }
      }

      .action-block {
        margin-top: 2.5rem;

        .button {
          height: 46px;
          border-radius: 0.75rem;
        }
      }
    }
  }

  .tile-grid {
    .tile-grid-item {
      margin-bottom: 1rem;
    }
  }

  .flex-table {
    .flex-table-item {
      border-radius: 1rem;
      padding: 1rem;
      margin-bottom: 1rem;

      .tag {
        height: 2.75em;
        padding-inline-start: 1rem;
        padding-inline-end: 1rem;
        border-radius: 0.5rem;
        line-height: 2.7;
      }

      .action-button {
        border-radius: 0.75rem;

        &:hover,
        &:focus {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--white);
          box-shadow: var(--primary-box-shadow);
        }
      }
    }
  }
}

.tile-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.tile-grid-v2 {
  .tile-grid-item {
    @include vuero-s-card;

    border-radius: 14px;
    padding: 16px;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: var(--primary);
      box-shadow: var(--light-box-shadow);
    }

    .tile-grid-item-inner {
      display: flex;
      align-items: center;

      > img {
        display: block;
        width: 50px;
        height: 50px;
        min-width: 50px;
      }

      .meta {
        margin-inline-start: 10px;
        line-height: 1.4;

        span {
          display: block;
          font-family: var(--font);

          &:first-child {
            color: var(--dark-text);
            font-family: var(--font-alt);
            font-weight: 600;
            font-size: 1rem;
          }

          &:nth-child(2) {
            display: flex;
            align-items: center;

            span {
              display: inline-block;
              color: var(--light-text);
              font-size: 0.8rem;
              font-weight: 400;
            }

            .icon-separator {
              position: relative;
              font-size: 4px;
              color: var(--light-text);
              padding: 0 6px;
            }
          }
        }
      }

      .dropdown {
        margin-inline-start: auto;
      }
    }
  }
}

.is-dark {
  .course-dashboard {
    .course-grid {
      .course-card {
        @include vuero-card--dark;
      }
    }
  }

  .tile-grid {
    .tile-grid-item {
      @include vuero-card--dark;
    }
  }

  .tile-grid-v2 {
    .tile-grid-item {
      @include vuero-card--dark;

      &:hover,
      &:focus {
        border-color: var(--primary) !important;
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .course-dashboard {
    .dashboard-title {
      flex-direction: column;

      .left {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
