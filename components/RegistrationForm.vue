<template>
  <div class="container px-4 mx-auto max-w-lg">
    <h1 class="mb-6 mt-8 font-bold text-center text-4xl">
      Formular
    </h1>
    <FormulateForm>
      <FormulateInput
        label-class="is-required"
        type="text"
        label="Nume si prenume"
        name="name"
        validation="required"
        :validation-messages="{
          required: 'Campul este obligatoriu',
        }"
      />
      <FormulateInput
        label-class="is-required"
        type="number"
        label="Varsta"
        name="age"
        validation="required"
        :validation-messages="{
          required: 'Campul este obligatoriu',
        }"
      />
      <FormulateInput
        label-class="is-required"
        type="number"
        label="Telefon"
        name="phone"
        validation="required"
        :validation-messages="{
          required: 'Campul este obligatoriu',
        }"
      />
      <FormulateInput
        type="textarea"
        label="Cum ai aflat despre intalnirile Alpha?"
        name="info"
      />
      <FormulateInput
        label-class="is-required"
        type="checkbox"
        label="Am citit si sunt de acord cu politica de protectie a datelor"
        name="gdpr"
        validation="required"
        :validation-messages="{
          required: 'Campul este obligatoriu',
        }"
      />
      <AlphaButton @submit="submitRegistrationForm()">
        Trimite
      </AlphaButton>
    </FormulateForm>
  </div>
</template>

<script>
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import AlphaButton from './AlphaButton.vue'

Vue.use(VueFormulate, {
  classes: {
    outer: 'mb-4',
    wrapper (context) {
      switch (context.classification) {
        case 'box':
          return 'flex'
        default:
          return ''
      }
    },
    input (context) {
      switch (context.classification) {
        case 'box':
          return 'mr-1'
        default:
          return 'px-3 py-2 mb-1 border border-gray-400 rounded outline-none w-full'
      }
    },
    label: 'font-medium text-sm',
    error: 'mb-1 text-red-700 text-xs '
  }
})

export default {
  name: 'RegistrationForm',
  components: {
    AlphaButton
  }
}
</script>

<style>
.is-required::after {
  color: theme('colors.primary-base');
  content: '*';
}
</style>
