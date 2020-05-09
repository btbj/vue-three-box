<template>
  <div ref="container" class="three-scene-container">
    <slot/>
  </div>
</template>

<script>
import { Clock, Scene, Color, WebGLRenderer } from 'three'
import ThreeOrbitControle from '../utils/ThreeOrbitControle.js'
import { Object3D, LoadingManager } from '../mixins'

export default {
  name: 'ThreeScene',
  mixins: [Object3D, LoadingManager],
  props: {
    width: { type: Number, default: 500 },
    height: { type: Number, default: 500 },
    background: { type: Number, default: 0xffffff }
  },
  data () {
    return {
      controls: null,
      camera: null,
      renderer: null,
      mixer: null,
      clock: null
    }
  },
  methods: {
    initScene () {
      this.clock = new Clock()
      this.instance = new Scene()
      this.instance.background = new Color(this.background)
      let { setObj3DProps } = this
      setObj3DProps()
    },
    initRenderer () {
      this.renderer = new WebGLRenderer({ antialias: true })
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
    this.initScene()
  },
  mounted () {
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
