<template>
  <div class="three-fbx-model-instance"></div>
</template>

<script>
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

export default {
  name: 'ThreeFbxModel',
  inject: ['ThreeScene'],
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      instance: null
    }
  },
  methods: {
    initModel () {
      console.log('init initModel')
      let loader = new FBXLoader()
      loader.load(this.src, this.onLoad)
    },
    onLoad (object) {
      let ThreeScene = this.ThreeScene
      this.instance = object
      ThreeScene.scene.add(object)
    }
  },
  beforeMount () {
    this.initModel()
  }
}
</script>

<style>

</style>
