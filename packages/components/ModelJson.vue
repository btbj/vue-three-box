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
      let ThreeScene = this.$parent
      let manager = ThreeScene.manager
      let loader = new ObjectLoader()
      loader.load(this.src, this.onLoad, manager.onProgress, manager.onError)
    },
    onLoad (object) {
      let ThreeScene = this.$parent
      this.instance = object
      let { setObj3DProps } = this
      setObj3DProps()
      ThreeScene.instance.add(object)
      ThreeScene.manager.onLoad(object)
    }
  },
  beforeMount () {
    this.initModel()
  }
}
</script>

<style>

</style>
