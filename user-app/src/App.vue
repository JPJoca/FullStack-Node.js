<template>
  <div id="app">
    
    <b-navbar class="nav" >
      
      
      <b-navbar-brand href="#">
        <router-link to="/"><img src="./assets/icon.png" alt="BMW"></router-link> 
      
    </b-navbar-brand>
      <b-navbar-brand href="#">
        <router-link to="/">Home</router-link> 
      </b-navbar-brand>
      <b-navbar-brand href="#">
        <router-link to="/automobili">Automobili</router-link>
      </b-navbar-brand>
      <b-navbar-brand href="#">
        <router-link to="/modeli">Modeli</router-link>
      </b-navbar-brand>
      <b-navbar-brand href="#">
        <router-link to="/krejiraj-narudzbinu">Napravi narudzbinu</router-link>
      </b-navbar-brand>
      <b-nav-item-dropdown class="a">
        <template  #button-content >
            User
        </template>
          <b-dropdown-item v-if="!token" to="/register">Register</b-dropdown-item>
          <b-dropdown-item v-if="!token" to="/login">Login</b-dropdown-item>
          <b-dropdown-item v-else @click="logout()">Logout</b-dropdown-item>
          
      </b-nav-item-dropdown>
      
      
        <p class="grays" v-if="token">{{ username  }}</p>
      
    
  </b-navbar>
  <router-view/>
  <div class="foot">
    <Footer/>
  </div>
    
  </div>
</template>
<script>
 import { mapActions, mapState, mapMutations } from 'vuex';
 import Footer from '@/components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Footer
    },
    computed: {
      ...mapState([
        'token',
        'username'
      ])
    },
    methods: {
      ...mapMutations([
        'removeToken',
        'setToken',
        'removeUsername'
      ]),
      logout() {
        this.removeToken();
        this.removeUsername();
      }
    },
    mounted() {
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
      if (localStorage.username) {
        this.setToken(localStorage.username);
      }
    },



  }
</script>
<style>
.a{
  font-size: large;
  font-weight: bold;
  color: #ff0000;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav {
  list-style-type: none;
  margin-right: 50px;
  background-color: rgb(3, 172, 237);
  overflow: hidden;
  
}
nav img{
  
  position: relative;
  height: 100px;
  width: 100px;
}
nav a {
  font-size: large;
  font-weight: bold;
  color: #ffffff;
}
nav p{
  position: absolute;
  right:50px;
  font-size: x-large;
  font-family:Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: #ffbf00;
}

</style>