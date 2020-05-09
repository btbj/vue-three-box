<template>
  <div class="three-json-model-instance"></div>
</template>

<script>
import { ObjectLoader } from 'three'
import Object3D from '../mixins/Object3D'

export default {
  name: 'ThreeJsonModel',
  mixins: [Object3D],
  props: {
    src: { type: String, required: true }
  },
  methods: {
    initModel () {
      let loader = new ObjectLoader()
      loader.load(this.src, this.onLoad, this.onProgress, this.onError)
    },
    onLoad (object) {
      let ThreeScene = this.$parent
      this.instance = object
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
      console.log('Load=>onError::', e)
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
