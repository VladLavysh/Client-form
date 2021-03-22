<template>
  <div class="client-info">
    <div class="client-info__header"><span>Основная информация</span></div>
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
          :placeholder="field.placeholder"
          v-model.trim="clientMainData[inputFields[idx].id]"
        />
      </div>

      <div class="input-field">
        <label class="required-field" for="clientsGroup">Группа клиентов</label>
        <select
          id="clientsGroup"
          multiple
          v-model.trim="clientMainData.clientGroup"
        >
          <option value="VIP">VIP</option>
          <option value="Проблемные">Проблемные</option>
          <option value="ОМС">ОМС</option>
        </select>
      </div>

      <div class="input-field">
        <label for="doctors">Лечащий врач</label>
        <select id="doctors" v-model.trim="clientMainData.doctor">
          <option value="Иванов">Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
      </div>

      <div class="input-field field-checkbox">
        <label for="mailing">Не отправлять СМС</label>
        <input id="mailing" type="checkbox" v-model="clientMainData.mailing" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clientMainData: Object
  },

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
        placeholder: "пр. 71 123 123 12",
        type: "tel",
        required: true
      },
      {
        id: "gender",
        value: "Пол",
        placeholder: "пр. муж, жен",
        type: "text",
        required: false
      }
    ]
  })
};
</script>
