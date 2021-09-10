<template>
  <div>
    <div class="relative">
      <button @click="isAccountOpen = !isAccountOpen" class="relative mt-1 inline-flex items-center py-1 px-4 font-bold z-10 rounded sm:mt-0 sm:ml-2">
        <span>Mi perfil</span>
        <svg class="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.011 512.011" style="enable-background:new 0 0 512.011 512.011;" xml:space="preserve"><path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667C514.096,145.416,514.096,131.933,505.755,123.592z"/></svg>
      </button>
      <button v-if="isAccountOpen" @click="isAccountOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default"></button>
      <div v-if="isAccountOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl hidden md:block">
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
      </div>

      <div v-if="isAccountOpen" class="px-4 py-5 border-t border-gray-800 sm:hidden">
        <div class="mt-4">
          <a href="#" class="block text-gray-400">Account settings</a>
          <a href="#" class="mt-2 block text-gray-40">Support</a>
          <a href="#" class="mt-2 block text-gray-4">Sign out</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAccountOpen: false
    }
  },
}
</script>