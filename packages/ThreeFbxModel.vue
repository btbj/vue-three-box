<template>
  <div class="three-fbx-model-instance"></div>
</template>

<script>
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

export default {
  name: 'ThreeFbxModel',
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
      let ThreeScene = this.$parent
      this.instance = object
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
