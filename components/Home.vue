<!-- Please remove this file from your project -->
<template>
  <div class="flex mb-4">
    <div class="w-full">
      <div class="flex mb-4">
        <div class="w-full">
          <h1 class="font-bold text-3xl mt-20 mb-2 text-center">Lista de favoritos</h1>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-2">
        <div class="col-start-2 col-span-10 ...">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 md:px-5 sm:w-full sm:px-0 mb-4" v-for="favorite in favorites" :key="favorite.id">
              <card :favorite="favorite" />
            </div>

            <div class="w-full md:w-1/3 sm:w-full md:px-5 sm:px-0 mb-4">
              <div class="rounded  overflow-hidden cursor-pointer">
                <div class="w-full h-48 rounded overflow-hidde text-center flex justify-center items-center">
                  <span class="text-blue-600 text-7xl font-light">+</span>
                </div>
                <div class="text-center py-4">
                  <div class="font-semibold text-blue-600 text-l mb-2">Crear una nueva lista</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Card from './Card.vue';

  export default {
    components: { Card },
    props: ['favorite'],
    data() {
      return {
        favorites: []
      }
    },
    async created() {
      try {
        const res = await axios.get('https://lh-real-estates-challenge-api.herokuapp.com/real-estates')
        this.favorites = res.data.data;
        this.favorites.forEach(favorite => {
          favorite.houses = res.data.included.filter(house => favorite.attributes.real_estate_ids.some(houseIncludedId => houseIncludedId == house.id))
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
</script>
