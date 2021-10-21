<template>
  <div>
    <section id="top-section">
      <TheHeader />
    </section>

    <section class="font-serif text-center mx-auto my-16 max-w-4xl px-4">
      <q class="block font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
        Fie exista Dumnezeu, fie nu. Ambele posibilitati sunt inspaimantatoare. Daca exista Dumnezeu, am face bine sa aflam cine e El, sa aflam ce vrea El si sa facem ceea ce zice El. Daca nu exista Dumnezeu, avem o problema, pentru ca noi gonim prin spatiu cu 66000 de mile pe ora si nimeni nu e in control.
      </q>
      <p
        class="text-xs md:text-base"
      >
        [un astronom rus]
      </p>
    </section>

    <section
      id="
        about"
    >
      <!-- TODO: Create the about section -->
    </section>

    <section id="testimonials" class="container mx-auto mb-16 px-4">
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

    <section id="register" class="mb-16">
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
