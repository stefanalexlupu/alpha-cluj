<template>
  <FormulateInput type="button" input-class="rounded py-1 px-6 bg-primary-base hover:bg-primary-dark text-white">
    <slot />
  </FormulateInput>
</template>

<script>
export default {
  name: 'AlphaButton',
  methods: {
    submitRegistrationForm (e) {
      e.preventDefault()
    }
  }
}
</script>
