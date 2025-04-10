<script lang="ts" setup>
import TheLogo from "@/components/TheLogo.vue";
</script>

<template>
  <div class="container">
    <TheLogo class="logo" />

    <section class="view-content">
      <RouterView />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  padding: 57px 0 67px 0;
  display: grid;
  grid-template-rows: auto 1fr;

  & > .logo {
    margin-bottom: 66px;
  }

  & > .view-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
