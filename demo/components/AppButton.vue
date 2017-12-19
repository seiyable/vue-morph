<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div
    class="app-button"
    :style="[getVisibility, getBgColor]"
    :id="'app-button-' + appButtonId"
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
  name: 'app-button',
  props: {
    bgColor: String,
    appButtonId: Number
  },
  computed: {
    isVisible () {
      return this.$store.getters.getAppButton(this.appButtonId).isVisible
    },
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
        // easing: 'easeOutQuint',
        // duration: 500,
        // className: 'morphing-div',
        callback: this.morphDone
      }
    }
  },
  methods: {
    clicked () {
      // trigger the morphing event
      this.$store.commit('hideAppButton', {appButtonId: this.appButtonId})
      this.$el.dispatchEvent(new CustomEvent('morph', {'detail': this.getMorphOption}))
    },
    morphDone () {
      this.$store.commit('showModal', {
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
  float: left;
}
</style>
