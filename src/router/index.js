import { createRouter, createWebHistory } from 'vue-router'
import TaskListVue from '@/views/TaskList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskListVue
    },            
  ]
})

export default router
