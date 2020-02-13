<template>
  <div>
    <Navbar/>
    <div class='container'>
      <nuxt/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: "Default",
  components : {
    Navbar
  }
}
</script>
<style>
body{
  background-color: #efdd;
}
</style>
