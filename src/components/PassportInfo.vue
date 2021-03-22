<template>
  <div class="client-info">
    <div class="client-info__header"><span>Удостоверение личности</span></div>
    <div class="client-info__main">
      <div class="input-field">
        <label for="docType" class="required-field">Тип документа</label>
        <select id="docType" v-model="clientPassportData.docType">
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
          :placeholder="field.placeholder"
          v-model.trim="clientPassportData[inputFields[idx].id]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clientPassportData: Object
  },

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
    ]
  })
};
</script>
