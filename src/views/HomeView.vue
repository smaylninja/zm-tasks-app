<script setup lang="ts">
import TasksCounter from "@/components/TasksCounter.vue";
import TasksTable from "@/components/TasksTable.vue";
import VButton from "@/components/UI/VButton.vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();

const deleteTask = (id: number) => {
  taskStore.deleteTask(id);
};
</script>

<template>
  <div class="home">
    <TasksTable
      :tasks="taskStore.sortedTasksByBugs"
      @delete-task="deleteTask"
    />

    <footer>
      <TasksCounter
        :tasks-count="taskStore.tasks.length"
        :bugs-count="taskStore.bugsCount"
      />
      <RouterLink to="/create">
        <VButton variant="accent" prepend-icon="plus">
          Добавить задачу
        </VButton>
      </RouterLink>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  & > footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
}
</style>
