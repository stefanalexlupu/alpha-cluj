<template>
  <div class=" p-8 bg-foregreground-base rounded ">
    <div class="flex items-center gap-4 mb-4">
      <img
        :src="image"
        alt="image"
        class=" w-16 h-16 object-cover rounded-full"
      />
      <span>
        <p class=" text-2xl text-white ">{{ name }}</p>
      </span>
    </div>
    <p class=" text-base text-white">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
