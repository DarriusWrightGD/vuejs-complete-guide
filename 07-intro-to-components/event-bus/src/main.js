import Vue from 'vue'
import App from './App.vue'

// You have to create the event bus before loading the compnents
export const eventBus = new Vue({
  data: {
    name: ''
  },
  // Centralize the event calls
  methods: {
    changeName(name) {
      this.name = name;
      this.$emit('nameChangedEvent', name);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
