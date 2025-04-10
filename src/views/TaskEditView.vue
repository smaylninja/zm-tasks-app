<script lang="ts" setup>
import VTextInput from "@/components/UI/VTextInput.vue";
import VButton from "@/components/UI/VButton.vue";
import VCheckbox from "@/components/UI/VCheckbox.vue";
import { useTaskStore } from "@/stores/task";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const taskStore = useTaskStore();
const route = useRoute();
const router = useRouter();

const task = ref({
  name: "",
  isBug: false,
});

onMounted(() => {
  task.value = { ...taskStore.getTaskById(+route.params.id) };
});

const editTask = () => {
  if (task.value.name !== "") {
    taskStore.editTask(+route.params.id, task.value.name, task.value.isBug);

    router.push("/");
  }
};

const deleteTask = () => {
  taskStore.deleteTask(+route.params.id);

  router.push("/");
};
</script>

<template>
  <div class="task-edit">
    <form @submit.prevent>
      <VTextInput
        placeholder="Введите название"
        v-model="task.name"
        @keyup.enter="editTask"
      />
      <VCheckbox name="Является багом" v-model="task.isBug" />
    </form>

    <footer>
      <RouterLink to="/">
        <VButton variant="secondary"> Вернуться </VButton>
      </RouterLink>

      <div class="control-buttons">
        <VButton
          variant="secondary"
          prepend-icon="delete"
          @click="deleteTask"
        />
        <VButton variant="accent" @click="editTask">Сохранить</VButton>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.task-edit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }

  & > footer {
    display: flex;
    justify-content: space-between;

    > .control-buttons {
      display: flex;
      gap: 8px;
    }
  }
}
</style>
