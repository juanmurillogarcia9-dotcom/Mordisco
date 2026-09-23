<template>
  <q-page class="q-pa-md q-pa-lg-lg">
    <CategoryBanner
      image="https://cms.jibecdn.com/prod/sheetz-benefits/assets/LP-SKU-B7-IMG-BG-en-us-1680795907425.jpg"
      title="Nosotros"
      description="Conoce nuestra historia, dónde estamos y quiénes hacen posible cada pedido."
    />

    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <div class="text-h6 font-title text-weight-bold q-mb-md text-center">Nuestro equipo</div>
        <div class="row q-col-gutter-md team-grid">
          <div v-for="member in equipo" :key="member.name" class="col-12 col-sm-4">
            <q-card flat bordered class="team-member-card">
              <q-img :src="member.photo" :ratio="0.9" fit="fill" class="team-member-card__photo" />
              <q-card-section class="team-member-card__info">
                <div class="team-member-card__name">{{ member.name }}</div>
                <div class="team-member-card__role">{{ member.role }}</div>
                <p class="team-member-card__bio">{{ member.bio }}</p>
                <div class="team-member-card__details">
                  <div><q-icon name="star" /> Especialidad: {{ member.specialty }}</div>
                  <div><q-icon name="location_on" /> Vive en {{ member.city }}</div>
                  <div><q-icon name="schedule" /> {{ member.experience }} en Mordisco</div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CategoryBanner from '../components/CategoryBanner.vue'

const equipo = [
  {
    name: 'James Pinilla',
    role: 'Chef principal',
    specialty: 'Parrilla y hamburguesas',
    bio: 'Cuida cada cocción y convierte las recetas de la casa en sabores memorables.',
    city: 'Bucaramanga',
    experience: '8 años',
    photo: 'https://media.istockphoto.com/id/871822732/es/foto/hombre-que-trabaja-en-un-puesto-de-comida.jpg?s=612x612&w=0&k=20&c=Pw_hFhyGnWOHJSIbPRggQ_0ulQaEMHC2_pGTXTsXMWQ='
  },
  {
    name: 'Maria Castro',
    role: 'Cajera',
    specialty: 'Atención al cliente',
    bio: 'Recibe cada pedido con agilidad y se asegura de que la experiencia empiece bien.',
    city: 'Bucaramanga',
    experience: '5 años',
    photo: 'https://tse3.mm.bing.net/th/id/OIP.4D0HgllPx8HJ071Gjcw1ZAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    name: 'Juanjo Rojas',
    role: 'Domiciliario',
    specialty: 'Entregas y logística',
    bio: 'Lleva cada pedido fresco y a tiempo, con la misma energía con la que sale de cocina.',
    city: 'Bucaramanga',
    experience: '4 años',
    photo: 'https://d2yoo3qu6vrk5d.cloudfront.net/images/20201001035806/gettyimages-1190668042-900x485.jpg'
  }
]
</script>

<style scoped>
.team-grid {
  align-items: stretch;
}

.team-member-card {
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #303030;
  border-radius: 12px;
  background: #1d1d1d;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.22);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.team-member-card:hover {
  transform: translateY(-5px);
  border-color: #ff6b2c;
}

.team-member-card__photo {
  display: block;
  flex: 0 0 auto;
  filter: saturate(0.82);
  transition: filter 0.25s ease;
}

.team-member-card:hover .team-member-card__photo {
  filter: saturate(1);
}

.team-member-card__info {
  display: flex;
  min-height: 246px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  border-top: 3px solid #ff6b2c;
  background: #242424;
  text-align: center;
}

.team-member-card__name {
  color: #ffffff;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
}

.team-member-card__role {
  margin-top: 4px;
  color: #ff6b2c;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.team-member-card__bio {
  margin: 14px 0 0;
  color: #d0d0d0;
  font-size: 13px;
  line-height: 1.5;
}

.team-member-card__details {
  display: grid;
  gap: 5px;
  margin-top: 12px;
  color: #bdbdbd;
  font-size: 12px;
}

.team-member-card__details .q-icon {
  margin-right: 4px;
  color: #ff6b2c;
  font-size: 16px;
  vertical-align: middle;
}
</style>
