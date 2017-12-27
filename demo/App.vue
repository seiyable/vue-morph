<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div id="app">
    <morphing-layer ref="morphing-layer" />
    <app-header :height="headerHeight" :current-page-num="currentPageNum"/>
    <main-content :top="headerHeight"/>
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
  },
  data () {
    return {
      headerHeight: '110px',
      currentPageNum: 1
    }
  },
  created () {
    this.currentPageNum = this.$route.path.slice(1)
  },
  watch: {
    $route (to, from) {
      this.currentPageNum = to.path.slice(1)
    }
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

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
