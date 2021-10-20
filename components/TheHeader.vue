<template>
  <header class="w-full h-full relative bg-center bg-no-repeat bg-cover bg-gray-500 md:h-screen before:absolute">
    <div class="container mx-auto px-4 relative h-full flex flex-col md:grid md:grid-cols-2 md:justify-center md:items-center">
      <div class="relative mt-36 mb-12 text-center md:text-left md:pr-4 md:m-0">
        <h1 class="text-4xl text-white">Lorem ipsum</h1>
        <p class="mt-2 text-base text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam, at distinctio doloremque doloribus esse facere impedit inventore laborum modi mollitia natus nesciunt nihil nostrum odit porro quibusdam quidem reiciendis repellendus soluta sunt ut voluptatem.</p>
        <p class="mt-2 text-base text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorem iusto, nisi quas quia tempore unde? Assumenda dolores expedita officiis rerum! Adipisci architecto atque debitis earum eos esse in nam?</p>
        <AlphaButton @click="goToLink()">
          Înregistrează-te acum!
        </AlphaButton>
      </div>
      <div class="hero-video-right relative h-0 mb-12 md:mb-0">
        <iframe width="100%" height="100%" class="absolute top-0 left-0" src="https://www.youtube.com/embed/GEgSBuYlSoA" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goToLink (e) {
      location.href = '#register'
    }
  }
}
</script>
<style>

  header {
    background: url("static/bg.jpg");
  }

  header::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(9, 9, 9, 0.42) 38.43%);
  }

  .hero-video-right {
    padding-bottom: 56%;
  }
</style>
