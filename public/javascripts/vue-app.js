var memberTable = new Vue({
  store,

  el: '#memberTable',

  computed: {
    message(){
      return this.$store.state.message;
    }
  },

  methods: {
    updateMessage(e){
      console.log(e);
      this.$store.commit('updateMessage', e.target.value);
    }
  },

  template: `
    <div>
    <input :value="message" type="text" @input="updateMessage">
    <h1>{{ message }}</h1>
    </div>
  `
});
