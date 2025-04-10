import { type Task } from "@/models/task.model";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [] as Task[],
      maxId: 0,
    };
  },

  getters: {
    bugsCount() {
      return this.tasks.filter((task: Task) => task.isBug).length;
    },
    sortedTasksByBugs() {
      return this.tasks.sort((a: Task, b: Task) => {
        if (a.isBug === b.isBug) return a.id > b.id ? 1 : -1;
        return a.isBug ? -1 : 1;
      });
    },
  },

  actions: {
    getTaskById(id: number) {
      return this.tasks.find((task: Task) => task.id === id);
    },
    createTask(name: string, isBug: boolean) {
      this.tasks.push({ name, isBug, id: ++this.maxId });
    },
    editTask(id: number, name: string, isBug: boolean) {
      const taskIndex = this.tasks.findIndex((task: Task) => task.id === id);

      if (taskIndex !== -1) {
        this.tasks[taskIndex] = { name, isBug, id };
      }
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    },
  },
});
