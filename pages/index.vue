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

    <AboutSection />

    <section id="testimonials" class="container mx-auto mb-16 px-4">
      <h1 class="text-center font-bold text-5xl mb-8">
        Alții ce spun despre grupurile
        <span class="text-primary-base">Alpha</span>?
      </h1>
      <AlphaCarousel>
        <!-- CRISTINA TURDA -->
        <div class="px-4">
          <TestimonialCard
            image="cristina-turda.jpeg"
            name="Cristina Turda"
          >
            <p>
              Alpha pentru mine a reprezentat într-un cuvânt "luminare". Umblam de multi ani la Biserică, însă la Alpha, la fiecare sesiune simțeam că mi se conectează toate informațiile pe care le-am acumulat peste ani și se creau noi legături, noi perspective.
            </p>
            <p>La Alpha am înțeles că, creștinii de pretudindeni vorbesc aceeași limbă.</p>
            <p>Alpha este o comunitate de oameni foarte faini din care iți dorești să nu mai pleci și să nu se termine niciodată sesiunile.</p>
            <p>
              Iar mancarea are alt gust atunci când o mănânci cu prietenii din Alpha! 😍😇
            </p>
          </TestimonialCard>
        </div>

        <!-- AMALIA OȘAN -->
        <div class="px-4">
          <TestimonialCard
            image="amalia-osan.jpeg"
            name="Amalia Oșan"
          >
            <p>
              Eram în căutarea unei relații cu Dumnezeu dar nu știam de unde sa încep. În urma sesiunilor Alpha am început să fac pași mici spre un Dumnezeu care știu că e acolo, mă așteaptă și mă iubește.
            </p>
          </TestimonialCard>
        </div>

        <!-- PAUL ALBU -->
        <div class="px-4">
          <TestimonialCard
            image="paul-albu.jpeg"
            name="Paul Albu"
          >
            <p>
              Pentru mine cursul Alpha reprezintă un “safe space” în care am  povestit despre Dumnezeu, Cristos sau Biblie.
            </p>
            <p>
              E locul în care am reușit să adresez toate întrebările inconfortabile și la care să imi și găsesc răspuns:
            </p>
            <ul class="list-disc list-inside">
              <li>
                dacă avem un singur Dumnezeu, cum rămâne cu Trinitatea?
              </li>
              <li>dacă Dumnezeu e atotputernic, de ce a trebuit sa vină Fiul Său pe pământ?</li>
              <li>de ce e nevoie de Dumnezeu? Nu e suficientă moralitatea pe care o are fiecare individ? etc.</li>
            </ul>
            <p>Dar Alpha e mai mult decât atât, sunt oameni cu diferite experiențe de viață și diferite credințe (ortodocși, catolici, agnostici, atei etc), fiecare venind cu ideile și convingerile sale pe care ulterior le dezbatem.</p>
            <p>Pentru mine este o comunitate de prieteni care încearcă să cunoască adevărul și unde orice opinie e acceptată.</p>
          </TestimonialCard>
        </div>

        <!-- STEFANIA ROSU -->
        <div class="px-4">
          <TestimonialCard
            image="stefania-rosu.jpeg"
            name="Stefania Roșu"
          >
            <p>
              Pentru mine cursul Alpha a însemnat revitalizarea relației mele cu Dumnezeu, fundația căsuței pe care de această dată o voi construi pe stâncă.
            </p>
          </TestimonialCard>
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
import AboutSection from '~/components/AboutSection.vue'
export default {
  components: {
    AboutSection,
    AlphaCarousel,
    TestimonialCard,
    RegistrationForm
  }
}
</script>
