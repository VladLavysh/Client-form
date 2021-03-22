<template>
  <div class="client-info">
    <div class="client-info__header"><span>Адрес проживания</span></div>
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
          v-model.trim="clientAddressData[inputFields[idx].id]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clientAddressData: Object
  },

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
        id: "city",
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
    ]
  })
};
</script>
