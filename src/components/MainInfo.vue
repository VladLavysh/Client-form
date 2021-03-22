<template>
  <div class="client-info">
    <div class="client-info__header"><span>Основное</span></div>
    <div class="client-info__main">
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
  })
};
</script>
