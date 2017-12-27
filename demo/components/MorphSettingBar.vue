<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="morph-settings" :style="{height: height}">
    <div class="morph-settings-container center">
      <div class="easing-setting">
        Easing Type:
        <select v-model="getSelectedEasing">
          <option
            v-for="easing in easingList"
            :value="easing"
            :selected="easing === 'easeOutQuint'"
            >
            {{easing}}
          </option>
        </select>
      </div>
      <div class="duration-setting">
        Duration:
        <input type="text" v-model.number="getSelectedDuration" placeholder="500"/>
      </div>
    </div>
  </div>
</template>


<!-- =================================================
 Vue Script
================================================== -->
<script>
export default {
  name: 'morphing-setting-bar',
  props: {
    height: String,
    easingList: Array,
    selectedEasing: String,
    selectedDuration: Number
  },
  computed: {
    getSelectedEasing: {
      get () {
        return this.selectedEasing
      },
      set (val) {
        this.$emit('easing-updated', val)
      }
    },
    getSelectedDuration: {
      get () {
        return this.selectedDuration
      },
      set (val) {
        this.$emit('duration-updated', val)
      }
    }
  }
}
</script>


<!-- =================================================
 Vue Style
================================================== -->
<style>
.morph-settings {
  background-color: #C8D9EB;
  position: relative;
}

.easing-setting, .duration-setting {
  padding: 0 20px;
  float: left;
}
</style>
