<template>
  <header class="w-full relative bg-center bg-no-repeat bg-cover bg-gray-500">
    <div class="hero-content container mx-auto px-4 relative h-full z-20">
      <div class="hero-text-left relative">
        <h1 class="text-4xl text-white">Lorem ipsum</h1>
        <p class="text-base text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam, at distinctio doloremque doloribus esse facere impedit inventore laborum modi mollitia natus nesciunt nihil nostrum odit porro quibusdam quidem reiciendis repellendus soluta sunt ut voluptatem.</p>
        <p class="text-base text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorem iusto, nisi quas quia tempore unde? Assumenda dolores expedita officiis rerum! Adipisci architecto atque debitis earum eos esse in nam?</p>
        <Button @click="goToLink()" text="Înregistrează-te acum!" />
      </div>
      <div class="hero-video-right relative h-0">
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
    height: 100%;
  }

  header::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(9, 9, 9, 0.42) 38.43%);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
  }

  .hero-text-left {
    margin: 130px 0 50px;
    text-align: center;
  }

  .hero-video-right {
    padding-bottom: 56%;
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    header {
      height: 100vh;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
    }

    .hero-text-left {
      margin: unset;
      padding-right: 1rem;
      text-align: left;
    }

    .hero-video-right {
      margin-bottom: unset;
    }
  }
</style>
