<!-- =================================================
 Vue Template
================================================== -->
<template>
  <li
    class="description-box"
    :style="[getSize, getBgColor]"
    :id="descriptionBoxId"
    v-morph
    @click="clicked()"
  >
  <h6>Option {{index}}</h6>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</li>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'description-box',
  props: {
    width: String,
    height: String,
    margin: String,
    bgColor: String,
    index: Number,
    descriptionBoxId: String,
    easing: String,
    duration: Number
  },
  computed: {
    getSize () {
      return {
        width: this.width,
        height: this.height,
        margin: this.margin
      }
    },
    getBgColor () {
      return {'background-color': this.bgColor}
    },
    getMorphOption () {
      return {
        targetElementId: 'demo-three-content-wrapper',
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
      console.log('morph started!')
      this.$emit('morph-started', {originElementId: this.appButtonId})
      this.$el.dispatchEvent(new CustomEvent('morph', {'detail': this.getMorphOption}))
    },
    morphDone () {
      console.log('morph done!')
      // this.$emit('morph-done', {
      //   bgColor: this.bgColor,
      //   originElementId: this.$el.id
      // })
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.description-box {
  display: inline-block;
  padding: 20px;
}

h6 {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.5em;
}
</style>
