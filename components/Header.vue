<template>
  <header>
    <div class="hero-content container mx-auto px-4">
      <div class="hero-text-left">
        <h1 class="text-4xl">Lorem ipsum</h1>
        <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam, at distinctio doloremque doloribus esse facere impedit inventore laborum modi mollitia natus nesciunt nihil nostrum odit porro quibusdam quidem reiciendis repellendus soluta sunt ut voluptatem.</p>
        <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorem iusto, nisi quas quia tempore unde? Assumenda dolores expedita officiis rerum! Adipisci architecto atque debitis earum eos esse in nam?</p>
        <Button @click="goToLink()" text="Înregistrează-te acum!" />
      </div>
      <div class="hero-video-right">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GEgSBuYlSoA" />
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
    background: url("static/bg.webp");
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgb(70, 52, 78);
    width: 100%;
    height: 100%;
  }

  header::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(70, 52, 78, 0.4);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2;
    height: 100%;
  }

  .hero-text-left {
    position: relative;
    margin: 175px 0 50px;
  }

  .hero-text-left p {
    color: #fff;
  }

  .hero-text-left h1 {
    color: #fff;
  }

  .hero-text-left a {
    color: #fff;
  }

  .hero-video-right {
    position: relative;
    height: 0;
    padding-bottom: 56%;
    margin-bottom: 50px;
  }

  .hero-video-right iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    }

    .hero-video-right {
      margin-bottom: unset;
    }
  }
</style>
