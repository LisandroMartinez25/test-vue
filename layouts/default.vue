<template>
  <div>
    <header-menu />
    <nuxt/>
  </div>
</template>

<script>
import headerMenu from '../components/HeaderMenu.vue'

export default {
  components: { headerMenu },
  data() {
    return {
      isOpen: false
    }
  },
}
</script>
