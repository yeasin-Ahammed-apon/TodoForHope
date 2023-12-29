import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";

export const useTodoStore = defineStore("todo", () => {
  const isShowingList = ref(true);
  const task_title = ref("");
  const task_des = ref("");
  const task_status = ref(false);
  const task_id = ref(null);
  const datas = ref([]);
  onMounted(() => {
    datas.value = JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const addTask = (title, des) => {
    if (!title || !des || title.length === 0 || des.length === 0) {
      toast.warning(
        "Title and description cannot be empty. Please provide values.",
        {
          autoClose: 2000,
        }
      );
      return;
    }
    const val = {
      id: Date.now(),
      title: title,
      des: des,
      status: false,
    };
    datas.value.push(val);
    localStorage.setItem("tasks", JSON.stringify(datas.value));
    isShowingList.value = true;
    toast.success("Task Added Successfully", {
      autoClose: 2000,
    });
  };
  const updateTask = (title, des, status) => {
    if (!title || !des || title.length === 0 || des.length === 0) {
      toast.warning(
        "Title and description cannot be empty. Please provide values.",
        {
          autoClose: 2000,
        }
      );
      return;
    }
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
      toast.success("Task Updated Successfully", {
        autoClose: 2000,
      });
    }
  };
  const deletTask = () => {
    datas.value = datas.value.filter(
      (task) => task.id !== parseInt(task_id.value)
    );
    localStorage.setItem("tasks", JSON.stringify(datas.value));
    isShowingList.value = true;
    task_id.value = null;
    toast.success("Task Deleted Successfully", {
      autoClose: 2000,
    });
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
