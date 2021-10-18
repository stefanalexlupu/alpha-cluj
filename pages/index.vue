<template>
  <div>
    <section id="top-section">
      <!-- TODO: Create the top section -->
      <!-- @Mihai Iov -->
    </section>

    <section id="about">
      <!-- TODO: Create the about section -->
    </section>

    <section id="testimonials">
      <!-- TODO: Create the testimonials section -->
      <AlphaCarousel>
        <div v-for="(testimonial, i) in testimonials" :key="i" class="px-4">
          <!-- TODO: Replace this with testimonial components -->
          <div class="p-4 bg-black text-white">
            <img :src="testimonial.img" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover">
            <h1>{{ testimonial.name }}</h1>
            <p>{{ testimonial.text }}</p>
          </div>
        </div>
      </AlphaCarousel>
    </section>

    <section id="register">
      <!-- TODO: Create the registration section -->
    </section>
  </div>
</template>

<script>
import AlphaCarousel from '@/components/AlphaCarousel.vue'
export default {
  components: {
    AlphaCarousel
  },
  data: () => ({
    testimonials: [
      {
        img: 'profile-picture.jpg',
        name: 'Jemma Canelloni',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        img: 'profile-picture.jpg',
        name: 'Jemma Canelloni',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        img: 'profile-picture.jpg',
        name: 'Jemma Canelloni',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        img: 'profile-picture.jpg',
        name: 'Jemma Canelloni',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  })
}
</script>
