<template>
  <div class="container px-4 mx-auto max-w-lg">
    <h1 class="mb-6 mt-8 font-bold text-center text-4xl">
      Formular
    </h1>
    <div v-if="formError" class="rounded border-2 border-red-500 bg-red-100 p-4">
      Se pare că a apărut o eroare la trimiterea înscrierii tale. Te rugăm să verifici conexiunea ta la internet, sau sa încerci din nou mai târziu.
    </div>
    <div v-else-if="formSubmitted" class="rounded border-2 border-green-500 bg-green-100 p-4">
      Felicitări pentru că ai acceptat provocarea Alpha! Te vom contacta în cel mai scurt timp posibil pentru a-ți oferi detalii despre data și locația următoarei serii de întâlniri.
    </div>
    <FormulateForm v-else @submit="submitRegistrationForm">
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
        type="text"
        label="Telefon"
        name="phone"
        validation="required|phone"
        placeholder="0700000000"
        :validation-messages="{
          required: 'Câmpul este obligatoriu',
          phone: 'Introduceți un număr valid de telefon (fără spații)'
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
      <AlphaButton as="FormulateInput" type="submit" target-class-attribute="input-class">
        Trimite
      </AlphaButton>
    </FormulateForm>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data: () => ({
    formSubmitted: false,
    formError: false
  }),
  methods: {
    async submitRegistrationForm (data) {
      try {
        const res = await this.$axios.post('contact', data)
        if (res.data.created_at) {
          this.formSubmitted = true
        } else {
          throw new Error('form error')
        }
      } catch (e) {
        this.formError = true
      }
    }
  }
}
</script>

<style>
.is-required::after {
  color: theme('colors.primary.base');
  content: '*';
}
</style>
