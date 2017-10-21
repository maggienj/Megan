Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    message: 'Hello World'
  },

  mutations: {
    updateMessage(state, message){
      state.message = message;
    }
  }
});
