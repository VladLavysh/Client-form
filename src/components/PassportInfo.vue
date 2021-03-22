<template>
  <div class="client-info">
    <div class="client-info__header"><span>Паспорт</span></div>
    <div class="client-info__main">
      <div class="input-field">
        <label for="doctors" class="required-field">Тип документа</label>
        <select id="cars" v-model="clientData.docType">
          <option value="Паспорт">Паспорт</option>
          <option value="Свидетельство о рождении">
            Свидетельство о рождении
          </option>
          <option value="Вод. удостоверение">Вод. удостоверение</option>
        </select>
      </div>

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
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputFields: [
      {
        id: "series",
        value: "Серия",
        type: "text",
        placeholder: "пр. CF",
        required: false
      },
      {
        id: "number",
        value: "Номер",
        type: "text",
        placeholder: "пр. 1234567",
        required: false
      },
      {
        id: "issuedBy",
        value: "Кем выдан",
        type: "text",
        placeholder: "пр. Ministry of internal affairs",
        required: false
      },
      {
        id: "dateOf",
        value: "Дата выдачи",
        type: "date",
        placeholder: "пр. 28.06.2018",
        required: true
      }
    ],

    clientData: {
      series: "",
      number: "",
      issuedBy: "",
      dateOf: "",
      docType: ""
    }
  })
};
</script>
