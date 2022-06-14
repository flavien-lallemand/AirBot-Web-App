<template>
  <div id="app">
    <Chatbot></Chatbot>
  </div>
</template>

<script>
import Chatbot from "./components/Chatbot";

export default {
  name: 'App',

  components: {
    Chatbot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 0;
  width:100%;
  height:100vh;
  background-color: #E8EBFB;

  display: flex;
  justify-content: center;
  align-items: center;
}
body{
  margin: 0!important;
}
</style>
