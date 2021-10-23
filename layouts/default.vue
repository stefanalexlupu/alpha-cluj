<template>
  <div>
    <TheNavBar />
    <Nuxt />
    <TheFooter />
    <TheSocialMediaSidebar />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheNavBar from '@/components/TheNavBar.vue'
import TheSocialMediaSidebar from '@/components/TheSocialMediaSidebar.vue'

export default {
  components: {
    TheFooter,
    TheNavBar,
    TheSocialMediaSidebar
  }
}
</script>
