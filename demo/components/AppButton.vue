<!-- =================================================
 Vue Template
================================================== -->
<template>
  <li
    class="app-button"
    :style="[getVisibility, getBgColor]"
    :id="appButtonId"
    v-morph
    @click="clicked()"
  >
</li>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'app-button',
  props: {
    isVisible: Boolean,
    bgColor: String,
    appButtonId: String,
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
        targetElementId: 'modal-window',
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
      this.$emit('morph-started', {originElementId: this.appButtonId})
      this.$el.dispatchEvent(new CustomEvent('morph', {'detail': this.getMorphOption}))
    },
    morphDone () {
      this.$emit('morph-done', {
        bgColor: this.bgColor,
        originElementId: this.$el.id
      })
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.app-button {
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 20px;
  /* float: left; */
  display: inline-block;
}
</style>
