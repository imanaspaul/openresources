<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="white">
              <div class='container'>
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown right v-if='auth.user'>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            {{ auth.user.name || username }}
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click='logout'>Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <button v-else class='btn btn-danger' @click='googleSignIn'>Sign in with Google</button>
      </b-navbar-nav>
      
    </b-collapse>
        </div>
  </b-navbar>

</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: "Navbar",
    computed: {
     ...mapState([
      'auth'
    ])
    },
     methods: {
      googleSignIn () {
        this.$store.dispatch('auth/signUserInGoogle')
        },
      logout () {
        this.$store.dispatch('auth/logout')
      }
    },
}
</script>
<style lang="css" scoped>
    
</style>