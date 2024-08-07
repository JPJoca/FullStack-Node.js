import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modeli: [],
    automobili: [],
    sviAutomobiliIDs: [],
    token:'',
    username:''
  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    setUsername(state, username) {
      state.username = username;
      localStorage.username = username;
    },
    removeUsername(state) {
      state.username = '';
      localStorage.username = '';
    },

    addModel(state, modeli){
      state.modeli = modeli;
    },

    addAuto(state, automobili){
      state.automobili = automobili;
    },

    addSviAutomobiliIDs(state, niz){
      state.sviAutomobiliIDs = niz;
    },

  },
  actions: {
    register({ commit }, obj) {
      fetch('http://127.0.0.1:9001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( data => commit('setToken', data.token) );
    },

    login({ commit }, obj) {
      
      fetch('http://127.0.0.1:9001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( data => {
        if (data.msg) {
          alert(data.msg);
        } else {
          console.log(data)
          commit('setToken', data.token)
          commit('setUsername', data.username)
        }
      });
    },


    async fetchModeli({commit}){
      fetch(`http://localhost:9000/model/`)
        .then( res=>res.json() )
          .then( data => commit('addModel', data) );
    },


    async getAuto({commit, state}, autoID){
      return new Promise((resolve, reject)=>{
        if(state.automobili[autoID]){
          resolve(state.automobili[autoID]);
        }
        else{
          fetch(`http://localhost:9000/auto/${autoID}`)
            .then( res=>res.json() )
              .then( data=> {
                commit('addAuto', data)
                resolve(data);
              });
        }
      })},

      async fetchSviAutomobili({commit}){
        fetch("http://localhost:9000/auto")
          .then( res=>res.json() )
            .then( data=> commit('addSviAutomobiliIDs', data) );
      },
  
  },

  modules: {
  }

});
