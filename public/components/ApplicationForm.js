'use strict';

Vue.component('application-form', {
  props: {
    fields: {
      type: Array
    },

    title: String
  },

  methods: {
    updateField(fieldName){
      return (e) => {
        this.$store.commit(
          'updateField',
          {
            field: fieldName,
            value: e.target.value
          }
        );
      }
    }
  },

  template: `
    <form>
      <h1>{{ title }}</h1>
      <form-field v-for="(field, i) in fields"
        :key="i"
        :label="field.label"
        :name="field.name"
        :onInput="updateField(field.name)"
      >
      </form-field>
    </form>
  `
});
