<template>
  <div class="max-w-sm rounded overflow-hidden ">
    <div class="w-full h-48 rounded overflow-hidden cursor-pointer">
      <img class="h-full w-full object-cover" :src="favorite && favorite.houses.length ? favorite.houses[0].attributes.gallery_urls[0] : ''" alt="Sunset in the mountains">
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
    }
  }
</script>
