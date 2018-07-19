<template>
  <div id="app">
    <div>Component Name: {{selectedComponent}}</div>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <button @click="selectedComponent='Quote'">Quote</button>
    <button @click="selectedComponent='New'">New</button>
    <button @click="selectedComponent='Author'">Author</button>
  </div>
</template>

<script>
import Quote from './components/Quote';
import New from './components/New';
import Author from './components/Author';
export default {
  data () {
    return {
      selectedComponent: 'Quote'
    }
  },
  components: {
    Quote,
    New,
    Author
  }

}
</script>

<style>
</style>
