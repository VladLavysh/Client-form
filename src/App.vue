<template>
  <div id="app">
    <form class="client-form">
      <main-info />
      <address-info />
    </form>
  </div>
</template>

<script>
import MainInfo from "./components/MainInfo.vue";
import AddressInfo from "./components/AddressInfo.vue";

export default {
  name: "app",
  components: {
    MainInfo,
    AddressInfo
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.client-form {
  width: 90%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-color: rosybrown;
}
</style>
