'use strict';

Vue.component('entity-table', {
  props: {
    entities: Array,
    createEntity: Function
  },

  template: `
    <div>
      <h1 v-for="(entity, i) in entities">
        {{ entity.name }}
      </h1>
    </div>
  `
});
