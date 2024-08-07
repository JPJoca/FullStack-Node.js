<template>
    <div class="auto" >
        <Header :title="'Kreiranje narudzbine'"/>
        <b-alert :variant="statusnaPorukaTip" :show="statusnaPoruka!=null">
            {{ statusnaPoruka }}
        </b-alert>

        <div class="forma">
            <b-container fluid>
                <b-row>
                    <b-col sm="1">
                        <label for="ime">Ime</label>
                    </b-col>
                    <b-col sm="4">
                        <b-form-input id="ime" :state="validnoIme" v-model="forma.ime"></b-form-input>
                    </b-col>
                    <b-col sm="1">
                        <label>Prezime</label>
                    </b-col>
                    <b-col sm="4">
                        <b-form-input id="prezime" :state="validnoPrezime" v-model="forma.prezime"></b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-row>
                    <b-col sm="1">
                        <label>Broj telefona</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input id="telefon" :state="validanTelefon" v-model="forma.telefon"></b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-row>
                    <b-col sm="1">
                        <label>Adresa</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input id="adresa" :state="validnaAdresa" v-model="forma.adresa"></b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-row>
                  <b-col sm="1">
                        <label>Izaberi auto</label>
                    </b-col>
                    <b-col sm="3">
                      <b-form-select v-model="forma.auto" :options="options"></b-form-select>
                    </b-col>
                    <b-col sm="1">
                        <label>Kolicina</label>
                    </b-col>
                    <b-col sm="2">
                      <b-form-input id="kolicina" :state="validanBroj" v-model="forma.kolicina"></b-form-input>
                    </b-col>
                </b-row>
                <b-col sm="3">
                      <div class="mt-3">Izabran auto: <strong>{{ forma.auto }}</strong></div>
                    </b-col>
               

            </b-container>
            <b-button @click="posalji()" variant="primary">Posalji</b-button>
        </div>

    </div>

    
  </template>
<script>
import Header from '@/components/Header.vue'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Narudzbina',
  
  components: {
    Header
  },
  data(){
      return{
        narudzbina :null,
        selected:null,
        auto : null,
        options:[],
        headerTitle: "Prijava promena podataka",
        statusnaPoruka: null,
        statusnaPorukaTip: null,
        forma: {
            ime: null,
            prezime: null,
            adresa: null,
            telefon: null,
            kolicina: null,
            auto: null,
            status : "Novo"
        }
      }
    },

   
    computed: {
        validnoIme(){
            if(this.forma.ime == null) return null;
            else if(this.forma.ime.length > 2) return true
            else return false;
        },
        validnoPrezime(){
            if(this.forma.prezime == null) return null;
            else if(this.forma.prezime.length > 2) return true
            else return false;
        },
        validnaPrijava(){
            if(this.forma.prijava == null) return null;
            else if(this.forma.prijava.length > 2) return true
            else return false;
        },
        validanTelefon(){
            const brojTelefona = this.forma.telefon;
            if(brojTelefona == null) return null;
            if (brojTelefona && /^\+\d{10}$/.test(brojTelefona)) {
                return true;
            } else {
                return false;
            }
        },validnaAdresa() {
        const adresa = this.forma.adresa;
        if(adresa == null) return null;
        // Provera da li adresa sadrži barem jednu reč i broj
        if (adresa && /\d/.test(adresa) && /\w+/.test(adresa)) {
            return true;
        } else {
            return false;
        }
        },
        validanBroj(){
            if(this.forma.kolicina == null) return null;
            return !isNaN(Number(this.forma.kolicina))
        },
        ...mapState([
      'sviAutomobiliIDs',
      'token'
    ]),
    },

    methods: {
        a(){
            console.log(this.sviAutomobiliIDs);
            
        },
      posalji(){
        // if(true){
           
            const naru={
                status: this.forma.status,
                adresa: this.forma.adresa,
                telefon: this.forma.telefon,
                ime: this.forma.ime + " " + this.forma.prezime,
                user_id : '1'
            }
            console.log(naru)
            fetch("http://localhost:9000/narudzbina/novo", {
            method:"POST",
            headers: { 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                     },
            body: JSON.stringify(naru)
        })
        .then(succ=>succ.json())
        .then(data=>{
            console.log(data)
            this.narudzbina = data.id
            
            const stavka = {
            komad: this.forma.kolicina,
            auto_id: this.forma.auto,
            narudzbina_id: this.narudzbina
            }

            fetch("http://localhost:9000/stavka/novo", {
            method:"POST",
                    headers: { 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                     },
            body: JSON.stringify(stavka)
            })
            .then(succ=>succ.json())
            .then(data=>{
                console.log(data)
                this.$router.push({ name: 'home' });
            })
            .catch(err => console.log(err));
            })

        .catch(err => console.log(err));	
        // }
        // else{
        //     console.log(JSON.stringify(this.forma))
        //     return; //nista, forma nije validno popunjena
        // }
      }, 
      ...mapActions([
      'fetchSviAutomobili'
    ]),
    napraviOpcije(){
        console.log("pozvan sam")
        console.log(this.token);
        for(var i = 0; i<this.sviAutomobiliIDs.length; i++){
            const opcija = {
                value: this.sviAutomobiliIDs[i].id, text: this.sviAutomobiliIDs[i].naziv + " " + this.sviAutomobiliIDs[i].model.naziv
            }
            
            this.options.push(opcija);
        }
    },

    },mounted() {
        this.fetchSviAutomobili()
    .then(() => {
      console.log('Svi automobili su uspešno učitani.');
      this.napraviOpcije(); 
    })
    .catch((error) => {
      console.error('Greška prilikom dohvatanja sviAutomobiliIDs:', error);
    });
},

  
}
</script>
<style>
    .forma{
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 50px;
        margin-bottom: 100px;
    }
</style>