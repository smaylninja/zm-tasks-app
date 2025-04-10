<script lang="ts" setup></script>

<template>
  <header class="app-header">
    <img src="../assets/logo.svg" />
    <h1 class="app-name">Задачник</h1>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .app-name {
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: var(--logo-title);
    margin-top: 5px;
  }
}
</style>
