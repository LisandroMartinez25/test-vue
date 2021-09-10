<template>
  <div class="max-w-sm rounded overflow-hidden cursor-pointer">
    <div class="w-full h-48 overflow-hidden flex relative">
      <div
        class="absolute h-full rounded-lg border border-white z-30 overflow-hidden"
        :class="favorite.houses.length > 1 ? 'w-1/2' : 'w-full'"
      >
        <img class="h-full w-full object-cover" :src="favorite && favorite.houses.length ? favorite.houses[0].attributes.gallery_urls[0] : ''">
      </div>

      <div
        v-if="favorite.houses.length > 1"
        class="absolute h-full rounded-lg border border-white z-20 overflow-hidden"
        :class="favorite.houses.length === 2 ? 'w-full' : favorite.houses.length > 2 ? 'w-4/5' : ''"
      >
        <img class="h-full w-full object-cover" :src="favorite.houses[1].attributes.gallery_urls[0]">
      </div>

      <div
        v-if="favorite.houses.length > 2"
        class="absolute h-full w-full rounded-lg border border-white z-10 overflow-hidden"
      >
        <div class="h-full w-full relative">
          <img class="h-full w-full object-cover absolute z-10" :src="favorite.houses[2].attributes.gallery_urls[0]">
          <div class="h-full w-full absolute z-20 bg-green-900 bg-opacity-80 flex items-center justify-end">
            <span class="z-30 h-5 w-1/5 text-center text-white font-semibold">+ {{ favorite.houses.length - 2 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4">
      <div class="font-bold text-l mb-2">{{ favorite ? favorite.attributes.name : '' }}</div>
      <p class="text-gray-700 text-sm">
        {{ favorite ? favorite.houses.length : 0 }} propiedades guardadas
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      favorite: Object
    },
    created() {
      console.log(this.favorite);
    }
  }
</script>
