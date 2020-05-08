<template>
  <div class="three-light-instance"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeLight',
  props: {
    type: { type: String, required: true },
    pos: {
      type: Array,
      default: function () {
        return [0, 100, 0]
      },
      validator: function (value) {
        return value.length === 3
      }
    },
    color: { type: Number, default: 0xffffff },
    intensity: { type: Number, default: 1 },
    width: { type: Number, default: 10 },
    height: { type: Number, default: 10 }
  },
  data () {
    return {
      instance: null
    }
  },
  methods: {
    initLight () {
      switch (this.type) {
        case 'ambient':
          this.instance = new THREE.AmbientLight(this.color, this.intensity)
          break
        case 'directional':
          this.instance = new THREE.DirectionalLight(this.color, this.intensity)
          break
        case 'hemisphere':
          this.instance = new THREE.HemisphereLight(this.color, this.intensity)
          break
        case 'point':
          this.instance = new THREE.PointLight(this.color, this.intensity)
          break
        case 'spot':
          this.instance = new THREE.SpotLight(this.color, this.intensity)
          break
      }
      this.instance.position.set(...this.pos)
    },
    setLight () {
      let ThreeCam = this.$parent
      ThreeCam.instance.add(this.instance)
    }
  },

  beforeMount () {
    this.initLight()
  },
  mounted () {
    this.setLight()
  }
}
</script>

<style>

</style>
