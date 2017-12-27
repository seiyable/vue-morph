<!-- =================================================
 Vue Template
================================================== -->
<template>
  <main :style="getStyle">
    <router-view></router-view>
  </main>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'main-content',
  props: {
    top: String
  },
  computed: {
    getStyle () {
      return {
        top: this.top,
        height: '-webkit-calc(100% - ' + this.top + ')',
        height: '-moz-calc(100% - ' + this.top + ')',
        height: 'calc(100% - ' + this.top + ')'
      }
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
main {
  position: fixed;
  width: 100%;
  background-color: snow;
}
</style>
