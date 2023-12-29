<template>
  <form @submit.prevent="submitForm">
    <label for="title">Title:</label>
    <input v-model="store.task_title" id="title" required />
    <br />
    <label for="description">Description:</label>
    <textarea v-model="store.task_des" id="description"></textarea>
    <br />
    <div v-if="store.task_id">
      <input
        type="checkbox"
        :checked="store.task_status"
        @click="store.task_status = !store.task_status"
      />
    </div>
    <button type="submit">{{ store.task_id ? "Update" : "Add" }} Task</button>
  </form>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useTodoStore } from "@/stores/todo";
const store = useTodoStore();

onMounted(() => check_id());
watch(
  () => store.task_id,
  (newValue, oldValue) => check_id()
);
const check_id = () => {
  if (store.task_id) {
    let data = store.datas.find((task) => task.id === parseInt(store.task_id));
    store.task_title = data.title;
    store.task_des = data.des;
    store.task_status = data.status;
  }
};
const submitForm = () => {
  if (store.task_id) {
    store.updateTask(store.task_title, store.task_des, store.task_status);
  } else {
    store.addTask(store.task_title, store.task_des);
  }
  store.isShowingList = true;
  store.task_id = null;
  store.task_title = "";
  store.task_des = "";
  store.task_status = false;
};
</script>
<style>
</style>