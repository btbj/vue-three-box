<template>
  <div id="app">
    <three-scene class="container"
      :width="800" :height="700"
      :background="0xaabbcc">

      <!-- add ambient light to the scene -->
      <three-light type="ambient" :position="[0, 0, 0]"></three-light>

      <!-- add perspective camera to the scene -->
      <three-cam :position="[0,100,0]">

        <!-- add two directional light to camera -->
        <three-light type="directional" :position="[270, 250, 280]" :intensity="1"></three-light>
        <three-light type="directional" :position="[-114, 290, -62]" :intensity="0.4"></three-light>

      </three-cam>

      <!-- add fbx model to the scene and set to animated -->
      <three-fbx-model src="/static/model/SambaDancing.fbx"></three-fbx-model>

      <!-- <three-obj-model src="/static/model/male02.obj" mtl="/static/model/male02_dds.mtl"></three-obj-model> -->

      <!-- <three-json-model src="/static/model/teapot.json"></three-json-model> -->

    </three-scene>
  </div>
</template>

<script>
import { ThreeScene, ThreeCam, ThreeLight, ThreeFbxModel } from '../packages/index.js'

export default {
  name: 'app',
  components: { ThreeScene, ThreeCam, ThreeLight, ThreeFbxModel }
}
</script>

<style>
#app .container{
  height: 700px;
  width: 800px;
}
</style>
