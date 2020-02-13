<template>
  <div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  
  },
  computed: {
      ...mapGetters([
        'auth/getUser'
      ])
    },
}
</script>

<style>

</style>
