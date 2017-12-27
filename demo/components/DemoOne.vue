<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <!-- settings -->
    <morph-setting-bar
      :height="settingBarHeight"
      :easing-list="easingList"
      :selected-easing="selectedEasing"
      :selected-duration="selectedDuration"
      @easing-updated="(val) => {selectedEasing = val}"
      @duration-updated="(val) => {selectedDuration = val}"
    />
    <!-- content -->
    <div class="demo1-box-wrapper" :style="getContentHeight">
      <div class="demo1-box-container center">
        <div class="demo1-box" id="origin-box" v-morph @click="clicked()">
          <p class="center">Origin</p>
        </div>
        <div class="demo1-box" id="target-box">
          <p class="center">Target</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import easingList from '@/easingList'
import MorphSettingBar from '@/components/MorphSettingBar'
export default {
  name: 'app',
  components: {
    MorphSettingBar
  },
  data () {
    return {
      settingBarHeight: '50px',
      easingList: easingList,
      selectedEasing: 'easeOutQuint',
      selectedDuration: 500
    }
  },
  computed: {
    getContentHeight () {
      return {
        height: '-webkit-calc(100% - ' + this.settingBarHeight + ')',
        height: '-moz-calc(100% - ' + this.settingBarHeight + ')',
        height: 'calc(100% - ' + this.settingBarHeight + ')'
      }
    },
    getMorphOption () {
      return {
        targetElementId: 'target-box',
        params: {
          'background-color': true,
          'border-radius': true
        },
        easing: this.selectedEasing,
        duration: this.selectedDuration,
        className: 'morphing-div',
        callback: this.morphDone
      }
    }
  },
  methods: {
    clicked () {
      // trigger the morphing event
      let el = document.getElementById('origin-box')
      el.dispatchEvent(new CustomEvent('morph', {'detail': this.getMorphOption}))
    },
    morphDone () {
      console.log('morph done!')
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

.demo1-box-wrapper {
  position: relative;
}

.demo1-box-container {

}

.demo1-box {
  position: relative;
  margin: auto;
}

#origin-box {
  width: 200px;
  height: 200px;
  background-color: seagreen;
  border-radius: 100px;
  margin-bottom: 80px;
}

#target-box {
  width: 300px;
  height: 200px;
  background-color: tomato;
}

.demo1-box p {
  color: white;
  font-weight: bold;
}
</style>
