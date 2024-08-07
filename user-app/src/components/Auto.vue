<template>
    
    <div class="auto" @click="kliknutAuto(auto.id)">
        
  <b-card>
  
    <template #header>
      <h4 class="mb-0">{{ auto.cena}}</h4>
    </template>

    <b-card-body>
      <b-card-title>{{ auto.naziv }}</b-card-title>
      <b-card-sub-title class="mb-2">{{ auto.model.naziv }}</b-card-sub-title>
      <b-card-text>
        {{ auto.opis }}
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>Godiste : {{ auto.godiste }}</b-list-group-item>
      <b-list-group-item>Kubikaza : {{ auto.kubikaza }}</b-list-group-item>
      <b-list-group-item>Snaga : {{ auto.snaga }}</b-list-group-item>
      <b-list-group-item>Karoserija : {{ auto.model.karoserija }}</b-list-group-item>
    </b-list-group>

    
  </b-card>
</div>

 </template>
 
 <script>
  
 export default {
   name: 'Auto',  
   props: {
   auto: Object
 },
 methods:{
   kliknutAuto(id){
        this.$router.push({ name: 'AutoView', params: { id: id } });
   }
  }
 

 };
 </script>
 
 <style scoped>
.auto{

   display:inline-block;
    padding: 30px;
}
 </style>
 