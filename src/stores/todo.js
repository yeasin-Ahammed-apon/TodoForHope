import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const isShowingList = ref(true);
  const task_title = ref("");
  const task_des = ref("");
  const task_status = ref(false);
  const task_id = ref(null);
  const datas = ref([]);
  onMounted(() => {
    datas.value =JSON.parse(localStorage.getItem("tasks"))||[];
  });
  const addTask = (title, des) => {
    const val = {
      id: Date.now(),
      title: title,
      des: des,
      status: false,
    };
    datas.value.push(val)
    localStorage.setItem("tasks", JSON.stringify(datas.value));
    isShowingList.value = true;
  };
  const updateTask = (title, des, status) => {
    const index = datas.value.findIndex(
      (task) => task.id === parseInt(task_id.value)
    );
    if (index !== -1) {
      datas.value.splice(index, 1, {
        id: parseInt(task_id.value),
        title,
        des,
        status,
      });
      localStorage.setItem("tasks", JSON.stringify(datas.value));
    }
  };
  const deletTask = () => {
    datas.value = datas.value.filter(
      (task) => task.id !== parseInt(task_id.value)
    );
    localStorage.setItem("tasks", JSON.stringify(datas.value));
    isShowingList.value = true;
  };
  return {
    addTask,
    updateTask,
    deletTask,
    datas,
    task_id,
    isShowingList,
    task_title,
    task_des,
    task_status,
  };
});
