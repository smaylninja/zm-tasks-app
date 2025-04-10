import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TaskCreateView from "@/views/TaskCreateView.vue";
import TaskEditView from "@/views/TaskEditView.vue";
import { useTaskStore } from "@/stores/task";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create",
      name: "task-create",
      component: TaskCreateView,
    },
    {
      path: "/edit/:id",
      name: "task-edit",
      component: TaskEditView,
    },
  ],
});

export default router;
