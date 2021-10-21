<template>
  <div class="container px-4 mx-auto max-w-lg">
    <h1 class="mb-6 mt-8 font-bold text-center text-4xl">
      Formular
    </h1>
    <FormulateForm>
      <FormulateInput
        label-class="is-required"
        type="text"
        label="Nume și prenume"
        name="name"
        validation="required"
        :validation-messages="{
          required: 'Câmpul este obligatoriu',
        }"
      />
      <FormulateInput
        label-class="is-required"
        type="number"
        label="Vârsta"
        name="age"
        validation="required"
        :validation-messages="{
          required: 'Câmpul este obligatoriu',
        }"
      />
      <FormulateInput
        label-class="is-required"
        type="number"
        label="Telefon"
        name="phone"
        validation="required"
        :validation-messages="{
          required: 'Câmpul este obligatoriu',
        }"
      />
      <FormulateInput
        type="textarea"
        label="Cum ai aflat despre întâlnirile Alpha?"
        name="info"
      />
      <FormulateInput
        id="form-gdpr"
        label-class="is-required"
        type="checkbox"
        name="gdpr"
        validation="required"
        :validation-messages="{
          required: 'Câmpul este obligatoriu',
        }"
      >
        <template #label="{id}">
          <label :for="id">
            Am citit si sunt de acord cu <a href="https://bisericabetel.com/acord-de-confidentialitate-privind-protectia-datelor/" class="underline cursor-pointer" target="_blank">politica de protecție a datelor</a>
          </label>
        </template>
      </FormulateInput>
      <AlphaButton @submit="submitRegistrationForm()">
        Trimite
      </AlphaButton>
    </FormulateForm>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm'
}
</script>

<style>
.is-required::after {
  color: theme('colors.primary.base');
  content: '*';
}
</style>
