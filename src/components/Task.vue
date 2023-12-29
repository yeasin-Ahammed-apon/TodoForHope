<template>
    
  {{ data.title }} <button @click="editData(data.id)">Edit</button>
  <button @click="store.deletTask(store.task_id = data.id)">X</button>
  <span>{{ data.status ? "done":"undone" }}</span>
  <br> 
</template>
<script setup>
import { useTodoStore } from "@/stores/todo";
const store = useTodoStore();
const {data} = defineProps(['data'])
const editData =(id)=>{
store.task_id = id;    
store.isShowingList = false;    
}

</script>