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
      scene: null,
      renderer: null,
      object: null
    }
  },
  provide () {
    return {
      ThreeScene: this
    }
  },
  methods: {
    init () {
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xaabbcc)

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
      this.render()
    },
    render () {
      this.renderer.render(this.scene, this.camera)
    }

  },
  beforeMount () {
    console.log('scene before mount')
    this.init()
  },
  mounted () {
    console.log('scene mounted')
    this.initRenderer()
    this.initControl()
    console.log(this.renderer)
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
