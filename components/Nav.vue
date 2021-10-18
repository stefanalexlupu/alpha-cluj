<template>
  <nav>
    <div class="navbar container mx-auto px-4">
      <ul id="menu_list">
        <li><a class="text-lg font-bold" href="#about">Despre Alpha</a></li>
        <li><a class="text-lg font-bold" href="#testimonials">Testimoniale</a></li>
        <li><a class="text-lg font-bold" href="#register">Încriere</a></li>
      </ul>
      <button id="toggle" @click="onOfMenu(toggle = !toggle)">
        <span class="nav_btn_actv"></span>
        <span class="nav_btn_actv"></span>
      </button>
      <a href="#home"><img id="logo" src="../static/logo.svg" alt=""></a>
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
    onOfMenu (e) {
      console.log(this.toggle)
      if (this.toggle === true) {
        document.getElementById('menu_list').classList.add('active')
        document.getElementsByClassName('nav_btn_actv')[0].classList.add('on_off_btn')
        document.getElementsByClassName('nav_btn_actv')[1].classList.add('on_off_btn')
      } else {
        document.getElementById('menu_list').classList.remove('active')
        document.getElementsByClassName('nav_btn_actv')[0].classList.remove('on_off_btn')
        document.getElementsByClassName('nav_btn_actv')[1].classList.remove('on_off_btn')
      }
    },
    handleScroll (e) {
      this.nav = document.querySelector('nav')
      this.logo = document.getElementById('logo')
      if (window.scrollY > 0) {
        this.nav.style.height = '50px'
        this.logo.style.height = '40px'
      } else {
        this.nav.style.height = '100px'
        this.logo.style.height = '80px'
      }
    }
  },
  mounted () {
    function debounce (handleScroll, number) {
      return handleScroll
    }

    this.handleDebouncedScroll = debounce(this.handleScroll, 100)
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleDebouncedScroll)
  }
}
</script>

<style>

nav {
  position: fixed;
  background-color: #fff;
  z-index: 99999;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  transition: height 0.2s ease-in-out;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.navbar {
  display: flex;
  justify-content: space-between;
}

nav ul {
  list-style-type: none;
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

#logo {
  position: relative;
  top: 5%;
  height: 80px;
  transition: height 0.2s ease-in-out;
}

nav li a {
  color: #212121;
  text-decoration: none;
}

nav li a:hover {
  color: red;
}

#toggle {
  all: unset;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.nav_btn_actv {
  width: 35px;
  height: 4px;
  background: #212121;
  border-radius: 2px;
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.nav_btn_actv:nth-child(1) {
  transform: translateY(-6px);
}

.nav_btn_actv:nth-child(2) {
  transform: translateY(6px);
}

.nav_btn_actv.on_off_btn:nth-child(1) {
  transform: rotate(-45deg);
}

.nav_btn_actv.on_off_btn:nth-child(2) {
  transform: rotate(45deg);
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

  #toggle {
    display: none;
  }
}

</style>
