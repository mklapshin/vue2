<template>
  <div id="app">
    <ToDo />
  </div>
</template>

<script>
import ToDo from "./components/organisms/ToDo.vue";

export default {
  name: "App",
  components: {
    ToDo,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>