<template>
  <div ref="container" class="test-3d-container"></div>
</template>

<script>
import * as THREE from 'three'

import { Loader, Control, Light } from './mixins'

export default {
  name: 'VueThreeBox',
  mixins: [ Loader, Control, Light ],
  data () {
    return {
      controls: null,
      camera: null,
      scene: null,
      renderer: null,
      object: null
    }
  },
  methods: {
    init () {
      // get dom size
      let rect = this.$refs['container'].getBoundingClientRect()
      let width = rect.width
      let height = rect.height

      this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000)
      this.camera.position.set(0, 200, 600)

      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xefefef)

      this.setLights(THREE, this.scene, this.camera)

      this.setModel()

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(width, height)
      this.$refs['container'].appendChild(this.renderer.domElement)

      // should after camera and renderer init
      this.setControl(this.camera, this.renderer.domElement)
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.render()
    },
    render () {
      this.renderer.render(this.scene, this.camera)
    }

  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>

<style>
.test-3d-container{
  width: 100%;
  height: 100%;
}
.test-3d-container canvas{
  outline: none;
}
</style>
