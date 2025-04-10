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
        transition: "slide-right",
      },
    },
    {
      path: "/create",
      name: "task-create",
      component: TaskCreateView,
      meta: {
        transition: "slide-left",
      },
    },
    {
      path: "/edit/:id",
      name: "task-edit",
      component: TaskEditView,
      meta: {
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

export default router;
