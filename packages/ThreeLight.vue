<template>
  <div class="three-light-instance"></div>
</template>

<script>
import * as THREE from 'three'
import Object3D from './mixins/Object3D'

export default {
  name: 'ThreeLight',
  mixins: [Object3D],
  props: {
    type: { type: String, required: true },
    color: { type: Number, default: 0xffffff },
    intensity: { type: Number, default: 1 }
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
      let { setObj3DProps } = this
      setObj3DProps()
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
