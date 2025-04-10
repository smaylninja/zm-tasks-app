<script lang="ts" setup>
const { tasksCount = 0, bugsCount = 0 } = defineProps<{
  tasksCount: number;
  bugsCount: number;
}>();
</script>

<template>
  <div class="task-counter">
    <span>Задач: {{ tasksCount }} / Багов: {{ bugsCount }}</span>
  </div>
</template>

<style lang="scss" scoped>
.task-counter {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -1%;
  color: var(--text-primary);
}
</style>
