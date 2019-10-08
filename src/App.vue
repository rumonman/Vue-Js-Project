<template>
  <div id="app">
   <h1>{{title}}</h1>
   <navber></navber>
   <Hook></Hook>
  </div>
</template>

<script>

import navber from './components/navber.vue'
import Hook from './components/Hook.vue'

export default {
  name: 'app',
  data(){
    return{
      title: 'Hi, Rumon Chowdhury Your Vue Js Server is Runing.',
      
    }
  },
  components:{
    navber,
   Hook
  },
  methods:{
   
    
  }
}
</script>

<style>
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
