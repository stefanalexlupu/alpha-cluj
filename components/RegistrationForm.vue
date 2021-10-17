<template>
  <div class="container mx-auto max-w-lg ">
    <h1 class="text-4xl mb-6 mt-8 font-bold text-center">
      Formular
    </h1>
    <FormulateForm class="mx-4 sm:mx-0">
      <FormulateInput
        type="text"
        label="Nume si prenume*"
        validation="required"
        :validation-messages="{
          required: 'Campul este obligatoriu',
        }"
      />
      <FormulateInput
        type="number"
        label="Varsta*"
        validation="required"
        :validation-messages="{
          required: 'Campul este obligatoriu',
        }"
      />
      <FormulateInput
        type="number"
        label="Telefon*"
        validation="required"
        :validation-messages="{
          required: 'Campul este obligatoriu',
        }"
      />
      <FormulateInput
        type="textarea"
        label="Cum ai aflat despre intalnirile Alpha?"
      />
      <FormulateInput
        type="checkbox"
        wrapper-class="flex"
        label="Am citit si sunt de acord cu politica de protectie a datelor*"
        validation="required"
        :validation-messages="{
          required: 'Campul este obligatoriu',
        }"
      />
      <Button
        text="Trimite"
      />
    </FormulateForm>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import Button from './Button.vue'

Vue.use(VueFormulate, {
  classes: {
    outer (context) {
      switch (context.classification) {
        case 'textarea':
          return 'mb-1'
        default:
          return 'mb-4'
      }
    },
    input (context) {
      switch (context.classification) {
        case 'box':
          return 'mr-1'
        default:
          return 'border border-gray-400 rounded px-3 py-2 outline-none w-full mb-1'
      }
    },
    label: 'font-medium text-sm',
    error: 'text-red-700 text-xs mb-1'
  }
})

export default {
  name: 'RegistrationForm',
  components: {
    Button
  }
}
</script>
