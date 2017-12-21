<!-- =================================================
 Vue Template
================================================== -->
<template>
  <header>
    <div class="header-wrapper">
      <h1>vue-morph demos</h1>
      <nav>
        <ul>
          <li>Demo 1</li>
          <li>Demo 2</li>
          <li>Demo 3</li>
          <li>Demo 4</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'app-header'
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 110px;
  background-color: forestgreen;
  text-align: center;
}

.header-wrapper {
  padding: 20px 0 10px;
}

h1 {
  font-weight: bold;
  font-size: 30px;
  padding-bottom: 15px;
  color: mintcream;
}

ul {
  display: inline-block;
}

ul li {
  float: left;
  margin: 0 15px;
  color: darkorange;
  font-weight: bold;
  font-size: 18px;
}
</style>
