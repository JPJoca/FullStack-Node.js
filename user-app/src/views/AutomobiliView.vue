<template>
     <div class="lista">
        <Header />
        <AutoList v-if="sviAutomobiliIDs" :automobiliIDs="sviAutomobiliIDs.slice(current*1, current*1+2)"/>
        <b-button variant="warning" @click="prev() " class="strelica">&LeftAngleBracket;</b-button>
        <b-button variant="warning" @click="next()" class="strelica">&RightAngleBracket;</b-button>
    </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import AutoList from '@/components/AutoList.vue'
  import { mapActions, mapState } from 'vuex';
  export default {
    name: 'Automobili',
    components: {
      Header,AutoList
    },
    data(){
      return{
        current: 0
      }
    },
    methods:{
      ...mapActions([
      'fetchSviAutomobili'
    ]),
    next(){
      if( this.current < this.sviAutomobiliIDs.length - 1 ){
        this.current++;
      }
     
    },
    prev(){
      if( this.current > 0){
        this.current--;
      }
      
    }
  },
    mounted() {
       this.fetchSviAutomobili();
       console.log(this.sviAutomobiliIDs)
  },
  computed:{
    ...mapState([
      'sviAutomobiliIDs'
    ])
  },


  }

</script>
<style>
    .lista{
      background-color:rgb(255, 255, 255); 
    box-shadow: 0px 0px 12px black; 
    border:1px solid black; 
    margin:60px; 

    }
    .strelica{
        font-size: xx-large;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: beige;
        margin-left:30px ;
    }
</style>