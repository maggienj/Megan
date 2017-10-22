'use strict';

Vue.component('submit-button', {
  props: {
    url: String,
    data: Array
  },

  computed: {
    payload(){
      return this.data.reduce((a, b) => {
        return a.concat(
          {
            name: b.name,
            value: b.value
          }
        );
      }, []);
    }
  },

  methods: {
    send(){
      var data = this.payload;
      var url = this.url;
      var XHR = new XMLHttpRequest();
      var FD  = new FormData();

      data.forEach( field => FD.append(field.name, field.value) );

      // Define what happens on successful data submission
      XHR.addEventListener('load', function(event) {
        alert('Yeah! Data sent and response loaded.');
      });

      // Define what happens in case of error
      XHR.addEventListener('error', function(event) {
        alert('Oups! Something went wrong.');
      });

      // Set up our request
      XHR.open('POST', url);

      // Send our FormData object; HTTP headers are set automatically
      XHR.send(FD);
    }
  },

  template: `
    <input @click="send" type="submit"/>
  `
});
