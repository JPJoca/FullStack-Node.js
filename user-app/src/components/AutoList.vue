<template>
    <div >
        <Auto v-for="auto in automobili" 
			:key="auto.id" :auto="auto"/>
        <p></p>
        
 </div>

 </template>
 
 <script>
 import Auto from '@/components/Auto.vue';
 import { mapActions, mapState } from 'vuex';

 export default {
    name: 'AutoList',


    components: {
        Auto
    },


    data() {
        return {
            automobili: []
        }
    },
   
    props: {
        automobiliIDs: Array
    },
    methods: {
      ...mapActions([
        'getAuto'
      ])
    },

    mounted() {
        this.automobiliIDs.map( obj => {
            this.getAuto(obj.id)
              .then( auto => this.automobili.push(auto) );

        })},

        watch: {
        automobiliIDs(nVal) {
            this.automobili = [];
            nVal.map( obj => {
                this.getAuto(obj.id)
              .then( auto => this.automobili.push(auto) );
            });
        }
    },


 };
 </script>
 
 <style scoped>
.student{
   width:150px;
   display:inline-block;
   margin:10px;
   vertical-align: top;
}
.student img{
   width:150px;
   height:150px;
   object-fit:cover;
}
.student p{
   height:150px;
   margin:0;
   background-color:silver;
   text-align:center;
}

 </style>
 