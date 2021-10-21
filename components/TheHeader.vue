<template>
  <header class="w-full h-full relative bg-center bg-no-repeat bg-cover bg-gray-500 md:h-screen before:absolute">
    <div class="container mx-auto px-4 relative h-full gap-12 flex flex-col lg:grid lg:grid-cols-2 lg:justify-center lg:items-center">
      <div class="relative mt-36 text-center lg:text-left lg:m-0">
        <h1 class="text-4xl font-bold text-white mb-8">
          Ai întrebări despre viață?
        </h1>
        <p class="mb-4 text-white">
          Fiecare om ar trebui să fie un căutător al adevărului. Trăim într-o lume care promovează ideea că viața de aici e tot ceea ce este, că te naști, trăiești, mori și atât. Dar dacă nu se termina totul aici? Dacă ceea ce se vede nu e tot? Dacă exista Cineva peste toate lucrurile pe care noi le putem observa și înțelege?
        </p>
        <p class="mb-4 text-white">
          Alpha explorează această posibilitate.
        </p>
        <p class="mb-4 text-white">
          Dacă te întrebi și tu aceste lucruri, atunci întâlnirile Alpha sunt pentru tine!
        </p>
        <p class="mb-4 text-lg text-white">
          Te provocăm să te înscrii!
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
