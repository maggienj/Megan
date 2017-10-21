var memberTable = new Vue({
  store,

  el: '#memberTable',

  methods: {
    updateMessage(e){
      this.$store.commit('updateMessage', e.target.value);
    }
  },

  template: `
    <input :value="message" @input="updateMessage"/>
    <h1>{{ message }}</h1>
  `
});
