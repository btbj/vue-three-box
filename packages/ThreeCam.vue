<template>
  <div class="three-camera-instance">
    <slot/>
  </div>
</template>

<script>
import * as THREE from 'three'
import Object3D from './mixins/Object3D'

export default {
  name: 'ThreeCam',
  mixins: [Object3D],
  props: {
    fov: { type: Number, default: 45 },
    near: { type: Number, default: 1 },
    far: { type: Number, default: 2000 }
  },
  methods: {
    initCam () {
      let ThreeScene = this.$parent
      let aspectRatio = ThreeScene.width / ThreeScene.height
      this.instance = new THREE.PerspectiveCamera(this.fov, aspectRatio, this.near, this.far)
      let { setObj3DProps } = this
      setObj3DProps()
      return this.instance
    },
    setCam () {
      let ThreeScene = this.$parent
      ThreeScene.camera = this.instance
      ThreeScene.instance.add(this.instance)
    }
  },
  beforeMount () {
    this.initCam()
  },
  mounted () {
    this.setCam()
  }
}
</script>

<style>

</style>
