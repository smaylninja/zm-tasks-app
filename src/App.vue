<script lang="ts" setup>
import TheLogo from "@/components/TheLogo.vue";
</script>

<template>
  <div class="container">
    <TheLogo class="logo" />

    <section class="view-content">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/transitions.scss";

.container {
  height: 100vh;
  padding: 57px 0 67px 0;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-x: hidden;

  & > .logo {
    margin-bottom: 66px;
  }

  & > .view-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
</style>
