<template>
    <div id="app">
      <Header title="Create account"/>
      <b-form @submit="onSubmit" class="forma">
        <b-form-group label="Email address:" label-for="email">
          <b-form-input id="email" v-model="form.email" type="email"
  placeholder="Enter email" required></b-form-input>
        </b-form-group>
        <b-form-group label="User Name:" label-for="username">
          <b-form-input id="username" v-model="form.username" 
  placeholder="Enter username" required></b-form-input>
        </b-form-group>
        <b-form-group label="Password:" label-for="password">
          <b-form-input id="password" v-model="form.password" 
  type="password" required></b-form-input>
        </b-form-group>
        <br>
        <b-button type="submit" variant="warning">Register</b-button>
      </b-form>
    </div>
  </template>
  <script>
    import Header from '@/components/Header.vue';
    import { mapActions } from 'vuex';
    export default {
      name: 'Register',
      components: {
        Header
      },
      data() {
        return {
          form: {
            username: '',
            password: '',
            email: '',
          }
        }
      },
      methods: {
        ...mapActions([
          'register'
        ]),
        onSubmit(e) {
          e.preventDefault();
          this.register(this.form);
          console.log(this.form)
          this.$router.push({ name: 'home' });
        }
      }
    }
  </script>
  <style scoped>
  </style>
  