<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Title:</label>
        <input v-model="store.task_title" id="title" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description:</label>
        <textarea
          v-model="store.task_des"
          id="description"
          class="form-control"
        ></textarea>
      </div>
      <div v-if="store.task_id" class="mb-3">
        <div class="form-check">
          <input
            type="checkbox"
            :checked="store.task_status"
            @click="store.task_status = !store.task_status"
            class="form-check-input"
          />
          <label class="form-check-label">Completed</label>
        </div>
      </div>
      <button
        type="submit"
        :class="store.task_id ? 'btn btn-primary' : 'btn btn-success'"
      >
        {{ store.task_id ? "Update" : "Add" }} Task
      </button>
    </form>
  </div>
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
