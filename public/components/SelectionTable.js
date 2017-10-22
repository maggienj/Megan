'use strict';

Vue.component('selection-table', {
  props: {
    options: Array,
    onChange: Function
  },

  template: `
    <div>
      <form-field v-for="(option, i) in options"
        :key="i"
        type="checkbox"
        :label="option.label"
        :name="option.name"
        :on-change="onChange"
      >
      </form-field>
    </div>
  `
});
