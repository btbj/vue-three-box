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
import { ThreeScene, ThreeCamera, ThreeLight, ThreeFbxModel } from '../packages/index.js'

export default {
  components: { ThreeScene, ThreeCamera, ThreeLight, ThreeFbxModel }
}
```

# Object3D[mixin]
>mixin, not a component
### Props
|name|type|default|other|
|---|---|---|---|
|position|Array|\[0,0,0\]|---|
|rotation|Array|\[0,0,0\]|in 'XYZ' order|
|scale|Array|\[1,1,1\]|---|
|invisible|Boolean|false|---|

### Usage
```
<three-fbx-model src="path/to/modelfile"
  :position=[0,100,0]
  :rotation=[0,90,0]
  :scale=[1,1,1]
  invisible></three-fbx-model>
```

# ThreeScene
>base container put other components in it

### Props
|name|type|default|other|
|---|---|---|---|
|width|Number|500||
|height|Number|500||
|background|Number|0xffffff|use hexadecimal|

### Events
|name|description|
|---|---|
|onLoad|triggered on load finish|
|onProgress|triggered during loading|
|onError|triggerd when error happend|

### Usage
```
<three-scene
  :width=500 :height=500
  :background=0xaabbcc></three-scene>
```


# ThreeCamera
>PerspectiveCamera component

### Props
|name|type|default|other|
|---|---|---|---|
|fov|Number|45||
|near|Number|1||
|far|Number|2000||

### Usage
```
<three-scene>
  <three-camera :fov=50
    :near=10 :far=1000></three-camera>
</three-scene>
```

# ThreeLight
>Light component

### Props
|name|type|default|other|
|---|---|---|---|
|type|String||required|
|color|Number|0xffffff|use hexadecimal|
|intensity|Number|1||

### Types
|type|LightType|
|---|---|
|ambient|AmbientLight|
|directional|DirectionalLight|
|hemisphere|HemisphereLight|
|point|PointLight|
|spot|SpotLight|

### Usage
```
<three-scene>
  <!-- add ambient light to the scene -->
  <three-light type="ambient"
    :color="0xaabbcc" :intensity="0.2"></three-light>

  <three-camera :fov=50
    :near=10 :far=1000>

    <!-- add two directional light to camera -->
    <three-light type="directional" :position="[270, 250, 280]" :intensity="1"></three-light>
    <three-light type="directional" :position="[-114, 290, -62]" :intensity="0.4"></three-light>

  </three-camera>
</three-scene>
```


# ThreeFbxModel
>Model component for .fbx file

### Props
|name|type|default|other|
|---|---|---|---|
|src|String||required|
|animated|Boolean|false||

### Usage
```
<three-scene>
   <!-- add fbx model to the scene and set to animated -->
    <three-fbx-model
      :position="[0,0,100]"
      src="/path/to/fbxFile"
      animated></three-fbx-model>
</three-scene>
```


