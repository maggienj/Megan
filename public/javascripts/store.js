Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    message: 'Hello World'
  },

  mutations: {
    updateMessage(state, payload){
      state.message = payload;
    }
  }
});
