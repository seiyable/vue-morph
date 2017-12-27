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
    <div id="demo-three-content-wrapper" class="description-box-list-wrapper" :style="getContentHeight">
      <ul class="description-box-list center">
        <description-box
          v-for="n in 3"
          :key="n"
          :width="'25%'"
          :height="'400px'"
          :margin="'2%'"
          :bg-color="'lightskyblue'"
          :index="n"
          :description-box-id="'app-button-' + n"
          :easing="selectedEasing"
          :duration="selectedDuration"
          @morph-started="morphStarted"
          @morph-done="moveTo"
        />
      </ul>
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import easingList from '@/easingList'
import MorphSettingBar from '@/components/MorphSettingBar'
import DescriptionBox from '@/components/DescriptionBox'

export default {
  name: 'app',
  components: {
    MorphSettingBar, DescriptionBox
  },
  data () {
    return {
      settingBarHeight: '50px',
      easingList: easingList,
      selectedEasing: 'easeOutQuint',
      selectedDuration: 500,
      activeAppButtonId: -1
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
  },
  methods: {
    morphStarted () {
      console.log('morph started')
    },
    moveTo () {
      console.log('in moveTo')
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

.description-box-list-wrapper {
  position: relative;
}

.description-box-list {
  width: 1200px;
}

ul.description-box-list {
  text-align: center;
}
</style>
