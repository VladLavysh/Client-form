<template>
  <div id="app">
    <form class="client-form" @submit.prevent="createClient">
      <main-info />
      <address-info />
      <passport-info />

      <div class="info-btn-container">
        <span class="client-form__field-info">
          <span>*</span> - поле обязательное для заполнения
        </span>
        <button class="client-form__submit-btn" type="submit">Создать</button>
      </div>
    </form>
  </div>
</template>

<script>
import MainInfo from "./components/MainInfo.vue";
import AddressInfo from "./components/AddressInfo.vue";
import PassportInfo from "./components/PassportInfo.vue";

export default {
  name: "app",
  components: {
    MainInfo,
    AddressInfo,
    PassportInfo
  },

  methods: {
    createClient() {}
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
  margin-top: 40px;
}

.client-form {
  position: relative;

  width: 950px;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #565656;

  @media (max-width: 960px) {
    width: 320px;
    flex-direction: column;
  }

  .client-info {
    width: 280px;

    @media (max-width: 960px) {
      margin-bottom: 20px;
    }

    &__header {
      height: 35px;
      box-sizing: border-box;

      line-height: 35px;
      font-size: 1.2rem;
      background-color: #e28e48;
      color: #fff;
    }

    &__main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15px 15px 10px;
      box-sizing: border-box;
      background-color: #4693d3;
    }
  }

  .input-field {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 15px;

    .required-field {
      &::after {
        content: "*";
        display: block;
        color: rgb(221, 142, 142);
        transform: translate(5px, 2px);
      }
    }

    label {
      display: flex;
      color: #fff;
      margin-bottom: 5px;
    }

    select {
      width: 100%;
      padding: 5px;

      border: none;
      border-radius: 5px;
      overflow-y: auto;
      outline: none;
    }

    input {
      height: 25px;
      width: 100%;
      border: none;
      border-radius: 5px;
      outline: none;
      padding-left: 7px;
      padding-right: 5px;
      box-sizing: border-box;

      &::placeholder {
        color: #aaa2a2;
      }
    }
  }

  .field-checkbox {
    flex-direction: row;
    justify-content: left;
    align-items: center;

    input {
      width: auto;
      margin: 0 0 4px 20px;
    }
  }

  .info-btn-container {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 55%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 960px) {
      position: static;
      width: 100%;
    }
  }

  &__submit-btn {
    width: 150px;
    height: 35px;
    box-sizing: border-box;

    border: 2px solid #fff;
    border-radius: 5px;

    font-size: 1.1rem;
    color: #fff;
    background-color: #e28e48;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transition: all 0.2s;
      border: 2px solid #e28e48;
      background-color: #fff;
      color: #e28e48;
    }
  }

  &__field-info {
    color: #fff;

    span {
      color: #dd8e8e;
    }
  }
}
</style>
