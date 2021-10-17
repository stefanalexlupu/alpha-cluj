<template>
  <FormulateInput type="button" input-class="rounded py-1 px-6 bg-red-600 text-white hover:bg-red-700">
    {{ text }}
  </FormulateInput>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      required: true,
      type: String
    }
  },
  methods: {
    submitRegistrationForm (e) {
      e.preventDefault()
    }
  }
}
</script>
