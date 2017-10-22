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

  template: `
    <div>
    <dt>
      <label :for="name">
        {{ label }}
      </label>
    </dt>
    <dd>
      <input :type="type"
        :name="name"
        @input="onInput"
        @change="onChange"
      >
    </dd>
    </div>
  `
});
