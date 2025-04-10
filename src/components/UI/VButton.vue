<script lang="ts" setup>
import { IconTypes, icons } from "@/assets/icons/icons";
import { computed, useSlots } from "vue";

type ButtonVariants = "accent" | "secondary";

const { variant = "accent", prependIcon = null } = defineProps<{
  variant?: ButtonVariants;
  prependIcon?: IconTypes;
}>();

const buttonVariants = {
  accent: {
    color: "var(--accent)",
    hover: "var(--accent-hover)",
    textColor: "var(--text-white)",
  },
  secondary: {
    color: "var(--secondary)",
    hover: "var(--secondary-hover)",
    textColor: "var(--text-primary)",
  },
};

const slots = useSlots();

const hasText = computed(() => {
  if (!slots.default) return false;
  const slotContent = slots.default();

  return slotContent.some((node) => {
    if (typeof node.children === "string") {
      return node.children.trim() !== "";
    }

    return true;
  });
});
</script>

<template>
  <button
    :style="{
      '--button-color': buttonVariants[variant].color,
      '--button-hover': buttonVariants[variant].hover,
      '--text-color': buttonVariants[variant].textColor,
    }"
    :class="{ 'icon-button': !hasText }"
  >
    <span class="icon" v-if="prependIcon" v-html="icons[prependIcon]" />
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  font-family: "Montserrat";
  color: var(--text-color);
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 1%;
  font-size: 14px;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: var(--button-color);
  transition: background-color 0.2s ease;

  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    cursor: pointer;
    background-color: var(--button-hover);
  }

  & > .icon {
    display: flex;
  }

  & > .icon :where(path, circle, rect) {
    fill: var(--text-color);
  }
}

.icon-button {
  padding: 10px;
}
</style>
