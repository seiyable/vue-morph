<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="modal-window-mask" :style="getVisibility">
    <div
      id="modal-window"
      :style="getBgColor"
      v-morph
      @click="clicked()"
      >
    </div>
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'modal',
  props: {
    isVisible: Boolean,
    bgColor: String,
    originElementId: String,
    easing: String,
    duration: Number
  },
  computed: {
    getVisibility () {
      return this.isVisible ? {'visibility': 'visible'} : {'visibility': 'hidden'}
    },
    getBgColor () {
      return {'background-color': this.bgColor}
    },
    getMorphOption () {
      return {
        targetElementId: this.originElementId,
        params: {
          'background-color': false,
          'border-radius': true
        },
        easing: this.easing,
        duration: this.duration,
        className: 'morphing-div',
        callback: this.morphDone
      }
    }
  },
  methods: {
    clicked () {
      // trigger the morphing event
      this.$emit('morph-started')
      let modalWindowElement = document.getElementById('modal-window')
      modalWindowElement.dispatchEvent(new CustomEvent('morph', {'detail': this.getMorphOption}))
    },
    morphDone () {
      this.$emit('morph-done', {originElementId: this.originElementId})
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.modal-window-mask {
  z-index: 1000;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

#modal-window {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
</style>
