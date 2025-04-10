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
      meta: {
        title: "Главная страница | ZM Задачник",
        transition: "slide-right",
      },
    },
    {
      path: "/create",
      name: "task-create",
      component: TaskCreateView,
      meta: {
        title: "Создать задачу | ZM Задачник",
        transition: "slide-left",
      },
    },
    {
      path: "/edit/:id",
      name: "task-edit",
      component: TaskEditView,
      meta: {
        title: "Редактировать задачу | ZM Задачник",
        transition: "slide-left",
      },
      beforeEnter: (to) => {
        const taskStore = useTaskStore();

        if (taskStore.getTaskById(+to.params.id)) {
          return true;
        } else {
          router.push("/");
        }
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "ZM Задачник";
  next();
});

export default router;
