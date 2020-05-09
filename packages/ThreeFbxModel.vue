<template>
  <div class="three-fbx-model-instance"></div>
</template>

<script>
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import Object3D from './mixins/Object3D'

export default {
  name: 'ThreeFbxModel',
  mixins: [Object3D],
  props: {
    src: {
      type: String,
      required: true
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initModel () {
      let loader = new FBXLoader()
      loader.load(this.src, this.onLoad)
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
    setAnimation (object) {
      let ThreeScene = this.$parent
      let mixer = new THREE.AnimationMixer(object)

      var action = mixer.clipAction(object.animations[ 0 ])
      ThreeScene.mixer = mixer
      action.play()
    }
  },
  beforeMount () {
    this.initModel()
  }
}
</script>

<style>

</style>
