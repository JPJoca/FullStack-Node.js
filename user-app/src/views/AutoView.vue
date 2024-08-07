<template>
    <div class="auto" v-if="auto">
        <Header :title="auto.model.naziv + ' ' + auto.naziv"/>
       
       
    </div>
    <div v-else>
            Loading...
      </div>
  </template>
<script>
import Header from '@/components/Header.vue'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'AutoView',
  
  components: {
    Header
  },
  data(){
    return{
      auto: null
    }
  },
  methods: {
    ...mapActions([
      'getAuto'
    ])
  },
  mounted(){
    this.getAuto(this.$route.params.id)
      .then( res => {
        this.auto = res;
      });
  }

  // mounted(){
  //   let autoID = this.$route.params.id;
  //   fetch(`http://localhost:9000/auto/${autoID}`)
  //   .then( res=>res.json() )
  //   .then( data=>{
  //     this.auto = data;
  //   });
  // }
}
</script>