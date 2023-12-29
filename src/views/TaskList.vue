<template>
  <button
    class="btn btn-success"
    @click="addTask"
  >
    add
  </button>
  <br>
  <TaskVue v-for="data in store.datas" :key="data.id" :data="data" />
  <div v-if="!store.isShowingList">
    <TaskFormVue />
  </div>
</template>

<script setup>
import TaskVue from "@/components/Task.vue";
import TaskFormVue from "./TaskForm.vue";
import { useTodoStore } from "@/stores/todo";
const store = useTodoStore();
 const addTask = ()=>{
  store.isShowingList = !store.isShowingList;
  store.task_id = null;  
  store.task_title = ''
  store.task_des = ''
  store.task_status= false
 }
</script>

<style>
</style>