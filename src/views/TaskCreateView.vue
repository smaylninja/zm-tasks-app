<script lang="ts" setup>
import VTextInput from "@/components/UI/VTextInput.vue";
import VButton from "@/components/UI/VButton.vue";
import VCheckbox from "@/components/UI/VCheckbox.vue";
import { useTaskStore } from "@/stores/task";
import { ref } from "vue";
import { useRouter } from "vue-router";

const taskStore = useTaskStore();
const router = useRouter();

const task = ref({
  name: "",
  isBug: false,
});

const createTask = () => {
  if (task.value.name !== "") {
    taskStore.createTask(task.value.name, task.value.isBug);

    router.push("/");
  }
};
</script>

<template>
  <div class="task-create">
    <form @submit.prevent>
      <VTextInput
        name="Название задачи"
        placeholder="Введите название"
        hint="Будет отображаться на главной странице"
        v-model="task.name"
        @keyup.enter="createTask"
      />
      <VCheckbox name="Является багом" v-model="task.isBug" />
    </form>

    <footer>
      <RouterLink to="/">
        <VButton variant="secondary">Вернуться</VButton>
      </RouterLink>

      <VButton variant="accent" @click="createTask">Создать</VButton>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.task-create {
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
  }
}
</style>
