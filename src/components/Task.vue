<template>
  <div class="card m-2">
    <div
      :class="data.status ? 'card-body bg-secondary ' : 'card-body bg-success'"
    >
      <div class="title-container">
        <div
          :class="
            data.status
              ? 'text-decoration-line-through fs-3 title-text-done'
              : 'fs-3 title-text'
          "
        >
          {{ data.title }}
        </div>
        <div class="text-muted">{{ data.des }}</div>
      </div>
      <div class="action-buttons">
        <button @click="editData(data.id)" class="btn btn-warning me-2">
          Edit
        </button>
        <button @click="deleteTask(data.id)" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { useTodoStore } from "@/stores/todo";
const store = useTodoStore();

const { data } = defineProps(["data"]);

const editData = (id) => {
  store.task_id = id;
  store.isShowingList = false;
};

const deleteTask = (id) => {
  store.task_id = id;
  store.deletTask(id);
};
</script>
  
  <style>
.card {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.title-container {
  display: flex;
  flex-direction: column;
}

.title-text {
  font-size: 18px;
}

.title-text-done {
  font-size: 18px;
  font-weight: bold;
}

.text-muted {
  margin-top: 5px;
}

.action-buttons {
  margin-top: 10px;
}

.text-decoration-underline {
  text-decoration: underline;
}
</style>
  