<template>
  <div class=" p-8 bg-foreground-base rounded h-full">
    <div class="flex items-center gap-4 mb-4">
      <img
        :src="image"
        :alt="name"
        class=" w-16 h-16 object-cover rounded-full"
      >
      <span>
        <p class=" text-2xl text-white ">{{ name }}</p>
      </span>
    </div>
    <div class="text-white space-y-2">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    image: {
      type: String,
      default: '/images/avatar.jpg'
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
