<script setup lang="ts">
import { useTodoList } from '/@src/data/widgets/list/todoList'
import { fileList1, fileList2 } from '/@src/data/widgets/list/fileList'
import { userList } from '/@src/data/widgets/list/userList'
import { topicList } from '/@src/data/widgets/list/topicList'
import { timeline } from '/@src/data/widgets/list/timeline'

const { todoList1, todoList2, todoList3, todoList4 } = useTodoList()

const todoList1Selection = ref([todoList1.value[1]])
const todoList2Selection = ref([todoList2.value[0], todoList2.value[3]])
const todoList3Selection = ref([todoList3.value[0], todoList3.value[2]])
const todoList4Selection = ref([
  todoList4.value[1],
  todoList4.value[3],
  todoList4.value[4],
])
</script>

<template>
  <div class="columns is-multiline widget-demo-columns half-columns">
    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle
        title="User Progress"
        straight
        class="list-widget-v1"
      >
        <listWidgetUserList :users="userList" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1b-->
    <div class="column is-4">
      <ListWidgetSingle
        title="User Progress"
        straight
        class="list-widget-v1"
      >
        <listWidgetUserList
          :users="userList"
          squared
        />
      </ListWidgetSingle>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <ListWidgetTabbed
        title="Files"
        straight
        class="list-widget-v2"
      >
        <template #tab1>
          <listWidgetFileList :files="fileList1" />
        </template>
        <template #tab2>
          <listWidgetFileList :files="fileList2" />
        </template>
      </ListWidgetTabbed>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle
        title="Todo"
        straight
        class="list-widget-v1"
      >
        <ListWidgetTodoList
          v-model="todoList1Selection"
          :todos="todoList1"
          color="warning"
        />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle
        title="Todo"
        straight
        class="list-widget-v1"
      >
        <ListWidgetTodoList
          v-model="todoList2Selection"
          :todos="todoList2"
          color="info"
        />
      </ListWidgetSingle>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <ListWidgetTabbed
        title="Todo"
        straight
        :labels="['All', 'Mine']"
        class="list-widget-v2"
      >
        <template #tab1>
          <ListWidgetTodoList
            v-model="todoList3Selection"
            :todos="todoList3"
          />
        </template>
        <template #tab2>
          <ListWidgetTodoList
            v-model="todoList4Selection"
            :todos="todoList4"
          />
        </template>
      </ListWidgetTabbed>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle
        title="Topics"
        straight
        class="list-widget-v1"
      >
        <listWidgetTopicList
          :topics="topicList"
          rounded
        />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle
        title="Topics"
        straight
        class="list-widget-v1"
      >
        <listWidgetTopicList :topics="topicList" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <ListWidgetTabbed
        title="Topics"
        straight
        class="list-widget-v2"
      >
        <template #tab1>
          <listWidgetTopicList :topics="topicList" />
        </template>
        <template #tab2>
          <listWidgetTopicList :topics="topicList" />
        </template>
      </ListWidgetTabbed>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle
        title="Timeline"
        straight
        class="list-widget-v3"
      >
        <ListWidgetIconTimeline :items="timeline" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle
        title="Timeline"
        straight
        class="list-widget-v3"
      >
        <ListWidgetIconTimeline
          :items="timeline"
          squared
        />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle
        title="Timeline"
        straight
        class="list-widget-v3"
      >
        <ListWidgetIconTimeline
          :items="timeline"
          squared
          colored
        />
      </ListWidgetSingle>
    </div>
  </div>
</template>
