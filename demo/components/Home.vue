<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <ul>
      <app-button
        v-for="item in $store.state.appButtons"
        :key="item.id"
        :bg-color="getBgColor(item.id)"
        :app-button-id="item.id"
      />
    </ul>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'home',
  components: {
    AppButton
  },
  methods: {
    getBgColor (index) {
      let h = (360 / this.$store.state.appButtons.length) * index
      let s = 80
      let l = 70
      let a = 1.0
      return 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')'
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.page-wrapper {
  height: 100%;
}

#origin-box {
  position: absolute;
  top: 100px;
  left: 200px;
  width: 400px;
  height: 300px;
  background-color: seagreen;
  border-radius: 20px;
}

#target-box {
  position: absolute;
  top: 450px;
  left: 500px;
  width: 300px;
  height: 200px;
  background-color: tomato;
}
</style>
