<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div id="app">
    <morphing-layer ref="morphing-layer" />
    <app-header :height="110"/>
    <main-content :top="110"/>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import AppHeader from '@/components/AppHeader'
import MainContent from '@/components/MainContent'
require('reset-css')

export default {
  name: 'app',
  components: {
    AppHeader, MainContent
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
