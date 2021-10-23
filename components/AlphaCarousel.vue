<template>
  <VueSlickCarousel
    dots
    autoplay
    :autoplay-speed="15000"
    :slides-to-show="3"
    :responsive="settings"
  >
    <slot />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'AlphaCarousel',
  components: {
    VueSlickCarousel
  },
  data: () => ({
    settings: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}
</script>

<style scoped>
/* SLICK DOTS THEMING */
/* stylelint-disable */
>>> .slick-track {
  display: flex;
  align-items: stretch;
}

>>> .slick-slide {
  height: inherit;
}

>>> .slick-slide > div, >>> .slick-slide > div > div {
  height: 100%;
}
>>> .slick-next, >>> .slick-prev {
  display: none !important;
}

>>> .alpha-dots li button:before {
  color: theme('colors.foreground.base');
}
>>> .alpha-dots li.slick-active button:before {
  color: theme('colors.foreground.base');
}
</style>
