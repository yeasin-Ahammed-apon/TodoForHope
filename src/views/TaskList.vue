<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <button class="btn btn-success mb-3" @click="addTask">Add</button>
      </div>
    </div>
    <div class="row">
      <div
        :class="
          store.isShowingList
            ? 'col-12 col-sm-12 order-sm-last'
            : 'col-12 col-sm-6'
        "
      >
        <TaskVue v-for="data in store.datas" :key="data.id" :data="data" />
      </div>
      <div
        v-if="!store.isShowingList"
        :class="
          store.isShowingList
            ? 'col-12 col-sm-12 order-sm-first'
            : 'col-12 col-sm-6'
        "
      >
        <TaskFormVue />
      </div>
    </div>
  </div>
</template>

<script setup>
import TaskVue from "@/components/Task.vue";
import TaskFormVue from "./TaskForm.vue";
import { useTodoStore } from "@/stores/todo";
const store = useTodoStore();

const addTask = () => {
  store.isShowingList = !store.isShowingList;
  store.task_id = null;
  store.task_title = "";
  store.task_des = "";
  store.task_status = false;
};
</script>

<style>
@media (max-width: 768px) {
  .btn-success {
    width: 100%;
  }
}
</style>
