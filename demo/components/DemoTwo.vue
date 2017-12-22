<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <div class="morph-settings">
      <div class="morph-settings-container">
        <div class="easing-setting">
          Easing Type:
          <select v-model="selectedEasing">
            <option
              v-for="easing in easings"
              :value="easing"
              :selected="easing === 'easeOutQuint'"
              >
              {{easing}}
            </option>
          </select>
        </div>
        <div class="duration-setting">
          Duration:
          <input type="text" v-model.number="selectedDuration" placeholder="500"/>
        </div>
      </div>
    </div>
    <div class="app-button-list-wrapper">
      <ul class="app-button-list">
        <app-button
          v-for="n in 20"
          :key="n"
          :is-visible="getAppButtonVisibility(n)"
          :bg-color="getAppButtonBgColor(n, 20)"
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
import AppButton from '@/components/AppButton'
import ModalWindow from '@/components/ModalWindow'

export default {
  name: 'demo-two',
  components: {
    AppButton, ModalWindow
  },
  data () {
    return {
      activeAppButtonId: -1,
      modalWindow: {
        isVisible: false,
        bgColor: '',
        originElementId: ''
      },
      selectedEasing: 'easeOutQuint',
      selectedDuration: 500,
      easings: [
        'linear',
        'easeInQuad',
        'easeInCubic',
        'easeInQuart',
        'easeInQuint',
        'easeInSine',
        'easeInExpo',
        'easeInCirc',
        'easeInBack',
        'easeInElastic',
        'easeOutQuad',
        'easeOutCubic',
        'easeOutQuart',
        'easeOutQuint',
        'easeOutSine',
        'easeOutExpo',
        'easeOutCirc',
        'easeOutBack',
        'easeOutElastic',
        'easeInOutQuad',
        'easeInOutCubic',
        'easeInOutQuart',
        'easeInOutQuint',
        'easeInOutSine',
        'easeInOutExpo',
        'easeInOutCirc',
        'easeInOutBack',
        'easeInOutElastic'
      ]
    }
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
.morph-settings {
  height: 50px;
  background-color: lightgrey;
  position: relative;
}

.morph-settings-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.easing-setting, .duration-setting {
  padding: 0 20px;
  float: left;
}

.app-button-list {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

ul.app-button-list {
  padding: 30px 0;
  text-align: center;
}
</style>
