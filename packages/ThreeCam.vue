<template>
  <div class="three-camera-instance">
    <slot/>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeCam',
  inject: ['ThreeScene'],
  provide () {
    return {
      ThreeCam: this
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
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
      console.log('init Cam')
      let { ThreeScene } = this
      let aspectRatio = ThreeScene.width / ThreeScene.height
      this.instance = new THREE.PerspectiveCamera(45, aspectRatio, 1, 2000)
      this.instance.position.set(...this.pos)
      return this.instance
    },
    setCam () {
      let { ThreeScene } = this
      ThreeScene.camera = this.instance
      ThreeScene.scene.add(this.instance)
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
