<!-- =================================================
 Vue Template
================================================== -->
<template>
  <header :style="{height: height}">
    <div class="header-wrapper center">
      <h1>vue-morph</h1>
      <nav>
        <ul>
          <router-link :to="{name: 'demo-one'}"><li id="demo-link-1">Demo 1</li></router-link>
          <router-link :to="{name: 'demo-two'}"><li id="demo-link-2">Demo 2</li></router-link>
          <router-link :to="{name: 'demo-three'}"><li id="demo-link-3">Demo 3</li></router-link>
          <router-link :to="{name: 'demo-four'}"><li id="demo-link-4">Demo 4</li></router-link>
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
  name: 'app-header',
  props: {
    height: String,
    currentPageNum: String
  },
  mounted () {
    this.addClass(this.currentPageNum)
  },
  watch: {
      currentPageNum (val) {
        this.addClass(val)
    }
  },
  methods: {
    addClass (val) {
      const clazz = 'current-page'
      let elements = document.getElementsByClassName(clazz)
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(clazz)
      }

      let id = "demo-link-" + val
      document.getElementById(id).classList.add(clazz)
    }
  }
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
  background-color: #8FA3B8;
  text-align: center;
}

h1 {
  font-weight: bold;
  font-size: 32px;
  padding-bottom: 15px;
  color: #273236;
}

ul {
  display: inline-block;
}

li {
  float: left;
  margin: 0 15px;
  color: azure;
  font-weight: bold;
  font-size: 18px;
}

li.current-page {
  text-decoration: underline;
}

li:hover {
  text-decoration: underline;
}
</style>
