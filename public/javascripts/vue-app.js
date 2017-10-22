var memberTable = new Vue({
  store,

  el: '#app',

  computed: {
    fields(){
      return this.$store.state.fields;
    }
  },

  methods: {
  }
});
