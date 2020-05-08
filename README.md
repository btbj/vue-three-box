# vue-three-box

## install
```
npm install vue-three-box
```

### global use
```
// src/main.js
import VueThreeBox from 'vue-three-box'
Vue.use(VueThreeBox)
```

### local use
```
<template>
  <div id="app">
    <three-scene class="container" :width="800" :height="700">

      <!-- add ambient light to the scene -->
      <three-light type="ambient" :pos="[0, 0, 0]"></three-light>
      <!-- <three-light type="point" :pos="[0, 100, 100]"></three-light> -->
      <!-- <three-light type="spot" :pos="[0, 1000, 100]"></three-light> -->

      <!-- add perspective camera to the scene -->
      <three-cam :pos="[0,100,0]">

        <!-- add two directional light to camera -->
        <three-light type="directional" :pos="[270, 250, 280]" :intensity="1"></three-light>
        <three-light type="directional" :pos="[-114, 290, -62]" :intensity="0.4"></three-light>

      </three-cam>

      <!-- add fbx model to the scene and set to animated -->
      <three-fbx-model src="/static/model/SambaDancing.fbx" animated></three-fbx-model>

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
```