<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div
    id="modal-window"
    :style="[getVisibility, getBgColor]"
    v-morph
    @click="clicked()"
    >
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'modal',
  computed: {
    isVisible () {
      return this.$store.state.modalWindow.isVisible
    },
    bgColor () {
      return this.$store.state.modalWindow.bgColor
    },
    originElementId () {
      return this.$store.state.modalWindow.originElementId
    },
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
        // easing: 'easeOutQuint',
        // duration: 500,
        // className: 'morphing-div',
        callback: this.morphDone
      }
    }
  },
  methods: {
    clicked () {
      this.$store.commit('closeModal')
      // trigger the morphing event
      this.$el.dispatchEvent(new CustomEvent('morph', {'detail': this.getMorphOption}))
    },
    morphDone () {
      const prefix = 'app-button-'
      let appButtonId = parseInt(this.originElementId.substring(prefix.length))
      this.$store.commit('showAppButton', {appButtonId: appButtonId})
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
#modal-window {
  position: fixed;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
</style>
