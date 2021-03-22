<template>
  <div class="client-info">
    <div class="client-info__header"><span>Адрес</span></div>
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
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputFields: [
      {
        id: "index",
        value: "Индекс",
        placeholder: "пр. 12-34-56",
        required: false
      },
      {
        id: "country",
        value: "Страна",
        placeholder: "пр. Беларусь",
        required: false
      },
      {
        id: "region",
        value: "Область",
        placeholder: "пр. Минская область",
        required: false
      },
      {
        id: "town",
        value: "Город",
        placeholder: "пр. Минск",
        required: true
      },
      {
        id: "street",
        value: "Улица",
        placeholder: "пр. Проспект Независимости",
        required: false
      },
      {
        id: "house",
        value: "Дом",
        placeholder: "пр. 13/Б",
        required: false
      }
    ],

    clientData: {
      address: "",
      index: "",
      country: "",
      region: "",
      town: "",
      street: "",
      house: ""
    }
  })
};
</script>
