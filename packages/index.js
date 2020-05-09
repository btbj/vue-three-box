import ThreeScene from './components/Scene.vue'
import ThreeCamera from './components/Camera.vue'
import ThreeLight from './components/Light.vue'
import ThreeFbxModel from './components/ModelFbx.vue'
import ThreeObjModel from './components/ModelObj.vue'
import ThreeJsonModel from './components/ModelJson.vue'

const components = [
  ThreeScene,
  ThreeCamera,
  ThreeLight,
  ThreeFbxModel,
  ThreeObjModel,
  ThreeJsonModel
]
/*
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ThreeScene,
  ThreeCamera,
  ThreeLight,
  ThreeFbxModel,
  ThreeObjModel,
  ThreeJsonModel
}
export {
  install,
  ThreeScene,
  ThreeCamera,
  ThreeLight,
  ThreeFbxModel,
  ThreeObjModel,
  ThreeJsonModel
}
