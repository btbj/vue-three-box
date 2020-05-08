<template>
  <div class="three-camera-instance">
    <slot/>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeCam',
  props: {
    fov: { type: Number, default: 45 },
    near: { type: Number, default: 1 },
    far: { type: Number, default: 2000 },
    pos: {
      type: Array,
      default: function () {
        return [0, 100, 0]
      },
      validator: function (value) {
        return value.length === 3
      }
    }
  },
  data () {
    return {
      instance: null
    }
  },
  methods: {
    initCam () {
      let ThreeScene = this.$parent
      let aspectRatio = ThreeScene.width / ThreeScene.height
      this.instance = new THREE.PerspectiveCamera(this.fov, aspectRatio, this.near, this.far)
      this.instance.position.set(...this.pos)
      return this.instance
    },
    setCam () {
      let ThreeScene = this.$parent
      ThreeScene.camera = this.instance
      ThreeScene.instance.add(this.instance)
    }
  },
  beforeMount () {
    console.log('cam before mount')
    this.initCam()
  },
  mounted () {
    console.log('cam mounted')
    this.setCam()
  }
}
</script>

<style>

</style>
