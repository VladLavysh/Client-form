<template>
  <div class="basic-info">
    <div class="basic-info__header"><span>Основное</span></div>
    <div class="basic-info__main">
      <div
        class="input-field"
        v-for="(field, idx) of inputFields"
        :key="field.id"
      >
        <label :class="{ 'required-field': field.required }" :for="field.id">
          {{ field.value }}
        </label>
        <input
          :id="field.id"
          :type="field.type"
          v-model="clientData[inputFields[idx].id]"
          :placeholder="field.placeholder"
        />
      </div>

      <div class="input-field">
        <label class="required-field" for="clientsGroup">Группа клиентов</label>
        <select id="clientsGroup" multiple v-model="clientData.clientGroup">
          <option value="VIP">VIP</option>
          <option value="Проблемные">Проблемные</option>
          <option value="ОМС">ОМС</option>
        </select>
      </div>

      <div class="input-field">
        <label for="doctors">Лечащий врач</label>
        <select id="cars" v-model="clientData.doctor">
          <option value="Иванов">Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
      </div>

      <div class="input-field field-checkbox">
        <label for="mailing">Не отправлять СМС</label>
        <input id="mailing" type="checkbox" v-model="clientData.mailing" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputFields: [
      {
        id: "lastName",
        value: "Фамилия",
        placeholder: "пр. Иван",
        type: "text",
        required: true
      },
      {
        id: "firstName",
        value: "Имя",
        placeholder: "пр. Иванов",
        type: "text",
        required: true
      },
      {
        id: "midName",
        value: "Отчество",
        placeholder: "пр. Иванович",
        type: "text",
        required: false
      },
      {
        id: "bornDate",
        value: "Дата рождения",
        placeholder: "",
        type: "date",
        required: true
      },
      {
        id: "phoneNumber",
        value: "Номер телефона",
        placeholder: "пр. +71 123 123 12",
        type: "tel",
        required: false
      },
      {
        id: "gender",
        value: "Пол",
        placeholder: "пр. муж, жен",
        type: "text",
        required: false
      }
    ],

    clientData: {
      lastName: "",
      firstName: "",
      midName: "",
      bornDate: "",
      phoneNumber: "",
      gender: "",
      clientGroup: [],
      doctor: "",
      mailing: false
    }
  }),

  methods: {}
};
</script>

<style lang="scss">
.basic-info {
  width: 280px;

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
</style>
