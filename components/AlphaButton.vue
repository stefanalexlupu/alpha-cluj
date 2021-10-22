<template>
  <component :is="as" type="submit" v-bind="classOptions">
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
    },
    targetClassAttribute: {
      type: String,
      default: 'class'
    }
  },
  computed: {
    classOptions () {
      return {
        [this.targetClassAttribute]: 'rounded py-1 px-6 bg-primary-base hover:bg-primary-dark text-white'
      }
    }
  }
}
</script>
