<template>
  <div>
    <TheNavBar />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheFooter
  }
}
</script>
