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
