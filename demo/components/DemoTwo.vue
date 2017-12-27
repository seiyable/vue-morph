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
    <div class="app-button-list-wrapper" :style="getContentHeight">
      <ul class="app-button-list center">
        <app-button
          v-for="n in 24"
          :key="n"
          :is-visible="getAppButtonVisibility(n)"
          :bg-color="getAppButtonBgColor(n, 24)"
          :app-button-id="'app-button-' + n"
          :easing="selectedEasing"
          :duration="selectedDuration"
          @morph-started="hideAppButton"
          @morph-done="showModal"
        />
        <modal-window
          :isVisible="modalWindow.isVisible"
          :bgColor="modalWindow.bgColor"
          :originElementId="modalWindow.originElementId"
          :easing="selectedEasing"
          :duration="selectedDuration"
          @morph-started="hideModal"
          @morph-done="showAppButtons"
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
import AppButton from '@/components/AppButton'
import ModalWindow from '@/components/ModalWindow'

export default {
  name: 'demo-two',
  components: {
    MorphSettingBar, AppButton, ModalWindow
  },
  data () {
    return {
      settingBarHeight: '50px',
      easingList: easingList,
      selectedEasing: 'easeOutQuint',
      selectedDuration: 500,
      activeAppButtonId: -1,
      modalWindow: {
        isVisible: false,
        bgColor: '',
        originElementId: ''
      }
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
    getAppButtonVisibility (index) {
      return (index === this.activeAppButtonId) ? false : true
    },
    getAppButtonBgColor (index, total) {
      let h = (360 / total) * index
      let s = 80
      let l = 70
      let a = 1.0
      return 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')'
    },
    showModal ({bgColor, originElementId}) {
      this.modalWindow.bgColor = bgColor
      this.modalWindow.originElementId = originElementId
      this.modalWindow.isVisible = true
    },
    hideModal () {
      this.modalWindow.isVisible = false
    },
    hideAppButton ({originElementId}) {
      const prefix = 'app-button-'
      this.activeAppButtonId = parseInt(originElementId.substring(prefix.length))
    },
    showAppButtons () {
      this.activeAppButtonId = -1
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

.app-button-list-wrapper {
  position: relative;
}

.app-button-list {
  width: 800px;
}

ul.app-button-list {
  padding: 30px 0;
  text-align: center;
}
</style>
