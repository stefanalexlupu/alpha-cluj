<template>
  <nav class="bg-white w-full shadow-md fixed flex items-center z-50">
    <div class="container mx-auto px-4 flex justify-between">
      <ul id="menu_list list-none" v-bind:class="{ active: toggle == true }">
        <li><a class="text-lg font-bold no-underline" href="#about">Despre Alpha</a></li>
        <li><a class="text-lg font-bold no-underline" href="#testimonials">Testimoniale</a></li>
        <li><a class="text-lg font-bold no-underline" href="#register">Încriere</a></li>
      </ul>
      <button class="toggle" @click="toggle = !toggle">
        <span v-bind:class="{ 'translate-y-1/2 rotate-45': toggle == true }" class="nav_btn_activ absolute bg-black w-9 h-1 rounded-sm transform translate-y-1.5 top-1/2"></span>
        <span v-bind:class="{ 'translate-y-1/2 -rotate-45': toggle == true }" class="nav_btn_activ absolute bg-black w-9 h-1 rounded-sm transform -translate-y-1.5 top-1/2"></span>
      </button>
      <a href="#top-section"><img class="logo" src="../static/logo.svg" alt=""></a>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      toggle: false
    }
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('nav-on-scroll')
        document.querySelector('.logo').classList.add('logo-on-scroll')
      } else {
        document.querySelector('nav').classList.remove('nav-on-scroll')
        document.querySelector('.logo').classList.remove('logo-on-scroll')
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

nav {
  height: 80px;
  transition: height 0.2s ease-in-out;
}

.nav-on-scroll {
  height: 50px;
}

nav ul {
  position: absolute;
  display: block;
  text-align: center;
  background: #fff;
  bottom: 0;
  left: -100%;
  width: 100%;
  transform: translateY(100%);
  transition: left 0.5s ease-in-out;
}

.active {
  left: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

nav li {
  padding: 1rem;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
}

.logo {
  position: relative;
  top: 5%;
  height: 60px;
  transition: height 0.2s ease-in-out;
}

.logo-on-scroll {
  height: 40px;
}

nav li a:hover {
  color: red;
}

.toggle {
  all: unset;
  width: 48px;
  height: 48px;
  cursor: pointer;
}

.nav_btn_activ {
  transition: all 0.5s ease-in-out;
}

@media (min-width: 768px) {
  nav ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: unset;
    background: unset;
    bottom: unset;
    left: unset;
    transform: unset;
    width: unset;
    text-align: unset;
    transition: unset;
  }

  nav li {
    padding: 0 1.5rem 0 0;
    border-top: none;
  }

  .active {
    box-shadow: none;
  }

  .toggle {
    display: none;
  }
}

</style>
