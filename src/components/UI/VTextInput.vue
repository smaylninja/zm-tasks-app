<script lang="ts" setup>
import { useAttrs } from "vue";

const {
  name = null,
  placeholder = "Подсказка",
  hint = null,
} = defineProps<{
  name?: string;
  placeholder?: string;
  hint?: string;
}>();

const attrs = useAttrs();
const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="form-field">
    <label v-if="name" class="input-name">{{ name }}</label>
    <input
      type="text"
      class="input"
      :placeholder
      v-model.trim="model"
      v-bind="attrs"
    />
    <span v-if="hint" class="hint">{{ hint }}</span>
  </div>
</template>

<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 300px;

  & > .input-name {
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 8px;
  }

  & > .input {
    font-family: "Montserrat";
    border: 1px solid var(--border-normal);
    border-radius: 4px;
    padding: 15px 20px;
    font-size: 14px;
    line-height: 130%;
    width: 100%;
    &:focus {
      border: 1px solid var(--accent);
      border-radius: 4px;
    }
  }

  & > .hint {
    font-size: 12px;
    color: var(--text-tertiary);
    font-weight: 500;
    padding-top: 4px;
  }
}
</style>
