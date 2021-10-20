<template>
  <nav :class="{ 'nav-on-scroll': hasScrolled }" class="bg-white w-full shadow-md fixed flex items-center z-50">
    <div class="container mx-auto px-4 flex justify-between">
      <ul id="menu_list" :class="{ 'left-0 border-b border-gray-300 md:border-none': toggle == true }" class="block absolute bottom-0 w-full text-center bg-white transform translate-y-full list-none md:static md:transform-none md:flex md:justify-center md:items-center  md:bg-transparent md:transition-none md:text-left md:inset-0 md:w-max">
        <li class="p-3 border-t border-gray-300 md:pl-6 md:border-none"><a class="hover:text-red-600 text-lg font-bold no-underline" href="#about">Despre Alpha</a></li>
        <li class="p-3 border-t border-gray-300 md:pl-6 md:border-none"><a class="hover:text-red-600 text-lg font-bold no-underline" href="#testimonials">Testimoniale</a></li>
        <li class="p-3 border-t border-gray-300 md:pl-6 md:border-none"><a class="hover:text-red-600 text-lg font-bold no-underline" href="#register">Încriere</a></li>
      </ul>
      <div class="w-11 h-11 cursor-pointer md:hidden" @click="toggle = !toggle">
        <span :class="{ 'translate-y-1/2 rotate-45': toggle == true }" class="transition duration-500 ease-in-out absolute bg-black w-9 h-1 rounded-sm transform translate-y-1.5 top-1/2"></span>
        <span :class="{ 'translate-y-1/2 -rotate-45': toggle == true }" class="transition duration-500 ease-in-out absolute bg-black w-9 h-1 rounded-sm transform -translate-y-1.5 top-1/2"></span>
      </div>
      <a href="#top-section"><img :class="{ 'logo-on-scroll': hasScrolled }" class="logo relative h-16 mt-1" src="../static/logo.svg" alt=""></a>
    </div>
  </nav>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  data () {
    return {
      toggle: false,
      hasScrolled: false
    }
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY > 0) {
        this.hasScrolled = true
      } else {
        this.hasScrolled = false
      }
    }
  },
  mounted () {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100)
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleDebouncedScroll)
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

nav {
  height: 5rem;
  transition: height 0.2s ease-in-out;
}

.nav-on-scroll {
  height: 3rem;
}

nav ul {
  left: -100%;
  transition: left 0.5s ease-in-out;
}

.logo {
  transition: height 0.2s ease-in-out;
}

.logo-on-scroll {
  height: 3rem;
}

</style>
