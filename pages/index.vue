<template>
  <div>
    <section id="top-section">
      <!-- TODO: Create the top section -->
      <!-- @Mihai Iov -->
      <TheNavBar />
      <TheHeader />
    </section>

    <section id="about">
      <!-- TODO: Create the about section -->
    </section>

    <section id="testimonials" class="container mx-auto px-4">
      <h1 class="text-center font-bold text-5xl mb-8">
        Alții ce spun despre grupurile <span class="text-primary-base">Alpha</span>?
      </h1>
      <AlphaCarousel>
        <div v-for="(testimonial, i) in testimonials" :key="i" class="px-4">
          <!-- TODO: Replace this with testimonial components -->
          <div class="p-4 bg-foreground-base text-white rounded">
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
