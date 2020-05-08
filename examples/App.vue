<template>
  <div id="app">
    <!-- <vue-three-box class="container" src="/static/model/SambaDancing.fbx" fileType="fbx"></vue-three-box> -->
    <three-scene class="container">
      <three-cam type="perspective" :pos="[0,100,0]">
        <three-cam-light type="ambient" :pos="[0, 0, 0]"></three-cam-light>
        <three-cam-light type="directional" :pos="[270, 250, 280]" :intensity="1"></three-cam-light>
        <three-cam-light type="directional" :pos="[-114, 290, -62]" :intensity="0.4"></three-cam-light>
      </three-cam>
      <three-fbx-model src="/static/model/SambaDancing.fbx"></three-fbx-model>
    </three-scene>
  </div>
</template>

<script>
// import { VueThreeBox } from '../packages/index.js'
import { ThreeScene, ThreeCam, ThreeCamLight, ThreeFbxModel } from '../packages/index.js'

export default {
  name: 'app',
  components: { ThreeScene, ThreeCam, ThreeCamLight, ThreeFbxModel }
}
</script>

<style>
#app .container{
  height: 500px;
  width: 500px;
}
</style>
