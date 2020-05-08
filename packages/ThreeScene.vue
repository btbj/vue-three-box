<template>
  <div ref="container" class="three-scene-container">
    <slot/>
  </div>
</template>

<script>
import * as THREE from 'three'
import ThreeOrbitControle from './utils/ThreeOrbitControle.js'

export default {
  name: 'ThreeScene',
  props: {
    width: { type: Number, default: 500 },
    height: { type: Number, default: 500 }
  },
  data () {
    return {
      controls: null,
      camera: null,
      instance: null,
      renderer: null,
      mixer: null,
      clock: null
    }
  },
  methods: {
    initScene () {
      this.clock = new THREE.Clock()
      this.instance = new THREE.Scene()
      this.instance.background = new THREE.Color(0xaabbcc)

      // should after camera and renderer init
      // this.setControl(this.camera, this.renderer.domElement)
    },
    initRenderer () {
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      this.$refs['container'].appendChild(this.renderer.domElement)
    },
    initControl () {
      ThreeOrbitControle(this.camera, this.renderer.domElement)
    },
    animate () {
      requestAnimationFrame(this.animate)
      if (this.mixer) {
        let delta = this.clock.getDelta()
        this.mixer.update(delta)
      }
      this.render()
    },
    render () {
      this.renderer.render(this.instance, this.camera)
    }

  },
  beforeMount () {
    console.log('scene before mount')
    this.initScene()
  },
  mounted () {
    console.log('scene mounted')
    this.initRenderer()
    this.initControl()
    this.animate()
    window.vue = this
  }

}
</script>

<style>
.three-scene-container{
  width: 100%;
  height: 100%;
}
.three-scene-container canvas{
  outline: none;
}
</style>
