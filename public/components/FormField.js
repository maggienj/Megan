'use strict';

/** 
Usage:

<form-field
  :type="text"
  :label="Name"
  :value="name"
  :onInput="() => {}"
>
</form-field>

**/

Vue.component('form-field', {
  props: {
    type: {
      type: String,
      default: 'text'
    },

    label: String,

    name: String,

    onInput: {
      type: Function,
      default: () => {}
    },

    onChange: {
      type: Function,
      default: () => {}
    }
  },

  computed: {
    isCheckbox(){
      return this.type === 'checkbox';
    }
  },

  template: `
    <div>
      <label v-if="!isCheckbox" :for="name">
        {{ label }}:
      </label>
      <input :type="type"
        :name="name"
        @input="onInput"
        @change="onChange"
      >
      <label v-if="isCheckbox" :for="name">
        {{ label }}
      </label>
    </div>
  `
});
