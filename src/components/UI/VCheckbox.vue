<script lang="ts" setup>
defineProps<{
  name: string;
}>();

const model = defineModel<boolean>({ default: false });
</script>

<template>
  <div class="checkbox">
    <input
      class="checkbox-input"
      type="checkbox"
      id="checkbox"
      v-model="model"
    />
    <label class="checkbox-label" for="checkbox">{{ name }}</label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  margin-top: 5px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .checkbox-input {
    appearance: none;
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid var(--border-muted);

    &::after {
      content: "";
      position: absolute;
      width: 0px;
      height: 0px;
      top: 6px;
      left: 5px;
      font-size: 18px;
      background-image: url("../../assets/icons/check.svg");
      background-repeat: no-repeat;
    }
    &:checked {
      background: var(--accent);
      border: none;
      &::after {
        width: 18px;
        height: 18px;
      }
    }
  }

  & > .checkbox-label {
    margin-left: 8px;
  }
}
</style>
