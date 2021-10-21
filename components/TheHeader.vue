<template>
  <header class="w-full h-full relative bg-center bg-no-repeat bg-cover bg-gray-500 md:h-screen before:absolute">
    <div class="container mx-auto px-4 relative h-full flex flex-col lg:grid lg:grid-cols-2 lg:justify-center lg:items-center">
      <div class="relative mt-36 mb-12 text-center lg:text-left lg:pr-4 lg:m-0">
        <h1 class="text-4xl text-white mb-8">
          Lorem ipsum
        </h1>
        <p class="mb-4 text-base text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam, at distinctio doloremque doloribus esse facere impedit inventore laborum modi mollitia natus nesciunt nihil nostrum odit porro quibusdam quidem reiciendis repellendus soluta sunt ut voluptatem.
        </p>
        <p class="mb-4 text-base text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolorem iusto, nisi quas quia tempore unde? Assumenda dolores expedita officiis rerum! Adipisci architecto atque debitis earum eos esse in nam?
        </p>
        <a href="#register" class="inline-block rounded py-1 px-6 bg-primary-base hover:bg-primary-dark text-white">Înregistrează-te acum!</a>
      </div>
      <div class="hero-video-right relative h-0 mb-12 lg:mb-0">
        <iframe
          width="100%"
          height="100%"
          class="absolute top-0 left-0"
          src="https://www.youtube-nocookie.com/embed/WDBqJeDQJa0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
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
