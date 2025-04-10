<script lang="ts" setup>
import { Task } from "@/models/task.model";

defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits(["deleteTask"]);
</script>

<template>
  <div class="tasks">
    <template v-for="task in tasks" :key="task.id">
      <div class="task-item" :class="{ bug: task.isBug }">
        <div class="task-name">
          <span class="task-id">{{ `# ${task.id}` }}</span>
          &nbsp;
          <p>{{ task.name }}</p>
        </div>

        <div class="buttons">
          <RouterLink :to="`/edit/${task.id}`">
            <img class="button" src="../assets/icons/edit.svg" />
          </RouterLink>

          <img
            class="button"
            src="../assets/icons/delete.svg"
            @click="emit('deleteTask', task.id)"
          />
        </div>
      </div>
    </template>
    <span class="empty-message" v-if="!tasks.length">
      Привет! На сегодня задач нет 😊
    </span>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  display: flex;
  flex-direction: column;

  & > .task-item {
    padding: 8px 19px;
    border-bottom: 1px solid #cdcdcd;
    display: flex;
    justify-content: space-between;
    align-items: start;
    min-width: clamp(0px, 50vw, 356px);
    color: var(--text-primary);

    & > .task-name {
      display: flex;
      > p {
        overflow-wrap: anywhere;
      }
    }

    & > .task-name > .task-id {
      font-weight: 700;
      color: var(--text-primary-pale);
      white-space: nowrap;
    }

    &:last-child {
      border-bottom: none;
    }

    & > .buttons {
      display: flex;
      gap: 4px;
      margin-left: 8px;
      min-width: 44px;

      & > .button {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  & > .bug {
    color: var(--text-bug);
    & > .task-name > .task-id {
      color: var(--text-bug-pale);
    }
  }
}
.empty-message {
  text-align: center;
}
</style>
