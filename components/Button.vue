<template>
  <button class="button">
    <FormulateInput type="button" input-class="rounded py-1 px-6 bg-red-600 text-white hover:bg-red-700">
      {{ text }}
    </FormulateInput>
  </button>
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
  methods: {}
}
</script>
