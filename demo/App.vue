<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div id="app">
    <morphing-layer ref="morphing-layer" />
    <modal-window />
    <home />
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ModalWindow from '@/components/ModalWindow'
import Home from '@/components/Home'
require('reset-css')

export default {
  name: 'app',
  components: {
    Home, ModalWindow
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style>
html, body, #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
  background-color: snow;
}
</style>
