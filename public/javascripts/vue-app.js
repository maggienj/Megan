var app = new Vue({
  store,

  el: '#app',

  created(){
    this.fetchFields();
  },

  computed: {
    forms(){
      return this.$store.state.forms;
    },
    applications(){
      return this.$store.state.applications;
    }
  },

  methods: {
    getFields(form){
      return this.$store.getters.fields(form);
    },

    fetchFields(){
      return this.$store.dispatch('fetchFields');
    },

    updateApplicationSelection(e){
      return this.$store.dispatch(
        'updateApplicationSelections',
        e.target.name
      );
    }
  }
});
