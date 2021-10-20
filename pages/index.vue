<template>
  <div>
    <section id="top-section">
      <!-- TODO: Create the top section -->
      <!-- @Mihai Iov -->
      <TheHeader />
    </section>

    <section id="about">
      <!-- TODO: Create the about section -->
    </section>

    <section id="testimonials" class="container mx-auto px-4">
      <h1 class="text-center font-bold text-5xl mb-8">
        Alții ce spun despre grupurile
        <span class="text-primary-base">Alpha</span>?
      </h1>
      <AlphaCarousel>
        <div v-for="(testimonial, i) in testimonials" :key="i" class="px-4">
          <TestimonialCard
            :image="testimonial.img"
            :name="testimonial.name"
            :text="testimonial.text"
          />
        </div>
      </AlphaCarousel>
    </section>

    <section id="register">
      <!-- TODO: Create the registration section -->
      <RegistrationForm />
    </section>
  </div>
</template>

<script>
import AlphaCarousel from '@/components/AlphaCarousel.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import RegistrationForm from '~/components/RegistrationForm.vue'
export default {
  components: {
    AlphaCarousel,
    TestimonialCard,
    RegistrationForm
  },
  data: () => ({
    testimonials: [
      {
        img: 'profile-picture.jpg',
        name: 'Jemma Canelloni',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        img: 'profile-picture.jpg',
        name: 'Jemma Canelloni',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        img: 'profile-picture.jpg',
        name: 'Jemma Canelloni',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        img: 'profile-picture.jpg',
        name: 'Jemma Canelloni',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  })
}
</script>
