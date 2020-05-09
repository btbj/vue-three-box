<template>
  <div class="three-obj-model-instance"></div>
</template>

<script>
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js'
import Object3D from '../mixins/Object3D'

export default {
  name: 'ThreeObjModel',
  mixins: [Object3D],
  props: {
    src: {
      type: String,
      required: true
    },
    mtlPath: { type: String },
    mtl: { type: String }
  },
  methods: {
    initModel () {
      let ThreeScene = this.$parent
      let manager = ThreeScene.manager
      manager.addHandler(/\.dds$/i, new DDSLoader())
      let objLoader = new OBJLoader(manager)
      let mtlLoader = new MTLLoader(manager)
      if (this.mtl) {
        let { mtlPath } = this
        let mtlSrc = this.mtl

        if (!this.mtlPath) {
          const result = /^(.*\/)([^/]*)$/.exec(this.mtl)

          if (result) {
            mtlPath = result[1]
            mtlSrc = result[2]
          }
        }

        if (mtlPath) {
          mtlLoader.setPath(mtlPath)
        }

        mtlLoader.load(mtlSrc, (materials) => {
          materials.preload()

          objLoader
            .setMaterials(materials)
            .load(this.src, this.onLoad, manager.onProgress, manager.onError)
        }, () => {}, manager.onError)
      } else {
        objLoader.load(this.src, this.onLoad, manager.onProgress, manager.onError)
      }
    },
    onLoad (object) {
      let ThreeScene = this.$parent
      this.instance = object
      if (this.animated) {
        this.setAnimation(object)
      }
      let { setObj3DProps } = this
      setObj3DProps()
      ThreeScene.instance.add(object)
    }
  },
  beforeMount () {
    this.initModel()
  }
}
</script>

<style>

</style>
