<template>
    <div class="tabela">
        <Header title="Dostupni modeli"/>
        <b-pagination
          v-model="currentPage"
          :total-rows="this.modeli.lenght"
          :per-page="perPage"
          aria-controls="tebelaModela"
        ></b-pagination>

        <b-table id="tebelaModela" striped hover :items="this.modeli" :fields="fields" :per-page="perPage" :current-page="currentPage"></b-table>
        

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Modeli',
  components: {
    Header
  },
  data(){
    return{
      rows:0,
      perPage:10,
      currentPage: 1,
      fields: [{
          key: "naziv",
          sortable: true,
          label: "Modeli"
        },{
          key: "karoserija",
          sortable: true,
          label: "Karoserija"
        },{
          key: "opis",
          sortable: false,
          label: "Opis"
        }
]
    }
  },computed:{
    ...mapState([
      'modeli'
    ])
  },

  methods: {
      ...mapActions([
        'fetchModeli'
      ])
  },
  mounted(){
    this.fetchModeli();
  }



 
}
</script>
<style>
  .tabela{
    margin: 30px;
    margin-bottom: 30px;
  }
</style>