<template>
  <component :is="as" type="submit" input-class="rounded py-1 px-6 bg-primary-base hover:bg-primary-dark text-white">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AlphaButton',
  props: {
    as: {
      type: String,
      default: 'button'
    }
  }
}
</script>
