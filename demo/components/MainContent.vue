<!-- =================================================
 Vue Template
================================================== -->
<template>
  <main :style="{'top': top + 'px'}">
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
    top: Number
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
