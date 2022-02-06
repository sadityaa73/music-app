<template>
  <div class="main-container">
    <music-app></music-app>
  </div>
</template>

<script>
import MusicApp from "./components/MusicApp.vue";
export default {
  name: "App",
  components: { MusicApp },
};
</script>

<style>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
