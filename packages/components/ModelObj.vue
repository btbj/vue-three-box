<template>
  <div class="three-obj-model-instance"></div>
</template>

<script>
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js'
import { LoadingManager } from 'three/src/loaders/LoadingManager'
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
      let manager = new LoadingManager()
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
            .load(this.src, this.onLoad, this.onProgress, this.onError)
        }, () => {}, this.onError)
      } else {
        objLoader.load(this.src, this.onLoad, this.onProgress, this.onError)
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
    },
    onProgress (e) {
      // console.log('Load=>onProgress::', e)
      // this.loadingPercentage = Math.round(e.loaded * 100 / e.total)
      this.$emit('onProgress', e)
    },
    onError (e) {
      // console.log('Load=>onError::', e)
      this.$emit('onError', e)
    }
  },
  beforeMount () {
    this.initModel()
  }
}
</script>

<style>

</style>
